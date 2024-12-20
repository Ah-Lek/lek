---
sidebar_position: 7
---

# 7. Deployment of Docusaurus

In this short tutorial, we will learn how to deploy our Docusaurus website so that it is accessible to users on the Internet.

First, you need to edit `docusaurus.config.js` File to optimize routing and serve files from the correct location:

```
const config = {
  ...

  url: 'https://your-github-username.github.io',
  baseUrl: '/your-repo/',

  organizationName: 'your-github-username',
  projectName: 'your-repo',

  ...
  }
```

:memo: **Note** 
- organizationName: The GitHub user or organization that owns the deployment repository.
- projectName: The name of the deployment repository.
- deploymentBranch: The name of the deployment branch. It defaults to 'gh-pages' for non-organization GitHub Pages repos (projectName not ending in .github.io). Otherwise, it needs to be explicit as a config field or environment variable.

Finally, to deploy your site to GitHub Pages, run:

```
GIT_USER=<GITHUB_USERNAME> yarn deploy
```

After creating this simple pipeline, each new commit pushed to the branch you selected deploys your website to GitHub Pages using yarn deploy. If you cannot create the website, please check again your config. 

:memo: **Note** 
```
git config --global user.email "<YOUR_GH_EMAIL>"
git config --global user.name "<YOUR_GH_USERNAME>"
yarn deploy
```git config --global user.email "<YOUR_GH_EMAIL>"
git config --global user.name "<YOUR_GH_USERNAME>"
yarn deploy