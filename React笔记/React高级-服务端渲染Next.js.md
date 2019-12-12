# React服务端渲染

> Next.js 是一个轻量级的 React 服务端渲染应用框架。
>
> **优点：**
>
> - 完善的React架构，搭建轻松（Webpack，服务端启动，路由配置，缓存功能在内部已经搭建完成）
> - 丰富的插件
> - 灵活的配置

[TOC]



## 一. 基本使用

1. 新建文件夹

   ~~~shell
   mkdir NextDemo
   cd NextDemo
   npm init -y
   ~~~

2. 安装依赖

   ~~~shell
   npm i react react-dom next
   ~~~

3. 增加快捷命令

   ~~~js
   // package.json
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "dev" : "next" ,
       "build" : " next build",
       "start" : "next start"
     },
   ~~~

4. 创建页面

   - 在根目录下创建 pages文件夹
   - 在pages文件夹里面写入组件 index.js
   - 启动项目即可访问

   ~~~js
   // pages/index.js
   function Index(){
       return (
       	<h1>Index page</h1>
       )
   }
   export default Index
   ~~~



## 二. create-next-app 脚手架快捷创建

1. 安装

   ~~~shell
   npm i create-next-app -g
   ~~~

2. 创建项目

   ~~~shell
   npx create-next-app NextDemo
   ~~~

3. 运行测试

   ~~~shell
   npm run dev
   ~~~



## 三. Page 和 Component 的创建

### 3.1 Page

> Next会自动帮我们配置路由，如果要新增一个页面，直接在 pages文件夹下面新增一个组件即可，访问地址即为组件的文件名

### 3.2 Compoennts

> 组件创建在 components 目录下面，同 React组件的创建



## 四. 路由

### 4.1 标签式跳转 `<Link>`

> 通过 <Link> 标签的href 属性指定文件的相对路径，即可跳转到响应的界面

~~~js
//  pages/A.js
import Link from 'next/link'

export default ()=>(
	<>
    	<h1>A page</h1>
    	<Link href="/">返回首页</Link>
    </>
)
~~~

~~~js
// pages/index.js
import A from './A'

export default Home = ()=>(
	<>
    	<h1>欢迎回到首页</h1>
    	<Link href="/A">去A页面</Link>
    </>
)
~~~

### 4.2 Router模块进行跳转

> Router 属于编程式跳转，使用方法如下
>
> 主要是通过引入 Router 对象
>
> 通过触发点击时间，调用 Router.push方法，将跳转目前的相对路径作为参数

~~~js
import Router from 'next/router'

export default Home = ()=>(
	<>
    	<h1>编程式路由</h1>
    	<button onClick={()=>{Router.push('/A')}}>去A界面</button>
    </>
)
~~~

### 4.3 路由传参

> 在Next中，路由传参只有一种方式，即在路由后面添加 `？id=1` 这种方式
>
> 在接收组件中，使用 router.query.attrName 来获取对应参数

~~~js
import { withRouter } from 'next/router'
import Link from 'next/link'

const Xiaojiejie = ({router})=>{
    return (
        <>
            <div>{ router.query.name }----传递过来的参数</div>
            <Link href="/">返回首页</Link>
        </>
    )
}

export default withRouter(Xiaojiejie)
~~~

### 4.4 路由的生命周期

> - **路由发生变化时：** `routerChangeStart`
> - **路由结束变化时：** `routerChangeComplete`
> - **浏览器history触发之前：** `beforeHistoryChange`
> - **路由跳转发生错误时：** `routerChangeError`
> - **hash路由变化时：** `hashChangeStart`
> - **hash路由变化结束时：** `hashChangeComplete`

~~~js
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = ()=>(
    <>
        <div>我是首页</div>
        <div><Link href="/Xiaojiejie?name=AAAAA"><a>去A界面</a></Link></div>
        <div><Link href="/Xiaojiejie?name=BBBBB"><a>去B界面</a></Link></div>
    </>
)

Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
})

Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由结束变化,参数为:',...args)
})

Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
})

Router.events.on('routeChangeError',(...args)=>{
    console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
})

Router.events.on('hashChangeStart',(...args)=>{
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
})

Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
})

export default Home
~~~

## 五. 在Next中使用 Axios

> 在Next中使用Axios必须在 `getInitialProps` 静态方法中调用

