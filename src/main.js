import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePullInfiniteScroller from 'vue-pull-infinite-scroller';



createApp(App).use(router).use(store).use(VuePullInfiniteScroller).mount('#app')
