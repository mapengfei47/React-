import Router from 'next/router'
export default ()=>(
    <>
        <h2>路由跳转测试A</h2>
        <div>AAAAA</div>
        <button onClick={()=>{Router.push("/")}}>返回首页</button>
    </>
)