const express = require('express')
const app = new express()

/**
 * 中间件（middleware）就是处理HTTP请求的函数
 * @param {*} request HTTP请求
 * @param {*} response HTTP回应
 * @param {*} next 调用下一个中间件，回调函数
 */
const uselessMiddleware = (request, response, next) => {
    console.log(request.url)
    next()
}

app.use('/', uselessMiddleware)
app.use('/about', (request, response) => {
    response.send('about')
})

app.listen(4000)