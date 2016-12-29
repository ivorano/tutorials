import React, {PropTypes} from 'react';

class SecondPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="second-page">
                <h1>Welcome to second page!</h1>
            </div>
        );
    }
}

export default SecondPage;