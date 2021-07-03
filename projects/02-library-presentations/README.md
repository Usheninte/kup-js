## Introduction

React is a declarative, component-based JavaScript library for building user interfaces. It makes the promise of learning once and writing anywhere. It has proven its strengths in the software industry over the past few years and is widely used.

---

React can be added to a website using a `script` tag. It can also be used via the **Create React App** if a more powerful JavaScript toolchain is needed. The library can be rendered on the server using Node.js and can also be used to build mobile apps via **React Native**.

---

`Declarative` means views for each state in an application can be designed with simplicity in mind. React knows how best to update and render the relevant components when data changes occur. Views written in the patterns are more predictable, easier to debug and simpler to understand.

---

`Component-based` means building wholesome views that manage their own state. These components can then be further bundled to create complex user interfaces. As the logic for components are written using JavaScript, this helps to pass data efficiently through and application; while keeping the application state out of the **Document Object Model**.

---

## Creating a React Component

The syntax for creating a class-based React component is as follows:

```js
'use-strict';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello React.js</h1>
            </div>
        );
    }
}
```

To render this to the DOM via React, the following snippet is needed:

```js
ReactDOM.render(<ClassComponent />, document.getElementById('react-app'));
```

---

For this code to be displayed in the browser, a simple HTML implementation is needed:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React.js App</title>
    <!-- Babel script -->
    <script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script>
</head>

<body>

    <div id="react-app"></div>

    <!-- Load React. -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

    <!-- Load our React component. -->
    <script type="text/babel" src="library.js"></script>
</body>

</html>
```

---


