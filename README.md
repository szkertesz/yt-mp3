# yt-mp3

Download a YouTube video's audio as an MP3 in the current user's `Downloads` folder.

## Requirements

- Node.js 20 or newer
- pnpm
- Python 3.9 or newer
- FFmpeg (`ffmpeg` and `ffprobe` on `PATH`)

## Install and run

```sh
corepack enable
pnpm install
pnpm start -- "https://www.youtube.com/watch?v=VIDEO_ID"
```

For videos that require a signed-in session, set `YTDLP_COOKIES_FROM_BROWSER` to a supported browser name, for example:

```sh
YTDLP_COOKIES_FROM_BROWSER=chrome pnpm start -- "https://www.youtube.com/watch?v=VIDEO_ID"
```

Browser cookies are read from the local user profile, so that browser must be installed and signed in on the machine running the command.