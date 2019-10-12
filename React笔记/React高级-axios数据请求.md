# React高级-axios数据请求



## 一. 安装

> 对Ajax的封装

~~~shell
npm install -save axios
~~~



## 二. 引入界面

~~~js
import axios from 'axios'
~~~



## 三. 使用

> 引入 axios 之后，我们就可以在文件中发送 Ajax请求，这里有一些注意事项
>
> **注意事项：**
>
> - 建议在 `componentDidMount` 生命周期函数里面请求 `Ajax` 
> - 在 `render` 和 `componentWillMount` 里面执行的时候，会出现很多问题和冲突

**示例：**

~~~js
componentDidMount() {
        console.log('React生命周期-----执行componentDidMount函数，组件完成挂载')
        axios.get('https://www.easy-mock.com/mock/5d3952520d5f364f19db58b2/getLunBoTu')
        .then((res)=>{
            console.log('axios获取数据成功：' + JSON.stringify(res))
        }).catch((err)=>{
            console.log('axios获取数据失败：' + err)
        })
    }
~~~

- 更多axios方法详见官方文档

- [axios-中文文档](http://www.axios-js.com/zh-cn/docs/)

- [github-axios](https://github.com/axios/axios)

