import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'

function Home(){
    const [color,setColor] = useState('red')
    const changeColor = ()=>{
        setColor(color === 'red'?'blue':'red')
    }
    return(
        <>
            <h1>首页</h1>
            <div><Link href="/testA?name=参数传递1"><a>去A界面了</a></Link></div>
            <div><button onClick={()=>{Router.push('/testB?name=参数传递2')}}>去B界面了</button></div>
            <div>颜色测试 ${color}</div>
            <button onClick={changeColor}>改变颜色</button>
            <style jsx>{`
                div{color:${color}}
            `}</style>
        </>
    )
}

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