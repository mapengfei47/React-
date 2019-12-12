import Router from 'next/router'
export default ()=>(
    <>
        <h2>路由跳转测试B</h2>
        <div>BBBBB</div>
        <button onClick={()=>{Router.push("/")}}>返回首页</button>
    </>
)