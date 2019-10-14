# Redux Dev Tools使用



## 1. 安装

打开谷歌商店，搜索 Redux DevTools ,安装即可



## 2. 配置和使用

- 在创建 store的时候，将第二个参数设置为如下配置即可

~~~js

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
~~~

