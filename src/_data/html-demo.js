const string1 = `hello`;
const string2 = `743`;

const objectToHTML = (arg1, arg2) => `
  <div>
   string 1 = ${arg1}
   string 2 = ${arg2}
  </div>
`;

const htmlCreation = objectToHTML(string1, string2);
const number = 42;
module.exports = {
  eleventyComputed: {
    myString: 'This is a string!',
  },
};
