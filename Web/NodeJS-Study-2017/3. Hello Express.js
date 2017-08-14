const express = require('express')
const os=require('os')
const app = express()

app.get('/', function(req, res) {
  res.send(os.hostname()+os.EOL+os.arch()+os.cpus()+os.platform()+os.uptime())
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
