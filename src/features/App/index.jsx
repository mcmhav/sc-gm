import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        console.log(SC);
        return (
            <div className="index">
                <div className="view-body">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default connect()(App);
