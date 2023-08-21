## 一、FE世界

**(一)互联网公司职位**

1. 运营
2. 产品经理PM
3. 设计师(UI、UE/UX、平面)
4. 前端FE(大前端包括app开发)
5. 后端
6. 测试
7. 运维

**(二)产品从立项到发布完整流程**

1. 立项
2. 需求评审
3. 视觉评审
4. 交互评审
5. 技术评审
6. 开发
7. (前后端)联调
8. 测试评审
9. 提交测试
10. 冒烟测试
11. 正式测试
12. 发布评审
13. 发布上线/代码回滚
14. 项目复盘

*流程是可以简化的,看公司的规模和开发要求*   

**(三)公司对前端的要求**

根据设计效果图了解需求;

编写代码,实现功能;

与后端交互通信;

前端技术文档编写;

不断提升技术：技术调研、架构优化、流程设计

**开发、联调、文档、性能、调研/优化、输出/分享**

**(四)一个web产品的技术架构**

1.**服务器**

时刻运行的程序;

扫描特定端口,接收请求,给出响应

请求和响应都是报文(一大段文字),都遵循着一定的格式/约定/协议(http)

2.**浏览器**



**3.AJAX**

javaScript处理用户交互和数据传输

AJAX：使用javaScript来发送请求,服务器处理请求给出响应

4.**前后端分离与否**

(1).前后端不分离:前后端的工作耦合度高

服务端/后端;HTML是后端构造的;要写HTML后端需要写模版,需要用活数据来填充模版;前端要写CSS和javaScript,操作HTML;



(2).前后端分离:

目前大多是前后端分离,工作量变大,也会出现加载时间变长;

对seo不太友好;但会减少与后端的工作交流,提高开发效率



## 二、技术演化

**(一)李爵士与W3C**

1990左右,**李爵士**,WWW万维网诞生;第一个HTML、server程序、浏览器诞生;

1994,欧朋创始人,发明了CSS

1994左右,W3C诞生,指定web规范

**(二)浏览器大战**

1995,**javaScrip**t作为网景浏览器的附带功能诞生|网景公司——浏览器——97年开源,火狐浏览器

1997,ECMAScript1 颁布——>1998,es2——>1999,es3——es4——2009,es5——2015,es6

1998,IE打败网景

1998,谷歌诞生——2004,gmail

2005,AJAX被发现(通过js局部刷新页面的技术)；2006，jQuery发布

2008,**Chrome**浏览器,V8引擎

2018,微软edge浏览器,直接使用chromium内核

**(三)前端技术大爆炸**

2006,sass——2009,less——2010,stylus (都是css的预处理器)

2008,HTML5标准颁布(包含了部分css3)

2009,node.js发布,js可以在浏览器外运行

2009,CommonJS发布

2010,npm出现,js代码爆发

2010,Express.js—— Three.js—— d3.js——2012,TypeScript 

2011,AMD模块定义出现

2010,backBone.js出现,MVC思想从后端带到前端

2010,Angular.js出现,工程化思想从后端到前端

2013,React.js 出现,简洁的组件化方案

2014,Vue.js出现

2015,es6发布,前端工程师完整了

2016之后,Grunt、Gulp、Webpack,各种UI组件库

## 四、搭环境&方法论

**(一)软件下载**

浏览器:Chrome、Edge、Firefox、Safari、Opera(注意一些功能的兼容问题)

编辑器: Visual Studio Code、WebStrom、IDEA、Hbuilder...

编辑器插件: vs code安装live server(实时刷新)、 live preview(编辑器内打开预览)

其他软件:node.js(下载npm、yarn)、

**(二)学习方法**

1. 搜索

谷歌goole/必应bing——搜索关键字, [内容 |问题]+MDN

2. 提问

预期效果如何?当前情况如何?提供代码、截图、报错

3. 常用网站

- 设计 :figma 、jsdsign
- 查询 :MDN 、 W3Cschool  、 菜鸟教程
- 兼容:caniuse.com
- 博客:语雀、 掘金 、知乎 、CSDN
- 文档:一些语言/框架/工具等的官方文档

4. 学习教程:现代JavaScript教程、阮一峰JavaScript教程、阮一峰ES6教程、JavaScript秘密花园、饥人谷wiki、知乎饥人谷专栏

5. 博客:[知乎]小谷悠悠伴我行、饥人谷学员精选、[简书]饥人谷技术博客

6. 学习方法

   CRM: copy抄——run运行——modify修改

   对于工具,会用,用的熟悉就可以了,原理没必要深入;因为只是工具,拿来用的

7. 经验与建议:在文件命名上要规范,尽量不使用中文,容易出错; 注意标点符号,要使用英文半角; 页面分块思想,从区块到细节; 







## 五、HTML

**doctype html是什么?**

规定文档类型，让浏览器按照标准模式渲染页面

**lang=“en”有什么用?** 

告诉浏览器当前页面的语言，便于浏览器提供翻译建议。en英语、zh中文、ja日语、fr法语......

### ★行(inline)与块(block)

块级元素:独占一行,上下排列

行内元素:共占一行,左右排列,自动换行

行内块元素:具有行内元素水平依次排列的特点,又可以像块级元素一样设置宽高（img、input）

一般情况下,块级元素嵌套块级元素和行内元素; 行内元素嵌套行内元素

#### 重要的块级元素

div、p、h1-h6、header、nav、main、section、article、aside、footer、无序(ul、li )、有序(ol、li )

#### 重要的行内元素

**常见**

a(常见属性href、target、title)、img(属性src、alt)、span 、 button(有个disabled属性,不可点击) ; 



注意:figure、figcaption都是语义化标签,是块级元素; img是行内元素

**文本格式化元素**

b、i、em、strong、u、 sub、sup、del 

**表单**

form标签包裹表单元素;属性active提交给谁、method提交的方法

- 作用:收集用户输入并提交的数据
- 类型:label标签名(for: input的id;或者包裹input)、input输入表单(一定要有name;type的类型有多种:text、password、checkbox复选框、radio单选框、 color、summit、email、file、 date、time、tel)——select、包含若干个option标签(不同的value值用作选择; selected默认选中)——textarea文本框(cols列,rows行)
- 属性作用:required必须填写 —— placeholder 提示信息 ——  autofocus默认聚焦 —— type类型 —— value值(复选框和单选框这些要写value) ——  for绑定id  —— name命名(在选框中用作分组的依据)

**表格**

thead、tbody、tfoot、tr(行)、th(列,在thead)、td(列)

**音视频**

video(controls; width、height)、audio、source



### 常用属性

class、id、href、src、alt、title、name、type、style、for、disabled、value、target、selected、srcset...

**区分 id、class**

id——独一无二的标识

class——特征,共同点,类

*多使用语义化标签,class和id能省则省*

**class起名**

- **传统起名**

  

- **BEM起名**

  



#### 其他

便捷式代码——emmet语法(有相关文档)

规范化代码——缩进(tab键,或者格式化快捷键alt+shift+f) ;  小写;  文件路径(文件路径要么写完整路径(域名)要么写相对路径);  嵌套与闭合







## 六、CSS

**1.引入方式**

- style属性 ：*不推荐使用；一般适用于js修改样式的场景*

  ```html
  <p style="background: orange; font-size: 24px;">样式<p>  
  ```

- style标签 ：*不推荐使用；不易于维护*

  ```html
  <head>
    <style>
      p { 
        color: red; 
      }
    </style>
  </head>
  ```

- link标签：  *推荐使用*

  ```html
  <head>
    <link rel="stylesheet" href="css/style.css">
  </head>
  ```

- @import：不推荐使用,加载变慢

  ```html
  <style>
    @import url(css/style.css);
    @import url("css/style.css");
    @import "css/style.css"; 
    p {
      color: red;
    }
  </style>
  ```
  
  - 写在style标签orCSS文件中；
  - @import必须放在CSS开头；
  - 语法后面的分号必不可少。
  
  **link和@import引入css有什么不同?**
  
  `<link>`是html的标签，在页面代表一个元素可以被JS选中修改; @import 是CSS代码,可以写在style标签和css文件内,JS无法操控;
  
  两个`<link>`,文件会并行加载。一个link包含一个@import，文件会串行加载，加载会更慢，因此不推荐使用@import。

**2.书写规范**

```css
 p {
   font-size: 18px;
   color: red;
 }

 #header {
   padding: 10px;
 }
```
- 选择器后需要加个空格
- 左大括号 { 后要换行
- 属性前面缩进两个空格
- 冒号后面预留一个空格
- 属性: 值后需加分号

**3.两种语法**

```css
/* 这是CSS注释的写法 */

/* 语法1 */
/* @开头，功能多样 */
@media screen and (min-width: 900px) {
  main {
    padding: 10px;
  }
}
/* 语法2 */
/* 选择器 { 属性1: 值1; 属性2: 值2; } */
p {
  font-size: 18px;
}
```

**4.调试方法**

border方法:在需要调试的地方设置border

开发者模式中调试:在浏览器调试,把满意的样式复制到css中

### ★选择器

1. 标签

全局生效,范围广,尽量少用;

一般用于覆盖标签的默认样式（重置样式）

```css
body {
  margin: 0;
}

a {
  text-decoration: none;
}

ul,li {
  line-style:none;
}
```

2. Id

选中一个拥有特定id的元素

```html
<style>
  #header {
    padding: 10px;
    border: 1px solid lightgrey;
  }
</style>
<div id="header">header</div>
```

3. class/类

选中一组拥有特定class的元素

```html
<style>
  .active {
    font-weight: bold;
  }
</style>
<ul>
  <li class="active">项目1</li>
  <li class="active">项目2</li>   
  <li>项目3</li>
</ul>
```

4. 伪类

   选择处于特定状态的元素

   ```html
     <style>
       a:hover {
         color: red;
       }
     </style>
     <a href="#">style样式</a>
   ```

5. 伪元素

   给元素内部添加内容(开头::before、结尾::after);

   减少一些无意义的标签的使用,例如一些iconfonts

   ```html
    <style>
       .icon-check::before {
         content: '✅';
       }
     </style>
     <span class="icon-check">你好</span>
   ```

6. 属性

   [attr]选择包含attr属性的所有元素;

   [attr=val]仅选择attr=val的元素。

   ```html
   <style>
     [disabled] {
       border: 1px solid red;
     }
   
     [data-name="jirengu"] {
       color: red;
     }
   </style>
   <input type="text" disabled>
   <p data-name="lilirx">lilirx</p>
   ```

7. 通配符

   *匹配任意/所有元素

   ```html
   <style>
     * {
       border: 1px solid #ccc;
     }
   
     .box * {
       font-size: 24px;
     }
   </style>
   ```

组合选择器

——以上单一选择器的组合; 用组合符隔开

有祖先（父子）关系的组合，也有兄弟元素的组合

- 空格 ,		A B——A的后代元素B;

- 大于号>,   A>B——A的直接子元素B

- 不隔开,      AB——既是A也是B的元素;

- ,逗号      A,B——分别选中A和B;

- +加号,       A+B——选中A相邻的下一个B;

- ~波浪号,    A~B——选中A后面的全部B。

  

#### 优先级

1. !important > 内联样式 > 选择器设置样式 >浏览器默认样式 > 继承样式

   *继承属性与非继承属性:文本样式会自动继承给后代;布局类背景显示只对当前元素起效;MDN上可以查*

2. 如何优先级相同,则后面的覆盖前面

   

#### 选择器权重计算

千位：内联样式，声明在style的属性

百位：ID

十位：类、伪类、属性

个位：标签、伪元素

通用选择器（*）/组合符（+、>、～、' ')/否定伪类（:not)不会影响优先级





