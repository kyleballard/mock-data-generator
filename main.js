var fs = require('fs');
var { Ecommerce } = require('./Ecommerce');

var ecom = new Ecommerce('yo!');
ecom.generateData();
// let sample = new Ecommerce('my Name');
// sample.print();

// var fs = require('fs');

// var faker= require('faker/index');


// // generate dataSet as example
// fs.writeFile(__dirname + '/dataSet.json',  JSON.stringify(faker.helpers.userCard()), function() {
//   console.log("dataSet generated successfully!");
// });
// // generate bigDataSet as example
// var bigSet = [];

// for(i = 20; i >= 0; i--){
//   bigSet.push(faker.helpers.userCard());
// };

// fs.writeFile(__dirname + '/bigDataSet.json',  JSON.stringify(bigSet), function() {
//   console.log("bigDataSet generated successfully!");
// });