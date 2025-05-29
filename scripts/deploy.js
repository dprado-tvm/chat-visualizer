const fs = require('fs');
const path = require('path');

// Create docs directory if it doesn't exist
if (!fs.existsSync('docs')) {
    fs.mkdirSync('docs');
}

// Copy files from public to docs
fs.readdirSync('public').forEach(file => {
    fs.copyFileSync(
        path.join('public', file),
        path.join('docs', file)
    );
});

console.log('Files copied to docs directory for GitHub Pages deployment');