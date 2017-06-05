// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');
var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('無法連接MongoDB Server');
  }
  console.log('連接到MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // }, (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert todo', err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  //Insert new doc in to Users (name, age, location)
  // db.collection ('Users').insertOne({
  //   name:'Luke',
  //   age:22,
  //   location: 'Taiwan'
  // }, (err, result) =>{
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
