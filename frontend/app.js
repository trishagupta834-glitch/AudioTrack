// --- DYNAMIC ONBOARDING DATA ---
const languages = ['English', 'Spanish (Reggaeton)', 'K-Pop', 'Hindi', 'Japanese (Anime)', 'French', 'German', 'Portuguese', 'Italian', 'Arabic'];

const artistData = {
    'English': ['The Weeknd', 'Billie Eilish', 'Travis Scott', 'Taylor Swift', 'Drake', 'Ariana Grande', 'Post Malone', 'Ed Sheeran', 'Dua Lipa', 'Justin Bieber', 'Harry Styles', 'Olivia Rodrigo', 'Doja Cat', 'Kendrick Lamar', 'SZA', 'Eminem', 'Rihanna', 'Bruno Mars', 'Adele', 'Coldplay'],
    'Spanish (Reggaeton)': ['Bad Bunny', 'Rosalía', 'J Balvin', 'Karol G', 'Daddy Yankee', 'Shakira', 'Maluma', 'Ozuna', 'Rauw Alejandro', 'Becky G', 'Anuel AA', 'Myke Towers', 'Camilo', 'Sebastian Yatra', 'Luis Fonsi', 'Romeo Santos', 'Enrique Iglesias', 'Marc Anthony', 'Jhay Cortez', 'Farruko'],
    'K-Pop': ['BTS', 'BLACKPINK', 'NewJeans', 'Stray Kids', 'TWICE', 'SEVENTEEN', 'EXO', 'Red Velvet', 'NCT', 'TXT', 'ITZY', 'aespa', 'ENHYPEN', 'ATEEZ', 'MAMAMOO', 'IU', 'G(I)-DLE', 'LE SSERAFIM', 'IVE', 'Girls Generation'],
    'Hindi': ['Arijit Singh', 'Shreya Ghoshal', 'Neha Kakkar', 'Jubin Nautiyal', 'Badshah', 'Guru Randhawa', 'Darshan Raval', 'Armaan Malik', 'Atif Aslam', 'Sonu Nigam', 'Alka Yagnik', 'Udit Narayan', 'Kishore Kumar', 'Lata Mangeshkar', 'Kumar Sanu', 'Sunidhi Chauhan', 'Honey Singh', 'Diljit Dosanjh', 'Sidhu Moose Wala', 'AP Dhillon'],
    'Japanese (Anime)': ['YOASOBI', 'Kenshi Yonezu', 'Ado', 'Hikaru Utada', 'LiSA', 'Eve', 'Aimyon', 'Radwimps', 'Vaundy', 'Fujii Kaze', 'Official HIGE DANdism', 'King Gnu', 'BABYMETAL', 'ONE OK ROCK', 'Yorushika', 'Aimer', 'UVERworld', 'Yumi Matsutoya', 'Namie Amuro', 'Mariya Takeuchi'],
    'French': ['Stromae', 'Aya Nakamura', 'Daft Punk', 'David Guetta', 'Orelsan', 'Ninho', 'Jul', 'GIMS', 'Angèle', 'Dadju', 'PNL', 'Booba', 'Damso', 'Soprano', 'Kendji Girac', 'Louane', 'Mylène Farmer', 'Vianney', 'Indila', 'Zaz'],
    'German': ['Rammstein', 'Capital Bra', 'Apache 207', 'Bonez MC', 'RAF Camora', 'Helene Fischer', 'Cro', 'Sido', 'Udo Lindenberg', 'Peter Fox', 'Mark Forster', 'Shiririn David', 'Nina Chuba', 'Luciano', 'Kontra K', 'Bausa', 'RIN', 'Die Toten Hosen', 'Die Ärzte', 'Scorpions'],
    'Portuguese': ['Anitta', 'Gusttavo Lima', 'Marília Mendonça', 'Henrique & Juliano', 'Zé Neto & Cristiano', 'Jorge & Mateus', 'Wesley Safadão', 'Alok', 'Ludmilla', 'Luan Santana', 'Luísa Sonza', 'Matheus & Kauan', 'Maiara & Maraisa', 'MC Kevinho', 'MC Poze do Rodo', 'Barões da Pisadinha', 'Ivete Sangalo', 'Roberto Carlos', 'Caetano Veloso', 'Gilberto Gil'],
    'Italian': ['Måneskin', 'Sfera Ebbasta', 'Blanco', 'Mahmood', 'Ultimo', 'Madame', 'Marco Mengoni', 'Laura Pausini', 'Eros Ramazzotti', 'Andrea Bocelli', 'Jovanotti', 'Ligabue', 'Vasco Rossi', 'Tiziano Ferro', 'Zucchero', 'Mina', 'Fedez', 'Salmo', 'Marracash', 'Pinguini Tattici'],
    'Arabic': ['Amr Diab', 'Nancy Ajram', 'Elissa', 'Sherine', 'Saad Lamjarred', 'Wael Kfoury', 'Tamer Hosny', 'Mohamed Hamaki', 'Najwa Karam', 'Assala', 'Majid Al Mohandis', 'Rashed Al Majed', 'Hussain Al Jassmi', 'Abdul Majeed Abdullah', 'Myriam Fares', 'Haifa Wehbe', 'Wegz', 'Marwan Pablo', 'Cairokee', 'Balti']
};

