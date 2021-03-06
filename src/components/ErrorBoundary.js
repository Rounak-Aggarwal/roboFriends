import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    
    //New Lifecycle method with react16 just like try catch
    componentDidCatch(error, info){
        this.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Ooooops. That is not good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;