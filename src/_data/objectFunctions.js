const objects = require('./objects.js');

const objectsArray = objects.array;

function newLineForProps(obj, numOf) {
  const hasAnother = obj < numOf;
  return hasAnother ? '\n  ' : '';
}

function addQuotesToPropValues(val) {
  const isValString = typeof val === 'string';
  return isValString ? `'${val}'` : `${val}`;
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
    const valueWithQuotes = addQuotesToPropValues(value);
    output += `${key}: ${valueWithQuotes}`;
    output += newLineForProps(currentPropNum, numberOfProps);
  }
  return output;
}

const objectToString = (objName, objProps) =>
  `const ${objName} = {\n  ${objProps}\n};\n\n`;

function objectsStringBuilder() {
  let objectsString = '';
  objectsArray.forEach((currObj) => {
    const objectName = objectNameToString(currObj);
    const objectProps = buildObjectProps(currObj);
    objectsString += objectToString(objectName, objectProps);
  });
  return objectsString;
}

function objectsArrayBuilder() {
  const objectArray = [];
  objectsArray.forEach((currObj) => {
    const objName = objectNameToString(currObj);
    const objProps = buildObjectProps(currObj);
    const objString = objectToString(objName, objProps);
    objectArray.push({objString});
  });
  return objectArray;
}

const objectsStringArray = objectsArrayBuilder();
console.log(objectsStringArray);

module.exports = {
  eleventyComputed: {},
};