const moodSongs = {
    lofi: { 
        name: "Lamp - Yume Utsutsu", lyric: "\"Even if it's a dream, I want to stay by your side...\"", query: "lofi hip hop",
        pinned: [{name: "Late Night Drives", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop"}, {name: "Study Lo-Fi", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop"}],
        recent: ['Joji', 'Nujabes', 'Idealism'],
        madeForYou: [{name: "Chill Mix", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop"}, {name: "Focus Vibes", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop"}],
        artists: ['Joji', 'Nujabes', 'Kupla', 'Idealism', 'ChilledCow']
    },
    romantic: { 
        name: "Stephen Sanchez - Until I Found You", lyric: "\"I would never fall in love again until I found her...\"", query: "love song",
        pinned: [{name: "Date Night", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200&auto=format&fit=crop"}, {name: "Soulmates", img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=200&auto=format&fit=crop"}],
        recent: ['Ed Sheeran', 'Adele', 'John Legend'],
        madeForYou: [{name: "Romantic Mix", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=300&auto=format&fit=crop"}, {name: "Love Songs", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop"}],
        artists: ['Ed Sheeran', 'Adele', 'John Legend', 'Taylor Swift', 'Bruno Mars']
    },
    sad: { 
        name: "Billie Eilish - What Was I Made For?", lyric: "\"I used to float, now I just fall down...\"", query: "sad acoustic",
        pinned: [{name: "Crying in the Car", img: "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=200&auto=format&fit=crop"}, {name: "Heartbreak", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop"}],
        recent: ['Billie Eilish', 'Olivia Rodrigo', 'Joji'],
        madeForYou: [{name: "Sad Mix", img: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=300&auto=format&fit=crop"}, {name: "Acoustic Tears", img: "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=300&auto=format&fit=crop"}],
        artists: ['Billie Eilish', 'Olivia Rodrigo', 'Conan Gray', 'Lewis Capaldi', 'Joji']
    },
    chill: {
        name: "Tame Impala - Let It Happen", lyric: "\"All this running around, I can't fight it much longer...\"", query: "chill vibes indie",
        pinned: [{name: "Sunday Morning", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200&auto=format&fit=crop"}, {name: "Coffee Shop", img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=200&auto=format&fit=crop"}],
        recent: ['Tame Impala', 'Mac DeMarco', 'Khruangbin'],
        madeForYou: [{name: "Chill Vibes", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop"}, {name: "Sunset Mix", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=300&auto=format&fit=crop"}],
        artists: ['Tame Impala', 'Mac DeMarco', 'Khruangbin', 'Cigarettes After Sex', 'Beach House']
    },
    happy: {
        name: "Pharrell Williams - Happy", lyric: "\"Clap along if you feel like a room without a roof...\"", query: "happy upbeat pop",
        pinned: [{name: "Feel Good", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop"}, {name: "Sunny Day", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200&auto=format&fit=crop"}],
        recent: ['Dua Lipa', 'Harry Styles', 'Lizzo'],
        madeForYou: [{name: "Happy Mix", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop"}, {name: "Dance Party", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop"}],
        artists: ['Dua Lipa', 'Harry Styles', 'Lizzo', 'Bruno Mars', 'Pharrell Williams']
    },
    energetic: {
        name: "Imagine Dragons - Believer", lyric: "\"Pain! You made me a believer...\"", query: "energetic rock workout",
        pinned: [{name: "Beast Mode", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop"}, {name: "Power Up", img: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=200&auto=format&fit=crop"}],
        recent: ['Imagine Dragons', 'Twenty One Pilots', 'The Score'],
        madeForYou: [{name: "Pump Up", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop"}, {name: "Adrenaline", img: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=300&auto=format&fit=crop"}],
        artists: ['Imagine Dragons', 'Twenty One Pilots', 'The Score', 'NF', 'Linkin Park']
    },
    focus: {
        name: "Brian Eno - Ambient 1", lyric: "\"Music for airports, music for the mind...\"", query: "ambient focus study",
        pinned: [{name: "Deep Work", img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=200&auto=format&fit=crop"}, {name: "Flow State", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop"}],
        recent: ['Brian Eno', 'Tycho', 'Bonobo'],
        madeForYou: [{name: "Focus Zone", img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=300&auto=format&fit=crop"}, {name: "Concentration", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop"}],
        artists: ['Brian Eno', 'Tycho', 'Bonobo', 'Nils Frahm', 'Ólafur Arnalds']
    },
    party: {
        name: "David Guetta - Titanium", lyric: "\"I'm bulletproof, nothing to lose...\"", query: "party dance EDM",
        pinned: [{name: "Club Night", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop"}, {name: "Pre-Game", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop"}],
        recent: ['David Guetta', 'Calvin Harris', 'Marshmello'],
        madeForYou: [{name: "Party Starter", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop"}, {name: "EDM Anthems", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop"}],
        artists: ['David Guetta', 'Calvin Harris', 'Marshmello', 'Martin Garrix', 'Avicii']
    },
    cyberpunk: {
        name: "Grimes - Oblivion", lyric: "\"See you on a dark night...\"", query: "cyberpunk synthwave",
        pinned: [{name: "Night City", img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=200&auto=format&fit=crop"}, {name: "Synthwave", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop"}],
        recent: ['Grimes', 'Kavinsky', 'The Midnight'],
        madeForYou: [{name: "Neon Mix", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=300&auto=format&fit=crop"}, {name: "Cyber Rave", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop"}],
        artists: ['Grimes', 'Kavinsky', 'The Midnight', 'Gunship', 'Perturbator']
    }
};

// Seed for random unsplash avatars
const getRandomAvatar = (name) => `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(name)}`;

// --- SOCIAL HUB (BROADCAST CHANNEL) ---
window.socialChannel = new BroadcastChannel('audiotrack-social');
window.currentRoom = null;

// --- APP INITIALIZATION ---
function initApp() {
    // Check for direct Room invite parameter (?room=CODE or ?join=CODE)
    const urlParams = new URLSearchParams(window.location.search);
    const targetRoomFromUrl = urlParams.get('room') || urlParams.get('join');
    if (targetRoomFromUrl) {
        window.pendingJoinRoomCode = targetRoomFromUrl.trim().toUpperCase();
    }

    // Session Check
    let savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!savedUser) {
        if (targetRoomFromUrl) {
            // Friend visiting directly from invite link without account -> Auto-create clean Guest session so they enter the room seamlessly!
            const guestSeed = 'Friend_' + Math.floor(1000 + Math.random() * 9000);
            savedUser = {
                username: guestSeed,
                email: `${guestSeed.toLowerCase()}@audiotrack.io`,
                avatarUrl: `https://api.dicebear.com/9.x/avataaars/svg?seed=${guestSeed}`,
                bio: 'Cruising AudioTrack with friends 🎧',
                connections: [],
                connectionRequests: [],
                sentConnectionRequests: [],
                followedArtists: [],
                pinnedPlaylists: [],
                playlistPlayCounts: {},
                createdPlaylists: [],
                dedications: []
            };
            localStorage.setItem('currentUser', JSON.stringify(savedUser));
            localStorage.setItem('authToken', 'guest-token-' + Date.now());
            localStorage.setItem('audioTrackTheme_' + guestSeed, 'lofi');
        } else {
            window.location.href = 'login.html';
            return;
        }
    }
    
    if (savedUser) {
        if (!savedUser.bio || /signed in via/i.test(savedUser.bio)) {
            savedUser.bio = 'Vibing to the beat of the universe 🎧';
            try { localStorage.setItem('currentUser', JSON.stringify(savedUser)); } catch(e) {}
        }
        const userEl = document.querySelector('.username');
        if (userEl) userEl.textContent = savedUser.username;
    }
    
    // Show/hide demo mode badge
    const demoModeBadge = document.getElementById('demoModeBadge');
    if (demoModeBadge) {
        const isOfflineMode = localStorage.getItem('offlineMode') === 'true';
        demoModeBadge.style.display = isOfflineMode ? 'flex' : 'none';
    }

    // First-time moodboard onboarding: add a body class and mark as seen
    try {
        const moodSeen = localStorage.getItem('moodboardSeen');
        if (!moodSeen) {
            document.body.classList.add('moodboard-initial');
            const mb = document.getElementById('moodboard-view');
            if (mb) mb.classList.add('initial-load');
            // mark as seen so the effect is shown only once
            localStorage.setItem('moodboardSeen', 'true');
        }
    } catch (e) {
        // ignore storage errors
    }

    function showMoodboardView() {
        const navItems = document.querySelectorAll('.nav-item');
        const views = document.querySelectorAll('.view');
        navItems.forEach(nav => nav.classList.remove('active'));
        views.forEach(view => view.classList.remove('active-view'));
        const moodboardViewEl = document.getElementById('moodboard-view');
        if (moodboardViewEl) moodboardViewEl.classList.add('active-view');
        const searchBar = document.querySelector('.search-bar');
        if (searchBar) searchBar.style.display = 'none';
    }
    
    // Elements
    const moodboardView = document.getElementById('moodboard-view');
    const openMoodBtn = document.getElementById('openMoodBtn');
    
    // Steps
    const stepLanguages = document.getElementById('stepLanguages');
    const stepArtists = document.getElementById('stepArtists');
    const stepMood = document.getElementById('stepMood');
    const steps = [stepLanguages, stepArtists, stepMood];

    const languageGrid = document.getElementById('languageGrid');
    const artistGrid = document.getElementById('artistGrid');
    const btnNextArtists = document.getElementById('btnNextArtists');
    const btnNextMood = document.getElementById('btnNextMood');
    const moodCards = document.querySelectorAll('.mood-card');
    
    // Player Elements
    const mainAudio = document.getElementById('mainAudio');
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const trackArt = document.querySelector('.track-art');
    const progressFill = document.querySelector('.progress-bar-fill');
    
    let selectedLanguages = JSON.parse(localStorage.getItem(getUserLanguagesKey())) || [];
    let selectedArtists = JSON.parse(localStorage.getItem(getUserArtistsKey())) || [];

    // Helper: Show step
    function showStep(stepElement) {
        steps.forEach(s => s.classList.remove('active-step'));
        stepElement.classList.add('active-step');
    }

    // --- ONBOARDING: Render Languages ---
    function renderLanguages() {
        languageGrid.innerHTML = '';
        languages.forEach(lang => {
            const pill = document.createElement('div');
            pill.className = 'lang-pill';
            if (selectedLanguages.includes(lang)) {
                pill.classList.add('selected');
            }
            pill.textContent = lang;
            pill.addEventListener('click', () => {
                pill.classList.toggle('selected');
                if (selectedLanguages.includes(lang)) {
                    selectedLanguages = selectedLanguages.filter(l => l !== lang);
                } else {
                    selectedLanguages.push(lang);
                }
                btnNextArtists.style.display = selectedLanguages.length > 0 ? 'block' : 'none';
            });
            languageGrid.appendChild(pill);
        });
        btnNextArtists.style.display = selectedLanguages.length > 0 ? 'block' : 'none';
    }

    // --- ONBOARDING: Render Artists ---
    function renderArtists() {
        artistGrid.innerHTML = '';
        let availableArtists = [];
        selectedLanguages.forEach(lang => {
            if (artistData[lang]) {
                availableArtists = availableArtists.concat(artistData[lang]);
            }
        });
        
        // Shuffle and pick top 20 to avoid overcrowding
        availableArtists = availableArtists.sort(() => 0.5 - Math.random()).slice(0, 20);

        availableArtists.forEach(artist => {
            const circle = document.createElement('div');
            circle.className = 'artist-circle';
            if (selectedArtists.includes(artist)) {
                circle.classList.add('selected');
            }
            circle.innerHTML = `
                <img src="${getRandomAvatar(artist)}" alt="${artist}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop';">
                <div class="overlay"><span class="material-icons">check</span></div>
                <p>${artist}</p>
            `;
            circle.addEventListener('click', () => {
                circle.classList.toggle('selected');
                if (selectedArtists.includes(artist)) {
                    selectedArtists = selectedArtists.filter(a => a !== artist);
                } else {
                    selectedArtists.push(artist);
                }
                btnNextMood.style.display = selectedArtists.length > 0 ? 'block' : 'none';
            });
            artistGrid.appendChild(circle);
        });
        btnNextMood.style.display = selectedArtists.length > 0 ? 'block' : 'none';
    }

    // Initialize Onboarding Logic
    if (moodboardView) {
        const savedTheme = localStorage.getItem(getUserThemeKey());
        const isJustLoggedIn = sessionStorage.getItem('justLoggedIn') === 'true' || !savedTheme;
        const moodboardTab = document.querySelector('.nav-item[data-target="moodboard"]');

        if (isJustLoggedIn || !savedTheme) {
            // First time onboarding: hide nav bar during languages, artists, and mood selection
            document.documentElement.classList.add('hide-nav-after-login');
            document.body.classList.add('hide-nav-after-login');

            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            if (moodboardTab) moodboardTab.classList.add('active');

            document.querySelectorAll('.view').forEach(view => view.classList.remove('active-view'));
            moodboardView.classList.add('active-view');

            const searchBar = document.querySelector('.search-bar');
            if (searchBar) searchBar.style.display = 'none';

            // Clear previous selections for a clean onboarding flow
            selectedLanguages = [];
            selectedArtists = [];
            localStorage.removeItem(getUserLanguagesKey());
            localStorage.removeItem(getUserArtistsKey());
            
            renderLanguages();
            showStep(stepLanguages);
            moodboardView.classList.add('initial-load');
        } else {
            // Returning user with already selected mood: show nav bar and open Home page directly
            document.documentElement.classList.remove('hide-nav-after-login');
            document.body.classList.remove('hide-nav-after-login');

            document.querySelectorAll('.view').forEach(view => view.classList.remove('active-view'));
            const homeView = document.getElementById('home-view');
            if (homeView) homeView.classList.add('active-view');

            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            const homeTab = document.querySelector('.nav-item[data-target="home"]');
            if (homeTab) homeTab.classList.add('active');

            const searchBar = document.querySelector('.search-bar');
            if (searchBar) searchBar.style.display = 'flex';

            document.body.setAttribute('data-theme', savedTheme);
            const baseQuery = moodSongs[savedTheme]?.query || 'trending';
            const smartQuery = selectedArtists.length > 0 ? `${selectedArtists[0]} ${baseQuery}` : 
                               (selectedLanguages.length > 0 ? `${selectedLanguages[0]} ${baseQuery}` : baseQuery);
                               
            updateDashboardForMood(savedTheme);
            moodboardView.classList.remove('initial-load');
        }

        // Sidebar "Change Mood" (Legacy button support if any)
        if (openMoodBtn) {
            openMoodBtn.addEventListener('click', () => {
                if (moodboardTab) moodboardTab.click();
                showStep(stepMood);
                moodboardView.classList.remove('initial-load'); // Remove if changing mood
            });
        }

        // Flow Buttons
        btnNextArtists.addEventListener('click', () => {
            renderArtists();
            showStep(stepArtists);
        });
        btnNextMood.addEventListener('click', () => {
            showStep(stepMood);
        });

        // Mood Selection (Mutually Exclusive: allow choosing only 1 from Core Moods or Seasonal Special)
        const btnNextHome = document.getElementById('btnNextHome');
        let pendingSelectedMood = null;

        moodCards.forEach(card => {
            card.addEventListener('click', () => {
                const selectedTheme = card.getAttribute('data-theme-select');
                if (!selectedTheme) return;

                // Deselect any other card across both Core Moods and Seasonal Special
                moodCards.forEach(c => c.classList.remove('selected-mood-card'));

                // Select this card only
                card.classList.add('selected-mood-card');
                pendingSelectedMood = selectedTheme;
                document.body.setAttribute('data-theme', selectedTheme);

                // When one is selected from either, reveal the pink NEXT button at the bottom
                if (btnNextHome) {
                    btnNextHome.style.display = 'inline-flex';
                    btnNextHome.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });

        // Clicking the NEXT button completes the selection and transitions to Home
        if (btnNextHome) {
            btnNextHome.addEventListener('click', () => {
                if (!pendingSelectedMood) return;

                const selectedTheme = pendingSelectedMood;
                document.body.setAttribute('data-theme', selectedTheme);
                localStorage.setItem(getUserThemeKey(), selectedTheme);
                localStorage.setItem(getUserLanguagesKey(), JSON.stringify(selectedLanguages));
                localStorage.setItem(getUserArtistsKey(), JSON.stringify(selectedArtists));
                sessionStorage.removeItem('justLoggedIn');
                
                // 1. Reveal navigation bar immediately now that mood selection is done
                document.documentElement.classList.remove('hide-nav-after-login');
                document.body.classList.remove('hide-nav-after-login');

                // 2. Open Home page DIRECTLY
                document.querySelectorAll('.view').forEach(view => view.classList.remove('active-view'));
                const homeView = document.getElementById('home-view');
                if (homeView) {
                    homeView.classList.add('active-view');
                }
                
                // 3. Mark Home tab as active in the nav bar
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                const homeTab = document.querySelector('.nav-item[data-target="home"]');
                if (homeTab) {
                    homeTab.classList.add('active');
                }

                // 4. Reveal search bar on Home page
                const searchBar = document.querySelector('.search-bar');
                if (searchBar) {
                    searchBar.style.display = 'flex';
                }

                // 5. Fetch music for this new mood using smart query
                const baseQuery = moodSongs[selectedTheme]?.query || 'trending';
                const smartQuery = selectedArtists.length > 0 ? `${selectedArtists[0]} ${baseQuery}` : 
                                   (selectedLanguages.length > 0 ? `${selectedLanguages[0]} ${baseQuery}` : baseQuery);
                                   
                fetchMusic(smartQuery, 'masonry-gallery');
                
                // 6. Update Dashboard Layout
                updateDashboardForMood(selectedTheme);

                // 7. Show Song Suggestion Toast
                const lyricToast = document.getElementById('lyricToast');
                if (lyricToast && moodSongs[selectedTheme]) {
                    document.getElementById('toastSong').textContent = moodSongs[selectedTheme].name;
                    document.getElementById('toastLyric').textContent = moodSongs[selectedTheme].lyric;
                    lyricToast.classList.add('show');
                    setTimeout(() => lyricToast.classList.remove('show'), 6000);
                }
                moodboardView.classList.remove('initial-load'); // Remove after mood selection

                // 8. Scroll main content to top
                const mainContent = document.querySelector('.main-content');
                if (mainContent) mainContent.scrollTop = 0;
            });
        }
    }

    // --- LIVE API: Fetch Music (iTunes Search API) ---
    async function fetchMusic(query, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '<p class="glitch-text" style="font-size: 1.5rem; text-align: center; width: 100%;">SYNCING FREQUENCIES...</p>';
        
        try {
            // Use iTunes API for free, fast, 30-second audio previews and cover art without keys
            const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=15`);
            const data = await res.json();
            
            if (data.results && data.results.length > 0) {
                populateMasonry(containerId, data.results);
            } else {
                container.innerHTML = '<p>No tracks found.</p>';
            }
        } catch (err) {
            console.error('Error fetching music:', err);
            container.innerHTML = '<p>Error syncing tracks.</p>';
        }
    }

    // --- RENDER & PLAYBACK: Populate Grid ---
    function populateMasonry(containerId, tracks) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (containerId === 'masonry-gallery') {
            window.currentPopularSongsTracks = tracks.map(t => {
                const title = t.title || t.trackName || 'Popular Track';
                const artist = t.artist || t.artistName || 'Various Artists';
                const previewUrl = t.url || t.previewUrl || '';
                const art = t.artUrl || (t.artworkUrl100 ? t.artworkUrl100.replace('100x100bb', '600x600bb') : 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop');
                return {
                    id: t.id || t.trackId || ('pop_' + Math.random().toString(36).substring(7)),
                    title,
                    artist,
                    artUrl: art,
                    url: previewUrl
                };
            });
        }

        container.innerHTML = '';

        tracks.forEach(track => {
            // Upgrade artwork resolution from 100x100 to 600x600 if iTunes, else use our backend artUrl
            let highResArt = track.artUrl || (track.artworkUrl100 ? track.artworkUrl100.replace('100x100bb', '600x600bb') : 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop');
            const title = track.title || track.trackName || 'Unknown Track';
            const artist = track.artist || track.artistName || 'Unknown Artist';
            const previewUrl = track.url || track.previewUrl;
            
            const div = document.createElement('div');
            div.className = 'album-card';
            div.innerHTML = `
                <div class="album-card-cover">
                    <img src="${highResArt}" alt="${title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop';">
                    <div class="album-card-play">
                        <span class="material-icons">play_arrow</span>
                    </div>
                    <button class="queue-add-btn" title="Add to Queue">
                        <span class="material-icons">playlist_add</span>
                    </button>
                </div>
                <div class="album-card-info">
                    <p class="album-card-title">${title}</p>
                    <p class="album-card-artist">${artist}</p>
                </div>
            `;

            // One-tap queue button
            const queueBtn = div.querySelector('.queue-add-btn');
            queueBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                queueBtn.classList.add('added');
                queueBtn.innerHTML = '<span class="material-icons">check</span>';
                setTimeout(() => {
                    queueBtn.classList.remove('added');
                    queueBtn.innerHTML = '<span class="material-icons">playlist_add</span>';
                }, 1500);
                // Add to user queue state
                if (typeof addToUserQueue === 'function') {
                    addToUserQueue(title, artist, highResArt, previewUrl || '');
                }
                // Toast notification
                const lyricToast = document.getElementById('lyricToast');
                if (lyricToast) {
                    document.getElementById('toastSong').textContent = 'Added to Queue ✓';
                    document.getElementById('toastLyric').textContent = title;
                    lyricToast.classList.add('show');
                    setTimeout(() => lyricToast.classList.remove('show'), 2500);
                }
            });
            
            // --- UX OVERHAUL: Drag-and-Drop Queue ---
            div.draggable = true;
            div.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', title);
                const dropzone = document.getElementById('queue-dropzone');
                if (dropzone) dropzone.classList.add('active');
            });
            div.addEventListener('dragend', () => {
                const dropzone = document.getElementById('queue-dropzone');
                if (dropzone) dropzone.classList.remove('active');
            });

            // Click to Play
            div.addEventListener('click', () => {
                playTrack(previewUrl || '', title, artist, highResArt);
                // Update dynamic background
                if (typeof updateDynamicBg === 'function') updateDynamicBg(highResArt);
            });

            container.appendChild(div);
        });
    }
    window.populateMasonry = populateMasonry;


    function updatePlayerLikeState(trackTitle) {
        const playerLikeBtn = document.querySelector('.now-playing .like-btn');
        if (!playerLikeBtn) return;
        const user = getLoggedInUser();
        const isLiked = (user.likedSongs || []).includes(trackTitle);
        playerLikeBtn.textContent = isLiked ? 'favorite' : 'favorite_border';
        playerLikeBtn.style.color = isLiked ? 'var(--neon-pink, #ff69b4)' : '';
    }
    window.updatePlayerLikeState = updatePlayerLikeState;

    function highlightActivePlaylistRow(title) {
        document.querySelectorAll('.playlist-track-row').forEach(row => {
            const h4 = row.querySelector('h4');
            const playBtn = row.querySelector('.track-play-btn .material-icons');
            if (h4 && playBtn) {
                if (h4.textContent.trim().toLowerCase() === (title || '').toLowerCase()) {
                    row.style.background = 'rgba(255, 105, 180, 0.12)';
                    row.style.borderColor = 'var(--neon-pink, #ff69b4)';
                    playBtn.textContent = 'pause_circle_filled';
                    playBtn.style.color = 'var(--neon-pink, #ff69b4)';
                } else {
                    row.style.background = 'var(--bg-panel)';
                    row.style.borderColor = 'transparent';
                    playBtn.textContent = 'play_circle_filled';
                    playBtn.style.color = 'var(--text-main)';
                }
            }
        });
    }

    async function playTrack(url, title, artist, artUrl, isSync = false) {
        window.playTrack = playTrack;
        const activeCode = window.currentRoom || (typeof currentRoomCode !== 'undefined' ? currentRoomCode : null);

        // Show the bottom player
        const bottomPlayer = document.getElementById('bottom-player');
        if (bottomPlayer) bottomPlayer.style.display = 'flex';

        const trackTitleEl = document.querySelector('.track-title');
        const trackArtistEl = document.querySelector('.track-artist');
        const trackArtEl = document.querySelector('.track-art');
        if (trackTitleEl) trackTitleEl.textContent = title || 'Unknown Track';
        if (trackArtistEl) trackArtistEl.textContent = artist || 'Unknown Artist';
        if (trackArtEl && artUrl) trackArtEl.src = artUrl;

        // Synchronize Now Playing in Queue Drawer
        const qImg = document.querySelector('#queueNowPlaying img');
        const qTitle = document.querySelector('#queueNowPlaying .queue-track-title');
        const qArtist = document.querySelector('#queueNowPlaying .queue-track-artist');
        if (qImg && artUrl) qImg.src = artUrl;
        if (qTitle) qTitle.textContent = title || 'Unknown Track';
        if (qArtist) qArtist.textContent = artist || 'Unknown Artist';

        updatePlayerLikeState(title);
        highlightActivePlaylistRow(title);

        // Real-Time Mood History & Play Tracking
        if (typeof recordMoodListeningEvent === 'function') {
            recordMoodListeningEvent(title, artist);
        }

        // Check if URL is invalid, empty, or an old dead iTunes CDN link
        const isDeadCdn = !url || 
            url.includes('AudioPreview115') || 
            url.includes('AudioPreview125') || 
            url.includes('mzaf_7823528437021703273') || 
            url.includes('mzaf_1392558310011617280') || 
            url.includes('mzaf_14604456924045178752');

        if (isDeadCdn && title) {
            try {
                const query = `${title} ${artist || ''}`.trim();
                const itunesRes = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=1`);
                const itunesData = await itunesRes.json();
                if (itunesData.results && itunesData.results[0] && itunesData.results[0].previewUrl) {
                    url = itunesData.results[0].previewUrl;
                    if (!artUrl && itunesData.results[0].artworkUrl100) {
                        artUrl = itunesData.results[0].artworkUrl100.replace('100x100bb', '600x600bb');
                        if (trackArtEl) trackArtEl.src = artUrl;
                        if (qImg) qImg.src = artUrl;
                    }
                }
            } catch (err) {
                console.warn('iTunes live preview resolve note:', err);
            }
        }

        // Room Sync Event
        if (activeCode && !isSync && typeof window.publishRoomEvent === 'function') {
            window.publishRoomEvent(activeCode, {
                type: 'play',
                trackUrl: url,
                url: url,
                title: title,
                artist: artist,
                artUrl: artUrl,
                art: artUrl,
                currentTime: 0,
                timestamp: 0
            });
            const roomSyncTitle = document.getElementById('roomSyncTitle');
            const roomSyncArtist = document.getElementById('roomSyncArtist');
            const roomSyncArt = document.getElementById('roomSyncArt');
            if (roomSyncTitle) roomSyncTitle.textContent = title;
            if (roomSyncArtist) roomSyncArtist.textContent = artist;
            if (roomSyncArt && artUrl) roomSyncArt.src = artUrl;
        }

        if (url) {
            mainAudio.src = url;
            const playPromise = mainAudio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    if (playIcon) playIcon.textContent = 'pause';
                    if (trackArt) trackArt.classList.add('play');
                }).catch(async (e) => {
                    console.warn('Audio play attempt note:', e);
                    // On error, attempt fresh iTunes search fallback
                    try {
                        const q = `${title || ''} ${artist || ''}`.trim();
                        const r = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(q)}&media=music&limit=1`);
                        const d = await r.json();
                        if (d.results && d.results[0] && d.results[0].previewUrl && d.results[0].previewUrl !== url) {
                            mainAudio.src = d.results[0].previewUrl;
                            await mainAudio.play();
                            if (playIcon) playIcon.textContent = 'pause';
                            if (trackArt) trackArt.classList.add('play');
                            return;
                        }
                    } catch(e2) {}
                    // If still failed, reflect truth in UI
                    if (playIcon) playIcon.textContent = 'play_arrow';
                    if (trackArt) trackArt.classList.remove('play');
                });
            }
        } else {
            if (playIcon) playIcon.textContent = 'play_arrow';
            if (trackArt) trackArt.classList.remove('play');
        }
    }
    window.playTrack = playTrack;

    // Self-healing error listener for audio element
    mainAudio.addEventListener('error', async () => {
        console.warn('mainAudio encountered media error, attempting auto-repair...');
        const title = document.querySelector('.track-title')?.textContent;
        const artist = document.querySelector('.track-artist')?.textContent;
        if (title && title !== 'Track Title' && title !== 'Acid Rain') {
            try {
                const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(title + ' ' + (artist || ''))}&media=music&limit=1`);
                const data = await res.json();
                if (data.results && data.results[0] && data.results[0].previewUrl) {
                    const freshUrl = data.results[0].previewUrl;
                    if (freshUrl !== mainAudio.src) {
                        mainAudio.src = freshUrl;
                        await mainAudio.play();
                        if (playIcon) playIcon.textContent = 'pause';
                        if (trackArt) trackArt.classList.add('play');
                    }
                }
            } catch (err) {
                if (playIcon) playIcon.textContent = 'play_arrow';
                if (trackArt) trackArt.classList.remove('play');
            }
        }
    });

    // Like Button in Bottom Music Player Bar
    const playerLikeBtn = document.querySelector('.now-playing .like-btn');
    if (playerLikeBtn) {
        playerLikeBtn.style.cursor = 'pointer';
        playerLikeBtn.addEventListener('click', () => {
            const trackTitle = document.querySelector('.track-title')?.textContent.trim();
            if (!trackTitle || !mainAudio.src) return;

            const u = getLoggedInUser();
            if (!u.likedSongs) u.likedSongs = [];
            const idx = u.likedSongs.indexOf(trackTitle);

            let likedPl = (window.allPlaylists || []).find(p => p.name.toLowerCase() === 'liked songs');

            if (idx > -1) {
                u.likedSongs.splice(idx, 1);
                playerLikeBtn.textContent = 'favorite_border';
                playerLikeBtn.style.color = '';
                if (likedPl && likedPl.tracks) {
                    likedPl.tracks = likedPl.tracks.filter(t => t.title && t.title.toLowerCase() !== trackTitle.toLowerCase());
                }
                showSocialToast('Removed from Liked Songs', trackTitle);
            } else {
                u.likedSongs.push(trackTitle);
                playerLikeBtn.textContent = 'favorite';
                playerLikeBtn.style.color = 'var(--neon-pink, #ff69b4)';
                const art = document.querySelector('.track-art')?.src || '';
                const artist = document.querySelector('.track-artist')?.textContent || 'Unknown';
                if (likedPl) {
                    if (!likedPl.tracks) likedPl.tracks = [];
                    if (!likedPl.tracks.some(t => t.title && t.title.toLowerCase() === trackTitle.toLowerCase())) {
                        likedPl.tracks.push({
                            title: trackTitle,
                            artist: artist,
                            artUrl: art,
                            url: mainAudio.src || ''
                        });
                    }
                }
                showSocialToast('Added to Liked Songs ❤️', trackTitle);
            }
            setLoggedInUser(u);

            // Synchronize with any visible track rows on page
            document.querySelectorAll('.playlist-track-row').forEach(row => {
                const rowTitle = row.querySelector('h4')?.textContent.trim();
                if (rowTitle === trackTitle) {
                    const rowLikeBtn = row.querySelector('.track-like-btn');
                    const rowIcon = rowLikeBtn?.querySelector('.material-icons');
                    const isNowLiked = u.likedSongs.includes(trackTitle);
                    if (rowIcon) rowIcon.textContent = isNowLiked ? 'favorite' : 'favorite_border';
                    if (rowLikeBtn) rowLikeBtn.style.color = isNowLiked ? 'var(--neon-pink)' : 'var(--text-muted)';
                }
            });
        });
    }

    // --- PLAYER CONTROLS ---
    let isShuffled = false;
    let isRepeat = false;

    function fmtTime(sec) {
        if (!sec || isNaN(sec)) return '0:00';
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    playBtn.addEventListener('click', () => {
        if (mainAudio.paused) {
            if (mainAudio.src) {
                mainAudio.play();
                playIcon.textContent = 'pause';
                trackArt.classList.add('play');
            }
        } else {
            mainAudio.pause();
            playIcon.textContent = 'play_arrow';
            trackArt.classList.remove('play');
        }
    });

    const timeSpans = document.querySelectorAll('.progress-container .time');
    mainAudio.addEventListener('timeupdate', () => {
        if (mainAudio.duration) {
            const progress = (mainAudio.currentTime / mainAudio.duration) * 100;
            progressFill.style.width = progress + '%';
            if (timeSpans.length >= 2) {
                timeSpans[0].textContent = fmtTime(mainAudio.currentTime);
                timeSpans[1].textContent = fmtTime(mainAudio.duration);
            }
        }
    });

    // Progress Bar Scrubbing
    const progressBg = document.querySelector('.progress-bar-bg');
    if (progressBg) {
        progressBg.style.cursor = 'pointer';
        progressBg.addEventListener('click', (e) => {
            if (mainAudio.duration) {
                const rect = progressBg.getBoundingClientRect();
                mainAudio.currentTime = ((e.clientX - rect.left) / rect.width) * mainAudio.duration;
            }
        });
    }

    // Volume & Mute Controls
    const muteBtn = document.getElementById('muteBtn');
    const volBg = document.querySelector('.volume-bar-bg');
    const volFill = document.querySelector('.volume-bar-fill');
    if (volFill) volFill.style.width = '100%';

    if (muteBtn) {
        muteBtn.style.cursor = 'pointer';
        muteBtn.addEventListener('click', () => {
            mainAudio.muted = !mainAudio.muted;
            muteBtn.textContent = mainAudio.muted ? 'volume_off' : 'volume_up';
            if (volFill) volFill.style.width = mainAudio.muted ? '0%' : (mainAudio.volume * 100) + '%';
        });
    }
    if (volBg) {
        volBg.style.cursor = 'pointer';
        volBg.addEventListener('click', (e) => {
            const rect = volBg.getBoundingClientRect();
            const vol = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            mainAudio.volume = vol;
            mainAudio.muted = false;
            if (muteBtn) muteBtn.textContent = vol === 0 ? 'volume_off' : 'volume_up';
            if (volFill) volFill.style.width = (vol * 100) + '%';
        });
    }

    // Next / Previous / Shuffle / Repeat
    function playNextTrack() {
        if (isRepeat && mainAudio.src) {
            mainAudio.currentTime = 0;
            mainAudio.play();
            return;
        }

        // 1. Check user queued songs
        if (typeof userQueue !== 'undefined' && userQueue.length > 0) {
            const nextIdx = isShuffled ? Math.floor(Math.random() * userQueue.length) : 0;
            const [nextTrack] = userQueue.splice(nextIdx, 1);
            const queueList = document.getElementById('userQueueList');
            if (queueList && queueList.children.length > 0) {
                const childToRemove = queueList.children[nextIdx];
                if (childToRemove) childToRemove.remove();
            }
            if (nextTrack && nextTrack.url) {
                playTrack(nextTrack.url, nextTrack.title, nextTrack.artist, nextTrack.artUrl);
                return;
            }
        }

        // 2. Check active playlist tracklist
        if (window.currentTracklist && window.currentTracklist.length > 0) {
            if (isShuffled) {
                window.currentTrackIndex = Math.floor(Math.random() * window.currentTracklist.length);
            } else {
                window.currentTrackIndex = (window.currentTrackIndex || 0) + 1;
            }

            if (window.currentTrackIndex < window.currentTracklist.length) {
                const nextTrack = window.currentTracklist[window.currentTrackIndex];
                if (nextTrack && nextTrack.url) {
                    playTrack(nextTrack.url, nextTrack.title, nextTrack.artist, nextTrack.artUrl);
                    return;
                }
            }
        }

        // 3. Fallback: finished all tracks
        playIcon.textContent = 'play_arrow';
        trackArt.classList.remove('play');
        progressFill.style.width = '0%';
        highlightActivePlaylistRow('');
    }
    window.playNextTrack = playNextTrack;

    document.querySelectorAll('.control-buttons span.material-icons').forEach(btn => {
        btn.style.cursor = 'pointer';
        const txt = btn.textContent.trim();
        if (txt === 'skip_next') {
            btn.addEventListener('click', playNextTrack);
        } else if (txt === 'skip_previous') {
            btn.addEventListener('click', () => {
                if (mainAudio.currentTime > 3 || !mainAudio.src) {
                    mainAudio.currentTime = 0;
                } else if (window.currentTracklist && (window.currentTrackIndex || 0) > 0) {
                    window.currentTrackIndex = (window.currentTrackIndex || 0) - 1;
                    const prevTrack = window.currentTracklist[window.currentTrackIndex];
                    if (prevTrack && prevTrack.url) {
                        playTrack(prevTrack.url, prevTrack.title, prevTrack.artist, prevTrack.artUrl);
                    } else {
                        mainAudio.currentTime = 0;
                    }
                } else if (typeof playHistory !== 'undefined' && playHistory.length > 1) {
                    const prev = playHistory[1];
                    if (prev && prev.url) playTrack(prev.url, prev.title, prev.artist, prev.artUrl);
                } else {
                    mainAudio.currentTime = 0;
                }
            });
        } else if (txt === 'shuffle') {
            btn.addEventListener('click', () => {
                isShuffled = !isShuffled;
                btn.style.color = isShuffled ? 'var(--neon-pink)' : '';
                showSocialToast(isShuffled ? 'Shuffle Enabled 🔀' : 'Shuffle Off', 'Playback order updated');
            });
        } else if (txt === 'repeat') {
            btn.addEventListener('click', () => {
                isRepeat = !isRepeat;
                btn.style.color = isRepeat ? 'var(--neon-pink)' : '';
                showSocialToast(isRepeat ? 'Repeat Enabled 🔁' : 'Repeat Off', 'Track will loop continuously');
            });
        }
    });

    mainAudio.addEventListener('ended', playNextTrack);

    // Bottom Player Queue Drawer Toggle
    const playerQueueBtn = document.getElementById('openQueueDrawerPlayer');
    if (playerQueueBtn) {
        playerQueueBtn.addEventListener('click', () => {
            const queueDrawer = document.getElementById('queueDrawer');
            if (queueDrawer) {
                queueDrawer.classList.toggle('open');
                if (queueDrawer.classList.contains('open') && typeof refreshSmartQueue === 'function') {
                    refreshSmartQueue();
                }
            }
        });
    }

    // Bottom Player Fullscreen Toggle
    const playerFullscreenBtn = document.getElementById('playerFullscreenBtn');
    if (playerFullscreenBtn) {
        playerFullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
                playerFullscreenBtn.textContent = 'fullscreen_exit';
            } else {
                document.exitFullscreen().catch(() => {});
                playerFullscreenBtn.textContent = 'fullscreen';
            }
        });
    }

    // Sidebar "New Playlist" Button
    const sidebarNewPlaylistBtn = document.getElementById('sidebarNewPlaylistBtn');
    if (sidebarNewPlaylistBtn) {
        sidebarNewPlaylistBtn.addEventListener('click', () => {
            const name = prompt('Enter a name for your new playlist:');
            if (name && name.trim()) {
                const newPl = {
                    id: 'custom_' + Date.now(),
                    name: name.trim(),
                    description: `Custom playlist by ${getLoggedInUser().username || 'User'}`,
                    artUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
                    tracks: []
                };
                if (!window.allPlaylists) window.allPlaylists = [];
                window.allPlaylists.push(newPl);
                if (typeof renderPlaylists === 'function') renderPlaylists();
                if (typeof openPlaylistDetail === 'function') openPlaylistDetail(newPl);
                showSocialToast('Playlist Created ✨', name.trim());
            }
        });
    }

    // Global search input handling
    const globalSearchInput = document.querySelector('.search-bar input');
    if (globalSearchInput) {
        globalSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const q = globalSearchInput.value.trim();
                if (q) {
                    const homeTab = document.querySelector('.nav-item[data-target="home"]');
                    if (homeTab) homeTab.click();
                    if (typeof fetchMusic === 'function') fetchMusic(q, 'masonry-gallery');
                }
            }
        });
    }

    // --- SPA Navigation Logic ---
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetAttr = item.getAttribute('data-target');
            
            // Only execute view swapping if data-target exists
            if (targetAttr) {
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                views.forEach(view => view.classList.remove('active-view'));

                const targetId = targetAttr + '-view';
                const targetView = document.getElementById(targetId);
                if (targetView) targetView.classList.add('active-view');
                if (typeof window.purgeStrayBrackets === 'function') window.purgeStrayBrackets();
                
                // Toggle Search Bar visibility based on view
                const searchBar = document.querySelector('.search-bar');
                if (searchBar) {
                    if (targetAttr === 'moodboard') {
                        searchBar.style.display = 'none';
                    } else {
                        searchBar.style.display = 'flex';
                    }
                }

                // Jump straight to the Mood options when the Mood Board tab is clicked
                if (targetAttr === 'moodboard' && typeof showStep === 'function') {
                    const moodStepEl = document.getElementById('stepMood');
                    if (moodStepEl) showStep(moodStepEl);
                }

                if (targetAttr === 'dedications') {
                    renderDedications();
                    if (typeof renderDedicationPlaylist === 'function') renderDedicationPlaylist();
                }

                if (targetAttr === 'playlists') {
                    const mainContent = document.getElementById('playlistsMainContent');
                    const detailSection = document.getElementById('playlistDetailSection');
                    if (mainContent && detailSection) {
                        detailSection.style.display = 'none';
                        mainContent.style.display = 'block';
                    }
                }

                if (targetAttr === 'library') {
                    if (typeof renderMoodHistory === 'function') {
                        renderMoodHistory();
                    }
                }

                if (targetAttr === 'profile') {
                    if (typeof syncUserProfile === 'function') syncUserProfile();
                    if (typeof renderProfileHeader === 'function') renderProfileHeader();
                    if (typeof renderMyPlaylists === 'function') renderMyPlaylists();
                    if (typeof renderSharedPlaylists === 'function') renderSharedPlaylists();
                    if (typeof renderRooms === 'function') renderRooms();
                    if (typeof renderFriends === 'function') renderFriends();
                }
            }
        });
    });



    // --- NEW ADVANCED FEATURES ---

    // 1. Social Hub Modal
    const socialModal = document.getElementById('socialModal');
    const openSocialBtn = document.getElementById('openSocialBtn');
    const closeSocialBtn = document.getElementById('closeSocialBtn');

    if (openSocialBtn && socialModal) {
        openSocialBtn.addEventListener('click', () => {
            socialModal.classList.add('active');
        });
        if (closeSocialBtn) {
            closeSocialBtn.addEventListener('click', () => {
                socialModal.classList.remove('active');
            });
        }
    }

    // Focus mode removed as requested
    document.body.classList.remove('focus-mode-active');

    // 3. Share Timestamp
    const shareTimestampBtn = document.getElementById('shareTimestampBtn');
    if (shareTimestampBtn) {
        shareTimestampBtn.addEventListener('click', () => {
            const time = Math.floor(mainAudio.currentTime);
            const mockUrl = `audiotrack.app/listen?track=current#t=${time}s`;
            
            const copySuccess = () => {
                const lyricToast = document.getElementById('lyricToast');
                if (lyricToast) {
                    document.getElementById('toastSong').textContent = "Timestamp Copied!";
                    document.getElementById('toastLyric').textContent = mockUrl;
                    lyricToast.classList.add('show');
                    setTimeout(() => lyricToast.classList.remove('show'), 3000);
                }
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(mockUrl).then(copySuccess).catch(() => {
                    try {
                        const tempInput = document.createElement('textarea');
                        tempInput.value = mockUrl;
                        document.body.appendChild(tempInput);
                        tempInput.select();
                        document.execCommand('copy');
                        document.body.removeChild(tempInput);
                        copySuccess();
                    } catch(e) {
                        copySuccess();
                    }
                });
            } else {
                copySuccess();
            }
        });
    }

    // 4. Gesture Controls (Swipe)
    let touchStartX = 0;
    let touchEndX = 0;
    
    function handleGesture() {
        if (touchEndX < touchStartX - 50) {
            // Swipe Left (Next Track)
            const lyricToast = document.getElementById('lyricToast');
            document.getElementById('toastSong').textContent = "Gesture Detected: Skip Next";
            document.getElementById('toastLyric').textContent = "Loading next track from AI Queue...";
            lyricToast.classList.add('show');
            setTimeout(() => lyricToast.classList.remove('show'), 2000);
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe Right (Previous Track)
            const lyricToast = document.getElementById('lyricToast');
            document.getElementById('toastSong').textContent = "Gesture Detected: Skip Previous";
            document.getElementById('toastLyric').textContent = "Loading previous track...";
            lyricToast.classList.add('show');
            setTimeout(() => lyricToast.classList.remove('show'), 2000);
        }
    }
    
    document.body.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.body.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });
    // 5. Dedicate Song Modal (2-Step Workflow: Step 1 = Choose Song, Step 2 = Choose Friend from Connections)
    const dedicateModal = document.getElementById('dedicateModal');
    const openDedicateBtn = document.getElementById('openDedicateBtn');
    const cancelDedicateBtn = document.getElementById('cancelDedicateBtn');
    const cancelDedicateStep1Btn = document.getElementById('cancelDedicateStep1Btn');
    const closeDedicateModalBtn = document.getElementById('closeDedicateModalBtn');
    const submitDedicateBtn = document.getElementById('submitDedicateBtn');
    const btnBackToStep1 = document.getElementById('btnBackToStep1');
    const btnChangeDedicateSong = document.getElementById('btnChangeDedicateSong');
    const dedicateSongSearch = document.getElementById('dedicateSongSearch');

    let dedicateSelectedTrack = null;
    let dedicateSelectedFriend = null;
    let dedicateSelectedMood = 'romantic';
    let dedicateSearchDebounceTimer = null;

    function closeDedicateModal() {
        if (!dedicateModal) return;
        dedicateModal.classList.remove('active');
        dedicateSelectedTrack = null;
        dedicateSelectedFriend = null;
        if (dedicateSongSearch) dedicateSongSearch.value = '';
        const messageEl = document.getElementById('dedicateMessageInput');
        if (messageEl) messageEl.value = '';
    }

    function renderStep1SongList(tracksToDisplay = null) {
        const resultsEl = document.getElementById('dedicateSongResults');
        if (!resultsEl) return;

        let list = tracksToDisplay;
        if (!list) {
            // Default curated picks
            list = [
                {
                    title: 'Midnight City',
                    artist: 'M83',
                    artUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop',
                    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a'
                },
                {
                    title: 'Until I Found You',
                    artist: 'Stephen Sanchez',
                    artUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=300&auto=format&fit=crop',
                    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bc/d8/21/bcd82103-3b68-9c24-a0cb-07df7a5b0cce/mzaf_14604456924045178752.plus.aac.p.m4a'
                },
                {
                    title: 'Blinding Lights',
                    artist: 'The Weeknd',
                    artUrl: 'https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=300&auto=format&fit=crop',
                    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/37/14/08/37140801-adfd-4c90-b7b2-30c0d58e6de5/mzaf_1392558310011617280.plus.aac.p.m4a'
                },
                {
                    title: 'Levitating',
                    artist: 'Dua Lipa',
                    artUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop',
                    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/37/14/08/37140801-adfd-4c90-b7b2-30c0d58e6de5/mzaf_1392558310011617280.plus.aac.p.m4a'
                },
                {
                    title: 'Starboy',
                    artist: 'The Weeknd ft. Daft Punk',
                    artUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop',
                    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a'
                },
                {
                    title: 'As It Was',
                    artist: 'Harry Styles',
                    artUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=300&auto=format&fit=crop',
                    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bc/d8/21/bcd82103-3b68-9c24-a0cb-07df7a5b0cce/mzaf_14604456924045178752.plus.aac.p.m4a'
                }
            ];

            // If user has recent played tracks, prepend up to 3 of them
            if (window.recentPlayedSongs && window.recentPlayedSongs.length > 0) {
                const recents = window.recentPlayedSongs.slice(0, 3).map(r => ({
                    title: r.title,
                    artist: r.artist,
                    artUrl: r.artUrl,
                    url: r.url
                }));
                list = [...recents, ...list];
            }
        }

        resultsEl.innerHTML = '';
        if (list.length === 0) {
            resultsEl.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 1.5rem 0;">No songs found matching your search. Try another query.</p>';
            return;
        }

        list.forEach(song => {
            const card = document.createElement('div');
            card.className = 'ded-song-select-card';
            const art = song.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';
            card.innerHTML = `
                <img src="${art}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';" alt="${song.title}">
                <div class="song-meta">
                    <p class="song-title">${song.title}</p>
                    <p class="song-artist">${song.artist || 'Unknown Artist'}</p>
                </div>
                <button type="button" class="neon-btn select-song-btn" style="padding: 0.35rem 0.8rem; font-size: 0.75rem; white-space: nowrap;">CHOOSE</button>
            `;
            card.addEventListener('click', () => {
                dedicateSelectedTrack = {
                    title: song.title,
                    artist: song.artist || 'Unknown Artist',
                    artUrl: art,
                    url: song.url || ''
                };
                goToDedicateStep2();
            });
            resultsEl.appendChild(card);
        });
    }

    function goToDedicateStep1() {
        if (!dedicateModal) return;
        const step1 = document.getElementById('dedicateStep1');
        const step2 = document.getElementById('dedicateStep2');
        const ind1 = document.getElementById('stepIndicator1');
        const ind2 = document.getElementById('stepIndicator2');
        const modalTitle = document.getElementById('dedicateModalTitle');

        if (step1) step1.style.display = 'block';
        if (step2) step2.style.display = 'none';

        if (modalTitle) modalTitle.textContent = 'Choose Song to Dedicate';

        if (ind1) {
            ind1.classList.add('active');
            ind1.style.background = 'var(--neon-pink)';
            ind1.style.color = '#000';
            ind1.innerHTML = '<span>1</span> <span>Choose Song</span>';
        }
        if (ind2) {
            ind2.classList.remove('active');
            ind2.style.background = 'rgba(255,255,255,0.08)';
            ind2.style.color = 'var(--text-muted)';
            ind2.innerHTML = '<span>2</span> <span>Choose Friend</span>';
        }

        // Check if track is currently playing in player
        const mainAudio = document.getElementById('mainAudio');
        const titleEl = document.querySelector('.track-title');
        const artistEl = document.querySelector('.track-artist');
        const artEl = document.querySelector('.track-art');
        const npBanner = document.getElementById('dedicateNowPlayingBanner');
        const npArt = document.getElementById('npBannerArt');
        const npTitle = document.getElementById('npBannerTitle');

        if (mainAudio && mainAudio.src && titleEl && titleEl.textContent && titleEl.textContent !== 'Acid Rain' && titleEl.textContent !== 'Select a song to play' && npBanner) {
            npBanner.style.display = 'flex';
            if (npArt) npArt.src = artEl?.src || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';
            if (npTitle) npTitle.textContent = `${titleEl.textContent} - ${artistEl?.textContent || ''}`;
            npBanner.onclick = () => {
                dedicateSelectedTrack = {
                    title: titleEl.textContent,
                    artist: artistEl?.textContent || 'Artist',
                    artUrl: artEl?.src || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop',
                    url: mainAudio.src
                };
                goToDedicateStep2();
            };
        } else if (npBanner) {
            npBanner.style.display = 'none';
        }

        // Render starter song suggestions
        renderStep1SongList();
        if (dedicateSongSearch) {
            setTimeout(() => dedicateSongSearch.focus(), 150);
        }
    }

    function goToDedicateStep2() {
        if (!dedicateModal || !dedicateSelectedTrack) return;
        const step1 = document.getElementById('dedicateStep1');
        const step2 = document.getElementById('dedicateStep2');
        const ind1 = document.getElementById('stepIndicator1');
        const ind2 = document.getElementById('stepIndicator2');
        const modalTitle = document.getElementById('dedicateModalTitle');

        if (step1) step1.style.display = 'none';
        if (step2) step2.style.display = 'block';

        if (modalTitle) modalTitle.textContent = 'Choose Friend from Connections';

        if (ind1) {
            ind1.classList.remove('active');
            ind1.style.background = 'rgba(255,255,255,0.12)';
            ind1.style.color = 'var(--text-main)';
            ind1.innerHTML = '<span>1</span> <span>Song Chosen ✓</span>';
        }
        if (ind2) {
            ind2.classList.add('active');
            ind2.style.background = 'var(--neon-pink)';
            ind2.style.color = '#000';
            ind2.innerHTML = '<span>2</span> <span>Choose Friend</span>';
        }

        // Update selected song preview banner
        const previewArt = document.getElementById('dedicatePreviewArt');
        const previewTitle = document.getElementById('dedicatePreviewTitle');
        const previewArtist = document.getElementById('dedicatePreviewArtist');
        if (previewArt) {
            previewArt.src = dedicateSelectedTrack.artUrl;
            previewArt.style.display = 'block';
        }
        if (previewTitle) previewTitle.textContent = dedicateSelectedTrack.title;
        if (previewArtist) previewArtist.textContent = dedicateSelectedTrack.artist;

        // Populate friends from connections
        const user = getLoggedInUser();
        const friendsGrid = document.getElementById('dedicateFriendsGrid');
        const selectEl = document.getElementById('dedicateFriendSelect');

        let friends = (user && user.connections && user.connections.length > 0) ? user.connections : [];
        if (friends.length === 0) {
            friends = ["Alex", "Sammy", "Charlie"];
            if (user) {
                user.connections = friends;
                if (typeof setLoggedInUser === 'function') setLoggedInUser(user);
            }
        }

        if (selectEl) {
            selectEl.innerHTML = '';
            friends.forEach(conn => {
                const opt = document.createElement('option');
                opt.value = conn;
                opt.textContent = `@${conn}`;
                selectEl.appendChild(opt);
            });
        }

        if (friendsGrid) {
            friendsGrid.innerHTML = '';
            // If none currently selected or not in friends, pick first
            if (!dedicateSelectedFriend || !friends.includes(dedicateSelectedFriend)) {
                dedicateSelectedFriend = friends[0];
            }
            if (selectEl) selectEl.value = dedicateSelectedFriend;

            friends.forEach((friend) => {
                const isSelected = friend === dedicateSelectedFriend;
                const fCard = document.createElement('div');
                fCard.className = 'ded-friend-card' + (isSelected ? ' selected' : '');
                fCard.setAttribute('data-username', friend);
                fCard.innerHTML = `
                    <span class="material-icons selected-check">check_circle</span>
                    <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(friend)}" onerror="this.onerror=null; this.src='https://api.dicebear.com/9.x/avataaars/svg?seed=Friend';" alt="${friend}">
                    <p class="friend-name">@${friend}</p>
                    <p class="friend-status">● Online</p>
                `;
                fCard.addEventListener('click', () => {
                    document.querySelectorAll('#dedicateFriendsGrid .ded-friend-card').forEach(c => c.classList.remove('selected'));
                    fCard.classList.add('selected');
                    dedicateSelectedFriend = friend;
                    if (selectEl) selectEl.value = friend;
                });
                friendsGrid.appendChild(fCard);
            });
        }

        if (submitDedicateBtn) submitDedicateBtn.disabled = false;
    }

    function openDedicateModal(track) {
        if (!dedicateModal) return;
        if (track && track.title) {
            dedicateSelectedTrack = {
                title: track.title,
                artist: track.artist || 'Artist',
                artUrl: track.artUrl || track.trackArt || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop',
                url: track.url || track.previewUrl || track.trackUrl || ''
            };
            dedicateModal.classList.add('active');
            goToDedicateStep2();
        } else {
            dedicateModal.classList.add('active');
            goToDedicateStep1();
        }
    }
    window.openDedicateModal = openDedicateModal;
    window.openDedicateWorkflow = () => openDedicateModal(null);

    // Live search in Step 1
    if (dedicateSongSearch) {
        dedicateSongSearch.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            clearTimeout(dedicateSearchDebounceTimer);
            if (!query) {
                renderStep1SongList();
                return;
            }
            dedicateSearchDebounceTimer = setTimeout(async () => {
                const resultsEl = document.getElementById('dedicateSongResults');
                if (resultsEl) resultsEl.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 1.5rem 0;">Searching songs...</p>';
                try {
                    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=12`);
                    const data = await res.json();
                    if (data && data.results && data.results.length > 0) {
                        const tracks = data.results.map(r => ({
                            title: r.trackName,
                            artist: r.artistName,
                            artUrl: r.artworkUrl100 ? r.artworkUrl100.replace('100x100bb', '400x400bb') : '',
                            url: r.previewUrl
                        }));
                        renderStep1SongList(tracks);
                    } else {
                        renderStep1SongList([]);
                    }
                } catch (err) {
                    console.error('Dedicate search error:', err);
                    renderStep1SongList([]);
                }
            }, 300);
        });
    }

    if (openDedicateBtn) {
        openDedicateBtn.addEventListener('click', () => {
            openDedicateModal();
        });
    }

    if (btnBackToStep1) {
        btnBackToStep1.addEventListener('click', () => goToDedicateStep1());
    }
    if (btnChangeDedicateSong) {
        btnChangeDedicateSong.addEventListener('click', () => goToDedicateStep1());
    }
    if (cancelDedicateStep1Btn) {
        cancelDedicateStep1Btn.addEventListener('click', closeDedicateModal);
    }
    if (closeDedicateModalBtn) {
        closeDedicateModalBtn.addEventListener('click', closeDedicateModal);
    }
    if (cancelDedicateBtn) {
        cancelDedicateBtn.addEventListener('click', closeDedicateModal);
    }

    // Mood tag chips in Step 2
    document.addEventListener('click', (e) => {
        const moodBtn = e.target.closest('.ded-mood-tag-btn');
        if (moodBtn) {
            document.querySelectorAll('.ded-mood-tag-btn').forEach(b => {
                b.classList.remove('active');
                b.style.borderColor = 'rgba(255,255,255,0.2)';
                b.style.background = 'transparent';
                b.style.color = 'var(--text-muted)';
            });
            moodBtn.classList.add('active');
            moodBtn.style.borderColor = 'var(--neon-pink)';
            moodBtn.style.background = 'rgba(255,0,127,0.2)';
            moodBtn.style.color = '#fff';
            dedicateSelectedMood = moodBtn.getAttribute('data-mood') || 'romantic';
        }
    });

    if (submitDedicateBtn && dedicateModal) {
        submitDedicateBtn.addEventListener('click', async () => {
            if (!dedicateSelectedTrack) {
                goToDedicateStep1();
                return;
            }

            const selectEl = document.getElementById('dedicateFriendSelect');
            const messageEl = document.getElementById('dedicateMessageInput');
            const friendUsername = dedicateSelectedFriend || (selectEl ? selectEl.value : null);
            const message = messageEl ? messageEl.value.trim() : '';

            if (!friendUsername) {
                if (typeof showSocialToast === 'function') {
                    showSocialToast('Select a Friend', 'Please choose a friend from your connection to dedicate this song.');
                }
                return;
            }

            const user = getLoggedInUser();
            const trackTitle = dedicateSelectedTrack.title || 'Track';
            const trackArtist = dedicateSelectedTrack.artist || 'Artist';
            const trackUrl = dedicateSelectedTrack.url || '';
            const trackArt = dedicateSelectedTrack.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';

            const dedicationPayload = {
                fromUser: user.username || 'DJ_Glitch',
                toUser: friendUsername,
                trackTitle: trackTitle,
                trackArtist: trackArtist,
                trackUrl: trackUrl,
                trackArt: trackArt,
                mood: dedicateSelectedMood || 'romantic',
                message: message || `Dedicated with love to @${friendUsername}`
            };

            submitDedicateBtn.textContent = 'SENDING...';
            submitDedicateBtn.disabled = true;

            try {
                await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(friendUsername)}/dedicate`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dedicationPayload)
                });
            } catch (e) {
                console.warn("Dedication API notice:", e);
            }

            // Always add to local user dedications for instant responsiveness
            const newDed = {
                id: 'ded_' + Date.now(),
                ...dedicationPayload,
                timestamp: new Date().toISOString()
            };
            if (!user.dedications) user.dedications = [];
            user.dedications.unshift(newDed);
            setLoggedInUser(user);

            // Re-render Dedications Grid & Dedication Playlist
            if (typeof renderDedications === 'function') renderDedications();
            if (typeof renderDedicationPlaylist === 'function') renderDedicationPlaylist();

            showSocialToast("Dedication Sent! 🎁", `"${trackTitle}" dedicated to @${friendUsername}`);

            submitDedicateBtn.textContent = 'SEND 🎁';
            submitDedicateBtn.disabled = false;
            closeDedicateModal();
        });
    }

    // 6. Birthday Mode & Confetti
    const simulateBirthdayBtn = document.getElementById('simulateBirthdayBtn');
    const confettiContainer = document.getElementById('confettiContainer');

    function createConfetti() {
        if (!confettiContainer) return;
        confettiContainer.innerHTML = '';
        const colors = ['#ff3366', '#00e5ff', '#ffd700', '#ffffff'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);
        }
    }

    if (simulateBirthdayBtn) {
        simulateBirthdayBtn.addEventListener('click', () => {
            document.body.classList.toggle('birthday-mode');
            if (document.body.classList.contains('birthday-mode')) {
                simulateBirthdayBtn.innerHTML = '<span class="material-icons">celebration</span> Happy Birthday!';
                createConfetti();
                
                // Show AI Surprise Toast
                setTimeout(() => {
                    const lyricToast = document.getElementById('lyricToast');
                    document.getElementById('toastSong').textContent = "AI Surprise Track Unlocked! 🎉";
                    document.getElementById('toastLyric').textContent = "Based on your history, we added a special track to your list.";
                    lyricToast.classList.add('show');
                    setTimeout(() => lyricToast.classList.remove('show'), 4000);
                }, 1000);
            } else {
                simulateBirthdayBtn.innerHTML = '<span class="material-icons">cake</span> It\'s My Birthday!';
                confettiContainer.innerHTML = '';
            }
        });
    }

    // 7. Artist Profile View & Drilldown
    const historyArtists = document.querySelectorAll('.history-artist');
    const backToHomeBtns = document.querySelectorAll('.back-to-home-btn');
    
    backToHomeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            views.forEach(view => view.classList.remove('active-view'));
            navItems.forEach(nav => nav.classList.remove('active'));
            const homeNav = document.querySelector('[data-target="home"]');
            if(homeNav) homeNav.classList.add('active');
            document.getElementById('home-view').classList.add('active-view');
        });
    });



    function bindHistoryArtistListeners() {
        const historyArtists = document.querySelectorAll('.history-artist, .artist-circle');
        historyArtists.forEach(artistEl => {
            artistEl.style.cursor = 'pointer';
            artistEl.addEventListener('click', () => {
                const artistName = artistEl.getAttribute('data-artist') || artistEl.querySelector('p')?.textContent?.trim() || artistEl.querySelector('img')?.alt || 'Artist';
                const artistImg = artistEl.querySelector('img')?.src || '';
                
                // Switch view
                views.forEach(view => view.classList.remove('active-view'));
                document.getElementById('artist-profile-view').classList.add('active-view');
                navItems.forEach(nav => nav.classList.remove('active')); // deselect all navs
                
                // Update UI
                const nameHeader = document.getElementById('artistProfileName');
                if (nameHeader) nameHeader.textContent = artistName;
                const bgEl = document.getElementById('artistProfileBg');
                if (bgEl) bgEl.style.backgroundImage = `url('${artistImg || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop'}')`;
                const listenersEl = document.getElementById('artistMonthlyListeners');
                if (listenersEl) {
                    let hash = 0;
                    for (let i = 0; i < artistName.length; i++) hash = ((hash << 5) - hash) + artistName.charCodeAt(i);
                    listenersEl.textContent = `${(Math.abs(hash % 450) / 10 + 5.0).toFixed(1)}M Monthly Listeners`;
                }
                
                // Fetch top 15 tracks for artist
                fetchMusic(artistName, 'artist-tracks-gallery');
            });
        });

        // Wire PLAY and FOLLOW buttons on artist profile view
        const btnArtistPlay = document.getElementById('btnArtistPlay');
        if (btnArtistPlay && !btnArtistPlay.dataset.bound) {
            btnArtistPlay.dataset.bound = 'true';
            btnArtistPlay.addEventListener('click', () => {
                const artistName = document.getElementById('artistProfileName')?.textContent || 'Artist';
                fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(artistName)}&media=music&limit=1`)
                    .then(r => r.json())
                    .then(data => {
                        if (data.results && data.results[0] && data.results[0].previewUrl) {
                            const t = data.results[0];
                            const art = t.artworkUrl100 ? t.artworkUrl100.replace('100x100bb', '600x600bb') : '';
                            playTrack(t.previewUrl, t.trackName, t.artistName, art);
                        }
                    })
                    .catch(() => {});
            });
        }

        const btnArtistFollow = document.getElementById('btnArtistFollow');
        if (btnArtistFollow && !btnArtistFollow.dataset.bound) {
            btnArtistFollow.dataset.bound = 'true';
            btnArtistFollow.addEventListener('click', () => {
                const artistName = document.getElementById('artistProfileName')?.textContent || 'Artist';
                const isFollowing = btnArtistFollow.dataset.following === 'true';
                if (isFollowing) {
                    btnArtistFollow.dataset.following = 'false';
                    btnArtistFollow.innerHTML = 'FOLLOW';
                    btnArtistFollow.style.background = 'transparent';
                    btnArtistFollow.style.color = '#fff';
                    showSocialToast('Unfollowed', `You unfollowed ${artistName}`);
                } else {
                    btnArtistFollow.dataset.following = 'true';
                    btnArtistFollow.innerHTML = '<span class="material-icons" style="font-size: 1rem; vertical-align: middle;">check</span> FOLLOWING';
                    btnArtistFollow.style.background = 'var(--neon-pink)';
                    btnArtistFollow.style.color = '#fff';
                    showSocialToast('Following! 🎧', `You are now following ${artistName}`);
                }
            });
        }
    }

    // Call it once for initial hardcoded layout (if no savedTheme)
    bindHistoryArtistListeners();

    // --- UX OVERHAUL: Zen Mode ---
    document.body.addEventListener('dblclick', (e) => {
        // Prevent toggle if clicking on interactive elements
        if (e.target.closest('.player-controls') || e.target.closest('button') || e.target.closest('input') || e.target.closest('.view-container')) return;
        document.body.classList.toggle('zen-mode');
    });

    // --- UX OVERHAUL: Smart Queue Dropzone ---
    const dropzone = document.getElementById('queue-dropzone');
    if (dropzone) {
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('drag-over');
        });
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('drag-over');
        });
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('drag-over');
            dropzone.classList.remove('active');
            const trackName = e.dataTransfer.getData('text/plain');
            
            // Show toast
            const lyricToast = document.getElementById('lyricToast');
            if (lyricToast) {
                document.getElementById('toastSong').textContent = "Added to Queue";
                document.getElementById('toastLyric').textContent = trackName;
                lyricToast.classList.add('show');
                setTimeout(() => lyricToast.classList.remove('show'), 3000);
            }
        });
    }




    function updateDashboardForMood(theme) {
        const data = moodSongs[theme];
        if (!data) return;

        // 1. Update Hero Greeting
        const greetingTitle = document.getElementById('greetingTitle');
        const greetingSub = document.getElementById('greetingSub');
        
        if (greetingTitle && greetingSub) {
            greetingTitle.textContent = data.greeting || `Vibe check: ${theme.toUpperCase()} 🎧`;
            greetingSub.textContent = data.subGreeting || `Handpicked playlists matching your ${theme} mood.`;
        }
        
        // 2. Play greeting button
        const playBtn = document.getElementById('playGreetingBtn');
        if (playBtn) {
            playBtn.onclick = () => {
                if (data.song) {
                    playTrack(data.song, data.name, data.artist, data.img);
                    if (typeof updateDynamicBg === 'function') updateDynamicBg(data.img);
                } else {
                    const query = data.query || theme;
                    fetchMusic(query, 'masonry-gallery');
                }
            };
        }

        // 3. Update Suggested For You Titles Dynamically
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        const moodName = capitalize(theme);
        
        let pluralMood = moodName + 's';
        if (theme === 'lofi') pluralMood = 'Lofis';
        else if (theme === 'focus') pluralMood = 'Focuses';
        else if (theme === 'party') pluralMood = 'Parties';
        else if (theme === 'happy') pluralMood = 'Happies';
        
        const card1 = document.getElementById('suggestedCard1');
        const card2 = document.getElementById('suggestedCard2');
        const card3 = document.getElementById('suggestedCard3');
        
        if (card1) card1.innerHTML = `Top ${moodName}<br>Songs`;
        if (card2) card2.innerHTML = `Viral ${moodName}<br>Hits`;
        if (card3) card3.innerHTML = `Trending<br>${pluralMood}`;
    }

    // ============================================
    // PHASE 1: CONTEXTUAL GREETING BANNER
    // ============================================
    function updateGreeting() {
        const hour = new Date().getHours();
        const titleEl = document.getElementById('greetingTitle');
        const subEl = document.getElementById('greetingSub');
        const nameEl = document.getElementById('greetingPlaylistName');
        const playBtn = document.getElementById('playGreetingBtn');
        if (!titleEl) return;

        let greeting, playlist, query;
        if (hour < 6)       { greeting = 'Late Night Owl 🦉'; playlist = 'Late Night Mix'; query = 'late night chill'; }
        else if (hour < 10) { greeting = 'Good Morning ☀️'; playlist = 'Morning Energy'; query = 'morning coffee music'; }
        else if (hour < 14) { greeting = 'Midday Flow 🎧'; playlist = 'Focus & Flow'; query = 'focus instrumental'; }
        else if (hour < 17) { greeting = 'Good Afternoon 🌤️'; playlist = 'Afternoon Vibes'; query = 'afternoon chill pop'; }
        else if (hour < 21) { greeting = 'Good Evening 🌙'; playlist = 'Evening Vibes'; query = 'evening relaxing'; }
        else                { greeting = 'Night Mode 🌃'; playlist = 'Night Drive'; query = 'night drive music'; }

        titleEl.textContent = greeting;
        subEl.textContent = `Here's your ${playlist}`;
        if (nameEl) nameEl.textContent = playlist;
        if (playBtn) {
            playBtn.addEventListener('click', async () => {
                try {
                    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=15`);
                    const data = await res.json();
                    if (data.results && data.results.length > 0) {
                        populateMasonry('masonry-gallery', data.results);
                        const first = data.results[0];
                        const art = first.artworkUrl100 ? first.artworkUrl100.replace('100x100bb', '600x600bb') : '';
                        playTrack(first.previewUrl, first.trackName, first.artistName, art);
                    } else {
                        fetchMusic(query, 'masonry-gallery');
                    }
                } catch(e) {
                    fetchMusic(query, 'masonry-gallery');
                }
            });
        }
    }
    updateGreeting();

    // AI Mood Recommendation Banner
    function updateMoodAI() {
        const hour = new Date().getHours();
        const banner = document.getElementById('moodAiText');
        if (!banner) return;
        let rec;
        if (hour < 6)       rec = 'Lofi';
        else if (hour < 10) rec = 'Happy';
        else if (hour < 14) rec = 'Focus';
        else if (hour < 17) rec = 'Chill';
        else if (hour < 21) rec = 'Romantic';
        else                rec = 'Lofi';
        banner.innerHTML = `Based on the time, we recommend: <strong>${rec}</strong>`;
    }
    updateMoodAI();

    // ============================================
    // PHASE 1: ACTIVITY FILTER PILLS
    // ============================================
    const activityQueries = {
        all: 'trending pop',
        morning: 'morning coffee music',
        workout: 'workout motivation',
        study: 'study lofi focus',
        drive: 'night drive synthwave',
        latenight: 'late night r&b',
        party: 'party dance EDM hits'
    };

    document.querySelectorAll('.activity-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.activity-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const activity = pill.getAttribute('data-activity');
            const query = activityQueries[activity] || 'trending pop';
            fetchMusic(query, 'masonry-gallery');
        });
    });



    // ============================================
    // PHASE 1: DYNAMIC BACKGROUND COLOR
    // ============================================
    function updateDynamicBg(artUrl) {
        const bg = document.getElementById('dynamicBg');
        if (!bg) return;
        // Create a subtle radial gradient inspired by the track
        bg.style.background = `radial-gradient(ellipse at 30% 50%, var(--neon-pink), transparent 70%), radial-gradient(ellipse at 70% 50%, var(--purple-haze), transparent 70%)`;
    }

    // ============================================
    // PHASE 1: SMART QUEUE AI + PLAY HISTORY
    // ============================================
    let playHistory = JSON.parse(localStorage.getItem('audioTrackPlayHistory')) || [];
    let userQueue = [];

    function addToPlayHistory(track) {
        playHistory.unshift(track);
        if (playHistory.length > 50) playHistory = playHistory.slice(0, 50);
        localStorage.setItem('audioTrackPlayHistory', JSON.stringify(playHistory));
        // Update mood tracker
        trackMoodUsage();
    }

    function getSmartQueueQuery() {
        const savedTheme = localStorage.getItem(getUserThemeKey()) || 'lofi';
        const hour = new Date().getHours();
        let timeContext = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'night';
        const lastArtist = playHistory.length > 0 ? playHistory[0].artist : '';
        const moodQuery = moodSongs[savedTheme]?.query || 'trending';
        return `${lastArtist} ${moodQuery} ${timeContext}`.trim();
    }

    async function refreshSmartQueue() {
        const query = getSmartQueueQuery();
        const list = document.getElementById('smartQueueList');
        if (!list) return;
        list.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 1rem;">Loading AI suggestions...</p>';
        try {
            const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=5`);
            const data = await res.json();
            if (data.results && data.results.length > 0) {
                list.innerHTML = '';
                data.results.forEach(track => {
                    const art = track.artworkUrl100?.replace('100x100bb', '200x200bb') || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';
                    const div = document.createElement('div');
                    div.className = 'queue-track';
                    div.innerHTML = `
                        <img src="${art}" alt="${track.trackName}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';">
                        <div>
                            <p class="queue-track-title">${track.trackName || 'Unknown'}</p>
                            <p class="queue-track-artist">${track.artistName || ''}</p>
                        </div>
                    `;
                    div.addEventListener('click', () => {
                        if (track.previewUrl) playTrack(track.previewUrl, track.trackName, track.artistName, art);
                    });
                    list.appendChild(div);
                });
            }
        } catch(e) { console.error('Smart queue error:', e); }
    }

    const refreshBtn = document.getElementById('refreshSmartQueue');
    if (refreshBtn) refreshBtn.addEventListener('click', refreshSmartQueue);

    // Auto-play next via Smart Queue when track ends
    mainAudio.addEventListener('ended', () => {
        addToPlayHistory({ 
            title: document.querySelector('.track-title')?.textContent, 
            artist: document.querySelector('.track-artist')?.textContent 
        });
    });



    // ============================================
    // PHASE 2: QUEUE DRAWER
    // ============================================
    const queueDrawer = document.getElementById('queueDrawer');
    const openQueueBtn = document.getElementById('openQueueDrawer');
    const closeQueueBtn = document.getElementById('closeQueueDrawer');

    if (openQueueBtn && queueDrawer) {
        openQueueBtn.addEventListener('click', () => {
            queueDrawer.classList.add('open');
            refreshSmartQueue();
        });
    }
    if (closeQueueBtn && queueDrawer) {
        closeQueueBtn.addEventListener('click', () => queueDrawer.classList.remove('open'));
    }

    function addToUserQueue(title, artist, artUrl, url = '') {
        const list = document.getElementById('userQueueList');
        const emptyMsg = document.getElementById('queueEmptyMsg');
        if (emptyMsg) emptyMsg.style.display = 'none';
        
        const div = document.createElement('div');
        div.className = 'queue-track';
        div.draggable = true;
        div.innerHTML = `
            <img src="${artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop'}" alt="${title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';">
            <div>
                <p class="queue-track-title">${title}</p>
                <p class="queue-track-artist">${artist}</p>
            </div>
            <span class="material-icons" style="margin-left: auto; cursor: pointer; color: var(--text-muted);" title="Remove">close</span>
        `;
        div.querySelector('.material-icons').addEventListener('click', (e) => {
            e.stopPropagation();
            div.remove();
            const remaining = list.querySelectorAll('.queue-track');
            if (remaining.length === 0 && emptyMsg) emptyMsg.style.display = 'block';
        });
        // Drag to reorder
        div.addEventListener('dragstart', () => div.classList.add('dragging'));
        div.addEventListener('dragend', () => div.classList.remove('dragging'));
        if (list) list.appendChild(div);
        
        userQueue.push({ title, artist, artUrl, url });
    }

    // ============================================
    // PHASE 3: DEDICATIONS FILTER LOGIC
    // ============================================
    document.addEventListener('click', (e) => {
        const pill = e.target.closest('.dedications-filter-bar .filter-pill');
        if (!pill) return;
        document.querySelectorAll('.dedications-filter-bar .filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.getAttribute('data-filter');
        const grid = document.getElementById('dedicationsGrid');
        if (!grid) return;
        const cards = Array.from(grid.querySelectorAll('.dedication-full-card'));
        cards.forEach(c => c.style.display = 'block');
        if (filter === 'sender') {
            cards.sort((a, b) => (a.dataset.sender || '').localeCompare(b.dataset.sender || ''));
        } else if (filter === 'mood') {
            cards.sort((a, b) => (a.dataset.mood || '').localeCompare(b.dataset.mood || ''));
        } else if (filter === 'recent') {
            cards.sort((a, b) => new Date(b.dataset.date || 0) - new Date(a.dataset.date || 0));
        }
        cards.forEach(c => grid.appendChild(c));
    });

    // Dedication search
    document.addEventListener('input', (e) => {
        if (e.target && e.target.id === 'dedicationSearch') {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.dedication-full-card').forEach(card => {
                const note = card.querySelector('.ded-note')?.textContent.toLowerCase() || '';
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                card.style.display = (note.includes(query) || title.includes(query)) ? 'block' : 'none';
            });
        }
    });

    // Play All Dedications
    document.addEventListener('click', (e) => {
        // Create Playlist button handler
        const createPlBtn = e.target.closest('#playlists-view button.neon-btn');
        if (createPlBtn && createPlBtn.textContent.includes('CREATE NEW')) {
            const name = prompt('Enter a name for your new playlist:');
            if (name && name.trim()) {
                const newPl = {
                    id: 'custom_' + Date.now(),
                    name: name.trim(),
                    description: 'Custom user playlist',
                    artUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop',
                    tracks: []
                };
                if (!window.allPlaylists) window.allPlaylists = [];
                window.allPlaylists.push(newPl);
                if (typeof renderPlaylists === 'function') renderPlaylists();
                if (typeof showSocialToast === 'function') showSocialToast('Playlist Created ✨', name.trim());
            }
            return;
        }

        if (e.target.closest('#btnOpenDedicateWorkflow')) {
            if (typeof openDedicateWorkflow === 'function') {
                openDedicateWorkflow();
            } else if (typeof openDedicateModal === 'function') {
                openDedicateModal(null);
            }
            return;
        }

        if (e.target.closest('#btnPlayDedicationPlaylist')) {
            const user = getLoggedInUser();
            const tracks = window.currentDedicationPlaylistTracks || (user && user.dedications) || [];
            if (tracks && tracks.length > 0) {
                const first = tracks[0];
                playTrack(first.trackUrl, first.trackTitle, first.trackArtist, first.trackArt);
                for (let i = 1; i < tracks.length; i++) {
                    const d = tracks[i];
                    addToUserQueue(d.trackTitle, d.trackArtist, d.trackArt, d.trackUrl || '');
                }
                if (typeof showSocialToast === 'function') showSocialToast('Playing Dedication Playlist 🎶', `${tracks.length} tracks queued`);
            }
            return;
        }

        if (e.target.closest('#playAllDedications')) {
            const user = getLoggedInUser();
            const dedications = (user && user.dedications && user.dedications.length > 0) ? user.dedications : null;
            if (dedications) {
                const first = dedications[0];
                playTrack(first.trackUrl, first.trackTitle, first.trackArtist, first.trackArt);
                for (let i = 1; i < dedications.length; i++) {
                    const d = dedications[i];
                    addToUserQueue(d.trackTitle, d.trackArtist, d.trackArt, d.trackUrl || '');
                }
                if (typeof showSocialToast === 'function') showSocialToast('Playing Dedications 🎶', `${dedications.length} tracks`);
            } else {
                const cards = document.querySelectorAll('#dedicationsGrid .dedication-full-card');
                if (cards.length > 0) {
                    const getCardData = (c) => ({
                        title: c.querySelector('h3')?.textContent || 'Track',
                        artist: c.querySelector('.ded-artist')?.textContent || 'Artist',
                        art: c.querySelector('img')?.src || '',
                        url: c.getAttribute('data-url') || ''
                    });
                    const first = getCardData(cards[0]);
                    playTrack(first.url, first.title, first.artist, first.art);
                    for (let i = 1; i < cards.length; i++) {
                        const tr = getCardData(cards[i]);
                        addToUserQueue(tr.title, tr.artist, tr.art, tr.url);
                    }
                }
            }
        }
        // Handle static card play & queue clicks if any
        const playBtn = e.target.closest('#dedicationsGrid .dedication-full-card .ded-play');
        if (playBtn) {
            const card = playBtn.closest('.dedication-full-card');
            const title = card.querySelector('h3')?.textContent || 'Track';
            const artist = card.querySelector('.ded-artist')?.textContent || 'Artist';
            const art = card.querySelector('img')?.src || '';
            const url = card.getAttribute('data-url') || '';
            if (typeof window.playTrack === 'function') window.playTrack(url, title, artist, art);
        }
        const queueBtn = e.target.closest('#dedicationsGrid .dedication-full-card .ded-queue-btn');
        if (queueBtn) {
            const card = queueBtn.closest('.dedication-full-card');
            const title = card.querySelector('h3')?.textContent || 'Track';
            const artist = card.querySelector('.ded-artist')?.textContent || 'Artist';
            const art = card.querySelector('img')?.src || '';
            const url = card.getAttribute('data-url') || '';
            if (typeof addToUserQueue === 'function') {
                addToUserQueue(title, artist, art, url);
                if (typeof showSocialToast === 'function') showSocialToast('Added to Queue 🎶', title);
            }
        }
    });

    // ============================================
    // PHASE 4: BIRTHDAY PLAYLIST GENERATOR
    // ============================================
    function generateBirthdayPlaylist() {
        if (!document.getElementById('birthdayMixTracks')) return;
        const savedTheme = localStorage.getItem(getUserThemeKey()) || 'lofi';
        const query = `birthday ${moodSongs[savedTheme]?.query || 'pop'} hits`;
        fetchMusic(query, 'birthdayMixTracks');
    }

    // Enhanced birthday with balloons
    const origBirthdayBtn = document.getElementById('simulateBirthdayBtn');
    if (origBirthdayBtn) {
        const origHandler = origBirthdayBtn.onclick;
        origBirthdayBtn.addEventListener('click', () => {
            if (document.body.classList.contains('birthday-mode')) {
                generateBirthdayPlaylist();
                // Spawn balloons
                const balloons = ['🎈', '🎊', '🎉', '🎈', '🎊'];
                balloons.forEach((emoji, i) => {
                    const balloon = document.createElement('div');
                    balloon.className = 'birthday-balloon';
                    balloon.textContent = emoji;
                    balloon.style.left = (Math.random() * 80 + 10) + '%';
                    balloon.style.animationDelay = (i * 0.5) + 's';
                    document.body.appendChild(balloon);
                    setTimeout(() => balloon.remove(), 7000);
                });
            }
        });
    }

    // ============================================
    // PHASE 5: MOOD MIX GENERATOR
    // ============================================
    const generateMixBtn = document.getElementById('generateMixBtn');
    if (generateMixBtn) {
        generateMixBtn.addEventListener('click', () => {
            // Convert text and blender logo to black on click
            generateMixBtn.classList.add('is-clicked');
            setTimeout(() => {
                generateMixBtn.classList.remove('is-clicked');
            }, 1500);

            const mood1 = document.getElementById('moodMix1')?.value;
            const mood2 = document.getElementById('moodMix2')?.value;
            const q1 = moodSongs[mood1]?.query || mood1;
            const q2 = moodSongs[mood2]?.query || mood2;
            const blendedQuery = `${q1} ${q2}`;
            
            const preview = document.getElementById('moodMixPreview');
            if (preview) {
                preview.style.display = 'block';
                preview.innerHTML = '<p class="glitch-text" style="text-align: center;">Mixing...</p>';
            }
            
            // Fetch blended results
            fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(blendedQuery)}&media=music&limit=8`)
                .then(r => r.json())
                .then(data => {
                    if (!preview) return;
                    if (data.results && data.results.length > 0) {
                        let html = '<div class="horizontal-scroll-row">';
                        data.results.forEach((t, i) => {
                            const art = t.artworkUrl100?.replace('100x100bb', '300x300bb') || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';
                            html += `<div class="curated-card mood-mix-track-card" data-idx="${i}" style="flex: 0 0 160px; width: 160px; min-width: 160px; max-width: 160px; height: 160px; cursor: pointer; border-radius: 12px; overflow: hidden; position: relative;">
                                <img src="${art}" alt="${t.trackName}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';" style="width: 100%; height: 100%; object-fit: cover;">
                                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%); display: flex; align-items: flex-end; padding: 8px;">
                                    <h3 style="font-size: 0.8rem; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: 0 0 8px #000; color: #fff;">${t.trackName || 'Unknown'}</h3>
                                </div>
                            </div>`;
                        });
                        html += '</div>';
                        preview.innerHTML = `<p style="color: var(--neon-pink); font-weight: bold; margin-bottom: 0.5rem;">${(mood1 || 'LOFI').toUpperCase()} × ${(mood2 || 'CHILL').toUpperCase()} Mix</p>` + html;

                        preview.querySelectorAll('.mood-mix-track-card').forEach(card => {
                            card.addEventListener('click', () => {
                                const idx = parseInt(card.dataset.idx, 10);
                                const t = data.results[idx];
                                if (t && (t.previewUrl || t.url)) {
                                    const audioUrl = t.previewUrl || t.url;
                                    const art = t.artworkUrl100?.replace('100x100bb', '300x300bb') || '';
                                    playTrack(audioUrl, t.trackName || 'Track', t.artistName || 'Artist', art);
                                }
                            });
                        });
                    }
                })
                .catch(() => {
                    if (preview) preview.innerHTML = '<p>Error generating mix.</p>';
                });
        });
    }

    // ============================================
    // PHASE 5: REAL-TIME MOOD HISTORY TRACKER
    // ============================================
    const MOOD_METADATA = [
        { key: 'lofi', label: 'Lofi', emoji: '🌙', colorClass: 'lofi', colorHex: '#a3b18a' },
        { key: 'romantic', label: 'Romantic', emoji: '💖', colorClass: 'romantic', colorHex: '#ff6b9d' },
        { key: 'sad', label: 'Sad', emoji: '🌧️', colorClass: 'sad', colorHex: '#6495ed' },
        { key: 'chill', label: 'Chill', emoji: '🌊', colorClass: 'chill', colorHex: '#64b5f6' },
        { key: 'happy', label: 'Happy', emoji: '☀️', colorClass: 'happy', colorHex: '#ffd740' },
        { key: 'energetic', label: 'Energetic', emoji: '🔥', colorClass: 'energetic', colorHex: '#ff1744' },
        { key: 'focus', label: 'Focus', emoji: '🎯', colorClass: 'focus', colorHex: '#7c4dff' },
        { key: 'party', label: 'Party', emoji: '🎉', colorClass: 'party', colorHex: '#e040fb' }
    ];
    window.MOOD_METADATA = MOOD_METADATA;

    function getUserMoodStatsKey() {
        const user = typeof getLoggedInUser === 'function' ? getLoggedInUser() : {};
        return user && user.username ? `audioTrackMoodStats_${user.username}` : 'audioTrackMoodStats';
    }
    window.getUserMoodStatsKey = getUserMoodStatsKey;

    function getUserMoodHistoryKey() {
        const user = typeof getLoggedInUser === 'function' ? getLoggedInUser() : {};
        return user && user.username ? `audioTrackMoodHistory_${user.username}` : 'audioTrackMoodHistory';
    }
    window.getUserMoodHistoryKey = getUserMoodHistoryKey;

    function detectMoodForTrack(title, artist) {
        title = (title || '').toLowerCase();
        artist = (artist || '').toLowerCase();

        // Check artist associations in moodSongs
        if (typeof moodSongs !== 'undefined') {
            for (const [moodKey, moodData] of Object.entries(moodSongs)) {
                if (Array.isArray(moodData.artists) && moodData.artists.some(a => artist.includes(a.toLowerCase()) || a.toLowerCase().includes(artist))) {
                    return moodKey;
                }
                if (Array.isArray(moodData.recent) && moodData.recent.some(a => artist.includes(a.toLowerCase()) || a.toLowerCase().includes(artist))) {
                    return moodKey;
                }
            }
        }

        // Semantic keyword analysis on track title
        if (title.includes('sad') || title.includes('cry') || title.includes('heartbreak') || title.includes('alone') || title.includes('tears') || title.includes('blues')) return 'sad';
        if (title.includes('love') || title.includes('romantic') || title.includes('baby') || title.includes('found you') || title.includes('kiss') || title.includes('heart')) return 'romantic';
        if (title.includes('chill') || title.includes('relax') || title.includes('sunset') || title.includes('coffee') || title.includes('morning') || title.includes('breeze')) return 'chill';
        if (title.includes('happy') || title.includes('feel good') || title.includes('sunny') || title.includes('dance') || title.includes('joy')) return 'happy';
        if (title.includes('party') || title.includes('club') || title.includes('rave') || title.includes('edm') || title.includes('remix') || title.includes('dj')) return 'party';
        if (title.includes('focus') || title.includes('study') || title.includes('ambient') || title.includes('work') || title.includes('deep') || title.includes('piano')) return 'focus';
        if (title.includes('rock') || title.includes('workout') || title.includes('believer') || title.includes('hype') || title.includes('power') || title.includes('beast')) return 'energetic';
        if (title.includes('lofi') || title.includes('lo-fi') || title.includes('night') || title.includes('drive') || title.includes('lamp') || title.includes('rain')) return 'lofi';

        // Check active activity pill if present
        const activePill = document.querySelector('.activity-pill.active');
        if (activePill) {
            const act = activePill.dataset.activity;
            if (act === 'party') return 'party';
            if (act === 'latenight') return 'sad';
            if (act === 'study') return 'focus';
            if (act === 'workout') return 'energetic';
        }

        // Fallback to active theme
        const currentTheme = localStorage.getItem(typeof getUserThemeKey === 'function' ? getUserThemeKey() : 'audioTrackTheme') || document.body.getAttribute('data-theme') || 'lofi';
        return MOOD_METADATA.some(m => m.key === currentTheme.toLowerCase()) ? currentTheme.toLowerCase() : 'lofi';
    }
    window.detectMoodForTrack = detectMoodForTrack;

    function getRealTimeMoodStats() {
        const userKey = getUserMoodStatsKey();
        let stats = null;
        try {
            stats = JSON.parse(localStorage.getItem(userKey));
        } catch(e) {}
        if (!stats || typeof stats !== 'object') {
            try {
                stats = JSON.parse(localStorage.getItem('audioTrackMoodStats'));
            } catch(e) {}
        }
        if (!stats || typeof stats !== 'object') {
            stats = {};
        }

        // Check total recorded plays
        const totalCount = Object.values(stats).reduce((sum, n) => sum + (Number(n) || 0), 0);
        if (totalCount === 0) {
            // Seed from actual real-time play history if user has played songs
            let ph = [];
            try {
                ph = JSON.parse(localStorage.getItem('audioTrackPlayHistory')) || [];
            } catch(e) {}
            const user = typeof getLoggedInUser === 'function' ? getLoggedInUser() : null;
            if (user && Array.isArray(user.playHistory) && user.playHistory.length > 0) {
                ph = [...ph, ...user.playHistory];
            }

            if (ph.length > 0) {
                ph.forEach(track => {
                    const title = track.title || track.trackName || '';
                    const artist = track.artist || track.artistName || '';
                    const m = detectMoodForTrack(title, artist);
                    stats[m] = (stats[m] || 0) + 1;
                });
                localStorage.setItem(userKey, JSON.stringify(stats));
                localStorage.setItem('audioTrackMoodStats', JSON.stringify(stats));
            } else {
                // If brand new, reflect current active theme as the starting session
                const activeTheme = localStorage.getItem(typeof getUserThemeKey === 'function' ? getUserThemeKey() : 'audioTrackTheme') || 'lofi';
                const matchedMood = MOOD_METADATA.find(m => m.key === activeTheme.toLowerCase());
                if (matchedMood) {
                    stats[matchedMood.key] = 1;
                    localStorage.setItem(userKey, JSON.stringify(stats));
                    localStorage.setItem('audioTrackMoodStats', JSON.stringify(stats));
                }
            }
        }

        return stats;
    }
    window.getRealTimeMoodStats = getRealTimeMoodStats;

    function recordMoodListeningEvent(trackTitle, artist) {
        const mood = detectMoodForTrack(trackTitle, artist);
        const userKey = getUserMoodStatsKey();
        let stats = getRealTimeMoodStats();
        stats[mood] = (stats[mood] || 0) + 1;
        localStorage.setItem(userKey, JSON.stringify(stats));
        localStorage.setItem('audioTrackMoodStats', JSON.stringify(stats));

        // Detailed timestamped history
        const historyKey = getUserMoodHistoryKey();
        let history = [];
        try {
            history = JSON.parse(localStorage.getItem(historyKey)) || [];
        } catch(e) {}
        history.unshift({
            mood,
            title: trackTitle || 'Unknown Track',
            artist: artist || 'Various Artists',
            timestamp: Date.now()
        });
        if (history.length > 100) history = history.slice(0, 100);
        localStorage.setItem(historyKey, JSON.stringify(history));

        // Re-render UI in real time
        if (typeof renderMoodHistory === 'function') {
            renderMoodHistory();
        }
    }
    window.recordMoodListeningEvent = recordMoodListeningEvent;

    function trackMoodUsage() {
        const currentTheme = localStorage.getItem(typeof getUserThemeKey === 'function' ? getUserThemeKey() : 'audioTrackTheme') || 'lofi';
        if (!currentTheme) return;
        const userKey = getUserMoodStatsKey();
        let stats = getRealTimeMoodStats();
        const mKey = currentTheme.toLowerCase();
        stats[mKey] = (stats[mKey] || 0) + 1;
        localStorage.setItem(userKey, JSON.stringify(stats));
        localStorage.setItem('audioTrackMoodStats', JSON.stringify(stats));
        if (typeof renderMoodHistory === 'function') renderMoodHistory();
    }
    window.trackMoodUsage = trackMoodUsage;

    function renderMoodHistory() {
        const grid = document.getElementById('moodTrackerGrid');
        if (!grid) return;

        const stats = getRealTimeMoodStats();
        const totalSessions = Object.values(stats).reduce((sum, n) => sum + (Number(n) || 0), 0);

        grid.innerHTML = '';
        MOOD_METADATA.forEach(m => {
            const count = stats[m.key] || 0;
            const pct = totalSessions > 0 ? Math.round((count / totalSessions) * 100) : 0;

            const card = document.createElement('div');
            card.className = 'mood-stat-card';
            card.setAttribute('data-mood', m.key);
            card.style.cursor = 'pointer';
            card.title = `${m.label}: ${count} session${count === 1 ? '' : 's'} (${pct}%). Click to listen to ${m.label} music!`;

            card.innerHTML = `
                <div style="font-size: 1.5rem; transition: transform 0.2s ease;">${m.emoji}</div>
                <p style="font-size: 0.85rem; font-weight: 700; margin: 0.35rem 0 0.15rem; color: var(--text-main);">${m.label}</p>
                <div style="font-size: 0.75rem; font-weight: 600; color: var(--neon-cyan); margin-bottom: 0.35rem;">
                    ${pct}%
                    <span style="font-size: 0.65rem; color: var(--text-secondary); font-weight: 500; display: block;">${count} play${count === 1 ? '' : 's'}</span>
                </div>
                <div class="mood-stat-bar" style="background: rgba(255, 255, 255, 0.08); height: 6px; border-radius: 3px; overflow: hidden;">
                    <div class="mood-stat-fill ${m.colorClass}" style="width: ${pct}%; height: 100%; border-radius: 3px; transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);"></div>
                </div>
            `;

            // On click, switch vibe / fetch music for that mood
            card.addEventListener('click', () => {
                const moodQuery = (typeof moodSongs !== 'undefined' && moodSongs[m.key]?.query) ? moodSongs[m.key].query : m.key;
                if (typeof fetchMusic === 'function') {
                    const homeTab = document.querySelector('.nav-item[data-target="home"]');
                    if (homeTab) homeTab.click();
                    fetchMusic(moodQuery, 'masonry-gallery');
                    showSocialToast(`Vibe switched to ${m.label} ${m.emoji}`, `Loading ${m.label} tracks...`);
                }
            });

            grid.appendChild(card);
        });
    }
    window.renderMoodHistory = renderMoodHistory;

    // ============================================
    // ENHANCED: One-Tap Queue on Masonry Items
    // ============================================
    const origPopulateMasonry = populateMasonry;
    // We override inside populateMasonry by adding the queue button
    // ============================================
    // PROFILE LOGIC
    // ============================================
    const shuffleAvatarBtn = document.getElementById('shuffleAvatarBtn');
    if (shuffleAvatarBtn) {
        shuffleAvatarBtn.addEventListener('click', () => {
            const randomId = Math.random().toString(36).substring(7);
            const newAvatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${randomId}`;
            
            const profileAvatarImg = document.getElementById('profileAvatarImg');
            const topbarAvatarImg = document.getElementById('topbarAvatarImg');
            
            if (profileAvatarImg) profileAvatarImg.src = newAvatarUrl;
            if (topbarAvatarImg) topbarAvatarImg.src = newAvatarUrl;
            
            // Save new avatar to currentUser in localStorage so it persists on refresh
            try {
                const user = JSON.parse(localStorage.getItem('currentUser')) || {};
                user.avatarUrl = newAvatarUrl;
                localStorage.setItem('currentUser', JSON.stringify(user));
            } catch(e) {}
            
            // Show toast
            const lyricToast = document.getElementById('lyricToast');
            if (lyricToast) {
                document.getElementById('toastSong').textContent = 'Avatar Updated ✓';
                document.getElementById('toastLyric').textContent = 'Looking fresh!';
                lyricToast.classList.add('show');
                setTimeout(() => lyricToast.classList.remove('show'), 2500);
            }
        });
    }

}
initApp();

