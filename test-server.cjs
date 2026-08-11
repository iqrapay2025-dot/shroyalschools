const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log('Request:', req.url);
  
  // Serve images
  if (req.url.startsWith('/images/')) {
    const filePath = path.join(__dirname, 'dist' + req.url);
    console.log('Looking for:', filePath);
    
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath);
      const contentTypes = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
      };
      
      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      console.log('Serving:', filePath);
    } else {
      console.log('NOT FOUND:', filePath);
      res.writeHead(404);
      res.end('Not found');
    }
    return;
  }
  
  // Serve index.html for everything else
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(path.join(__dirname, 'dist/index.html')).pipe(res);
});

server.listen(9999, '127.0.0.1', () => {
  console.log('Test server running on http://127.0.0.1:9999');
  console.log('Test images at:');
  console.log('  http://127.0.0.1:9999/images/schbuilding.jpeg');
  console.log('  http://127.0.0.1:9999/images/Logo-Trans.png');
});
