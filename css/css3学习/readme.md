# css3 学习

## css 可实现

- 选择器  圆角效果  块阴影与文字阴影  色彩  渐变效果  个性化字体  多背景图  边框背景图  变形处理  多栏布局  媒体查询  ...

## 边框

### 圆角效果 `border-radius`

   1. `border-radius`  是向元素添加圆角边框
   
   2. 使用方法：
   > `border-radius`:10px;  /* 所有角都使用半径为10px的圆角 */ 

   > `border-radius`: 5px 4px 3px 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角，顺时针 */ 
   
   3. 除了用 `px` 为单位， 还可以用百分号或者 em， 但兼容性不太好
   
   4. 特殊使用：

   - 实心上半圆：把高度(`height`)设为宽度（`width`）的一半，并且只设置左上角和右上角的半径与元素的高度一致（大于也是可以的）
   ``` 
        div{
           height:50px; /*是width的一半*/
           width:100px;
           background:#9da;
           border-radius:50px 50px 0 0;/*半径至少设置为height的值*/
        }
   ```

   - 实心圆：把宽度（`width`）与高度(`height`)值设置为一致（也就是正方形），并且四个圆角值都设置为它们值的一半
   ``` 
        div{
           height:100px;/*与width设置一致*/
           width:100px;
           background:#9da;
           border-radius:50px;/*四个圆角值都设置为宽度或高度值的一半
           */
        }
   ```

### 阴影 `box-shadow`

   1. 向盒子添加阴影， 支持添加一个或者多个
   > `box-shadow`: X轴偏移量 Y轴偏移量 [阴影模糊半径] [阴影扩展半径] [阴影颜色] [投影方式];

   > X轴偏移量：必需，水平阴影的位置，允许负值

   > y轴偏移量：必需，垂直阴影的位置，允许负值

   > 阴影模糊半径：可选，模糊距离

   > 阴影扩展半径：可选，阴影得尺寸

   > 阴影颜色：可选，默认为黑色

   > 投影方式：可选，（设置inset时为内部阴影方式，省略为外阴影方式） ***注意：`inset`可以写在参数的第一个或最后一个，其它位置是无效的***

   2. 为元素设置外阴影：
    `
        .box_shadow{
            box-shadow:4px 2px 6px #333333; 
        }
    `

   3. 为元素设置内阴影：
    ` .box_shadow{
            box-shadow:4px 2px 6px #333333 inset; 
        }
    `

   4. 添加多个阴影：
    ` .box_shadow{
            box-shadow:4px 2px 6px #f00, -4px -2px 6px #000, 0px 
            0px 12px 5px #33CC00 inset;
        }
    `

   5. 阴影模糊半径与阴影扩展半径的区别

   - 阴影模糊半径的值只能取正值，取0表示该阴影没有模糊效果，值越大阴影的边缘越模糊

   - 阴影扩展半径的值可以取正负值，正值表示整个阴影延展扩大，负则缩小

### 为边框加图片  `border-image`  与`background`属性类似
   ` border-image:url(图片路径) 切割图片的宽度 图片延伸方式 `

   - 图片宽度：单位为像素，也可以使用 % ，顺时针的规律设置

   - 图片延伸方式：`round(平铺)`  `repeat(重复)`  `stretch(拉伸)`

   > `repeat` 一直居中（开始）重复 超出部分会被裁掉

   > `round`  圆满的平铺  所以会将图片进行压缩或者延伸

   > `stretch`  就是拉伸
   - 代码示例：
   ```
      #border-image {
             width:170px;
             height:170px;
             border:70px solid;
             border-image:url
             (borderimg.png) 70 
             round;
        }
   ```

## 颜色  `RGBA`
   1. R 红  G 绿  B 蓝  A 在RGB基础上增加了控制alpha透明度的参数

   2. RGB的正整数取值范围为：0~255，百分数值（不是所有浏览器都支持）的取值范围为：0.0% - 100.0%，A取值范围为：0-1，不能取负值
   ` color: rgba(R,G,B,A) `

   3. 渐变色彩
   - 径向渐变 `radial`
   - 线性渐变 `linear`
   ` linear-gradient(渐变方向,颜色的起始点,颜色的结束点) `

   > 颜色的起始点和结束点之间可以有多种颜色

   > 第一个参数省略时，默认为 180deg

   - 指定渐变方向的参数： 角度、英文表示：<br>
   > 从下向上：0deg  &ensp; &ensp;*to top* <br>
     从左向右：90deg  &ensp; &ensp;*to right* <br>
     从上向下：180deg  &ensp; &ensp;*to bottom* <br>
     从右向左：270deg  &ensp; &ensp;*to left* <br>
     右下角到左上角：*to top left* <br>
     左下角到右上角：*to top right* <br>

