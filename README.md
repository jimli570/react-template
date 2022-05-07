![](https://repository-images.githubusercontent.com/487115088/b85ddedf-c678-468f-b1f9-1634fd16e83b)

# react-template

React template project.

## Description

Modern up to date project template for a modern SPA react project.

It is important to have a good foundation to build your project upon, with a bad foundation you eventually have to pay the price. It will eventually end up with more bugs, less understandable code, less fun code to work with. All these things will cost you in **time**.

therefore I created this, to have a good starting point.
It might not contain everything you need, but it should be a good starting point for your creation of a modern webapplication.

## Table of contents

  - [Description](#description)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Executing program](#executing-program)
      - [Production deploy](#production-deploy)
      - [Development deploy](#development-deploy)
  - [Scripts](#scripts)
    - [Common](#common)
    - [Test](#test)
    - [Lint](#lint)
    - [Husky](#husky)
    - [Other](#other)
  - [Libraries & Tools](#libraries--tools)
    - [Dependencies](#dependencies)
      - [Production](#production)
      - [Development](#development)
      - [Optional](#optional)
  - [Help](#help)
    - [Project Files](#project-files)
    - [FAQ](#faq)
    - [Useful sites for developers](#useful-sites-for-developers)
  - [Version History](#version-history)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Getting Started

### Prerequisites

[Node Package Manager](https://www.npmjs.com/)

### Installing

From withing the project root directory.
Step 2 only needed if you actually want to set these as pre-commit hooks (which is a nice thing to have!).

| Command order | Syntax                    | Description                                                                                                              |
| ------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1             | ```npm install```         | Install all the project dependencies specified in package.json                                                           |
| 2             | ```npm run husky:setup``` | Optional but recommende.: Setup husky hooks. ```npm run lint``` & ```npm run test``` will be set as as pre-commit hooks. |


### Executing program

#### Production deploy

| Syntax              | Description                            |
| ------------------- | -------------------------------------- |
| ```npm run build``` | Builds the project into 'dist/' folder |

#### Development deploy

| Syntax              | Description                                          |
| ------------------- | ---------------------------------------------------- |
| ```npm run start``` | Deploys the applications locally in development mode |

<!-- --- -->

## Scripts

### Common

| Syntax              | Description                                          |
| ------------------- | ---------------------------------------------------- |
| ```npm run start``` | Deploys the applications locally in development mode |
| ```npm run build``` | Builds the project into 'dist/' folder               |

### Test

| Syntax                          | Description                                         |
| ------------------------------- | --------------------------------------------------- |
| ```npm run test```              | Run tests once                                      |
| ```npm run test:watch```        | Tests run as you code                               |
| ```npm run test:coverage```     | Print coverage report of tests                      |
| ```npm run test:dumpcoverage``` | Dump coverage report of tests to 'out/coverage.out' |

### Lint

| Syntax                     | Description                                |
| -------------------------- | ------------------------------------------ |
| ```npm run lint```         | Lint 'src/' folder                         |
| ```npm run lint:dumpcfg``` | Lint & dump 'src' folder to 'out/lint.out' |

### Husky

Pre-commit hook.

| Syntax                     | Description                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ```husky:setup```          | You need to run this once in repository root, it will enable git-hooks. ```husky:makeexecutable``` is also called. |
| ```husky:makeexecutable``` | Runs 'scripts/setupHusky.sh' which sets the '.husky/pre-commit' as a executable                                    |

### Other

| Syntax                         | Description                                                       |
| ------------------------------ | ----------------------------------------------------------------- |
| ```npm run eject```            | Avoid this, ejects all configs and gives you full control of them |
| ```npm run upload-to-server``` | Example script                                                    |

<!-- --- -->

## Libraries & Tools

### Dependencies

Describes some of the libraries in use, or that might be used. These can be adjusted for you needs in package.json file.

#### Production

Packages that I most likely will use in production.

| Package                | Description                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ```react```            | The framework used for the webinterface                                                                                                          |
| ```react-dom```        | Extends react to enable DOM-manupilation (single page apps)                                                                                      |
| ```react-redux```      | The store (state-machine), which share/sync state between components                                                                             |
| ```react-router-dom``` | The router, helps link between the browser's URL/History and components allowing for certain paths to render whatever view is associated with it |
| ```@apollo/client```   | Used to interface with a potential backend. If you decide to not use this, then also remove Apollo from 'src/App.tsx'                            |

#### Development

Packages that I most likely will use in development.

| Package                 | Description                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ```react-app-rewired``` | Tweak the create-react-app webpack config(s) without using 'eject' and without creating a fork of the react-scripts. |

#### Optional

Packages I might want to use in the projects.

| Package                             | Description                                                                                                                                 |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ```create-react-app```              | Used to create the inital Preact/redux/typescrip configurations & additional tools used in this project. You do not need to run this again. |
| ```cra-template-redux-typescript``` | Template used together with  ```create-react-app``` for configs.                                                                            |
| ```react-bootstrap```               | Got some usefull scss/css in it, mostly for for layouting & getting good default css-settings.                                              |

## Help

Some things might be worthwhile mentioning, or explanings.
This is a good section for that.

### Project Files

Some explenation of the files in the project.

 | Name                                | Type   | Description                                                                                            |
 | ----------------------------------- | ------ | ------------------------------------------------------------------------------------------------------ |
 | ```public/```                       | folder | Static content that will be available in the project, index.html being the template for the html entry |
 | ```scripts/```                      | folder | A place to put your custom scripts in                                                                  |
 | ```src/```                          | folder | Project sourcecode                                                                                     |
 | ```.eslintignore```                 | file   | Contains list of folders & files that should be ignored by eslint                                      |
 | ```.eslintrc.js```                  | file   | Eslint configuration                                                                                   |
 | ```.browserslistrc```               | file   | Specifies supported browsers                                                                           |
 | ```.gitignore```                    | file   | Contains list of folders & files that should be ignored by git                                         |
 | ```README.md```                     | file   | This is the README you are reading right now                                                           |
 | ```config-overrides.js```           | file   | Override project configuration that otherwise might be difficult to hook into in here.                 |
 | ```package-lock.json```             | file   | Contains dependency-tree of all the packages and subpackages                                           |
 | ```package.json```                  | file   | This is the project entrypoint                                                                         |
 | ```react-template.code-workspace``` | file   | Template workspace file for VS Code, with some plugin recommendations                                  |
 | ```tsconfig.json```                 | file   | Typescript configuration                                                                               |


Then enviroment-files are useful hooks for the tools, where you can define variables that you may use in your project.
If a variable is not used in the project, it will not be included in the build. 
Remember to use the ```REACT_APP_``` prefix when naming the variables, otherwise they will not be included.
 
 | Name                   | Type | Description                                                                            |
 | ---------------------- | ---- | -------------------------------------------------------------------------------------- |
 | ```.env```             | file | Define env-variables that can be used in the application here. this one is always read |
 | ```.env.local```       | file | Make your own local overrides here. Do not commit changes, keep in .gitignore          |
 | ```.env.development``` | file | Read in development                                                                    |
 | ```.env.test```        | file | Read in test                                                                           |
 | ```.env.production```  | file | Read in production                                                                     |
 
### FAQ

<details>
<summary>How was these project files initially created</summary>
<br>
The inital configurations was generated using 'create-react-app'. This
does not have to be done again.

```npx create-react-app my-app --template redux-typescript```
</details>

<details>
<summary>Problems using the precommit hook</summary>
<br>
This is problubary because the git-hook is not set as executeable, 
try running ```npm run husky:makeexecutable```, it sets the './husky/pre-commit' as a executable.
</details>

<details>
<summary>Failed to parse source map from '...node_modules/ts-invariant/src/invariant.ts'</summary>
<br>
If getting some warnings like below
This error currently turn up on the dev-server, the is a sourcemap missing, nothing to worry about.

```
Compiled with warnings.
Failed to parse source map from '...node_modules/ts-invariant/src/invariant.ts'....
```

Some more comments about the issue can be found [here](https://github.com/mswjs/msw/issues/1030#issuecomment-1001449665)
</details><br/>

### Useful sites for developers

| Link                                    | Description                                      |
| --------------------------------------- | ------------------------------------------------ |
| [caniuse](https://caniuse.com/)         | Check browser support                            |
| [w3schools](https://www.w3schools.com/) | Tutorials in most web-techs                      |
| [Metatags](https://metatags.io/)        | Useful for generating social media metadata tags |

## Version History

* 1.0.0 (2022-04-30)
    * Initial Release. All packages up to date.

## Authors

Jimmy Liikala
[@jimli570](https://github.com/jimli570)

## License

Copyright (c) [2022] [Jimmy Liikala]

<details>
  <summary>MIT License</summary>
  <br>

  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  </details>

## Acknowledgments

Thanks to Robin Isaksson [@asura6](https://github.com/asura6) for verifying the project and shedding light on parts that needed improvements. 

<details>
<summary>Some resources found useful in the making</summary>
<br>
   
* [Getting Started with React Redux](https://react-redux.js.org/introduction/getting-started)
* [Markdown guide](https://www.markdownguide.org/)
* [jest](https://jestjs.io)
* [Apollo GraphQL](https://www.apollographql.com/)
* [tsconfig.json](https://www.typescriptlang.org/tsconfig)
* [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
* [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
* [Customize Create React App without Ejecting](https://www.npmjs.com/package/react-app-rewired)
</details>
