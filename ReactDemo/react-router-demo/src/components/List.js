import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <h1>欢迎来到List列表-----{this.state.id}</h1>
         );
    }
    componentDidMount(){
        console.log(this.props.match)
        let tempId = this.props.match.params.id
        this.setState({
            id: tempId
        })
    }
}

export default List;