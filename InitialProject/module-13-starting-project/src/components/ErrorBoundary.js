import { Component } from "react";


class ErrorBondary extends Component{
    constructor(){
        super();
        this.state = {hasError:  false};
    }
    componentDidCatch(error){
        this.setState({hasError: true});
    }
    render(){
        if(this.state.hasError){
            return <p>Sommeting went wrong</p>
        }
        return this.props.children;
    }
}

export default ErrorBondary;