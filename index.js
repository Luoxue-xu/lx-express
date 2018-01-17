const express = require('express')
const app = new express()
const routes = require('./routes')(app)

/**
 * app.get方法，用于指定不同的访问路径所对应的回调函数，这叫做“路由”（routing）
 */
app.use('/', (request, response) => {
    response.send('欢迎来到lx-express')
})

app.use('/about', (request, response) => {
    response.send('想了解我，那就快来呀')
})

app.listen(4000)