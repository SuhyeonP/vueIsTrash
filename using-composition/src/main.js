import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixin from "./mixin";
import i18nPlugin from './plugins/i18n.js'

const app = createApp(App);

const i18nStrings = {
  en: {
    hi: 'Hello',
  },
  ko: {
    hi: '안녕하세오'
  }
}

app.directive('focus',{
  mounted(el) {
    el.focus()
  }
})

app.use(router);
app.use(i18nPlugin, i18nStrings);
app.use(mixin);
app.mount('#app');
