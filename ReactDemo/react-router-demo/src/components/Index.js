import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id:1,title: '组件1'},
                {id:2,title: '组件2'},
                {id:3,title: '组件3'}
            ]
         }

         this.props.history.push("/home/")
    }
    render() {
        return (
            // <Redirect to="/home" />
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={index}>
                                <Link to={'/list/' + item.id}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
         );
    }
}

export default Index;