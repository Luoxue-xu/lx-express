const express = require('express')
const path = require('path')
const app = express()

// 设置 port 变量，访问端口
app.set('port', process.env.PORT || 4000)

// 设置 views 变量，视图存放的位置
app.set('views', path.join(__dirname, 'views'))

// 配置路由
app.get('/', (request, response) => {
    response.send('index')
})

app.use(express.static(path.join(__dirname, 'public')))
app.listen(app.get('port'))