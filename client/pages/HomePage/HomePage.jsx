import React, {PropTypes} from 'react';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="home-page">
                Welcome to HomePage balblabla
            </div>
        );
    }
}

// Set component propTypes
HomePage.propTypes = {};

export default HomePage;