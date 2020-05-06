let Artists = require('../models/artists');

exports.all = (request, response) => {
    Artists.all((err, docs) => {
        if (err) {
            console.log(err)
            return response.sendStatus(500)
        }
        response.send(docs)
    })
}

exports.findById = (request, response) => {
    Artists.findById(request.params.id, (error, doc) => {
        if (error) {
            return response.sendStatus(500)
        }
        response.send(doc)
    })
}

exports.create = (request, response) => {
    let artist = {
        name: request.body.name,
        photo: request.body.photo,
        genre: request.body.genre,
        track: request.body.track,
        like: request.body.like
    };
    Artists.create(artist, (error, doc) => {
        if (error) {
            return response.sendStatus(500)
        }
        response.sendStatus(200)
    })
}

exports.update = (request, response) => {
    let queryArtistId = request.params.id;
    let newArtistName = request.body.name;
    Artists.update(queryArtistId, newArtistName,(error, doc) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500)
        }
        response.sendStatus(200)
    })
}

exports.delete = (request, response) => {
    let queryArtistId = request.params.id;
    Artists.delete(queryArtistId,(error, doc) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500)
        }
        response.sendStatus(200)
    })
}