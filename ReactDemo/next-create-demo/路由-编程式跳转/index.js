import React from 'react'
import Router from 'next/router'

const Home = ()=>(
    <>
        <h1>首页</h1>
        <div><button onClick={()=>{Router.push('/testA')}}>去A界面了</button></div>
        <div><button onClick={()=>{Router.push('/testB')}}>去B界面了</button></div>
    </>
)

export default Home