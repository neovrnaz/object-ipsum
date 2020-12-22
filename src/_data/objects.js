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

const objectsArray = [object1, object2, object3];

function getObjectName(obj) {
  return Object.keys(obj)[0];
}

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

function objectStringBuilder(funct) {
  const objName = getObjectName(obj);
  const objProps = buildProps(obj);
  return objectToString(objName, objProps);
}

loop

module.exports = {
  eleventyComputed: {},
};