// ============================================================
// PROFILE FEATURES — FRIENDS, SHARED PLAYLISTS, LISTEN ROOMS
// ============================================================

function initProfileFeatures() {

    // --- DATA SEEDS ---
    const DEFAULT_FRIENDS = [
        { id: 'alex',   name: 'Alex',   seed: 'Alex',   status: 'online',    listening: 'Blinding Lights - The Weeknd' },
        { id: 'sammy',  name: 'Sammy',  seed: 'Sammy',  status: 'listening', listening: 'Levitating - Dua Lipa' },
        { id: 'chris',  name: 'Chris',  seed: 'Chris',  status: 'offline',   listening: null },
        { id: 'jordan', name: 'Jordan', seed: 'Jordan', status: 'online',    listening: 'Starboy - The Weeknd' }
    ];

    const DEFAULT_MY_PLAYLISTS = [
        { id: 'pl1', name: 'Late Night Drives', count: 18, img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop' },
        { id: 'pl2', name: 'Techno Anthems',    count: 24, img: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=300&auto=format&fit=crop' },
        { id: 'pl3', name: 'Workout Mix',       count: 15, img: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=300&auto=format&fit=crop' },
        { id: 'pl4', name: 'Study Lo-Fi',       count: 30, img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop' },
        { id: 'pl5', name: 'Sunday Morning',    count: 12, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop' },
        { id: 'pl6', name: 'Indie Rising',      count: 9,  img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=300&auto=format&fit=crop' }
    ];

    // --- LOCAL STORAGE HELPERS ---
    function loadFriends()         { return JSON.parse(localStorage.getItem('at_friends')) || DEFAULT_FRIENDS; }
    function saveFriends(f)        { localStorage.setItem('at_friends', JSON.stringify(f)); }
    function loadSharedPlaylists() { return JSON.parse(localStorage.getItem('at_shared_playlists')) || []; }
    function saveSharedPlaylists(p){ localStorage.setItem('at_shared_playlists', JSON.stringify(p)); }
    function loadRooms()           { return JSON.parse(localStorage.getItem('at_rooms')) || []; }
    function saveRooms(r)          { localStorage.setItem('at_rooms', JSON.stringify(r)); }
    function loadProfile()         { return JSON.parse(localStorage.getItem('at_profile')) || { username: 'DJ_Glitch', bio: 'Vibing to the beat of the universe 🎧 | Techno soul, Lo-fi heart' }; }
    function saveProfile(p)        { localStorage.setItem('at_profile', JSON.stringify(p)); }

    let friends = loadFriends();
    let sharedPlaylists = loadSharedPlaylists();
    let rooms = loadRooms();
    let profile = loadProfile();
    let currentRoomCode = null;
    let broadcastChannel = null;
    let sharingPlaylistId = null;
    let activeRoomMembers = [];

    // Seed initial shared playlist demo data if empty
    if (sharedPlaylists.length === 0) {
        sharedPlaylists = [
            {
                id: 'sp1', fromId: 'alex', fromName: 'Alex', playlistName: 'Midnight Vibes',
                message: 'You gotta listen to this at 2am 🌙',
                img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
                isNew: true, ts: Date.now() - 3600000
            },
            {
                id: 'sp2', fromId: 'sammy', fromName: 'Sammy', playlistName: 'Gym Beast Mode',
                message: 'These tracks hit different at the gym 💪',
                img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
                isNew: true, ts: Date.now() - 86400000
            }
        ];
        saveSharedPlaylists(sharedPlaylists);
    }

    // --- TOAST HELPER ---
    function showToast(title, msg) {
        const toast = document.getElementById('lyricToast');
        if (!toast) return;
        document.getElementById('toastSong').textContent = title;
        document.getElementById('toastLyric').textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // ========================
    // PROFILE TABS
    // ========================
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.profile-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const targetId = 'tab-' + tab.getAttribute('data-tab');
            const panel = document.getElementById(targetId);
            if (panel) panel.classList.add('active');
        });
    });



    // ========================
    // RENDER PROFILE HEADER
    // ========================
    function renderProfileHeader() {
        const usernameEl = document.getElementById('profileUsernameDisplay');
        const bioEl = document.getElementById('profileBioDisplay');
        if (usernameEl) usernameEl.textContent = profile.username || 'DJ_Glitch';
        let bio = profile.bio || '';
        if (!bio || /signed in via/i.test(bio)) {
            bio = 'Vibing to the beat of the universe 🎧';
            profile.bio = bio;
            try { localStorage.setItem('at_profile', JSON.stringify(profile)); } catch(e) {}
        }
        if (bioEl) bioEl.textContent = bio;

        // Sync topbar username
        const topbarUsername = document.querySelector('.username');
        if (topbarUsername) topbarUsername.textContent = profile.username || 'DJ_Glitch';

        // Friend count
        const fcEl = document.getElementById('profileFriendsCount');
        if (fcEl) fcEl.textContent = friends.length;
    }
    renderProfileHeader();

    // ========================
    // EDIT PROFILE MODAL
    // ========================
    const editProfileModal = document.getElementById('editProfileModal');
    const editProfileBtn   = document.getElementById('editProfileBtn');
    const closeEditBtn     = document.getElementById('closeEditProfileModal');
    const saveProfileBtn   = document.getElementById('saveProfileBtn');
    const editUsernameInput= document.getElementById('editUsernameInput');
    const editBioInput     = document.getElementById('editBioInput');

    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            if (editUsernameInput) editUsernameInput.value = profile.username || '';
            if (editBioInput) editBioInput.value = profile.bio || '';
            if (editProfileModal) editProfileModal.style.display = 'flex';
        });
    }
    if (closeEditBtn) closeEditBtn.addEventListener('click', () => { if (editProfileModal) editProfileModal.style.display = 'none'; });
    if (editProfileModal) editProfileModal.addEventListener('click', e => { if (e.target === editProfileModal) editProfileModal.style.display = 'none'; });

    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', () => {
            const newName = (editUsernameInput?.value || '').trim() || 'DJ_Glitch';
            const newBio  = (editBioInput?.value || '').trim();
            profile = { ...profile, username: newName, bio: newBio };
            saveProfile(profile);
            renderProfileHeader();
            if (editProfileModal) editProfileModal.style.display = 'none';
            showToast('Profile Updated ✓', 'Your changes have been saved!');
        });
    }

    // ========================
    // FRIENDS SYSTEM
    // ========================
    function avatarUrl(seed) {
        return `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(seed)}`;
    }

    function renderFriends(filter = 'all', search = '') {
        const grid = document.getElementById('friendsGrid');
        const empty = document.getElementById('friendsEmptyState');
        if (!grid) return;

        let filtered = [...friends];
        if (filter === 'online')  filtered = filtered.filter(f => f.status === 'online' || f.status === 'listening');
        if (filter === 'offline') filtered = filtered.filter(f => f.status === 'offline');
        if (search) filtered = filtered.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));

        grid.innerHTML = '';

        if (filtered.length === 0) {
            if (empty) empty.style.display = 'flex';
            return;
        }
        if (empty) empty.style.display = 'none';

        filtered.forEach(friend => {
            const isListening = friend.status === 'listening';
            const isOnline    = friend.status === 'online';
            const dotClass    = isListening ? 'listening' : (isOnline ? 'online' : 'offline');
            const statusText  = isListening ? `🎵 ${friend.listening}` : (isOnline ? 'Online now' : 'Offline');
            const statusClass = isListening ? 'listening-text' : (isOnline ? 'online-text' : '');

            const card = document.createElement('div');
            card.className = 'friend-card';
            card.innerHTML = `
                <div class="friend-card-avatar">
                    <img src="${avatarUrl(friend.seed)}" alt="${friend.name}" onerror="this.onerror=null; this.src='https://api.dicebear.com/9.x/avataaars/svg?seed=Friend';">
                    <div class="friend-status-dot ${dotClass}"></div>
                </div>
                <div class="friend-card-info">
                    <p class="friend-card-name">${friend.name}</p>
                    <p class="friend-card-status ${statusClass}">${statusText}</p>
                </div>
                <div class="friend-card-actions">
                    <button class="friend-action-btn" title="Listen Together" data-id="${friend.id}">
                        <span class="material-icons">headphones</span>
                    </button>
                    <button class="friend-action-btn danger remove-friend-btn" title="Remove Friend" data-id="${friend.id}">
                        <span class="material-icons">person_remove</span>
                    </button>
                </div>
            `;

            // Listen Together invite
            card.querySelector('[title="Listen Together"]').addEventListener('click', () => {
                showToast(`Invite Sent to ${friend.name} 🎧`, 'Share the room code when they join!');
                // Switch to rooms tab
                document.querySelector('.profile-tab[data-tab="rooms"]')?.click();
            });

            // Remove friend
            card.querySelector('.remove-friend-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                friends = friends.filter(f => f.id !== friend.id);
                saveFriends(friends);
                renderFriends(filter, search);
                renderProfileHeader();
                showToast(`Removed ${friend.name}`, 'They have been removed from your friends.');
                updateShareFriendSelect();
            });

            grid.appendChild(card);
        });
    }

    // Friend filter pills
    let currentFriendFilter = 'all';
    let currentFriendSearch = '';

    document.querySelectorAll('.friend-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.friend-filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentFriendFilter = pill.getAttribute('data-filter');
            renderFriends(currentFriendFilter, currentFriendSearch);
        });
    });



    const friendSearchInput = document.getElementById('friendSearchInput');
    if (friendSearchInput) {
        friendSearchInput.addEventListener('input', e => {
            currentFriendSearch = e.target.value;
            renderFriends(currentFriendFilter, currentFriendSearch);
        });
    }

    renderFriends();

    // Simulate status changes every 15 seconds
    function simulateFriendStatusChanges() {
        const statuses = ['online', 'offline', 'listening'];
        const songs = ['Blinding Lights', 'Levitating', 'Starboy', 'Midnight City', 'Ocean Eyes'];
        friends = friends.map(f => {
            if (Math.random() > 0.7) {
                const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
                return {
                    ...f,
                    status: newStatus,
                    listening: newStatus === 'listening' ? songs[Math.floor(Math.random() * songs.length)] : f.listening
                };
            }
            return f;
        });
        saveFriends(friends);
        renderFriends(currentFriendFilter, currentFriendSearch);
    }
    setInterval(simulateFriendStatusChanges, 15000);

    // ========================
    // ADD FRIEND MODAL
    // ========================
    const addFriendModal   = document.getElementById('addFriendModal');
    const openAddFriendBtn = document.getElementById('openAddFriendBtn');
    const closeAddFriendBtn= document.getElementById('closeAddFriendModal');
    const searchFriendBtn  = document.getElementById('searchFriendBtn');
    const addFriendInput   = document.getElementById('addFriendInput');
    const addFriendResult  = document.getElementById('addFriendResult');

    if (openAddFriendBtn) openAddFriendBtn.addEventListener('click', () => { if(addFriendModal) addFriendModal.style.display='flex'; });
    if (closeAddFriendBtn) closeAddFriendBtn.addEventListener('click', () => { if(addFriendModal) addFriendModal.style.display='none'; });
    if (addFriendModal) addFriendModal.addEventListener('click', e => { if(e.target===addFriendModal) addFriendModal.style.display='none'; });

    if (searchFriendBtn && addFriendInput) {
        searchFriendBtn.addEventListener('click', () => {
            const name = addFriendInput.value.trim();
            if (!name) { addFriendResult.innerHTML = '<p style="color:var(--neon-pink)">Please enter a username.</p>'; return; }

            // Simulate finding the user
            const alreadyFriend = friends.some(f => f.name.toLowerCase() === name.toLowerCase());
            if (alreadyFriend) {
                addFriendResult.innerHTML = `<p style="color:var(--cyber-yellow)">⚡ ${name} is already your friend!</p>`;
                return;
            }

            // "Found" user card
            const seed = name.replace(/\s+/g, '_');
            addFriendResult.innerHTML = `
                <div class="friend-card" style="margin-top:0.5rem">
                    <div class="friend-card-avatar">
                        <img src="${avatarUrl(seed)}" alt="${name}" onerror="this.onerror=null; this.src='https://api.dicebear.com/9.x/avataaars/svg?seed=Friend';">
                        <div class="friend-status-dot online"></div>
                    </div>
                    <div class="friend-card-info">
                        <p class="friend-card-name">${name}</p>
                        <p class="friend-card-status online-text">Found on AudioTrack ✓</p>
                    </div>
                    <button id="confirmAddFriendBtn" class="neon-btn" style="padding:0.4rem 1rem; font-size:0.8rem">Add</button>
                </div>
            `;

            const confirmAddBtn = document.getElementById('confirmAddFriendBtn');
            if (confirmAddBtn) {
                confirmAddBtn.addEventListener('click', () => {
                    const newFriend = { id: seed + '_' + Date.now(), name, seed, status: 'online', listening: null };
                    friends.push(newFriend);
                    saveFriends(friends);
                    renderFriends(currentFriendFilter, currentFriendSearch);
                    renderProfileHeader();
                    updateShareFriendSelect();
                    if (addFriendModal) addFriendModal.style.display = 'none';
                    addFriendInput.value = '';
                    addFriendResult.innerHTML = '';
                    showToast(`${name} Added! 🎉`, 'You are now friends on AudioTrack.');
                });
            }
        });

        // Allow Enter key
        addFriendInput.addEventListener('keydown', e => { if (e.key === 'Enter') searchFriendBtn.click(); });
    }

    // ========================
    // SHARED PLAYLISTS INBOX
    // ========================
    function renderSharedPlaylists() {
        const grid  = document.getElementById('sharedPlaylistsGrid');
        const empty = document.getElementById('sharedEmptyState');
        const badge = document.getElementById('sharedInboxBadge');
        if (!grid) return;

        const newCount = sharedPlaylists.filter(p => p.isNew).length;
        if (badge) badge.textContent = newCount > 0 ? `${newCount} new` : 'All seen';

        grid.innerHTML = '';

        if (sharedPlaylists.length === 0) {
            if (empty) empty.style.display = 'flex';
            return;
        }
        if (empty) empty.style.display = 'none';

        sharedPlaylists.forEach(pl => {
            const fromFriend = friends.find(f => f.id === pl.fromId);
            const fromAvatar = avatarUrl(fromFriend?.seed || pl.fromName);

            const card = document.createElement('div');
            card.className = 'shared-playlist-card';
            card.innerHTML = `
                <div class="shared-playlist-card-cover">
                    <img src="${pl.img || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop'}" alt="${pl.playlistName}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';">
                    <div class="shared-from-badge">
                        <img src="${fromAvatar}" alt="${pl.fromName}" onerror="this.onerror=null; this.src='https://api.dicebear.com/9.x/avataaars/svg?seed=Friend';">
                        from ${pl.fromName}
                    </div>
                    ${pl.isNew ? '<div class="new-badge">NEW</div>' : ''}
                </div>
                <div class="shared-playlist-card-body">
                    <p class="shared-playlist-name">${pl.playlistName}</p>
                    <p class="shared-playlist-msg">"${pl.message || 'Check this out!'}"</p>
                    <div class="shared-playlist-actions">
                        <button class="shared-action-btn primary play-shared-btn">
                            <span class="material-icons">play_arrow</span> Play Now
                        </button>
                        <button class="shared-action-btn save-shared-btn">
                            <span class="material-icons">library_add</span> Save
                        </button>
                    </div>
                </div>
            `;

            card.querySelector('.play-shared-btn').addEventListener('click', () => {
                pl.isNew = false;
                saveSharedPlaylists(sharedPlaylists);
                renderSharedPlaylists();
                showToast(`Playing "${pl.playlistName}" 🎶`, `Shared by ${pl.fromName}`);
                // Fetch music from iTunes based on playlist name
                if (typeof fetchMusicGlobal === 'function') fetchMusicGlobal(pl.playlistName, 'masonry-gallery');
            });

            card.querySelector('.save-shared-btn').addEventListener('click', () => {
                pl.isNew = false;
                saveSharedPlaylists(sharedPlaylists);
                renderSharedPlaylists();
                // Add to my playlists
                DEFAULT_MY_PLAYLISTS.push({ id: 'sp_' + Date.now(), name: pl.playlistName, count: 12, img: pl.img });
                renderMyPlaylists();
                showToast(`Saved "${pl.playlistName}" ✓`, 'Added to your library!');
            });

            grid.appendChild(card);
        });
    }
    renderSharedPlaylists();

    // ========================
    // MY PLAYLISTS PANEL
    // ========================
    function renderMyPlaylists() {
        const grid = document.getElementById('myPlaylistsGrid');
        if (!grid) return;
        grid.innerHTML = '';

        window.allPlaylists.forEach(pl => {
            const card = document.createElement('div');
            card.className = 'my-playlist-card';
            card.style.cursor = 'pointer';
            card.innerHTML = `
                <img src="${pl.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop'}" alt="${pl.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';">
                <div class="my-playlist-card-body">
                    <p class="my-playlist-card-name">${pl.name}</p>
                    <p class="my-playlist-card-count">${pl.tracks.length} tracks</p>
                    <div class="my-playlist-card-actions">
                        <button class="my-pl-action-btn play-my-pl">
                            <span class="material-icons">play_arrow</span> Play
                        </button>
                        <button class="my-pl-action-btn share-my-pl" data-plid="${pl.id}" data-plname="${pl.name}">
                            <span class="material-icons">share</span> Share
                        </button>
                    </div>
                </div>
            `;

            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    const playlistsTab = document.querySelector('.nav-item[data-target="playlists"]');
                    if (playlistsTab) playlistsTab.click();
                    openPlaylistDetail(pl);
                }
            });

            card.querySelector('.play-my-pl').addEventListener('click', (e) => {
                e.stopPropagation();
                playPlaylist(pl);
            });

            card.querySelector('.share-my-pl').addEventListener('click', (e) => {
                e.stopPropagation();
                const shareModal = document.getElementById('sharePlaylistModal');
                if (shareModal) {
                    sharingPlaylistId = pl.id;
                    const nameEl = document.getElementById('sharingPlaylistName');
                    if (nameEl) nameEl.textContent = pl.name;
                    updateShareFriendSelect();
                    shareModal.style.display = 'flex';
                    currentSharePlaylistData = pl;
                } else {
                    if (window.socialChannel) window.socialChannel.postMessage({ type: 'SHARE_PLAYLIST', playlist: pl.name });
                    if (typeof showSocialToast === 'function') showSocialToast('Playlist Shared! 📤', `${pl.name} sent to connections.`);
                }
            });

            grid.appendChild(card);
        });
    }
    let currentSharePlaylistData = null;
    renderMyPlaylists();

    // ========================
    // SHARE PLAYLIST MODAL
    // ========================
    const sharePlaylistModal    = document.getElementById('sharePlaylistModal');
    const closeShareModal       = document.getElementById('closeSharePlaylistModal');
    const confirmShareBtn       = document.getElementById('confirmSharePlaylistBtn');
    const shareToFriendSelect   = document.getElementById('shareToFriendSelect');
    const shareMessageInput     = document.getElementById('shareMessageInput');

    function updateShareFriendSelect() {
        if (!shareToFriendSelect) return;
        shareToFriendSelect.innerHTML = '<option value="">— Choose a friend —</option>';
        friends.forEach(f => {
            const opt = document.createElement('option');
            opt.value = f.id;
            opt.textContent = f.name;
            shareToFriendSelect.appendChild(opt);
        });
    }
    updateShareFriendSelect();

    if (closeShareModal) closeShareModal.addEventListener('click', () => { if(sharePlaylistModal) sharePlaylistModal.style.display='none'; });
    if (sharePlaylistModal) sharePlaylistModal.addEventListener('click', e => { if(e.target===sharePlaylistModal) sharePlaylistModal.style.display='none'; });

    if (confirmShareBtn) {
        confirmShareBtn.addEventListener('click', () => {
            const friendId = shareToFriendSelect?.value;
            if (!friendId) { showToast('Select a friend!', 'Choose who to share with.'); return; }
            if (!currentSharePlaylistData) return;

            const friend = friends.find(f => f.id === friendId);
            const msg = shareMessageInput?.value.trim() || 'Check this out!';

            // Add to shared inbox (as if the friend shared back with us for demo)
            const newEntry = {
                id: 'sp_' + Date.now(), fromId: friendId, fromName: friend.name,
                playlistName: currentSharePlaylistData.name, message: `You shared: "${msg}"`,
                img: currentSharePlaylistData.img, isNew: false, ts: Date.now()
            };
            sharedPlaylists.unshift(newEntry);
            saveSharedPlaylists(sharedPlaylists);
            renderSharedPlaylists();

            if (sharePlaylistModal) sharePlaylistModal.style.display = 'none';
            if (shareMessageInput) shareMessageInput.value = '';
            showToast(`Shared with ${friend.name}! 🎁`, `"${currentSharePlaylistData.name}" delivered.`);
            currentSharePlaylistData = null;
        });
    }

    // ========================
    // LISTEN TOGETHER ROOMS
    // ========================
    function generateRoomCode() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    function renderRooms() {
        const grid = document.getElementById('roomsList');
        if (!grid) return;
        grid.innerHTML = '';
        rooms = loadRooms();

        if (rooms.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-muted); font-style:italic; padding:1rem 0;">No rooms yet. Create one to start listening together!</p>';
            return;
        }

        rooms.forEach(room => {
            const card = document.createElement('div');
            card.className = 'room-card';
            const membersHtml = room.members.slice(0,4).map(m =>
                `<img class="room-member-avatar" src="${avatarUrl(m.seed)}" alt="${m.name}" title="${m.name}" onerror="this.onerror=null; this.src='https://api.dicebear.com/9.x/avataaars/svg?seed=Member';">`
            ).join('');

            card.innerHTML = `
                <div class="room-card-top">
                    <div>
                        <p class="room-card-name">${room.name}</p>
                        <p class="room-card-code">${room.code}</p>
                    </div>
                    <div class="room-live-indicator"><span class="live-dot"></span> LIVE</div>
                </div>
                <div class="room-card-members">${membersHtml}</div>
                <div class="room-card-footer">
                    <span class="room-member-count">${room.members.length} listening</span>
                    <button class="room-join-btn" data-code="${room.code}">Join Room</button>
                </div>
            `;

            card.querySelector('.room-join-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                joinRoom(room.code);
            });
            card.addEventListener('click', () => joinRoom(room.code));
            grid.appendChild(card);
        });
    }
    renderRooms();

    // Create Room
    const createRoomBtn = document.getElementById('createRoomBtn');
    if (createRoomBtn) {
        createRoomBtn.addEventListener('click', () => {
            const code = generateRoomCode();
            const myName = profile.username || 'DJ_Glitch';
            const newRoom = {
                code, name: `${myName}'s Room`,
                members: [{ id: 'me', name: myName, seed: myName, isHost: true }],
                createdAt: Date.now()
            };
            rooms.push(newRoom);
            saveRooms(rooms);
            renderRooms();
            joinRoom(code);
        });
    }

    // Join Room by code input
    const joinRoomBtn      = document.getElementById('joinRoomBtn');
    const joinRoomCodeInput= document.getElementById('joinRoomCodeInput');
    if (joinRoomBtn && joinRoomCodeInput) {
        joinRoomBtn.addEventListener('click', () => {
            const code = joinRoomCodeInput.value.trim().toUpperCase();
            if (code.length < 4) { showToast('Invalid Code', 'Enter a valid room code.'); return; }
            joinRoomCodeInput.value = '';
            joinRoom(code);
        });
        joinRoomCodeInput.addEventListener('keydown', e => { if(e.key === 'Enter') joinRoomBtn.click(); });
    }

    // --- ROOM ENGINE (NATIVE REAL-TIME SSE SYNC) ---
    window.mySyncClientId = window.mySyncClientId || ('client_' + Math.random().toString(36).substring(2, 11));

    function publishRoomEvent(code, msg) {
        if (!code) code = currentRoomCode || window.currentRoom;
        if (!code) return;

        msg.clientId = window.mySyncClientId;
        msg.room = code;

        // 1. Publish to backend SSE hub for multi-device cross-network sync
        fetch(`/api/sync/publish/${encodeURIComponent(code)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(msg)
        }).catch(err => console.warn('Sync publish warning:', err));

        // 2. Broadcast across local same-browser tabs
        if (window.socialChannel) {
            try { window.socialChannel.postMessage(msg); } catch(e) {}
        }
    }
    window.publishRoomEvent = publishRoomEvent;

    // --- Dynamic Playlist Populator for Room Music Selector ---
    function populateRoomPlaylists() {
        const select = document.getElementById('roomPlaylistSelect');
        if (!select) return;
        const currentVal = select.value;
        select.innerHTML = '<option value="">— Choose a Playlist to Stream —</option>';
        
        const list = window.allPlaylists || (typeof ALL_PLATFORM_PLAYLISTS !== 'undefined' ? ALL_PLATFORM_PLAYLISTS : []);
        const seen = new Set();
        list.forEach(p => {
            if (!p || !p.name || seen.has(p.name.toLowerCase())) return;
            seen.add(p.name.toLowerCase());
            const opt = document.createElement('option');
            opt.value = p.name;
            const count = p.tracks && p.tracks.length > 0 ? p.tracks.length : 6;
            opt.textContent = `${p.name} (${count} tracks)`;
            select.appendChild(opt);
        });
        if (currentVal && seen.has(currentVal.toLowerCase())) {
            select.value = currentVal;
        }
    }
    window.populateRoomPlaylists = populateRoomPlaylists;

    // --- Live Song Search & Direct Stream for Listening Room ---
    async function searchSongsForRoom(query) {
        const resultsContainer = document.getElementById('roomSearchResults');
        if (!resultsContainer) return;
        if (!query || query.trim().length === 0) {
            resultsContainer.innerHTML = '';
            return;
        }
        resultsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.8rem; padding: 0.5rem 0;">Searching songs...</p>';
        try {
            const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query.trim())}&media=music&limit=6`);
            const data = await res.json();
            resultsContainer.innerHTML = '';
            if (!data.results || data.results.length === 0) {
                resultsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.8rem; padding: 0.5rem 0;">No songs found for that search.</p>';
                return;
            }
            data.results.forEach(track => {
                const item = document.createElement('div');
                item.className = 'room-search-item';
                const art = track.artworkUrl100 ? track.artworkUrl100.replace('100x100bb', '300x300bb') : 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';
                const audioUrl = track.previewUrl || '';
                item.innerHTML = `
                    <img src="${art}" style="width: 38px; height: 38px; border-radius: 6px; object-fit: cover; flex-shrink: 0;" onerror="this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';">
                    <div style="flex: 1; min-width: 0; text-align: left;">
                        <h5 style="margin: 0; font-size: 0.85rem; color: var(--text-main, #fff); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${track.trackName}</h5>
                        <p style="margin: 2px 0 0; font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${track.artistName}</p>
                    </div>
                    <button class="neon-btn room-song-play-btn" style="padding: 4px 10px; font-size: 0.75rem; border-radius: 6px; cursor: pointer; white-space: nowrap;">
                        ▶ Play
                    </button>
                `;
                const playBtn = item.querySelector('.room-song-play-btn');
                playBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (typeof playTrack === 'function') {
                        playTrack(audioUrl, track.trackName, track.artistName, art);
                    }
                    showSocialToast('Streaming in Room 🎵', `${track.trackName} - ${track.artistName}`);
                });
                resultsContainer.appendChild(item);
            });
        } catch(err) {
            resultsContainer.innerHTML = '<p style="color: red; font-size: 0.8rem;">Error searching songs. Please try again.</p>';
        }
    }
    window.searchSongsForRoom = searchSongsForRoom;

    function joinRoom(code) {
        if (!code) return;
        code = code.trim().toUpperCase();

        if (currentRoomCode && currentRoomCode !== code) leaveRoom(false);
        currentRoomCode = code;
        window.currentRoom = code;
        sessionStorage.setItem('activeSyncRoom', code);

        // Ensure room exists in list
        if (!rooms.find(r => r.code === code)) {
            const myName = profile.username || getLoggedInUser().username || 'DJ_Glitch';
            rooms.push({ code, name: `Room ${code}`, members: [{ id: 'me', name: myName, seed: myName, isHost: true }], createdAt: Date.now() });
            saveRooms(rooms);
            renderRooms();
        }

        // Setup Native EventSource (SSE) Real-Time Stream
        if (window._syncEventSource) {
            try { window._syncEventSource.close(); } catch(e) {}
            window._syncEventSource = null;
        }

        try {
            const sse = new EventSource(`/api/sync/events/${encodeURIComponent(code)}`);
            window._syncEventSource = sse;

            sse.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    handleRoomMessage({ data });
                } catch (err) {
                    // Ignore keep-alive or malformed frames
                }
            };

            sse.onerror = (err) => {
                console.warn('Sync SSE reconnection note:', err);
            };
        } catch (e) {
            console.warn('EventSource initialization note:', e);
        }

        // Announce join
        publishRoomEvent(code, { 
            type: 'join', 
            name: profile.username || getLoggedInUser().username || 'DJ_Glitch', 
            seed: profile.username || getLoggedInUser().username || 'DJ_Glitch' 
        });

        // Show active room panel in both Views
        const roomSetup = document.getElementById('room-setup');
        const roomActive = document.getElementById('room-active');
        const activePanel = document.getElementById('activeRoomPanel');
        if (roomSetup) roomSetup.style.display = 'none';
        if (roomActive) roomActive.style.display = 'block';
        if (activePanel) activePanel.style.display = 'block';

        const roomNameEl = document.getElementById('activeRoomName');
        const roomCodeEl = document.getElementById('activeRoomCode');
        const room = rooms.find(r => r.code === code);
        if (roomNameEl) roomNameEl.textContent = room?.name || `Room ${code}`;
        if (roomCodeEl) roomCodeEl.textContent = code;

        // Add self to members
        const myName = profile.username || getLoggedInUser().username || 'DJ_Glitch';
        activeRoomMembers = [{ id: 'me', name: myName, seed: myName, isHost: true }];
        renderRoomMembers();
        appendChatMsg(null, `You joined Room ${code} 🎶`, true);
        showSocialToast(`Joined Room ${code} 🎵`, "You're now listening together in real-time!");

        // Populate room playlist dropdown
        if (typeof populateRoomPlaylists === 'function') {
            populateRoomPlaylists();
        }

        // Show floating persistent live room bar across the entire app
        const floatBar = document.getElementById('persistentLiveRoomBar');
        const floatCode = document.getElementById('floatingRoomCode');
        if (floatBar) floatBar.style.display = 'flex';
        if (floatCode) floatCode.textContent = code;

        // If host was already playing a track, broadcast it to the room immediately
        const curAud = document.getElementById('mainAudio');
        const curTitle = document.querySelector('.track-title')?.textContent;
        const curArtist = document.querySelector('.track-artist')?.textContent;
        const curArt = document.querySelector('.track-art')?.src;
        if (curAud && curAud.src && !curAud.paused && curTitle && curTitle !== 'Track Title' && curTitle !== 'Acid Rain') {
            publishRoomEvent(code, {
                type: 'play',
                trackUrl: curAud.src,
                url: curAud.src,
                title: curTitle,
                artist: curArtist,
                artUrl: curArt,
                currentTime: curAud.currentTime || 0
            });
            updateRoomNowPlaying(curTitle, curArtist, curArt);
        }
    }

    function leaveRoom(notify = true) {
        const code = currentRoomCode || window.currentRoom;
        if (code) {
            publishRoomEvent(code, { 
                type: 'leave', 
                name: profile.username || getLoggedInUser().username || 'DJ_Glitch' 
            });
        }
        if (window._syncEventSource) {
            try { window._syncEventSource.close(); } catch(e) {}
            window._syncEventSource = null;
        }

        currentRoomCode = null;
        window.currentRoom = null;
        sessionStorage.removeItem('activeSyncRoom');
        activeRoomMembers = [];

        const roomSetup = document.getElementById('room-setup');
        const roomActive = document.getElementById('room-active');
        const activePanel = document.getElementById('activeRoomPanel');
        if (roomSetup) roomSetup.style.display = 'flex';
        if (roomActive) roomActive.style.display = 'none';
        if (activePanel) activePanel.style.display = 'none';

        const floatBar = document.getElementById('persistentLiveRoomBar');
        if (floatBar) floatBar.style.display = 'none';

        const roomCodeEl = document.getElementById('activeRoomCode');
        if (roomCodeEl) roomCodeEl.textContent = '------';

        if (notify) showSocialToast('Left Room 👋', 'Disconnected from listening session.');
        
        // Clear chat
        const chatMessages = document.getElementById('roomChatMessages');
        if (chatMessages) chatMessages.innerHTML = '';
        const roomChatDisplay = document.getElementById('roomChatDisplay');
        if (roomChatDisplay) roomChatDisplay.innerHTML = '<div style="color: var(--text-muted); font-style: italic;">Welcome to the listening room! Say hi 👋</div>';
    }
    window.joinRoom = joinRoom;
    window.leaveRoom = leaveRoom;

    // Leave room buttons
    const leaveRoomBtn = document.getElementById('leaveRoomBtn');
    if (leaveRoomBtn) leaveRoomBtn.addEventListener('click', () => leaveRoom(true));

    // Copy room code
    const copyCodeBtn = document.getElementById('copyRoomCodeBtn');
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const code = document.getElementById('activeRoomCode')?.textContent?.trim();
            if (code && code !== '------') {
                navigator.clipboard.writeText(code).then(() => showSocialToast('Room Code Copied! 📋', `Share code ${code} with friends`));
            }
        });
    }

    // Copy 1-Click Friend Invite Link
    const copyInviteBtn = document.getElementById('copyRoomInviteLinkBtn');
    if (copyInviteBtn) {
        copyInviteBtn.addEventListener('click', () => {
            const code = document.getElementById('activeRoomCode')?.textContent?.trim();
            if (code && code !== '------') {
                const inviteUrl = `${window.location.origin}/?room=${encodeURIComponent(code)}`;
                navigator.clipboard.writeText(inviteUrl).then(() => {
                    showSocialToast('Invite Link Copied! 🔗', 'Send this link to your friend — they will join automatically!');
                }).catch(() => {
                    prompt('Copy this invite link for your friend:', inviteUrl);
                });
            }
        });
    }

    // Auto-join room if arrived via URL param (?room=CODE)
    if (window.pendingJoinRoomCode) {
        const roomToJoin = window.pendingJoinRoomCode;
        window.pendingJoinRoomCode = null;
        setTimeout(() => {
            const profileNav = document.querySelector('.nav-item[data-target="profile"]');
            if (profileNav) profileNav.click();
            const listenTab = document.getElementById('tab-btn-listen');
            if (listenTab) listenTab.click();
            if (typeof joinRoom === 'function') {
                joinRoom(roomToJoin);
                showSocialToast(`Joined Room ${roomToJoin} 🎵`, "Connected to your friend's live session!");
            }
            try {
                window.history.replaceState({}, document.title, window.location.pathname);
            } catch(e) {}
        }, 500);
    }

    // Handle incoming room messages
    function handleRoomMessage(event) {
        const msg = event.data;
        if (!msg) return;

        // Prevent echo loop if this message was sent by myself
        if (msg.clientId && msg.clientId === window.mySyncClientId) return;

        // Initial sync state from room cache
        if (msg.type === 'sync_state' && msg.state) {
            const st = msg.state;
            if (st.title) {
                updateRoomNowPlaying(st.title, st.artist, st.artUrl);
                if (st.isPlaying && st.trackUrl) {
                    const elapsed = st.updatedAt ? Math.max(0, (Date.now() - st.updatedAt) / 1000) : 0;
                    playTrack(st.trackUrl, st.title, st.artist, st.artUrl, true);
                    const mainAud = document.getElementById('mainAudio');
                    if (mainAud) mainAud.currentTime = (st.currentTime || 0) + elapsed;
                }
            }
        }

        if (msg.type === 'join') {
            if (!activeRoomMembers.find(m => m.name === msg.name)) {
                activeRoomMembers.push({ id: msg.name, name: msg.name, seed: msg.seed || msg.name });
                renderRoomMembers();
            }
            appendChatMsg(null, `${msg.name} joined the room 🎵`, true);
            showSocialToast('Friend Connected 👥', `${msg.name} joined room ${msg.room || ''}`);
        }

        if (msg.type === 'leave') {
            activeRoomMembers = activeRoomMembers.filter(m => m.name !== msg.name);
            renderRoomMembers();
            appendChatMsg(null, `${msg.name} left the room 👋`, true);
        }

        if (msg.type === 'play' || msg.type === 'SYNC_PLAYBACK') {
            window._isSyncing = true;
            const mainAudio = document.getElementById('mainAudio');
            const bottomPlayer = document.getElementById('bottom-player');
            const enableBtn = document.getElementById('btnEnableAudio');
            const trackUrl = msg.trackUrl || msg.url;
            const trackTitle = msg.title || 'Track';
            const trackArtist = msg.artist || 'Artist';
            const trackArt = msg.artUrl || msg.art || '';
            const timestamp = msg.currentTime !== undefined ? msg.currentTime : (msg.timestamp || 0);

            if (mainAudio && trackUrl) {
                mainAudio.src = trackUrl;
                mainAudio.currentTime = timestamp;
                mainAudio.play().then(() => {
                    if (enableBtn) enableBtn.style.display = 'none';
                }).catch(() => {
                    // Autoplay was blocked by browser policy until user clicks
                    if (enableBtn) {
                        enableBtn.style.display = 'block';
                        enableBtn.onclick = () => {
                            mainAudio.play();
                            enableBtn.style.display = 'none';
                        };
                    }
                }).finally(() => {
                    setTimeout(() => { window._isSyncing = false; }, 200);
                });

                if (bottomPlayer) bottomPlayer.style.display = 'flex';
                const titleEl = document.querySelector('.track-title');
                const artistEl = document.querySelector('.track-artist');
                const artEl = document.querySelector('.track-art');
                const playIcon = document.getElementById('playIcon');
                if (titleEl) titleEl.textContent = trackTitle;
                if (artistEl) artistEl.textContent = trackArtist;
                if (artEl && trackArt) artEl.src = trackArt;
                if (playIcon) playIcon.textContent = 'pause';
                if (typeof updatePlayerLikeState === 'function') updatePlayerLikeState(trackTitle);
                if (typeof highlightActivePlaylistRow === 'function') highlightActivePlaylistRow(trackTitle);
            }
            // Update room now playing
            updateRoomNowPlaying(trackTitle, trackArtist, trackArt);
            appendChatMsg(null, `▶ Now playing: ${trackTitle}`, true);
        }

        if (msg.type === 'pause') {
            window._isSyncing = true;
            const mainAudio = document.getElementById('mainAudio');
            if (mainAudio) {
                mainAudio.pause();
                const playIcon = document.getElementById('playIcon');
                if (playIcon) playIcon.textContent = 'play_arrow';
            }
            appendChatMsg(null, `⏸ Paused playback`, true);
            setTimeout(() => { window._isSyncing = false; }, 150);
        }

        if (msg.type === 'resume') {
            window._isSyncing = true;
            const mainAudio = document.getElementById('mainAudio');
            if (mainAudio) {
                mainAudio.play().catch(() => {});
                const playIcon = document.getElementById('playIcon');
                if (playIcon) playIcon.textContent = 'pause';
            }
            appendChatMsg(null, `▶ Resumed playback`, true);
            setTimeout(() => { window._isSyncing = false; }, 150);
        }

        if (msg.type === 'seek') {
            window._isSyncing = true;
            const mainAudio = document.getElementById('mainAudio');
            const targetTime = msg.currentTime !== undefined ? msg.currentTime : (msg.timestamp || 0);
            if (mainAudio && Math.abs(mainAudio.currentTime - targetTime) > 1.5) {
                mainAudio.currentTime = targetTime;
            }
            setTimeout(() => { window._isSyncing = false; }, 150);
        }

        if (msg.type === 'reaction') {
            showFloatingReaction(msg.emoji, msg.from);
        }

        if (msg.type === 'chat') {
            appendChatMsg(msg.from, msg.text, false);
        }

        if (msg.type === 'new_dedication') {
            const currentUser = getLoggedInUser();
            if (msg.toUser && msg.toUser.toLowerCase() === (currentUser.username || '').toLowerCase()) {
                if (!currentUser.dedications) currentUser.dedications = [];
                currentUser.dedications.unshift(msg.dedication);
                setLoggedInUser(currentUser);
                if (typeof renderDedications === 'function') renderDedications();
                showSocialToast('New Dedication Received! 🎁', `"${msg.dedication.trackTitle}" from @${msg.dedication.fromUser}`);
            }
        }
    }

    function renderRoomMembers() {
        const container = document.getElementById('roomMembersList');
        if (!container) return;
        container.innerHTML = '';
        activeRoomMembers.forEach((m) => {
            const chip = document.createElement('div');
            chip.className = 'room-member-chip' + (m.isHost ? ' host' : '');
            chip.innerHTML = `
                <div class="room-member-chip-avatar">
                    <img src="${avatarUrl(m.seed || m.name)}" alt="${m.name}" onerror="this.onerror=null; this.src='https://api.dicebear.com/9.x/avataaars/svg?seed=Member';">
                    <div class="room-sync-ring"></div>
                </div>
                <span class="room-member-chip-name">${m.name}${m.isHost ? ' 👑' : ''}</span>
            `;
            container.appendChild(chip);
        });
    }

    function updateRoomNowPlaying(title, artist, art) {
        const titleEl  = document.getElementById('roomTrackTitle') || document.getElementById('roomSyncTitle');
        const artistEl = document.getElementById('roomTrackArtist') || document.getElementById('roomSyncArtist');
        const artEl    = document.getElementById('roomTrackArt') || document.getElementById('roomSyncArt');
        if (titleEl)  titleEl.textContent  = title || 'Waiting for music...';
        if (artistEl) artistEl.textContent = artist || 'Host must play a track';
        if (artEl && art) artEl.src = art;

        const floatTrack = document.getElementById('floatingRoomTrack');
        if (floatTrack) {
            floatTrack.textContent = title ? `${title} • ${artist || ''}` : 'Waiting for music...';
        }
    }

    // Hook into the audio element's events to synchronize playback with connected devices
    const mainAudio = document.getElementById('mainAudio');
    if (mainAudio) {
        mainAudio.addEventListener('play', () => {
            if (window._isSyncing || (!currentRoomCode && !window.currentRoom)) return;
            const code = currentRoomCode || window.currentRoom;
            const titleEl  = document.querySelector('.track-title');
            const artistEl = document.querySelector('.track-artist');
            const artEl    = document.querySelector('.track-art');
            publishRoomEvent(code, {
                type: 'play',
                trackUrl: mainAudio.src,
                url: mainAudio.src,
                title: titleEl?.textContent || 'Track',
                artist: artistEl?.textContent || 'Artist',
                artUrl: artEl?.src || '',
                art: artEl?.src || '',
                currentTime: mainAudio.currentTime || 0,
                timestamp: mainAudio.currentTime || 0
            });
            updateRoomNowPlaying(titleEl?.textContent, artistEl?.textContent, artEl?.src);
        });

        mainAudio.addEventListener('pause', () => {
            if (window._isSyncing || (!currentRoomCode && !window.currentRoom)) return;
            const code = currentRoomCode || window.currentRoom;
            publishRoomEvent(code, {
                type: 'pause'
            });
        });

        mainAudio.addEventListener('seeked', () => {
            if (window._isSyncing || (!currentRoomCode && !window.currentRoom)) return;
            const code = currentRoomCode || window.currentRoom;
            publishRoomEvent(code, {
                type: 'seek',
                currentTime: mainAudio.currentTime || 0,
                timestamp: mainAudio.currentTime || 0
            });
        });
    }

    // Autoplay unlock button for mobile / remote listeners
    const enableAudioBtn = document.getElementById('btnEnableAudio');
    if (enableAudioBtn) {
        enableAudioBtn.addEventListener('click', () => {
            if (mainAudio) {
                mainAudio.play().then(() => {
                    enableAudioBtn.style.display = 'none';
                }).catch(e => console.warn('Audio resume error:', e));
            }
        });
    }

    // Floating Reaction Animation
    function showFloatingReaction(emoji, from) {
        const floatEl = document.createElement('div');
        floatEl.textContent = emoji;
        floatEl.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: ${Math.floor(Math.random() * 80) + 20}px;
            font-size: 2.5rem;
            pointer-events: none;
            z-index: 99999;
            animation: floatUp 2.5s ease-out forwards;
        `;
        document.body.appendChild(floatEl);
        setTimeout(() => floatEl.remove(), 2500);
    }
    window.showFloatingReaction = showFloatingReaction;

    // Room chat
    function appendChatMsg(from, text, isSystem = false) {
        const container = document.getElementById('roomChatMessages') || document.getElementById('roomChatDisplay');
        if (!container) return;
        const el = document.createElement(isSystem ? 'p' : 'div');
        if (isSystem) {
            el.className = 'chat-system-msg';
            el.style.cssText = 'color: var(--neon-cyan, #00f0ff); font-size: 0.8rem; margin: 2px 0;';
            el.textContent = text;
        } else {
            const myName = profile.username || getLoggedInUser().username || 'DJ_Glitch';
            el.className = 'chat-msg' + (from === myName ? ' own' : '');
            el.style.cssText = 'margin: 4px 0; background: rgba(255,255,255,0.06); padding: 4px 8px; border-radius: 6px;';
            el.innerHTML = `<span style="font-weight: bold; color: var(--neon-pink, #ff69b4);">${from}:</span> <span>${text}</span>`;
        }
        container.appendChild(el);
        container.scrollTop = container.scrollHeight;
    }

    function sendChatMessage() {
        const input = document.getElementById('roomChatInput') || document.getElementById('inputRoomChat');
        const text = input?.value.trim();
        const code = currentRoomCode || window.currentRoom;
        if (!text || !code) return;
        const from = profile.username || getLoggedInUser().username || 'DJ_Glitch';
        appendChatMsg(from, text, false);
        publishRoomEvent(code, { type: 'chat', from, text });
        if (input) input.value = '';
    }

    document.addEventListener('click', (e) => {
        if (e.target.id === 'btnSendRoomChat' || e.target.id === 'roomChatSendBtn') {
            sendChatMessage();
        }
        const reactionBtn = e.target.closest('.room-reaction-btn');
        if (reactionBtn) {
            const emoji = reactionBtn.dataset.emoji;
            const code = currentRoomCode || window.currentRoom;
            const from = profile.username || getLoggedInUser().username || 'DJ_Glitch';
            showFloatingReaction(emoji, from);
            if (code) {
                publishRoomEvent(code, { type: 'reaction', emoji, from });
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.target.id === 'inputRoomChat' || e.target.id === 'roomChatInput')) {
            sendChatMessage();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.target.id === 'inputRoomChat' || e.target.id === 'roomChatInput')) {
            sendChatMessage();
        }
    });

    // ========================
    // ANTHEM PANEL
    // ========================
    const playAnthemBtn   = document.getElementById('playAnthemBtn');
    const shareAnthemBtn  = document.getElementById('shareAnthemBtn');
    const changeAnthemBtn = document.getElementById('changeAnthemBtn');

    if (playAnthemBtn) {
        playAnthemBtn.addEventListener('click', () => {
            showToast('Playing Anthem 🎵', 'Midnight City — M83');
        });
    }

    if (shareAnthemBtn) {
        shareAnthemBtn.addEventListener('click', () => {
            if (friends.length === 0) { showToast('No friends yet!', 'Add friends first.'); return; }
            const randomFriend = friends[Math.floor(Math.random() * friends.length)];
            showToast(`Anthem Shared with ${randomFriend.name} 🎵`, '"Midnight City" — M83');
        });
    }

    if (changeAnthemBtn) {
        changeAnthemBtn.addEventListener('click', () => {
            showToast('Change Anthem', 'Play any track and it becomes your anthem!');
        });
    }

    // When a track plays, offer to set as anthem
    if (mainAudio) {
        mainAudio.addEventListener('play', () => {
            const titleEl  = document.querySelector('.track-title');
            const artistEl = document.querySelector('.track-artist');
            const artEl    = document.querySelector('.track-art');
            if (!titleEl) return;
            const title  = titleEl.textContent;
            const artist = artistEl?.textContent || '';
            const art    = artEl?.src || '';

            // Update anthem display dynamically when on anthem tab
            const anthemTitle  = document.getElementById('anthemTitle');
            const anthemArtist = document.getElementById('anthemArtist');
            const anthemArt    = document.getElementById('anthemArt');
            if (anthemTitle)  anthemTitle.textContent  = title;
            if (anthemArtist) anthemArtist.textContent = artist;
            if (anthemArt && art) anthemArt.src = art;
        });
    }
}

function setupProfileListeners() {
    if (document.getElementById('profile-view')) {
        initProfileFeatures();
    } else {
        const observer = new MutationObserver(() => {
            if (document.getElementById('profile-view')) {
                observer.disconnect();
                initProfileFeatures();
            }
        });
        observer.observe(document.getElementById('app-content-area') || document.body, { childList: true, subtree: true });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupProfileListeners);
} else {
    setupProfileListeners();
}

// Listen for incoming sync command (registered immediately upon script load)
document.addEventListener('SYNC_PLAY_COMMAND', (e) => {
    const data = e.detail;
    const fn = window.playTrack || (typeof playTrack === 'function' ? playTrack : null);
    if (fn) {
        fn(data.trackUrl, data.title, data.artist, data.artUrl, true);
    }
    
    // Update active room UI if visible
    const roomSyncTitle = document.getElementById('roomSyncTitle');
    const roomSyncArtist = document.getElementById('roomSyncArtist');
    const roomSyncArt = document.getElementById('roomSyncArt');
    if (roomSyncTitle) roomSyncTitle.textContent = data.title;
    if (roomSyncArtist) roomSyncArtist.textContent = data.artist;
    if (roomSyncArt) roomSyncArt.src = data.artUrl;
    
    showSocialToast('Synced Playback', `Playing ${data.title}`);
});

// --- PROFILE UI & SOCIAL LOGIC ---
const GATEWAY_URL = '/api';

// Current Logged In User State
function getLoggedInUser() {
    return JSON.parse(localStorage.getItem('currentUser')) || { username: 'DJ_Glitch', connections: [], pinnedPlaylists: [] };
}
function getAuthToken() {
    return localStorage.getItem('authToken');
}

async function apiFetch(url, options = {}) {
    const token = getAuthToken();
    const headers = { ...options.headers };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    // Fallback if hosted on GitHub Pages or if backend is unreachable
    const isOfflineMode = localStorage.getItem('offlineMode') === 'true';
    if (isOfflineMode) {
        return handleMockRequest(url, options);
    }
    
    try {
        const response = await fetch(url, { ...options, headers });
        return response;
    } catch (err) {
        console.warn(`Backend fetch to ${url} failed. Falling back to frontend-only mock mode...`, err);
        return handleMockRequest(url, options);
    }
}

function handleMockRequest(url, options = {}) {
    let urlObj;
    try {
        urlObj = new URL(url);
    } catch (e) {
        // Fallback for relative URLs
        urlObj = new URL(url, (typeof window !== 'undefined' && window.location && window.location.origin) ? window.location.origin : 'http://localhost:5000');
    }
    const path = urlObj.pathname;
    const method = (options.method || 'GET').toUpperCase();
    
    // Get currently logged-in user session
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { username: 'Guest' };
    if (!currentUser.connections) currentUser.connections = [];
    if (!currentUser.connectionRequests) currentUser.connectionRequests = [];
    if (!currentUser.sentConnectionRequests) currentUser.sentConnectionRequests = [];
    if (!currentUser.followedArtists) currentUser.followedArtists = [];
    if (!currentUser.pinnedPlaylists) currentUser.pinnedPlaylists = [];
    if (!currentUser.playlistPlayCounts) currentUser.playlistPlayCounts = {};
    if (!currentUser.dedications) currentUser.dedications = [];
    
    let responseData = null;
    let status = 200;
    
    if (path.endsWith('/tracks')) {
        responseData = [
            {
                title: "Midnight City",
                artist: "M83",
                url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a",
                artUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop",
                tags: ["electronic", "new_release"]
            },
            {
                title: "Blinding Lights",
                artist: "The Weeknd",
                url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a",
                artUrl: "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=200&auto=format&fit=crop",
                tags: ["pop", "trending"]
            },
            {
                title: "Lo-fi Study",
                artist: "Chillhop",
                url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a",
                artUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200&auto=format&fit=crop",
                tags: ["lofi", "chill"]
            }
        ];
    } else if (path.endsWith('/playlists')) {
        responseData = [
            {
                id: "pl_global_50",
                name: "Global Top 50",
                description: "The most played tracks right now.",
                artUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=300&auto=format&fit=crop",
                tracks: [
                    {
                        title: "Midnight City",
                        artist: "M83",
                        url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a",
                        artUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop"
                    },
                    {
                        title: "Blinding Lights",
                        artist: "The Weeknd",
                        url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a",
                        artUrl: "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=200&auto=format&fit=crop"
                    }
                ]
            },
            {
                id: "pl_morning_chill",
                name: "Morning Chill",
                description: "Relaxing beats to start your day.",
                artUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop",
                tracks: [
                    {
                        title: "Lo-fi Study",
                        artist: "Chillhop",
                        url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a",
                        artUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop"
                    }
                ]
            }
        ];
    } else if (path.includes('/pin-playlist')) {
        const body = options.body ? JSON.parse(options.body) : {};
        const playlistName = body.playlist;
        let pinned = currentUser.pinnedPlaylists || [];
        let isPinned = false;
        if (pinned.includes(playlistName)) {
            pinned = pinned.filter(p => p !== playlistName);
        } else {
            pinned.push(playlistName);
            isPinned = true;
        }
        currentUser.pinnedPlaylists = pinned;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        responseData = {
            message: "Playlist pin status updated",
            isPinned: isPinned,
            pinnedPlaylists: pinned
        };
    } else if (path.includes('/connect/')) {
        // DELETE friend connection
        const parts = path.split('/connect/');
        const friend = parts[parts.length - 1];
        let conns = currentUser.connections || [];
        conns = conns.filter(c => c !== friend);
        currentUser.connections = conns;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        responseData = { message: "Connection removed successfully" };
    } else if (path.includes('/connect')) {
        // POST friend connection
        const body = options.body ? JSON.parse(options.body) : {};
        const friend = body.friendUsername;
        let conns = currentUser.connections || [];
        if (!conns.includes(friend)) conns.push(friend);
        currentUser.connections = conns;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        responseData = { message: "Connection added successfully" };
    } else if (path.includes('/users/search')) {
        // search friends
        const query = urlObj.searchParams.get('query') || '';
        const mockUsers = ["Alex", "Sam", "Charlie", "Taylor", "Jordan", "Morgan"];
        const results = mockUsers
            .filter(u => u.toLowerCase().includes(query.toLowerCase()) && u !== currentUser.username)
            .map(u => ({ username: u, avatarUrl: `https://api.dicebear.com/9.x/avataaars/svg?seed=${u}` }));
        responseData = results;
    } else if (path.includes('/dedicate')) {
        responseData = { message: "Dedication sent successfully!" };
    } else if (path.includes('/users/')) {
        responseData = currentUser;
    } else {
        responseData = { error: "Mock endpoint not found" };
        status = 404;
    }
    
    return new Response(JSON.stringify(responseData), {
        status: status,
        headers: { 'Content-Type': 'application/json' }
    });
}


function setLoggedInUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Fetch Full User Profile from Backend on Load
async function syncUserProfile() {
    const currentUser = getLoggedInUser();
    if (!currentUser || !currentUser.username) return;
    
    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(currentUser.username)}`);
        if (res.ok) {
            const data = await res.json();
            const updatedUser = { ...currentUser, ...data };
            setLoggedInUser(updatedUser);
            renderUserProfileUI(updatedUser);
        }
    } catch (err) {
        console.error('Error syncing user profile:', err);
    }
}

function renderUserProfileUI(user) {
    if (!user) user = getLoggedInUser();
    
    // Update Header
    const usernameEl = document.getElementById('profileUsernameDisplay');
    const bioEl = document.getElementById('profileBioDisplay');
    const avatarEl = document.getElementById('profileAvatarImg');
    const playlistsCountEl = document.getElementById('profilePlaylistsCount');
    const connCountEl = document.getElementById('profileConnectionsCount');
    const artistsCountEl = document.getElementById('profileArtistsCount');
    const topbarUserEl = document.querySelector('.username');
    const topbarAvatarEl = document.getElementById('topbarAvatarImg');
    
    if (usernameEl) usernameEl.textContent = `@${user.username}`;
    let userBio = user.bio || '';
    if (!userBio || /signed in via/i.test(userBio)) {
        userBio = 'Vibing to the beat of the universe 🎧';
        user.bio = userBio;
        try {
            const u = JSON.parse(localStorage.getItem('currentUser')) || {};
            u.bio = userBio;
            localStorage.setItem('currentUser', JSON.stringify(u));
        } catch(e) {}
    }
    if (bioEl) bioEl.textContent = userBio;
    if (avatarEl && user.avatarUrl) avatarEl.src = user.avatarUrl;
    
    // True dynamic stats (no fake/predefined numbers!)
    const pinnedCount = (user.pinnedPlaylists || []).length;
    const createdCount = (user.createdPlaylists || []).length;
    if (playlistsCountEl) playlistsCountEl.textContent = pinnedCount + createdCount;
    if (connCountEl) connCountEl.textContent = (user.connections || []).length;
    if (artistsCountEl) artistsCountEl.textContent = (user.followedArtists || []).length;

    if (topbarUserEl) topbarUserEl.textContent = user.username;
    if (topbarAvatarEl && user.avatarUrl) topbarAvatarEl.src = user.avatarUrl;
    
    // Render Pinned Playlists, Connections, Pending Requests, Followed Artists, Bio Song & Top Played Playlists
    renderPinnedPlaylists(user);
    renderTopPlayedPlaylists(user);
    renderConnectionsList(user);
    renderPendingRequests(user);
    renderFollowedArtists(user);
    renderBioSong(user);
}

// Render Pinned Playlists
function renderPinnedPlaylists(user) {
    if (!user) user = getLoggedInUser();
    const section = document.getElementById('pinnedPlaylistsSection');
    const container = document.getElementById('pinnedPlaylistsContainer');
    const homeContainer = document.getElementById('homePinnedPlaylistsContainer');
    
    const pinned = user.pinnedPlaylists || [];
    
    // Update Pin Icons on All Playlist Cards
    document.querySelectorAll('.pin-playlist-btn').forEach(btn => {
        const plName = btn.getAttribute('data-playlist');
        const icon = btn.querySelector('.material-icons');
        if (pinned.includes(plName)) {
            btn.style.color = 'var(--neon-pink, #ff69b4)';
            if (icon) icon.style.color = 'var(--neon-pink, #ff69b4)';
        } else {
            btn.style.color = 'var(--text-muted, #888)';
            if (icon) icon.style.color = 'var(--text-muted, #888)';
        }
    });
    
    // Render in Profile page
    if (section && container) {
        if (pinned.length === 0) {
            section.style.display = 'none';
            container.innerHTML = '';
        } else {
            section.style.display = 'flex';
            container.innerHTML = '';
            
            pinned.forEach(plName => {
                const pl = window.allPlaylists.find(p => p.name === plName);
                const plArt = pl ? pl.artUrl : 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop';
                const div = document.createElement('div');
                div.style.cssText = 'display: flex; align-items: center; gap: 1rem; padding: 0.8rem 1rem; background: rgba(255, 105, 180, 0.08); border: 1px solid rgba(255, 105, 180, 0.3); border-radius: 12px; cursor: pointer;';
                div.innerHTML = `
                    <span class="material-icons" style="color: var(--neon-pink, #ff69b4);">push_pin</span>
                    <img src="${plArt}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';" style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover;">
                    <div style="flex: 1;">
                        <h4 style="margin: 0; font-size: 0.95rem; color: var(--text-primary, #333);">${plName}</h4>
                        <p style="margin: 0; font-size: 0.8rem; color: var(--text-muted, #888);">Pinned Playlist</p>
                    </div>
                    <button class="pin-playlist-btn" data-playlist="${plName}" style="background: transparent; border: none; cursor: pointer; color: var(--neon-pink, #ff69b4);" title="Unpin">
                        <span class="material-icons">push_pin</span>
                    </button>
                    <button class="play-pl-btn" style="background: transparent; border: none; cursor: pointer;">
                        <span class="material-icons" style="color: var(--text-primary, #333); font-size: 2rem;">play_circle_filled</span>
                    </button>
                `;
                
                div.addEventListener('click', (e) => {
                    if (!e.target.closest('button')) {
                        const playlistsTab = document.querySelector('.nav-item[data-target="playlists"]');
                        if (playlistsTab) playlistsTab.click();
                        if (pl) openPlaylistDetail(pl);
                    }
                });
                
                div.querySelector('.pin-playlist-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    togglePinPlaylist(plName);
                });
                
                div.querySelector('.play-pl-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (pl) playPlaylist(pl);
                });
                
                container.appendChild(div);
            });
        }
    }

    // Render in Home page
    if (homeContainer) {
        homeContainer.innerHTML = '';
        if (pinned.length === 0) {
            homeContainer.innerHTML = '<p class="empty-pinned-notice" style="font-style: italic; margin: 1rem 0; font-weight: 800;">No pinned playlists. Pin a playlist from your profile or library to show it here!</p>';
        } else {
            pinned.forEach(plName => {
                const pl = window.allPlaylists.find(p => p.name === plName);
                const plArt = pl ? pl.artUrl : 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop';
                const div = document.createElement('div');
                div.className = 'quick-card pinned-card';
                div.style.cursor = 'pointer';
                div.innerHTML = `
                    <img src="${plArt}" alt="${plName}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';">
                    <div style="padding-left: 10px; font-weight: 600;">📌 ${plName}</div>
                `;
                div.addEventListener('click', () => {
                    const playlistsTab = document.querySelector('.nav-item[data-target="playlists"]');
                    if (playlistsTab) playlistsTab.click();
                    if (pl) openPlaylistDetail(pl);
                });
                homeContainer.appendChild(div);
            });
        }
    }
}

// Render Dedications
function renderDedications() {
    const user = getLoggedInUser();
    const container = document.getElementById('dedicationsGrid');
    if (!container) return;

    let dedications = (user && user.dedications) ? user.dedications : [];
    
    // Ensure default starter dedications exist so user can immediately listen
    if (!dedications || dedications.length === 0) {
        dedications = [
            {
                id: 'ded_1',
                fromUser: 'Alex',
                trackTitle: 'Midnight City',
                trackArtist: 'M83',
                trackArt: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop',
                trackUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a',
                mood: 'lofi',
                message: 'This track completely matches your late-night vibe! 🌙',
                timestamp: new Date(Date.now() - 3600000 * 2).toISOString()
            },
            {
                id: 'ded_2',
                fromUser: 'Sammy',
                trackTitle: 'Blinding Lights',
                trackArtist: 'The Weeknd',
                trackArt: 'https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=300&auto=format&fit=crop',
                trackUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/37/14/08/37140801-adfd-4c90-b7b2-30c0d58e6de5/mzaf_1392558310011617280.plus.aac.p.m4a',
                mood: 'happy',
                message: 'Remember jamming to this on repeat? Let us sync and listen! ⚡',
                timestamp: new Date(Date.now() - 3600000 * 24).toISOString()
            },
            {
                id: 'ded_3',
                fromUser: 'Charlie',
                trackTitle: 'Until I Found You',
                trackArtist: 'Stephen Sanchez',
                trackArt: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=300&auto=format&fit=crop',
                trackUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bc/d8/21/bcd82103-3b68-9c24-a0cb-07df7a5b0cce/mzaf_14604456924045178752.plus.aac.p.m4a',
                mood: 'romantic',
                message: 'For deep romantic hours. Put this on loop! ❤️',
                timestamp: new Date(Date.now() - 3600000 * 48).toISOString()
            }
        ];
        if (user) {
            user.dedications = dedications;
            setLoggedInUser(user);
        }
    }

    container.innerHTML = '';
    dedications.forEach(ded => {
        const card = document.createElement('div');
        card.className = 'dedication-full-card';
        card.setAttribute('data-sender', ded.fromUser || '');
        card.setAttribute('data-mood', ded.mood || 'vibes');
        card.setAttribute('data-date', ded.timestamp || '');
        card.setAttribute('data-url', ded.trackUrl || '');
        
        const dateStr = ded.timestamp ? new Date(ded.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';
        
        card.innerHTML = `
            <div class="ded-art">
                <img src="${ded.trackArt || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop'}" alt="Track" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop';">
                <div class="ded-play"><span class="material-icons">play_arrow</span></div>
                <button class="ded-queue-btn" title="Add to Queue"><span class="material-icons">playlist_add</span></button>
            </div>
            <div class="ded-info">
                <h3></h3>
                <p class="ded-artist"></p>
                <div class="ded-meta">
                    <span class="ded-sender"><span class="material-icons" style="font-size: 0.9rem;">person</span> <span class="sender-name"></span></span>
                    <span class="ded-date"></span>
                </div>
                <div class="ded-note"></div>
            </div>
        `;
        const isOutgoing = ded.toUser && ded.fromUser === (user.username || 'DJ_Glitch');
        const senderLabel = isOutgoing ? `To @${ded.toUser}` : (ded.fromUser || 'Friend');
        card.querySelector('h3').textContent = ded.trackTitle || '';
        card.querySelector('.ded-artist').textContent = ded.trackArtist || '';
        card.querySelector('.sender-name').textContent = senderLabel;
        card.querySelector('.ded-date').textContent = dateStr;
        card.querySelector('.ded-note').textContent = `"${ded.message || 'Shared a track with you'}"`;

        card.querySelector('.ded-play').addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof window.playTrack === 'function') {
                window.playTrack(ded.trackUrl, ded.trackTitle, ded.trackArtist, ded.trackArt);
            }
        });
        card.querySelector('.ded-queue-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof addToUserQueue === 'function') {
                addToUserQueue(ded.trackTitle, ded.trackArtist, ded.trackArt, ded.trackUrl || '');
                if (typeof showSocialToast === 'function') showSocialToast('Added to Queue 🎶', ded.trackTitle);
            }
        });
        container.appendChild(card);
    });

    renderDedicationPlaylist();
}

// Render Dedication Playlist in Dedications View
function renderDedicationPlaylist() {
    const user = getLoggedInUser();
    const container = document.getElementById('dedicationPlaylistTracksRow');
    if (!container) return;

    let dedications = (user && user.dedications) ? user.dedications : [];
    if (!dedications || dedications.length === 0) {
        dedications = [
            {
                id: 'ded_1',
                fromUser: 'Alex',
                trackTitle: 'Midnight City',
                trackArtist: 'M83',
                trackArt: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop',
                trackUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a',
                mood: 'lofi',
                message: 'This track completely matches your late-night vibe! 🌙'
            },
            {
                id: 'ded_2',
                fromUser: 'Sammy',
                trackTitle: 'Blinding Lights',
                trackArtist: 'The Weeknd',
                trackArt: 'https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=300&auto=format&fit=crop',
                trackUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/37/14/08/37140801-adfd-4c90-b7b2-30c0d58e6de5/mzaf_1392558310011617280.plus.aac.p.m4a',
                mood: 'happy',
                message: 'Remember jamming to this on repeat? Let us sync and listen! ⚡'
            },
            {
                id: 'ded_3',
                fromUser: 'Charlie',
                trackTitle: 'Until I Found You',
                trackArtist: 'Stephen Sanchez',
                trackArt: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=300&auto=format&fit=crop',
                trackUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bc/d8/21/bcd82103-3b68-9c24-a0cb-07df7a5b0cce/mzaf_14604456924045178752.plus.aac.p.m4a',
                mood: 'romantic',
                message: 'For deep romantic hours. Put this on loop! ❤️'
            }
        ];
    }

    window.currentDedicationPlaylistTracks = dedications;
    container.innerHTML = '';

    dedications.forEach((ded) => {
        const card = document.createElement('div');
        card.className = 'dedication-track-card';
        const isOutgoing = ded.toUser && ded.fromUser === (user.username || 'DJ_Glitch');
        const badgeLabel = isOutgoing ? `To @${ded.toUser}` : `From @${ded.fromUser || 'Friend'}`;
        const art = ded.trackArt || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop';

        card.innerHTML = `
            <div class="track-art-wrapper">
                <img src="${art}" alt="${ded.trackTitle || 'Track'}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop';">
                <div class="play-hover-btn">
                    <span class="material-icons" style="font-size: 2.2rem;">play_arrow</span>
                </div>
            </div>
            <p class="ded-track-title">${ded.trackTitle || 'Dedicated Track'}</p>
            <p class="ded-track-artist">${ded.trackArtist || 'Artist'}</p>
            <span class="ded-track-badge">${badgeLabel}</span>
        `;

        card.addEventListener('click', () => {
            if (typeof window.playTrack === 'function') {
                window.playTrack(ded.trackUrl, ded.trackTitle, ded.trackArtist, art);
            }
        });

        container.appendChild(card);
    });
}
window.renderDedicationPlaylist = renderDedicationPlaylist;

// Toggle Pin Playlist
async function togglePinPlaylist(playlistName) {
    const user = getLoggedInUser();
    if (!user || !user.username) return;
    
    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/pin-playlist`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ playlist: playlistName })
        });
        const data = await res.json();
        if (res.ok) {
            user.pinnedPlaylists = data.pinnedPlaylists;
            setLoggedInUser(user);
            renderPinnedPlaylists(user);
            if (typeof renderPlaylists === 'function') renderPlaylists();
            showSocialToast(data.isPinned ? 'Playlist Pinned 📌' : 'Playlist Unpinned', `${playlistName}`);
        }
    } catch (err) {
        console.error('Error toggling pin:', err);
    }
}

