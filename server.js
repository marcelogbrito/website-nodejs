const { response } = require('express')
const express = require('express')

const app = express()

const port = 3001

app.get('/', (req, res) => {
    res.send("Olá express")
})

app.listen(port, () => {
    console.log(`Express escutando na porta ${port}`)
})