const person = {
  firstName: 'Joel',
  lastName: 'Cisneros',
  hobby: 'Surfing'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log(`The person's name is: ${fullName}`);

person.job = 'Full Stack Web Developer';
console.log(`The person's current job is: ${person.job}`);

person.previousJob = 'Highschooler';
console.log(person);
