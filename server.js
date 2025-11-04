const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public/images');

http.createServer((req, res) => {
    // Example: if request is for '/logo.png', the path will be 'public/images/logo.png'
    const requestedFile = path.join(PUBLIC_DIR, req.url); 

    // Determine the MIME type (simple example, you'd want a more robust solution)
    let contentType = 'image/jpeg'; 
    if (path.extname(requestedFile) === '.png') {
        contentType = 'image/png';
    }

    // Check if the file exists and is accessible
    fs.promises.access(requestedFile)
        .then(() => {
            // File found: set headers and stream
            res.writeHead(200, { 'Content-Type': contentType });
            fs.createReadStream(requestedFile).pipe(res);
        })
        .catch(() => {
            // File not found (or other error): send 404
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404: Not Found (Try adding an image to your public/images folder)');
        });
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// Don't forget to put an image (e.g., logo.png) inside the public/images folder!
