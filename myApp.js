module.exports = (app) => {
    app.get('/home', (req, res) => {
        res.send('Hello world');
    });
}