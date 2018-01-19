const express = require('express')
const app = new express()

app.get('/', (request, response, next) => {
    response.send(request.ip)
})

app.listen(4000)