## 文字与字体  
### `text-overflow 和 word-wrap`

   1. `text-overflow` 设置是否使用一个省略标记来表示对象内文本的溢出，但只能说明用文字溢出用什么方式显示
   - 语法
   ` text-overflow: clip(表示剪切) | ellipsis(表示显示省略标记) `

   - 所以要实现溢出文本显示省略号的效果，还要强制文本在一行内显示，并且溢出内容为隐藏
   - 代码：
   ``` 
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
   ```

   2. `word-wrap` 也可以设置文本行为，当前行超过指定容器的边界时是否断开转行
   - 语法：
   ` word-wrap: normal(表示控制连续的文本换行，浏览器默认值) | break-word(表示内容将在边界内换行，不常用) `

### 嵌入字体 `@font-face`
   - 加载服务器端的字体文件，即使用户电脑里没有安装
   - 语法：设置完成后便可使用普通字体一样及设置字体样式
   ``` 
      @font-face {
              font-family: 字体名称;
              src: 字体在服务器上的路径;
      }
   ```

### 文本阴影 `text-shadow`

   - 用来设置文本的阴影效果

   - 语法：
   ` text-shadow: X-Offset Y-Offset blur color; `

   > `X-Offset`:  表示阴影的水平偏移距离，正值为向右偏移，负则反

   > `Y-Offset`:  表示阴影的垂直偏移距离，正值为向下偏移，负则反

   > `blur`:  表示阴影的模糊程度，不能为负，值越大越模糊，小则反；值为0表示不需要阴影

   > `color`:  表示阴影的颜色，可以用rgba

   - 语法：
   ` text-shadow: 1px 1px 1px #ffff `

## 背景

### `background-origin`
- 设置元素背景图片的原始起始位置
- 语法：
```
   background-origin: 
            border-box(从边框开始);
            padding-box(从内边距开始，默认);
            content-box(从内容区域开始);
```
- **如果背景不是`no-repeat`，这个属性将无效，会从边框开始显示**

### `background-clip`
- 将背景图片做适当的裁剪
- 语法：
```
   background-clip: 
            border-box(从边框向外裁剪，默认);
            padding-box(内填充);
            content-box(从内容区域向外裁剪);
            no-clip(不裁剪);
```
### `background-size`
#### 设置背景图片的大小，用长度值、百分比来显示，还可以通过`cover`、`contain`来对图片进行伸缩
- 语法：
```
   background-size: 
            auto(默认值，不改变原来的高度和宽度);
            长度值(px，成对出现，依此对应宽、高，当只有一个值时表示将其作为图片宽度值进行等比缩放);
            百分比(0~1oo%，成对出现，依此对应宽、高，所在元素宽高乘以百分数得到值，当设置一个值时和auto一样表示);
            cover(覆盖，将图片等比缩放以填满整个容器);
            contain(容纳，等比缩放直到某一边紧贴容器边缘为止);
```

### `multiple backgrounds`
#### 多重背景，缩写时用逗号隔开，分解写时如果有多个背景图片，而某一属性只有一个则表明所有背景图都应用该属性值
- 语法：
```
   background:
            [background-color],
            [background-image],
            [background-position],
            [/background-size],
            [background-repeat],
            [background-attachment],
            [background-clip],
            [background-origin], ...
```
- 可以拆解成：
```
   background-size: size1, size2,...
   background-origin: origin1, origin2,...
   ...
```
- ***注意：如果有`size`值，需要紧跟`position`并且用 / 隔开；`background-color`只能设置一个。***

## css3选择器

### 属性选择器
- 在css2上增加了通配符的概念
- 新增三种属性选择器：
```
   选择匹配元素E，且E元素定义了属性att，其属性值以val开头、结尾、包含的任何字符
   E[att^= "val"]    开头   
   E[att$= "val"]    结尾
   E[att*= "val"]    包含
```

