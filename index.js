const express = require('express')
const app = new express()

/**
 * all()所有请求都必须通过该中间件
 * 参数 * 表示对所有路径有效
 * get方法则是只有GET动词的HTTP请求通过该中间件，它的第一个参数是请求的路径
 */
app.all('*', (request, response, next) => {
    response.writeHead(200, {'Content-type': 'text/plain'})
    next()
})

app.get('/', (request, response, next) => {
    response.end('index')
})

/**
 * 可以匹配/about/luoxue, request.params.name = luoxue
 * 最后跟 ? 表示参数可选
 */
app.get('/about/:name?', (request, response) => {
    response.end(request.params.name)
})

app.get('*', (request, response) => {
    response.end('404')
})

app.listen(4000)