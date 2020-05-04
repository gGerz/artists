var express = require('express');
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var artistsController = require('./controllers/artists');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('hello server')
})

app.get('/artists', artistsController.all)

app.get('/artists/:id', artistsController.findById)

app.post('/artists', artistsController.create)

app.put('/artists/:id', artistsController.update)

app.delete('/artists/:id', (req, res) => {
    let queryArtistId = req.params.id
    db.get().collection('artists').deleteOne(
        { _id: ObjectID(queryArtistId)},
        (err, result) => {
            if (err) {
                console.log(err)
                return res.sendStatus(500)
            }
            res.sendStatus(200)
    })
})

db.connect(
    'mongodb://localhost:27017/artists',{
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
(err) => {
    if (err) {
        return console.log(err);
    }
    app.listen(3013, () => {
        console.log('Сервер успешно запущен и подключен к БД')
    })
})