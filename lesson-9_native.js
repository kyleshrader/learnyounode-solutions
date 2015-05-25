var http = require('http')

var urls = process.argv.slice(2,5)

var strs = ["","",""]
var curr = 0

http.get(urls[curr], writeResponse)

function writeResponse (response) {
    response.setEncoding('utf8')
    response.on("data", function (data) {
        strs[curr] = strs[curr] + data
    })
    response.on("end", function () {
        console.log(strs[curr])
        if (++curr < urls.length) {
            http.get(urls[curr], writeResponse)
        }
    })
}
