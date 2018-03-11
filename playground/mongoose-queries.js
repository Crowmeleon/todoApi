const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

var id = "5aa4fad872527708a046e81e";

if(!ObjectID.isValid(id)){
    return console.log("The id is not valid");
}

User.findById(id).then(user => {
    if(!user){
        console.log("That user does not exist");
    }
    console.log("User", user);
},  err => console.log(err)).catch(err => console.log(err));

// var id = '5aa50c9b2a9ff6bc62f643c5';

// if(!ObjectID.isValid(id)){
//     return console.log("Id not valid!")
// }

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {1
//     console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//     if(!todo){
//         return console.log("Id not found");
//     }
//     console.log('Todo', todo);
// }).catch(e => console.log(e));