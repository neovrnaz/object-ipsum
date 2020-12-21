const object1 = {
  key1: 'hello',
  key2: 2,
};

const object2 = {
  value1: 5,
  value2: 2,
};

const objectsArray = [object1, object2];
console.log(objectsArray.toString());

function getObjName(obj) {
  return {
    objName: () => obj,
  };
}
const obj1Name = getObjName(object1);
console.log(obj1Name);
console.log(JSON.stringify(obj1Name));

function addNewLine(currPropNum, numOfProps) {
  const hasAnotherProp = currPropNum < numOfProps;
  return hasAnotherProp ? '\n  ' : '';
}

function addQuotesToValue(val) {
  const isValString = typeof val === 'string';
  return isValString ? `'${val}'` : `${val}`;
}

function buildProps(obj) {
  const numberOfProps = Object.keys(obj).length;
  let currentPropNum = 0;
  let output = '';
  for (const [key, value] of Object.entries(obj)) {
    currentPropNum++;
    const valueWithTypeCheck = addQuotesToValue(value);
    const newLine = addNewLine(currentPropNum, numberOfProps);
    output += `${key}: ${valueWithTypeCheck}${newLine}`;
  }
  return output;
}

const objectToString = (objName, objProps) => `
const ${objName} {
  ${objProps}
};
`;

function objectStringBuilder(obj) {
  const objName = getObjName(obj);
  const objProps = buildProps(obj);
  return objectToString(objName, objProps);
}

function buildAllStrings() {
  for (let currObj = 0; currObj < objectsArray.length; currObj++) {
    const currentObject = objectsArray[currObj];
  }
}

buildAllStrings();

module.exports = {
  eleventyComputed: {},
};
