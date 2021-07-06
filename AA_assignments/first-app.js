const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment</title></head>');
    res.write('<body>');
    res.write('<h1>Hi there!</h1>');
    res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
    res.write(
      '<form method="POST" action="create-user"><input type="text" name="username"><button type="submit">Send user</button></form>'
    );
    res.write('</body>');
    res.write('</html>');

    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsed = Buffer.concat(body).toString();
      console.log(parsed.split('=')[1]);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
});

server.listen(3000);
