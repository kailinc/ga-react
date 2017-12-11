# The Complete React Web Developer Course (with Redux)


## Section 3

-   put `<meta charset="utf-8">` in the header tag of index.html so that browser
    will know how to encode it (utf-8) is words
-   most broswers default it to utf-8, this is just to be safe

### Setting Up Babel

-   Babel is a compiler that takes new es6, es7 and makes it into es5
-   why? cuz browsers do not support the new es6/7 yet
-   we can write dope ass code and still run on broswers
-   Babel doesn't compile anything by default, so we have to add presets and stuff
-   will use react preset, includes preset-flow, syntax-jsx, transform-react-jsx, transform-react-display-name
-   will use env preset, includes es2015, es2016, es2017

-   Installation for getting babel-cli
```
yarn global add babel-cli
```
-   adding package for the project to be listed in package.json
```
yarn add <package>
```
-   yarn.lock is a file that descriptes each dependencies used in node_modules/
-   it gives the name, version, source of each dependencies
-   yarn.lock is auto generated
-   idea is to write all the code in src/ and then use babel to generate files in scripts/
-   index.html will use the compiled files in scripts to render
-   we never touch the files in scripts

```terminal
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react
```

  - src/app.js is the file to compile
  - out-file is where to be the compiled file
  - presets is where you define what presets you want to use
  - if you put --watch, it will watch for changes in src/app.js and make changes to scripts/app.js if there is any changes


  ### Exploring JSX

  - React does not let you render the whole object
  - you have to specify parts of the object to use