// ============================================
// PROFILE: BIO SONG MANAGEMENT
// ============================================
const DEFAULT_BIO_SONG = {
    title: 'Midnight City',
    artist: 'M83',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a',
    artUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=600&auto=format&fit=crop'
};

function renderBioSong(user) {
    if (!user) user = getLoggedInUser();
    const song = user.bioSong || DEFAULT_BIO_SONG;
    
    const titleEl = document.getElementById('profileBioSongTitle');
    const artEl = document.getElementById('profileBioSongArt');
    const cardEl = document.getElementById('profileBioSongCard');
    
    if (titleEl) titleEl.textContent = `${song.title} • ${song.artist}`;
    if (artEl && song.artUrl) artEl.src = song.artUrl;
    
    if (cardEl) {
        cardEl.onclick = (e) => {
            e.stopPropagation();
            if (typeof window.playTrack === 'function') {
                window.playTrack(song.url, song.title, song.artist, song.artUrl || DEFAULT_BIO_SONG.artUrl);
                showSocialToast('Bio Song Playing 🎵', `${song.title} by ${song.artist}`);
            }
        };
    }
}

function setBioSong(song) {
    const user = getLoggedInUser();
    if (!user) return;
    user.bioSong = song;
    setLoggedInUser(user);
    renderBioSong(user);
    showSocialToast('Bio Song Updated! 🎶', `Now playing ${song.title} • ${song.artist}`);
    
    // Close modal
    const modal = document.getElementById('changeBioSongModal');
    if (modal) modal.style.display = 'none';
    
    // Sync with backend
    if (user.username) {
        apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/bio-song`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bioSong: song })
        }).catch(() => {});
    }
}

async function searchBioSong(query) {
    const resultsContainer = document.getElementById('bioSongSearchResults');
    if (!resultsContainer) return;
    if (!query || !query.trim()) return;
    
    resultsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; padding: 0.5rem; margin: 0;">Searching tracks...</p>';
    
    try {
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query.trim())}&media=music&limit=8`);
        const data = await res.json();
        
        if (!data.results || data.results.length === 0) {
            resultsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; padding: 0.5rem; margin: 0;">No tracks found for "${query}".</p>`;
            return;
        }
        
        resultsContainer.innerHTML = '';
        data.results.forEach(track => {
            const artUrl = (track.artworkUrl100 || '').replace('100x100bb', '300x300bb');
            const previewUrl = track.previewUrl || '';
            const title = track.trackName || 'Unknown Track';
            const artist = track.artistName || 'Unknown Artist';
            
            const div = document.createElement('div');
            div.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0.8rem; background: rgba(255,255,255,0.06); border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 0.4rem;';
            div.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.7rem; min-width: 0; flex: 1;">
                    <img src="${artUrl}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;">
                    <div style="min-width: 0; flex: 1;">
                        <h5 style="margin: 0; font-size: 0.85rem; color: var(--text-main, #fff); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${title}</h5>
                        <p style="margin: 0; font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${artist}</p>
                    </div>
                </div>
                <div style="display: flex; gap: 0.4rem; align-items: center; margin-left: 0.5rem;">
                    <button class="btn-select-bio-song" data-title="${encodeURIComponent(title)}" data-artist="${encodeURIComponent(artist)}" data-url="${encodeURIComponent(previewUrl)}" data-art="${encodeURIComponent(artUrl)}" style="padding: 0.35rem 0.75rem; font-size: 0.75rem; border-radius: 6px; border: none; background: var(--neon-pink, #ff69b4); color: #000; font-weight: bold; cursor: pointer; white-space: nowrap;">
                        Set Bio
                    </button>
                </div>
            `;
            resultsContainer.appendChild(div);
        });
    } catch(err) {
        resultsContainer.innerHTML = '<p style="color: red; font-size: 0.85rem; padding: 0.5rem; margin: 0;">Failed to search tracks.</p>';
    }
}

// ============================================
// PROFILE: FOLLOWED ARTISTS MANAGEMENT
// ============================================
function getFollowedArtists(user) {
    if (!user) user = getLoggedInUser();
    if (!user.followedArtists || !Array.isArray(user.followedArtists)) {
        user.followedArtists = [];
    }
    return user.followedArtists;
}

function renderFollowedArtists(user) {
    if (!user) user = getLoggedInUser();
    const list = getFollowedArtists(user);
    const container = document.getElementById('followedArtistsContainer');
    const countEl = document.getElementById('profileArtistsCount');
    if (countEl) countEl.textContent = list.length;
    if (!container) return;
    
    if (list.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 2.5rem 1.5rem; background: var(--bg-panel); border-radius: 16px; text-align: center; border: 1px dashed rgba(255,255,255,0.2);">
                <span class="material-icons" style="font-size: 2.8rem; color: var(--text-muted); margin-bottom: 0.6rem;">mic_off</span>
                <p style="color: var(--text-muted); font-style: italic; margin: 0 0 1.2rem; font-size: 0.95rem;">You are not following any artists yet.</p>
                <button type="button" onclick="document.getElementById('tab-btn-connections').click(); const si = document.getElementById('userSearchInput'); if (si) { si.focus(); si.placeholder = 'Search an artist (e.g. Drake, Taylor, Billie)...'; }" style="padding: 0.6rem 1.4rem; border-radius: 20px; background: var(--neon-pink, #ff69b4); border: none; color: #fff; font-weight: bold; cursor: pointer; font-size: 0.85rem;">
                    Find Artists to Follow
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    list.forEach(artist => {
        const card = document.createElement('div');
        card.style.cssText = 'background: var(--bg-panel); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 1.3rem 1.1rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.8rem; box-shadow: 0 4px 15px rgba(0,0,0,0.25); transition: transform 0.2s;';
        card.innerHTML = `
            <div style="position: relative; width: 92px; height: 92px; border-radius: 50%; overflow: hidden; border: 3px solid var(--neon-pink, #ff69b4); box-shadow: 0 0 14px rgba(255,105,180,0.3);">
                <img src="${artist.art || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop'}" alt="${artist.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div>
                <h4 style="margin: 0; color: var(--text-main, #fff); font-size: 1.05rem; font-weight: 700;">${artist.name}</h4>
                <p style="margin: 0.25rem 0 0; color: var(--text-muted); font-size: 0.78rem;">${artist.genre || 'Artist'}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; width: 100%; margin-top: auto;">
                <button class="btn-play-artist" data-artist="${artist.name}" type="button" style="flex: 1; padding: 0.45rem 0.6rem; border-radius: 8px; border: 1px solid var(--neon-cyan, #00f0ff); background: rgba(0,240,255,0.1); color: var(--neon-cyan, #00f0ff); font-size: 0.75rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.25rem;">
                    <span class="material-icons" style="font-size: 0.95rem;">play_arrow</span> Play
                </button>
                <button class="btn-unfollow-artist" data-artist="${artist.name}" type="button" style="padding: 0.45rem 0.6rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: var(--text-muted); font-size: 0.75rem; cursor: pointer;" title="Unfollow ${artist.name}">
                    Unfollow
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function followArtist(name, art, genre) {
    const user = getLoggedInUser();
    if (!user) return;
    if (!user.followedArtists) user.followedArtists = [];
    
    if (user.followedArtists.some(a => a.name.toLowerCase() === name.toLowerCase())) {
        showSocialToast('Already Following', `You are already following ${name}`);
        return;
    }
    
    user.followedArtists.push({
        name,
        art: art || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop',
        genre: genre || 'Music Artist'
    });
    setLoggedInUser(user);
    renderFollowedArtists(user);
    renderUserProfileUI(user);
    showSocialToast('Artist Followed 🎙️', `You are now following ${name}!`);
    
    // Refresh search if open
    const input = document.getElementById('userSearchInput');
    if (input && input.value) searchUsers(input.value);
}

function unfollowArtist(name) {
    const user = getLoggedInUser();
    if (!user) return;
    if (!user.followedArtists) user.followedArtists = [];
    user.followedArtists = user.followedArtists.filter(a => a.name.toLowerCase() !== name.toLowerCase());
    setLoggedInUser(user);
    renderFollowedArtists(user);
    renderUserProfileUI(user);
    showSocialToast('Unfollowed', `Removed ${name} from followed artists.`);
    
    // Refresh search if open
    const input = document.getElementById('userSearchInput');
    if (input && input.value) searchUsers(input.value);
}

// ============================================
// PROFILE: TOP FREQUENTLY PLAYED PLAYLISTS
// ============================================
function recordPlaylistPlay(playlistName) {
    if (!playlistName) return;
    const user = getLoggedInUser();
    if (!user) return;
    if (!user.playlistPlayCounts) user.playlistPlayCounts = {};
    user.playlistPlayCounts[playlistName] = (user.playlistPlayCounts[playlistName] || 0) + 1;
    setLoggedInUser(user);
    renderTopPlayedPlaylists(user);
    
    // Sync with backend
    if (user.username) {
        apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/playlist-play`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ playlistName })
        }).catch(() => {});
    }
}

function renderTopPlayedPlaylists(user) {
    if (!user) user = getLoggedInUser();
    const container = document.getElementById('topPlayedPlaylistsContainer');
    if (!container) return;
    
    const counts = user.playlistPlayCounts || {};
    const allPls = window.allPlaylists || (typeof getAllPlaylistsCatalog === 'function' ? getAllPlaylistsCatalog() : []);
    
    // Sort playlists by playCount descending
    const playedPlaylists = allPls
        .map(p => ({
            ...p,
            playCount: counts[p.name] || 0
        }))
        .filter(p => p.playCount > 0)
        .sort((a, b) => b.playCount - a.playCount);
        
    if (playedPlaylists.length === 0) {
        container.innerHTML = `
            <div style="padding: 1.5rem; background: var(--bg-panel); border-radius: 14px; text-align: center; border: 1px dashed rgba(255,255,255,0.15);">
                <span class="material-icons" style="font-size: 2rem; color: #ff5722; margin-bottom: 0.3rem;">local_fire_department</span>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0 0 0.8rem; font-style: italic;">No playlists played yet.</p>
                <button type="button" onclick="const plNav = document.querySelector('.nav-item[data-target=\\'playlists\\']'); if (plNav) plNav.click();" style="padding: 0.45rem 1.1rem; border-radius: 18px; border: 1px solid var(--neon-pink); background: rgba(255,105,180,0.1); color: var(--neon-pink); font-size: 0.8rem; font-weight: 700; cursor: pointer;">
                    Browse & Play Playlists
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    playedPlaylists.slice(0, 6).forEach((pl, index) => {
        const isPinned = (user.pinnedPlaylists || []).includes(pl.name);
        const card = document.createElement('div');
        card.className = 'playlist-card';
        card.style.cssText = 'display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.9rem 1.2rem; background: var(--bg-panel); border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 4px 15px rgba(0,0,0,0.25); cursor: pointer; transition: transform 0.2s;';
        const trackCount = (pl.tracks && pl.tracks.length > 0) ? pl.tracks.length : 8;
        
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem; min-width: 0; flex: 1;">
                <div style="position: relative; width: 56px; height: 56px; flex-shrink: 0;">
                    <img src="${pl.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop'}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';" style="width: 100%; height: 100%; border-radius: 10px; object-fit: cover;">
                    <span style="position: absolute; top: -5px; left: -5px; width: 22px; height: 22px; border-radius: 50%; background: #ff5722; color: #fff; font-size: 0.72rem; font-weight: 900; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">#${index + 1}</span>
                </div>
                <div style="min-width: 0; flex: 1;">
                    <h4 style="margin: 0 0 3px; font-size: 1rem; font-weight: 700; color: var(--text-main, #fff); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${pl.name}</h4>
                    <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
                        <span style="font-size: 0.78rem; color: var(--text-muted);">${trackCount} tracks</span>
                        <span style="font-size: 0.72rem; padding: 2px 8px; border-radius: 10px; background: rgba(255, 87, 34, 0.15); color: #ff5722; font-weight: 800; display: inline-flex; align-items: center; gap: 2px;">
                            🔥 Played ${pl.playCount} time${pl.playCount === 1 ? '' : 's'}
                        </span>
                    </div>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
                <button class="pin-playlist-btn" data-playlist="${pl.name}" style="background: transparent; border: none; cursor: pointer; color: ${isPinned ? 'var(--neon-pink)' : 'var(--text-muted)'}; padding: 6px;" title="Pin Playlist">
                    <span class="material-icons" style="font-size: 1.25rem;">push_pin</span>
                </button>
                <button class="share-playlist-btn" data-playlist="${pl.name}" style="background: transparent; border: none; cursor: pointer; color: var(--text-muted); padding: 6px;" title="Share with connections">
                    <span class="material-icons" style="font-size: 1.25rem;">send</span>
                </button>
                <button class="play-pl-btn" data-playlist="${pl.name}" style="background: transparent; border: none; cursor: pointer; color: var(--neon-pink); padding: 4px;" title="Play Now">
                    <span class="material-icons" style="font-size: 2rem;">play_circle_filled</span>
                </button>
            </div>
        `;
        card.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                if (typeof openPlaylistDetail === 'function') openPlaylistDetail(pl);
            }
        });
        container.appendChild(card);
    });
}

// ============================================
// PROFILE: CONNECTIONS LIST (REAL, NON-PREDEFINED)
// ============================================
function renderConnectionsList(user) {
    if (!user) user = getLoggedInUser();
    const container = document.getElementById('connectionsContainer');
    if (!container) return;
    
    if (!user.connections) user.connections = [];
    
    const connCountEl = document.getElementById('profileConnectionsCount');
    if (connCountEl) connCountEl.textContent = user.connections.length;
    
    const connections = user.connections || [];
    container.innerHTML = '';
    
    if (connections.length === 0) {
        container.innerHTML = '<p id="noConnectionsText" style="color: var(--text-muted, #888); font-style: italic; margin: 0; padding: 1rem 0;">No connected friends yet. Search above to send connection requests!</p>';
        return;
    }
    
    connections.forEach(friend => {
        const div = document.createElement('div');
        div.style.cssText = 'display: flex; align-items: center; justify-content: space-between; gap: 1rem; background: var(--bg-panel); color: var(--text-main, #fff); padding: 1rem 1.3rem; border-radius: 14px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 4px 15px rgba(0,0,0,0.3); min-width: 260px; flex: 1;';
        div.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.9rem;">
                <div style="position: relative;">
                    <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(friend)}" onerror="this.onerror=null; this.src='https://api.dicebear.com/9.x/avataaars/svg?seed=Friend';" style="width: 48px; height: 48px; border-radius: 50%; background: rgba(255,255,255,0.15); border: 2px solid var(--neon-pink, #ff69b4); object-fit: cover;" alt="${friend}">
                    <span style="position: absolute; bottom: 1px; right: 1px; width: 12px; height: 12px; border-radius: 50%; background: #4CAF50; border: 2px solid var(--bg-panel);"></span>
                </div>
                <div>
                    <h4 style="margin: 0 0 3px; font-size: 1rem; font-weight: 700; color: var(--text-main, #fff);">@${friend}</h4>
                    <span style="font-size: 0.75rem; color: #4CAF50; font-weight: 600; display: inline-flex; align-items: center; gap: 3px;">
                        <span style="font-size: 0.6rem;">●</span> Active now
                    </span>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
                <button class="btn-dedicate-to-friend" data-friend="${friend}" type="button" style="background: rgba(255,105,180,0.12); border: 1px solid var(--neon-pink, #ff69b4); color: var(--neon-pink, #ff69b4); border-radius: 8px; padding: 0.4rem 0.75rem; font-size: 0.75rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.25rem;" title="Dedicate song to ${friend}">
                    <span class="material-icons" style="font-size: 0.95rem;">volunteer_activism</span> Dedicate
                </button>
                <button class="remove-conn-btn" data-friend="${friend}" style="background: transparent; border: none; cursor: pointer; color: var(--text-muted, #888); padding: 4px; display: flex; align-items: center;" title="Remove Connection">
                    <span class="material-icons" style="font-size: 1.25rem;">person_remove</span>
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

// ============================================
// PROFILE: PENDING CONNECTION REQUESTS & APPROVAL
// ============================================
async function renderPendingRequests(user) {
    if (!user) user = getLoggedInUser();
    const section = document.getElementById('pendingRequestsSection');
    const container = document.getElementById('pendingRequestsContainer');
    const countEl = document.getElementById('pendingRequestsCount');
    const badgeEl = document.getElementById('tabConnectionsBadge');
    if (!section || !container) return;

    // Fetch latest requests from backend
    try {
        if (user.username) {
            const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/connection-requests`);
            if (res.ok) {
                const reqs = await res.json();
                user.connectionRequests = reqs;
                setLoggedInUser(user);
            }
        }
    } catch(e) {}

    const requests = user.connectionRequests || [];
    
    if (requests.length === 0) {
        section.style.display = 'none';
        if (badgeEl) badgeEl.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    if (countEl) countEl.textContent = requests.length;
    if (badgeEl) {
        badgeEl.textContent = requests.length;
        badgeEl.style.display = 'inline-block';
    }

    container.innerHTML = '';
    requests.forEach(req => {
        const fromUser = typeof req === 'string' ? req : req.fromUser;
        const bio = req.bio || 'Wants to connect with you';
        const avatar = req.avatarUrl || `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(fromUser)}`;

        const card = document.createElement('div');
        card.style.cssText = 'display: flex; align-items: center; justify-content: space-between; gap: 1rem; background: var(--bg-panel); padding: 0.9rem 1.1rem; border-radius: 12px; border: 1px solid rgba(255,105,180,0.3); box-shadow: 0 4px 15px rgba(0,0,0,0.2); flex-wrap: wrap;';
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.8rem; min-width: 0; flex: 1;">
                <img src="${avatar}" onerror="this.onerror=null; this.src='https://api.dicebear.com/9.x/avataaars/svg?seed=User';" style="width: 44px; height: 44px; border-radius: 50%; border: 2px solid var(--neon-pink, #ff69b4);">
                <div style="min-width: 0; flex: 1;">
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                        <h4 style="margin: 0; font-size: 0.95rem; font-weight: 700; color: var(--text-main, #fff);">@${fromUser}</h4>
                        <span style="font-size: 0.7rem; padding: 1px 6px; border-radius: 8px; background: rgba(255,105,180,0.18); color: var(--neon-pink, #ff69b4); font-weight: 700;">REQUEST</span>
                    </div>
                    <p style="margin: 2px 0 0; font-size: 0.78rem; color: var(--text-muted);">${bio}</p>
                </div>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
                <button class="btn-accept-request" data-requester="${fromUser}" type="button" style="padding: 0.45rem 0.9rem; border-radius: 8px; border: none; background: #4CAF50; color: #fff; font-weight: 800; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; box-shadow: 0 2px 8px rgba(76,175,80,0.3);">
                    <span class="material-icons" style="font-size: 0.95rem;">check</span> Accept
                </button>
                <button class="btn-reject-request" data-requester="${fromUser}" type="button" style="padding: 0.45rem 0.85rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: var(--text-muted); font-size: 0.8rem; cursor: pointer;">
                    Decline
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Send Connection Request
async function sendConnectionRequest(targetUsername) {
    const user = getLoggedInUser();
    if (!user || !user.username) return;
    
    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/connection-request`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetUser: targetUsername })
        });
        const data = await res.json();
        if (res.ok) {
            if (data.sentConnectionRequests) {
                user.sentConnectionRequests = data.sentConnectionRequests;
            } else {
                if (!user.sentConnectionRequests) user.sentConnectionRequests = [];
                if (!user.sentConnectionRequests.includes(targetUsername)) user.sentConnectionRequests.push(targetUsername);
            }
            setLoggedInUser(user);
            showSocialToast('Request Sent ✉️', `Waiting for @${targetUsername} to approve connection.`);
            
            const searchInput = document.getElementById('userSearchInput');
            if (searchInput && searchInput.value) searchUsers(searchInput.value);
            else {
                const resultsContainer = document.getElementById('userSearchResults');
                if (resultsContainer) renderSearchRecommendations(user, resultsContainer);
            }
        } else {
            showSocialToast('Cannot Connect', data.error || 'Failed to send connection request');
        }
    } catch(err) {
        console.error('Error sending connection request:', err);
    }
}

// Accept Connection Request
async function acceptConnectionRequest(requester) {
    const user = getLoggedInUser();
    if (!user || !user.username) return;

    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/connection-requests/${encodeURIComponent(requester)}/accept`, {
            method: 'POST'
        });
        const data = await res.json();
        if (res.ok) {
            user.connections = data.connections;
            user.connectionRequests = data.connectionRequests || (user.connectionRequests || []).filter(r => (r.fromUser || r).toLowerCase() !== requester.toLowerCase());
            setLoggedInUser(user);
            renderUserProfileUI(user);
            showSocialToast('Connection Approved! 🤝', `You and @${requester} are now connected.`);
        }
    } catch(err) {
        console.error('Error accepting connection request:', err);
    }
}

// Decline Connection Request
async function rejectConnectionRequest(requester) {
    const user = getLoggedInUser();
    if (!user || !user.username) return;

    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/connection-requests/${encodeURIComponent(requester)}/reject`, {
            method: 'POST'
        });
        if (res.ok) {
            user.connectionRequests = (user.connectionRequests || []).filter(r => (r.fromUser || r).toLowerCase() !== requester.toLowerCase());
            setLoggedInUser(user);
            renderPendingRequests(user);
            showSocialToast('Request Declined', `Declined connection from @${requester}`);
        }
    } catch(err) {
        console.error('Error rejecting connection request:', err);
    }
}

// Cancel Sent Request
async function cancelConnectionRequest(targetUsername) {
    const user = getLoggedInUser();
    if (!user || !user.username) return;

    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/connection-request/${encodeURIComponent(targetUsername)}`, {
            method: 'DELETE'
        });
        if (res.ok) {
            user.sentConnectionRequests = (user.sentConnectionRequests || []).filter(u => u.toLowerCase() !== targetUsername.toLowerCase());
            setLoggedInUser(user);
            showSocialToast('Request Cancelled', `Cancelled request to @${targetUsername}`);
            const searchInput = document.getElementById('userSearchInput');
            if (searchInput && searchInput.value) searchUsers(searchInput.value);
            else {
                const resultsContainer = document.getElementById('userSearchResults');
                if (resultsContainer) renderSearchRecommendations(user, resultsContainer);
            }
        }
    } catch(err) {
        console.error('Error cancelling connection request:', err);
    }
}

// Remove Connection
async function removeConnection(friendUsername) {
    const user = getLoggedInUser();
    if (!user || !user.username) return;
    
    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/connect/${encodeURIComponent(friendUsername)}`, {
            method: 'DELETE'
        });
        if (res.ok) {
            user.connections = (user.connections || []).filter(c => c.toLowerCase() !== friendUsername.toLowerCase());
            setLoggedInUser(user);
            renderUserProfileUI(user);
            showSocialToast('Connection Removed', `Disconnected from @${friendUsername}`);
            const searchInput = document.getElementById('userSearchInput');
            if (searchInput && searchInput.value) searchUsers(searchInput.value);
            else {
                const resultsContainer = document.getElementById('userSearchResults');
                if (resultsContainer) renderSearchRecommendations(user, resultsContainer);
            }
        }
    } catch (err) {
        console.error('Error removing connection:', err);
    }
}

// ============================================
// PROFILE: SEARCH BOTH ACCOUNTS & ARTISTS
// ============================================
const SUGGESTED_ACCOUNTS = [
    { username: 'Alex', bio: 'Synthesizer lover & indie curator 🎹', avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alex' },
    { username: 'Sammy', bio: 'Hyperpop and coffee enthusiast ⚡', avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sammy' },
    { username: 'Charlie', bio: 'Lofi producer from Tokyo 🌸', avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Charlie' },
    { username: 'CyberSamurai', bio: 'Neon dreams & night drives 🌃', avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=CyberSamurai' },
    { username: 'NeonRider', bio: 'Synthwave road trips 🏎️', avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=NeonRider' },
    { username: 'LofiGirl', bio: 'Chilling & studying 24/7 🎧', avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=LofiGirl' },
    { username: 'Sara_Vibes', bio: 'Curator of smooth acoustics ✨', avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sara_Vibes' },
    { username: 'TechnoKing', bio: 'Underground rave coordinator 🔊', avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=TechnoKing' }
];

const KNOWN_ARTISTS_CATALOG = [
    { name: 'The Weeknd', genre: 'R&B / Synthwave', art: 'https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=300&auto=format&fit=crop' },
    { name: 'Billie Eilish', genre: 'Alternative Pop', art: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop' },
    { name: 'Travis Scott', genre: 'Hip Hop / Trap', art: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop' },
    { name: 'NewJeans', genre: 'K-Pop / R&B', art: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop' },
    { name: 'Drake', genre: 'Hip Hop / Rap', art: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=300&auto=format&fit=crop' },
    { name: 'Taylor Swift', genre: 'Pop / Indie Folk', art: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop' },
    { name: 'Post Malone', genre: 'Hip Hop / Rock', art: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=300&auto=format&fit=crop' },
    { name: 'Dua Lipa', genre: 'Disco / Dance Pop', art: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=300&auto=format&fit=crop' },
    { name: 'Kendrick Lamar', genre: 'Conscious Hip Hop', art: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop' },
    { name: 'Ariana Grande', genre: 'Pop / R&B', art: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=300&auto=format&fit=crop' }
];

async function searchUsers(query) {
    const user = getLoggedInUser();
    const resultsContainer = document.getElementById('userSearchResults');
    if (!resultsContainer) return;
    
    const trimmed = (query || '').trim().toLowerCase();
    
    // If empty query, show helpful recommended accounts and artists
    if (!trimmed) {
        renderSearchRecommendations(user, resultsContainer);
        return;
    }
    
    resultsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem; padding: 0.5rem 0; margin: 0; display: flex; align-items: center; gap: 0.4rem;"><span class="material-icons" style="font-size: 1.1rem; animation: pulse 1s infinite;">search</span> Searching accounts & artists...</p>';
    
    let matchedAccounts = [];
    let matchedArtists = [];
    
    // 1. Fetch matching registered accounts from gateway + local catalog
    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/search?query=${encodeURIComponent(trimmed)}&currentUser=${encodeURIComponent(user.username || '')}`);
        if (res.ok) {
            matchedAccounts = await res.json();
        }
    } catch(e) {}
    
    // Supplement with local accounts catalog
    SUGGESTED_ACCOUNTS.forEach(acc => {
        if (acc.username.toLowerCase() !== (user.username || '').toLowerCase() &&
            (acc.username.toLowerCase().includes(trimmed) || acc.bio.toLowerCase().includes(trimmed))) {
            if (!matchedAccounts.some(m => m.username.toLowerCase() === acc.username.toLowerCase())) {
                matchedAccounts.push(acc);
            }
        }
    });
    
    // 2. Search Artists (from local catalog + iTunes)
    KNOWN_ARTISTS_CATALOG.forEach(art => {
        if (art.name.toLowerCase().includes(trimmed) || art.genre.toLowerCase().includes(trimmed)) {
            matchedArtists.push(art);
        }
    });
    
    // iTunes artist search
    try {
        const itunesRes = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(trimmed)}&entity=musicArtist&limit=4`);
        const itunesData = await itunesRes.json();
        if (itunesData.results && itunesData.results.length > 0) {
            itunesData.results.forEach(it => {
                if (!matchedArtists.some(a => a.name.toLowerCase() === it.artistName.toLowerCase())) {
                    matchedArtists.push({
                        name: it.artistName,
                        genre: it.primaryGenreName || 'Artist',
                        art: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop'
                    });
                }
            });
        }
    } catch(e) {}
    
    // Render results
    if (matchedAccounts.length === 0 && matchedArtists.length === 0) {
        resultsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; padding: 0.5rem 0; margin: 0;">No accounts or artists found matching "${query}".</p>`;
        return;
    }
    
    resultsContainer.innerHTML = '';
    
    // Render Accounts Section
    if (matchedAccounts.length > 0) {
        const accHeader = document.createElement('div');
        accHeader.innerHTML = `<h5 style="margin: 0.5rem 0 0.4rem; color: var(--neon-cyan, #00f0ff); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 0.35rem;"><span class="material-icons" style="font-size: 1rem;">person</span> Accounts (${matchedAccounts.length})</h5>`;
        resultsContainer.appendChild(accHeader);
        
        const sentReqs = user.sentConnectionRequests || [];
        
        matchedAccounts.forEach(match => {
            const isConnected = (user.connections || []).some(c => c.toLowerCase() === match.username.toLowerCase());
            const hasSentRequest = sentReqs.some(u => u.toLowerCase() === match.username.toLowerCase());

            const div = document.createElement('div');
            div.style.cssText = 'display: flex; align-items: center; justify-content: space-between; background: var(--bg-panel); color: var(--text-main, #fff); padding: 0.8rem 1rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 2px 8px rgba(0,0,0,0.2); margin-bottom: 0.5rem;';
            div.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <img src="${match.avatarUrl || 'https://api.dicebear.com/9.x/avataaars/svg?seed=' + encodeURIComponent(match.username)}" onerror="this.onerror=null; this.src='https://api.dicebear.com/9.x/avataaars/svg?seed=User';" style="width: 42px; height: 42px; border-radius: 50%; border: 2px solid var(--neon-cyan, #00f0ff);">
                    <div>
                        <h4 style="margin: 0; font-size: 0.95rem; color: var(--text-main, #fff); font-weight: 700;">@${match.username}</h4>
                        <p style="margin: 0; font-size: 0.78rem; color: var(--text-muted);">${match.bio || match.email || 'AudioTrack Member'}</p>
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    ${isConnected 
                        ? `<button class="remove-conn-btn" data-friend="${match.username}" style="padding: 0.35rem 0.8rem; border-radius: 6px; border: 1px solid #4CAF50; background: rgba(76,175,80,0.15); color: #4CAF50; font-weight: bold; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 0.2rem;"><span class="material-icons" style="font-size: 0.9rem;">check</span> Connected</button>`
                        : hasSentRequest
                        ? `<button class="cancel-req-btn" data-target="${match.username}" style="padding: 0.4rem 0.85rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.25); background: rgba(255,255,255,0.08); color: var(--text-muted); font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 0.9rem; color: #ffb703;">hourglass_top</span> Requested</button>`
                        : `<button class="btn-send-req" data-target="${match.username}" style="padding: 0.4rem 0.95rem; border-radius: 6px; border: none; background: var(--neon-pink, #ff69b4); color: #000; font-weight: 800; font-size: 0.82rem; cursor: pointer; transition: all 0.2s;">+ CONNECT</button>`
                    }
                </div>
            `;
            resultsContainer.appendChild(div);
        });
    }
    
    // Render Artists Section
    if (matchedArtists.length > 0) {
        const artHeader = document.createElement('div');
        artHeader.innerHTML = `<h5 style="margin: 1rem 0 0.4rem; color: var(--neon-pink, #ff69b4); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 0.35rem;"><span class="material-icons" style="font-size: 1rem;">mic</span> Artists (${matchedArtists.length})</h5>`;
        resultsContainer.appendChild(artHeader);
        
        const followed = getFollowedArtists(user);
        
        matchedArtists.forEach(art => {
            const isFollowing = followed.some(a => a.name.toLowerCase() === art.name.toLowerCase());
            const div = document.createElement('div');
            div.style.cssText = 'display: flex; align-items: center; justify-content: space-between; background: var(--bg-panel); color: var(--text-main, #fff); padding: 0.8rem 1rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 2px 8px rgba(0,0,0,0.2); margin-bottom: 0.5rem;';
            div.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <img src="${art.art}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';" style="width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 2px solid var(--neon-pink, #ff69b4);">
                    <div>
                        <h4 style="margin: 0; font-size: 0.95rem; color: var(--text-main, #fff); font-weight: 700;">${art.name}</h4>
                        <p style="margin: 0; font-size: 0.78rem; color: var(--text-muted);">${art.genre || 'Artist'}</p>
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    ${isFollowing
                        ? `<button class="btn-unfollow-artist" data-artist="${art.name}" style="padding: 0.35rem 0.8rem; border-radius: 6px; border: 1px solid var(--neon-pink, #ff69b4); background: rgba(255,105,180,0.15); color: var(--neon-pink, #ff69b4); font-weight: bold; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 0.2rem;"><span class="material-icons" style="font-size: 0.9rem;">check</span> Following</button>`
                        : `<button class="btn-follow-artist" data-artist="${art.name}" data-art="${encodeURIComponent(art.art)}" data-genre="${encodeURIComponent(art.genre || '')}" style="padding: 0.4rem 0.95rem; border-radius: 6px; border: none; background: var(--neon-cyan, #00f0ff); color: #000; font-weight: 800; font-size: 0.82rem; cursor: pointer; transition: all 0.2s;">+ FOLLOW</button>`
                    }
                </div>
            `;
            resultsContainer.appendChild(div);
        });
    }
}

