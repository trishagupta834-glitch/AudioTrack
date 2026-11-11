# AudioTrack

AudioTrack is a browser-based music discovery and listening-room app. It combines a music-player interface with social profiles, playlists, and live room events so friends can share what they are listening to across devices.

## What it does

- Browse featured tracks and playlists, and search music using the iTunes Search API.
- Create an account, sign in, and customize a music profile.
- Create playlists and save profile preferences.
- Create or join a listening room with a room code and share playback updates with other connected listeners.
- Explore mood-based themes and music recommendations.

Audio previews and catalog search use third-party music services. Availability of individual tracks depends on those services and regional access.

## Technology

- **Frontend:** HTML, CSS, and vanilla JavaScript.
- **Gateway and current application API:** Node.js built-in HTTP server, with server-sent events (SSE) for room updates.
- **Persistent data for the Render deployment:** PostgreSQL, accessed from Node.js using `pg`.
- **Additional backend:** A separate Spring Boot API exists in `backend/`; it is not currently connected to the deployed frontend/gateway.

## Run locally

Requirements: Node.js 20 or newer.

```powershell
npm ci
npm start
```

Open [http://localhost:5000](http://localhost:5000). To use persistent data locally, set `DATABASE_URL` to a PostgreSQL connection string before starting. Without it, the gateway uses in-memory data for local development.

On Windows, `start_all.bat` or `start_all.ps1` can also start the gateway.

## Deploy to Render

The root `render.yaml` Blueprint defines a Node web service and PostgreSQL database. The live service is available at [https://audiotrack.onrender.com](https://audiotrack.onrender.com).

To create or update the Render resources, connect this GitHub repository to Render using **New + → Blueprint**, then apply the Blueprint. Commits pushed to the connected branch can trigger automatic deploys.

To use `www.audiotrack.com`, register the domain, add it under the Render service's **Settings → Custom Domains**, then configure the DNS records Render provides at the domain registrar. Render must verify the DNS before the custom URL and TLS certificate are active.

### Render free-tier notes

- Free web services may spin down when idle, so the first request after inactivity can be delayed.
- Free PostgreSQL databases expire after 30 days. Upgrade the database before relying on it for durable production data.
- Listening-room playback state is live server memory and is not retained across restarts.

## Tests

Run the included frontend theme and asset checks with:

```powershell
node test_lofi_ui.js
```

## Important security note

The current gateway authentication and authorization are demo-grade. Do not use real or reused passwords, and do not treat the application as production-secure until authentication, authorization, and account protections have been reviewed and hardened.
