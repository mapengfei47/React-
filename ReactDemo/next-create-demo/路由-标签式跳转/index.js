import React from 'react'
import Link from 'next/link'

const Home = ()=>(
    <>
        <h1>首页</h1>
        <div><Link href="/testA"><a>去A界面</a></Link></div>
        <div><Link href="/testB"><a>去B界面</a></Link></div>
    </>
)

export default Home