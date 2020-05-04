let db = require('../db')
let ObjectID = require('mongodb').ObjectID;

exports.all = (cb) => {
    db.get().collection('artists').find().toArray((err, docs) => {
        cb(err, docs);
    })
}

exports.findById = (id, cb) => {
    db.get().collection('artists').findOne({_id: ObjectID(id)},(err, doc) => {
        cb(err, doc)
    })
}

exports.create = (artist, cb) => {
    db.get().collection('artists').insertOne(artist, (err, result) => {
        cb(err, result)
    })
}

exports.update = (id, newData, cb) => {
    db.get().collection('artists').updateOne({ _id: ObjectID(id)},{ $set: { name: newData } }, (err, result) => {
        cb(err, result)
    })
}

exports.delete = (id, cb) => {
    db.get().collection('artists').deleteOne({ _id: ObjectID(id)}, (err, result) => {
        cb(err, result)
    })
}
