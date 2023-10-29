const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the three letters you want in the logo:',
            validate: function (input) {
                if (input.length > 3) {
                    return "Vallue cannot exceed 3 letters";
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

function generateLogo(data) {
    // Create the SVG content based on the user input
  const { text, textColor, shape, shapeColor } = data;
  let svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  
  // Add the shape based on the user's choice
  if (shape === 'circle') {
    svgContent += `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
  } else if (shape === 'triangle') {
    svgContent += `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
  } else if (shape === 'square') {
    svgContent += `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
  }
  
  // Add the text
  svgContent += `<text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-size="24">${text}</text>`;
  
  svgContent += `</svg>`;
  
  return svgContent;
}