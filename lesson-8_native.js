var http = require('http')

var url = process.argv[2]

http.get(url, writeResponse)

var str = ""
function writeResponse (response) {
    response.setEncoding('utf8')
    response.on("data", function (data) {
        str = str + data
    })
    response.on("end", function () {
        console.log(str.length)
        console.log(str)
    })
}
