import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
//admin
import AdminDashboard from '@/views/admin/Dashboard.vue'
import Laboratory from '@/views/admin/Laboratory.vue'
//user
import UserLaboratory from '@/views/user/Laboratory.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component : Home },
        { path: '/about', name: 'About', component : About },
        { path: '/login', name: 'Login', component: Login },
        { path: '/admin', name: 'Admin', component : AdminDashboard },
        { path: '/laboratory', name: 'Laboratory', component: Laboratory },
        { path: '/user_laboratory', name: 'UserLaboratory', component: UserLaboratory },
    ]
})

export default router