const objectsFile = require('./objects.js');

const objectsFileArray = objectsFile.array;

function objectNameToString(obj) {
  return Object.keys(obj)[0];
}

const objectToString = (objName, objProps) =>
  `const ${objName} = {\n  ${objProps}\n};\n\n`;

function newLineForProps(obj, numOf) {
  const hasAnother = obj < numOf;
  return hasAnother ? '\n  ' : '';
}

function addQuotesToPropValues(val) {
  const isValString = typeof val === 'string';
  return isValString ? `'${val}'` : `${val}`;
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

function objectStringBuilder() {
  const objectArray = [];
  objectsFileArray.forEach((currObj) => {
    const objName = objectNameToString(currObj);
    const objProps = buildObjectProps(currObj);
    const objString = objectToString(objName, objProps);
    objectArray.push({objString});
  });
  return objectArray;
}

function flattenObjectsArray() {
  const objects = [];
  const objectsArray = objectStringBuilder();
  for (let i = 0; i < objectsArray.length; i++) {
    const object = objectsArray[i];
    for (const property in object) {
      if (Object.prototype.hasOwnProperty.call(object, property)) {
        objects.push(object[property]);
      }
    }
  }
  return objects;
}

const objectStrings = flattenObjectsArray();
console.log(objectStrings);

module.exports = {
  eleventyComputed: {
    objectStrings,
  },
};
