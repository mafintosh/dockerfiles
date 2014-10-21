var http = require('http')
var date = require('relative-date')
var minimist = require('minimist')

var argv = minimist(process.argv)
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

server.listen(argv.port || process.env.PORT || 10000, function() {
  console.log('Server is listening on port %s\n', server.address().port)
  log()
  setInterval(log, 1000)
})

