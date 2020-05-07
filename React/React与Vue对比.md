# 相似之处
* 使用 Virtual DOM
* 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。
* 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。

## 生命周期
### react：
* componentWillMount：组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。下一个版本可能会被废弃。
* render：react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。
* componentDidMount:组件渲染之后调用，只调用一次。
* componentWillReceiveProps：组件初始化时不调用，组件接受新的props时调用。
* componentWillUnmount：组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
* componentWillUndate:组件更新结束之前执行，在初始化render时不执行。
* componentDidUndate:组件更新结束之后执行，在初始化render时不执行
* 注意：componentDidMount 里面 setState 导致组件更新，组件更新后会执行 componentDidUpdate，此时你又在 componentDidUpdate 里面 setState 又会导致组件更新，造成成死循环了，如果要避免死循环，需要谨慎的在 componentDidUpdate 里面使用 setState
### vue:
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gek89mlv76j30u023ztaj.jpg)

## 模板和ＪＳＸ
### react：
* HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写

### vue：
* Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。Vue.js 的核心是一个允许你采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统。