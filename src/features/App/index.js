import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="index">
                <Menu/>
                <div className="view-body">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default connect()(App);
