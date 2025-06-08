const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// HTML without the projects-container element
const html = '<!DOCTYPE html><html><body></body></html>';

const dom = new JSDOM(html, { runScripts: 'dangerously' });

try {
  const scriptPath = path.join(__dirname, '../js/item_fiction.js');
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');
  const scriptEl = dom.window.document.createElement('script');
  scriptEl.textContent = scriptContent;
  dom.window.document.body.appendChild(scriptEl);
  console.log('Test passed: no exceptions thrown when projects-container is missing.');
} catch (error) {
  console.error('Test failed: an exception was thrown.');
  console.error(error);
  process.exit(1);
}

