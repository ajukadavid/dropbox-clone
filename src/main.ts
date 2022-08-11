import { createApp } from 'vue'
import './styles/app.css'; // Here
import App from './App.vue'
import VueRouter from 'vue-router'

import Login from '../src/components/Login.vue'
import signup from '../src/components/signup.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: signup },
  ]


const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(router)

app.mount('#app')
