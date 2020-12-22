const obj1 = {
  val1: 1,
  val2: 'a string',
};

const obj2 = {
  val1: 4,
  val2: 'hello',
};

const objects = ['obj1', 'obj2'];
const objectNameElement = () => {
  objects.map((element) => {
    return `${element}1`;
  });
};
objectNameElement();

const reusableObjectNameElement = (arr) => {
  return arr.map((element) => {
    return `${element}1`;
  });
};

const objectMap = reusableObjectNameElement(objects);
console.log(`objectMap = ${objectMap}`);
