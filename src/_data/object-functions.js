const objects = require('./objects.js');

const objectsArray = objects.array;

console.log(objectsArray);

function newLineForProps(currObj, numOf) {
  const hasAnother = currObj < numOf;
  return hasAnother ? '\n  ' : '';
}

function objectNameToString(obj) {
  return Object.keys(obj)[0];
}

function buildObjectProps(obj) {
  const numberOfProps = Object.keys(obj).length;
  let currentPropNum = 0;
  let output = '';
  for (const [key, value] of Object.entries(obj)) {
    currentPropNum++;
    output += `${key}: ${value}`;
    output += newLineForProps(currentPropNum, numberOfProps);
  }
  return output;
}

// console.log(buildObjectProps(objectsArray));

const objectToString = (objName, objProps) =>
  `const ${objName} = {\n  ${objProps}\n};\n\n`;

function logObjectsAsString() {
  let objectsString = '';
  objectsArray.forEach((currObj) => {
    const objectName = objectNameToString(currObj);
    const objectProps = buildObjectProps(currObj);
    objectsString += objectToString(objectName, objectProps);
  });
  console.log(objectsString);
  return objectsString;
}

function objectArrayBuilder() {
  const objectArray = [];
  objectsArray.forEach((currObj) => {
    const objName = objectNameToString(currObj);
    const objProps = buildObjectProps(currObj);
    const objString = objectToString(objName, objProps);
    objectArray.push({objString});
  });
  console.log(objectArray);
  return objectArray;
}

logObjectsAsString();

module.exports = {
  eleventyComputed: {
    templateString: 'This is a string!',

    // objectStrings: objectStringArray,
  },
};
