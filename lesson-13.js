var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    if(req.method == 'GET') {
        var parsed = url.parse(req.url, true)
        var path = parsed['pathname']
        if (path === '/api/parsetime') {
            res.writeHead(200, {'content-type': 'application/json'})
            var date = new Date(parsed['query']['iso'])
            var time = {
                'hour': date.getHours(),
                'minute': date.getMinutes(),
                'second': date.getSeconds()
            }
            res.end(JSON.stringify(time))
        } else if (path === '/api/unixtime') {
            res.writeHead(200, {'content-type': 'application/json'})
            var date = new Date(parsed['query']['iso'])
            var ms = {'unixtime': date.getTime()}
            res.end(JSON.stringify(ms))
        } else {
            res.writeHead(404)
            res.end()
        }
    } else {
        res.end()
    }
})
server.listen(process.argv[2])
