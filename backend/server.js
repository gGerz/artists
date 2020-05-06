let express = require('express');
let bodyParser = require('body-parser');
let ObjectID = require('mongodb').ObjectID;
let db = require('./db');
let artistsController = require('./controllers/artists');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


app.get('/', (req, res) => {
    res.send('hello server')
})

app.get('/artists', artistsController.all)

app.get('/artists/:id', artistsController.findById)

app.post('/artists', artistsController.create)

app.put('/artists/:id', artistsController.update)

app.delete('/artists/:id', artistsController.delete)

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