import Link from 'next/link'
import { withRouter } from 'next/router'
const testA= ({router})=>(
    <>
        <h2>路由跳转测试A</h2>
        <div>AAAAA---{router.query.name}</div>
        <Link href="/"><a>返回首页</a></Link>
    </>
)

export default withRouter(testA)