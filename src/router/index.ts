// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import ComparaEstacoes from '@/views/ComparaEstacoes.vue'
import MapaEstacoes from '@/views/MapaEstacoes.vue'
import BaixarDados from '@/views/BaixarDados.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, 
  {
    path: '/compararEstacoes',
    name: 'comparaEstacoes',
    component: ComparaEstacoes
  },
  {
    path: '/mapaEstacoes',
    name: 'mapaEstacoes',
    component: MapaEstacoes,
  },
  {
    path: '/baixarDados',
    name: 'baixarDados',
    component: BaixarDados
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router