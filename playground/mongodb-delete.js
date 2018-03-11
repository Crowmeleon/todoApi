const {MongoClient, ObjectID} = require("mongodb");

//takes two arguments the first a url and the second a callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");
    
    let dupesQuery = {
        name:'Peter Martinez' 
    }

    let targetQuery = {
        _id: new ObjectID("5a4b87ba5625f10630761bcd")
    }

    db.collection("Users").deleteMany(dupesQuery).then(res => {
        console.log(res);
    });

    db.collection("Users").deleteOne(targetQuery).then(res => {
        console.log(res);
    })
    //deleteMany 
    // db.collection("Todos").deleteMany(findQuery).then(res => {
    //     console.log(res);
    // });
    //deleteOne
    // db.collection("Todos").deleteOne(findQuery).then(res => {
    //     console.log(res);
    // })
    //findOneAndDeletey
    // db.collection("Todos").findOneAndDelete(findQuery).then( res => {
    //     console.log(res.value);
    // })

});