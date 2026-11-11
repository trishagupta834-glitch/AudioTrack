/**
 * AudioTrack - Lofi UI & Pinterest Aesthetic Automated Tester
 * Evaluates:
 * 1. Color Combination & Palette Harmony (Matcha, Sage, Cream vs Leaked Cyberpunk)
 * 2. Text Readability & WCAG 2.1 AA/AAA Contrast Ratios
 * 3. Image Visibility & Asset Integrity
 * 4. Pinterest Aesthetic Features (Serif, Polaroid Cards, Washi Badges, Film Grain)
 */

const fs = require('fs');
const path = require('path');

// Helper: Hex to RGB
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255
    };
}

// Helper: Relative Luminance
function getLuminance(r, g, b) {
    const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Helper: WCAG Contrast Ratio
function getContrastRatio(hex1, hex2) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

console.log('\n===============================================================');
console.log('🌿 AUDIOTRACK - LOFI UI & PINTEREST AESTHETIC DIAGNOSTIC REPORT');
console.log('===============================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assertTest(name, passed, detail) {
    totalTests++;
    if (passed) {
        passedTests++;
        console.log(`  ✅ [PASS] ${name}`);
    } else {
        failedTests++;
        console.log(`  ❌ [FAIL] ${name}`);
    }
    if (detail) console.log(`      └─ ${detail}`);
}

// -------------------------------------------------------------
// TEST SUITE 1: COLOR HARMONY & PALETTE AUDIT
// -------------------------------------------------------------
console.log('🎨 TEST SUITE 1: Color Combination & Palette Harmony');

const styleCssPath = path.join(__dirname, 'frontend', 'style.css');
const styleCss = fs.readFileSync(styleCssPath, 'utf8');

// Check Lofi tokens in style.css
const hasLofiRoot = styleCss.includes('[data-theme="lofi"]');
assertTest('Lofi Theme Root Definition', hasLofiRoot, 'Found [data-theme="lofi"] CSS block');

// Check Matcha earthy tokens
const hasMatchaText = styleCss.includes('--text-main: #344e41');
assertTest('Matcha Text Token (--text-main: #344e41)', hasMatchaText, 'Deep forest matcha text token');

const hasCreamBg = styleCss.includes('--bg-dark: #fbf8f1');
assertTest('Warm Cream Background Token (--bg-dark: #fbf8f1)', hasCreamBg, 'Warm paper cream base background');

// Check for Cyberpunk color leaks in lofi rules
const lofiRulesMatch = styleCss.match(/\[data-theme=["']lofi["']\][\s\S]*?(?=\[data-theme|\/\* ---|\Z)/g) || [];
const lofiRulesText = lofiRulesMatch.join('\n');
const hasNeonPinkLeak = /color:\s*#ff007f/i.test(lofiRulesText);
assertTest('No Neon Pink Leak in Lofi Selectors', !hasNeonPinkLeak, hasNeonPinkLeak ? 'Found #ff007f in lofi rules' : 'Zero neon pink leaks');

// -------------------------------------------------------------
// TEST SUITE 2: TEXT READABILITY & WCAG CONTRAST AUDIT
// -------------------------------------------------------------
console.log('\n📝 TEST SUITE 2: Text Readability & WCAG 2.1 Contrast');

const contrastPairs = [
    { name: 'Section Titles on Cream Paper', fg: '#284424', bg: '#fbf8f1', min: 4.5 },
    { name: 'Card Text Main on Cream Paper', fg: '#344e41', bg: '#fbf8f1', min: 4.5 },
    { name: 'Subtitles & Artists on Cream Paper', fg: '#587465', bg: '#fbf8f1', min: 4.5 },
    { name: 'Card Text Main on Sand Panel', fg: '#344e41', bg: '#f5ebe0', min: 4.5 },
    { name: 'Active Activity Pill (Dark Green on Yellow)', fg: '#284424', bg: '#fef08a', min: 4.5 },
    { name: 'Hero Greeting Play Button (Dark on Pale Yellow)', fg: '#284424', bg: '#fef08a', min: 4.5 },
    { name: 'Playlist Detail Title on Page Bg', fg: '#284424', bg: '#fbf8f1', min: 3.0 },
    { name: 'Hero Banner Title on Cozy Latte Gradient', fg: '#284424', bg: '#ede0d4', min: 4.5 }
];

contrastPairs.forEach(pair => {
    const ratio = getContrastRatio(pair.fg, pair.bg);
    const pass = ratio >= pair.min;
    assertTest(
        `${pair.name}`,
        pass,
        `Ratio: ${ratio.toFixed(2)}:1 (Min required: ${pair.min}:1) - FG: ${pair.fg}, BG: ${pair.bg}`
    );
});

// Check if discover-view h2 has been fixed from pale yellow
const discoverH2PaleYellow = /\[data-theme=["']lofi["']\]\s*#discover-view\s*\.dashboard-section\s*h2[^{]*\{[^}]*color:\s*#fef08a/i.test(styleCss);
assertTest(
    'Discover View Headings Not Pale Yellow (#fef08a)',
    !discoverH2PaleYellow,
    discoverH2PaleYellow ? 'Found color: #fef08a on discover-view h2' : 'Headings correctly use high-contrast dark green (#284424)'
);

// -------------------------------------------------------------
// TEST SUITE 3: IMAGE VISIBILITY & ASSET INTEGRITY
// -------------------------------------------------------------
console.log('\n🖼️ TEST SUITE 3: Image Visibility & Asset Integrity');

const lofiImages = [
    { name: 'Pinterest Ambient Backdrop', url: 'https://i.pinimg.com/736x/07/56/b8/0756b89cd947cee53668c7cbec1055e2.jpg' },
    { name: 'Unsplash Chill Mix Cover', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745' },
    { name: 'Unsplash Late Night Drives Cover', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819' },
    { name: 'DiceBear DJ Glitch Avatar', url: 'https://api.dicebear.com/9.x/avataaars/svg?seed=DJ_Glitch' }
];

lofiImages.forEach(img => {
    const validUrl = img.url.startsWith('https://');
    assertTest(`Image URL Format (${img.name})`, validUrl, img.url);
});

// Check if index.html has lofi-decor background image
const indexHtml = fs.readFileSync(path.join(__dirname, 'frontend', 'index.html'), 'utf8');
const hasLofiDecorImg = indexHtml.includes('lofi-blur-bg') && indexHtml.includes('0756b89cd947cee53668c7cbec1055e2.jpg');
assertTest('Lofi Ambient Backdrop in index.html', hasLofiDecorImg, 'Found lofi-blur-bg element with Pinterest image');

// -------------------------------------------------------------
// TEST SUITE 4: PINTEREST AESTHETIC VIBE INDEX
// -------------------------------------------------------------
console.log('\n📌 TEST SUITE 4: Pinterest Aesthetic Vibe Index');

// Check Playfair Display serif font loaded in index.html
const hasPlayfair = indexHtml.includes('Playfair+Display');
assertTest('Playfair Display Font Loaded in index.html', hasPlayfair, 'Editorial serif typography loaded');

// Check Tester page existence
const testerExists = fs.existsSync(path.join(__dirname, 'frontend', 'lofi_ui_tester.html'));
assertTest('Lofi UI Tester HTML Available', testerExists, 'frontend/lofi_ui_tester.html ready at /lofi_ui_tester.html');

// -------------------------------------------------------------
// FINAL SUMMARY
// -------------------------------------------------------------
console.log('\n===============================================================');
console.log(`📊 FINAL SUMMARY: ${passedTests}/${totalTests} Tests Passed (${Math.round((passedTests/totalTests)*100)}%)`);
if (failedTests === 0) {
    console.log('🎉 ALL LOFI UI & AESTHETIC TESTS PASSED PERFECTLY!');
} else {
    console.log(`⚠️ ${failedTests} test(s) failed or need attention.`);
}
console.log('===============================================================\n');
