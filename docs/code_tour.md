# Code Tour 
This document is intended to provide a development guideline for new and existing contributors to the project.
Keep in mind this application undergoes constant development so be sure to check back occasionally as best practices are sure to evolve.

## Linting
This project uses **ESLint**, `gulp eslint`, and **Sass Lint**, `gulp sasslint`. Both can be run with the gulp task `gulp vet`.

## Style and Convention
For additional information regarding coding style and convention employed in this project checkout:
* [Coding Style and Standards](https://github.com/ManageIQ/manageiq/issues/8781)
* [Internationalization Guidelines](https://github.com/ManageIQ/guides/blob/master/i18n.md) 
* [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
* [BEM Quick Start](https://en.bem.info/methodology/quick-start/)

## Adding Dependencies
All dependencies are managed using [Yarn](https://github.com/yarnpkg/yarn).
When adding a new dependency for use in the SUI there are three locations to pay attention to:
1. [package.json](package.json) - identifies resourcing and desired versions of app dependencies, confirm the correct version of the app you require is saved as a **Developer Dependency**, (`devDependencies`)
2. [javascripts.html](client/partials/javascripts.html) and/or [styles.html](client/partials/styles.html) - makes dependencies available app wide, here you'll reference the `node_modules/` file path of those files you wish to include add **Note: Order matters, don't be reckless** :+1:
3. [config.js](gulp/config.js) - identifies dependencies required for running tests, the function titled `function getKarmaOptions()` manages  `var options` which must identically mirror any action taken step two.
   For example, if you were to add `<script src="/node_modules/jquery/dist/jquery.js"></script>` as the first dependency in [javascripts.html](client/partials/javascripts.html), you would add `'./node_modules/jquery/dist/jquery.js',` in [config.js](gulp/config.js)
   in an identical position (relative but identical).