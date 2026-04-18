const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css/');
  eleventyConfig.addPassthroughCopy('src/img/');

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  });

  eleventyConfig.setLibrary('md', md);

  eleventyConfig.addCollection('developments', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/developments/*.md').sort((a, b) => {
      return (a.data.title || '').localeCompare(b.data.title || '');
    });
  });

  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/*.md').sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['njk', 'md', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};