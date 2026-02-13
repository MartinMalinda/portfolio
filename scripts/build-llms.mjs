import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const outputRootPath = path.join(projectRoot, "llms-full.txt");
const distClientDir = path.join(distDir, "client");
const outputDistPath = path.join(distClientDir, "llms-full.txt");
const htmlExtensions = new Set([".html"]);
const excludedBasenames = new Set([
  "404.html",
  "500.html",
  "_error.html",
  "_error.page.html",
]);

async function ensurePandoc() {
  try {
    await execFileAsync("pandoc", ["--version"]);
  } catch (error) {
    console.error("pandoc is required to build llms-full.txt.");
    console.error(
      "Install it from https://pandoc.org/installing.html and retry.",
    );
    process.exitCode = 1;
  }
}

async function listHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await listHtmlFiles(entryPath);
      files.push(...nested);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (!htmlExtensions.has(path.extname(entry.name))) {
      continue;
    }

    if (excludedBasenames.has(entry.name)) {
      continue;
    }

    if (entry.name.startsWith("_")) {
      continue;
    }

    files.push(entryPath);
  }

  return files;
}

function toRoute(distFilePath) {
  const relativePath = path.relative(distDir, distFilePath);
  const normalized = relativePath.split(path.sep).join("/");

  if (normalized === "index.html") {
    return "/";
  }

  if (normalized.endsWith("/index.html")) {
    return `/${normalized.replace(/\/index\.html$/, "")}`;
  }

  if (normalized.endsWith(".html")) {
    return `/${normalized.replace(/\.html$/, "")}`;
  }

  return `/${normalized}`;
}

async function convertHtmlToMarkdown(filePath) {
  const { stdout } = await execFileAsync("pandoc", [
    "--from=html",
    "--to=gfm-raw_html",
    "--wrap=none",
    filePath,
  ]);

  let output = stdout.trim();
  return postProcessLlms(output);
}

function postProcessLlms(markdown) {
  // Replace: ![](data:image/svg+xml;base64,...)<label>
  // With:   <label>
  // Handles optional whitespace between ) and label.
  return markdown.replace(
    /!\[\]\(data:image\/svg\+xml(?:;base64)?,[^\)]*\)\s*/g,
    "",
  );
}

async function buildLlmsFile() {
  const distStats = await stat(distDir).catch(() => null);
  if (!distStats || !distStats.isDirectory()) {
    console.error("dist directory not found. Run the build first.");
    process.exitCode = 1;
    return;
  }

  const htmlFiles = await listHtmlFiles(distDir);
  htmlFiles.sort((a, b) => a.localeCompare(b));

  const sections = [];
  for (const filePath of htmlFiles) {
    const route = toRoute(filePath);
    const markdown = await convertHtmlToMarkdown(filePath);
    if (!markdown) {
      continue;
    }

    sections.push(`# ${route}\n\n${markdown}`);
  }

  const output = `${sections.join("\n\n")}\n`;
  await writeFile(outputRootPath, output, "utf8");
  await writeFile(outputDistPath, output, "utf8");
}

await ensurePandoc();
if (process.exitCode === 1) {
  process.exit(process.exitCode);
}

await buildLlmsFile();