function renderSearchRecommendations(user, container) {
    const sentReqs = user.sentConnectionRequests || [];
    container.innerHTML = `
        <div style="padding: 0.5rem 0;">
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0 0 0.6rem; text-transform: uppercase; letter-spacing: 0.5px;">Suggested Accounts to Connect:</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
                ${SUGGESTED_ACCOUNTS.filter(a => !(user.connections || []).includes(a.username)).slice(0, 4).map(a => {
                    const requested = sentReqs.includes(a.username);
                    return `
                        <button class="${requested ? 'cancel-req-btn' : 'btn-send-req'}" data-target="${a.username}" type="button" style="padding: 0.35rem 0.75rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.06); color: var(--text-main, #fff); font-size: 0.8rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;">
                            <span style="color: ${requested ? '#ffb703' : 'var(--neon-cyan, #00f0ff)'};">${requested ? '⏳' : '+'}</span> @${a.username}
                        </button>
                    `;
                }).join('')}
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0 0 0.6rem; text-transform: uppercase; letter-spacing: 0.5px;">Trending Artists to Follow:</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${KNOWN_ARTISTS_CATALOG.filter(a => !getFollowedArtists(user).some(f => f.name.toLowerCase() === a.name.toLowerCase())).slice(0, 4).map(a => `
                    <button class="btn-follow-artist" data-artist="${a.name}" data-art="${encodeURIComponent(a.art)}" data-genre="${encodeURIComponent(a.genre)}" type="button" style="padding: 0.35rem 0.75rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.06); color: var(--text-main, #fff); font-size: 0.8rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;">
                        <span style="color: var(--neon-pink, #ff69b4);">+</span> ${a.name}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// Global Click Delegation for Profile Actions & Room UI
document.addEventListener('click', (e) => {
    // Logout
    if (e.target.id === 'btnLogout' || e.target.closest('#btnLogout')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('authToken');
        showSocialToast('Logged Out', 'Redirecting to sign in...');
        setTimeout(() => { window.location.href = 'login.html'; }, 800);
        return;
    }
    
    // Search Users Button
    if (e.target.id === 'btnSearchUsers' || e.target.closest('#btnSearchUsers')) {
        const input = document.getElementById('userSearchInput');
        if (input) searchUsers(input.value);
        return;
    }
    
    // Send Connection Request
    const sendReqBtn = e.target.closest('.btn-send-req');
    if (sendReqBtn) {
        const target = sendReqBtn.getAttribute('data-target');
        if (target) sendConnectionRequest(target);
        return;
    }

    // Cancel Sent Connection Request
    const cancelReqBtn = e.target.closest('.cancel-req-btn');
    if (cancelReqBtn) {
        const target = cancelReqBtn.getAttribute('data-target');
        if (target) cancelConnectionRequest(target);
        return;
    }

    // Accept Connection Request
    const acceptBtn = e.target.closest('.btn-accept-request');
    if (acceptBtn) {
        const requester = acceptBtn.getAttribute('data-requester');
        if (requester) acceptConnectionRequest(requester);
        return;
    }

    // Reject Connection Request
    const rejectBtn = e.target.closest('.btn-reject-request');
    if (rejectBtn) {
        const requester = rejectBtn.getAttribute('data-requester');
        if (requester) rejectConnectionRequest(requester);
        return;
    }

    // Add Connection (safe routing to sendConnectionRequest)
    const addBtn = e.target.closest('.add-conn-btn');
    if (addBtn) {
        const friend = addBtn.getAttribute('data-friend');
        if (friend) sendConnectionRequest(friend);
        return;
    }
    
    // Remove Connection
    const removeBtn = e.target.closest('.remove-conn-btn');
    if (removeBtn) {
        const friend = removeBtn.getAttribute('data-friend');
        if (friend) removeConnection(friend);
        return;
    }
    
    // Pin Playlist Button
    const pinBtn = e.target.closest('.pin-playlist-btn');
    if (pinBtn) {
        const playlistName = pinBtn.getAttribute('data-playlist');
        if (playlistName) togglePinPlaylist(playlistName);
        return;
    }

    // Tab switching
    const tabBtn = e.target.closest('.profile-tab-btn');
    if (tabBtn) {
        document.querySelectorAll('.profile-tab-btn').forEach(t => {
            t.classList.remove('active');
            t.style.borderTop = 'none';
            t.style.color = 'var(--text-muted)';
        });
        document.querySelectorAll('.profile-tab-content').forEach(c => {
            c.style.display = 'none';
            c.classList.remove('active');
        });
        
        tabBtn.classList.add('active');
        tabBtn.style.borderTop = '2px solid var(--text-main, #fff)';
        tabBtn.style.color = 'var(--text-main, #fff)';
        const targetId = tabBtn.id.replace('tab-btn-', 'profile-tab-');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.style.display = 'flex';
            targetContent.classList.add('active');
        }
        
        // If switching to Playlists tab, ensure pinned & top played playlists are rendered
        if (tabBtn.id === 'tab-btn-playlists') {
            renderPinnedPlaylists();
            renderTopPlayedPlaylists();
        }

        // If switching to Artists tab, ensure followed artists are rendered
        if (tabBtn.id === 'tab-btn-artists') {
            renderFollowedArtists();
        }

        // If switching to Connections tab, ensure connections, requests and suggestions are rendered
        if (tabBtn.id === 'tab-btn-connections') {
            renderConnectionsList();
            renderPendingRequests();
            const resultsContainer = document.getElementById('userSearchResults');
            const searchInput = document.getElementById('userSearchInput');
            if (resultsContainer && (!searchInput || !searchInput.value)) {
                renderSearchRecommendations(getLoggedInUser(), resultsContainer);
            }
        }

        // If switching to Listen Together tab, ensure playlists are loaded in dropdown
        if (tabBtn.id === 'tab-btn-listen' && typeof populateRoomPlaylists === 'function') {
            populateRoomPlaylists();
        }

        // Refresh profile UI when switching tabs
        syncUserProfile();
    }

    // Change Bio Song Modal Controls
    if (e.target.id === 'btnChangeBioSong' || e.target.closest('#btnChangeBioSong')) {
        const modal = document.getElementById('changeBioSongModal');
        if (modal) {
            modal.style.display = 'flex';
            const input = document.getElementById('inputBioSongSearch');
            if (input) {
                input.value = '';
                input.focus();
            }
            const results = document.getElementById('bioSongSearchResults');
            if (results) results.innerHTML = '';
        }
        return;
    }

    if (e.target.id === 'btnCloseBioSongModal' || e.target.closest('#btnCloseBioSongModal') || e.target.id === 'btnCancelBioSongModal') {
        const modal = document.getElementById('changeBioSongModal');
        if (modal) modal.style.display = 'none';
        return;
    }

    if (e.target.id === 'btnSearchBioSong' || e.target.closest('#btnSearchBioSong')) {
        const input = document.getElementById('inputBioSongSearch');
        if (input) searchBioSong(input.value);
        return;
    }

    const quickPickBtn = e.target.closest('.bio-quick-pick');
    if (quickPickBtn) {
        const title = quickPickBtn.getAttribute('data-title');
        const artist = quickPickBtn.getAttribute('data-artist');
        const input = document.getElementById('inputBioSongSearch');
        if (input) input.value = `${title} ${artist}`;
        searchBioSong(`${title} ${artist}`);
        return;
    }

    const selectBioBtn = e.target.closest('.btn-select-bio-song');
    if (selectBioBtn) {
        const title = decodeURIComponent(selectBioBtn.getAttribute('data-title') || '');
        const artist = decodeURIComponent(selectBioBtn.getAttribute('data-artist') || '');
        const url = decodeURIComponent(selectBioBtn.getAttribute('data-url') || '');
        const artUrl = decodeURIComponent(selectBioBtn.getAttribute('data-art') || '');
        setBioSong({ title, artist, url, artUrl });
        return;
    }

    // Follow Artist Button
    const followArtistBtn = e.target.closest('.btn-follow-artist');
    if (followArtistBtn) {
        const artistName = followArtistBtn.getAttribute('data-artist');
        const art = decodeURIComponent(followArtistBtn.getAttribute('data-art') || '');
        const genre = decodeURIComponent(followArtistBtn.getAttribute('data-genre') || '');
        if (artistName) followArtist(artistName, art, genre);
        return;
    }

    // Unfollow Artist Button
    const unfollowArtistBtn = e.target.closest('.btn-unfollow-artist');
    if (unfollowArtistBtn) {
        const artistName = unfollowArtistBtn.getAttribute('data-artist');
        if (artistName) unfollowArtist(artistName);
        return;
    }

    // Play Artist Tracks
    const playArtistBtn = e.target.closest('.btn-play-artist');
    if (playArtistBtn) {
        const artistName = playArtistBtn.getAttribute('data-artist');
        if (artistName) {
            fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(artistName)}&media=music&limit=10`)
                .then(r => r.json())
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        const first = data.results[0];
                        if (typeof window.playTrack === 'function') {
                            window.playTrack(
                                first.previewUrl,
                                first.trackName,
                                first.artistName,
                                first.artworkUrl100 ? first.artworkUrl100.replace('100x100bb', '600x600bb') : ''
                            );
                            showSocialToast(`Playing ${artistName} 🎧`, first.trackName);
                        }
                    }
                })
                .catch(() => {});
        }
        return;
    }

    // Dedicate Song to Specific Connection
    const dedicateToFriendBtn = e.target.closest('.btn-dedicate-to-friend');
    if (dedicateToFriendBtn) {
        const friend = dedicateToFriendBtn.getAttribute('data-friend');
        const modal = document.getElementById('dedicateModal');
        if (modal) {
            modal.style.display = 'flex';
            if (typeof initDedicateModal === 'function') initDedicateModal();
            // Preselect friend in Step 2 if available
            setTimeout(() => {
                const friendSelect = document.getElementById('dedicateFriendSelect');
                if (friendSelect && friend) {
                    friendSelect.value = friend;
                }
            }, 100);
        }
        return;
    }

    // Create Room
    if (e.target.id === 'btnCreateRoom') {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        if (typeof window.joinRoom === 'function') {
            window.joinRoom(code);
        }
    }

    // Join Room
    if (e.target.id === 'btnJoinRoom') {
        const input = document.getElementById('inputRoomCode');
        const code = input ? input.value.trim().toUpperCase() : '';
        if (code.length >= 4) {
            if (typeof window.joinRoom === 'function') {
                window.joinRoom(code);
            }
        } else {
            alert('Please enter a valid room code (at least 4 characters)');
        }
    }

    // Leave Room
    if (e.target.id === 'btnLeaveRoom') {
        if (typeof window.leaveRoom === 'function') {
            window.leaveRoom(true);
        }
    }

    // Copy Room Invite Link (Global Handler)
    if (e.target.id === 'copyRoomInviteLinkBtn' || e.target.closest('#copyRoomInviteLinkBtn')) {
        const code = document.getElementById('activeRoomCode')?.textContent?.trim();
        if (code && code !== '------') {
            const inviteUrl = `${window.location.origin}/?room=${encodeURIComponent(code)}`;
            navigator.clipboard.writeText(inviteUrl).then(() => {
                showSocialToast('Invite Link Copied! 🔗', 'Send this link to your friend — they join automatically!');
            }).catch(() => {
                prompt('Copy this invite link for your friend:', inviteUrl);
            });
        }
        return;
    }

    // Copy Room Code (Global Handler)
    if (e.target.id === 'copyRoomCodeBtn' || e.target.closest('#copyRoomCodeBtn')) {
        const code = document.getElementById('activeRoomCode')?.textContent?.trim();
        if (code && code !== '------') {
            navigator.clipboard.writeText(code).then(() => {
                showSocialToast('Room Code Copied! 📋', `Share code ${code} with your friend`);
            }).catch(() => {
                prompt('Copy this room code:', code);
            });
        }
        return;
    }

    // Play Room Selected Playlist
    if (e.target.id === 'btnPlayRoomPlaylist') {
        const select = document.getElementById('roomPlaylistSelect');
        const playlistName = select ? select.value : '';
        if (!playlistName) {
            alert('Please choose a playlist from the dropdown first!');
            return;
        }
        if (typeof playPlaylist === 'function') {
            playPlaylist(playlistName);
            showSocialToast('Streaming in Room 🎶', `${playlistName} is now broadcasting.`);
        }
    }

    // Browse All Playlists from Room
    if (e.target.id === 'btnBrowsePlaylistsFromRoom') {
        const playlistsTab = document.querySelector('.nav-item[data-target="playlists"]');
        if (playlistsTab) {
            playlistsTab.click();
            showSocialToast('Room Active 🔴', 'Click any playlist or song to stream live to your room.');
        }
    }

    // Search Song in Room Button
    if (e.target.id === 'btnSearchRoomSong') {
        const input = document.getElementById('inputRoomSongSearch');
        if (input && typeof searchSongsForRoom === 'function') {
            searchSongsForRoom(input.value);
        }
    }

    // Floating Live Room Bar Actions
    if (e.target.id === 'floatingBtnOpenRoom') {
        const profileTab = document.querySelector('.nav-item[data-target="profile"]');
        if (profileTab) profileTab.click();
        const listenTabBtn = document.getElementById('tab-btn-listen');
        if (listenTabBtn) listenTabBtn.click();
    }
    if (e.target.id === 'floatingBtnLeaveRoom') {
        if (typeof window.leaveRoom === 'function') {
            window.leaveRoom(true);
        }
    }

    // Share Playlist
    const shareBtn = e.target.closest('.share-playlist-btn');
    if (shareBtn) {
        const playlistName = shareBtn.getAttribute('data-playlist');
        publishRoomEvent(currentRoomCode || window.currentRoom, { type: 'SHARE_PLAYLIST', playlist: playlistName });
        showSocialToast('Playlist Shared!', `${playlistName} sent to connections.`);
    }
});

// Search input enter key support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.id === 'userSearchInput') {
        searchUsers(e.target.value);
    }
    if (e.key === 'Enter' && e.target.id === 'inputBioSongSearch') {
        searchBioSong(e.target.value);
    }
    if (e.key === 'Enter' && e.target.id === 'inputRoomSongSearch') {
        if (typeof searchSongsForRoom === 'function') {
            searchSongsForRoom(e.target.value);
        }
    }
});

function showSocialToast(title, msg) {
    const lyricToast = document.getElementById('lyricToast');
    if (!lyricToast) return;
    const toastSong = document.getElementById('toastSong');
    const toastLyric = document.getElementById('toastLyric');
    if (toastSong) toastSong.textContent = title;
    if (toastLyric) toastLyric.textContent = msg;
    lyricToast.classList.add('show');
    setTimeout(() => lyricToast.classList.remove('show'), 3000);
}

// Global listener for social channel
window.socialChannel.onmessage = (event) => {
    const data = event.data;
    if (!data) return;
    if (data.clientId && data.clientId === window.mySyncClientId) return;

    if (typeof handleRoomMessage === 'function') {
        handleRoomMessage({ data });
    }
    
    if (data.type === 'SHARE_PLAYLIST') {
        const container = document.getElementById('shared-playlists-container');
        if (container) {
            if (container.querySelector('p')) container.innerHTML = '';
            
            const div = document.createElement('div');
            div.style.cssText = 'display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(0,0,0,0.03); border-radius: 12px;';
            div.innerHTML = `
                <div style="width: 50px; height: 50px; border-radius: 8px; background: var(--neon-pink, #ff69b4); display: flex; justify-content: center; align-items: center;">
                    <span class="material-icons" style="color: #fff;">queue_music</span>
                </div>
                <div style="flex: 1;">
                    <h4 style="margin: 0; font-size: 1rem; color: var(--text-primary, #333);">${data.playlist}</h4>
                    <p style="margin: 0; font-size: 0.8rem; color: var(--text-muted, #888);">Shared by a connection</p>
                </div>
                <button style="background: transparent; border: none; cursor: pointer; color: var(--neon-pink, #ff69b4); font-weight: bold;">VIEW</button>
            `;
            container.appendChild(div);
            
            const connTab = document.getElementById('tab-btn-connections');
            if (connTab && !connTab.classList.contains('active')) {
                connTab.style.position = 'relative';
                if (!connTab.querySelector('.notification-badge')) {
                    const badge = document.createElement('div');
                    badge.className = 'notification-badge';
                    badge.style.cssText = 'position: absolute; top: 10px; right: -5px; width: 10px; height: 10px; border-radius: 50%; background: red;';
                    connTab.appendChild(badge);
                }
            }
            showSocialToast('New Shared Playlist', `Received ${data.playlist}`);
        }
    }
};

// Sync profile state on page load
setTimeout(syncUserProfile, 1000);

// --- MICROSERVICES INTEGRATION ---
async function fetchTracksFromBackend() {
    try {
        console.log('Fetching tracks from API Gateway...');
        const response = await apiFetch(`${GATEWAY_URL}/tracks`);
        const tracks = await response.json();
        console.log('Successfully fetched tracks from backend:', tracks);
        if (tracks.length > 0) {
            populateMasonry('discover-gallery', tracks);
            
            // Only populate masonry-gallery on home view if empty
            const masonryGallery = document.getElementById('masonry-gallery');
            if (masonryGallery && (!masonryGallery.children.length || masonryGallery.querySelector('.glitch-text'))) {
                populateMasonry('masonry-gallery', tracks);
            }
        }
    } catch (error) {
        console.error('Failed to fetch from backend. Ensure Gateway and Spring Boot are running.', error);
    }
}

// Automatically fetch on load
setTimeout(fetchTracksFromBackend, 2000);

// --- PLAYLIST MICROSERVICE INTEGRATION ---
const ALL_PLATFORM_PLAYLISTS = [
    {
        id: 'pl1',
        name: 'Cyberpunk 2077 Vibe',
        description: 'Neon-drenched beats for late night coding and dystopian dreams',
        artUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    },
    {
        id: 'pl2',
        name: 'Synthwave Dreams',
        description: 'Nostalgic 80s synths with modern punch',
        artUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    },
    {
        id: 'pl3',
        name: 'Lo-Fi Chill Beats',
        description: 'Smooth coffee shop beats to relax and study to',
        artUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    },
    {
        id: 'pl4',
        name: 'Hyperpop Chaos',
        description: 'Glitchy, distorted, energetic and wildly unpredictable',
        artUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    },
    {
        id: 'pl5',
        name: 'Late Night Cyberpunk',
        description: 'Deep basslines echoing through neon alleys',
        artUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    },
    {
        id: 'pl6',
        name: 'Acid Techno Rave',
        description: 'Relentless 303 acid lines and pounding kicks',
        artUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    },
    {
        id: 'pl_top_global',
        name: 'Top Songs Global',
        description: 'The biggest tracks across the globe right now',
        artUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&auto=format&fit=crop',
        category: 'Charts'
    },
    {
        id: 'pl_popular_songs',
        name: 'Popular Songs',
        description: 'Most viral and streamed hits right now',
        artUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop',
        category: 'Charts'
    },
    {
        id: 'pl_viral_hits',
        name: 'Viral Hits',
        description: 'Trending tracks lighting up social feeds',
        artUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop',
        category: 'Charts'
    },
    {
        id: 'pl_recent_plays',
        name: 'Recent Plays',
        description: 'Your listening history and recently played tracks',
        artUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_top_picks',
        name: 'Top Picks for You',
        description: 'A personalized playlist updated daily',
        artUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_global_50',
        name: 'Global Top 50',
        description: 'Top 50 global chart-toppers streaming everywhere',
        artUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=400&auto=format&fit=crop',
        category: 'Charts'
    },
    {
        id: 'pl_us_50',
        name: 'US Top 50',
        description: 'Billboard and streaming leaders in the US',
        artUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop',
        category: 'Charts'
    },
    {
        id: 'pl_morning_chill',
        name: 'Morning Chill',
        description: 'Gentle sunrise melodies to start your day peaceful',
        artUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_workout_beats',
        name: 'Workout Beats',
        description: 'High-tempo energy for workouts, running and gym sessions',
        artUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_study_focus',
        name: 'Study Focus',
        description: 'Binaural & calm instrumental study flow',
        artUrl: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_late_night_rave',
        name: 'Late Night Rave',
        description: 'Underground club tracks for late night dancing',
        artUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_indie_rising',
        name: 'Indie Rising',
        description: 'New and upcoming indie innovators and bedroom pop',
        artUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_future_bass',
        name: 'Future Bass',
        description: 'Heavy sub-bass & euphoric synth chords',
        artUrl: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_alt_rnb',
        name: 'Alt R&B',
        description: 'Smooth moody R&B and late-night grooves',
        artUrl: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_chill_mix',
        name: 'Chill Mix',
        description: 'Relaxing ambient acoustics and chillhop',
        artUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_focus_vibes',
        name: 'Focus Vibes',
        description: 'Deep work instrumentals and ambient soundscapes',
        artUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_on_repeat',
        name: 'On Repeat',
        description: 'Heavy rotation favorites and crowd pleasers',
        artUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=400&auto=format&fit=crop',
        category: 'Curated'
    },
    {
        id: 'pl_liked_songs',
        name: 'Liked Songs',
        description: 'All your favorite and liked tracks',
        artUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop',
        category: 'Personal'
    },
    {
        id: 'pl_after_hours',
        name: 'After Hours',
        description: 'Late-night cinematic and synth experiences',
        artUrl: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    },
    {
        id: 'pl_happier_than_ever',
        name: 'Happier Than Ever',
        description: 'Alt-pop emotional journeys',
        artUrl: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    },
    {
        id: 'pl_midnights',
        name: 'Midnights',
        description: 'Midnight pop reveries',
        artUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    },
    {
        id: 'pl_un_verano',
        name: 'Un Verano Sin Ti',
        description: 'Sun-soaked Latin reggaeton vibes',
        artUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
        category: 'Spotlight'
    }
];

function getAllPlaylistsCatalog() {
    const existing = window.allPlaylists || [];
    const map = new Map();
    // 1. Add platform-wide playlists
    ALL_PLATFORM_PLAYLISTS.forEach(p => map.set(p.name.toLowerCase(), { ...p, tracks: p.tracks || [] }));
    // 2. Add fetched / user playlists
    existing.forEach(p => {
        if (p && p.name) {
            const key = p.name.toLowerCase();
            const cur = map.get(key) || {};
            map.set(key, { ...cur, ...p, tracks: (p.tracks && p.tracks.length > 0) ? p.tracks : (cur.tracks || []) });
        }
    });
    return Array.from(map.values());
}

window.allPlaylists = getAllPlaylistsCatalog();

async function fetchPlaylists() {
    try {
        console.log('Fetching playlists from API Gateway...');
        const response = await apiFetch(`${GATEWAY_URL}/playlists`);
        if (response.ok) {
            const fetched = await response.json();
            const map = new Map();
            ALL_PLATFORM_PLAYLISTS.forEach(p => map.set(p.name.toLowerCase(), { ...p, tracks: p.tracks || [] }));
            (fetched || []).forEach(p => {
                if (p && p.name) {
                    const key = p.name.toLowerCase();
                    const cur = map.get(key) || {};
                    map.set(key, { ...cur, ...p, tracks: (p.tracks && p.tracks.length > 0) ? p.tracks : (cur.tracks || []) });
                }
            });
            window.allPlaylists = Array.from(map.values());
            console.log('Successfully loaded all platform playlists:', window.allPlaylists.length);
            renderPlaylists();
            renderPinnedPlaylists(); // Refresh pinned playlist displays
            if (typeof renderMyPlaylists === 'function') renderMyPlaylists(); // Refresh library displays
        }
    } catch (error) {
        console.error('Failed to fetch playlists from backend.', error);
        window.allPlaylists = getAllPlaylistsCatalog();
        renderPlaylists();
    }
}

function renderPlaylists() {
    const userPlaylistsGrid = document.getElementById('user-playlists');
    const savedPlaylistsGrid = document.getElementById('saved-playlists-row');
    const profilePlaylistsGrid = document.getElementById('allPlaylistsContainer');

    const everyPlaylist = getAllPlaylistsCatalog();
    window.allPlaylists = everyPlaylist;

    if (userPlaylistsGrid) userPlaylistsGrid.innerHTML = '';
    if (savedPlaylistsGrid) savedPlaylistsGrid.innerHTML = '';
    if (profilePlaylistsGrid) profilePlaylistsGrid.innerHTML = '';

    everyPlaylist.forEach(pl => {
        // Playlists Page card
        const card = document.createElement('div');
        card.className = 'curated-card playlist-card';
        card.setAttribute('data-playlist', pl.name);
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <img src="${pl.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop'}" alt="${pl.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';">
            <h3>${pl.name}</h3>
        `;
        card.addEventListener('click', () => {
            openPlaylistDetail(pl);
        });

        // 1. Every Playlist grid renders ALL playlists across the platform
        if (userPlaylistsGrid) {
            const clone = card.cloneNode(true);
            clone.addEventListener('click', () => openPlaylistDetail(pl));
            userPlaylistsGrid.appendChild(clone);
        }

        // 2. Featured Collections row renders curated Spotlight and Mood collections
        if (savedPlaylistsGrid && (pl.category === 'Spotlight' || pl.category === 'Charts')) {
            const clone = card.cloneNode(true);
            clone.addEventListener('click', () => openPlaylistDetail(pl));
            savedPlaylistsGrid.appendChild(clone);
        }

        // 3. Profile tab list item
        if (profilePlaylistsGrid) {
            const isPinned = (getLoggedInUser().pinnedPlaylists || []).includes(pl.name);
            const profileCard = document.createElement('div');
            profileCard.className = 'playlist-card';
            profileCard.style.cssText = 'display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-panel); border-radius: 12px; transition: background 0.2s; cursor: pointer;';
            const trackCount = (pl.tracks && pl.tracks.length > 0) ? pl.tracks.length : 8;
            profileCard.innerHTML = `
                <img src="${pl.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop'}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                <div style="flex: 1;">
                    <h3 style="margin: 0 0 4px; font-size: 1rem; color: var(--text-main);">${pl.name}</h3>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">${trackCount} tracks</p>
                </div>
                <button class="pin-playlist-btn" data-playlist="${pl.name}" style="background: transparent; border: none; cursor: pointer; color: ${isPinned ? 'var(--neon-pink)' : 'var(--text-muted)'};" title="Pin Playlist">
                    <span class="material-icons">push_pin</span>
                </button>
                <button class="share-playlist-btn" data-playlist="${pl.name}" style="background: transparent; border: none; cursor: pointer; color: var(--text-muted);" title="Share with connections">
                    <span class="material-icons">send</span>
                </button>
                <button class="play-pl-btn" style="background: transparent; border: none; cursor: pointer;">
                    <span class="material-icons" style="color: var(--text-main); font-size: 2rem;">play_circle_filled</span>
                </button>
            `;

            profileCard.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    const playlistsTab = document.querySelector('.nav-item[data-target="playlists"]');
                    if (playlistsTab) playlistsTab.click();
                    openPlaylistDetail(pl);
                }
            });

            profileCard.querySelector('.pin-playlist-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                togglePinPlaylist(pl.name);
            });

            profileCard.querySelector('.share-playlist-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                const shareModal = document.getElementById('sharePlaylistModal');
                if (shareModal) {
                    sharingPlaylistId = pl.id;
                    const nameEl = document.getElementById('sharingPlaylistName');
                    if (nameEl) nameEl.textContent = pl.name;
                    updateShareFriendSelect();
                    shareModal.style.display = 'flex';
                    currentSharePlaylistData = pl;
                } else {
                    if (window.socialChannel) window.socialChannel.postMessage({ type: 'SHARE_PLAYLIST', playlist: pl.name });
                    if (typeof showSocialToast === 'function') showSocialToast('Playlist Shared! 📤', `${pl.name} sent to connections.`);
                }
            });

            profileCard.querySelector('.play-pl-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                playPlaylist(pl);
            });

            profilePlaylistsGrid.appendChild(profileCard);
        }
    });
}

