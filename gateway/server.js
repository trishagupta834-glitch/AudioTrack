// Node.js Native HTTP & SSE Server for AudioTrack (Zero external dependencies)
// Serves:
// 1. Static frontend files
// 2. Full REST APIs: /api/tracks, /api/playlists, /api/auth/*, /api/users/*
// 3. Real-time Multi-Device Event Hub: /api/sync/:roomId

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

const PORT = Number(process.env.PORT) || 5000;
const FRONTEND_DIR = path.resolve(__dirname, '..', 'frontend');
const DATABASE_URL = process.env.DATABASE_URL;
let pool = null;

// In-Memory Database
const mockTracks = [
    {
        id: '1',
        title: 'Midnight City',
        artist: 'M83',
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/74/a2/d3/74a2d361-c6bb-9880-a8d1-d999833d2891/mzaf_15783493292556356203.plus.aac.p.m4a',
        url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/74/a2/d3/74a2d361-c6bb-9880-a8d1-d999833d2891/mzaf_15783493292556356203.plus.aac.p.m4a',
        artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/73/c6/ed/73c6edb3-924c-27f0-28f8-1470906d6780/cover.jpg/600x600bb.jpg',
        tags: ['electronic', 'new_release']
    },
    {
        id: '2',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/73/ca/1273ca46-233a-5331-189b-25ac1d656533/mzaf_976341070785891411.plus.aac.p.m4a',
        url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/73/ca/1273ca46-233a-5331-189b-25ac1d656533/mzaf_976341070785891411.plus.aac.p.m4a',
        artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg',
        tags: ['pop', 'trending']
    },
    {
        id: '3',
        title: 'Starboy',
        artist: 'The Weeknd ft. Daft Punk',
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a',
        url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a',
        artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg',
        tags: ['pop', 'r&b']
    },
    {
        id: '4',
        title: 'Bad Guy',
        artist: 'Billie Eilish',
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c3/87/1f/c3871f7e-3260-d615-1c66-5fdca2c3a48f/mzaf_10721331211699880949.plus.aac.p.m4a',
        url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c3/87/1f/c3871f7e-3260-d615-1c66-5fdca2c3a48f/mzaf_10721331211699880949.plus.aac.p.m4a',
        artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/600x600bb.jpg',
        tags: ['alternative', 'pop']
    },
    {
        id: '5',
        title: 'Until I Found You',
        artist: 'Stephen Sanchez',
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/53/82/c1/5382c1d4-ddba-aa2b-90df-57268895fac9/mzaf_8926201202931541051.plus.aac.p.m4a',
        url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/53/82/c1/5382c1d4-ddba-aa2b-90df-57268895fac9/mzaf_8926201202931541051.plus.aac.p.m4a',
        artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/64/d2/c5/64d2c511-67f4-ae09-5153-d39c3da413a3/21UMGIM75467.rgb.jpg/600x600bb.jpg',
        tags: ['romantic', 'lofi']
    },
    {
        id: '6',
        title: "God's Plan",
        artist: 'Drake',
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c6/4a/be/c64abe74-adb4-cff5-005d-0fab3d72a806/mzaf_10276154697254415719.plus.aac.p.m4a',
        url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c6/4a/be/c64abe74-adb4-cff5-005d-0fab3d72a806/mzaf_10276154697254415719.plus.aac.p.m4a',
        artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6d/8f/bb6d8f67-6d04-10b5-dd62-eb5809ac54fc/00602567879152.rgb.jpg/600x600bb.jpg',
        tags: ['hip-hop', 'trending']
    },
    {
        id: '7',
        title: 'Super Shy',
        artist: 'NewJeans',
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a0/0c/47/a00c4790-3bbe-c669-fc8b-d8779508b512/mzaf_4170831274187670095.plus.aac.p.m4a',
        url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a0/0c/47/a00c4790-3bbe-c669-fc8b-d8779508b512/mzaf_4170831274187670095.plus.aac.p.m4a',
        artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/63/e5/e2/63e5e2e4-829b-924d-a1dc-8058a1d69bd4/196922462702_Cover.jpg/600x600bb.jpg',
        tags: ['k-pop', 'dance']
    },
    {
        id: '8',
        title: 'Goosebumps',
        artist: 'Travis Scott',
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f0/60/39/f060399b-690f-2e55-7013-5530cd616d95/mzaf_6001308391779304655.plus.aac.p.m4a',
        url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f0/60/39/f060399b-690f-2e55-7013-5530cd616d95/mzaf_6001308391779304655.plus.aac.p.m4a',
        artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b8/e5/27/b8e527c8-aaf4-c7b7-5562-c479458ed7d9/886446092645.jpg/600x600bb.jpg',
        tags: ['hip-hop', 'trap']
    }
];

