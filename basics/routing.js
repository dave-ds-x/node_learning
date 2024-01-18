const http = require('http')

function rqListener(req, res) {
    const url = req.url
    const method = req.method

    res.setHeader('Content-Type', 'text/html')

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Homepage</title></head>')
        res.write('<body><h1>Homepage Route</h1>')
        res.write('<a href="/message">Go to "Message"</a>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/message') {
        res.write('<html>')
        res.write('<head><title>Message</title></head>')
        res.write('<body><h1>Hi, this is the "Message Route"</h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

    res.write('<html>')
    res.write('<body>Hello</body>')
    res.write('</html>')
    return res.end()
}

const server = http.createServer(rqListener);

server.listen(3001)