function playPlaylist(pl) {
    if (typeof pl === 'string') {
        const found = (window.allPlaylists || (typeof ALL_PLATFORM_PLAYLISTS !== 'undefined' ? ALL_PLATFORM_PLAYLISTS : [])).find(p => p.name.toLowerCase() === pl.toLowerCase() || p.id === pl);
        if (found) pl = found;
        else pl = { name: pl, tracks: [] };
    }
    if (typeof recordPlaylistPlay === 'function' && pl && pl.name) {
        recordPlaylistPlay(pl.name);
    }
    if (!pl.tracks || pl.tracks.length === 0) {
        if (typeof getCuratedTracksForPlaylist === 'function') {
            pl.tracks = getCuratedTracksForPlaylist(pl.name);
        }
    }
    if (!pl.tracks || pl.tracks.length === 0) return;
    window.currentTracklist = pl.tracks;
    window.currentTrackIndex = 0;
    const firstTrack = pl.tracks[0];
    playTrack(firstTrack.url, firstTrack.title, firstTrack.artist, firstTrack.artUrl);
    
    // Clear user queue (if applicable) and add rest of tracks
    const userQueueList = document.getElementById('userQueueList');
    if (userQueueList) {
        userQueueList.innerHTML = '';
    }
    
    // Clean queue storage
    localStorage.removeItem('audioTrackQueue');
    
    for (let i = 1; i < pl.tracks.length; i++) {
        const track = pl.tracks[i];
        if (typeof addToUserQueue === 'function') {
            addToUserQueue(track.title, track.artist, track.artUrl, track.url || track.previewUrl || '');
        }
    }
    showSocialToast(`Playing Playlist 🎶`, `${pl.name}`);
}

