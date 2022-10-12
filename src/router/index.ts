import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import AdminDashboard from '@/views/admin/Dashboard.vue'
import AdminTable from '@/views/admin/Table.vue'
//import LabResults from '@/views/admin/LabResults.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component : Home },
        { path: '/about', name: 'About', component : About },
        { path: '/login', name: 'Login', component: Login },
        { path: '/admin', name: 'Admin', component : AdminDashboard },
        { path: '/table', name: 'Table', component: AdminTable },
        //{ path: '/labresults', name: 'LabResults', component : LabResults },
    ]
})

export default router