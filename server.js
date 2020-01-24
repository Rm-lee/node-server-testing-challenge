const express = require('express')
const server = express()

server.get('/api', (req,res) => {
    res.status(200).json({message:"working"})
})
module.exports = server