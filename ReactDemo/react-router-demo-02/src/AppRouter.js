import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css'
import Index from './Pages/Index'
import Video from './Pages/Video'
import WorkSpace from  './Pages/WorkSpace'


class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let routerConfig = [
            {path:'/',title:'博客首页',exact:true,component:Index},
            {path:'/video',title:'视频教程',exact:false,component:Video},
            {path:'/workspace',title:'职场技能',exact:false,component:WorkSpace}
        ]
        return (
            <Router>
                <div className="mainDiv">
                    <div className="leftNav">
                        <h3>一级导航</h3>
                        <ul>
                            {
                                routerConfig.map((item,index)=>{
                                    return (<li key={index}><Link to={item.path}>{item.title}</Link></li>)
                                })
                            }

                            {/* <li><Link to="/">博客首页</Link></li>
                            <li><Link to="/video">视频教程</Link></li>
                            <li><Link to="/workspace">职场技能</Link></li> */}
                        </ul>
                    </div>
                    <div className="rightMain">
                        {
                            routerConfig.map((item,index)=>{
                                return (<Route key={index} path={item.path} exact={item.exact} component={ item.component } />)
                            })
                        }

                        {/* <Route path="/" exact component={ Index } />
                        <Route path="/video" component={ Video } />
                        <Route path="/workspace" component={ WorkSpace } /> */}
                    </div>
                </div>
            </Router>
         );
    }
}

export default AppRouter;