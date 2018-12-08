# react-template

## Overview

Basic fron-end template. 

## Techs

Core based on [Typescript](https://www.typescriptlang.org/) and [React](https://reactjs.org/).

Tests powered by [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).

Build and bundling by [Webpack](https://webpack.js.org/).

Test run already defined if you are using [Visual Code](https://code.visualstudio.com/download).

Currently using [Polyfill.io](https://polyfill.io/v2/docs/) to cross-browser compatibility.

## How to

### Do it once
Clone the repo.

Install [Node](https://nodejs.org) if you don't have it.

Install [npx](https://www.npmjs.com/package/npx) globally:
```
npm i -g npx
```

Open the terminal in the project folder and type:
```
npm install
```
That will install the dependencies. 

### Do it during development

To build, type:

```
npx webpack
```
or if you want Webpack to watch file changes:
```
npx webpack -w
```

To serve the application, type:
```
npx static-server
```


### To run the tests:

In Visual Code press F5 or open the terminal in the project folder and type:
```
npm test
```