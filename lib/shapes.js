class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }

  render() {
    throw new Error('The render() method must be implemented in the child class.');
  }
}

// renders the circle shape
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />`;
  }
}

// renders the triangle shape
class Triangle extends Shape {
  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`;
  }
}

// renders the square shape
class Square extends Shape {
  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
  }
}

// exports the classes for use in index.js
module.exports = {
  Circle,
  Triangle,
  Square,
};