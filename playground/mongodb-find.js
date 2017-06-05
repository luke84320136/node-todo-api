// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('無法連接MongoDB Server');
  }
  console.log('連接到MongoDB Server');

// db.collection('Todos').find({
//    _id: new ObjectID('593416fd43c7a20509642127')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=> {
//   console.log('Unable to fetch todos', err);
// });

// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos count: ${count}`);
// }, (err)=> {
//   console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({
  name: 'Luke'
}).toArray().then((docs)=>{
  console.log('Users');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err)=> {
  console.log('Unable to fetch todos', err);
});
  // db.close();
});
