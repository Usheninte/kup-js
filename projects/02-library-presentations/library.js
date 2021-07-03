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
