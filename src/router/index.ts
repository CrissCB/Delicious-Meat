import {createRouter, createWebHashHistory} from 'vue-router'

// import {createApp} from 'vue'
// import App from '../App.vue'

import Principal from "@/views/Principal.vue"

import Login from "@/views/AppLogin/Login.vue";
import Registrarse from "@/views/AppLogin/Registrarse.vue";
import RecuperarVal from "@/views/AppLogin/Recuperar_validar.vue";
import RecuperarCod from "@/views/AppLogin/Recuperar_codigo.vue";

import Gerente from "@/views/Gerente.vue"
import AdmEmpleados from "@/views/AppGerente/AdminEmpleados.vue"
import AdmMesas from "@/views/AppGerente/AdminMesas.vue"
import Mercancia from '@/views/AppGerente/Mercancia.vue'
import GestionProv from '@/views/AppGerente/GestionProv.vue'
import RegistroVen from '@/views/AppGerente/RegistroVentas.vue'


const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Registrarse',
    name: 'Registrarse',
    component: Registrarse,
  },
  {
    path: '/Recuperar_Codigo',
    name: 'RecuperarCod',
    component: RecuperarCod,
  },
  {
    path: '/Recuperar_Validar',
    name: 'RecuperarVal',
    component: RecuperarVal,
  },
  {
    path: '/Gerente',
    name: 'Gerente',
    component: Gerente,
    children:[
      {
        path: 'Administrar_empleados',
        name: 'AdminEmpleados',
        component: AdmEmpleados
      },
      {
        path: 'Registro_ventas',
        name: 'RegistroVen',
        component: RegistroVen
      },
      {
        path: 'Administrar_mesas',
        name: 'AdminMesas',
        component: AdmMesas
      },
      {
        path: 'Mercancia',
        name: 'Mercancia',
        component: Mercancia
      },
      {
        path: 'Mercancia/Gestion_proveedores',
        name: 'GestionProv',
        component: GestionProv
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

export default router