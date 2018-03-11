const {MongoClient, ObjectID} = require("mongodb");

//takes two arguments the first a url and the second a callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");


    db.collection('Users').insertOne({
      name:"Peter Martinez",
      age: 24,
      location: "Orem, Utah" 
    }, (err, res) => {
        if(err){
            return console.log("Could not insert Todo", err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    })

    db.close();
});