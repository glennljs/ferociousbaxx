import React from 'react';
import Login from './Login';
import { connect } from "react-redux";
import Dashboard from './Dashboard';

class Main extends React.Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Dashboard />
        }

        return (
            <Login />
        )
    }
}

function mapStateToProps(state) {
    return { isLoggedIn: state.isLoggedIn };
}

export default connect(mapStateToProps)(Main);