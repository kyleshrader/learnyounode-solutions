var http = require('http')

var server = http.createServer(function (req, res) {
    if (req.method == 'POST') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        var body = ''
        req.on('data', function(data) {
            body += data.toString().toUpperCase()
        })
        req.on('end', function(data) {
            res.end(body)
        })
    } else {
        res.writeHead(405)
        res.end()
    }
})
server.listen(process.argv[2])
