import React from 'react';

class CustomErrorBoundaries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hasError : false};
    }

    static getDerivedStateFromError(error){
        return {hasError : true};
    }

    componentDidCatch(error, errorInfo) {
        console.log('error has occured  ::: ', errorInfo);
    }

    render() {
     if(this.state.hasError) {
        return <h1> Some error has occured</h1>;
    } 
        return this.props.children;
    }
}

export default CustomErrorBoundaries;