const mockPlaylists = [
    {
        id: 'pl1',
        name: 'Late Night Cyberpunk',
        description: 'Synthwave & futuristic beats for late night vibes',
        artUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
        tracks: mockTracks
    },
    {
        id: 'pl2',
        name: 'Morning Coffee Chill',
        description: 'Warm acoustic and lofi melodies to start your morning',
        artUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop',
        tracks: [mockTracks[2], mockTracks[5], mockTracks[1], mockTracks[0], mockTracks[3], mockTracks[4]]
    },
    {
        id: 'pl3',
        name: 'Chill Mix',
        description: 'Laid-back vibes and relaxing lo-fi beats',
        artUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
        tracks: [mockTracks[2], mockTracks[0], mockTracks[5], mockTracks[3], mockTracks[1], mockTracks[4]]
    },
    {
        id: 'pl4',
        name: 'Focus Vibes',
        description: 'Deep focus instrumentals for productive flow and study',
        artUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop',
        tracks: [mockTracks[2], mockTracks[0], mockTracks[1], mockTracks[3], mockTracks[5], mockTracks[4]]
    },
    {
        id: 'pl5',
        name: 'On Repeat',
        description: 'Your most played favorites and top heavy rotation tracks',
        artUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=400&auto=format&fit=crop',
        tracks: [mockTracks[1], mockTracks[3], mockTracks[4], mockTracks[0], mockTracks[2], mockTracks[5]]
    },
    {
        id: 'pl6',
        name: 'Top Songs Global',
        description: 'The hottest tracks trending across the world right now',
        artUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&auto=format&fit=crop',
        tracks: mockTracks
    },
    {
        id: 'pl7',
        name: 'Popular Songs',
        description: 'Most viral and streamed hits right now',
        artUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop',
        tracks: [mockTracks[1], mockTracks[3], mockTracks[4], mockTracks[5], mockTracks[0], mockTracks[2]]
    },
    {
        id: 'pl8',
        name: 'Viral Hits',
        description: 'Internet anthems and chart-toppers trending everywhere',
        artUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop',
        tracks: [mockTracks[1], mockTracks[4], mockTracks[0], mockTracks[3], mockTracks[2], mockTracks[5]]
    },
    {
        id: 'pl9',
        name: 'Liked Songs',
        description: 'Your personal collection of favorite tracks',
        artUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop',
        tracks: mockTracks
    }
];

const usersDb = new Map();
usersDb.set('DJ_Glitch', {
    username: 'DJ_Glitch',
    password: 'password123',
    bio: 'Resident DJ @ AudioTrack 🎧',
    bioSong: {
        title: 'Midnight City',
        artist: 'M83',
        url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a',
        artUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=600&auto=format&fit=crop'
    },
    connections: [],
    connectionRequests: [],
    sentConnectionRequests: [],
    followedArtists: [],
    pinnedPlaylists: [],
    playlistPlayCounts: {},
    createdPlaylists: [],
    dedications: []
});

// Seed searchable community users (all start with real, zero pre-defined mock connections)
usersDb.set('Alex', {
    username: 'Alex',
    password: 'password123',
    bio: 'Synthesizer lover & indie curator 🎹',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alex',
    connections: [],
    connectionRequests: [],
    sentConnectionRequests: [],
    followedArtists: [],
    pinnedPlaylists: [],
    playlistPlayCounts: {},
    createdPlaylists: [],
    dedications: []
});
usersDb.set('Sammy', {
    username: 'Sammy',
    password: 'password123',
    bio: 'Hyperpop and coffee enthusiast ⚡',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sammy',
    connections: [],
    connectionRequests: [],
    sentConnectionRequests: [],
    followedArtists: [],
    pinnedPlaylists: [],
    playlistPlayCounts: {},
    createdPlaylists: [],
    dedications: []
});
usersDb.set('Charlie', {
    username: 'Charlie',
    password: 'password123',
    bio: 'Lofi producer from Tokyo 🌸',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Charlie',
    connections: [],
    connectionRequests: [],
    sentConnectionRequests: [],
    followedArtists: [],
    pinnedPlaylists: [],
    playlistPlayCounts: {},
    createdPlaylists: [],
    dedications: []
});
usersDb.set('CyberSamurai', {
    username: 'CyberSamurai',
    password: 'password123',
    bio: 'Neon dreams & night drives 🌃',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=CyberSamurai',
    connections: [],
    connectionRequests: [],
    sentConnectionRequests: [],
    followedArtists: [],
    pinnedPlaylists: [],
    playlistPlayCounts: {},
    createdPlaylists: [],
    dedications: []
});
usersDb.set('NeonRider', {
    username: 'NeonRider',
    password: 'password123',
    bio: 'Synthwave road trips 🏎️',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=NeonRider',
    connections: [],
    connectionRequests: [],
    sentConnectionRequests: [],
    followedArtists: [],
    pinnedPlaylists: [],
    playlistPlayCounts: {},
    createdPlaylists: [],
    dedications: []
});
usersDb.set('LofiGirl', {
    username: 'LofiGirl',
    password: 'password123',
    bio: 'Chilling & studying 24/7 🎧',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=LofiGirl',
    connections: [],
    connectionRequests: [],
    sentConnectionRequests: [],
    followedArtists: [],
    pinnedPlaylists: [],
    playlistPlayCounts: {},
    createdPlaylists: [],
    dedications: []
});

