const object1 = {
  key1: 'hello',
  key2: 'world',
};

const object2 = {
  value1: 48,
  value2: '256',
};

const object3 = {
  one: '"1"',
  two: '"2"',
};

const objectsStringArray = ['object1', 'object2', 'object3'];
const objectsArray = [object1, object2, object3];

function addNewLine(currPropNum, numOfProps) {
  const hasAnotherProp = currPropNum < numOfProps;
  return hasAnotherProp ? '\n  ' : '';
}

function addQuotesToValue(val) {
  const isValString = typeof val === 'string';
  return isValString ? `'${val}'` : `${val}`;
}

function buildObjectProps(obj) {
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

const objectString = (objName, objProps) => `
const ${objName} {
  ${objProps}
};
`;

function numOfStrings() {
  let num = 0;
  objectsStringArray.forEach(() => num++);
  return num;
}

// console.log(`numOfStrings() = ${numOfStrings()}`);

function objectNames() {
  objectsStringArray.forEach((obj) => obj);
}

function objectStringBuilder() {
  const stringBuild = objectsStringArray.forEach((prop, objName) => {
    buildObjectProps(prop);
    objectString(objName);
    console.log();
  });
}

function objectStringBuilder2() {
  for (const object of objectsStringArray) {
    return object;
  }
}

objectsArray.forEach((currObj) => {});

function allObjectsToString() {
  let allObjects = '';
  objectsArray.forEach((currObj) => {
    const objectName = objectNames(currObj);
    const objectProps = buildObjectProps(currObj);
    allObjects += objectString(objectName, objectProps);
    console.log(allObjects);
  });
  return allObjects;
}

function objectToString() {
  const objectArr = [];
  objectsArray.forEach((currObj) => {
    const objectName = objectNames(currObj);
    const objectProps = buildObjectProps(currObj);
    objectArr.push(objectString(objectName, objectProps));
  });
  return objectArr;
}

function objectsToArray() {
  const objectArr = [];
  objectsArray.forEach((currObj) => {
    const objectName = objectNames(currObj);
    const objectProps = buildObjectProps(currObj);
    objectArr.push(objectString(objectName, objectProps));
  });
  return objectArr;
}

console.log(objectToString());
objectToString();