### 结构性伪类选择器

#### `:root`
- 根选择器，匹配元素所在文档的根元素
- 在html文档中的根元素始终是`<html>`
- 例：`:root { background:orange; }`

#### `:not`
- 否定选择器，可以选择除某个元素外的所有元素
- 例如：
```
   input:not([type="submit"]){
      border:70px solid red;
   }
   // 选择除了submit按钮之外的input元素添加样式
```

#### `:empty`
- 空，选择没有任何内容的元素，包括空格等等
- 例如：
```
   h1:empty{
      display:none;
   }
   // 表示隐藏没有任何内容的p标签
```
#### `:target`
- 目标选择器，匹配文档的url的某个标志符的目标元素
- 单个target例如：
```
   <h1><a herf="#brand">Brand</a><h1>
   <div class="menuSection" id="brand">
      ......
   </div>
   ......
   :target{
      display:block;
   }
   // 这里的target指id为brand的div对象
```
- 多个target例如：
```
   <h2><a href="#brand">Brand</a></h2>
   <div class="menuSection" id="brand">
      ......
   </div>
   <h2><a href="#jake">Brand</a></h2>
   <div class="menuSection" id="jake">
      ......
   </div>
   ......
   #brand:target {
      ......
   }
   #jake:target {
      ......
   }
```

#### `:first-child`
- 选择父元素的第一个***子元素***的元素E
- 例如：
```
   <ol>
      <li><a href="##">Link1</a></li>
      <li><a href="##">Link2</a></li>
      <li><a href="##">link3</a></li>
   </ol>
   ......
   ol > li:first-child{
      ......
   }
   // 选择了Link1，为其添加样式
```

#### `:last-child`
- 选择元素最后一个子元素，和`:first-child`刚好相反

#### `:nth-child(n)`
- 定位某个父元素的一个或多个特定的子元素，括号里面的n是参数，可以是(2n+1),...表达式，也可以是整数1，2...,或者关键字(odd,even),参数起始值始终是1
- 当n为表达式时，从0开始计算；为0或者小于0时匹配不到元素

#### `:nth-child(n)`
- 和`:nth-child(n)`相似，但它从某父元素的最后一个子元素开始计算，选择特定的元素

### `:first-of-type`
- 与`:first-child`类似，但它指定了元素类型，主要用来定位一个父元素下的某个类型的第一个子元素
- 例如：
```
   <div class="wrapper">
   <div>......</div>
   <p>......</p>
   ......
   .wrapper > p:first-of-type {
      ......
   }
```

### `:nth-of-type`
- 与`:nth-child(n)`类似，n值一样，但它只计算父元素中指定的某种类型的子元素
- 例如：
```
   .wrapper > p:nth-of-type(2n){
      ......
   }
   // 指定了.wrapper里的p标签
```

### `:last-of-type`
- 与`:first-of-type`类似，但它选择的是父元素下的某个类型的最后一个子元素
- 例如：
```
   .wrapper > p:last-of-type{
      ......
   }
   // 选择.wrapper下所有p标签的最后一个p标签
```

### `:nth-last-of-type(n)`
- 与`:nth-last-of-type(n)`类似，但它的起始方向是从最后一个子元素开始的
- 例如：
``` 
   .wrapper > p:nth-last-of-type(3){
      ......
   }
```

### `:only-child`
- 选择的是父元素中一个唯一的一个子元素
- 例如：
```
   <div class="post">
      <p>......</p>
      <p>......</p>
   </div>
   <div class="post">
      <p>选择的是我</p>
   </div>
   ......
   .post p:only-child {
      ......
   }
   // 选择的是.post下只有唯一一个的p标签
```

### `:only-of-type`
- 表示一个元素它有很多个子元素，而其中只有一种类型的子元素是唯一的，选择这个元素
- 例如：
```
   <div class="wrapper">
      <p>......</p>
      <p>......</p>
      <p>......</p>
      <div>选择了我</div>
   </div>
   <div class="wrapper">
      <div>选择了我</div>
      <ul>
         <li>......</li>
      </ul>
      <p>......</p>
   </div>
   ......
   .wrapper > div:only-of-type {
      ......
   }
   // 选择只有一个div的.wrapper下的div
```