### 常用属性

*单位 :px像素;	      em,继承上级的样式=1em;  	   rem,继承html根样式(默认16px)*

*颜色 ——单词表示、十六进制表达法、rgb、rgba、hsl、hsla、关键字(currentColor当前颜色、transparent透明)*

color:设置字体颜色;

**font**-size字体;——@form-face自定义字体; ——font-style:是否斜体;  ——font-weight:字体粗细; —— ont-size:字号

text-align:文本对齐;——text-decoration:文字划线模式——text-overflow:文本溢出时如何展示

**行高**,一行文字占据的垂直空间;line-height:1.5,即font-size的1.5倍===150%;前面的1.5和150%都会继承给后代 || 20px——写固定高度



**overflow**:hidden隐藏 || scroll滚动 || auto浏览器决定 || visile展示(除了visible,其他值会创建BFC,可用于清除父子外边距折叠)

**隐藏与显示**  ——display:none隐藏(移出普通流,不占位置)||block显示——opacity:0透明(仍在,占位置)——visibility:hidden隐藏(占)

**表格**:在tr、td中设置边框; border-collapse:ollapse合并;

**背景**:

​		背景透明(background- color:rgba)与整体透明opacity

​		linear-gradient直线渐变

​		radial-gradient径向渐变

**盒子**:阴影box-shadow:x偏移量 y偏移量 阴影模糊半径 阴影扩散半径 阴影颜色



### ★布局模式layout★



(以下笔记学自菜鸟教程)

布局的传统解决方案，基于盒模型,依赖display+position+float属性;

2009年，W3C提出了Flex布局;它可以简便、完整、响应式地实现各种页面布局;得到了所有浏览器的支持,使用安全

grid网格布局,最新的浏览器支持

flex一维布局

grid二维布局

### ★flex弹性布局

#### 认识flex

 flex,即 Flexible Box,为盒模型提供最大灵活性

*注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效*

任何容器都能被指定为flex布局(包括行内元素)

```css
.box{
  display: flex;
}
```

```css
.box{
  display: inline-flex;
}
```

webkit内核的浏览器,必须加上- webkit前缀

```css
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

#### 基本概念



#### 容器属性

6个属性作用在容器上:

1. **flex-direction**——决定主轴的方向(item的排列方向)

```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

水平| 水平逆序 | 垂直 | 垂直逆序

依次是

2. **flex-wrap**——定义一条轴线排不下项目时要如何换行

   ```
   .box{
     flex-wrap: nowrap | wrap | wrap-reverse;
   }
   ```

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230201162217616.png" alt="image-20230201162217616" style="zoom:30%;" />

3. **flex-flow**——是flex-direction和flex-wrap的简写形式,默认是row nowrap

   ```
   .box {
     flex-flow: <flex-direction> <flex-wrap>;
   }
   ```

4. **justify- content**——定义了项目在主轴上的对齐方式

   ```
   .box {
     justify-content: flex-start | flex-end | center | space-between | space-around;
   }
   ```

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230201162939740.png" alt="image-20230201162939740" style="zoom:30%;" />

   - flex-start（默认值）：左对齐

   - flex-end：右对齐

   - center： 居中

   - space-between：两端对齐，项目之间的间隔都相等。

   - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

   - space-evenly——所有间隔均匀分配

     

5. **align- items**——定义了项目在交叉轴上的对齐方式

   ```
   .box {
     align-items: flex-start | flex-end | center | baseline | stretch;
   }
   ```

   - flex-start：交叉轴的起点对齐。

   - flex-end：交叉轴的终点对齐。

   - center：交叉轴的中点对齐。

   - baseline: 项目的第一行文字的基线对齐。

   - stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

     <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230201163834900.png" alt="image-20230201163834900" style="zoom:30%;" />

6. **align- content**——定义了多根轴线的对齐方式

   ```
   .box {
     align-content: flex-start | flex-end | center | space-between | space-around | stretch;
   }		 	
   ```

- lex-start：与交叉轴的起点对齐。

- flex-end：与交叉轴的终点对齐。

- center：与交叉轴的中点对齐。

- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。

- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

- stretch（默认值）：轴线占满整个交叉轴。

  <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230201163754111.png" alt="image-20230201163754111" style="zoom:30%;" />



#### 子项属性

6个属性作用在项目上:

1. order——定义了项目的排列顺序,数值越小，排列越靠前，默认为0

2. flex-grow——定义了项目的放大比例;默认值为0

3. flex-shrink——定义了项目的缩小比例;默认值为1

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230202000854765.png" alt="image-20230202000854765" style="zoom:33%;" />

4. flex-basis——在分配多余空间之前，项目占据的主轴空间（main size）设置子项基准尺寸(默认为auto,有width、height则为之)

5. flex——是flex-grow, flex-shrink 和 flex-basis的简写，默认值为1 1 auto

   ```
   .item {
     flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
   }
   ```

   该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

   建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230202003722843.png" alt="image-20230202003722843" style="zoom:50%;" />

6. align-self——允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230202013130127.png" alt="image-20230202013130127" style="zoom:50%;" />



### ★grid网格布局

网格布局由一个父元素及一个或多个子元素组成。

当一个 HTML 元素将 display 属性设置为 grid 或 inline-grid 后，它就变成了一个网格容器，这个元素的所有直系子元素将成为网格元素。



网格是一组相交的水平线和垂直线，它定义了网格的列和行

我们通过 **grid-template-columns** 和 **grid-template-rows** 属性来定义网格中的行和列。这些属性定义了网格的**轨道**，一个网格轨道就是网格中任意两条线之间的空间。



用法:

grid用来画虚拟网格是grid-template-columns和grid-template-rows的缩写,前是行,后面是列;

auto一般用在行,默认是收缩的;fr一般用在列,默认是扩张的;

grid-area:行首/列首/行尾/列尾





### 浮动float

很少用;在需要兼容旧版IE的时候会使用到;



### ★BFC

block formatting context 块级格式化上下文

**BFC特性**

内部块级盒子会在垂直方向上逐个摆放;

垂直方向的间距由margin决定.同属一个BFC的两个相邻盒子的外边距会折叠;

BFC的区域不会和与浮动重叠;

创建的BFC就是页面上的一个隔离的独立容器,内部子元素与外部元素互不干扰;

计算BFC高度时,浮动元素也计算入内

**形成条件**

根元素HTML

float不为0

position为absolute、fixed

display为inline-block、table-cell、flow-root、flow-root list-item

overflow为hidden(副作用最少)、scroll、auto

flex和grid的子项

**BFC作用**

包含内部浮动

排除外部浮动

阻止外边距折叠(阻止父子,不阻止相邻)

### ★定位position

**static**, 普通流中的默认值; 定位元素不包括diaplay: static;

一般用于覆盖设置过其他定位元素的场景;此时top、z-index等属性无效;

**relative**,未脱离文档流(为元素预留空间),元素本身在普通流中的位置未发生变化,只是视觉上发生变化;

一般用作视觉调整(搭配偏移量,偏移量是往相反方向变化);

也经常作为absolute定位的位置参考;

**absolute**,脱离文档流(不预留空间),相对于最近的非static定位的祖先元素来进行偏移

**fixed**,脱离文档流;相对于浏览器窗口;需要设置top或者bottom;width:100%

**sticky**,未触碰到窗口顶部时,相当于普通流里的static;碰到顶部时,脱离文本流,相当于fixed

当有多个sticky时,它们同在一个块会覆盖;不同的块会新的推走上一个

top、right、left、bottom

z-index

**注意事项**

定位元素一般指absolute和fixed的元素

absolute元素 必须设置 位置参考点(父元素,relative)

定位元素的宽度会”收缩”,一般需要设置固定宽度或者宽度100%

设置定位元素的行内元素拥有块级特征,可设置宽高

定位元素脱离普通流,可相互覆盖,通过z-index设置层级

**常用用法**

绝对定位实现垂直水平居中



### ★盒模型box-model





#### padding、margin、border

都是分四个方向,例如margin-left;

border要显现出来一般写三个值:粗细、线、颜色

- 写法-四个值是顺时针; 三个值是上,左右,下; 两个值是上下、左右;一个值是全部
- 常见的块级盒子居中方式:margin: 0, auto(左右为auto)
- border的线: solid实线、dash虚线、dotted点线;
- border- radius设置边框圆角;画圆形border- radius: 50%;
- max-width最大宽度,一般用作页面布局(不同大小的频幕);min-width最小宽度;100vh表示窗口高度
- 

#### ★两种盒模型

##### 1.标准盒模型(W3C)

box-sizing:content-box

width和height都是指content的宽高

##### 2.IE盒模型

盒子的高度宽度都是——padding+border+content

box-sizing:border-box

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230131212433932.png" alt="image-20230131212433932" style="zoom:50%;" />或者是width: calc(100%/3);

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230131214238936.png" alt="image-20230131214238936" style="zoom:50%;" />

两种写法没什么大的区别;第一种更便捷一些;第二种适用性更强,也容易控制和更改

#### 块级/行级盒子

##### 块级盒子block-box

display:block

让盒子在水平方面拓展并占据父元素的容器,下一个盒子会换到下一行;width、height、margin、padding、border都生效

##### 行级盒子inline-box

display:inline

多个行级盒子在一行顺序摆列,放不下会自动换行;对于仅展示文本标签(a、span、em、strong、label等)

width、height设置无效、padding、margin左右有效,上下无效

##### 行块盒子

display:inline- block

既有块级特性,能设置width、height、margin、padding、border;又有行级特性,仅占据自身空间、多个在一行排列

inline元素的缝隙问题

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230131224131275.png" alt="image-20230131224131275" style="zoom:50%;" />

### 外边距折叠margin

#### 相邻元素

相邻块级元素的上下外边距折叠,取其中最大值——推荐只用margin-top来设置

#### 父子嵌套

父元素与其嵌套的后代元素间没有边框、内边距、行内内容,也没有创建格式化上下文,父子外边距会折叠

——给容器添加overflow:hidden或者auto

#### 空块折叠

如果一个块级元素中不包含任何内容，并且在其 margin-top 与 margin-bottom之间没有边框、内边距、行内内容、height、min-height 将两者分开，则该元素的上下外边距会折疊

