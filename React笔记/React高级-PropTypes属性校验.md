# PropTypes属性校验

[TOC]

> 当父组件向子组件传值的时候，使用了属性的方式，也就是props
>
> 但是我们对 props 的属性没有任何校验和限制，对于大型项目，这会隐藏很多问题

**作用：**PropTypes就是用来限制 props参数的



## 一. props类型校验

1. 下载 `prop-types` 并引入组件

   ~~~shell
   npm install prop-types -S
   ~~~

   ~~~js
   import PropTypes from 'prop-types'
   ~~~

2. 引入后，就可以在组件的最下方（class下面）使用了

   - 这里我们假设A组件的props对象中接收了三个属性，分别为这三个属性设置变量类型
   - 当传递进来的值不满足我们预先定义的变量类型的时候，就会报错

   ~~~js
   import React, { Component } from 'react'; 
   import PropTypes from 'prop-types'
   
   class A extends Component {
       //...略
   }
    //--------------主要代码--------start
   A.propTypes={
       value:PropTypes.string,
       someFunc:PropTypes.func,
       index:PropTypes.number
   }
    //--------------主要代码--------end
   export default A;
   ~~~



## 二. props必传校验

默认情况下，如果子组件中的某个 prop 父组件没有传过来，页面是不会报错的

我们可以通过 PropTypes 的 isRequired属性，将prop设置为必传，如果没传则报错

~~~js
import React, { Component } from 'react'; 
import PropTypes from 'prop-types'

class A extends Component {
    //...略
}
 //--------------主要代码--------start
 //添加 isRequired属性之后，如果父组件没有传value属性，则报错
A.propTypes={
    value:PropTypes.string.isRequired
}
 //--------------主要代码--------end
export default A;
~~~



## 三. props默认值

我们还可以在组件中为某个 prop指定默认值，当父组件没有传该属性的时候，会使用默认值

~~~js
import React, { Component } from 'react'; 
import PropTypes from 'prop-types'

class A extends Component {
    //...略
}
 //--------------主要代码--------start
 //先执行默认值操作，后校验
A.defaultProps = {
    testProp : '[爱运动]'
}

A.propTypes={
    value:PropTypes.string.isRequired,
    testProp:PropTypes.String
}
 //--------------主要代码--------end
export default A;
~~~

**<font color=red>注意：</font>类型检查发生在默认值之后，所以对于默认值，类型检查也生效**