### `:enabled`
- 对表单元素设置样式，如：输入框、密码框、复选框等，默认下都可以用
- 例如：
```
   <form>
      <div>
         <label for="name">Text Input:</label>
         <input type="text" name="name" id="name" placeholder="可用输入框"  />
      </div>
      <div>
         <label for="name">Text Input:</label>
         <input type="text" name="name" id="name" placeholder="禁用输入框"  disabled="disabled" />
      </div>
   </form>
   ......
      input[type="text"]:enabled {
         ......
      }
   // 为type为text的输入框设置样式，但这里第二个输入框已经设置为disabled不可用，所以它无样式
```

### `:disabled`
- 与`:enabled`相反，用来选择不可用的表单元素，即表单元素属性设置里为`display="displayed"`

### `:checked`
- 表单元素里有选中和未选中状态，该选择器表示的是选中状态，配合标签实现自定义样式
- 例如：
```
   <div class="box">
      <input type="checkbox" checked="checked" id="usename" /><span>√</span>
    </div>
    <lable for="usename">选中</lable>
    ......
   input[type="checkbox"]:checked + span {
      opacity: 1;
   }
   // 为有checked="checked"的type="checkbox"复选框设置样式
```

### `::selection`
- 伪元素，用来匹配突出显示的文本（用鼠标选择文本时的文本），从而为其添加样式
- 浏览器默认，鼠标选择网页文本时是深蓝背景和白色字体
- ##注意Firefox不支持，可以用`::-moz-selection`来替代

### `:read-only`
- 伪类选择器，用来指定处于只读状态元素的样式，即元素属性里面设置了`readonly='readonly'`的
- 例如：
```
   <input type="text" name="address" id="address" placeholder="江西" readonly="readonly" />
   ......
   input[type="text"]:read-only{
      ......
   }
   // 为设置了type="text"和readonly="readonly"的元素添加样式
```

### `:read-write`
- 与`:read-only`相反，用来指定当元素处于非只读状态时的样式

### `::before`和`::after`
- 用来给元素的前面或者后面插入内容，常与`content`配合使用，清楚浮动用的多
- 例如：
```
   .effect::before, .effect::after{
      content:"";
   }
   // 在class为.effect的div元素的前后都添加样式
```

## 变形与动画

### 旋转`rotate()`
- 通过指定的角度参数使元素相对原点进行旋转，二维。
- 如果参数为正值，元素相对原点中心顺时针旋转;负则反
- 语法：`transform: rotate(45deg);`

### 扭曲`skew()`
1. 可以让元素倾斜显示，可以将一个对象以其中心位置围绕着X轴和Y轴按照一定的角度倾斜
2. 与`rotate()`不同之处在于`skew()`旋转会改变元素的形状，而`rotate()`不会
   - `skew(x,y)`使元素在水平和垂直方向同时扭曲（X轴和Y轴同时按一定的角度值进行扭曲变形）,如果第二个参数未提供，则值为0，也就是Y轴方向上无斜切
   - `skewX(x)`仅使元素在水平方向扭曲变形（X轴扭曲变形）
   - `skewY(y)`仅使元素在垂直方向扭曲变形（Y轴扭曲变形）

### 缩放`scale()`
- 让元素根据中心原点对对象进行缩放。
   1. scale(X,Y)使元素水平方向和垂直方向同时缩放（也就是X轴和Y轴同时缩放），值默认为1，例如：
   ```
      div:hover {
            -webkit-transform: scale(1.5,0.5);
            -moz-transform: scale(1.5,0.5)
            transform: scale(1.5,0.5);
      }
   ```
   2. scaleX(x)元素仅水平方向缩放（X轴缩放）
   3. scaleY(y)元素仅垂直方向缩放（Y轴缩放）

### 位移`translate()`
- 可以将元素向指定的方向移动，类似于position中的relative。不影响在X、Y轴上的任何Web组件，例如：
```
   .wrapper div {
      -webkit-transform: translate(50px,100px);
      -moz-transform:translate(50px,100px);
      transform: translate(50px,100px);
   }
```
   1. translate(x,y)水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）
   2. translateX(x)仅水平方向移动（X轴移动）
   3. translateY(Y)仅垂直方向移动（Y轴移动）

### 矩阵`matrix()`
- 含六个值的(a,b,c,d,e,f)变换矩阵，二维变换，基于水平方向（X轴）和垂直方向（Y轴）重新定位元素,此属性值使用涉及到数学中的矩阵
？

