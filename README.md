# Endonian Aviation Authority (EAA) UAS Team Website

This repository contains a fictional public information website for the **Endonian Aviation Authority** (EAA) **Unmanned Aircraft Systems (UAS) Team**, built using Eleventy.

## Stack

- Eleventy (11ty)
- Nunjucks templates
- Vanilla CSS
- Vanilla JavaScript
- Static output to `_site`

## Project structure

```text
/
  src/
    _data/
    _includes/
    assets/
      css/
      js/
      img/
      files/
    notices/
    news/
    pages/
    index.njk
  _site/
  .eleventy.js
  package.json
  README.md
```

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Starts Eleventy with a local development server.

## Build

```bash
npm run build
```

Build output is generated in `_site`.

## Cloudflare Pages deployment notes

Use the following settings in Cloudflare Pages:

- **Framework preset:** None
- **Build command:** `npm run build`
- **Build output directory:** `_site`
- **Node.js version:** `18` or higher

This site is fully static and suitable for straightforward Cloudflare Pages hosting.
