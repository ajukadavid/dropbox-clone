import { createApp } from 'vue'
import './styles/app.css'; // Here
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../src/components/Login.vue'
import signup from '../src/components/signup.vue'
import Body from '../src/components/Body.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Body },
        { path: '/', name:'Login', component: Login },
        { path: '/signup', name:'Sign Up', component: signup },
    ]
})


const app = createApp(App)

app.use(router)
app.mount('#app')
