const express = require('express')
const app = new express()

/**
 * response.redirect 重定向
 */
app.get('/', (request, response, next) => {
    response.redirect('/about')
})

/**
 * response.sendFile 发送文件
 */
app.get('/about', (request, response, next) => {
    response.sendFile('/public/img/bg.jpg')
    response.end('about')
})

app.listen(4000)