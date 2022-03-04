function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(5, 5);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var sumproduct = addAndMultiplyBy5(10, 5);
console.log('the sum and product:', sumproduct);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var productquotient = multiplyAndDivideBy5(35, 10);
console.log('the product and quotient:', productquotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('the difference:', difference);

function getCircleCircumference(radius) {
  return Math.PI * (radius * 2);
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Joel', 'Cisneros');
console.log('full name:', fullName);

function cube(x) {
  return x * x * x;
}

var cubed = cube(5);
console.log('cubed:', cubed);
