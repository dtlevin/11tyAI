
// generate shorcode for img tag with srcset
const Image = require("@11ty/eleventy-img");
//Ex: {% image "cat.jpg", "photo of my tabby cat" %}

// inject SVG shortcode 
const svgContents = require("eleventy-plugin-svg-contents");

// 11ty navigation plugin
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


// const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addWatchTarget("./src");

  // Copy dist/ files from laravel mix
  eleventyConfig.addPassthroughCopy("dist/"); // path is relative from root
  eleventyConfig.addPassthroughCopy("src/img"); // path is relative from root
  eleventyConfig.addPassthroughCopy("src/assets"); // path is relative from root

  // Plugins 
  eleventyConfig.addPlugin(svgContents); // svg injection
  eleventyConfig.addPlugin(eleventyNavigationPlugin); // 11ty navigation plugin

  // Important for watch: Eleventy will not add a watch for files or folders that
  // are in .gitignore (--> dist/),unless setUseGitIgnore is turned off. See this chapter:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
  eleventyConfig.setUseGitIgnore(false);

  // Watch for changes (and reload browser)
  eleventyConfig.addWatchTarget("./src/assets"); // normal (static) assets
  eleventyConfig.addWatchTarget("./dist"); // laravel-mix output changes

  // Add image shortcode  
  eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
		let metadata = await Image(src, {
			widths: [300, 600],
			formats: ["webp", "auto"],
      urlPath: "/img/",
      outputDir: "./public/img/", // passthrough below didn't work, write to output dir by now
		});

		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	});

    return {
      pathPrefix: "/",
      dir: {
        input: "src",
        output: "public",
        layouts: "_layouts",
        includes: "_includes",
      },
    };
  };