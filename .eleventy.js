module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addNunjucksFilter('toUpperCase', (value) => {
    return value.toUpperCase();
  });
  return {
    dir: {
      input: 'src',
      output: 'docs',
    },
    pathPrefix: '/'
  };
};
