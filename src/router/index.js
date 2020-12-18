import Vue from 'vue'
import VueRouter from 'vue-router'
import Gallery from '../views/Gallery.vue'
import Challenges from '../views/Challenges.vue'
import SingleFlower from '../views/SingleFlower.vue'
import Camera from '../views/Camera.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'gallery',
    component: Gallery // ACTUALLY MEANS VIEW, NOT COMPONENT
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: Challenges
  },
  {
    path: '/details/:selection',
    name: 'details',
    component: SingleFlower
  },
  {
    path: '/challenges/:id',
    name: 'camera',
    component: Camera
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