### 原点`transform-origin`
- 任何一个元素都有一个中心点，默认情况之下，其中心点是居于元素X轴和Y轴的50%处
- 在没有重置transform-origin改变元素原点位置的情况下，CSS变形进行的旋转、位移、缩放，扭曲等操作都是以元素自己中心位置进行变形。通过设置transform-origin可以达到元素使用需要的原点位置，关键词及对应的百分比如下：
```
   top = top center = center top, 50% 0
   right = right center = center right, 100% or (100% 50%)
   bottom = bottom center = center bottom, 50% 100%
   left = left center = center left, 0 or (0 50%)
   center = center center, 50% or (50% 50%)
   top left = left top; 0 0
   right top = top right; 100% 0
   bottom right = right bottom; 100% 100%
   bottom left = left bottom; 0 100%
```
- 语法：
```
   -webkit-transform-origin: left top;
   transform-origin: left top;
```

### 过渡属性
- 通过鼠标的单击、获得焦点，被点击或对元素任何改变中触发，并平滑地以动画效果改变CSS的属性值
- 就是通过鼠标的单击、获得焦点，被点击或对元素任何改变中触发，并平滑地以动画效果改变CSS的属性值
   1. 在默认样式中声明元素的初始状态样式
   2. 声明过渡元素最终状态样式，比如悬浮状态
   3. 在默认样式中通过添加过渡函数，添加一些不同的样式

#### 过度属性之`transition-property`
- transition-property用来指定过渡动画的CSS属性名称，而这个过渡属性只有具备一个中点值的属性（需要产生动画的属性）才能具备过渡效果，其对应具有过渡的CSS属性主要有：
```
   background-color: 
   background-position: 
   border-bottom-color: 
   boder-bottom-width: 
   bottom-left-color: 
   bottom-left-width: 
   bottom-right-color: 
   bottom-right-width: 
   border-spacing: 
   border-top-color: 
   border-top-width: 
   bottom:
   clip:
   color:
   font-size:
   font-weight:
   height:
   left:
   letter-spacing: 
   line-height:
   margin-bottom: 
   margin-left: 
   margin-right: 
   margin-top: 
   max-height:
   max-width:
   min-height: 
   min-width: 
   opacity: 
   outline-color: 
   outline-width: 
   padding-bottom: 
   padding-left: 
   padding-right: 
   padding-top: 
   right:
   text-indent: 
   text-shadow: 
   vertical-align: 
   visibility:
   width:
   word-spacing:
   z-index: 
```
- 例子：
```
   div {
      width: 200px;
      height: 200px;
      background-color:red;
      margin: 20px auto;
      -webkit-transition: background-color .5s ease .1s;
      transition: background-color .5s ease .1s;
   }
   div:hover {
       background-color: orange;
   }
```
-  注意：当“transition-property”属性设置为all时，表示的是所有中点值的属性 

#### 过度属性之`transition-duration`
- transition-duration属性主要用来设置一个属性过渡到另一个属性所需的时间，也就是从旧属性过渡到新属性花费的时间长度，俗称持续时间
- 例子：
```
   -webkit-transition-property: -webkit-border-radius;
   transition-property: border-radius;
   -webkit-transition-duration: .5s;
   transition-duration: .5s;
   // 持续5秒
```

#### 过度属性之`transition-timing-function`
- transition-timing-function属性指的是过渡的“缓动函数”。主要用来指定浏览器的过渡速度，以及过渡期间的操作进展情况，其中要包括以下几种函数：
   1. ease：默认值，从始到终期间速度是由快到慢，逐渐变慢
   2. linear：从始到终期间速度是恒定的
   3. ease-in：从始到终期间速度是越来越快的，呈加速状态，渐显效果
   4. ease-out：从始到终期间速度是越来越慢的，呈减速状态，渐隐效果
   5. ease-in-out：从始到终期间速度是先加速再减速，渐显渐隐效果
- 例子：
```
   -webkit-transition-timing-function: ease-in-out;
   transition-timing-function: ease-in-out;
```

#### 过度属性之`transition-delay`
- transition-delay主要用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行
- 改变两个或者多个css属性的transition效果时，只要把几个transition的声明串在一起，用逗号（“，”）隔开，然后各自可以有各自不同的延续时间和其时间的速率变换方式。但需要值得注意的一点：第一个时间的值为 transition-duration，第二个为transition-delay
`例如：a{ transition: background 0.8s ease-in 0.3,color 0.6s ease-out 0.3;}`