### ★层叠上下文stacking context

一父多子参与构建的, 遵循一定规则的, 独立的环境

子项可能创建新的上下文,与外层上下文的有同样的规则,且与外层上下文隔绝

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230201213545058.png" alt="image-20230201213545058" style="zoom:50%;" />

层叠规则:

属于同一层叠上下文的同级子项才能比较;

创建层叠上下文,自己和内部一切都会被父项看为一个整体



没有设置是默认z-index=0; 同级比较时,值越大越在前;逐层比较;同一层始终是子元素笔父元素在前,除非子元素z-index的值是负数



### ★其他

**字体图标**

unicode,字符编码对应图形;本质是文字;只可以单色或文字渐变

iconfont阿里巴巴; iconpark字节; fontawesome国外

添加到购物车,导入项目——使用方法:

1. 在使用的地方填写unicode;样式中@font-face定义字体,font-family使用字体

2. 使用font class,把生成的css样式link到文档;直接在使用的标签内添加iconfont和对应的class属性

   每次新加入都要重新生成链接;最后下载到本地,安全稳定

**svg图标**

可以设置多色;使用方法看官方教程

**过渡**transition:针对单一元素,例如color;针对所有all;变化时间;使用函数(变化速度)让样式变化变得平缓自然

**形变**transform:translate平移、rotate旋转、skew倾斜、scale缩放

**动画animation**

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230202150845897.png" alt="image-20230202150845897" style="zoom:33%;" />cubic-bezier、easing网站

**媒体查询**

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230202152110877.png" alt="image-20230202152110877" style="zoom:33%;" />

**响应式布局**









## 七、基础JS

JS的引入方法

- HTML引入`.js`文件;

- 直接在HTML的script标签内编写(建议写在body的末尾,方便渲染)

控制台`console.log( )`可以打印出结果,进行基础调试

变量variable

又叫标识符 ; 是存储数据的符号; 

命名规范:

- 以字母、_、$开头;
- 后续符号可以写数字;
- 区分大小写; 
- 中文合法但少用; 
- 保留字不能使用

