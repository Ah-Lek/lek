---
sidebar_position: 4
---

# 4. Edit and Build Your Document

In Docusaurus, Markdown is used for creating documentation and content. It is a lightweight markup language used for creating formatted text using plain text. Markdown files typically have the .md extension. Start editing those and create your own documentation or notes.

Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. After editing, you will need to build the website again into a directory of static contents to view the changes. Ensure that your site is built and ready for deployment. Run the following command to create a production-ready build:

```
npm run build
```

This will generate static files in the build directory, which can be served by any static site hosting service.

To ensure everything works as intended, test your build locally by running the following command:

```
npm run serve
```

This will start a local server and you can view your site by navigating to the provided URL. Make sure to check all pages and features to verify that they are functioning correctly.

