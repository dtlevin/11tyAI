# 11tyAI
> Created by Dan Levin 

A simple starter project for Eleventy with Webpack static site generator [Eleventy/11ty](https://www.11ty.dev/), just

- [Laravel Mix](https://www.npmjs.com/package/laravel-mix)\* for SCSS / JS compilation (incl. Autoprefixer)

_\* Laravel Mix is a wrapper around webpack, it is purely NodeJS, no PHP involved ;-)_

Plugins used (you don't have to keep them):

- [eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)
- [eleventy-img](https://www.11ty.dev/docs/plugins/image/)
- [eleventy-plugin-svg-contents](https://github.com/brob/eleventy-plugin-svg-contents)
- [eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)
## Live demo

- https://mandrasch.github.io/11ty-plain-bootstrap5/

[![Open in Gitpod](gitpod.svg)](https://gitpod.io/#https://github.com/mandrasch/11ty-plain-bootstrap5)

## Usage

**Install via:**

- `npm install`

**Start local development with**

- `npm run dev`

Preview runs on http://localhost:8080/.

**Where to edit?**

- Work with files in `src/`-folder
- Homepage: `src/index.njk`, Config: `.eleventy.js`
- **Don't** edit `public/` folder (automatically generated)

**Generate a static build with**

- `npm run build`