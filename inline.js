var faker = require('faker/index');

console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
console.log(faker.fake("{{address.streetAddress}}"));
console.log(faker.fake("{{address.city}}, {{address.state}} {{address.zipCode}}"));