const { Circle, Triangle, Square } = require('./shapes.js');

// tests that a circle will be made and that the color will be set to blue
test('Circle render method should return the correct SVG string', () => {
  const circle = new Circle();
  circle.shapeColor = 'blue';
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});

// tests that a triangle will be made and that the color will be set to red
test('Triangle render method should return the correct SVG string', () => {
  const triangle = new Triangle();
  triangle.shapeColor = 'red';
  expect(triangle.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="red" />');
});

// tests that a square will be made and that the color will be set to green
test('Square render method should return the correct SVG string', () => {
  const square = new Square();
  square.shapeColor = 'green';
  expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
});