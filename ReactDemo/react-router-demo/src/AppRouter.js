import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'
import Index from './components/Index'
import List from './components/List'
import Home from './components/Home'

// function Login(props){
//     return <h1>登陆成功</h1>
// }

// function Register(props){
//     return <h1>账号已注销</h1>
// }

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to='/'>主页</Link></li>
                    <li><Link to='/list/123'>List列表</Link></li>
                </ul>
                <Route path='/' exact component={ Index }></Route>
                <Route path='/list/:id' component={ List }></Route>
                <Route path="/home" component={ Home }></Route>

            </Router>
         );
    }
}

export default AppRouter;