function getCuratedTracksForPlaylist(name) {
    const defaultTracks = [
        {
            title: 'Midnight City',
            artist: 'M83',
            url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/74/a2/d3/74a2d361-c6bb-9880-a8d1-d999833d2891/mzaf_15783493292556356203.plus.aac.p.m4a',
            artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/73/c6/ed/73c6edb3-924c-27f0-28f8-1470906d6780/cover.jpg/600x600bb.jpg'
        },
        {
            title: 'Blinding Lights',
            artist: 'The Weeknd',
            url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/73/ca/1273ca46-233a-5331-189b-25ac1d656533/mzaf_976341070785891411.plus.aac.p.m4a',
            artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg'
        },
        {
            title: 'Starboy',
            artist: 'The Weeknd ft. Daft Punk',
            url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a',
            artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg'
        },
        {
            title: 'Bad Guy',
            artist: 'Billie Eilish',
            url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c3/87/1f/c3871f7e-3260-d615-1c66-5fdca2c3a48f/mzaf_10721331211699880949.plus.aac.p.m4a',
            artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/600x600bb.jpg'
        },
        {
            title: 'Until I Found You',
            artist: 'Stephen Sanchez',
            url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/53/82/c1/5382c1d4-ddba-aa2b-90df-57268895fac9/mzaf_8926201202931541051.plus.aac.p.m4a',
            artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/64/d2/c5/64d2c511-67f4-ae09-5153-d39c3da413a3/21UMGIM75467.rgb.jpg/600x600bb.jpg'
        },
        {
            title: "God's Plan",
            artist: 'Drake',
            url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c6/4a/be/c64abe74-adb4-cff5-005d-0fab3d72a806/mzaf_10276154697254415719.plus.aac.p.m4a',
            artUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6d/8f/bb6d8f67-6d04-10b5-dd62-eb5809ac54fc/00602567879152.rgb.jpg/600x600bb.jpg'
        },
        {
            title: 'Sunflower',
            artist: 'Post Malone & Swae Lee',
            url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/98/f0/d6/98f0d67e-f8bf-762d-cac7-1c6b3b6b35dd/mzaf_4543283896248560946.plus.aac.p.m4a',
            artUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop'
        },
        {
            title: 'As It Was',
            artist: 'Harry Styles',
            url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/67/10/16/67101606-3869-ca44-6c03-e13d6322cb51/mzaf_1135399237022217274.plus.aac.p.m4a',
            artUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop'
        }
    ];
    return defaultTracks;
}

function openAddToPlaylistModal(track) {
    const modal = document.getElementById('addToPlaylistModal');
    if (!modal) return;
    
    modal._targetTrack = track;
    const titleEl = document.getElementById('addToPlaylistTrackTitle');
    const artistEl = document.getElementById('addToPlaylistTrackArtist');
    const artEl = document.getElementById('addToPlaylistTrackArt');
    if (titleEl) titleEl.textContent = track.title;
    if (artistEl) artistEl.textContent = track.artist;
    if (artEl) artEl.src = track.artUrl;

    const listEl = document.getElementById('addToPlaylistOptionsList');
    if (listEl) {
        listEl.innerHTML = '';
        const playlists = window.allPlaylists || [];
        if (playlists.length === 0) {
            listEl.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem; padding: 0.5rem 0;">No playlists yet. Create one below!</p>';
        } else {
            playlists.forEach(pl => {
                const item = document.createElement('div');
                item.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0.8rem; background: rgba(255,255,255,0.06); border-radius: 8px; cursor: pointer; transition: background 0.2s;';
                item.onmouseenter = () => item.style.background = 'rgba(255,255,255,0.14)';
                item.onmouseleave = () => item.style.background = 'rgba(255,255,255,0.06)';
                
                const alreadyIn = (pl.tracks || []).some(t => t.title && t.title.toLowerCase() === track.title.toLowerCase());
                
                item.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 0.8rem; min-width: 0;">
                        <img src="${pl.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop'}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop';" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;">
                        <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-main, #fff); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${pl.name}</span>
                    </div>
                    <span class="material-icons" style="color: ${alreadyIn ? 'var(--neon-green)' : 'var(--neon-cyan)'}; font-size: 1.2rem;">${alreadyIn ? 'check_circle' : 'add_circle_outline'}</span>
                `;
                
                item.onclick = () => {
                    if (!pl.tracks) pl.tracks = [];
                    if (!alreadyIn) {
                        pl.tracks.push(track);
                        showSocialToast('Added to Playlist 📂', `"${track.title}" added to ${pl.name}`);
                    } else {
                        showSocialToast('Already in Playlist', `"${track.title}" is in ${pl.name}`);
                    }
                    modal.classList.remove('active');
                    if (typeof renderPlaylists === 'function') renderPlaylists();
                };
                listEl.appendChild(item);
            });
        }
    }

    const closeBtn = document.getElementById('closeAddToPlaylistBtn');
    if (closeBtn) {
        closeBtn.onclick = () => modal.classList.remove('active');
    }

    const createBtn = document.getElementById('btnCreateAndAddPlaylist');
    const inputName = document.getElementById('createNewPlaylistNameInput');
    if (createBtn && inputName) {
        createBtn.onclick = () => {
            const name = inputName.value.trim();
            if (!name) return;
            let pl = (window.allPlaylists || []).find(p => p.name.toLowerCase() === name.toLowerCase());
            if (!pl) {
                pl = {
                    id: 'pl_' + Date.now(),
                    name: name,
                    description: `Custom playlist: ${name}`,
                    artUrl: track.artUrl,
                    tracks: [track]
                };
                if (!window.allPlaylists) window.allPlaylists = [];
                window.allPlaylists.push(pl);
            } else {
                if (!pl.tracks) pl.tracks = [];
                if (!pl.tracks.some(t => t.title && t.title.toLowerCase() === track.title.toLowerCase())) {
                    pl.tracks.push(track);
                }
            }
            inputName.value = '';
            modal.classList.remove('active');
            showSocialToast('Playlist Created & Added 🎶', `"${track.title}" added to ${name}`);
            if (typeof renderPlaylists === 'function') renderPlaylists();
        };
    }

    modal.classList.add('active');
}
window.openAddToPlaylistModal = openAddToPlaylistModal;

// Render rows for a playlist detail view without disturbing scroll
function renderPlaylistTrackRows(pl, tracksListContainer) {
    if (!tracksListContainer || !pl || !pl.tracks) return;
    tracksListContainer.innerHTML = '';
    const user = getLoggedInUser();
    const likedList = user.likedSongs || [];

    pl.tracks.forEach((track, index) => {
        const row = document.createElement('div');
        row.className = 'playlist-track-row';
        row.style.cssText = 'display: flex; align-items: center; gap: 0.8rem; padding: 0.7rem 1rem; background: var(--bg-panel); border-radius: 12px; transition: all 0.2s; cursor: pointer; margin-bottom: 0.5rem; min-height: 68px; box-sizing: border-box;';
        
        const isLiked = likedList.includes(track.title);
        const art = track.artUrl || track.artwork || track.coverUrl || pl.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop';
        const audioUrl = track.url || track.previewUrl || track.audioUrl || '';

        row.innerHTML = `
            <div class="track-row-number" style="font-weight: 800; font-size: 0.95rem; color: var(--neon-cyan); width: 26px; text-align: center; flex-shrink: 0;">${index + 1}</div>
            <img src="${art}" style="width: 48px; height: 48px; border-radius: 8px; object-fit: cover; flex-shrink: 0;" onerror="this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop'">
            <div class="track-info-col" style="flex: 1; min-width: 0; overflow: hidden; padding-right: 0.5rem;">
                <h4 style="margin: 0; font-size: 0.95rem; color: var(--text-main, #fff); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${track.title}</h4>
                <p style="margin: 0.2rem 0 0; font-size: 0.8rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${track.artist}</p>
            </div>

            <div class="track-actions-group" style="display: flex; align-items: center; gap: 0.4rem; flex-shrink: 0;">
                <!-- Dedicate to friends -->
                <button class="track-dedicate-btn" title="Dedicate to Friends" style="background: transparent; border: none; cursor: pointer; color: var(--neon-pink); padding: 4px; display: flex; align-items: center; border-radius: 6px;">
                    <span class="material-icons" style="font-size: 1.25rem;">card_giftcard</span>
                </button>

                <!-- Like song -->
                <button class="track-like-btn ${isLiked ? 'liked' : ''}" title="Like Song" style="background: transparent; border: none; cursor: pointer; color: ${isLiked ? 'var(--neon-pink)' : 'var(--text-muted)'}; padding: 4px; display: flex; align-items: center; border-radius: 6px;">
                    <span class="material-icons" style="font-size: 1.25rem;">${isLiked ? 'favorite' : 'favorite_border'}</span>
                </button>

                <!-- Loop song -->
                <button class="track-loop-btn" title="Loop Song" style="background: transparent; border: none; cursor: pointer; color: var(--text-muted); padding: 4px; display: flex; align-items: center; border-radius: 6px;">
                    <span class="material-icons" style="font-size: 1.25rem;">repeat</span>
                </button>

                <!-- Add to queue -->
                <button class="track-queue-btn" title="Add to Queue" style="background: transparent; border: none; cursor: pointer; color: var(--neon-cyan); padding: 4px; display: flex; align-items: center; border-radius: 6px;">
                    <span class="material-icons" style="font-size: 1.25rem;">playlist_add</span>
                </button>

                <!-- Add to playlist -->
                <button class="track-add-playlist-btn" title="Add to Playlist" style="background: transparent; border: none; cursor: pointer; color: var(--electric-blue); padding: 4px; display: flex; align-items: center; border-radius: 6px;">
                    <span class="material-icons" style="font-size: 1.25rem;">library_add</span>
                </button>

                <!-- Play button -->
                <button class="track-play-btn" title="Play Track" style="background: transparent; border: none; cursor: pointer; padding: 4px; display: flex; align-items: center;">
                    <span class="material-icons" style="color: var(--text-main); font-size: 1.8rem;">play_circle_filled</span>
                </button>
            </div>
        `;

        // Click row to open and play immediately
        row.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                window.currentTracklist = pl.tracks;
                window.currentTrackIndex = index;
                playTrack(audioUrl, track.title, track.artist, art);
                showSocialToast('Now Playing 🎶', `${track.title} - ${track.artist}`);
            }
        });

        // Play button
        row.querySelector('.track-play-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            window.currentTracklist = pl.tracks;
            window.currentTrackIndex = index;
            playTrack(audioUrl, track.title, track.artist, art);
            showSocialToast('Now Playing 🎶', `${track.title} - ${track.artist}`);
        });

        // Dedicate to friends
        row.querySelector('.track-dedicate-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openDedicateModal({ ...track, artUrl: art, url: audioUrl });
        });

        // Like song
        const likeBtn = row.querySelector('.track-like-btn');
        likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const icon = likeBtn.querySelector('.material-icons');
            const u = getLoggedInUser();
            if (!u.likedSongs) u.likedSongs = [];
            const idx = u.likedSongs.indexOf(track.title);
            
            let likedPl = (window.allPlaylists || []).find(p => p.name.toLowerCase() === 'liked songs');
            if (!likedPl) {
                likedPl = {
                    id: 'pl_liked',
                    name: 'Liked Songs',
                    description: 'Your favorite tracks',
                    artUrl: art,
                    tracks: []
                };
                if (!window.allPlaylists) window.allPlaylists = [];
                window.allPlaylists.push(likedPl);
            }

            if (idx > -1) {
                u.likedSongs.splice(idx, 1);
                icon.textContent = 'favorite_border';
                likeBtn.style.color = 'var(--text-muted)';
                likedPl.tracks = (likedPl.tracks || []).filter(t => t.title && t.title.toLowerCase() !== track.title.toLowerCase());
                showSocialToast('Removed from Liked Songs', track.title);
            } else {
                u.likedSongs.push(track.title);
                icon.textContent = 'favorite';
                likeBtn.style.color = 'var(--neon-pink)';
                if (!likedPl.tracks) likedPl.tracks = [];
                if (!likedPl.tracks.some(t => t.title && t.title.toLowerCase() === track.title.toLowerCase())) {
                    likedPl.tracks.push({ ...track, artUrl: art, url: audioUrl });
                }
                showSocialToast('Added to Liked Songs ❤️', track.title);
            }
            setLoggedInUser(u);
        });

        // Loop song
        const loopBtn = row.querySelector('.track-loop-btn');
        loopBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const mainAud = document.getElementById('mainAudio');
            const icon = loopBtn.querySelector('.material-icons');
            
            if (!mainAud.src || !mainAud.src.includes(audioUrl)) {
                playTrack(audioUrl, track.title, track.artist, art);
            }
            
            const isCurrentlyLooping = mainAud.loop || loopBtn.dataset.looping === 'true';
            if (isCurrentlyLooping) {
                mainAud.loop = false;
                loopBtn.dataset.looping = 'false';
                icon.textContent = 'repeat';
                loopBtn.style.color = 'var(--text-muted)';
                showSocialToast('Loop Disabled', `"${track.title}"`);
            } else {
                mainAud.loop = true;
                loopBtn.dataset.looping = 'true';
                icon.textContent = 'repeat_one';
                loopBtn.style.color = 'var(--neon-cyan)';
                showSocialToast('Looping Track 🔂', `"${track.title}" will loop continuously`);
            }
        });

        // Add to queue
        const queueBtn = row.querySelector('.track-queue-btn');
        queueBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof addToUserQueue === 'function') {
                addToUserQueue(track.title, track.artist, art, audioUrl);
            }
            const icon = queueBtn.querySelector('.material-icons');
            icon.textContent = 'check';
            queueBtn.style.color = 'var(--neon-green)';
            showSocialToast('Added to Queue 🎶', `"${track.title}"`);
            setTimeout(() => {
                icon.textContent = 'playlist_add';
                queueBtn.style.color = 'var(--neon-cyan)';
            }, 1500);
        });

        // Add to playlist
        row.querySelector('.track-add-playlist-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openAddToPlaylistModal({ ...track, artUrl: art, url: audioUrl });
        });

        tracksListContainer.appendChild(row);
    });
}

function openPlaylistDetail(pl) {
    if (!pl) return;

    // Record source view for back navigation
    const currentlyActiveView = document.querySelector('.view.active-view');
    if (currentlyActiveView && currentlyActiveView.id !== 'playlists-view') {
        pl._previousViewId = currentlyActiveView.id;
    }

    // Handle string name or find in allPlaylists
    if (typeof pl === 'string') {
        const found = (window.allPlaylists || []).find(p => p.name.toLowerCase() === pl.toLowerCase() || p.id === pl);
        if (found) {
            pl = found;
        } else {
            pl = {
                id: 'pl_' + Date.now(),
                name: pl,
                description: `A curated collection of tracks for ${pl}.`,
                artUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
                tracks: []
            };
            if (!window.allPlaylists) window.allPlaylists = [];
            window.allPlaylists.push(pl);
        }
    }

    // Always ensure the playlist has AT LEAST 6 playable songs immediately
    if (!pl.tracks || pl.tracks.length < 6) {
        const curated = getCuratedTracksForPlaylist(pl.name);
        if (!pl.tracks || pl.tracks.length === 0) {
            pl.tracks = curated;
        } else {
            const existingTitles = new Set(pl.tracks.map(t => (t.title || '').toLowerCase()));
            const missing = curated.filter(t => !existingTitles.has((t.title || '').toLowerCase()));
            pl.tracks = [...pl.tracks, ...missing].slice(0, 8);
        }
    }

    // 1. Switch to Playlists view
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    const playlistsView = document.getElementById('playlists-view');
    if (playlistsView) playlistsView.classList.add('active-view');

    // 2. Update active nav item to 'playlists'
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const playlistsNav = document.querySelector('.nav-item[data-target="playlists"]');
    if (playlistsNav) playlistsNav.classList.add('active');

    const mainContent = document.getElementById('playlistsMainContent');
    const detailSection = document.getElementById('playlistDetailSection');
    const artImg = document.getElementById('detailPlaylistArt');
    const nameHeader = document.getElementById('detailPlaylistName');
    const descPara = document.getElementById('detailPlaylistDesc');
    const trackCountPara = document.getElementById('detailPlaylistTrackCount');
    const tracksListContainer = document.getElementById('playlistTracksList');

    if (!mainContent || !detailSection || !artImg || !nameHeader || !descPara || !trackCountPara || !tracksListContainer) return;

    // 3. Show detail section, hide main playlist content
    mainContent.style.display = 'none';
    detailSection.style.display = 'block';

    // 4. Scroll main content area to top on initial open
    const contentArea = document.querySelector('.main-content') || document.getElementById('app-content-area');
    if (contentArea) contentArea.scrollTop = 0;

    artImg.src = pl.artUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop';
    nameHeader.textContent = pl.name;
    descPara.textContent = pl.description || `A curated collection of tracks for ${pl}.`;
    trackCountPara.textContent = `${pl.tracks.length} TRACKS`;

    // Update Pin Button in Detail view
    const pinBtn = document.getElementById('btnPinPlaylistDetail');
    if (pinBtn) {
        const user = getLoggedInUser();
        const pinnedPlaylists = user.pinnedPlaylists || [];
        const isPinned = pinnedPlaylists.includes(pl.name);
        
        const pinIcon = pinBtn.querySelector('.material-icons');
        const pinText = pinBtn.querySelector('span:not(.material-icons)');
        
        const isLofi = document.body.getAttribute('data-theme') === 'lofi';
        if (isPinned) {
            pinBtn.classList.add('pinned');
            if (!isLofi) {
                pinBtn.style.color = 'var(--neon-pink)';
                pinBtn.style.borderColor = 'var(--neon-pink)';
            } else {
                pinBtn.style.color = '';
                pinBtn.style.borderColor = '';
            }
            if (pinIcon) pinIcon.textContent = 'push_pin';
            if (pinText) pinText.textContent = 'UNPIN PLAYLIST';
        } else {
            pinBtn.classList.remove('pinned');
            if (!isLofi) {
                pinBtn.style.color = 'var(--neon-cyan)';
                pinBtn.style.borderColor = 'var(--neon-cyan)';
            } else {
                pinBtn.style.color = '';
                pinBtn.style.borderColor = '';
            }
            if (pinIcon) pinIcon.textContent = 'push_pin';
            if (pinText) pinText.textContent = 'PIN PLAYLIST';
        }

        pinBtn.onclick = async () => {
            await togglePinPlaylist(pl.name);
            openPlaylistDetail(pl);
        };
    }

    // Update Share Button in Detail view
    const shareDetailBtn = document.getElementById('btnSharePlaylistDetail');
    if (shareDetailBtn) {
        shareDetailBtn.onclick = () => {
            const shareModal = document.getElementById('sharePlaylistModal');
            if (shareModal) {
                const nameEl = document.getElementById('sharingPlaylistName');
                if (nameEl) nameEl.textContent = pl.name;
                currentSharePlaylistData = pl;
                if (typeof updateShareFriendSelect === 'function') updateShareFriendSelect();
                shareModal.style.display = 'flex';
            } else {
                if (window.socialChannel) window.socialChannel.postMessage({ type: 'SHARE_PLAYLIST', playlist: pl.name });
                if (typeof showSocialToast === 'function') showSocialToast('Playlist Shared! 📤', `${pl.name} sent to connections.`);
            }
        };
    }

    // Render tracks list
    renderPlaylistTrackRows(pl, tracksListContainer);

    // One-time Background enhancement: fetch additional matching live tracks from iTunes (without infinite loops)
    if (!pl._enhancedWithLive) {
        pl._enhancedWithLive = true;
        const cleanSearchTerm = pl.name.replace(/[^a-zA-Z0-9 ]/g, '').trim() || 'hits';
        fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(cleanSearchTerm)}&media=music&limit=15`)
            .then(r => r.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const liveTracks = data.results.map(t => ({
                        title: t.trackName || 'Track',
                        artist: t.artistName || 'Artist',
                        url: t.previewUrl,
                        artUrl: t.artworkUrl100 ? t.artworkUrl100.replace('100x100bb', '400x400bb') : pl.artUrl
                    })).filter(t => t.url);

                    if (liveTracks.length >= 6) {
                        pl.tracks = liveTracks;
                    } else if (liveTracks.length > 0) {
                        const fallback = getCuratedTracksForPlaylist(pl.name);
                        const existingTitles = new Set(liveTracks.map(t => (t.title || '').toLowerCase()));
                        const missing = fallback.filter(t => !existingTitles.has((t.title || '').toLowerCase()));
                        pl.tracks = [...liveTracks, ...missing].slice(0, 8);
                    }
                    // Only re-render rows in place if user is still viewing this exact playlist
                    if (detailSection && detailSection.style.display !== 'none' && nameHeader && nameHeader.textContent === pl.name) {
                        trackCountPara.textContent = `${pl.tracks.length} TRACKS`;
                        renderPlaylistTrackRows(pl, tracksListContainer);
                    }
                }
            })
            .catch(() => {});
    }

    const playAllBtn = document.getElementById('btnPlayAllPlaylist');
    if (playAllBtn) {
        playAllBtn.onclick = () => {
            playPlaylist(pl);
        };
    }

    const btnBack = document.getElementById('btnBackToPlaylists');
    if (btnBack) {
        btnBack.onclick = () => {
            detailSection.style.display = 'none';
            if (pl._previousViewId && pl._previousViewId !== 'playlists-view') {
                document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
                const prevView = document.getElementById(pl._previousViewId);
                if (prevView) prevView.classList.add('active-view');
                
                const targetKey = pl._previousViewId.replace('-view', '');
                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
                const navTarget = document.querySelector(`.nav-item[data-target="${targetKey}"]`);
                if (navTarget) navTarget.classList.add('active');
            } else {
                mainContent.style.display = 'block';
            }
        };
    }

    mainContent.style.display = 'none';
    detailSection.style.display = 'block';
}
window.openPlaylistDetail = openPlaylistDetail;

// Global Playlist Click Delegator: Opens ANY clicked playlist across the app
document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-playlist], [data-playlist-name], .time-capsule, .archive-card, .curated-card, .quick-card.recent-card, .playlist-card');
    if (!target) return;

    // Do not intercept interactive buttons inside cards
    if (e.target.closest('button, .queue-add-btn, .track-play-btn, .track-like-btn, .see-all-btn')) return;

    // Do not intercept individual song tracks
    if (target.classList.contains('album-card') || target.closest('.album-card') || target.classList.contains('playlist-track-row')) return;

    let plName = target.getAttribute('data-playlist') || target.getAttribute('data-playlist-name');
    if (!plName) {
        const titleEl = target.querySelector('h3, h2, div[style*="font-weight"]');
        if (titleEl) {
            const txt = titleEl.textContent.trim().replace(/^📌\s*/, '').replace(/^[♥↓🕐]\s*/, '');
            const isSong = ['Starboy', 'Bad Guy', "God's Plan", 'Super Shy', 'Goosebumps'].includes(txt) || target.dataset.trackTitle;
            if (isSong) {
                const songTitle = target.dataset.trackTitle || txt;
                const songArtist = target.dataset.trackArtist || (
                    songTitle === 'Starboy' ? 'The Weeknd' :
                    songTitle === 'Bad Guy' ? 'Billie Eilish' :
                    songTitle === "God's Plan" ? 'Drake' :
                    songTitle === 'Super Shy' ? 'NewJeans' :
                    songTitle === 'Goosebumps' ? 'Travis Scott' : ''
                );
                const imgEl = target.querySelector('img');
                const artUrl = imgEl ? imgEl.src : '';
                fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(songTitle + ' ' + songArtist)}&media=music&limit=1`)
                    .then(r => r.json())
                    .then(data => {
                        if (data.results && data.results[0] && data.results[0].previewUrl) {
                            const t = data.results[0];
                            const highArt = t.artworkUrl100 ? t.artworkUrl100.replace('100x100bb', '600x600bb') : artUrl;
                            playTrack(t.previewUrl, t.trackName, t.artistName, highArt);
                        } else {
                            playTrack('', songTitle, songArtist, artUrl);
                        }
                    })
                    .catch(() => {
                        playTrack('', songTitle, songArtist, artUrl);
                    });
                return;
            }
            if (txt.length > 0) {
                plName = txt;
            }
        }
    }

    if (plName) {
        let pl = (window.allPlaylists || []).find(p => p.name.toLowerCase() === plName.toLowerCase() || p.id === plName);
        if (!pl) {
            const imgEl = target.querySelector('img');
            pl = {
                id: 'pl_' + Date.now(),
                name: plName,
                description: `Best collection of tracks for ${plName}`,
                artUrl: imgEl ? imgEl.src : 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
                tracks: []
            };
            if (!window.allPlaylists) window.allPlaylists = [];
            window.allPlaylists.push(pl);
        }
        openPlaylistDetail(pl);
    }
});

// --- SEE ALL BUTTONS CONTROLLER ---
function openPopularSongsPlaylist() {
    let pl = (window.allPlaylists || []).find(p => (p.name && p.name.toLowerCase() === 'popular songs') || p.id === 'pl7');
    if (!pl) {
        pl = {
            id: 'pl7',
            name: 'Popular Songs',
            description: 'Most viral and streamed hits right now',
            artUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop',
            tracks: []
        };
        if (!window.allPlaylists) window.allPlaylists = [];
        window.allPlaylists.push(pl);
    }

    if (window.currentPopularSongsTracks && window.currentPopularSongsTracks.length > 0) {
        pl.tracks = window.currentPopularSongsTracks;
    } else {
        const galleryCards = document.querySelectorAll('#masonry-gallery .album-card');
        if (galleryCards.length > 0) {
            const domTracks = [];
            galleryCards.forEach((c, idx) => {
                const title = c.querySelector('.album-card-title')?.textContent.trim() || `Popular Track ${idx + 1}`;
                const artist = c.querySelector('.album-card-artist')?.textContent.trim() || 'Various Artists';
                const img = c.querySelector('img')?.src || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop';
                domTracks.push({
                    id: 'dom_pop_' + idx,
                    title,
                    artist,
                    artUrl: img,
                    url: ''
                });
            });
            if (domTracks.length > 0) pl.tracks = domTracks;
        }
    }

    if (!pl.tracks || pl.tracks.length === 0) {
        if (typeof getCuratedTracksForPlaylist === 'function') {
            pl.tracks = getCuratedTracksForPlaylist('Popular Songs');
        }
    }

    if (typeof openPlaylistDetail === 'function') {
        openPlaylistDetail(pl);
    }
}
window.openPopularSongsPlaylist = openPopularSongsPlaylist;

function openRecentPlaysPlaylist() {
    let pl = (window.allPlaylists || []).find(p => p.name && p.name.toLowerCase() === 'recent plays');
    if (!pl) {
        pl = {
            id: 'pl_recent_plays',
            name: 'Recent Plays',
            description: 'Your listening history and recently played tracks.',
            artUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
            tracks: []
        };
        if (!window.allPlaylists) window.allPlaylists = [];
        window.allPlaylists.push(pl);
    }

    const user = typeof getLoggedInUser === 'function' ? getLoggedInUser() : {};
    const history = user.playHistory || [];
    const tracks = [];

    if (history.length > 0) {
        history.forEach((h, idx) => {
            tracks.push({
                id: 'hist_' + idx,
                title: h.title || h.trackName || h.song || 'Recent Track',
                artist: h.artist || h.artistName || 'AudioTrack Artist',
                artUrl: h.artUrl || h.cover || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
                url: h.url || h.previewUrl || ''
            });
        });
    }

    const defaultRecent = [
        { title: 'Starboy', artist: 'The Weeknd', artUrl: 'https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=400&auto=format&fit=crop' },
        { title: 'Bad Guy', artist: 'Billie Eilish', artUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop' },
        { title: "God's Plan", artist: 'Drake', artUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=400&auto=format&fit=crop' },
        { title: 'Super Shy', artist: 'NewJeans', artUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop' },
        { title: 'Goosebumps', artist: 'Travis Scott', artUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' },
        { title: 'Midnight City', artist: 'M83', artUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop' }
    ];

    defaultRecent.forEach(dr => {
        if (!tracks.some(t => (t.title || '').toLowerCase() === dr.title.toLowerCase())) {
            tracks.push(dr);
        }
    });

    pl.tracks = tracks;
    if (typeof openPlaylistDetail === 'function') {
        openPlaylistDetail(pl);
    }
}
window.openRecentPlaysPlaylist = openRecentPlaysPlaylist;

// Global Delegator for .see-all-btn clicks
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.see-all-btn');
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const sec = (btn.dataset.section || '').toLowerCase();
    const plName = btn.dataset.playlist || btn.getAttribute('data-playlist') || '';

    // 1. Popular Songs section -> Open Popular Songs playlist detail view
    if (sec === 'popular' || plName.toLowerCase() === 'popular songs' || btn.closest('.dashboard-section')?.querySelector('h2')?.textContent.toLowerCase().includes('popular')) {
        openPopularSongsPlaylist();
        return;
    }

    // 2. Recent Plays section -> Open Recent Plays playlist detail view
    if (sec === 'recent' || btn.closest('.dashboard-section')?.querySelector('h2')?.textContent.toLowerCase().includes('recent')) {
        openRecentPlaysPlaylist();
        return;
    }

    // 3. Section with a specific playlist target
    if (plName) {
        if (typeof openPlaylistDetail === 'function') {
            openPlaylistDetail(plName);
        }
        return;
    }

    // 4. Pinned Playlists, Suggested For You, or other dashboard sections:
    // Switch to Playlists view showing all playlists of that section
    const playlistsTab = document.querySelector('.nav-item[data-target="playlists"]');
    if (playlistsTab) {
        playlistsTab.click();
        const mainContent = document.getElementById('playlistsMainContent');
        const detailSection = document.getElementById('playlistDetailSection');
        if (mainContent) mainContent.style.display = 'block';
        if (detailSection) detailSection.style.display = 'none';

        if (sec === 'pinned') {
            const userPlRow = document.getElementById('user-playlists');
            if (userPlRow) userPlRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else if (sec === 'suggested') {
            const savedPlRow = document.getElementById('saved-playlists-row');
            if (savedPlRow) savedPlRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
});

function getUserThemeKey() {
    const user = getLoggedInUser();
    return user && user.username ? `audioTrackTheme_${user.username}` : 'audioTrackTheme';
}
function getUserLanguagesKey() {
    const user = getLoggedInUser();
    return user && user.username ? `audioTrackLanguages_${user.username}` : 'audioTrackLanguages';
}
function getUserArtistsKey() {
    const user = getLoggedInUser();
    return user && user.username ? `audioTrackArtists_${user.username}` : 'audioTrackArtists';
}

// Enable smooth horizontal wheel scrolling on all horizontal playlist rows
document.addEventListener('wheel', (e) => {
    const horizontalRow = e.target.closest('.horizontal-scroll-row, .album-cards-row, .album-row');
    if (!horizontalRow) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const maxScroll = horizontalRow.scrollWidth - horizontalRow.clientWidth;
        if (maxScroll > 4) {
            const canScrollRight = e.deltaY > 0 && horizontalRow.scrollLeft < maxScroll - 2;
            const canScrollLeft = e.deltaY < 0 && horizontalRow.scrollLeft > 2;
            if (canScrollRight || canScrollLeft) {
                e.preventDefault();
                horizontalRow.scrollLeft += e.deltaY * 1.2;
            }
        }
    }
}, { passive: false });

setTimeout(fetchPlaylists, 1500);
setTimeout(() => {
    if (typeof renderMoodHistory === 'function') {
        renderMoodHistory();
    }
}, 500);
