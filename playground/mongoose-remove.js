const { ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove({})
// Todo.FindByIdAnd Remove

Todo.findByIdAndRemove('5af1df7564198971d8a47adf').then((todo) => {
    console.log(todo);
});