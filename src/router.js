// 引用模板
import Home from './component/home/index.vue'
import Login from './component/login/index.vue'

// 配置路由
export default [
    {   // 根目录重定向  
        path: '/login', 
        component: Login  
    },
    {  
        path: '/home',   
        component: Home,  
        children:[  
        ]  
    },   
    {   // 根目录重定向  
        path: '/', 
        redirect: '/home'  
    },  
    {   // 根目录重定向  
        path: '*', 
        component: resolve => require(['./component/page404.vue'], resolve)   
    },
]