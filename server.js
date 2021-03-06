const { response } = require('express')
const express = require('express')
const path = require('path')

const app = express()

const port = 3001

app.use(express.static(path.join(__dirname,'./static')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'.static/index.html'))
})

app.get('/palestrantes', (req, res) => {
    res.sendFile(path.join(__dirname,'.static/palestrantes.html'))
})

app.listen(port, () => {
    console.log(`Express escutando na porta ${port}`)
})