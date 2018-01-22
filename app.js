const express = require('express')
const path = require('path')
const app = express()
const user = require('./api/user')

// 根目录
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html')
})

// 关于我们
app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

// 文章
app.get('/article', (request, response) => {
    response.sendFile(__dirname + '/views/article.html')
})

app.listen(4000)