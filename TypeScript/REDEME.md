# TypeScript从零开始
## 1.为啥会出现TypeScript？
* 带有类型的JavaScript超集

为什么已经有JavaScript了，还要再来一个TypeScript呢？
首先语言分为两个极端:
+ 一个强调简单方便
+ 一个强调功能强大

而JS最早设计出来就是为了在web端实现一些简单的反馈，或者简单的数据调验发送给服务器，主要强调的就是简单方便，而Java就是冲着企业开发设计的，主打功能强大，那么它功能强大，所带来的就是比较复杂，强调多线程，强调安全性。但是逐渐的更多人对JS的期望比较大，期望能搞出来iOS、Android、等等。但是因为前端的全栈语言也就JS这一种，很多人就感觉比较头疼，这时候微软就站出来了，开发了一个TypeScript的语言，用来弥补JavaScript的缺点，既强调简单好用，又强调安全性等等。

---
## 2.TypeScript有啥好用的？
### 100%兼用JavaScript代码，无需修改平滑迁移
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gerytf7emgj30ao09gwef.jpg)

ES5所具备的东西ES6一个不落
TypeScript在ES6的基础之上，又做了一些改变
这也就是JavaScript超集的概念

---
### 为构建大型应用而生，小型程序也同样适用
    强大的类型系统，静态类型检查能力
    
##### 强大的类型系统，静态检查能力
比如新建一个js
```
let a =12;
a='english'
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gerz8dmmzkj30ao02v3yb.jpg)
js这里是不报错的，甚至可以运行起来
如果新建一个ts，也将这串代码写进去
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gerz9rnt27j30k005y0sq.jpg)
ts就会提示你，我记得a以前是数字啊，你这里怎么又给我来个字符串啊
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gerzzvve2jj30g003vq30.jpg)
如果写一个函数，写了个字符串，但是希望实现求和
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ges08kchrvj30cf04hjr9.jpg)
使用node编译之后的效果是这样的
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ges05yirsxj30cf02aq2r.jpg)
而使用TS之后就不会有这个情况，因为TS是强类型语言，可以定义类型
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ges0hkuj9og315408zqar.gif)

---
##### 丰富的class拓展功能
ES6之前JS是没有class这个概念的，在ES6引入了class的概念，但是没有引入完全
而TS拓展了JS原有的class的功能，Java有的class功能，TS基本都有，Java没有的TS也添加了一些

---

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ges0vwf2cwj30f604cgln.jpg)

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ges13wtltcj30bx0840so.jpg)
我们写一段js代码，在里面定义了一个不想被别人更改的值，但是事实发现，还是能够被更改的
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ges16usjjgj30f604cjra.jpg)
但是在TS中,你定义了一个私有的属性，在外部是无法访问的，只能在内部修改
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ges1bcq9zuj30mw092749.jpg)
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ges1blj2fxj30mw0920sw.jpg)


#### 添加了系统级设计能力<协调开发>
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ges1ia3mccj30f104f0sp.jpg)
学Java的对interface肯定不陌生，就是在实现这个功能之前就把期望写明白
abstract也是个规范，提前定义好规范
毕竟好的代码是不用写注释的

### 生态圈广泛支持，开源项目的新选择 
主流框架都支持，React、Vue、WebPack、Node.js、angular....