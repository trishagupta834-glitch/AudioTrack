# AudioTrack - Real-Time Multi-Device Listening Room

AudioTrack is a full-stack web application designed for synchronized music playback across multiple devices, whether on the same Wi-Fi network or in different cities worldwide.

---

## 🚀 Quick Start Guide

### Option A: Local & Home Wi-Fi (Same Network)
1. Double-click `start_all.bat`.
2. Open `http://localhost:5000` in your browser.
3. Friends on the same Wi-Fi can join by opening `http://<YOUR_IP>:5000` (e.g. `http://10.102.13.254:5000`).

### Option B: Worldwide / Multi-City (Different Wi-Fi / Cities)
1. Double-click `start_all.bat`.
2. Double-click `start_internet_tunnel.bat` to generate a free, public HTTPS link (e.g. `https://your-room.loca.lt`).
3. Send this link to your friends in any city.

---

## 🎧 How to Use Room Sync
1. Go to the **Profile** tab in AudioTrack.
2. Under **Host a Room**, click **CREATE ROOM** to generate a 6-digit room code.
3. Friends enter the code under **Join a Room** and click **JOIN ROOM**.
4. When the host plays, pauses, seeks, or sends emoji reactions, all connected devices update in real time with sub-25ms latency over WebSockets!

---

## 🧪 Running Automated QA Tests
To verify synchronization across multiple simulated devices:
```bash
node test_deep_sync.js
```
All 6 test phases (Join Handshake, Play Sync, Pause Sync, Seek Sync, Reactions, Chat) will run and report status.

---

## Deploying to Render

The repository includes a Render Blueprint in `render.yaml`. It deploys the Node gateway (which serves the frontend and current API) and creates a PostgreSQL database for user and playlist state. The separate Spring Boot project in `backend/` is not part of this Blueprint because the current frontend uses the Node gateway API.

1. Push this project to a GitHub repository.
2. In Render, choose **New + → Blueprint**, connect the repository, and apply the `render.yaml` Blueprint.
3. Wait for the `audiotrack` service health check to pass. Render assigns a temporary `*.onrender.com` address.
4. Once you register `audiotrack.com`, add `www.audiotrack.com` as a custom domain in the Render service settings and add the DNS records Render provides at your domain registrar.
5. After Render verifies DNS and provisions TLS, open `https://www.audiotrack.com`.

The Blueprint uses Render's free web-service and PostgreSQL tiers. Free web services can sleep when idle, and free PostgreSQL databases expire 30 days after creation; upgrade the database to a paid plan before relying on it for durable production data. Room playback synchronization is live SSE state and is not stored between server restarts.

The current gateway is a demo implementation: authentication tokens are not production-grade, and several APIs are not access-controlled. Do not use real or reused passwords until authentication and authorization have been hardened.
