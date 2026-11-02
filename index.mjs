import os from 'os';
import path from 'path';
import ytdl from 'youtube-dl-exec';

// Dynamically get Downloads folder path
const downloadsFolder = path.join(os.homedir(), 'Downloads');

// Get YouTube URL from command-line argument
const videoUrl = process.argv[2];

if (!videoUrl) {
  console.error('❌ Please provide a YouTube video URL.');
  process.exit(1);
}

try {
  await ytdl(videoUrl, {
    extractAudio: true,
    audioFormat: 'mp3',
    output: path.join(downloadsFolder, '%(title)s.%(ext)s'),
    ...(process.env.YTDLP_COOKIES_FROM_BROWSER
      ? { cookiesFromBrowser: process.env.YTDLP_COOKIES_FROM_BROWSER }
      : {}),
    // yt-dlp --remote-components ejs:github --cookies-from-browser chrome --extract-audio --audio-format mp3 --output "$HOME/Downloads/%(title)s.%(ext)s" "https://www.youtube.com/watch?v=Wf_1Y2UYPXQ"
    remoteComponents: 'ejs:github',
  });

  console.log(`✅ MP3 saved in your Downloads folder: ${downloadsFolder}`);
} catch (error) {
  console.error('❌ Error:', error);
  process.exitCode = 1;
}