### Keyframes
- Keyframes被称为关键帧,在CSS3中其主要以“@keyframes”开头，后面紧跟着是动画名称加上一对花括号“{…}”，括号中就是一些不同时间段样式规则,例如：
```
   @keyframes wobble {
      0% {
         margin-left: 100px;
         background:green;
      }
      40% {
         margin-left:150px;
         background:orange;
      }
      60% {
         margin-left: 75px;
         background: blue;
      }
      100% {
         margin-left: 100px;
         background: red;
      }
   }
   div {
      width: 100px;
      height: 100px;
      background:red;
      color: #fff;
   }
   div:hover{
      animation: wobble 5s ease .1s;
   }
```
- 在一个“@keyframes”中的样式规则可以由多个百分比构成的，如在“0%”到“100%”之间创建更多个百分比，分别给每个百分比中给需要有动画效果的元素加上不同的样式，从而达到一种在不断变化的效果。
- 在@keyframes中定义动画名称时，其中0%和100%还可以使用关键词from和to来代表，其中0%对应的是from，100%对应的是to。

### 调用动画

#### 调用动画之`animation-name`
- animation-name属性主要是用来调用 @keyframes 定义好的动画,
animation-name 调用的动画名需要和“@keyframes”定义的动画名称完全一致（区分大小写）,如果不一致将不具有任何动画效果
- 语法：
```
   animation-name: none | IDENT[,none|DENT]*;
   none: 默认值，表示没有任何动画效果
   IDENT：表示是由@keyframes 创建的动画名
```

#### 调用动画之`animation-duration`
- 用来指定元素播放动画所持续的时间长，也就是完成从0%到100%一次动画所需时间。单位：S秒
- 语法：
```
   animation-duration: <time>[,<time>]*
   <time>为数值，单位秒，默认为0，即没有动画效果
```

#### 调用动画之`animation-timing-function`
- 用来设置动画播放方式。主要让元素根据时间的推进来改变属性值的变换速率
- 语法规则：
```
   animation-timing-function:
   ease 
   | linear 
   | ease-in 
   | ease-out 
   | ease-in-out 
   | cubic-bezier(<number>, <number>, <number>, <number>) [, ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)]*
```
- 它和transition中的transition-timing-function一样，具有以下几种变换方式：ease,ease-in,ease-in-out,ease-out,linear和cubic-bezier。对应功如下：
   1. ease：默认值，从始到终期间速度是由快到慢，逐渐变慢
   2. linear：从始到终期间速度是恒定的
   3. ease-in：从始到终期间速度是越来越快的，呈加速状态，渐显效果
   4. ease-out：从始到终期间速度是越来越慢的，呈减速状态，渐隐效果
   5. ease-in-out：从始到终期间速度是先加速再减速，渐显渐隐

#### 调用动画之`animation-delay`
- 定义动画开始播放的时间，用来触发动画播放的时间点
- 语法：`animation-delay:<time>[,<time>]*`

#### 调用动画之`animation-iteration-count`
- 用来定义动画的播放次数
- 语法：
```
   animation-iteration-count: infinite | <number> 
   [,infinite | <number>]*
   其值通常为整数，但也可以使用带有小数的数字，其默认值为1，这意味着动画将从开始到结束只播放一次。
   取值为infinite，动画将会无限次的播放
```

#### 调用动画之`animation-direction`
- 用来设置动画播放方向
- 语法：
```
   animation-direction:normal | alternate [, normal | alternate]*
   1.normal是默认值，如果设置为normal时，动画的每次循环都是向前播放
   2.alternate，他的作用是，动画播放在第偶数次向前播放，第奇数次向反方向播放
```

#### 调用动画之`animation-play-state`
- 用来控制元素动画的播放状态
- 有两个参数：running（默认值）和paused，主要作用就是可以通过paused将正在播放的动画停下来，也可以通过running将暂停的动画重新播放，重新播放不一定是从元素动画的开始播放，而是从暂停的那个位置开始播放。如果暂停了动画的播放，元素的样式将回到最原始设置状态

