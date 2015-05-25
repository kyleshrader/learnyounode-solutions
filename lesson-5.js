var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = ("." + process.argv[3]).toLowerCase()

fs.readdir(dir, listFiles)

function listFiles(err, list) {
    for(var i = 0; i < list.length; i++) {
        var fn = list[i]
        var ext2 = path.extname(fn).toLowerCase()
        if (!ext2.localeCompare(ext)) {
            console.log(fn)
        }
    }
}
