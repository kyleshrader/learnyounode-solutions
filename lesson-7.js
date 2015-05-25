var http = require('http')

var url = process.argv[2]

http.get(url, writeResponse)

function writeResponse (response) {
    response.setEncoding('utf8')
    response.on("data", function (data) {
        console.log(data)
    })
}
