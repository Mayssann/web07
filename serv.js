const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030 // process envirement port 

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT)