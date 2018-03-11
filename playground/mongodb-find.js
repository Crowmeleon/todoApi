const {MongoClient, ObjectID} = require("mongodb");

//takes two arguments the first a url and the second a callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");
    
    let findQuery = {
        name: "Andrea Martinez"
    }

    db.collection("Users").find(findQuery).toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log("An error occured", err);
    })

    // use find() and pass it arguments to determine 
    // db.collection("Todos").find().count().then((count)=> {
    //     console.log(`Todos count: ${count}`);
    // }, err => {
    //     if(err){
    //         console.log("Unable to fetch");
    //     }
    // })
});