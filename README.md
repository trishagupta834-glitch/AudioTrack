# 🎧 AudioTrack

### Find your sound. Set the mood. Share the moment.

AudioTrack is a browser-based music discovery and listening-room experience built for people who want music to feel social. Explore tracks, make playlists, shape a profile around your taste, and tune in with friends from different devices.

## ✨ Features

- **Discover music:** Browse featured tracks and playlists, and search the iTunes catalog for music and previews.
- **Make it yours:** Create an account, personalize your profile, save preferences, and build playlists.
- **Listen together:** Create or join a room with a shareable code and send live playback updates to other listeners.
- **Pick a vibe:** Explore mood-inspired themes and recommendations to match the moment.
- **Find a devotional soundtrack:** Discover bhajans, chants, worship, and devotional music searches spanning multiple languages and traditions.
- **Stay connected:** Find other listeners, connect with friends, and share musical dedications.

## 🚀 What makes AudioTrack different

- **A shared listening moment:** Room codes make it easy to bring friends into the same listening space, wherever they are.
- **Your music, your atmosphere:** Mood-led themes make the player feel like a personal space, not just a list of tracks.
- **Music meets community:** Profiles, playlists, connections, and dedications bring social discovery into the listening experience.
- **One place to press play:** Music discovery, personal libraries, and live room updates come together in a single web app.

## 🛠️ Technology

- **Frontend:** HTML, CSS, and vanilla JavaScript.
- **Application server:** Node.js built-in HTTP server, serving the frontend and application API.
- **Live room updates:** Server-sent events (SSE).
- **Persistent data:** PostgreSQL, accessed from Node.js using `pg`.
- **Music search and previews:** iTunes Search API and its linked preview sources.
- **Hosting:** Render Blueprint, defined in [`render.yaml`](./render.yaml).

## 🌐 Listen to AudioTrack

Open the live app: **[audiotrack.onrender.com](https://audiotrack.onrender.com)**

## 🔒 Security note

AudioTrack's current gateway authentication and authorization are demo-grade and have not been hardened for sensitive or production use. Do not use real or reused passwords, and avoid storing sensitive information in the app.

## 💻 Run locally

Requirements: Node.js 20 or newer.

```powershell
npm ci
npm start
```

Then open [http://localhost:5000](http://localhost:5000). To persist local data, set `DATABASE_URL` to a PostgreSQL connection string before starting. Without it, the gateway uses in-memory data for local development.

On Windows, `start_all.bat` or `start_all.ps1` can also start the gateway.
