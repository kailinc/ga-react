## Medium: Four Ways to Style React Components

There are four options to style React Components. Really depends on your need.
Inline Styling is best if looking to do simple styling.

When you want to reuse style properties in same file, style component is perfect.

When your application is complex, use CSS modules or regulat CSS stylesheets

1. CSS Stylesheets
    Example Component
    ```js
      import React from 'react';
      import './DottedBox.css';

      const DottedBox = () => (
        <div className="DottedBox">
          <p className="DottedBox_content">Get Started with CSS Styling</p>
        </div>
      )
    ```

    DottedBox.css file
    ```css
    .DottedBox {
      margin: 40px;
      border: 5px dotted pink;
    }

    .DottedBox_content {
      font-size: 15px;
      text-align: center;
    }
    ```
    Have a sperate css file for each component.
    I don't like this approach because there can be alot of overlapping styles for components.
    There will be a lot of files for this application.

2. Inline Styling
    In React, inline styles are not specified as a string. They are specified with an object whose key is
    the camelCased version of the style name and whose value is the style's value, usually a string.

    ```js
    import React from 'react';

    const divStyle = {
      margin: '40px',
      border: '5px solid pink'
    };

    const pStyle = {
      fontSize: '15px',
      textAlign: 'center'
    };

    const Box = () => (
      <div style={divStyle}>
        <p style={pStyle}>Get Started with inline style</p>
      </div>
    )

    export default Box;
    ```
    Recap:
    -  create a variable that stores styled properties and then pass it to the element like style={nameOfvariable}
    -  can also pass style directly style={{color:'pink'}}

    Thoughts: This approach is very interesting. I didn't know it is possible to
    style in react this way. I would prefer this approach over the css files in the previous
    approach for a simple application or simple component. I wonder if I can still use this way
    if I want more advanced css like hover etc...

3. CSS Modules
    CSS Module = CSS file that all class names and animatin names are scoped locally by default (not sure what this means)

    Component File
    ```js
    import React from 'react';
    import styles from './DashedBox.css';

    const DashedBox = () => (
      <div className={styles.container}>
        <p className={styles.content}>Get started with CSS Modules Styles</p>
      </div>
    )

    export default DashedBox;
    ```

    CSS file
    ```css
    :local(.container) {
      margin: 40pxl
      border: 5px dashed pink;
    }
    :local(.content) {
      font-size: 15px;
      text-align: center;
    }
    ```
    Recap:
    -  import css and then access className like object
    -  :local(.className) is used if you use create-react-app cuz of webpack config
    -  use .className if you use own react boilerplate
    -  To make CSS modules work with WebPack add this to webpack.config.js file
    ```
    {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    }
    ```

    Thoughts:
    - This is pretty cool. I didn't know you can do something like styles.className

4. Styled-Components
    Styled-Component is a library for React and React Native that allows you to use component level styles
    in your application that are written with a mix of JS and CSS. Need to install styled-components library.

    ```terminal
    npm install styled-components --save
    ```

    ```js
    import React from 'react';
    import styled from 'styled-components';

    // seems like to make it work you put styled.anchorTag
    // you just render it like <Div> or <Paragraph>
    const Div = styled.div`
      margin: 40px;
      border: 5px outset pink;
      &:hover {
       background-color: yellow;
     }
    `;

    const Paragraph = styled.p`
      font-size: 15px;
      text-align: center;
    `;

    const OutsetBox = () => (
      <Div>
        <Paragraph>Get started with styled-components 💅</Paragraph>
      </Div>
    );

    export default OutsetBox;
    ```

    Thoughts:
    -   This is soo cool! I think I will use a mix of this approach and a main.css to set the "theme"
       for styling.
    Concern:
    -   If this is hosted on the web. How does the html look like? I want my project
       to have a good SEO which requires good, industry standard semantic tags?

## SurviveJS: Styling React

### Old School Styling
-   use ids and classes
-   everything is global
-   nesting definitions (.main .sidebar .button) creates implicit logic to styling
-   this is acceptable when starting out, but as you develop, you most likely want to migrate from it (but why?)

### CSS Methodologies
-   if app gets big, the old school way will cause problems in loading order
-   if selectors end up in tie, last declaration wins, unless there is !important


### Inline Styles to Rescue
-   Downside to this approach: hard to have a massive change cuz we have to tweak a lot of components

### Radium

  Radium is a tool that you can use to deal with inline styling

  ```js
      const styles = {
    button: {
      padding: '1em',

      ':hover': {
        border: '1px solid black'
      },

      '@media (max-width: 200px)': {
        width: '100%',

        ':hover': {
          background: 'white',
        }
      }
    },
    primary: {
      background: 'green'
    },
    warning: {
      background: 'yellow'
    },
  };

  ...

  <button style={[styles.button, styles.primary]}>Confirm</button>
  ```
  Thoughts:
  -   this is pretty interesting. The only thing so far I don't like about it is that
      it can make your component file huge.

  ### React style

  React Style is the same sytanx as React Native. It is a tool like Radium.
  It's not maintained anymore, so I'll ignore it.

  ### JSS

  It is a JSON to StyleSheet compiler. You have to npm install with react.jss.

  ```js
  ...
  import classnames from 'classnames';
  import useSheet from 'react-jss';

  const styles = {
    button: {
      padding: '1em'
    },
    'media (max-width: 200px)': {
      button: {
        width: '100%'
      }
    },
    primary: {
      background: 'green'
    },
    warning: {
      background: 'yellow'
    }
  };

  @useSheet(styles)
  export default class ConfirmButton extends React.Component {
    render() {
      const {classes} = this.props.sheet;

      return <button
        className={classnames(classes.button, classes.primary)}>
          Confirm
        </button>;
    }
  }
  ```
  Thoughts:
  -   I don't see any benefits using this. The article doesn't do a good job at explaining it.

  ### React Inline

  - It generates CSS based on classname prop of elements where it is used
  Example:

  ```js
  import cx from 'classnames';
  ...

  class ConfirmButton extends React.Component {
    render() {
      const {className} = this.props;
      const classes = cx(styles.button, styles.primary, className);

      return <button className={classes}>Confirm</button>;
    }
  }
  ```
  Thoughts:
  - I don't see any benefits using this.
