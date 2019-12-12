import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Home = ()=>(
    <>
        <h1>首页</h1>
        <div><Link href="/testA?name=参数传递1"><a>去A界面了</a></Link></div>
        <div><button onClick={()=>{Router.push('/testB?name=参数传递2')}}>去B界面了</button></div>
    </>
)

Home.getInitialProps = async ()=>{
    const promise = new Promise((resolve)=>{
        axios.get("http://127.0.0.1:7300/mock/5ddb8d0a460468483264f52c/example/getTodoListData")
        .then((res)=>{
            console.log(res.data.data)
            resolve(res.data.data)
        })
    })
    return await promise
}

export default Home