import { createRouter, createWebHashHistory } from 'vue-router'
import * as firebase from 'firebase/auth'
import "firebase/auth"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomePage.vue') },
    { path: '/login', name: 'login', component: () => import('../views/LoginPage.vue') },
    { path: '/register', name: 'register', component: () => import('../views/RegisterPage.vue') },
    { path: '/news', name: 'news', component: () => import('../views/NewsPage.vue')},
    { path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfilePage.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to,from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuth = firebase.getAuth().currentUser
  if(requiresAuth && !isAuth) {
    next("/login")
  } else {
    next()
  }
})


export default router