#### 调用动画之`animation-fill-mode`
- 定义在动画开始之前和结束之后发生的操作。主要具有四个属性值：
   1. none:定义在动画开始之前和结束之后发生的操作。主要具有四个属性值：
   2. forwards:表示动画在结束后继续应用最后的关键帧的位置
   3. backwards:会在向元素应用动画样式时迅速应用动画的初始帧
   4. both:元素动画同时具有forwards和backwards效果
- 例子：
`animation-fill-mode:forwards; `

## 布局样式

### 多列布局

#### 多列布局之`columns`
- 主要应用在文本的多列布局方面
- 语法：
`columns：<column-width> || <column-count>`
   1. `<column-width>`:主要用来定义多列中每列的宽度
   2. `<column-count>`:主要用来定义多列中的列数

#### 多列布局之`column-width`
- column-width属性在定义元素列宽的时候，既可以单独使用，也可以和多列属性中其他属性配合使用
- 语法：`column-width: auto | <length>`
   1. 设置值为auto或者没有显式的设置值时，元素多列的列宽将由其他属性来决定
   2. 由数值和长度单位组成，值只能是正值

#### 多列布局之`column-count`
- 用来给元素指定想要的列数和允许的最大列数
- 语法：`column-count：auto | <integer>`
   1. `auto`:默认值，表示元素只有一列，其主要依靠浏览器计算自动设置
   2. `<integer>`:正整数，定义元素的列数

#### 多列布局之`column-gap`
- 用来设置列与列之间的间距
- 语法：
`column-gap: normal || <length>`
   1. `normal`:默认为1em，（如果字号是px，其默认值为font-size值）
   2. `<length>`:整数值，设置列与列之间的距离，可以使用px,em为单位

#### 多列布局之`column-rule`
- 定义列与列之间的边框宽度、边框样式和边框颜色
- 语法：
`column-rule:<column-rule-width>|<column-rule-style>|<column-rule-color>`
   1. `<column-rule-width>`:定义列边框的宽度，默认值为“medium”，可以设置为任意正的浮点数，还可以设置为关键字，如：thick、thin、medium
   2. `<column-rule-style>`:定义列边框样式，默认值为“none”，还可以设置值为：hidden、dotted、dashed、solid、double、groove、ridge、inset、outset
   3. `<column-rule-color>`:定义列边框颜色，默认值为前景色color的值，如果想不显示颜色，也可以设置为transparent(透明色)
- 例子：`column-rule: 2px dotted green; `

#### 多列布局之`column-span`
- 定义一个分列元素中的子元素能跨列多少
- 语法：`column-span: none | all`
   1. `none`:默认值，表示不跨任何列
   2. `all`:跨所有列，并定位在列的Ｚ轴之上

### 盒子模型
- 每一个元素都是一个盒模型，包括html和body标签元素。在盒模型中主要包括width、height、border、background、padding和margin这些属性，他们之间的层次关系可以相互影响
- padding属性和content属性层叠background-image属性，层叠background-color属性，从而构成了Ｚ轴（垂直屏幕的坐标）多重层叠关系；border属性与margin属性、padding属性三者之间是平面上的并级关系
- box-sizing,事先定义盒模型的尺寸解析方式，语法为：`box-sizing: content-box | border-box | inherit`
   1. W3C标准盒模型：
   ```
      外盒尺寸计算（元素空间尺寸）

      element空间高度＝内容高度＋内距＋边框＋外距

      element空间宽度＝内容宽度＋内距＋边框＋外距

      内盒尺寸计算（元素大小）

      element高度＝内容高度＋内距＋边框（height为内容高度）

      element宽度＝内容宽度＋内距＋边框（width为内容宽度）
   ```
   2. IE传统下盒模型：
   ```
      外盒尺寸计算（元素空间尺寸）

      element空间高度＝内容高度＋外距（height包含了元素内容宽度、边框、内距）

      element宽间宽度＝内容宽度＋外距（width包含了元素内容宽度、边框、内距）

      内盒尺寸计算（元素大小）

      element高度＝内容高度（height包含了元素内容宽度、边框、内距）

      element宽度＝内容宽度（width包含了元素内容宽度、边框、内距）
   ```
   3. `content-box`:默认值，其让元素维持W3C的标准盒模型
   4. `border-box`:让元素维持IE传统的盒模型
   5. `inherit`:使元素继承父元素的盒模型模式

