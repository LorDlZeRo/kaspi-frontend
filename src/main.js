import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './components/pinia'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);
const serverUrl = 'http://localhost:3000';
const app = createApp(App)
    app.use(pinia)

    app.config.globalProperties.$serverUrl = serverUrl;
    app.component('font-awesome-icon', FontAwesomeIcon);
    app.use(router)
    
    app.mount('#app')
    