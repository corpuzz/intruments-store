import { createRouter, createWebHistory } from 'vue-router'
import CardParent from '@/components/CardParent.vue'
import ProfileView from '@/views/ProfileView.vue'
import CartView from '@/views/CartView.vue'
import LoginForm from '@/components/LoginForm.vue'
import SignUpForm from '@/components/SignUpForm.vue'
import ProductDescriptionView from '@/views/ProductDescriptionView.vue'
import ProfileAccountView from '@/views/ProfileAccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardParent
    },
    {
      path: '/',
      name: 'shop',
      component: CardParent
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpForm
    },
    {
      path: '/productDescription',
      name: 'productDescription',
      component: ProductDescriptionView
    },
    {
      path: '/profile-details',
      name: 'profile-details',
      component: ProfileAccountView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
