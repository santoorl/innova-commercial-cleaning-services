// generateMoveInOutList.js
const fs = require('fs');
const path = require('path');

const folderPath = './public/images/services/moveinmoveout';
const outputPath = './src/utils/loadMoveImages.js';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.error('❌ Error leyendo la carpeta:', err);
  }

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const imagePaths = files
    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
    .map(file => `"${path.posix.join('/images/services/moveinmoveout', file)}"`);

  const output = `const moveInMoveOutImages = [\n  ${imagePaths.join(',\n  ')}\n].sort(() => 0.5 - Math.random());\n\nexport default moveInMoveOutImages;\n`;

  fs.writeFileSync(outputPath, output, 'utf8');
  console.log('✅ Archivo generado exitosamente: src/utils/loadMoveImages.js');
});
