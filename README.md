# yt-mp3

Download a YouTube video's audio as an MP3 in the current user's `Downloads` folder.

## Requirements

- Node.js 20 or newer
- pnpm 9.13.2, as declared in `package.json`
- Python 3.9 or newer; `youtube-dl-exec` checks for it during installation
- FFmpeg with `ffprobe` available on `PATH` for MP3 extraction
- Deno may be needed if yt-dlp reports that a JavaScript runtime is required

The `youtube-dl-exec` install hook fetches the latest yt-dlp executable from GitHub and places it inside the dependency. No system-installed yt-dlp or hard-coded binary path is needed. The executable itself is updated when dependencies are freshly installed; `pnpm-lock.yaml` locks the Node.js dependency versions, not the yt-dlp release fetched by that hook. A pnpm package extension supplies `debug-logfmt`'s undeclared `debug` dependency, which its install hook requires.

## Install and run

```sh
corepack enable
pnpm install
pnpm start -- "https://www.youtube.com/watch?v=VIDEO_ID"
```

The script uses the default public-video access path. For videos requiring an authenticated browser session, set `YTDLP_COOKIES_FROM_BROWSER` to a browser supported by yt-dlp, for example:

```sh
YTDLP_COOKIES_FROM_BROWSER=chrome pnpm start -- "https://www.youtube.com/watch?v=VIDEO_ID"
```

Browser cookies are read from the local user profile, so that browser must be installed and signed in on the machine running the command.