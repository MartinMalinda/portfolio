import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';
import { promisify } from 'util';

const streamPipeline = promisify(pipeline); // Promisify pipeline for async/await usage

(async () => {
  const response = await fetch('https://eokojvyt64wgqly.m.pipedream.net/');
  const items = await response.json();

  // Get the current file's directory
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const dataDirPath = path.join(__dirname, '../data');
  const imagesDirPath = path.join(__dirname, '../public/images'); // Updated to ../public/images

  // Check if the directories exist, if not, create them
  if (!fs.existsSync(dataDirPath)) {
    fs.mkdirSync(dataDirPath, { recursive: true });
  }

  if (!fs.existsSync(imagesDirPath)) {
    fs.mkdirSync(imagesDirPath, { recursive: true });
  }

  // Array to store slugs for the portfolio.json
  const slugs: string[] = [];

  // Function to download and save images
  async function downloadImage(url: string, filePath: string) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);

    return streamPipeline(res.body, fs.createWriteStream(filePath));
  }

  // Loop through each item, save each by slug, and download the images
  for (const item of items) {
    const id = item.id;
    const slug = item.fields.Slug; // Use the Slug field
    const imageUrl = item.fields.Image?.[0]?.url;

    if (!slug) {
      console.log(`No slug found for item ${id}, skipping...`);
      continue;
    }

    slugs.push(slug); // Add the slug to the slugs array

    // Save item to [Slug].json
    const slugFilePath = path.join(dataDirPath, `${slug}.json`);
    fs.writeFileSync(slugFilePath, JSON.stringify(item), 'utf-8');
    console.log(`Saved item data to ${slugFilePath}`);

    // Download the image if exists
    if (imageUrl) {
      const imageFilePath = path.join(imagesDirPath, `${id}.png`); // Saving to ../public/images
      console.log(`Downloading image for item ${id}...`);
      try {
        await downloadImage(imageUrl, imageFilePath);
        console.log(`Image saved as ${imageFilePath}`);
      } catch (err) {
        console.error(`Failed to download image for item ${id}: ${err.message}`);
      }
    } else {
      console.log(`No image found for item ${id}`);
    }
  }

  // Save portfolio.json with the list of slugs
  const portfolioFilePath = path.join(dataDirPath, 'portfolio.json');
  fs.writeFileSync(portfolioFilePath, JSON.stringify(slugs), 'utf-8');
  console.log(`Saved portfolio.json with slugs: ${portfolioFilePath}`);
})();
