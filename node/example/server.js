var http = require('http')
var date = require('relative-date')

var started = new Date()
var cnt = 0

var tick = function() {
  cnt++
  return '000000'.slice(cnt.toString().length)+cnt
}

var message = function() {
  return '#'+tick()+' - process ('+process.pid+') was started '+date(started)
}

var log = function() {
  console.log(message())
}

var server = http.createServer(function(request, response) {
  response.end(message+'\n')
})

server.listen(process.env.PORT || 10000)

log()
setInterval(log, 1000)
