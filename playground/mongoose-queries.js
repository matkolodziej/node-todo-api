const { ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5aefac921cf7f934fad1c432';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todoById) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by id', todoById);
// }).catch((e)=>console.log(e));

const userId = '5aedaf4daf3a2f136259998b';

User.findById(userId).then((user)=> {
    if(!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
})