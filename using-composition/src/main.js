import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixin from "./mixin";

const app = createApp(App);

app.directive('focus',{
  mounted(el) {
    el.focus()
  }
})

app.use(router);
app.use(mixin);
app.mount('#app');