// SSE Subscribers & State for Real-Time Multi-Device Sync
const roomSubscribers = new Map(); // roomCode -> Set of response streams
const roomStates = new Map();      // roomCode -> { currentTrack, ... }

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(password, salt, 64).toString('hex');
    return `scrypt$${salt}$${hash}`;
}

function verifyPassword(storedPassword, password) {
    if (!storedPassword) return false;

    const [algorithm, salt, storedHash] = storedPassword.split('$');
    if (algorithm !== 'scrypt' || !salt || !storedHash) {
        return storedPassword === password;
    }

    const actualHash = crypto.scryptSync(password, salt, 64);
    const expectedHash = Buffer.from(storedHash, 'hex');
    return actualHash.length === expectedHash.length
        && crypto.timingSafeEqual(actualHash, expectedHash);
}

async function saveUser(username, user) {
    usersDb.set(username, user);
    if (pool) {
        await pool.query(
            `INSERT INTO gateway_users (username, data)
             VALUES ($1, $2)
             ON CONFLICT (username) DO UPDATE SET data = EXCLUDED.data`,
            [username, user]
        );
    }
}

async function savePlaylists() {
    if (pool) {
        await pool.query(
            `INSERT INTO gateway_playlists (id, data)
             VALUES (1, $1)
             ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data`,
            [mockPlaylists]
        );
    }
}

async function initializePersistence() {
    if (!DATABASE_URL) {
        if (process.env.NODE_ENV === 'production') {
            throw new Error('DATABASE_URL is required in production.');
        }
        console.warn('DATABASE_URL is not set; running with in-memory data.');
        return;
    }

    const { Pool } = require('pg');
    pool = new Pool({ connectionString: DATABASE_URL });
    pool.on('error', error => {
        console.error('Unexpected PostgreSQL client error:', error);
    });
    await pool.query(`
        CREATE TABLE IF NOT EXISTS gateway_users (
            username TEXT PRIMARY KEY,
            data JSONB NOT NULL
        );
        CREATE TABLE IF NOT EXISTS gateway_playlists (
            id SMALLINT PRIMARY KEY CHECK (id = 1),
            data JSONB NOT NULL
        )
    `);

    const savedUsers = await pool.query('SELECT username, data FROM gateway_users');
    if (savedUsers.rowCount > 0) {
        usersDb.clear();
        for (const row of savedUsers.rows) {
            const user = row.data;
            if (user.password && !user.password.startsWith('scrypt$')) {
                user.password = hashPassword(user.password);
                await saveUser(row.username, user);
            } else {
                usersDb.set(row.username, user);
            }
        }
    } else {
        for (const [username, user] of usersDb) {
            if (user.password) user.password = hashPassword(user.password);
            await saveUser(username, user);
        }
    }

    const savedPlaylists = await pool.query('SELECT data FROM gateway_playlists WHERE id = 1');
    if (savedPlaylists.rowCount > 0) {
        mockPlaylists.splice(0, mockPlaylists.length, ...savedPlaylists.rows[0].data);
    } else {
        await savePlaylists();
    }
}

const mimeTypes = {
    '.html': 'text/html; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.json': 'application/json; charset=UTF-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
};

