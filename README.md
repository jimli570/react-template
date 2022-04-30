# react-template

React template project.

## Description

Modern up to date project template for a modern SPA react project.

It is important to have a good foundation to build your project upon, with a bad foundation you eventually have to pay the price. It will eventually end up with more bugs, less understandable code, less fun code to work with. All these things will cost you in **time**.

therefore I created this, to have a good starting point.
It might not contain everything you need, but it should be a good starting point for your creation of a modern webapplication.

## Getting Started

### Prerequisites

[Node Package Manager](https://www.npmjs.com/)

<details>
<summary>package.json</summary>
It is good to know that npm uses the 'package.json' as entry point for the project.
</details>
<br>

### Installing

From withing the project root directory.

| Command order | Syntax                   | Description                                                                                  |
| ------------- | ------------------------ | -------------------------------------------------------------------------------------------- |
| 1             | ```npm install```        | Install all the project dependencies specified in package.json                               |
| 2             | ```npm run husky:prep``` | Setup husky hooks. ```npm run lint``` & ```npm run test``` will execute as pre-commit hooks. |

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

###
| Syntax              | Description                                          |
| ------------------- | ---------------------------------------------------- |
| ```npm run start``` | Deploys the applications locally in development mode |
| ```npm run build``` | Builds the project into 'dist/' folder               |

### Test

| Syntax                           | Description                                         |
| -------------------------------- | --------------------------------------------------- |
| ```npm run test```               | Run tests once                                      |
| ```npm run test::watch```        | Tests run as you code                               |
| ```npm run test::coverage```     | Print coverage report of tests                      |
| ```npm run test::dumpcoverage``` | Dump coverage report of tests to 'out/coverage.out' |

### Lint

| Syntax                      | Description                                |
| --------------------------- | ------------------------------------------ |
| ```npm run lint```          | Lint 'src' folder                          |
| ```npm run lint::dumpcfg``` | Lint & dump 'src' folder to 'out/lint.out' |

### Husky

Pre-commit hook.

| Syntax            | Description                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ```husky:prep```  | You need to run this once in repository root, it will enable git-hooks. ```husky:make-executable``` is also called.                              |
| ```husky:setup``` | Setups ```npm run lint``` & ```npm run test``` as pre-commit hookes. Sets executable permission on the pre-commit-hook-file './husky/pre-commit' |

### Other

| Syntax                              | Description                                                            |
| ----------------------------------- | ---------------------------------------------------------------------- |
| ```npm run huskyprep```             | You need to run this once in repository root, it will enable git-hooks |
| ```npm run eject```                 | Avoid this, ejects all configs and gives you full control of them      |
| ```npm run make-husky-executable``` | Example script                                                         |
| ```npm run upload-to-server```      | Example script                                                         |

<!-- --- -->

## Libraries & Tools

### Dependencies

Describes some of the libraries in use, or that might be used. These can be adjusted for you needs in package.json file.

#### Production

Packages that I most likely will use in production.

| Package                | Description                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ```react```            | The framework used for the webinterface                                                                                                                |
| ```react-dom```        | Extends react to enable DOM-manupilation (single page apps)                                                                                            |
| ```react-redux```      | The store (state-machine), which share/sync state between components                                                                                   |
| ```react-router-dom``` | The router, helps link between the browser's URL/History and Vue's components allowing for certain paths to render whatever view is associated with it |
| ```@apollo/client```   | Used to interface with a potential backend                                                                                                             |

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


### Config files

| Filename            | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| ```.env```          | Define env-variables that can be used in the application here. |
| ```npm run build``` | Builds the project into 'dist/' folder                         |

### FAQ

<details>
<summary>How was these project files initially created?</summary>
<br>
The inital configurations was generated using 'create-react-app'. This
does not have to be done again.

```npx create-react-app my-app --template redux-typescript```
</details>

<details>
<summary>Problems using the precommit hook</summary>
<br>
This is problubary because the git-hook is not set as executeable, 
try running ```npm run make-husky-executable```, it sets the './husky/pre-commit' as a executable.
</details>

<details>
<summary>Failed to parse source map from '...node_modules/ts-invariant/src/invariant.ts</summary>
<br>
If getting some warnings like below
This error currently turn up on the dev-server, the is a sourcemap missing, nothing to worry about.

```
Compiled with warnings.
Failed to parse source map from '...node_modules/ts-invariant/src/invariant.ts'....
```

Some more comments about the issue can be found [here](https://github.com/mswjs/msw/issues/1030#issuecomment-1001449665)
</details>
<br>

## Useful sites for developers

| Link                                    | Description                 |
| --------------------------------------- | --------------------------- |
| [caniuse](https://caniuse.com/)         | Check browser support       |
| [w3schools](https://www.w3schools.com/) | Tutorials in most web-techs |

## Version History

* 1.0.0 (2002-04-30)
    * Initial Release. All packages up to date.

---

## Authors

Jimmy Liikala
[@jimli570](https://github.com/jimli570)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Acknowledgments

Thanks to Robin Isaksson [@asura6](https://github.com/asura6) for verifying the project and shedding light on parts that needed improvements. 

Some resources used in the making: 

* [Getting Started with React Redux](https://react-redux.js.org/introduction/getting-started)
* [Markdown guide](https://www.markdownguide.org/)
* [jest](https://jestjs.io)
* [Apollo GraphQL](https://www.apollographql.com/)
* [tsconfig.json](https://www.typescriptlang.org/tsconfig)
* [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
* [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
* [Customize Create React App without Ejecting](https://www.npmjs.com/package/react-app-rewired)
