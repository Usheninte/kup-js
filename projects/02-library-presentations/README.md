React is a declarative, component-based JavaScript library for building user interfaces. It makes the promise of learning once and writing anywhere. It has proven its strengths in the software industry over the past few years and is widely used.

---

React can be added to a website using a `script` tag. It can also be used via **Create React App** if a more powerful JavaScript toolchain is needed. The library can be rendered on the server using Node.js and can also be used to build mobile apps via **React Native**.

---

`Declarative` means views for each state in an application can be designed with simplicity in mind. React knows how best to update and render the relevant components when data changes occur. Views written in the patterns are more predictable, easier to debug and simpler to understand.

---

`Component-based` means building wholesome views that manage their own state. These components can then be further bundled to create complex user interfaces. As the logic for components are written using JavaScript, this helps to pass data efficiently through and application; while keeping the application state out of the **Document Object Model**.

---

The syntax for creating a class-based React component is as seen below. Equally important is knowing how to render this to the DOM via React. This is shown too:

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

According to [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-libraries/#react), a _stateless functional component_ is any function you write which accepts props and returns JSX. A stateless component, however, is a class that extends `React.Component`, but does not use internal state. Finally, a stateful component is a class component that maintains its own internal state.

An example of a **stateless functional component** is seen below. Here, I intend to pass my component properties in the form of an array.

```js
const BenefitsForMe = (props) => {
    return (
        <p>{props.benefits.join(', ')}</p>
    );
}
```

---

Incorporated into the existing `React.js` file, this is as seen below. Child components can be composed or nested within Parent components in React. This is the pattern used in the following snippet.

```js
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello React.js</h1>
                <BenefitsForMe 
                    benefits={['Popular', 
                        'Modern structure', 
                        'Mobile with React Native']} />
            </div>
        );
    }
}
```

---

When working with React components, it is possible to set default properties as well as to indicate the type of the property prior (including whether it is required or not).

```js
MyComponent.defaultProps = {
    propName: 'PropertyValue'
}

MyComponent.propTypes = {
  propName: PropTypes.<propertyType>.isRequired
}
```

`<propertyType>` should be implemented without the angle brackets, and should be selected from ES6 in-built types.

This syntax above works for both stateless functional components and ES6 class-based components.

---

State is an important concept in React applications. This is normally defined within the constructor in ES6 class-based components. The way to update state is via `this.setState()`. Here the keys are the properties of your assigned state and the values are state data to be updated. A change in state is typically triggered by a button (or internally an event change). Using a button that checks for a click event, this is as follows:

```js
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        location: 'Lagos, Nigeria'
        }
        // bind lets you refer explicitly to the function in question
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.setState({
            location: 'Nairobi, Kenya'
        })
    }
    render() {
        return (
        <div>
            <button 
                onClick={this.handleClick}>
                My Location
            </button>
            <h1>{this.state.location}</h1>
        </div>
        );
    }
}
```

---

React is a truly versatile application library. It keeps user interfaces as a core focus, and this is a key element of it's strength. Understanding how to being the journey using this library is of key importance, and has been covered above. Of close significance is knowing how to work with **state**, and an elementary introduction has been provided.

For more in-depth studies, the official [React.js](https://reactjs.org/) website will be of great help. If after this, you would like to take a step further, [React Native](https://reactnative.dev/) is an awesome tool for creating cross-platform mobile applications. Good luck!