### 伸缩布局-Flexbox布局
- 布局灵活、动态、可控
   1. 首先创建一个flex容器，语句如下：
   `.flexcontainer{ display: -webkit-flex; display: flex; }`
- Flex项目实现自动伸缩，语句如下：
`.bigitem{ -webkit-flex:200; flex:200; }  .smallitem{ -webkit-flex:100; flex:100; }`

- 详解参见：flex布局之道！！！

## Media Queries

### 查询媒体、调用样式
- 通过CSS3来查询媒体，然后调用对应的样式
- 媒体类型（media type），通过CSS3来查询媒体，然后调用对应的样式
   ```
      All---------------所有设备
      Braille-----------盲人用点字法触觉回馈设备
      Embossed----------盲文打印机
      Handheld----------便携设备
      Print-------------打印用纸或打印预览视图
      Projection--------各种投影设备
      Screen------------电脑显示器
      Speech------------语音或音频合成器
      Tv----------------电视机类型设备
      Tty---------------使用固定密度字母栅格的媒介，比如电传打字机和终端
   ```

### 媒体类型的引用
   1. link方法，语句如下：
   ```
      <link rel="stylesheet" type="text/css" href="style.css" media="screen" />
      <link rel="stylesheet" type="text/css" href="print.css" media="print" />
   ```

   2. @import方法，一种是在样式中通过@import调用另一个样式文件；另一种方法是在`<head></head>`标签中的`<style></style>`中引入（不被IE6~7支持），语句如下：
   ```
      @importurl(reset.css) screen;   
      @importurl(print.css) print;
      <head>
         <style type="text/css">
            @importurl(style.css) all;
         </style>
      </head>
   ```
   3. @media方法，称为媒体查询，一种是在样式文件中引用，另一种是在`<head>`标签中的`<style>`中引用,语句如下：
   ```
      // 在样式文件中引用媒体类型
      @media screen {
         选择器{/*你的样式代码写在这里…*/}
      }
      // 在<head>标签中的<style>中引用
      <head>
         <style type="text/css">
            @media screen{
               选择器{/*你的样式代码写在这里…*/}
            }
         </style>
      </head>
   ```

### 使用方法
- 有自己的使用方法：`@media 媒体类型and （媒体特性）{你的样式}`
- 媒体特性的书写方式主要分为两个部分，第一个部分指的是媒体特性，第二部分为媒体特性所指定的值，如下：
`(max-width: 480px)`
   1. 最大宽度max-width：指媒体类型小于或等于指定的宽度时，样式生效
   2. 最小宽度min-width：与“max-width”相反，例如：
   ```
      @media screen and (min-width:900px){
         .wrapper{width: 980px;}
      }
   ```
   3. 多个媒体特性使用，使用关键词"and"将多个媒体特性结合在一起，例如：
   ```
      @media screen and (min-width:600px) and (max-width:900px){
         body {background-color:#f5f5f5;}
      }
   ```    
   4. 设备屏幕的输出宽度Device Width,对于屏幕设备可以使用“min/max”对应参数，如“min-device-width”或者“max-device-width(可视面积分辨率)”进行设置，例如：
   ```
      <link rel="stylesheet" media="screen and (max-device-width:480px)" href="iphone.css" />
   ```
   5. not关键字，表示对后面的表达式执行取反操作，如：
   `@media not print and (max-width: 1200px){样式代码}`表示的是：样式代码将被使用在除打印设备和设备宽度小于1200px下所有设备中
   6. only关键字，指定某种特定的媒体类型，排除不支持媒体查询的浏览器，如下：
   ```
      <linkrel="stylesheet" media="only screen and (max-device-width:240px)" href="android240.css" />
   ```
   7. 在Media Query中如果没有明确指定Media Type，那么其默认为all,如下：
   ```
      <linkrel="stylesheet" media="(min-width:701px) and (max-width:900px)" href="mediu.css" />
   ```
   8. 在样式中，还可以使用多条语句来将同一个样式应用于不同的媒体类型和媒体特性中，如：
   ```
      <linkrel="stylesheet" type="text/css" href="style.css" media="handheld and (max-width:480px), screen and (min-width:960px)" />
   ```
   9. Media Queries在其他浏览器中不需要像其他CSS3属性一样在不同的浏览器中添加前缀

