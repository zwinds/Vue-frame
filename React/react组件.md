## react组件
-------
### 无状态组件
* 无状态组件(Stateless Component)是最基础的组件形式
* 由于没有状态的影响所以就是纯静态展示的作用。
* 一般来说，各种UI库里也是最开始会开发的组件类别。如按钮、标签、输入框等。
* 它的基本组成结构就是属性（props）加上一个渲染函数（render）。
* 由于不涉及到状态的更新，所以这种组件的复用性也最强。
```js
const PureComponent = (props) => (
    <div>
        //use props
    </div>
)
```
* 通常就直接使用ES6语法中提供的箭头函数来声明这种组件形式。
* 如果碰到稍微复杂点的，可能还会带有生命周期的hook函数。这时候就需要用到Class Component的写法了。
----
### 有状态组件
* 在无状态组件的基础上，如果组件内部包含状态（state）且状态随着事件或者外部的消息而发生改变的时候，这就构成了有状态组件（Stateful Component）。
* 有状态组件通常会带有生命周期(lifecycle)，用以在不同的时刻触发状态的更新。
* 根据不同的业务场景组件的状态数量以及生命周期机制也不尽相同。
```js

class StatefulComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            //定义状态
        }
    }
 
    componentWillMount() {
        //do something
    }
 
    componentDidMount() {
        //do something
    }
    ... //其他生命周期
 
    render() {
        return (
            //render
        );
    }
}
```
-----
## 容器组件
* 通常的前端数据都是通过Ajax请求获取的，而且获取的后端数据也需要进一步的做处理。
* 为了使组件的职责更加单一，引入了容器组件(Container Component)的概念。
* 将数据获取以及处理的逻辑放在容器组件中，使得组件的耦合性进一步地降低。
```js

var UserListContainer = React.createClass({
  getInitialState: function() {
    return {
      users: []
    }
  },
 
  componentDidMount: function() {
    var _this = this;
    axios.get('/path/to/user-api').then(function(response) {
      _this.setState({users: response.data});
    });
  },
 
  render: function() {
    return (<UserList users={this.state.users} />);
  }
});
```
* 这个容器组件，负责获取用户数据，然后以props的形式传递给UserList组件来渲染。
* 容器组件也不会在页面中渲染出具体的DOM节点，因此，它通常就充当数据源的角色。
* 前很多常用的框架，也都采用这种组件形式。如：React Redux的connect(), Relay的createContainer(), Flux Utils的Container.create()等。
-----
## 高阶组件
* 当面对复杂的需求的时候，我们往往可以利用高阶组件(Higher-Order Component)编写出可重用性更强的组件。
* 它和高阶函数的概念类似，就是一个会返回组件的组件。或者更确切地说，它其实是一个会返回组件的函数。就像这样：
```js
const HigherOrderComponent = (WrappedComponent) => {
  return class WrapperComponent extends Component {
    render() {
      //do something with WrappedComponent
    }
  }
}
```
* 可以在原有组件的基础上，对其增加新的功能和行为。
* 我们一般希望编写的组件尽量纯净或者说其中的业务逻辑尽量单一。
* 但是如果各种组件间又需要增加新功能，如打印日志，获取数据和校验数据等和展示无关的逻辑的时候，这些公共的代码就会被重复写很多遍。
* 因此，我们可以抽象出一个高阶组件，用以给基础的组件增加这些功能，类似于插件的效果。
例如表单检验案例：
```js
//检验规则，表格组件
const FormValidator = (WrappedComponent, validator, trigger) => {
 
   getTrigger(trigger, validator) {
      var originTrigger = this.props[trigger];
 
      return function(event) {
          //触发验证机制,更新状态
          // do something ...
          originTrigger(event);
      }
  }
  var newProps = {
    ...this.props,
    [trigger]:   this.getTrigger(trigger, validator) //触发时机,重新绑定原有触发机制
  };
  return <WrappedComponent  {...newProps} />
}
```
* 同样是给组件增加新功能的方法，相比于使用mixins这种方式高阶组件则更加简洁和职责更加单一。
* 如果使用过多个mixins的时候，状态污染就十分容易发生，以及你很难从组件的定义上看出隐含在mixins中的逻辑。而高阶组件的处理方式则更加容易维护。

+ 另一方面，ES7中新的语法Decorator也可以用来实现和上面写法一样的效果。
```js
function LogDecorator(msg) {
  return (WrappedComponent) => {
    return class LogHoc extends Component {
      render() {
        // do something with this component
        console.log(msg);
        <WrappedComponent {...this.props} />
      }
    }
  }
}
@LogDecorator('hello world')
class HelloComponent extends Component {
 
  render() {
    //...
  }
}
```
---
### Render Callback组件
在组件中使用渲染回调的方式，将组件中的渲染逻辑委托给其子组件。就像这样：
```js
import { Component } from "react";
 
class RenderCallbackCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello"
    };
  }
 
  render() {
    return this.props.children(this.state.msg);
  }
}
const ParentComponent = () =>
  (<RenderCallbackCmp>
    {msg =>
      //use the msg
      <div>
        {msg}
      </div>}
  </RenderCallbackCmp>);
```
* 父组件获取了内部的渲染逻辑，因此在需要控制渲染机制时可以使用这种组件形式。
----
本文来源：https://blog.csdn.net/qq_40479190/article/details/78324244

