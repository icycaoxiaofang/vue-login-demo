// 引入路由组件
import VueRouter from "vue-router"

// 引入页面以及其他组件
import Login from '../views/login/Login'
import Register from '../views/register/Register'
import Home from '../views/home/Home'
import kubernetes from '../views/kubernetes/Kubernetes.vue'
import jenkins from '../views/jenkins/Jenkins.vue'
import { Message } from "element-ui"

// 创建并暴露一个路由器
const router = new VueRouter({
    mode: 'history',    // 路由模式，该模式不会在地址中显示井号#
    routes: [
        {
            path: '/',          // 路径
            redirect: '/login',  // 重定向
        },
        {
            path: '/login',     // 路径
            component: Login,    // 跳转到的组件
            meta:{
                showNav: true
              }
        },
        {
            path: '/register',     
            component: Register,
            meta:{
                showNav: true
              }    
        },
        {
            path: '/home',     
            component: Home
        },
        {
            path: '/Kubernetes',     
            component: kubernetes
        },
        {
            path: '/Jenkins',     
            component: jenkins
        },
    ]
})

// 导航守卫，前置处理
router.beforeEach((to, from, next) => {
    let isAuthenticated = !!sessionStorage.getItem('userInfo')
    // 如果路由要跳转到除了登录和注册的界面的话就判断是否已经登录，如果没有登录就强制跳到登录界面
    if (to.path !== '/login' && to.path !== '/register' && !isAuthenticated) {
        next({ path: '/login' })
        Message({
            message: '请先登录！',
            type: "warning",
        });
    } else next()
})

export default router;