~~~js
import { withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Xiaojiejie = ({router,list})=>{
    return (
        <>
            <div>{router.query.name},来为我们服务了 .<br/>{list}</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

Xiaojiejie.getInitialProps = async ()=>{
    const promise =new Promise((resolve)=>{
            axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
                (res)=>{
                    console.log('远程数据结果：',res)
                    resolve(res.data.data)
                }
            )
    })
    return await promise
}

export default withRouter(Xiaojiejie)
~~~

## 六. 使用 Style JSX编写页面CSS样式

> Next.js默认是不支持 CSS的，要想使用，需要另外一些配置
>
> 在组件中添加 <style jsx>标签，并把样式写在标签内即可

~~~js
import React, {useState} from 'react'

function Jspang(){
    //关键代码----------start-------
    const [color,setColor] = useState('blue')

    const changeColor=()=>{

        setColor(color=='blue'?'red':'blue')
    }
     //关键代码----------end-------

    return (
        <>
            <div>技术胖免费前端教程</div>
            <div><button onClick={changeColor}>改变颜色</button></div>
            <style jsx>
                {`
                    div { color:${color};}
                `}
            </style>
        </>
    )
}
export default Jspang
~~~

## 七. Lazy loading实现模块懒加载

> 懒加载分为两种情况
>
> 1. 懒加载（异步加载）模块
> 2. 异步加载组件

### 7.1 懒加载模块

> 懒加载模块需要使用到ES6中的 async 和 await
>
> 将需要使用某个模块的方法设置为 async 方法，在方法内部，使用 await 来修饰 import语句

~~~js
import React, {useState} from 'react'
function Time(){

    const [nowTime,setTime] = useState(Date.now())
	
    //在方法内部引入 moment 模块
    const changeTime= async ()=>{ //把方法变成异步模式
        const moment = await import('moment') //等待moment加载完成
        setTime(moment.default(Date.now()).format()) //注意使用defalut
    }
    return (
        <>
            <div>显示时间为:{nowTime}</div>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}
export default Time
~~~

### 7.2 懒加载组件

> 只要在引入组件的地方，使用如下方法即可实现组件懒加载

~~~js
import dynamic from 'next/dynamic'

const AComponent = dynamic(import('./A'))
~~~

## 八. 自定义Header，更友好的SEO

### 8.1 使用系统Head标签

- 访问Header页面，看到我们设置的title生效了

~~~js
import Head from 'next/head'
function Header(){ 
    return (
        <>
            <Head>
                <title>React学习中！</title>
                <meta charSet='utf-8' />
            </Head>
            <div>react.study.com</div>

        </> 
    )
}
export default Header
~~~

### 8.2 自定义组件

- 自己封装Head组件，然后在页面中引用自己封装的组件

~~~js
import Head from 'next/head'

const MyHeader = ()=>{
    return (
        <>
            <Head>
                <title> react.study.com </title>   
            </Head>
        </>
    )
}

export default MyHeader
~~~

~~~js
import Myheader from '../components/myheader'
function Header(){ 
    return (
        <>
            <Myheader />
            <div>JSPang.com</div>

        </> 
    )
}
export default Header
~~~

## 九. 在Next.js中使用 Ant DesignUI

> 前面说过，Next.js默认不支持CSS，所以想要使用 Antd，最大的问题就是解决CSS不能使用的问题

### 9.1 CSS不支持的问题

1. 安装 @zeit/next-css 包

   ~~~shell
   npm i @zeit/next-css -S
   ~~~

2. 在项目根路径新增配置文件 `next.config.js`

   ~~~js
   const withCss = require('@zeit/next-css')
   
   if(typeof require !== 'undefined'){
       require.extensions['.css']=file=>{}
   }
   
   module.exports = withCss({})
   ~~~

3. 在根目录新建static目录，static目录下新建 test.css

   ~~~css
   body{
       color:red;
   }
   ~~~

4. 在组件中引入CSS文件

### 9.2 Antd 的按需加载

1. 安装 babel-plugin-import 模块

   ~~~shell
   npm i babel-plugin-import -S
   ~~~

2. 在根目录新建 `.babelrc` 文件，添加如下配置

   ~~~json
   {
       "presets":["next/babel"],  //Next.js的总配置文件，相当于继承了它本身的所有配置
       "plugins":[     //增加新的插件，这个插件就是让antd可以按需引入，包括CSS
           [
               "import",
               {
                   "libraryName":"antd",
                   "style":"css"
               }
           ]
       ]
   }
   ~~~

## 十.  打包

> 正常情况下，我们输入 `next build` 命令即可打包成功，输入 `next start -p 80` 即可运行
>
> 但是当我们使用了 Antd之后，执行打包命令会报错
>
> 针对这个问题，系统还没有给出解决方案，但是我们可以通过另外一种方法解决问题

- 在pages目录下面新建一个 `_app.js` 文件，然后写入以下代码

```js
import App from 'next/app'

import 'antd/dist/antd.css'

export default App
```

- 重新打包运行，即可打包成功

## 参考

- 技术胖-Next.js：<https://jspang.com/detailed?id=51#toc21>

