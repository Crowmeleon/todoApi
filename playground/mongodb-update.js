const {MongoClient, ObjectID} = require("mongodb");

//takes two arguments the first a url and the second a callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");
    
    let findQuery = {
        _id: new ObjectID("5a4b867f31ff2a4d48954914")
    }

    // make sure to use update operators
    let updatedData = {
        $set: {
            name: "Peter Martinez"
        },
        $inc: {
            age: 1
        }
    }

    db.collection("Users").findOneAndUpdate(findQuery, updatedData, {returnOriginal: false}).then(res => {
        console.log(res.value);
    })

    // db.collection("Todos").findOneAndUpdate(findQuery, updatedData, {returnOriginal: false}).then(res => {
    //     console.log(res);
    // });

});