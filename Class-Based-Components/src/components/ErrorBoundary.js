import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            errorMessage: ''
        }
    }

    componentDidCatch(err) {
        this.setState({ hasError: true, errorMessage: err.message });
    }

    render() {
        if (this.state.hasError) return <h2>{this.state.errorMessage}</h2>;
        return this.props.children;
    }
}

export default ErrorBoundary;