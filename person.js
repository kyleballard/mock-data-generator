var faker = require('faker/index');

var randomCard = faker.helpers.userCard();
console.log(JSON.stringify(randomCard, null, 2));