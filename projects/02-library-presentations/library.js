'use-strict';

const BenefitsForMe = (props) => {
    return (
        <p>{props.benefits.join(', ')}</p>
    );
}

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

ReactDOM.render(<ClassComponent />, document.getElementById('react-app'));
