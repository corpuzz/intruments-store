import { createRouter, createWebHistory } from 'vue-router'
// import CardParent from '@/components/CardParent.vue'
import CartView from '@/views/CartView.vue'
import LoginForm from '@/components/LoginForm.vue'
import ProductDescriptionView from '@/views/ProductDescriptionView.vue'
import ProfileAccountView from '@/views/ProfileAccountView.vue'
import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ProfileView from '@/views/ProfileView.vue'
import CheckoutPayment from '@/views/CheckoutPayment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'sign-up',
    //   component: ProfileView
    // },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileAccountView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
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
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPayment
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