使用var、let、const来对变量进行声明(三者有区别,es6规范内容

栈内存——连续的,有序的; 堆内存——无序的



表达式——是一个值,或者说可以得到一个值

运算符——连接表达式,组成复杂的表达式

- 数学运算符——+ - * / %  ++ --  += ....
- <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203191351960.png" alt="image-20230203191351960" style="zoom:33%;" />

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203191821462.png" alt="image-20230203191821462" style="zoom:25%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203191955901.png" alt="image-20230203191955901" style="zoom:25%;" />

- 比较运算符

  <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203192225805.png" alt="image-20230203192225805" style="zoom:35%;" />

- 布尔运算符: !   &&    ||    ?:
- 位运算符<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203193848578.png" alt="image-20230203193848578" style="zoom:33%;" />

- 其他<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203195556622.png" alt="image-20230203195556622" style="zoom:25%;" />

语句——一行任务指令的代码,以分号结尾;一条语句独占一行可以不用分号;一行多条语句,必须分号隔开;

注释comment

- 单行注释//       
- 多行注释/* */

8种数据类型:字符串string、 数字number、 大整数biglnt、 布尔boolean、 空值null、 未定义undefined、符号symbol、对象object

typeof——确定数据类型用于得到数据类型种类;

- null会得出“object“(历史原因)
- funtion会得”function“

运算符的结合性和优先级

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203201508012.png" alt="image-20230203201508012" style="zoom:33%;" />

数字的详细使用：包括进制、转换、小数点保留位数、最大数字、浮点相加、数学函数、随机数等

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203205050461.png" alt="image-20230203205050461" style="zoom:33%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203210141447.png" alt="image-20230203210141447" style="zoom: 50%;" />

字符串的详细使用：包括字符串几种声明方式、拼接、截取等

双引号、单引号、反引号(可以多行);

\转义字符;

字符串模板${变量}



<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203214924988.png" alt="image-20230203214924988" style="zoom:33%;" />

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203215138536.png" alt="image-20230203215138536" style="zoom:33%;" />

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203215707267.png" alt="image-20230203215707267" style="zoom:33%;" />



数组的详细使用

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230203220010263.png" alt="image-20230203220010263" style="zoom:33%;" />

对象的创建、访问和设置属性



1. if、switch、for循环、for in、for of使用

   

2. 函数声明、函数表达式、箭头函数

   

   使用return把结果导出,函数执行到return就立即终止;如果没设置return，默认返回的是undefined

   

3. 函数、字符串、随机数、循环实战

   1. 字符串字符统计

      <img src="/Users/liruixiao/Desktop/截屏2023-02-04 02.54.22.png" alt="截屏2023-02-04 02.54.22" style="zoom:33%;" />

   2. 二进制转十进制

      <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230204133104158.png" alt="image-20230204133104158" style="zoom:25%;" />

   3. 生成随机IP

      <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230204140305608.png" alt="image-20230204140305608" style="zoom:50%;" />

      <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230204142011110.png" alt="image-20230204142011110" style="zoom:50%;" />

   4. 生成随机颜色

      <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230204141839920.png" alt="image-20230204141839920" style="zoom:50%;" />

   5. 打印杨辉三角

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230204165543222.png" alt="image-20230204165543222" style="zoom:33%;" />

1. 引用类型和基础类型的区别

   原始数据/基础数据存储的是值,复制的是值;

   引用类型存储的是地址,复制的是地址,修改的是地址指向的值;

   判断是否相等的时候,比的是是否存储的内容相等;

   参数传递:函数形参如果是引用数据类型,操作形参的内容就是操作实参的内容;如果形参是原始数据,修改后直接return

2. 块级作用域

   {}包含的代码是一个块

   var只有函数作用域;

   let、const有块级作用域

3. var、let、const的区别

   var,容易造成作用域污染;

   let定义变量

   const定义常量,地址不变,改动应用数据内的属性不报错

   

   使用let和const代替var

4. var和function声明前置

   

   

5. 作用域、词法作用域

   

6. TDZ

   作用域链




#### 数组

数组(Array)是一种复杂的数据类型，它属于Object(对象)类型，用来将一组数组合在一起，通过一个变量就可以访问一组数据。在使用数组时，经常会搭配循环语句使用，从而很方便地对一组数据进行处理。

一、创建数组的方式

在JavaScript中创建数组有两种常见的方式，一种是使用“new Array()”创建数组，另一种是使用“[]” 字面量来创建数组。

二、访问数组的元素

三、获取数组的长度

```js
//使用Array构造函数
let arr =new Array()//空数组
let arr0 = new Array(10)//一个参数为长度;长为10的空数组
let arr1 = new Array(v1,v2,v3,v4)//创建时传入多个元素
                     
//使用数组字面量
let arr2 = []

//访问数组中的元素——arrayName[index]-数组名[索引]
//index是从0开始算的
arr1[2]//v3

//数组的长度——arr.length
arr1.length//4
```

四、常用的数组方法

数组的方法有数组原型方法，也有从Object对象继承来的方法，这里我们只介绍数组的原型方法，主要有：

1.　Array.push()，向数组的末尾添加一个或多个元素，并返回新的数组长度。原数组改变。
1.　Array.pop()，删除并返回数组的最后一个元素，若该数组为空，则返回undefined。原数组改变。
1.　Array.unshift()，向数组的开头添加一个或多个元素，并返回新的数组长度。原数组改变。
1.　Array.shift()，删除数组的第一项，并返回第一个元素的值。若该数组为空，则返回undefined。原数组改变。

```js
const arr = [1,2,3,4]

//1.Array.push()，末尾添加一个或多个元素，并返回新数组长度
arr.push(5,6,7)//返回7;此时arr=[1,2,3,4,5,6,7]

//2.Array.pop()，只能删除并返回数组的最后一个元素
arr.pop()//返回7(元素),arr=[1,2,3,4,5,6]

//3.Array.unshift()，向数组的开头添加一个或多个元素
arr.unshift(0,1)//返回8;arr=[0,1,1,...,6]

//4.Array.shift()，只能删除第一项，并返回第一个元素的值
arr.shift()//返回0,arr=[1,1,...,6]
```
5. Array.concat(arr1,arr2…)，合并两个或多个数组，生成一个新的数组。原数组不变。
6. Array.join()，将数组的每一项用指定字符连接形成一个字符串。默认连接字符为 “,” 逗号。
7. Array.reverse()，将数组倒序。原数组改变。
8. Array.sort()，对数组元素进行排序。原数组改变。按照字符串UniCode码排序——在排序时，sort()方法会调用每个数组项的toString()转型方法，然后比较得到的字符串，以确定如何排序;即使数组中的每一项都是数值，sort（）方法比较的是也是字符串——>为了解决上述问题，sort()方法可以接收一个比较函数作为参数;比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回0

```js
//5.Array.concat(arr1,arr2…)，合并两个或多个数组,返回新数组
let arr1 =[23,34,56]
let arr2 = [1,2,3]
let arr3 = arr1.concat(arr2)//合并arr1和arr2

//6.Array.join()，将数组每一项用指定字符连接形成一个字符串
let str1 = arr1.join("-")//str1=23-34-56

//7.Array.reverse()，将数组倒序
arr.reverse()//arr1=[56,34,23]

//8.Array.sort()，对数组元素进行排序
const sortNum = function(a,b){
  return a-b//升序——小到大;//b-a,降序-大到小
}
arr1.sort(sortNum)
```

9. Array.slice（）返回从原数组中指定开始下标到结束下标之间的项组成的新数组。接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下,slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项
```js
let arr = [1,3,5,7,9,11];
let arrCopy = arr.slice(1);
let arrCopy2 = arr.slice(1,4);
let arrCopy3 = arr.slice(1,-2);
let arrCopy4 = arr.slice(-4,-2);
 console.log(arrCopy);  
// [3,5,7,9,11] arrCopy只设置了一个参数，也就是起始下标为1，所以返回的数组为下标1（包括下标1）开始到数组最后。
console.log(arrCopy2); // [3,5,7];设置了两个参数，返回起始下标（包括1）开始到终止下标（不包括4）的子数组。
console.log(arrCopy3); // [3,5,7] arrCopy3设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值来替换该位置的数，因此就是从1开始到4（不包括）的子数组。
console.log(arrCopy4); // [5,7] arrCopy4中两个参数都是负数，所以都加上数组长度6转换成正数，因此相当于slice(2,4)
```

10. splice（）
    很强大的数组方法，它有很多种用法，可以实现删除，插入和替换。

- 删除:可以删除任意数量的项，只需指定2个参数，要删除的第一项的位置和要删除的项数
  例如:splice(0,2)会删除数组中的前两项
- 插入（参数：起止，删除，增加）:可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定3个参数:起始位置，要删除的项数和要插入任意数量的项，
  插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6
- 替换（参数：起止，删除，替换）:可以向指定位置插入任意数量的项，且同时删除任意数量的项
  只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。
  例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。
  注意:splice()方法始终都会返回一个数组,该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组

```js
// 删除:可以删除任意数量的项,传入2个参数,要删除的第一项的位置和要删除的项数,
var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);  
 // (0,2)表示删除前两项
console.log(arr); // [5,7,9,11];
console.log(arrRemoved); // [1,3]; 
 // 返回从原始数组中删除的项，若没有删除任何项，则返回空数组
// 插入:可以向指定位置插入任意数量的项,传3个参数，第一个为起始位置，第二个为要删除的项，第三个为要插入的项
var arrRemoved2 = arr.splice(2,0,4,6);   
// 例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。
console.log(arr); //[5,7,4,6,9,11]
console.log(arrRemoved2);  // []
// 替换:可以向指定位置插入任意数量的项，且同时删除任意数量的项,传入3个参数,第一个为起始位置，第二个要删除的项数，第三为要插入的任意数量的项,插入的项数不必与删除的项数相等
var arrRemoved3 = arr.splice(1,1,2,4);  
// 例如，splice (1,1,2,4)会删除当前数组位置 2 的项，然后再从位置 2 开始插入2和4。
console.log(arr);// [5,2,4,4,6,9,11]
console.log(arrRemoved3);// [7]
```

11. indexOf 和 lastindexOf（）

    indexof():接收两个参数:要查找的项和（可选的）表示查找起点位置的索引，其中，从数组的开头（位置0）开始向后查找(从前往后找)
    lastindexof():接收两个参数:要查找的项个(可选的)表示查找起点位置的索引，其中，从数组的末尾开始向前查找（从后往前找）
    此两种方法都返回要查找的项在数组中的位置，或者再没有找到的情况下返回-1，在比较第一个参数与数组中的没有项时，会使用全等操作符。

```js
     var  arr  = [1,3,5,7,7,5,3,1];
        console.log(arr.indexOf(5));      // 2
        console.log(arr.lastIndexOf(5));  // 5
        console.log(arr.indexOf(5,2));    // 2
        console.log(arr.lastIndexOf(5,4));// 2
        console.log(arr.indexOf('5'));    // -1 
```

12. Array.reduce(function)，reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

```js
let arr = [1,2,3,4,5]
let sum = arr.reduce((a,b)=>a+b)//15
```



五、数组的遍历

```js
 var arr = [1,2,3,4,5]
     for(var i=0;i<arr.length;i++){
         console.log(arr[i]);// 分别打印出 1,2,3,4,5
        }
     for( var j in arr) {
         console.log(arr[j]);// 分别打印出 1,2,3,4,5
        }
```

六、数组的迭代方法

ECMAScript为数组定义了5个迭代方法，每个方法都接收2个参数;要在每一项上面运行的函数和运行该函数的作用域——影响this的值。传入这些方法的函数会接收三个参数（数组项的值，索引，数组本身）

1. Array.forEach(function)，用于调用数组的每个元素，并将元素传递给回调函数。原数组不变。（注意该方法和map的区别，若直接打印Array.forEach，结果为undefined）

```js
 var arr = [1,2,3,4,5];
         arr.forEach(function(item,index,arr) {
            console.log(item+'-'+index+'-'+arr);
                            // 1-0-1,2,3,4,5
                            // 2-1-1,2,3,4,5
                            // 3-2-1,2,3,4,5
                            // 4-3-1,2,3,4,5
                            // 5-4-1,2,3,4,5
         })
         console.log(arr); //[1,2,3,4,5]
```

2. Array.some(function)，对数组中的每一项进行判断，若都不符合则返回false，否则返回true

```js
  var arr = [1,2,3,4,5];
   var b = arr.some(function (value) {
         return value > 3;
       })
  console.log(b);  // true ，因为4,5大于3，因此也返回true
  let c = arr.some(function(value,index,arr) {
         return value > 2 && value > 2
         })
         console.log(c);
         console.log(arr);
```

3. Array.every(function)，对数组中的每一项进行判断，若都符合则返回true，否则返回false。

```js
 var arr = [1,2,3,4,5];
         var b = arr.every(function(value) {
             return value >  3;
         })
         console.log(b);     // false 
         console.log(arr);   // [1,2,3,4,5]
```

4. Array.filter(function)，过滤数组中符合条件的元素并返回一个新的数组。

```js
 var arr = [1,2,3,4,5];
         var a = arr.filter(function (value) {
             return value > 3;
         })
         console.log(a);  //[4,5]
         console.log(arr);//[1,2,3,4,5]
        //  对新数组变化不会影响原数组的改变
        a[1] = 100;
        console.log(a);   // [4,100]
        console.log(arr); // [1,2,3,4,5]
```

5. Array.map(function);原数组的每一项执行函数后，返回一个新的数组。原数组不变。

```js
  var arr  = [1,2,3,4,5];
         var a = arr.map(function (value) {
             return value * 3;
         });
         console.log(a);   // [3, 6, 9, 12, 15] 
         a[1] = 100
         console.log(a);   // [3, 100, 9, 12, 15]
         console.log(arr); // [1, 2, 3, 4, 5] */
        //  之后生成的数组不会影响原数组
```





七、迭代方法

ES6新增了两个归并数组的方法: reduce() 和 reduceRight() 这两个方法都会迭代数组所有的项，然后构建一个最终的值返回
这两个方法都接收了两个参数:一个在每一项上面调用的函数和（可选）作为归并基础的初始值
给reduce()和reduceright()这两个方法的函数都接收四个参数值:前一个值，当前值，索引，数组对象
这个函数返回的任何值都会作为第一个参数自动传给下一项，第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数是数组的第二项

```js
   (1) 第一次执行回调函数的时候,pre为1，cur为2，第二次pre为3（1+2的结果）cur为3(数组的第三项)，
       依次类推，直到将数组的每一项都有访问一遍，最后返回结果
        var value = [1,2,3,4,5];
        var sum  = value.reduce(function(pre,cur,index,array){
            return pre + cur;
        })
        console.log(sum);
        // reduceRight() 与 reduce() 使用一样,只不过是从后往前遍历 
```

八、数组的变异

提示：数组的变异：顾名思义，会改变这些方法调用的原始数组

非变异方法： filer（），concat（），slice（）深拷贝等这些不会改变原始数组，但总是返回一个新数组，可用新数组替换旧数组。
变异： push()和pop()，shift() 和 unshift()，sort()，splice()
非变异： join()，concat()，slice()，indexOf()和 lastIndexOf() （ES5新增），forEach() （ES5新增），some() （ES5新增）,fliter() (ES5新增)，map() （ES5新增），every() （ES5新增），reduce()和 reduceRight() （ES5新增

**栈、队列方法**

Array.push()

pop:从栈尾弹出一个——return 弹出的值

push:从栈尾推入(一个或多个)——return 新数组的长度

unshift:从队头推入

shift:从队头移出



**任意位置添加、删除、替换**

splice(param1, param2,param3)

参数1:开始的位置(index)

参数2:删除元素的个数

参数3:插入的新元素,可以写多个

返回一个由删除元素组成的新数组

splice在原元素上操作,数组长度会发生变化



**拼接**

concat数组拼接

join把数组拼接为字符串

![image-20230204223320338](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230204223320338.png)



排序、反转

sort:会修改原数组;默认是把元素转成字符串排序,一般需要传递排序函数

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205000802428.png" alt="image-20230205000802428" style="zoom: 33%;" />

reverse:数组反转;会改变原数组

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205000446689.png" alt="image-20230205000446689" style="zoom:50%;" />

<img src="/Users/liruixiao/Desktop/截屏2023-02-05 18.20.57.png" alt="截屏2023-02-05 18.20.57" style="zoom:50%;" />



<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205182636238.png" alt="image-20230205182636238" style="zoom:50%;" />

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205184833356.png" alt="image-20230205184833356" style="zoom:50%;" /> <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205185142951.png" alt="image-20230205185142951" style="zoom:50%;" />

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205195651975.png" alt="image-20230205195651975" style="zoom:33%;" />

数组去重

filter,得到新数组

![image-20230205200447024](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205200447024.png)

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205200538350.png" alt="image-20230205200538350" style="zoom:33%;" />



<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205201052350.png" alt="image-20230205201052350" style="zoom:33%;" />

1. Set的用法

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205201905085.png" alt="image-20230205201905085" style="zoom:33%;" />

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205210315570.png" alt="image-20230205210315570" style="zoom:33%;" />

2. Map的用法

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205210930892.png" alt="image-20230205210930892" style="zoom:33%;" />

3. WeakMap的用法

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205210952011.png" alt="image-20230205210952011" style="zoom: 25%;" />

4. 正则表达式详细讲解

   作用:把符合某种规则的字符串取出来;判断string是否符合某种规则;按某种规则分割字符串;替换符合某种规则的字符串

   创建方式:字面量方式:构造函数方式

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205214515589.png" alt="image-20230205214515589" style="zoom:33%;" />

   简单用法:在正则上使用;在字符串上使用

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205214543689.png" alt="image-20230205214543689" style="zoom:33%;" />

   专用字符:具有特殊意义的字符;要匹配这些特殊字符需要转义\

   ( [ { \ ^ $ | ) ? * + .

   常用的匹配规则

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205211550418.png" alt="image-20230205211550418" style="zoom: 25%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205211617543.png" alt="image-20230205211617543" style="zoom: 25%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205211639500.png" alt="image-20230205211639500" style="zoom: 25%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205211702946.png" alt="image-20230205211702946" style="zoom:25%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230205221532417.png" alt="image-20230205221532417" style="zoom:25%;" />

### DOM

1. 获取元素

2. 遍历元素

3. DOM增删改查

4. 属性增删改查

5. class增删改查

6. 样式操作

7. style操作

8. 实战：实现选项卡

   

### 事件流机制

事件是系统内部发生的动作或事情；

   - 用户触发：鼠标点击、拖拽、滚动、键盘按下等

   - 系统生成：文档或图片加载完成、动画结束

   - JS触发：例如调用了HTMLElement.click()

   - 创建自定义事件,并触发EventTarget.dispatchEvent()

     1)设置自定义事件;      2)事件触发被监听函数响应

     

事件流:事件发生时,响应事件的顺序

事件传播(从触发到完成)分**三个阶段**：

   - 捕获阶段capturing从外到内

   - 目标阶段target

   - 冒泡阶段bubbling从内到外

     可以手动设置事件在捕获阶段还是冒泡阶段响应;button.addEventListener(“click”,function( ){....},false)默认是冒泡阶段响应;
     
     大部分浏览器默认是在采用的是**事件冒泡流**



事件分类

1. 鼠标事件: onclick / ondblclick / onmouseenter / onmouseleave  / onmouseover / onmouseout / onmousemove /  oncontentmenu				右键 / onmouseup / onmousedown
   				mouseenter、mouseleave  ⿏标进⼊和移出触发，碰到⼦元素不触发。更常⽤;

​				mouseover、mouseout  ⿏标进⼊和移出触发，碰到⼦ 元素也触发

2. 键盘事件: event.key 、event.ctrlKey、event.shiftKey、 event.metaKey  ; onkeyup、onkeydown
3. 滚动事件: onscroll滚动时触发/ overflow: scroll容器设置  防抖节流

​				相关API : node.scrollTo 滚动到哪⾥/ node.scrollBy 滚动多少 / node.scrollTop 滚动距离 / node.scrollInto

4. 表单事件: onblur失去焦点 / onfocus获得焦点 / onchange表单内容改变且失去焦点 / oninput输入内容 / onsubmit / oncut  / oncopy / 				onpaste粘贴

5. 加载/页面事件: onload/ onunload/ onreload/  DOMContentLoaded,DOM结构解析完成 /  window.onload   所有资源加载完成 /  img.onload  图⽚加载后获取宽度



事件绑定方式

1. HTML元素行间事件/HTML事件处理程序,直接在html标签里添加事件。缺点：html和js代码紧密耦合; 十分不建议使用

2. 添加事件.把一个函数赋值给一个事件处理程序属性（这种方式也叫做DOM0级事件处理程序）简单而且有跨浏览器的优势

   **$btn.onclick = function(){}**赋值方式，后面的赋值会覆盖之前的，导致以前的赋值失效；

3. 通过“事件监听”的方式来绑定事件（也叫DOM2级事件处理程序）**$btn.addEventListener()**函数执行方式；参数较多，功能更强大; 可执行/绑定多次,不会覆盖

事件解绑: removeEventListener (一般是不需要解绑的)



this、event、箭头函数

   事件对象包含:事件的来源e.target; 事件的位置; 键位...

   普通函数的this指向调用函数的对象；

   事件绑定时,普通函数的this代表调用方法的对象;箭头函数没有this，此时的this是外部的

this与event.target
	this是.addEventListener前面的对象;   e.target代表点击的对象   



addEventListener 详解
target.addEventListener(type, listener，useCapature)函数执行；可以接受三个参数;
type:事件类型 (这里的事件没有on)
listener:事件处理方法
useCapture:可选,默认false; true表示在捕获阶段调用listener,false表示冒泡阶段处理

可选项:
{ capture:  是否捕获阶段监听 / once:  是否只监听一次 / passive: 是否忽略preventDefault,提升移动端性能——默认是开启的 }
<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230208171633698.png" alt="image-20230208171633698" style="zoom:50%;" /> 



停止事件传播e.stopPropagation() 

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230208172250087.png" alt="image-20230208172250087" style="zoom:33%;" />

默认事件:a链接的跳转;表单点击后提交等;
阻止默认事件e.preventDefault()

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230208172401417.png" alt="image-20230208172401417" style="zoom:33%;" />

事件代理/委托 :  事件绑定代理给父元素,由父元素根据事件统一处理
							适用于可能会添加子元素的场景 ; 事件代理实际上是事件冒泡的应用

### BOM

**浏览器加载机制**

1. 浏览器渲染流程

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230209134431482.png" alt="image-20230209134431482" style="zoom:25%;" />

   解析HTML标签,构建DOM树——解析CSS,构成CSSOM树——把DOM和CSSOM组合成渲染树(render  tree)——在渲染树上的基础上进行布局,计算每个节点的几何结构——把每个节点绘制在屏幕上(painting)

2. 重绘和回流

   reflow回流:重新计算元素的几何尺寸、位置

   repaint重绘:绘制界面发生变化的部分

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230209135026665.png" alt="image-20230209135026665" style="zoom:33%;" />

   

3. JavaScript的加载

   遇到script标签,如果有src发请求获取JS,执行JS完毕后再解析后续的标签

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230209140534054.png" alt="image-20230209140534054" style="zoom:50%;" />

   建议把引入JS文件放置在body内部的末尾,以便让DOM尽快展示,同时方便JS操作DOM

   

4. CSS的加载

   遇到link标签,会发送请求获取CSS,同时不影响后续标签的解析

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230209140621328.png" alt="image-20230209140621328" style="zoom:50%;" />

   建议把引入CSS文件放置在head标签内,尽可能早的加载CSS

   

5. 白屏加载时间计算

   

6. 异步加载async与defer的区别

    正常情况下JS的加载会阻⽌后续DOM结构的解析，并且多个JS会按顺序依次执⾏

   async的存在不影响DOM的解析和其他资源的加载，特例独行，不保证顺序，不保证时机

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230209141913698.png" alt="image-20230209141913698" style="zoom:50%;" />

   defer存在不影响DOM的解析和其他资源的加载，但是会保证在DOM资源准备就绪后再执行，并且对于多个defer的外置js按顺序执行

   

7. 从url输入到页面展现发生什么

   1. 域名解析,得到IP
   2. 向该IP对应服务器请求获取资源
   3. 后端返回HTML,浏览器解析HTML
   4. 遇到script标签发送请求,js加载后需执行完毕才继续解析后续HTML
   5. 遇到link标签发送请求获取css,同时继续解析后续HTML
   6. HTML标签解析完毕后,构建DOM树. CSS加载完毕后,构建CSSOM树,合并计算得到渲染树,渲染绘制

8. 域名、DNS、服务器的关系

​		申请域名; 购买服务器(公网ip); 

​		将域名与IP映射起来,存储在域名解析服务器DNS



BOM的属性

1. 弹窗——alert()  ;   prompt()

2. 窗口属性——innerWidth 、 innerHeigh ;  open()打开新窗口或选项卡、 close()

3. location属性——location.href=“URL”  ;  location.reload()刷新页面

4. history属性——history.back/forward/go/pushState(data, title, url)/replaceState(data, title, url)

5. navigator属性——navigator.userAgent/geolocation

6. screen属性——screen.width/height/orientation

   

**BOM学习重点**

1. navigator浏览器相关信息

   navigator.userAgent浏览器用户代理

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230209181623216.png" alt="image-20230209181623216" style="zoom: 33%;" />

2. history api

   history.back()返回

   history.forward()前进

   history.go()填入整数,正整数是前进,负整数是后退

   history.pushState添加历史记录条目

   history replace State修改历史记录条目

3. pushState、repalceState、onpopstate实现单页效果

   

4. localStorage的特点和用法

   本地存储; 用于将大量数据(最大5M)保存在浏览器;保存后数据永不过期,除非用js手动清除;不参与网络传输

   在 控制台> 存储>本地存储 找到浏览器存储的数据

   localStorage.setItem()存储

   localStorage.removeItem()删除

   localStorage.getItem()读取

5. cookie的特点和用法

   存储在浏览器上的⼀⼩段数据，⽤来记录 某些当⻚⾯关闭或者刷新后仍然需要记录 的信息 ; 可以⽤ js 在浏览器直接设置（⽤于记录不 敏感信息，如⽤户名）, 也可以在服务端通过使⽤ HTTP 协议规定的 set-cookie 来让 浏览器种下cookie，这是最常⻅的做法 ; 每次⽹络请求 Request headers 中都会带 上cookie。所以如果 cookie 太多太⼤对 传输效率会有影响;  最⼤容量为4k，有过期时间

   Cookie设置时的参数：

   - path：表示 cookie 影响到的路径，匹配该路径才发送这 个cookie。
   - expires 和 maxAge：告诉浏览器 cookie 时候过期， maxAge 是 cookie 多久后过期的相对时间。
   - secure：当 secure 值为 true 时，cookie 在 HTTP  中是⽆效，在 HTTPS 中才有效 
   - httpOnly：浏览器不允许脚本操作 document.cookie  去更改 cookie。⼀般情况下都应该设置这个为 true，这 样可以避免被 xss 攻击拿到cookie

6. session机制

   1. ⽤户在输⼊⽤户名密码提交给服务端，服务端验证通过后会创建⼀个session 对象⽤于记 录⽤户的相关信息，这个 session 可保存在服务器内存中，也可保存在数据库中 

   2. 创建session后，会把关联的session_id 通过setCookie 添加到http响应头部中。

   3. 浏览器在加载⻚⾯时发现响应头部有 set-cookie字段，就把这个cookie 种到浏览器指定域 名下

   4. 当下次刷新⻚⾯时，发送的请求会带上这条cookie， 服务端在接收到后根据这个 session_id来识别⽤户。

   5. cookie 是存储在浏览器⾥的⼀⼩段「数据」，⽽session是服务器⽤来识别身份的⼀段数 据，有时候也特指身份识别机

      <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230209191324888.png" alt="image-20230209191324888" style="zoom:50%;" />

      jwt机制

7. session storage

   与localStorage相似，不同之处在于 localStorage ⾥⾯存储的数据没有过期 时间设置，⽽存储在 sessionStorage ⾥⾯的数据在⻚⾯会话结束时会被清除

8. 给localStorage设置过期时间

   

   

## 八、高级JS

### 内存图

Operating System操作系统OS;

memory计算机中指内存和外存

**内存使用规则**

打开浏览器,浏览器进程出现(浏览器进程又分为插件进程、渲染进程、网络进程、CPU进程);在浏览器中打开页面,新页面进程出现;js在页面中执行时,页面进程会分出一部分内存给js使用;

**内存分区**

栈stack(存放基本类型;除了字符串,其他类型都有固定长度的)——连续的

堆heap(存放对象)——不连续,随机的

### 原型&原型链

对象的共有属性——原型——原型的原型,连起来就成了一条原型链

每一个对象(除了根)都有一个隐藏属性(有些地方是__proto__,有些地方是[[Prototype]]);读取对象属性时,如果找不到,可以到隐藏属性对应的对象上找(共有属性组成的对象也叫原型)

大写开头的都是函数(例如Object、Array、Function)——构造函数——原型是function——原型又是对象object



### 函数&函数调用

1. 函数

​	从代码角度:函数就是给一堆代码起名字,可能有输入,可能有输出

​	从数学角度:函数就是自变量和因变量的关系

​	从时间角度:函数就是被推迟执行的代码,最终会在被调用的时候执行

对函数的三种操作:声明(function、箭头、new Function)、赋值(区分f与f())、调用

2. 函数声明

- 先声明后调用,否则报错(除了var的声明提前)
- 函数声明中的函数声明——跟作用域、闭包有关

3. 函数调用

​	假设函数名为f,有三种方式执行

- f(x,y,z)
- f.call(this,x,y,z)
- f.apply(this, x,y,z)

4. 函数f与函数调用f()

- 函数调用fn()的返回值可以是任何类型,也可以是一个函数

- 函数调用+函数调用,按顺序执行

- 函数调用中的函数调用

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230210184702982.png" alt="image-20230210184702982" style="zoom:25%;" />

 call stack其实就是stack, 调用栈.

在浏览器的开发者工具中可以添加断点，或者代码中加个debugger；如何在call stack中观察

函数执行完后,所有局部变量随之消亡

压栈、弹栈,从下往上

stack overflow,stack溢出,爆栈,从上往下; 梅西调用占用空间变大,容易溢出(但其实正常开发不会溢出)

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230211193116950.png" alt="image-20230211193116950" style="zoom:25%;" />

### 作用域&闭包

变量的作用域,在代码声明的时候就确定了,跟函数执行无关(词法作用域/静态作用域);

就近原则: 遇到同名的,先看当前作用域,再看上级作用域,最后看全局作用域,再找不到,报错

scope作用域; local局部作用域; closure闭包; global全局作用域

闭包(closure)是一个函数以及它绑定的词法环境的引用组合;

简单来说,就是闭包让开发者可以从内部函数访问外部函数的作用域;

闭包是一种特性,支持函数在外面找变量

在JS中,闭包在函数的创建的同时被创建

临时死区tdz temporary dead zone

如果一个函数访问了他外面的只有变量,那么这个函数加这些变量的总和就叫闭包;js中的函数都支持闭包

### 构造函数&类

*面向对象(OO:object- oriented)基础知识*

construct构造——constructor构造器

假设创建了一个构造函数Person（注意，构造函数和类都要首字母大写），此时Person构造出来的实例对象也可以叫做Person对象

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215094501714.png" alt="image-20230215094501714" style="zoom:20%;" />

<img src="/Users/liruixiao/Desktop/截屏2023-02-12 20.45.45.png" alt="截屏2023-02-12 20.45.45" style="zoom:25%;" />

使用`new`的好处：创建对象、准备好了构造函数的共有属性、关联了隐藏属性和共有属性、return新对象

构造函数的共有属性不一定就是函数，自有属性也不一定就不是函数；

构造函数的共有属性是声明时候就已经创建好了的，与函数执行无关；

箭头函数不能做构造函数，因为箭头函数不支持this，没有this，也不自带prototype



class/类的写法

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215095004414.png" alt="image-20230215095004414" style="zoom:20%;" />

class无法在共有属性中写一个非函数属性，除非使用`static`关键字，意为静态变量，只能通过类本身去调用；此外，class也有其他的关键字，例如intends（继承）、super class（超类，父类）、derived  派生类/子类

<img src="/Users/liruixiao/Desktop/class.png" alt="class" style="zoom:33%;" />

class写法是目前初-中级前端常用的写法，使用关键字实现一下需求；构造函数则比较灵活，适合封装函数、调整原型等；



### 封装库

call 调用；    apply 申请；   API 应用编程接口

封装一个简单的jQuery库——jQuery已过时（国内；仅作学习），目前是vue（国内）、react（国外）、angular（国外）等框架为主

*遇到好的代码要收藏保存，使用到的时候可以copy*

为什么都是使用框架开发？因为DOM API太难使用！！！（实战过31、32动态页面后深有体会）

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215102940984.png" alt="image-20230215102940984" style="zoom:25%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215103008233.png" alt="image-20230215103008233" style="zoom:33%;" />

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215103333992.png" alt="image-20230215103333992" style="zoom:25%;" />别名，给一个函数取两个名字，是一种设计模式；

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215103641993.png" alt="image-20230215103641993" style="zoom:25%;" />

没有返回元素或者是伪数组，而是返回了一个jQuery对象（函数/函数的组合）；

回顾一下闭包：

含义——闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合；

作用——并不返回数据本身，而是返回一个能够操作数据的函数（并不是直接return一个函数，而是return一个函数的地址）；

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215104445448.png" alt="image-20230215104445448" style="zoom:25%;" />经典闭包作用（不是指闭包）的例子；图中变量n和add()就形成了闭包；作用：拿到函数来执行

闭包的特点就是能用到的变量保存，其余已使用完或者return的变量的地址都删掉（？）

返回给他人用的函数就是API

jQuery使用闭包的特性来封装

用闭包实现jQuery

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215234412034.png" alt="image-20230215234412034" style="zoom:25%;" />

目前代码在调用多次会造成内存冗余;有三种解决方案:把api移到外面(不好解决)、使用隐藏属性共有属性(原型)、使用class写法

用构造函数和类实现jQuery

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215234823422.png" alt="image-20230215234823422" style="zoom:25%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230215235055395.png" alt="image-20230215235055395" style="zoom:25%;" />

构造函数通过在函数中设置后在调用时可以不加new,但class不可以

class有很多限制,构造函数则更体现js的灵活性;

封装的常用技巧:闭包、对象

### this

**确定this的值**

查看MDN(浏览器/JS提供)、查看浏览器源码(C++)或者是库源码(JS)、看函数调用(不能看函数声明)、console.log(this)

**六种函数调用形式**:

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230217155723681.png" alt="image-20230217155723681" style="zoom:50%;" />

第一种,当在浏览器非严格模式下,this是window,在node.js或者浏览器严格模式下,this是undefined

全部改成call、apply

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230217160016303.png" alt="image-20230217160016303" style="zoom:50%;" />

5. new Fn(参数1)——>new中的this表示新构造出来的对象

6. 箭头函数的this——>箭头函数不支持this,this与普通变量无异f

总结:通过调用可以确定this的值;第一步,记下每次调用形式的this或将调用转为call形式;第二部,将this替换为有意义的变量

函数返回this的时候,调用时可以链式调用

面试题

遇到复杂的调用形式,拆分

this与箭头函数

函数外面的this是根据执行来确认的;函数里面的this是根据声明来确定的

箭头函数不支持this、不支持new,不支持argument,只支持输入和输出

**函数重载**

函数重载,也就是函数同名不同参

通过if...else实现

1. 参数类型不同

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230218003118946.png" alt="image-20230218003118946" style="zoom:33%;" />

2. 参数个数不同

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230218004533410.png" alt="image-20230218004533410" style="zoom:33%;" />

   arguments.length——获取实参长度(个数)

   函数.length——获取形参(param)长度

jQuery其他技巧

如何实现getter(读)和setter(写)

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230218004705518.png" alt="image-20230218004705518" style="zoom:33%;" />





### 任务队列&异步编程

console.time('start开始计时')和Console.timeEnd('end结束计时')可以打印出执行的时间

setTimeout(fn,ms)接收2个参数,第一个是函数,第二个是单位为毫秒的时间;se tTimeout()是浏览器提供的

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220044453559.png" alt="image-20230220044453559" style="zoom:25%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220050102488.png" alt="image-20230220050102488" style="zoom:25%;" />

任务队列,浏览器提供的

任务队列是数组,里面存放异步函数的地址

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220052107351.png" alt="image-20230220052107351" style="zoom:50%;" />



事件循环event loop:宏任务/main(同步>微任务>宏任务1)>宏任务1......

先是浏览器的main宏任务开始,接下来的顺序就是同步代码、微任务、宏任务,微任务和宏任务里面又有微/宏任务,当次宏任务内的微任务顺序放入队列,会本次执行完,宏任务顺序放入队列,后面执行——优先执行小任务

插队:微任务可以在下一次宏任务执行前插入更多微任务,延迟宏任务执行

宏任务之间,时间优先,然后才是入队的先后顺序

微任务 有:script、setTimeout(fn,n)、setInterval()、setImmeditate()、I/O、UI rendering

宏任务 有:queueMicrotask(fn)、process.nextTick、promise、 promise.then()、promise.catch()、object.observe、MutationObserver 

![image-20230220073831270](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220073831270.png)

### 封装AJAX

Async JS And XML

课程中有两个js文件,一个server.js是运行在NodeJS环境下的后端JS文件,使用后端服务器API;一个main.js是运行在浏览器的前端JS文件;它们之间的关联:main.js是被server.js发送给浏览器的,然后main.js被浏览器下载并执行

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220171625649.png" alt="image-20230220171625649" style="zoom:50%;" />在server.js的工作路径下运行终端,

node server.js + 端口号,就可以在node环境下运行server.js文件

条件语句或者switch语句; response.statusCode设置状态; respnose.setHeader设置响应体;response.write设置响应的文件内容;respinse.end响应结束



<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220185404247.png" alt="image-20230220185404247" style="zoom:25%;" />

创建请求——初始化请求——监听请求——发送请求

XMLHttpRequest,微软提供的封装的对象/API,用的人多了就成了事实标准,浏览器厂商倒逼标准

默认XHR/xhr

fetch是ajax的升级,也是一个封装的api

xhr.open('GET读/POST写/DELETE删除/PATCH更新/PUT整体更新','/xxx')前两者可以概括所有

只学get/post,目前学习get,post等高级ajax后

web API接口参考

监听和发送的顺序随意,但一般先监听后发送

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220191225232.png" alt="image-20230220191225232" style="zoom:25%;" />

**.open方法**一般不使用第三个参数的(外行,不专业),如果使用了要解释原因; 很特殊情况下会使用(不得已),例如需要数据上报,但是上报总是失败的情况,可以通过设置第三个参数来解决



封装AJAX

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220195226961.png" alt="image-20230220195226961" style="zoom:25%;" /><img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220195347956.png" alt="image-20230220195347956" style="zoom:25%;" />

参数太多,析构赋值,把参数改为对象

**XMLHttpRequest.readyState属性**返回一个XMLHttpRequest代理当前所处的**状态**,一个XHR代理总是处于下列状态中的一个

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230220192155212.png" alt="image-20230220192155212" style="zoom: 50%;" />



**HTTP响应状态码**(100~599)

100-199信息响应

200-299成功响应

300-399重定向消息

400-499客户端错误响应

500-599服务端错误响应

发请求

在浏览器地址栏输入网址,请求HTML、CSS、JS、PDF、JSON、图片

使用<link ref="stylesheet" href="xxx.css">请求css内容

使用<script src="xxx.js">请求JS内容

<img src="xxx">请求图片内容

JS请求任意内容的通用方式——AJAX

优点:可以请求任何内容(不能跨域)、不用刷新页面

缺点:代码难记忆,使用别人的封装、不能跨域

### 回调与异步

异步==不等待结果(因此也拿不到返回值,是undefined;也可能拿到代结果)

如果执行一个函数,却不等函数返回结果,那么就可以说是异步地执行了函数/执行了一个异步函数

含有setTimeout/queueMicrotask/AJAX的函数,很有可能就是异步函数(不是绝对)

在js里面优先使用异步,因为长时间同步执行会导致浏览器假死  

如何拿到异步代码的结果?

轮询——每隔一段时间询问,setInterval

回调——已登记,把函数作为参数传给函数

什么是回调

函数a的参数是函数b;那么函数b就是回调函数,调用b就叫回调b;本质,回调函数是一种特殊的函数,回调就是一种特殊的调用(被嘱咐的)

**回调地狱callback hell**

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230224102631326.png" alt="image-20230224102631326" style="zoom:50%;" />

回调用多了就会造成回调地狱(需求复杂的情况下)

为了解决这个问题,前端引入了Promise

node风格的回调,一个回调,err；风格不统一

### 请求-响应- cookie-跨域

该课主要都是后端知识，不需要完全掌握；帮助理解网页运行原理；能讲清楚；实际开发中抄晚上现有的代码

**请求request**

方法：

使用浏览器的地址栏，只能get

使用form标签，只能get和post（现在用的少）

使用AJAX（用的多）

使用命令行工具curl+网址

请求的内容：

（一个完整的请求）

1. 请求行——>方法、路径、协议版本

2. 请求头——>大写开头；记住常用的几种

3. 空行/回车

4. 消息体——>对应content- type的文件；其他可以，但是会出bug；（get请求是没有消息体的）

   

   <img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230224224449941.png" alt="image-20230224224449941" style="zoom:50%;" />

   （补充：方法有多种GRT/POST/PATCH/OPTIONS/TRACE，不过更多使用的就是get和post）



**响应response**

方法：

使用Node.js/Python/Java/Go/任何后台语言

响应的内容：

1. 状态行/响应行——协议版本、状态码

   100（很少使用，表示还未完成）

   200，表示成功

   300，重定向

   400，客户端出错（404，网址输入错误

   500，服务端出错（502，503服务器繁忙）

   http cat

2. 响应头

3. 空行/回车

4. 消息体response——对应响应体的文件类型

   ![image-20230224230344588](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230224230344588.png)



查看请求和响应

1. 在浏览器的开发者工具

2. 使用-wireshark抓包 工具

   

TCP连接时的三次握手

![image-20230224231237118](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230224231237118.png)

浏览器——>服务器：SYN（请求建立TCP连接）

服务器——>浏览器：SYN（接受连接请求），ACK（“知道了”回应上一句SYN）

浏览器——>服务器：ACK（晓得了）



TCP断开时的四次挥手

![image-20230224231531140](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230224231531140.png)

SYN通知对方我方要发起一个连接，并告知自己的初始化序列号（synchronize同步）

ACK就是表示“知道了”（acknowledge），每次发了信息后就回应说“知道了”

FIN是结束的意思（finish）

chatgpt的回答：

TCP（传输控制协议）是一种可靠的传输协议，用于在互联网上进行数据传输。TCP协议通过三次握手和四次挥手来建立连接和终止连接。

三次握手的过程如下：

1. 客户端向服务器发送SYN包，表示客户端请求建立连接，并且设置客户端的初始化序列号。
2. 服务器收到SYN包后，回复一个SYN/ACK包，表示接受客户端的连接请求，并设置服务器的初始化序列号，同时也确认客户端的序列号。
3. 客户端收到服务器的SYN/ACK包后，发送一个ACK包，表示客户端已经接受到服务器的确认，并确认服务器的序列号。

这样，TCP连接就建立了，可以开始传输数据了。

四次挥手的过程如下：

1. 客户端向服务器发送FIN包，表示客户端不再发送数据了。
2. 服务器收到FIN包后，回复一个ACK包，表示服务器已经收到客户端的请求。
3. 服务器发送一个FIN包，表示服务器不再发送数据了。
4. 客户端收到服务器的FIN包后，回复一个ACK包，表示客户端已经收到服务器的请求，并且关闭连接。

这样，TCP连接就终止了，双方都可以释放资源。



**Cookie与Session**

Cookie：服务器通过Set-Cookie 响应头 下发给浏览器的一段字符串

特点：未来一段时间内，浏览器向同域名或者子域名发请求时，必须通过请求头 Cookie 带上这段字符串

主要作用：识别用户身份

有规律的是能被伪造的，随机数是不可能伪造的；偷/拷贝走（可行，用户的问题）

![image-20230225001036371](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230225001036371.png)

放在内存（断电等意外，容易丢失）/硬盘（数据库）

session：记录了用户数据的随机数

Cookie存放在浏览器中，是真实的登录信息；Session在服务器的内存或者硬盘中，时候一串随机数

不把重要的明文放在cookie上，容易被窃取；前端的所有数据都是可以篡改的（不靠谱）

浏览器的重要功能

同源策略

同源是一个非常严格的概念

协议、端口、主机名（域名/IP）

完全一致的两个URL（网址）被称为同源

用途：为了保护用户的数据安全；不同源的网页，不能共享数据/偷数据

用命令行curl访问就没有限制；浏览器的插架也没有同源策略；

同一个企业，有不同的域名，不同源，按照同源策略是不可以访问自家公司的另一个域名；

解决方法（都是后端主导）跨域

1. CORS（后端）（Cross Origin Resource Share）

   ![image-20230226083302496](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230226083302496.png)

   步骤假设 a.com:8888 想把 GET /data 共享给 b.com:7777

    /data 在响应头设置 Access-Control-Allow-Origin: http://b.com:7777 （get请求是直接加个响应哦图就可以了；分享者/数据主任来设置）

   复杂请求（MDN）假设 a.com:8888 想把 POST /sign_in 共享给 b.com:7777

   为什么要区分简单请求和复杂请求，因为post请求会造成数据变动，不能随便发请求；因此需要发一个预检请（浏览器自己发的）

   1. a.com 后端需要响应 OPTIONS 请求，细节见 MDN2. a.com 后端需要响应 POST 请求，细节见 MDN总之：CORS 是后端的活儿

      ![image-20230226074609277](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230226074609277.png)

   ![image-20230226083435306](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230226083435306.png)

2. 反向代理（后端）

   一般通过nginx配置实现；浏览器代理是正向代理，服务端的是反向代理

3. JSONP（前后端一起）

   script标签/各种标签不受同源策略的限制；可以执行，但是不能拿到结果（因为不知道源码——可以手动搜索）但还是不能通过AJAX去访问不同源的数据；

   跨域，借此特性

   ![image-20230226075001397](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230226075001397.png)

   ![image-20230226075613522](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230226075613522.png)

   

   优化（不做要求）

   ![image-20230226082947123](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230226082947123.png)工作中几乎很少使用JSONP，因为只支持get方法，没有post；是在cros成为主流前的一种临时跨域解决方案；而且效率较低，需要一个个定义和调用

   总结

   ![image-20230226083156054](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230226083156054.png)

   JSONP本质是个取巧：借助script标签不受同源策略约束、可以请求任意JS的特性，所以后端把数据放在JS中；对回调的使用是JSONP的点睛之笔；

   与JSON毫无关系

   总结：cros让（响应方）后端去设置响应头；JSONP让（响应）后端去改造JSON；反向代理，让（请求方的）后端改造一下Nginx的配置

   ![image-20230226084628963](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230226084628963.png)



### EventEmitter与Promise

（设计模式/编程套路）

**一、发布订阅模式**

流程：

1. 监听/订阅事件addEventListener

2. 触发事件dispatch Event

必须先监听后触发，否则fn（事件执行函数）不会被执行

取消监听：removeEventListener

如果多次监听，则会按监听顺序依次执行

元素是通过原型链中的EventTarget 对象获得方法的

-------

发布订阅模式的特点

api提供了addEventListener/on/subscribe

api提供了dispatchEvent/emit/trigger

api提供了removeEventListener/off/unsubscribe

满足以上条件的对象被称为EventEmmiter(事件发射者),实现了发布订阅模式

本质:把回调函数放在队列里,等待被逐个调用

-------

发布订阅模式解决了什么问题?(作用)

所有异步任务都可以用发布订阅来管理;先订阅成功和失败事件

```js
xhr.on('load');xhr.on('error')
```

再在任务完成时触发成功或者失败事件

```js
xhr.emit('load');xhr.emit('error')
```

是一个通用的异步任务管理方案

缺点:事件少的时候方便管理;事件过多时很难管理



Promise

期约/承诺

Promise/A+规范

只能处理成功或者失败;不能处理进度的问题

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230309200359089.png" alt="image-20230309200359089" style="zoom:50%;" />

Promise可以解决回调地狱的问题(其他社区的技术)

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230309203033032.png" alt="image-20230309203033032" style="zoom:25%;" />

Promise的三态:

待定pending、解决fulfilled/resolved、拒绝rejected

状态变化规则(只有三种情况):

待定=>待定

待定=>解决

待定=>拒绝

 链式调用

```js
	fn().then(s1,f1).then(s2,f2).then(s3,f3).....
  fn().then(s1,f1)
	fn().then(s2,f2)//是基于旧的Promise调用的;会覆盖
```

如果fn()被调用,则必然调用s1,失败则调用f1;

如果s1被调用,则s2和f2都有可能被调用;

- 如果 s1是return data 或return Promise.resolve(data)，那么调用 s2(reason);

- 如果 s2是 return Promise.reject(reason) 或者 throw reason，那么调用f2(reason)

如果f1被调用，那么s2 和f2都有可能被调用;

- 如果f1是return data 或者 return Promise.resolve(data)，那么调用 s2(data)

- 如果f2是return Promise.reject(reason） 或者 throw reason， 那么调用f2(reason)

.then

每次调用.then,都将会创建一个新的Promise;因为久的Promise已经被解决或者拒绝了,只有创建新的Promise才可能改变状态(从pending出发)

如果要从f1到f2,可以在f1后面抛出throw错误

Promise解决的问题:

Promise是一种解决异步问题的通用方案;解决了回调地狱的问题(因为.then不会一直缩进);解决了复杂事件(因为.then直接受成功和失败两种情况)

本质:Promise.prototype.then()把成功函数和失败函数放入队列,resolve()调用成功函数,reject调用失败函数;根据成功或失败的返回值不同,再去调用下一个成功或失败函数

Promise的其他API

catch,捕获错误,catch(fn)等价于then(undefined/null,fn)

finally(fn)===then(fn,fn)

Promise自身属性

Promise.all() - 等待多个异步任务全部成功（一败则败）

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230310210657405.png" alt="image-20230310210657405" style="zoom:50%;" />

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230310210931926.png" alt="image-20230310210931926" style="zoom:33%;" />

Promise.allSettle()- 等待多个异步任务全部成功 （不会失败）

Promise.any()-等待第一个成功（全败则败）

Promise.race()- 等待第一个成功或失败

Promise.resolve()-返回一个成功

Promise.reject()-返回一个失败

### Axios与Mock

新的调试方式Vite——可以边写边执行(响应式)

```sh
#新建目录,使用编译器打开
cd *d#进入目录

#使用Vite创建项目
npm info create-vite versions#查看版本号
npm init vue@latest#使用Vite创建一个Vue项目
#OR
npm create vite@版本号 . -- -- template vanilla#使用vite创建项目(选定版本号和模版)

#开启
npm i[install]#安装依赖
npm run dev#运行
```

可以查看Vite文档

如果网速慢,可以安装国内淘宝源cnpm

移动端的配置也可以抄淘宝的mate>viewport;

使用的时候主要是用index.html、main.js



安装Axios

目前JS社区最流行的前后端HTTP库(前端是AJAX、后端是node.js)

Axios的文档[Axios Docs (axios-http.com)](https://axios-http.com/zh/docs/intro)

```sh
npm info axios versions#查看版本
npm i axios#安装axios
#安装后在node_modules中可以看见axios文件夹
```

```js
//在项目文件中的main.js里面引入并打印,检验是否成功引入
//最新写法
import axios from 'axios'
//历史写法
const axios = require('axios')
```

```js
//axios({config})
// 发起一个post请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
//Axios instance
const axios = new Axios
axios = axios.create({config})
```

Mock模拟一个返回的状态码(造假的服务器接口)

收费的、可能会倒闭的:apifox、apipost

不会倒闭和收费的mock方案:vbenjs/vite-plugin-mock

axios的使用:C-R-M;例如在stackoverflow等论坛抄代码

### ES6语法

#### let、const、var

var函数作用域-重复声明和赋值-变量提升

```js
!function(){//!防止报错;只使用一次直接就匿名函数,减少变量
  var a = 1//函数作用域
  console.log(a)
}()//立即执行函数,使用后就销毁变量
```

let、const块级作用域

```js
let a
a=1
const b=2
{
  let a=3
  console.log(a)//3
  const b = 4//不会报错
  console.log(b)//4
}
console.log(a,b)//1,2
```

let块级变量-不可重复声明但可以重新赋值-变量不提升

const块级常量-不可重复声明和重新赋值(引用类型里面可以改)-必须初始化-变量不提升

#### 箭头函数

语法:fn(()=>{})

```js
const s1 = () => console.log('hello world')
const s2 = a => a*a-a
const s3 = (a,b) => a+b
const s4 = (a,b) => {
  a=a*a-a
  return a+b
}
const sss = (name,age) => ({name:name,age:age})
const ss = (name,age) => [{name:name,age:age}][0]
[function(){}][0]()//立即执行函数,执行第一个
```

*没有参数——不可以省略()*

*一个参数——可以省略括号*

*多个参数——不省略括号*

*返回简单一句——直接省略return一,返回简单运算*

*返回较长语句——大括号和return都不要省;注意返回一个对象的情况*

箭头函数没有this,也没有自带的prototype;this对它而言就是普通的变量

```js
const a = [1,2,3]
//遍历
a.forEach(item=>console.log(item))
a.forEach(console.log)//不等价,其实有三个参数,分别是item、index、array
```

![image-20230310054443895](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230310054443895.png)

参数处理

默认参数

在函数的形参处设置默认值

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230310054923367.png" alt="image-20230310054923367" style="zoom:25%;" />

剩余参数

...argument,必须放在参数的最后

展开操作符

![image-20230310055233345](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230310055233345.png)

#### 模版字符串

`str str ${变量}

str

str`

多行、也可以在变量中插入表达式、带标签

支持unicode

#### 解构赋值

通过匹配来实现变量声明

let a =1;

let b = 2;

[a,b]=[b,a]交换数值,前面的是析构赋值，后面是数组

对象匹配:let {a,b,c}= objABC

#### 模块

import、export

```js
//f.js
const f =() =>{}
export default f//默认导出,不推荐,因为没有名称
export {f,f1,f2}
//another file
import x from './f.js'
import * as x from './f.js'//as换名字
import './f.js'//导入,但无法使用
```

#### 类class

extends实现继承

super关键字

重写构造器

#### 迭代

迭代器:

生成迭代器: .next()——每next一次是生成一次;有value(每次生成的值)和done(false为未结束,true是迭代完毕)

可迭代对象:数组、对象、字符串

for...of

新的数据类型:Symbol、Bigint;Set、Map、WeakSet、WeakMap(跟垃圾回收有关,回收用不到的变量;WeakMap指向的引用不算引用;弱引用,自动清理内存,key不能枚举)

set——数组去重

```js

```





### 高级JS面试题

内存图：stack、Heap、函数与调用栈、任务队列、微任务队列

封装技巧：闭包、构造函数/类

异步编程：setTimeout、queueMicrotask、AJAX、Promise

工具：Axios、Mock、Vite、webpack

设计模式：发布订阅、函数重载、表驱动、链式调用、回调



面试策略：不要求全答对，按得分点回答；不要求一次就过，多面多练；分层次去面试；战略蔑视，战术重视（正常心态但认真）

```js
//01-setTimeout
for(let i=0; i<6; i++){
  setTimeout(function){
    console.log(i)
  },0)
}//
```



解释语言JS、编译语言java、函数式语言、元编程语言ruby

## 九、工程化

### JS模块化

原则:把大程序分割成一个个小模块module

优点:增强代码的可阅读性、可维护性

缺点:太多,需要补救;现代前端工程化的开端

*依赖关系:使用到了某某文件的变量方法等;*

如何高效的组织代码:

1. 注释

优点:极简; 

缺点及解决:1. 忘记加注释——代码审查code review; 2. js文件越来越大——分成多个js文件

2. 函数

优点:简单;

 缺点及解决:全局函数太多——命名空间;调用关系复杂,难以调整顺序——立即执行函数; js文件越来越大——分成多个js文件

3. 命名空间

优点:减少全局变量;

缺点及解决:名字越来越长——无解; 依赖关系不清晰——立即执行函数

![image-20230317135719186](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230317135719186.png)

4. 立即执行函数

立即执行函数➕!(或者其他符号)与前面代码分开

![image-20230317140621311](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230317140621311.png)

首行是形参,末行是实参

优点:可以使用匿名函数(不占用全局变量);可以声明依赖;可以选择导出内容;缺点:无法处理循环依赖

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230317141159863.png" alt="image-20230317141159863" style="zoom:50%;" />

5. commonJS

   nodejs的方法;前端不这么用

require引入; exports导出

```js
//xxx.js,导出变量、方法等
exports.x=x
//另一个文件引入依赖
const xxx = require('./xxx.js')
```

优点:可以文件名当名字.不使用全局变量;可以声明依赖;可以选择导出内容;可以循环依赖;

缺点:不支持异步/浏览器环境

7. 异步模块定义AMD

   ![image-20230318041638160](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230318041638160.png)

   Define(模块名,[依赖],(模块))

优点:用字符串当名字,不使用全局变量;声明依赖;选择导出;循环依赖;异步

缺点:对同步不如commonJS;没有写入es标准

8. ESM(ECMAScript Module)

   最新的模块化方案

   ESM（ES Modules）是 ECMAScript 6 规范中引入的一种模块化规范。相比于 CommonJS 和 AMD 等传统的模块化规范，ESM 拥有更加简洁的语法、更好的异步加载支持、更加灵活的动态绑定和更好的运行时优化等优点。

   相对于 CommonJS 和 AMD 规范，ESM 的主要特点如下：

   1. 静态编译。 意味着浏览器或者 Node.js 等运行时在运行前能够通过静态分析的方式，自动地进行异步加载和构建，提高了运行效率和可靠性。
   2. 自动变量绑定。无需通过 `module.exports` 或者 `exports` 的方式进行模块导出，也无需通过 `require` 或者 `define` 的方式进行模块引入。这使得模块的引入和导出变得更加简洁直观，并且可以优化编译器的工作，使编译输出的代码更加紧凑和高效。
   3. 动态绑定。可以在运行时动态加载、卸载以及替换模块。
   4. 多种导出方式。 ESM 支持默认导出和命名导出两种方式。默认导出只允许模块导出一个值，而命名导出支持多个值的导出，并且可以在导出时使用别名。

```js
//import要放在顶级作用域
import { a } from xxx.js
//import是导入;a是变量
export//导出
```

优点:结合以上功能;支持静态分析(tree-shaking;把没有用到的变量删掉); 支持按需加载;

缺点:不支持拼接字符串;不支持模糊加载——使用代码生成技术;不兼容nodejs的CJS——使用.mjs

在 Node.js 中使用 ESM 是需要开启 `--experimental-modules` 这个选项的，因为在 Node.js 中，默认采用的是 CommonJS 模块化规范，而非 ESM。在浏览器中使用 ESM 的话，需要在 `<script>` 标签中添加 `type="module"` 属性



JS面临的挑战:

- 更新换代太快（标准委员会需要等需求稳定下来）

- 异步加载依赖（大部分后端语言都是同步加载依赖）

- 前后端割裂（Node js 和浏览器差异很大）



### Webpack文档

模块化后遗症:用户要下载的文件太多

解决思路:

- 前端自动化(借助Node.js)![image-20230318051627427](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230318051627427.png)

- 优化网络:让后端将HTTP/1.1升级为HTTP/2; 让用户将浏览器升级到最新

Webpack

- 功能强大:能够满足各种变态需求; 使用广泛:大中小公司都用; 生态繁荣:各种周边插件

- 缺点:配置复杂+英文;运行慢;质量参差,多坑;

其他构建/打包工具:rollup、Vite(使用到了rollup)、Parcel、vue/cli

目前主流webpack;未来可能是**Vite**

webpack文档

学习文档:定任务=>看文档=>搜答案

entry入口(./src/index.js)、output输出、loader加载器、plugin插件、mode

```sh
#安装
npm info webpack versions#查看版本
mkdir webpack-demo
cd webpack-demo
npm init -y #创建一个json
npm install webpack webpack-cli -D #4以后的版本要安装cli;--save-dev缩写为-D
npm config set registry https://registry.npmmirror.com#如果下载太慢,使用淘宝源

#运行cli
./node_modules/bin/webpack#知道路径
npx webpack#全局查找
#或者是在package.json的script加一个"build": "webpack"
```

创建文件: /src、index.js(在/src)、index.html

配置文件webpack.config.js(里面的内容在其官网获取)

补充:

- 生产模式和开发模式的区别:生产模式的代码直接提供给用户下载;开发模式的代码给程序员使用;

- 生产模式的文件有随机后缀是为了方便HTTP设置长缓存的时间(长缓存:请求的资源会被缓存下来,缓存的时间被设置了一段时间)

- 可以有多个输出文件

- loader用来加载文件;plugin用来做其他的任何事情

webpack练习

1. index.html+main.js

   build

   src/*.js=>dist/main.js

入口entry 默认值——src/indexjs + a.js / b.js

出口 output 默认值——dist/main.js

打包命令——npm run build

src 和 dist 的区别(是否兼容旧浏览器)

2. 边开发边预览

<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230319170607476.png" alt="image-20230319170607476" style="zoom:25%;" />

3. 自动运行server

![image-20230319170708610](/Users/liruixiao/Library/Application Support/typora-user-images/image-20230319170708610.png)

4. 显示hello world
5. +Axios/Vue/React
6. +style.css
7. 单独去打包css
8. +logo.js
9. 按需加载某些模块

总结<img src="/Users/liruixiao/Library/Application Support/typora-user-images/image-20230319171030248.png" alt="image-20230319171030248" style="zoom:50%;" />

webpack是空架子,完成任务需要靠loader/plugin

### MVC架构模式



### 脚手架



