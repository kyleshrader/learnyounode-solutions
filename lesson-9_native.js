var http = require('http')

var urls = process.argv.slice(2,5)


http.get(url, writeResponse)

var strs = []
var curr = 0
function writeResponse (response) {
    response.setEncoding('utf8')
    response.on("data", function (data) {
        strs[curr] = str[curr] + data
    })
    response.on("end", function () {
        console.log(strs[curr])
    })
}
