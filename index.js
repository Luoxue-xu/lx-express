const express = require('express')
const app = new express()

/**
 * express.static 负责托管 Express 应用内的静态资源
 * 第一个参数指的是静态资源文件所在的根目录
 */
app.use(express.static(__dirname + '/public'))

app.listen(4000)