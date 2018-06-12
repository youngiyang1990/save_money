var db = new PouchDB('save_money');

db.info().then(function (info) {
  console.log(info);
})

var doc = {
  "_id": "mittens",
  "name": "Mittens",
  "occupation": "kitten",
  "age": 3,
  "hobbies": [
    "playing with balls of yarn",
    "chasing laser pointers",
    "lookin' hella cute"
  ]
};

db.put(doc);

db.get('mittens').then(function (doc) {
  console.log(doc);
});