const server = http.createServer(async (req, res) => {
    try {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        return res.end();
    }

    const urlParts = req.url.split('?');
    const pathname = urlParts[0];

    if (pathname === '/health' && req.method === 'GET') {
        if (pool) await pool.query('SELECT 1');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ status: 'ok' }));
    }

    // Helper to read JSON body
    function getJsonBody(cb) {
        const handleError = error => {
            console.error('Request handler failed:', error);
            if (!res.headersSent) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal server error' }));
            } else {
                res.destroy(error);
            }
        };
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                Promise.resolve(cb(null, body ? JSON.parse(body) : {})).catch(handleError);
            } catch (error) {
                handleError(error);
            }
        });
    }

    // --- REAL-TIME MULTI-DEVICE EVENT STREAM (SSE) ---
    if (pathname.startsWith('/api/sync/events/')) {
        const roomCode = pathname.replace('/api/sync/events/', '');
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
        if (!roomSubscribers.has(roomCode)) roomSubscribers.set(roomCode, new Set());
        roomSubscribers.get(roomCode).add(res);

        // Immediately send initial synchronized playback state to joining device
        if (roomStates.has(roomCode)) {
            const state = roomStates.get(roomCode);
            res.write(`data: ${JSON.stringify({ type: 'sync_state', room: roomCode, state })}\n\n`);
        }

        // Keep-alive ping
        const pingInterval = setInterval(() => {
            try { res.write(': ping\n\n'); } catch(e) {}
        }, 15000);

        req.on('close', () => {
            clearInterval(pingInterval);
            if (roomSubscribers.has(roomCode)) {
                roomSubscribers.get(roomCode).delete(res);
            }
        });
        return;
    }

    // Broadcast sync event to room & cache state
    if (pathname.startsWith('/api/sync/publish/')) {
        const roomCode = pathname.replace('/api/sync/publish/', '');
        return getJsonBody((_, event) => {
            // Update in-memory room state for late joiners
            if (event.type === 'play') {
                roomStates.set(roomCode, {
                    title: event.title || 'Track',
                    artist: event.artist || 'Artist',
                    trackUrl: event.trackUrl || event.url || '',
                    artUrl: event.artUrl || event.art || '',
                    currentTime: event.currentTime || event.timestamp || 0,
                    isPlaying: true,
                    updatedAt: Date.now()
                });
            } else if (event.type === 'pause') {
                const st = roomStates.get(roomCode) || {};
                st.isPlaying = false;
                st.currentTime = event.currentTime || st.currentTime || 0;
                st.updatedAt = Date.now();
                roomStates.set(roomCode, st);
            } else if (event.type === 'resume') {
                const st = roomStates.get(roomCode) || {};
                st.isPlaying = true;
                st.currentTime = event.currentTime || st.currentTime || 0;
                st.updatedAt = Date.now();
                roomStates.set(roomCode, st);
            } else if (event.type === 'seek') {
                const st = roomStates.get(roomCode) || {};
                st.currentTime = event.currentTime || event.timestamp || 0;
                st.updatedAt = Date.now();
                roomStates.set(roomCode, st);
            }

            if (roomSubscribers.has(roomCode)) {
                const data = JSON.stringify(event);
                for (const client of roomSubscribers.get(roomCode)) {
                    try {
                        client.write(`data: ${data}\n\n`);
                    } catch(e) {}
                }
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true }));
        });
    }

    // --- REST API ENDPOINTS ---
    if (pathname === '/api/tracks') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(mockTracks));
    }

    if (pathname === '/api/playlists' && req.method === 'POST') {
        return getJsonBody(async (_, body) => {
            const newPl = {
                id: 'pl_' + Date.now(),
                name: body.name || 'New Playlist',
                description: body.description || 'Custom playlist created by user',
                artUrl: body.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
                tracks: body.tracks || []
            };
            mockPlaylists.push(newPl);
            await savePlaylists();
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newPl));
        });
    }

    if (pathname.startsWith('/api/playlists/') && (req.method === 'POST' || req.method === 'PUT')) {
        const plId = pathname.replace('/api/playlists/', '').split('/')[0];
        return getJsonBody(async (_, body) => {
            const pl = mockPlaylists.find(p => p.id === plId || p.name.toLowerCase() === decodeURIComponent(plId).toLowerCase());
            if (pl) {
                if (body.track) {
                    if (!pl.tracks) pl.tracks = [];
                    pl.tracks.push(body.track);
                } else if (body.tracks) {
                    pl.tracks = body.tracks;
                }
                await savePlaylists();
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(pl));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Playlist not found' }));
            }
        });
    }

    if (pathname === '/api/playlists') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(mockPlaylists));
    }

    const sanitizeUser = (u) => {
        if (!u) return null;
        const copy = { ...u };
        delete copy.password;
        if (!copy.bio || /signed in via/i.test(copy.bio)) {
            copy.bio = 'Vibing to the beat of the universe 🎧';
        }
        if (!copy.connections) copy.connections = [];
        if (!copy.connectionRequests) copy.connectionRequests = [];
        if (!copy.sentConnectionRequests) copy.sentConnectionRequests = [];
        if (!copy.followedArtists) copy.followedArtists = [];
        if (!copy.pinnedPlaylists) copy.pinnedPlaylists = [];
        if (!copy.playlistPlayCounts) copy.playlistPlayCounts = {};
        if (!copy.createdPlaylists) copy.createdPlaylists = [];
        return copy;
    };

    if (pathname === '/api/auth/register') {
        return getJsonBody(async (_, body) => {
            const username = body.username ? body.username.trim() : '';
            const password = body.password ? body.password.trim() : '';
            if (!username || !password) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Username and password required' }));
            }
            if (usersDb.has(username)) {
                res.writeHead(409, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Username already exists' }));
            }
            const newUser = {
                username,
                password: hashPassword(password),
                email: body.email || `${username.toLowerCase()}@audiotrack.io`,
                bio: body.bio || 'Vibing to the beat of the universe 🎧',
                avatarUrl: body.avatarUrl || `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(username)}`,
                connections: [],
                connectionRequests: [],
                sentConnectionRequests: [],
                followedArtists: [],
                pinnedPlaylists: [],
                playlistPlayCounts: {},
                createdPlaylists: [],
                dedications: []
            };
            await saveUser(username, newUser);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({
                message: 'User registered successfully',
                token: 'jwt-auth-' + Date.now(),
                user: sanitizeUser(newUser)
            }));
        });
    }

    if (pathname === '/api/auth/login') {
        return getJsonBody((_, body) => {
            const username = body.username ? body.username.trim() : '';
            const password = body.password ? body.password.trim() : '';
            if (!username || !password) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Invalid username or password' }));
            }
            const user = usersDb.get(username);
            if (!user || !verifyPassword(user.password, password)) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Invalid username or password' }));
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({
                message: 'Login successful',
                token: 'jwt-auth-' + Date.now(),
                user: sanitizeUser(user)
            }));
        });
    }

    if (pathname === '/api/auth/social-login') {
        return getJsonBody(async (_, body) => {
            let username = body.username;
            if (!username && body.email) {
                username = body.email.split('@')[0];
            }
            username = username ? username.trim() : 'Google_User';

            if (!usersDb.has(username)) {
                await saveUser(username, {
                    username,
                    email: body.email || (username.toLowerCase() + '@' + (body.provider || 'google') + '.com'),
                    bio: (body.bio && !/signed in via/i.test(body.bio)) ? body.bio : 'Vibing to the beat of the universe 🎧',
                    avatarUrl: body.avatarUrl || `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(username)}`,
                    connections: [],
                    connectionRequests: [],
                    sentConnectionRequests: [],
                    followedArtists: [],
                    pinnedPlaylists: [],
                    playlistPlayCounts: {},
                    createdPlaylists: [],
                    dedications: []
                });
            }
            const user = usersDb.get(username);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({
                message: 'Authenticated successfully',
                token: 'jwt-auth-' + Date.now(),
                user: sanitizeUser(user)
            }));
        });
    }

    if (pathname.startsWith('/api/users/search')) {
        const queryMatch = req.url.match(/query=([^&]+)/);
        const query = queryMatch ? decodeURIComponent(queryMatch[1]).toLowerCase() : '';
        const matches = Array.from(usersDb.values())
            .filter(u => u.username.toLowerCase().includes(query))
            .map(u => ({
                username: u.username,
                bio: u.bio,
                avatarUrl: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(u.username)}`
            }));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(matches));
    }

    if (pathname.includes('/pin-playlist')) {
        const usernameMatch = pathname.match(/\/api\/users\/([^\/]+)\/pin-playlist/);
        const username = usernameMatch ? decodeURIComponent(usernameMatch[1]) : '';
        return getJsonBody(async (_, body) => {
            const user = usersDb.get(username) || { username, connections: [], pinnedPlaylists: [], dedications: [] };
            const plName = body.playlist;
            if (!user.pinnedPlaylists) user.pinnedPlaylists = [];
            const idx = user.pinnedPlaylists.indexOf(plName);
            let isPinned = false;
            if (idx === -1) {
                user.pinnedPlaylists.push(plName);
                isPinned = true;
            } else {
                user.pinnedPlaylists.splice(idx, 1);
            }
            await saveUser(username, user);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ isPinned, pinnedPlaylists: user.pinnedPlaylists }));
        });
    }

    if (pathname.includes('/dedications')) {
        const usernameMatch = pathname.match(/\/api\/users\/([^\/]+)\/dedications/);
        const username = usernameMatch ? decodeURIComponent(usernameMatch[1]) : '';
        const user = usersDb.get(username) || { dedications: [] };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(user.dedications || []));
    }

    if (pathname.includes('/dedicate')) {
        const usernameMatch = pathname.match(/\/api\/users\/([^\/]+)\/dedicate/);
        const targetUsername = usernameMatch ? decodeURIComponent(usernameMatch[1]) : '';
        return getJsonBody(async (_, body) => {
            const user = usersDb.get(targetUsername) || { username: targetUsername, connections: [], pinnedPlaylists: [], dedications: [] };
            if (!user.dedications) user.dedications = [];
            const newDed = {
                id: 'ded_' + Date.now(),
                fromUser: body.fromUser || 'Friend',
                trackTitle: body.trackTitle || 'Track',
                trackArtist: body.trackArtist || 'Artist',
                trackUrl: body.trackUrl || '',
                trackArt: body.trackArt || '',
                message: body.message || '',
                timestamp: new Date().toISOString()
            };
            user.dedications.unshift(newDed);
            await saveUser(targetUsername, user);

            // Broadcast dedication event to all SSE sync rooms
            for (const [room, clients] of roomSubscribers.entries()) {
                const data = JSON.stringify({
                    type: 'new_dedication',
                    toUser: targetUsername,
                    dedication: newDed
                });
                for (const client of clients) {
                    try { client.write(`data: ${data}\n\n`); } catch(e) {}
                }
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true, dedication: newDed }));
        });
    }

    // Connection Request Endpoints
    if (pathname.includes('/connection-requests/') && pathname.includes('/accept') && req.method === 'POST') {
        const match = pathname.match(/\/api\/users\/([^\/]+)\/connection-requests\/([^\/]+)\/accept/);
        const username = match ? decodeURIComponent(match[1]) : '';
        const requester = match ? decodeURIComponent(match[2]) : '';

        let user = usersDb.get(username) || { username, connections: [], connectionRequests: [], sentConnectionRequests: [] };
        let reqUser = usersDb.get(requester) || { username: requester, connections: [], connectionRequests: [], sentConnectionRequests: [] };

        if (!user.connections) user.connections = [];
        if (!reqUser.connections) reqUser.connections = [];

        // Add mutual connection
        if (!user.connections.some(c => c.toLowerCase() === requester.toLowerCase())) {
            user.connections.push(requester);
        }
        if (!reqUser.connections.some(c => c.toLowerCase() === username.toLowerCase())) {
            reqUser.connections.push(username);
        }

        // Remove from pending
        user.connectionRequests = (user.connectionRequests || []).filter(r => r.fromUser.toLowerCase() !== requester.toLowerCase());
        reqUser.sentConnectionRequests = (reqUser.sentConnectionRequests || []).filter(u => u.toLowerCase() !== username.toLowerCase());

        await Promise.all([
            saveUser(username, user),
            saveUser(requester, reqUser)
        ]);

        // Broadcast SSE event
        const clients = roomSubscribers.get('global') || [];
        const data = JSON.stringify({
            type: 'CONNECTION_ACCEPTED',
            user1: username,
            user2: requester
        });
        for (const client of clients) {
            try { client.write(`data: ${data}\n\n`); } catch(e) {}
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok: true, connections: user.connections, connectionRequests: user.connectionRequests }));
    }

    if (pathname.includes('/connection-requests/') && pathname.includes('/reject') && req.method === 'POST') {
        const match = pathname.match(/\/api\/users\/([^\/]+)\/connection-requests\/([^\/]+)\/reject/);
        const username = match ? decodeURIComponent(match[1]) : '';
        const requester = match ? decodeURIComponent(match[2]) : '';

        let user = usersDb.get(username) || { username, connections: [], connectionRequests: [], sentConnectionRequests: [] };
        let reqUser = usersDb.get(requester) || { username: requester, connections: [], connectionRequests: [], sentConnectionRequests: [] };

        user.connectionRequests = (user.connectionRequests || []).filter(r => r.fromUser.toLowerCase() !== requester.toLowerCase());
        reqUser.sentConnectionRequests = (reqUser.sentConnectionRequests || []).filter(u => u.toLowerCase() !== username.toLowerCase());

        await Promise.all([
            saveUser(username, user),
            saveUser(requester, reqUser)
        ]);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok: true, connectionRequests: user.connectionRequests }));
    }

    if (pathname.includes('/connection-requests') && req.method === 'GET') {
        const match = pathname.match(/\/api\/users\/([^\/]+)\/connection-requests/);
        const username = match ? decodeURIComponent(match[1]) : '';
        const user = usersDb.get(username) || { connectionRequests: [] };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(user.connectionRequests || []));
    }

    if (pathname.includes('/connection-request/') && req.method === 'DELETE') {
        const match = pathname.match(/\/api\/users\/([^\/]+)\/connection-request\/([^\/]+)/);
        const username = match ? decodeURIComponent(match[1]) : '';
        const target = match ? decodeURIComponent(match[2]) : '';

        let user = usersDb.get(username) || { username, connections: [], connectionRequests: [], sentConnectionRequests: [] };
        let targetUser = usersDb.get(target) || { username: target, connections: [], connectionRequests: [], sentConnectionRequests: [] };

        user.sentConnectionRequests = (user.sentConnectionRequests || []).filter(u => u.toLowerCase() !== target.toLowerCase());
        targetUser.connectionRequests = (targetUser.connectionRequests || []).filter(r => r.fromUser.toLowerCase() !== username.toLowerCase());

        await Promise.all([
            saveUser(username, user),
            saveUser(target, targetUser)
        ]);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok: true, sentConnectionRequests: user.sentConnectionRequests }));
    }

    if (pathname.includes('/connection-request') && req.method === 'POST') {
        const usernameMatch = pathname.match(/\/api\/users\/([^\/]+)\/connection-request/);
        const senderUsername = usernameMatch ? decodeURIComponent(usernameMatch[1]) : '';
        return getJsonBody(async (_, body) => {
            const targetUsername = body && (body.targetUser || body.friendUsername || body.targetUsername);
            if (!senderUsername || !targetUsername) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Sender and target required' }));
            }
            if (senderUsername.toLowerCase() === targetUsername.toLowerCase()) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Cannot connect with yourself' }));
            }

            let sender = usersDb.get(senderUsername) || { username: senderUsername, connections: [], connectionRequests: [], sentConnectionRequests: [] };
            let target = usersDb.get(targetUsername) || { username: targetUsername, connections: [], connectionRequests: [], sentConnectionRequests: [] };

            if (!sender.connections) sender.connections = [];
            if (!sender.sentConnectionRequests) sender.sentConnectionRequests = [];
            if (!target.connections) target.connections = [];
            if (!target.connectionRequests) target.connectionRequests = [];

            if (sender.connections.some(c => c.toLowerCase() === targetUsername.toLowerCase())) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ ok: true, alreadyConnected: true, connections: sender.connections }));
            }

            // Add request to target user
            if (!target.connectionRequests.some(r => r.fromUser.toLowerCase() === senderUsername.toLowerCase())) {
                target.connectionRequests.push({
                    fromUser: senderUsername,
                    bio: sender.bio || 'AudioTrack Member',
                    avatarUrl: sender.avatarUrl || `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(senderUsername)}`,
                    timestamp: new Date().toISOString()
                });
            }

            // Track in sender's sent requests
            if (!sender.sentConnectionRequests.some(u => u.toLowerCase() === targetUsername.toLowerCase())) {
                sender.sentConnectionRequests.push(targetUsername);
            }

            await Promise.all([
                saveUser(senderUsername, sender),
                saveUser(targetUsername, target)
            ]);

            // Broadcast SSE notification
            const clients = roomSubscribers.get('global') || [];
            const data = JSON.stringify({
                type: 'CONNECTION_REQUEST',
                toUser: targetUsername,
                fromUser: senderUsername
            });
            for (const client of clients) {
                try { client.write(`data: ${data}\n\n`); } catch(e) {}
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok: true, status: 'requested', sentConnectionRequests: sender.sentConnectionRequests }));
        });
    }

    if (pathname.includes('/playlist-play') && req.method === 'POST') {
        const match = pathname.match(/\/api\/users\/([^\/]+)\/playlist-play/);
        const username = match ? decodeURIComponent(match[1]) : '';
        return getJsonBody(async (_, body) => {
            const plName = body && body.playlistName;
            let user = usersDb.get(username) || { username, connections: [], pinnedPlaylists: [], playlistPlayCounts: {} };
            if (!user.playlistPlayCounts) user.playlistPlayCounts = {};
            if (plName) {
                user.playlistPlayCounts[plName] = (user.playlistPlayCounts[plName] || 0) + 1;
            }
            await saveUser(username, user);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok: true, playlistPlayCounts: user.playlistPlayCounts }));
        });
    }

    if (pathname.includes('/connect')) {
        const usernameMatch = pathname.match(/\/api\/users\/([^\/]+)\/connect(?:\/([^\/]+))?/);
        const username = usernameMatch ? decodeURIComponent(usernameMatch[1]) : '';
        const friendParam = usernameMatch && usernameMatch[2] ? decodeURIComponent(usernameMatch[2]) : '';

        if (req.method === 'DELETE' && friendParam) {
            const user = usersDb.get(username) || { username, connections: [], pinnedPlaylists: [], dedications: [] };
            user.connections = (user.connections || []).filter(c => c.toLowerCase() !== friendParam.toLowerCase());

            // Also remove mutual connection from the friend's list
            const friendUser = usersDb.get(friendParam);
            if (friendUser && friendUser.connections) {
                friendUser.connections = friendUser.connections.filter(c => c.toLowerCase() !== username.toLowerCase());
                await Promise.all([
                    saveUser(username, user),
                    saveUser(friendParam, friendUser)
                ]);
            } else {
                await saveUser(username, user);
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok: true, connections: user.connections }));
        }

        return getJsonBody(async (_, body) => {
            const friend = (body && (body.friend || body.friendUsername)) || friendParam;
            const user = usersDb.get(username) || { username, connections: [], pinnedPlaylists: [], dedications: [] };
            if (!user.connections) user.connections = [];
            if (friend && !user.connections.some(c => c.toLowerCase() === friend.toLowerCase())) {
                user.connections.push(friend);
            }
            await saveUser(username, user);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true, connections: user.connections }));
        });
    }

    if (pathname.includes('/bio-song')) {
        const usernameMatch = pathname.match(/\/api\/users\/([^\/]+)\/bio-song/);
        const username = usernameMatch ? decodeURIComponent(usernameMatch[1]) : '';
        return getJsonBody(async (_, body) => {
            const user = usersDb.get(username) || { username, connections: [], pinnedPlaylists: [], dedications: [] };
            if (body && body.bioSong) {
                user.bioSong = body.bioSong;
            }
            await saveUser(username, user);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok: true, bioSong: user.bioSong }));
        });
    }

    if (pathname.startsWith('/api/users/') && req.method === 'PUT') {
        const username = decodeURIComponent(pathname.replace('/api/users/', ''));
        return getJsonBody(async (_, body) => {
            let user = usersDb.get(username) || { username };
            Object.assign(user, body);
            await saveUser(username, user);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok: true, user: sanitizeUser(user) }));
        });
    }

    if (pathname.startsWith('/api/users/')) {
        const username = decodeURIComponent(pathname.replace('/api/users/', ''));
        const user = usersDb.get(username) || { username, connections: [], connectionRequests: [], sentConnectionRequests: [], followedArtists: [], pinnedPlaylists: [], playlistPlayCounts: {}, createdPlaylists: [], dedications: [] };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(sanitizeUser(user)));
    }

    // --- STATIC FILES SERVER (FRONTEND) ---
    let decodedPath;
    try {
        decodedPath = decodeURIComponent(pathname);
    } catch {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Bad Request');
    }

    let filePath = path.resolve(FRONTEND_DIR, decodedPath === '/' ? 'index.html' : `.${decodedPath}`);
    if (filePath !== FRONTEND_DIR && !filePath.startsWith(FRONTEND_DIR + path.sep)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
    if (!fs.existsSync(filePath)) {
        filePath = path.join(FRONTEND_DIR, 'index.html');
    }

    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
    } catch (error) {
        console.error('Request handler failed:', error);
        if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
        } else {
            res.destroy(error);
        }
    }
});

function listen() {
    server.listen(PORT, '0.0.0.0', () => {
    let localIp = '127.0.0.1';
    try {
        const interfaces = os.networkInterfaces();
        for (const name of Object.keys(interfaces)) {
            for (const iface of interfaces[name]) {
                if (iface.family === 'IPv4' && !iface.internal) {
                    localIp = iface.address;
                    break;
                }
            }
            if (localIp !== '127.0.0.1') break;
        }
    } catch(e) {}

    console.log(`\n========================================================`);
    console.log(`🚀 AudioTrack Unified Server is RUNNING on port ${PORT}!`);
    console.log(`👉 Host URL (Your PC):     http://localhost:${PORT}`);
    console.log(`👉 Local Wi-Fi (Friends):  http://${localIp}:${PORT}`);
    console.log(`========================================================\n`);
    });
}

initializePersistence()
    .then(listen)
    .catch(async error => {
        console.error('AudioTrack startup failed:', error);
        if (pool) await pool.end();
        process.exitCode = 1;
    });

process.on('SIGTERM', () => {
    server.close(async () => {
        if (pool) await pool.end();
    });
});
