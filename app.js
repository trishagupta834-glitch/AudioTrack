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
        madeForYou: [{name: "Romantic Mix", img: "https://images.unsplash.com/photo-1493225457124-a1a2a5f36e4b?q=80&w=300&auto=format&fit=crop"}, {name: "Love Songs", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop"}],
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
    // Session Check
    const savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!savedUser) {
        window.location.href = 'login.html';
        return;
    } else {
        const userEl = document.querySelector('.username');
        if (userEl) userEl.textContent = savedUser.username;
    }
    
    // Show/hide demo mode badge
    const demoModeBadge = document.getElementById('demoModeBadge');
    if (demoModeBadge) {
        const isOfflineMode = localStorage.getItem('offlineMode') !== 'false';
        demoModeBadge.style.display = isOfflineMode ? 'flex' : 'none';
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
                <img src="${getRandomAvatar(artist)}" alt="${artist}">
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
        
        // Always select and highlight Mood Board navigation tab first on login/startup
        const moodboardTab = document.querySelector('.nav-item[data-target="moodboard"]');
        if (moodboardTab) {
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            moodboardTab.classList.add('active');
            
            document.querySelectorAll('.view').forEach(view => view.classList.remove('active-view'));
            moodboardView.classList.add('active-view');
            
            const searchBar = document.querySelector('.search-bar');
            if (searchBar) searchBar.style.display = 'none';
        }
        
        if (!savedTheme) {
            // Clear previous selections for a clean onboarding flow
            selectedLanguages = [];
            selectedArtists = [];
            localStorage.removeItem(getUserLanguagesKey());
            localStorage.removeItem(getUserArtistsKey());
            
            renderLanguages();
            showStep(stepLanguages);
            
            moodboardView.classList.add('initial-load'); // Add class for initial text effects
        } else {
            document.body.setAttribute('data-theme', savedTheme);
            // Fetch based on saved mood, intelligently blended with user's favorite artist or language
            const baseQuery = moodSongs[savedTheme]?.query || 'trending';
            const smartQuery = selectedArtists.length > 0 ? `${selectedArtists[0]} ${baseQuery}` : 
                               (selectedLanguages.length > 0 ? `${selectedLanguages[0]} ${baseQuery}` : baseQuery);
                               
            updateDashboardForMood(savedTheme);
            showStep(stepMood);
            moodboardView.classList.remove('initial-load'); // Remove if not initial load
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

        // Mood Selection
        moodCards.forEach(card => {
            card.addEventListener('click', () => {
                const selectedTheme = card.getAttribute('data-theme-select');
                document.body.setAttribute('data-theme', selectedTheme);
                localStorage.setItem(getUserThemeKey(), selectedTheme);
                localStorage.setItem(getUserLanguagesKey(), JSON.stringify(selectedLanguages));
                localStorage.setItem(getUserArtistsKey(), JSON.stringify(selectedArtists));
                
                // Fetch music for this new mood using smart query
                const baseQuery = moodSongs[selectedTheme].query;
                const smartQuery = selectedArtists.length > 0 ? `${selectedArtists[0]} ${baseQuery}` : 
                                   (selectedLanguages.length > 0 ? `${selectedLanguages[0]} ${baseQuery}` : baseQuery);
                                   
                fetchMusic(smartQuery, 'masonry-gallery');
                
                // Update Dashboard Layout
                updateDashboardForMood(selectedTheme);
                
                // Switch back to Home tab
                const homeTab = document.querySelector('.nav-item[data-target="home"]');
                if (homeTab) {
                    homeTab.click();
                }

                // Show Song Suggestion Toast
                const lyricToast = document.getElementById('lyricToast');
                if (lyricToast && moodSongs[selectedTheme]) {
                    document.getElementById('toastSong').textContent = moodSongs[selectedTheme].name;
                    document.getElementById('toastLyric').textContent = moodSongs[selectedTheme].lyric;
                    lyricToast.classList.add('show');
                    setTimeout(() => lyricToast.classList.remove('show'), 6000);
                }
                moodboardView.classList.remove('initial-load'); // Remove after mood selection
            });
        });
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

        container.innerHTML = '';

        tracks.forEach(track => {
            // Upgrade artwork resolution from 100x100 to 600x600 if iTunes, else use our backend artUrl
            let highResArt = track.artUrl || (track.artworkUrl100 ? track.artworkUrl100.replace('100x100bb', '600x600bb') : 'https://via.placeholder.com/600');
            const title = track.title || track.trackName || 'Unknown Track';
            const artist = track.artist || track.artistName || 'Unknown Artist';
            const previewUrl = track.url || track.previewUrl;
            
            const div = document.createElement('div');
            div.className = 'album-card';
            div.innerHTML = `
                <div class="album-card-cover">
                    <img src="${highResArt}" alt="${title}">
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
                    addToUserQueue(title, artist, highResArt);
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
                if (previewUrl) {
                    playTrack(previewUrl, title, artist, highResArt);
                    // Update dynamic background
                    if (typeof updateDynamicBg === 'function') updateDynamicBg(highResArt);
                } else {
                    alert('No audio preview available for this track.');
                }
            });

            container.appendChild(div);
        });
    }
    window.populateMasonry = populateMasonry;


    function playTrack(url, title, artist, artUrl, isSync = false) {
        window.playTrack = playTrack;
        if (window.currentRoom && !isSync) {
            window.socialChannel.postMessage({
                type: 'SYNC_PLAYBACK',
                room: window.currentRoom,
                trackUrl: url,
                title: title,
                artist: artist,
                artUrl: artUrl
            });
            const roomSyncTitle = document.getElementById('roomSyncTitle');
            const roomSyncArtist = document.getElementById('roomSyncArtist');
            const roomSyncArt = document.getElementById('roomSyncArt');
            if (roomSyncTitle) roomSyncTitle.textContent = title;
            if (roomSyncArtist) roomSyncArtist.textContent = artist;
            if (roomSyncArt && artUrl) roomSyncArt.src = artUrl;
        }
        window.playTrack = playTrack;
        // Show the bottom player
        const bottomPlayer = document.getElementById('bottom-player');
        if (bottomPlayer) bottomPlayer.style.display = 'flex';

        mainAudio.src = url;
        mainAudio.play();
        
        document.querySelector('.track-title').textContent = title;
        document.querySelector('.track-artist').textContent = artist;
        document.querySelector('.track-art').src = artUrl;
        
        playIcon.textContent = 'pause';
        trackArt.classList.add('play');
    }
    window.playTrack = playTrack;

    // --- PLAYER CONTROLS ---
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

    mainAudio.addEventListener('timeupdate', () => {
        if (mainAudio.duration) {
            const progress = (mainAudio.currentTime / mainAudio.duration) * 100;
            progressFill.style.width = progress + '%';
        }
    });

    mainAudio.addEventListener('ended', () => {
        playIcon.textContent = 'play_arrow';
        trackArt.classList.remove('play');
        progressFill.style.width = '0%';
    });

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
                }

                if (targetAttr === 'playlists') {
                    const mainContent = document.getElementById('playlistsMainContent');
                    const detailSection = document.getElementById('playlistDetailSection');
                    if (mainContent && detailSection) {
                        detailSection.style.display = 'none';
                        mainContent.style.display = 'block';
                    }
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
        closeSocialBtn.addEventListener('click', () => {
            socialModal.classList.remove('active');
        });
    }

    // 2. Focus Mode
    const focusModeBtn = document.getElementById('focusModeBtn');
    if (focusModeBtn) {
        focusModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('focus-mode-active');
            if(document.body.classList.contains('focus-mode-active')) {
                // Show a toast
                const lyricToast = document.getElementById('lyricToast');
                document.getElementById('toastSong').textContent = "Focus Mode Activated";
                document.getElementById('toastLyric').textContent = "Distractions hidden. Pure listening.";
                lyricToast.classList.add('show');
                setTimeout(() => lyricToast.classList.remove('show'), 3000);
            }
        });
    }

    // 3. Share Timestamp
    const shareTimestampBtn = document.getElementById('shareTimestampBtn');
    if (shareTimestampBtn) {
        shareTimestampBtn.addEventListener('click', () => {
            const time = Math.floor(mainAudio.currentTime);
            const mockUrl = `audiotrack.app/listen?track=current#t=${time}s`;
            
            navigator.clipboard.writeText(mockUrl).then(() => {
                const lyricToast = document.getElementById('lyricToast');
                document.getElementById('toastSong').textContent = "Timestamp Copied!";
                document.getElementById('toastLyric').textContent = mockUrl;
                lyricToast.classList.add('show');
                setTimeout(() => lyricToast.classList.remove('show'), 3000);
            });
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
    // 5. Dedicate Song Modal
    const dedicateModal = document.getElementById('dedicateModal');
    const openDedicateBtn = document.getElementById('openDedicateBtn');
    const cancelDedicateBtn = document.getElementById('cancelDedicateBtn');
    const submitDedicateBtn = document.getElementById('submitDedicateBtn');

    if (openDedicateBtn && dedicateModal) {
        openDedicateBtn.addEventListener('click', () => {
            // Populate friends list
            const user = getLoggedInUser();
            const selectEl = document.getElementById('dedicateFriendSelect');
            if (selectEl) {
                selectEl.innerHTML = '';
                if (user.connections && user.connections.length > 0) {
                    user.connections.forEach(conn => {
                        const opt = document.createElement('option');
                        opt.value = conn;
                        opt.textContent = `@${conn}`;
                        selectEl.appendChild(opt);
                    });
                    submitDedicateBtn.disabled = false;
                } else {
                    const opt = document.createElement('option');
                    opt.textContent = 'No friends added yet';
                    opt.disabled = true;
                    selectEl.appendChild(opt);
                    submitDedicateBtn.disabled = true;
                }
            }
            dedicateModal.classList.add('active');
        });
        
        cancelDedicateBtn.addEventListener('click', () => {
            dedicateModal.classList.remove('active');
        });
        
        submitDedicateBtn.addEventListener('click', async () => {
            const selectEl = document.getElementById('dedicateFriendSelect');
            const messageEl = document.getElementById('dedicateMessageInput');
            const friendUsername = selectEl ? selectEl.value : null;
            const message = messageEl ? messageEl.value.trim() : '';
            
            if (!friendUsername) return;
            
            const user = getLoggedInUser();
            const mainAudio = document.getElementById('mainAudio');
            const titleEl = document.querySelector('.track-title');
            const artistEl = document.querySelector('.track-artist');
            const artEl = document.querySelector('.track-art');
            
            const dedicationPayload = {
                fromUser: user.username,
                trackTitle: titleEl?.textContent || 'Unknown Track',
                trackArtist: artistEl?.textContent || 'Unknown Artist',
                trackUrl: mainAudio?.src || '',
                trackArt: artEl?.src || 'https://api.dicebear.com/9.x/shapes/svg?seed=track',
                message: message
            };
            
            submitDedicateBtn.textContent = 'SENDING...';
            submitDedicateBtn.disabled = true;
            
            try {
                const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(friendUsername)}/dedicate`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dedicationPayload)
                });
                
                if (res.ok) {
                    showSocialToast("Dedication Sent! 🎁", `Your track was sent to @${friendUsername}`);
                } else {
                    showSocialToast("Error", "Could not send dedication.");
                }
            } catch (e) {
                console.error("Dedication failed", e);
                showSocialToast("Error", "Failed to connect to server.");
            }
            
            submitDedicateBtn.textContent = 'SEND 🎁';
            submitDedicateBtn.disabled = false;
            if (messageEl) messageEl.value = '';
            dedicateModal.classList.remove('active');
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
        const historyArtists = document.querySelectorAll('.history-artist');
        historyArtists.forEach(artistEl => {
            artistEl.addEventListener('click', () => {
                const artistName = artistEl.getAttribute('data-artist');
                const artistImg = artistEl.querySelector('img').src;
                
                // Switch view
                views.forEach(view => view.classList.remove('active-view'));
                document.getElementById('artist-profile-view').classList.add('active-view');
                navItems.forEach(nav => nav.classList.remove('active')); // deselect all navs
                
                // Update UI
                document.getElementById('artistProfileName').textContent = artistName;
                document.getElementById('artistProfileBg').style.backgroundImage = `url('${artistImg}')`;
                
                // Fetch top 15 tracks for artist
                fetchMusic(artistName, 'artist-tracks-gallery');
            });
        });
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

    // --- UX OVERHAUL: Mood Ring Filter ---
    const moodRing = document.getElementById('moodRing');
    if (moodRing) {
        moodRing.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            const userPlaylists = document.querySelectorAll('#user-playlists .curated-card');
            
            userPlaylists.forEach((card, index) => {
                let show = true;
                if (val < 33) {
                    show = index === 0 || index === 3; 
                } else if (val < 66) {
                    show = true; 
                } else {
                    show = index === 1 || index === 2; 
                }
                card.style.display = show ? 'block' : 'none';
            });
        });
    }

    // --- UX OVERHAUL: Haptic Sync ---
    const hapticBtn = document.getElementById('hapticSyncToggle');
    let hapticEnabled = false;
    if (hapticBtn) {
        hapticBtn.addEventListener('click', () => {
            hapticEnabled = !hapticEnabled;
            hapticBtn.innerHTML = hapticEnabled ? '<span class="material-icons">vibration</span> HAPTIC SYNC: ON' : '<span class="material-icons">vibration</span> HAPTIC SYNC: OFF';
            hapticBtn.style.color = hapticEnabled ? "var(--neon-green)" : "var(--neon-cyan)";
            hapticBtn.style.borderColor = hapticEnabled ? "var(--neon-green)" : "var(--neon-cyan)";
        });
    }

    document.addEventListener('click', (e) => {
        if (!hapticEnabled) return;
        
        // Vibrate if supported
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }

        // Visual Ripple
        const ripple = document.createElement('div');
        ripple.className = 'haptic-ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });

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
            playBtn.addEventListener('click', () => fetchMusic(query, 'masonry-gallery'));
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
                    const art = track.artworkUrl100?.replace('100x100bb', '200x200bb') || '';
                    const div = document.createElement('div');
                    div.className = 'queue-track';
                    div.innerHTML = `
                        <img src="${art}" alt="${track.trackName}">
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

    function addToUserQueue(title, artist, artUrl) {
        const list = document.getElementById('userQueueList');
        const emptyMsg = document.getElementById('queueEmptyMsg');
        if (emptyMsg) emptyMsg.style.display = 'none';
        
        const div = document.createElement('div');
        div.className = 'queue-track';
        div.draggable = true;
        div.innerHTML = `
            <img src="${artUrl}" alt="${title}">
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
        
        userQueue.push({ title, artist, artUrl });
    }

    // ============================================
    // PHASE 3: DEDICATIONS FILTER LOGIC
    // ============================================
    document.querySelectorAll('.dedications-filter-bar .filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.dedications-filter-bar .filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const filter = pill.getAttribute('data-filter');
            const cards = document.querySelectorAll('.dedication-full-card');
            
            cards.forEach(card => {
                card.style.display = 'block';
                if (filter === 'sender') {
                    // Group by sender (just show all sorted)
                } else if (filter === 'mood') {
                    // Group by mood
                } else if (filter === 'recent') {
                    // Already sorted by date in HTML
                }
            });
        });
    });

    // Dedication search
    const dedSearch = document.getElementById('dedicationSearch');
    if (dedSearch) {
        dedSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.dedication-full-card').forEach(card => {
                const note = card.querySelector('.ded-note')?.textContent.toLowerCase() || '';
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                card.style.display = (note.includes(query) || title.includes(query)) ? 'block' : 'none';
            });
        });
    }

    // ============================================
    // PHASE 4: BIRTHDAY PLAYLIST GENERATOR
    // ============================================
    function generateBirthdayPlaylist() {
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
                        data.results.forEach(t => {
                            const art = t.artworkUrl100?.replace('100x100bb', '300x300bb') || '';
                            html += `<div class="curated-card" style="min-width: 150px; cursor: pointer;">
                                <img src="${art}" alt="${t.trackName}">
                                <h3 style="font-size: 0.8rem;">${t.trackName || 'Unknown'}</h3>
                            </div>`;
                        });
                        html += '</div>';
                        preview.innerHTML = `<p style="color: var(--neon-pink); font-weight: bold; margin-bottom: 0.5rem;">${mood1.toUpperCase()} × ${mood2.toUpperCase()} Mix</p>` + html;
                    }
                })
                .catch(() => {
                    if (preview) preview.innerHTML = '<p>Error generating mix.</p>';
                });
        });
    }

    // ============================================
    // PHASE 5: MOOD TRACKER
    // ============================================
    function trackMoodUsage() {
        const currentTheme = localStorage.getItem(getUserThemeKey());
        if (!currentTheme) return;
        let stats = JSON.parse(localStorage.getItem('audioTrackMoodStats')) || {};
        stats[currentTheme] = (stats[currentTheme] || 0) + 1;
        localStorage.setItem('audioTrackMoodStats', JSON.stringify(stats));
    }

    // Track mood on selection (hook into existing mood card listeners)
    // Already tracked via addToPlayHistory

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
        if (bioEl) bioEl.textContent = profile.bio || '';

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
                    <img src="${avatarUrl(friend.seed)}" alt="${friend.name}">
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
                        <img src="${avatarUrl(seed)}" alt="${name}">
                        <div class="friend-status-dot online"></div>
                    </div>
                    <div class="friend-card-info">
                        <p class="friend-card-name">${name}</p>
                        <p class="friend-card-status online-text">Found on AudioTrack ✓</p>
                    </div>
                    <button id="confirmAddFriendBtn" class="neon-btn" style="padding:0.4rem 1rem; font-size:0.8rem">Add</button>
                </div>
            `;

            document.getElementById('confirmAddFriendBtn').addEventListener('click', () => {
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
                    <img src="${pl.img}" alt="${pl.playlistName}">
                    <div class="shared-from-badge">
                        <img src="${fromAvatar}" alt="${pl.fromName}">
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
                <img src="${pl.artUrl}" alt="${pl.name}">
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
                sharingPlaylistId = pl.id;
                const nameEl = document.getElementById('sharingPlaylistName');
                if (nameEl) nameEl.textContent = pl.name;
                updateShareFriendSelect();
                const shareModal = document.getElementById('sharePlaylistModal');
                if (shareModal) shareModal.style.display = 'flex';
                currentSharePlaylistData = pl;
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
                `<img class="room-member-avatar" src="${avatarUrl(m.seed)}" alt="${m.name}" title="${m.name}">`
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

    // --- ROOM ENGINE ---
    function joinRoom(code) {
        if (currentRoomCode) leaveRoom(false);
        currentRoomCode = code;

        // Ensure room exists in list
        if (!rooms.find(r => r.code === code)) {
            const myName = profile.username || 'DJ_Glitch';
            rooms.push({ code, name: `Room ${code}`, members: [{ id: 'me', name: myName, seed: myName, isHost: true }], createdAt: Date.now() });
            saveRooms(rooms);
            renderRooms();
        }

        // Setup WebSockets (STOMP over SockJS)
        const isOfflineMode = localStorage.getItem('offlineMode') !== 'false';
        const isMock = isOfflineMode || (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1');
        
        if (!isMock && typeof SockJS !== 'undefined' && typeof Stomp !== 'undefined') {
            const socket = new SockJS('http://localhost:8080/ws');
            window.stompClient = Stomp.over(socket);
            window.stompClient.debug = null; // Disable excessive console logging
            
            window.stompClient.connect({}, function (frame) {
                // Subscribe to the room's topic
                window.stompClient.subscribe(`/topic/room/${code}`, function (message) {
                    handleRoomMessage({ data: JSON.parse(message.body) });
                });
                
                // Announce join
                window.stompClient.send(`/app/room/${code}/sync`, {}, JSON.stringify({ 
                    type: 'join', 
                    name: profile.username || 'DJ_Glitch', 
                    seed: profile.username || 'DJ_Glitch' 
                }));
            });
        }

        // Show active room panel
        const activePanel = document.getElementById('activeRoomPanel');
        if (activePanel) activePanel.style.display = 'block';

        const roomNameEl = document.getElementById('activeRoomName');
        const roomCodeEl = document.getElementById('activeRoomCode');
        const room = rooms.find(r => r.code === code);
        if (roomNameEl) roomNameEl.textContent = room?.name || `Room ${code}`;
        if (roomCodeEl) roomCodeEl.textContent = code;

        // Add self to members
        activeRoomMembers = [{ id: 'me', name: profile.username || 'DJ_Glitch', seed: profile.username || 'DJ_Glitch', isHost: !rooms.find(r => r.code === code)?.members.some(m => !m.isHost) }];
        renderRoomMembers();
        appendChatMsg(null, `You joined Room ${code} 🎶`, true);
        showToast(`Joined Room ${code} 🎵`, 'You\'re now listening together!');
    }

    function leaveRoom(notify = true) {
        if (window.stompClient) {
            window.stompClient.send(`/app/room/${currentRoomCode}/sync`, {}, JSON.stringify({ 
                type: 'leave', 
                name: profile.username || 'DJ_Glitch' 
            }));
            window.stompClient.disconnect();
            window.stompClient = null;
        }
        currentRoomCode = null;
        activeRoomMembers = [];
        const activePanel = document.getElementById('activeRoomPanel');
        if (activePanel) activePanel.style.display = 'none';
        if (notify) showToast('Left Room 👋', 'See you next time!');
        // Clear chat
        const chatMessages = document.getElementById('roomChatMessages');
        if (chatMessages) chatMessages.innerHTML = '';
    }

    // Leave room button
    const leaveRoomBtn = document.getElementById('leaveRoomBtn');
    if (leaveRoomBtn) leaveRoomBtn.addEventListener('click', () => leaveRoom(true));

    // Copy room code
    const copyCodeBtn = document.getElementById('copyRoomCodeBtn');
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const code = document.getElementById('activeRoomCode')?.textContent;
            if (code) {
                navigator.clipboard.writeText(code).then(() => showToast('Room Code Copied! 📋', `Share code ${code} with friends`));
            }
        });
    }

    // Handle incoming room messages
    function handleRoomMessage(event) {
        const msg = event.data;

        if (msg.type === 'join') {
            // Add member if not already in list
            if (!activeRoomMembers.find(m => m.name === msg.name)) {
                activeRoomMembers.push({ id: msg.name, name: msg.name, seed: msg.seed || msg.name });
                renderRoomMembers();
            }
            appendChatMsg(null, `${msg.name} joined the room 🎵`, true);
        }

        if (msg.type === 'leave') {
            activeRoomMembers = activeRoomMembers.filter(m => m.name !== msg.name);
            renderRoomMembers();
            appendChatMsg(null, `${msg.name} left the room 👋`, true);
        }

        if (msg.type === 'play') {
            window._isSyncing = true;
            const mainAudio = document.getElementById('mainAudio');
            const bottomPlayer = document.getElementById('bottom-player');
            if (mainAudio) {
                mainAudio.src = msg.url;
                mainAudio.currentTime = msg.timestamp || 0;
                mainAudio.play().catch(() => {}).finally(() => window._isSyncing = false);
                if (bottomPlayer) bottomPlayer.style.display = 'flex';
                const titleEl = document.querySelector('.track-title');
                const artistEl = document.querySelector('.track-artist');
                const artEl = document.querySelector('.track-art');
                const playIcon = document.getElementById('playIcon');
                if (titleEl) titleEl.textContent = msg.title;
                if (artistEl) artistEl.textContent = msg.artist;
                if (artEl) artEl.src = msg.art;
                if (playIcon) playIcon.textContent = 'pause';
            }
            // Update room now playing
            updateRoomNowPlaying(msg.title, msg.artist, msg.art);
            appendChatMsg(null, `▶ Now playing: ${msg.title}`, true);
        }

        if (msg.type === 'pause') {
            window._isSyncing = true;
            const mainAudio = document.getElementById('mainAudio');
            if (mainAudio) {
                mainAudio.pause();
                const playIcon = document.getElementById('playIcon');
                if (playIcon) playIcon.textContent = 'play_arrow';
            }
            setTimeout(() => window._isSyncing = false, 100);
        }

        if (msg.type === 'seek') {
            window._isSyncing = true;
            const mainAudio = document.getElementById('mainAudio');
            if (mainAudio && Math.abs(mainAudio.currentTime - msg.timestamp) > 2) {
                mainAudio.currentTime = msg.timestamp;
            }
            setTimeout(() => window._isSyncing = false, 100);
        }

        if (msg.type === 'chat') {
            appendChatMsg(msg.from, msg.text, false);
        }
    }

    function renderRoomMembers() {
        const container = document.getElementById('roomMembersList');
        if (!container) return;
        container.innerHTML = '';
        activeRoomMembers.forEach((m, i) => {
            const chip = document.createElement('div');
            chip.className = 'room-member-chip' + (m.isHost ? ' host' : '');
            chip.innerHTML = `
                <div class="room-member-chip-avatar">
                    <img src="${avatarUrl(m.seed || m.name)}" alt="${m.name}">
                    <div class="room-sync-ring"></div>
                </div>
                <span class="room-member-chip-name">${m.name}${m.isHost ? ' 👑' : ''}</span>
            `;
            container.appendChild(chip);
        });
    }

    function updateRoomNowPlaying(title, artist, art) {
        const titleEl  = document.getElementById('roomTrackTitle');
        const artistEl = document.getElementById('roomTrackArtist');
        const artEl    = document.getElementById('roomTrackArt');
        if (titleEl)  titleEl.textContent  = title || 'Waiting for host...';
        if (artistEl) artistEl.textContent = artist || '—';
        if (artEl && art) artEl.src = art;
    }

    // Intercept playTrack to broadcast in room
    const origPlayTrack = window._roomOrigPlayTrack;
    // Hook into the audio element's play event to broadcast to room members
    const mainAudio = document.getElementById('mainAudio');
    if (mainAudio) {
        mainAudio.addEventListener('play', () => {
            if (window._isSyncing || !currentRoomCode || !window.stompClient) return;
            const titleEl  = document.querySelector('.track-title');
            const artistEl = document.querySelector('.track-artist');
            const artEl    = document.querySelector('.track-art');
            window.stompClient.send(`/app/room/${currentRoomCode}/sync`, {}, JSON.stringify({
                type: 'play',
                url: mainAudio.src,
                title: titleEl?.textContent || 'Unknown',
                artist: artistEl?.textContent || 'Unknown',
                art: artEl?.src || '',
                timestamp: mainAudio.currentTime || 0
            }));
            updateRoomNowPlaying(titleEl?.textContent, artistEl?.textContent, artEl?.src);
        });

        mainAudio.addEventListener('pause', () => {
            if (window._isSyncing || !currentRoomCode || !window.stompClient) return;
            window.stompClient.send(`/app/room/${currentRoomCode}/sync`, {}, JSON.stringify({
                type: 'pause'
            }));
        });

        mainAudio.addEventListener('seeked', () => {
            if (window._isSyncing || !currentRoomCode || !window.stompClient) return;
            window.stompClient.send(`/app/room/${currentRoomCode}/sync`, {}, JSON.stringify({
                type: 'seek',
                timestamp: mainAudio.currentTime || 0
            }));
        });
    }

    // Room chat
    const roomChatInput   = document.getElementById('roomChatInput');
    const roomChatSendBtn = document.getElementById('roomChatSendBtn');

    function appendChatMsg(from, text, isSystem = false) {
        const container = document.getElementById('roomChatMessages');
        if (!container) return;
        const el = document.createElement(isSystem ? 'p' : 'div');
        if (isSystem) {
            el.className = 'chat-system-msg';
            el.textContent = text;
        } else {
            el.className = 'chat-msg' + (from === (profile.username || 'DJ_Glitch') ? ' own' : '');
            el.innerHTML = `<div class="chat-sender">${from}</div>${text}`;
        }
        container.appendChild(el);
        container.scrollTop = container.scrollHeight;
    }

    function sendChatMessage() {
        const text = roomChatInput?.value.trim();
        if (!text || !currentRoomCode) return;
        const from = profile.username || 'DJ_Glitch';
        appendChatMsg(from, text, false);
        if (window.stompClient) window.stompClient.send(`/app/room/${currentRoomCode}/sync`, {}, JSON.stringify({ type: 'chat', from, text }));
        if (roomChatInput) roomChatInput.value = '';
    }

    if (roomChatSendBtn) roomChatSendBtn.addEventListener('click', sendChatMessage);
    if (roomChatInput)   roomChatInput.addEventListener('keydown', e => { if(e.key === 'Enter') sendChatMessage(); });

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
const GATEWAY_URL = 'http://localhost:5000/api';

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
    
    // Fallback if hosted on GitHub Pages, if local server is down, or if offline demo mode is enabled
    const isOfflineMode = localStorage.getItem('offlineMode') !== 'false';
    const isMock = isOfflineMode || (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1');
    
    if (isMock) {
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
        urlObj = new URL(url, window.location.origin);
    }
    const path = urlObj.pathname;
    const method = (options.method || 'GET').toUpperCase();
    
    // Get currently logged-in user session
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { username: 'Guest' };
    if (!currentUser.connections) {
        const allMockUsers = ["Alex", "Sam", "Charlie", "Taylor", "Jordan", "Morgan"];
        currentUser.connections = allMockUsers.filter(u => u.toLowerCase() !== (currentUser.username || '').toLowerCase()).slice(0, 3);
    }
    if (!currentUser.pinnedPlaylists) currentUser.pinnedPlaylists = [];
    if (!currentUser.dedications) {
        const sender = currentUser.connections[0] || "Alex";
        currentUser.dedications = [
            {
                fromUser: sender,
                trackTitle: "Midnight City",
                trackArtist: "M83",
                trackArt: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop",
                trackUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/79/ce/9279ce85-bcf3-dfb5-b461-1250b73c9c9b/mzaf_7823528437021703273.plus.aac.p.m4a",
                message: `Hey ${currentUser.username}, this track matches your vibe today!`,
                timestamp: new Date().toISOString()
            }
        ];
    }
    
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
    const connCountEl = document.getElementById('profileConnectionsCount');
    const topbarUserEl = document.querySelector('.username');
    const topbarAvatarEl = document.getElementById('topbarAvatarImg');
    
    if (usernameEl) usernameEl.textContent = `@${user.username}`;
    if (bioEl && user.bio) bioEl.textContent = user.bio;
    if (avatarEl && user.avatarUrl) avatarEl.src = user.avatarUrl;
    if (connCountEl) connCountEl.textContent = (user.connections || []).length;
    if (topbarUserEl) topbarUserEl.textContent = user.username;
    if (topbarAvatarEl && user.avatarUrl) topbarAvatarEl.src = user.avatarUrl;
    
    // Render Pinned Playlists & Connections
    renderPinnedPlaylists(user);
    renderConnectionsList(user);
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
                    <img src="${plArt}" style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover;">
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
            homeContainer.innerHTML = '<p style="color: var(--text-muted); font-style: italic; margin: 1rem 0; font-weight: 500;">No pinned playlists. Pin a playlist from your profile or library to show it here!</p>';
        } else {
            pinned.forEach(plName => {
                const pl = window.allPlaylists.find(p => p.name === plName);
                const plArt = pl ? pl.artUrl : 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop';
                const div = document.createElement('div');
                div.className = 'quick-card pinned-card';
                div.style.cursor = 'pointer';
                div.innerHTML = `
                    <img src="${plArt}" alt="${plName}">
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

    const dedications = user.dedications || [];
    
    if (dedications.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted, #888); padding: 2rem;">No dedications received yet.</div>';
        return;
    }

    container.innerHTML = '';
    dedications.forEach(ded => {
        const card = document.createElement('div');
        card.className = 'dedication-full-card';
        card.setAttribute('data-sender', ded.fromUser);
        card.setAttribute('data-date', ded.timestamp);
        
        const dateStr = new Date(ded.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        card.innerHTML = `
            <div class="ded-art">
                <img src="${ded.trackArt || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop'}" alt="Track">
                <div class="ded-play" onclick="if(typeof window.playTrack==='function') window.playTrack('${ded.trackUrl}', '${ded.trackTitle.replace(/'/g, "\\'")}', '${ded.trackArtist.replace(/'/g, "\\'")}', '${ded.trackArt}')"><span class="material-icons">play_arrow</span></div>
                <button class="ded-queue-btn" title="Add to Queue"><span class="material-icons">playlist_add</span></button>
            </div>
            <div class="ded-info">
                <h3>${ded.trackTitle}</h3>
                <p class="ded-artist">${ded.trackArtist}</p>
                <div class="ded-meta">
                    <span class="ded-sender"><span class="material-icons" style="font-size: 0.9rem;">person</span> ${ded.fromUser}</span>
                    <span class="ded-date">${dateStr}</span>
                </div>
                <div class="ded-note">"${ded.message || 'Shared a track with you'}"</div>
            </div>
        `;
        container.appendChild(card);
    });
}

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

// Render Connections List
function renderConnectionsList(user) {
    if (!user) user = getLoggedInUser();
    const container = document.getElementById('connectionsContainer');
    if (!container) return;
    
    const connections = user.connections || [];
    if (connections.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted, #888); font-style: italic; margin: 0;">No connected friends yet. Search above to add connections!</p>';
        return;
    }
    
    container.innerHTML = '';
    connections.forEach(friend => {
        const div = document.createElement('div');
        div.style.cssText = 'display: flex; align-items: center; gap: 1rem; background: rgba(0,0,0,0.03); padding: 0.8rem 1.2rem; border-radius: 12px; border: 1px solid rgba(0,0,0,0.06); min-width: 220px;';
        div.innerHTML = `
            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(friend)}" style="width: 48px; height: 48px; border-radius: 50%; background: #fff; border: 2px solid var(--neon-pink, #ff69b4);" alt="${friend}">
            <div style="flex: 1;">
                <h4 style="margin: 0 0 2px; font-size: 0.95rem; color: var(--text-primary, #333);">@${friend}</h4>
                <p style="margin: 0; font-size: 0.75rem; color: #4CAF50; font-weight: bold;">● Online</p>
            </div>
            <button class="remove-conn-btn" data-friend="${friend}" style="background: transparent; border: none; cursor: pointer; color: var(--text-muted, #888);" title="Remove Connection">
                <span class="material-icons" style="font-size: 1.2rem;">person_remove</span>
            </button>
        `;
        container.appendChild(div);
    });
}

// Search Users
async function searchUsers(query) {
    const user = getLoggedInUser();
    const resultsContainer = document.getElementById('userSearchResults');
    if (!resultsContainer) return;
    
    if (!query || !query.trim()) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    resultsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem;">Searching users...</p>';
    
    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/search?query=${encodeURIComponent(query.trim())}&currentUser=${encodeURIComponent(user.username || '')}`);
        const matches = await res.json();
        
        if (!res.ok || matches.length === 0) {
            resultsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem;">No registered users found matching "' + query + '".</p>';
            return;
        }
        
        resultsContainer.innerHTML = '';
        matches.forEach(match => {
            const isConnected = (user.connections || []).includes(match.username);
            const div = document.createElement('div');
            div.style.cssText = 'display: flex; align-items: center; justify-content: space-between; background: #fff; padding: 0.8rem 1rem; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);';
            div.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <img src="${match.avatarUrl || 'https://api.dicebear.com/9.x/avataaars/svg?seed=' + match.username}" style="width: 40px; height: 40px; border-radius: 50%;">
                    <div>
                        <h4 style="margin: 0; font-size: 0.95rem; color: #333;">@${match.username}</h4>
                        <p style="margin: 0; font-size: 0.8rem; color: #888;">${match.email || 'AudioTrack Member'}</p>
                    </div>
                </div>
                ${isConnected 
                    ? '<span style="font-size: 0.85rem; font-weight: bold; color: #4CAF50; display: flex; align-items: center; gap: 0.2rem;"><span class="material-icons" style="font-size: 1rem;">check_circle</span> Connected</span>'
                    : `<button class="add-conn-btn" data-friend="${match.username}" style="padding: 0.4rem 0.9rem; border-radius: 6px; border: none; background: var(--text-primary, #333); color: #fff; font-weight: bold; font-size: 0.85rem; cursor: pointer;">+ CONNECT</button>`
                }
            `;
            resultsContainer.appendChild(div);
        });
    } catch (err) {
        console.error('Error searching users:', err);
        resultsContainer.innerHTML = '<p style="color: red; font-size: 0.9rem;">Failed to search users.</p>';
    }
}

// Add Connection
async function addConnection(friendUsername) {
    const user = getLoggedInUser();
    if (!user || !user.username) return;
    
    try {
        const res = await apiFetch(`${GATEWAY_URL}/users/${encodeURIComponent(user.username)}/connect`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ friendUsername })
        });
        const data = await res.json();
        if (res.ok) {
            user.connections = data.connections;
            setLoggedInUser(user);
            renderUserProfileUI(user);
            showSocialToast('Connection Added 🤝', `You are now connected with @${friendUsername}`);
            const searchInput = document.getElementById('userSearchInput');
            if (searchInput && searchInput.value) searchUsers(searchInput.value);
        }
    } catch (err) {
        console.error('Error adding connection:', err);
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
            user.connections = (user.connections || []).filter(c => c !== friendUsername);
            setLoggedInUser(user);
            renderUserProfileUI(user);
            showSocialToast('Connection Removed', `Disconnected from @${friendUsername}`);
        }
    } catch (err) {
        console.error('Error removing connection:', err);
    }
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
    
    // Add Connection
    const addBtn = e.target.closest('.add-conn-btn');
    if (addBtn) {
        const friend = addBtn.getAttribute('data-friend');
        if (friend) addConnection(friend);
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
        });
        document.querySelectorAll('.profile-tab-content').forEach(c => {
            c.style.display = 'none';
            c.classList.remove('active');
        });
        
        tabBtn.classList.add('active');
        tabBtn.style.borderTop = '2px solid var(--text-primary, #333)';
        const targetId = tabBtn.id.replace('tab-btn-', 'profile-tab-');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.style.display = 'flex';
            targetContent.classList.add('active');
        }
        
        // Refresh profile UI when switching tabs
        syncUserProfile();
    }

    // Create Room
    if (e.target.id === 'btnCreateRoom') {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        window.currentRoom = code;
        document.getElementById('room-setup').style.display = 'none';
        document.getElementById('room-active').style.display = 'block';
        document.getElementById('activeRoomCode').textContent = code;
        showSocialToast('Room Created', `Hosting room ${code}`);
    }

    // Join Room
    if (e.target.id === 'btnJoinRoom') {
        const code = document.getElementById('inputRoomCode').value.trim();
        if (code.length === 6) {
            window.currentRoom = code;
            document.getElementById('room-setup').style.display = 'none';
            document.getElementById('room-active').style.display = 'block';
            document.getElementById('activeRoomCode').textContent = code;
            window.socialChannel.postMessage({ type: 'USER_JOINED', room: code });
            showSocialToast('Room Joined', `Connected to room ${code}`);
        } else {
            alert('Please enter a valid 6-digit code');
        }
    }

    // Leave Room
    if (e.target.id === 'btnLeaveRoom') {
        window.currentRoom = null;
        document.getElementById('room-setup').style.display = 'flex';
        document.getElementById('room-active').style.display = 'none';
        document.getElementById('activeRoomCode').textContent = '------';
        showSocialToast('Room Left', 'Disconnected from sync');
    }

    // Share Playlist
    const shareBtn = e.target.closest('.share-playlist-btn');
    if (shareBtn) {
        const playlistName = shareBtn.getAttribute('data-playlist');
        window.socialChannel.postMessage({ type: 'SHARE_PLAYLIST', playlist: playlistName });
        showSocialToast('Playlist Shared!', `${playlistName} sent to connections.`);
    }
});

// Search input enter key support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.id === 'userSearchInput') {
        searchUsers(e.target.value);
    }
});

function showSocialToast(title, msg) {
    const lyricToast = document.getElementById('lyricToast');
    if (!lyricToast) return;
    document.getElementById('toastSong').textContent = title;
    document.getElementById('toastLyric').textContent = msg;
    lyricToast.classList.add('show');
    setTimeout(() => lyricToast.classList.remove('show'), 3000);
}

// Global listener for social channel
window.socialChannel.onmessage = (event) => {
    const data = event.data;
    
    if (data.type === 'SYNC_PLAYBACK' && window.currentRoom && data.room === window.currentRoom) {
        document.dispatchEvent(new CustomEvent('SYNC_PLAY_COMMAND', { detail: data }));
    }
    
    if (data.type === 'USER_JOINED' && window.currentRoom && data.room === window.currentRoom) {
        showSocialToast('User Joined', 'A friend connected to your room!');
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
            
            // Also populate masonry-gallery on discover view if it exists
            const masonryGallery = document.getElementById('masonry-gallery');
            if (masonryGallery) {
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
window.allPlaylists = [];

async function fetchPlaylists() {
    try {
        console.log('Fetching playlists from API Gateway...');
        const response = await apiFetch(`${GATEWAY_URL}/playlists`);
        if (response.ok) {
            window.allPlaylists = await response.json();
            console.log('Successfully fetched playlists from backend:', window.allPlaylists);
            renderPlaylists();
            renderPinnedPlaylists(); // Refresh pinned playlist displays
            if (typeof renderMyPlaylists === 'function') renderMyPlaylists(); // Refresh library displays
        }
    } catch (error) {
        console.error('Failed to fetch playlists from backend.', error);
    }
}

function renderPlaylists() {
    const userPlaylistsGrid = document.getElementById('user-playlists');
    const savedPlaylistsGrid = document.getElementById('saved-playlists-row');
    const profilePlaylistsGrid = document.getElementById('allPlaylistsContainer');

    if (userPlaylistsGrid) userPlaylistsGrid.innerHTML = '';
    if (savedPlaylistsGrid) savedPlaylistsGrid.innerHTML = '';
    if (profilePlaylistsGrid) profilePlaylistsGrid.innerHTML = '';

    window.allPlaylists.forEach(pl => {
        // Playlists Page card
        const card = document.createElement('div');
        card.className = 'curated-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <img src="${pl.artUrl}" alt="${pl.name}">
            <h3>${pl.name}</h3>
        `;
        card.addEventListener('click', () => {
            openPlaylistDetail(pl);
        });

        if (userPlaylistsGrid) {
            const clone = card.cloneNode(true);
            clone.addEventListener('click', () => openPlaylistDetail(pl));
            userPlaylistsGrid.appendChild(clone);
        }
        if (savedPlaylistsGrid) {
            const clone = card.cloneNode(true);
            clone.addEventListener('click', () => openPlaylistDetail(pl));
            savedPlaylistsGrid.appendChild(clone);
        }

        // Profile tab list item
        if (profilePlaylistsGrid) {
            const isPinned = getLoggedInUser().pinnedPlaylists.includes(pl.name);
            const profileCard = document.createElement('div');
            profileCard.className = 'playlist-card';
            profileCard.style.cssText = 'display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-panel); border-radius: 12px; transition: background 0.2s; cursor: pointer;';
            profileCard.innerHTML = `
                <img src="${pl.artUrl}" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                <div style="flex: 1;">
                    <h3 style="margin: 0 0 4px; font-size: 1rem; color: var(--text-main);">${pl.name}</h3>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">${pl.tracks.length} tracks</p>
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
                sharingPlaylistId = pl.id;
                const nameEl = document.getElementById('sharingPlaylistName');
                if (nameEl) nameEl.textContent = pl.name;
                updateShareFriendSelect();
                const shareModal = document.getElementById('sharePlaylistModal');
                if (shareModal) shareModal.style.display = 'flex';
                currentSharePlaylistData = pl;
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
    if (!pl.tracks || pl.tracks.length === 0) return;
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
            addToUserQueue(track.title, track.artist, track.artUrl);
        }
    }
    showSocialToast(`Playing Playlist 🎶`, `${pl.name}`);
}

function openPlaylistDetail(pl) {
    const mainContent = document.getElementById('playlistsMainContent');
    const detailSection = document.getElementById('playlistDetailSection');
    const artImg = document.getElementById('detailPlaylistArt');
    const nameHeader = document.getElementById('detailPlaylistName');
    const descPara = document.getElementById('detailPlaylistDesc');
    const trackCountPara = document.getElementById('detailPlaylistTrackCount');
    const tracksListContainer = document.getElementById('playlistTracksList');

    if (!mainContent || !detailSection || !artImg || !nameHeader || !descPara || !trackCountPara || !tracksListContainer) return;

    artImg.src = pl.artUrl;
    nameHeader.textContent = pl.name;
    descPara.textContent = pl.description || 'No description available.';
    trackCountPara.textContent = `${pl.tracks.length} TRACKS`;

    // Update Pin Button in Detail view
    const pinBtn = document.getElementById('btnPinPlaylistDetail');
    if (pinBtn) {
        const user = getLoggedInUser();
        const pinnedPlaylists = user.pinnedPlaylists || [];
        const isPinned = pinnedPlaylists.includes(pl.name);
        
        const pinIcon = pinBtn.querySelector('.material-icons');
        const pinText = pinBtn.querySelector('span:not(.material-icons)');
        
        if (isPinned) {
            pinBtn.style.color = 'var(--neon-pink)';
            pinBtn.style.borderColor = 'var(--neon-pink)';
            if (pinIcon) pinIcon.textContent = 'push_pin';
            if (pinText) pinText.textContent = 'UNPIN PLAYLIST';
        } else {
            pinBtn.style.color = 'var(--neon-cyan)';
            pinBtn.style.borderColor = 'var(--neon-cyan)';
            if (pinIcon) pinIcon.textContent = 'push_pin';
            if (pinText) pinText.textContent = 'PIN PLAYLIST';
        }

        pinBtn.onclick = async () => {
            await togglePinPlaylist(pl.name);
            openPlaylistDetail(pl);
        };
    }

    tracksListContainer.innerHTML = '';
    if (pl.tracks.length === 0) {
        tracksListContainer.innerHTML = '<p style="color: var(--text-muted); font-style: italic; padding: 1rem 0;">No tracks in this playlist yet.</p>';
    } else {
        pl.tracks.forEach((track, index) => {
            const row = document.createElement('div');
            row.style.cssText = 'display: flex; align-items: center; gap: 1rem; padding: 0.8rem; background: var(--bg-panel); border-radius: 10px; transition: background 0.2s; cursor: pointer; margin-bottom: 0.5rem;';
            row.innerHTML = `
                <div style="font-weight: 800; font-size: 1rem; color: var(--neon-cyan); width: 30px; text-align: center;">${index + 1}</div>
                <img src="${track.artUrl}" style="width: 50px; height: 50px; border-radius: 6px; object-fit: cover;">
                <div style="flex: 1;">
                    <h4 style="margin: 0; font-size: 0.95rem; color: #fff;">${track.title}</h4>
                    <p style="margin: 0; font-size: 0.8rem; color: var(--text-muted);">${track.artist}</p>
                </div>
                <button class="track-like-btn" style="background: transparent; border: none; cursor: pointer; color: var(--text-muted); margin-right: 0.5rem;" title="Like Track">
                    <span class="material-icons" style="font-size: 1.2rem;">favorite_border</span>
                </button>
                <button class="track-play-btn" style="background: transparent; border: none; cursor: pointer;">
                    <span class="material-icons" style="color: var(--text-main); font-size: 1.8rem;">play_circle_filled</span>
                </button>
            `;

            row.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    playTrack(track.url, track.title, track.artist, track.artUrl);
                }
            });

            const likeBtn = row.querySelector('.track-like-btn');
            likeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const icon = likeBtn.querySelector('.material-icons');
                const isLiked = icon.textContent === 'favorite';
                if (isLiked) {
                    icon.textContent = 'favorite_border';
                    likeBtn.style.color = 'var(--text-muted)';
                    showSocialToast('Removed from Liked Songs', track.title);
                } else {
                    icon.textContent = 'favorite';
                    likeBtn.style.color = 'var(--neon-pink)';
                    showSocialToast('Added to Liked Songs ❤️', track.title);
                }
            });

            row.querySelector('.track-play-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                playTrack(track.url, track.title, track.artist, track.artUrl);
            });

            tracksListContainer.appendChild(row);
        });
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
            mainContent.style.display = 'block';
        };
    }

    mainContent.style.display = 'none';
    detailSection.style.display = 'block';
}

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

setTimeout(fetchPlaylists, 1500);
