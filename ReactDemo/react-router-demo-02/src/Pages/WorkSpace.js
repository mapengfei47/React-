import React from 'react';
import { Route, Link } from 'react-router-dom'
import Code from './workSpace/Code'
import GetUp from './workSpace/GetUp'
import Money from './workSpace/Money'

function WorkSpace(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workspace/money">关于赚钱</Link></li>
                    <li><Link to="/workspace/getup">关于起床</Link></li>
                    <li><Link to="/workspace/code">关于代码</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>职场技能你知道？</h3></div>
                <Route path="/workspace/money" component={Money} />
                <Route path="/workspace/getup" component={GetUp} />
                <Route path="/workspace/code" component={Code} />
            </div>
        </div>
    )
}

export default WorkSpace