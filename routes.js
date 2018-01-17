module.exports = app => {
    app.get('/', (request, response) => {
        response.send('index')
    })
    app.get('/about', (request, response) => {
        response.send('about')
    })
}