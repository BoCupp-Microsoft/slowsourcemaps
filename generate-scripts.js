const fs = require('fs');

// Create scripts directory
fs.mkdirSync('scripts', { recursive: true });

// Generate 100 script files
for (let i = 1; i <= 100; i++) {
    const uniqueHash = Date.now() + '_' + i + '_' + Math.random().toString(36).substring(7);
    const content = `// Script ${i} - Unique hash content: ${uniqueHash}
function script${i}() {
  console.log('Script ${i} loaded');
  return ${i * 17 + i};
}
script${i}();
//# sourceMappingURL=https://local.teams.office.com/sourcemaps/script${i}.js.map
`;
    fs.writeFileSync(`scripts/script${i}.js`, content);
}

console.log('Generated 100 script files in ./scripts/');