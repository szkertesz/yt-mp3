import youtubedl from 'youtube-dl-exec';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

// Dynamically get Downloads folder path
const downloadsFolder = path.join(os.homedir(), 'Downloads');

// Get YouTube URL from command-line argument
const videoUrl = process.argv[2];

if (!videoUrl) {
  console.error('❌ Please provide a YouTube video URL.');
  process.exit(1);
}

try {
const output = await youtubedl(videoUrl, {
  cookiesFromBrowser: "chrome",
  extractAudio: true,
  audioFormat: 'mp3',
  output: path.join(downloadsFolder, '%(title)s.%(ext)s'),
  'extractor-args': 'youtube:player_client=web',
  jsRuntimes: 'node',
});

  console.log(`✅ MP3 saved in your Downloads folder: ${downloadsFolder}`);
} catch (error) {
  console.error('❌ Error:', error);
}

// node extract.mjs "https://www.youtube.com/watch?v=abc123"
