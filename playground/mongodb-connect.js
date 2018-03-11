const {MongoClient, ObjectID} = require("mongodb");

//takes two arguments the first a url and the second a callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");

    // user to be passed into mongodb
    let User = {
        name: "Shar",
        age: 42,
        location: "Orem, Utah"
    }



    // accessing the collection of db and inserting one document into it
    // db.collection('Users', (err, db) => {
    //     if(err){
    //         return console.log("unable to insert into the collection");
    //     }
    //     db.insertOne(User, (err, res) => {
    //         if(err){
    //             return console.log("Could not add user");
    //         }
    //         console.log(JSON.stringify(res.ops, undefined, 2));
    //         console.log(res.ops[0]._id.getTimestamp());
    //     })
    // });
    // db.close();
    // db.collection('Todos').insertOne({
    //   test:"Something to do",
    //   completed: false  
    // }, (err, res) => {
    //     if(err){
    //         return console.log("Could not insert Todo", err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // })

    // db.close();

    // insert new doc into the users collection 
    // properties name, age, location
});