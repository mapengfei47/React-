import React from 'react'
import Router from 'next/router'
import Link from 'next/link'

const Home = ()=>(
    <>
        <h1>首页</h1>
        <div><Link href="/testA?name=参数传递1"><a>去A界面了</a></Link></div>
        <div><button onClick={()=>{Router.push('/testB?name=参数传递2')}}>去B界面了</button></div>
    </>
)

export default Home