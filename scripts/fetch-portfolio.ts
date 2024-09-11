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
  const imagesDirPath = path.join(__dirname, '../public/images-portfolio'); // Updated to ../public/images

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

  // Function to check if the image needs to be downloaded
  function shouldDownloadImage(item, existingItem, imageField, imageIndex = 0) {
    return true;

    if (!existingItem) return true; // No existing data, so download the image
    const existingImageId = existingItem.fields[imageField]?.[imageIndex]?.id;
    const newImageId = item.fields[imageField]?.[imageIndex]?.id;
    return newImageId !== existingImageId; // Return true if IDs are different
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

    const slugFilePath = path.join(dataDirPath, `${slug}.json`);
    let existingItem = null;
    if (fs.existsSync(slugFilePath)) {
      existingItem = JSON.parse(fs.readFileSync(slugFilePath, 'utf-8'));
    }

    slugs.push(slug); // Add the slug to the slugs array

    // Save item to [Slug].json
    fs.writeFileSync(slugFilePath, JSON.stringify(item), 'utf-8');
    console.log(`Saved item data to ${slugFilePath}`);

    // Download the main image if it exists
    if (imageUrl && shouldDownloadImage(item, existingItem, 'Image')) {
      const imageFilePath = path.join(imagesDirPath, `${id}.png`); // Saving to ../public/images
      console.log(`Downloading main image for item ${id}...`);
      try {
        await downloadImage(imageUrl, imageFilePath);
        console.log(`Main image saved as ${imageFilePath}`);
      } catch (err) {
        console.error(`Failed to download main image for item ${id}: ${err.message}`);
      }
    } else if (existingItem && imageUrl) {
      console.log(`Main image for item ${id} is up-to-date, skipping download.`);
    } else {
      console.log(`No main image found for item ${id}`);
    }

    // Download the secondary images from the Images field if they exist
    const secondaryImages = item.fields.Images || [];
    for (let i = 0; i < secondaryImages.length; i++) {
      const secondaryImageUrl = secondaryImages[i].url;
      const secondaryImageId = secondaryImages[i].id;
      if (secondaryImageUrl && shouldDownloadImage(item, existingItem, 'Images', i)) {
        const secondaryImageFilePath = path.join(imagesDirPath, `${secondaryImageId}.png`); // Save each secondary image
        console.log(`Downloading secondary image ${i} for item ${id}...`);
        try {
          await downloadImage(secondaryImageUrl, secondaryImageFilePath);
          console.log(`Secondary image ${i} saved as ${secondaryImageFilePath}`);
        } catch (err) {
          console.error(`Failed to download secondary image ${i} for item ${id}: ${err.message}`);
        }
      } else if (existingItem && secondaryImageUrl) {
        console.log(`Secondary image ${i} for item ${id} is up-to-date, skipping download.`);
      } else {
        console.log(`No secondary image ${i} found for item ${id}`);
      }
    }
  }

  // Save portfolio.json with the list of slugs
  const portfolioFilePath = path.join(dataDirPath, 'portfolio.json');
  fs.writeFileSync(portfolioFilePath, JSON.stringify(slugs), 'utf-8');
  console.log(`Saved portfolio.json with slugs: ${portfolioFilePath}`);
})();
