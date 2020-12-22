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

const object4 = {
  foo: 'foo',
  bar: 'bar',
};

const objectsArray = [object1, object2, object3, object4];

function addNewLine(currPropNum, numOfProps) {
  const hasAnotherProp = currPropNum < numOfProps;
  return hasAnotherProp ? '\n  ' : '';
}

const objectToString = (objName, objProps) =>
  `const ${objName} = {\n  ${objProps}\n};\n\n`;

function buildObjectProps(obj) {
  const numberOfProps = Object.keys(obj).length;
  let currentPropNum = 0;
  let output = '';
  for (const [key, value] of Object.entries(obj)) {
    currentPropNum++;
    const newLine = addNewLine(currentPropNum, numberOfProps);
    output += `${key}: ${value}${newLine}`;
  }
  return output;
}

function objectNames() {
  objectsArray.forEach((obj) => obj);
}

function logObjectsAsString() {
  let allObjects = '';
  objectsArray.forEach((currObj) => {
    const objectName = objectNames(currObj);
    const objectProps = buildObjectProps(currObj);
    allObjects += objectToString(objectName, objectProps);
  });
  console.log(allObjects);
  return allObjects;
}

function logObjectsAsArray() {
  const arr = [];
  objectsArray.forEach((currObj) => {
    const objName = objectNames(currObj);
    const objProps = buildObjectProps(currObj);
    const objString = objectToString(objName, objProps);
    arr.push({objString});
  });
  console.log(arr);
  return arr;
}

logObjectsAsString();
logObjectsAsArray();
