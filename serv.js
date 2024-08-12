const express = require('express')
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 3030 // process envirement port 
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/data', function (req, res) {
    var data =[
        {id:11 ,name:'mysn' },
        {id:12 ,name:'ymn' },
        {id:13 ,name:'jana' }
    ]
    res.send(data)
  })

app.listen(PORT)