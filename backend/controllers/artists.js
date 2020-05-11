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
    if (!request.body.name || !request.body.genre || !request.body.track) {
        response.send({
            success: true,
            text: 'Заполните все обязательные поля!'
        })
        return false
    }
    let artist = {
        name: request.body.name,
        photo: request.body.photo ? request.body.photo : null,
        genre: request.body.genre,
        track: request.body.track,
        like: false
    };
    Artists.create(artist, (error, doc) => {
        if (error) {
            return response.sendStatus(500)
        }
        response.send({
            success: true,
            text: 'Artist was added',
            data: artist
        })
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
    console.log(response)
    console.log(request)
    let queryArtistId = request.params.id;
    Artists.delete(queryArtistId,(error, doc) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500)
        }
        response.send({
            success: true,
            text: 'Artist was deleted'
        })
    })
}

exports.like = (request, response) => {
    let queryArtistId = request.params.id;
    let newLikeState = request.body.like === 'true';
    Artists.likeArtist(queryArtistId, newLikeState,(error, doc) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500)
        }
        response.send({
            success: true,
            newLikeState: newLikeState,
            text: 'Artist was liked'
        })
    })
}