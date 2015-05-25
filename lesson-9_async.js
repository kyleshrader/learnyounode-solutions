var async = require('async')
var request = require('request')

var urls = process.argv.slice(2,5)
var results = []

async.eachSeries(urls, httpGet, function(err) {
    if(err) return console.error(err)
    for(var i = 0; i < 3; i++) {
        console.log(results[i])
    }
})

function httpGet(url, cb) {
    request(url, function(err, response, body) {
        if (err) return console.error(err)
        results.push(body)
        cb()
    })
}
