let MongoClient = require('mongodb').MongoClient

let state = {
   db: null
}

exports.connect = (url, params, done) => {
    if (state.db) {
        return done();
    }

    MongoClient.connect(url, (err, db) => {
        if (err) {
            return done(err)
        }
        state.db = db.db('artistsDatabase');
        done();
    })
}

exports.get = function () {
    return state.db
}