const objectsFile = require('./objects.js');

const objectsFileArray = objectsFile.array;

function getObjectName(obj) {
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

function objectsStringBuilder() {
  let objectsString = '';
  objectsFileArray.forEach((currObj) => {
    const objectName = getObjectName(currObj);
    const objectProps = buildObjectProps(currObj);
    objectsString += objectToString(objectName, objectProps);
  });
  return objectsString;
}

function addObjToKey(val) {
  let output = '';
  const objInner = val;
  const numberOfPropsInner = Object.keys(objInner).length;
  let currentPropNumInner = 0;
  for (const [keyInner, valueInner] of Object.entries(objInner)) {
    currentPropNumInner++;
    const valueWithQuotesInner = addQuotesToPropValues(valueInner);
    output += `  ${keyInner}: ${valueWithQuotesInner},`;
    output += newLineForProps(currentPropNumInner, numberOfPropsInner);
  }
  output += '\n  }';
  return output;
}

function buildObjectProps(obj) {
  const numberOfProps = Object.keys(obj).length;
  let currentPropNum = 0;
  let output = '';
  for (const [key, value] of Object.entries(obj)) {
    currentPropNum++;
    if (typeof value === 'object') {
      const innerValueWithQuotes = addObjToKey(value);
      output += `${key}: {\n  ${innerValueWithQuotes},`;
      output += newLineForProps(currentPropNum, numberOfProps);
      continue;
    }
    const valueWithQuotes = addQuotesToPropValues(value);
    output += `${key}: ${valueWithQuotes},`;
    output += newLineForProps(currentPropNum, numberOfProps);
  }
  return output;
}

function objectStringBuilder() {
  const objectArray = [];
  objectsFileArray.forEach((currObj) => {
    const objName = getObjectName(currObj);
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

module.exports = {
  eleventyComputed: {
    objectStrings,
  },
};
