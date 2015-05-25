var request = require('request')

var url = process.argv[2]

request(url, function(err, response, body) {
    if (err) return console.error(err)
    console.log(body.length)
    console.log(body)
})
