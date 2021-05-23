import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from "./i18n/i18n"

import resetcss from "./assets/css/reset.css";

Vue.config.productionTip = false;
localStorage.setItem("lang", 'zh');
localStorage.setItem("theme", 'primary');
Vue.mixin({
  created: function () {
    document.getElementsByTagName("body")[0].className = localStorage.getItem("theme")?"theme-" + localStorage.getItem("theme"):"theme-primary";
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
