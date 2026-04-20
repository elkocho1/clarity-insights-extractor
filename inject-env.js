const fs = require('fs');

// Read index.html
let html = fs.readFileSync('index.html', 'utf8');

// Inject the API key from environment variable into the HTML
const apiKey = process.env.ANTHROPIC_API_KEY || '';
html = html.replace('__ANTHROPIC_API_KEY__', apiKey);

// Write to dist folder
if (!fs.existsSync('dist')) fs.mkdirSync('dist');
fs.writeFileSync('dist/index.html', html);
console.log('Build complete - API key injected:', apiKey ? 'YES' : 'NO (not set)');
