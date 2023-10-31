const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the three letters you want in the logo:',
            validate: function (input) {
                if (input.length > 3) {
                    return "Value cannot exceed 3 letters";
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color you want for the text:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select which shape you want your logo to be:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color you want for the shape:',
        },
    ])
    .then((answers) => {
        const logoContent = generateLogo(answers);
        writeToFile('logo.svg', logoContent);
});

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => 
        err ? console.log(err) : console.log('Generated logo.svg')
    );
}

// Ai learning assistant helped with this
function generateLogo(data) {
  const { text, textColor, shape, shapeColor } = data;
  let svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  
  if (shape === 'circle') {
    const circle = new Circle(shapeColor);
    svgContent += circle.render();
  } else if (shape === 'triangle') {
    const triangle = new Triangle(shapeColor);
    svgContent += triangle.render();
  } else if (shape === 'square') {
    const square = new Square(shapeColor);
    svgContent += square.render();
  }
  
  svgContent += `<text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-size="24">${text}</text>`;
  
  svgContent += `</svg>`;
  
  return svgContent;
}