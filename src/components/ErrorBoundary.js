import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // 에러가 일어났을 때 실행됨.
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
          return <h1>Error occured</h1>
        }
        return this.props.children
    }
};

export default ErrorBoundary;