# 1.应用 px2rem 来实现根据屏幕大小（浏览器窗口）变化（resize）时的自适应宽高

## 1.1 安装依赖

```bash
npm i px2rem-loader -D
```

## 1.2 在 vue.config.js 中配置

```js
 chainWebpack: (config) => {
        config.module
        .rule('less')
        .oneOf('vue')
        .use('px2rem-loader')
        .loader('px2rem-loader')
        .before('postcss-loader') // this makes it work.
        .options({ remUnit: 1920, remPrecision: 8 })
        .end()
    },
```

## 1.3 在 index.html 中配置网页根元素的 font-size 值

```js
<script>
    let docEle = document.documentElement;
    function setRemUnit () {
    docEle.style.fontSize = docEle.clientWidth  + 'px';
    }
    setRemUnit();
    window.addEventListener('resize', setRemUnit);
</script>
```

## 1.4 使用

> 在使用到的地方，直接用 px 作为单位(即设计尺寸为多大就写多大)

```css
.resume-container {
  width: 1000px;
  height: 1000px;
  border: 2px solid #333;
  margin: 0 auto;
  font-size: 16px;
}
```

## 1.5 vue cli 3.x 的坑之 px2rem-loader

使用 vue cli 3.x 脚手架搭建项目，在 `vue.config.js` 里面配置 `px2rem-loader` 后，一直报错

```bash
Module build failed (from ./node_modules/px2rem-loader/index.js):
Error: undefined:1:40: missing '{'
```

在 px2rem-loader 的 issues 有相同的问题，作者回复建议使用 postcss 插件来代替这个 loader

```js
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 1920,
          }),
        ],
      },
    },
  },
};
```

# 2.使用 i18n 插件实现多语言配置

## 2.1 下载模块

```bash
npm install --save vue-i18n
```

## 2.2 文件配置

```bash
|--i18n
    |--langs
        |--en.js
        |--cn.js
        |--index.js
    |--i18n.js
```

### 2.2.1 en.js

```js
const en = {
  message: {
    "Job Intention": "Job Intention",
    "Professional Skills": "Professional Skills",
    "Project Experiences": "Project Experiences",
    "Work Experience": "Work Experience",
    "Educational Background": "Educational Background",
    "Self Evaluation": "Self Evaluation",
  },
};
export default en;
```

### 2.2.2 cn.js

```js
const cn = {
  message: {
    "Job Intention": "求职意向",
    "Professional Skills": "专业技能",
    "Project Experiences": "项目经验",
    "Work Experience": "工作经历",
    "Educational Background": "教育背景",
    "Self Evaluation": "自我评价",
  },
};
export default cn;
```

### 2.2.3 index.js

```js
import zh from "./cn";
import en from "./en";
const message = {
  zh: {
    ...zh,
  },
  en: {
    ...en,
  },
};
export default message;

// import zh from "./cn"
// import en from "./en"
// import zhLocale from "element-ui/lib/locale/lang/zh-CN"
// import enLocale from "element-ui/lib/locale/lang/en"
// const message = {
//     "zh":{
//         ...zh,
//         ...zhLocale
//     },
//     "en":{
//         ...en,
//         ...enLocale
//     },
// }
// export default message
```

### 2.2.4 i18n.js

```js
import Vue from "vue";
// import locale from "element-ui/lib/locale"
import VueI18n from "vue-i18n";
import messages from "./langs";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: window.localStorage.getItem("lang") || "zh",
  messages,
});
// locale.i18n((key,value)=>{i18n.t(key,value)})
export default i18n;
```

## 2.3 在入口文件`main.js`中

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
+ import i18n from "./i18n/i18n"

import resetcss from "./assets/css/reset.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
+  i18n,
  render: h => h(App)
}).$mount('#app')
```

## 2.4 在页面中使用

### 2.4.1 `$t('message.xxx')`

```html
<title :titleName="$t('message.JobIntention')">
  <ul class="info-items"> <li>意向岗位：web前端开发</li> <li>意向城市：杭州</li>
  <li>期望薪资：面议</li> <li>求职类型：全职</li> </ul>
</title>
```
### 2.4.2 点击按钮切换语言
```html
 <div class="lang-box">
    <span
    @click="switchLang('zh')"
    :class="{ langActive: langActive('zh') }"
    >CN</span
    >
    <span></span>
    <span
    @click="switchLang('en')"
    :class="{ langActive: langActive('en') }"
    >EN</span
    >
</div>
```
```js
computed: {
langActive() {
    return function(lang) {
    //使用函数返回
    return lang === localStorage.getItem("lang");
    };
},
},
methods: {
switchLang(lang) {
    console.log(lang);
    console.log(this.$i18n);
    this.$i18n.locale = lang;
    localStorage.setItem("lang", lang);
},
},
```
