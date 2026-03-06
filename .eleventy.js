module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  eleventyConfig.addCollection("notices", function(collectionApi) {
    return collectionApi.getFilteredByTag("notice").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("news", function(collectionApi) {
    return collectionApi.getFilteredByTag("news").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("ukDate", (dateObj) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(dateObj);
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"]
  };
};
