//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb') ;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5adfd0316487bbc1f100fe08")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });
    

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5adfcff250133eaab5f34613")
    }, {
        $set: {
            name: 'Mat'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });
    //db.close();
});