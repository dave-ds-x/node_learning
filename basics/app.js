const http = require('http')

function rqListener(req, res) {
    console.log(res)
    console.log(res.url, req.method, req.headers)

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body>Hello</body>')
    res.write('</html>')
    res.end()

}

const server = http.createServer(rqListener);

server.listen(3001)