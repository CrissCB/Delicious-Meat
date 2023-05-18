<script setup lang="ts">
import BarnavIncio from "../components/BarnavInicio.vue";
</script>

<template>
    <BarnavIncio/>
    <div class="container-fluid">
        <div class="d-flex d-flex-row container-fluid position-absolute top-0 start-0" style="margin-top: 83px;">

            <div class="d-inline" style="background-color: #383D41;">
                <div>
                    <svg id="i-portfolio" xmlns="http://www.w3.org/2000/svg" 
                         viewBox="0 0 32 32" width="200" height="200" 
                         fill="none" stroke="currentcolor" 
                         stroke-linecap="round" stroke-linejoin="round" 
                         style="color: white; margin-left: 33px;">
                        <path d="M29 17 L29 28 3 28 3 17 M2 8 L30 8 30 16 C30 16 24 20 16 20 8 20 2 16 2 16 L2 8 Z M16 22 L16 18 M20 8 C20 8 20 4 16 4 12 4 12 8 12 8" />
                    </svg>
                </div>
                <h3 class="text-center" style="color: white;">Gestión Gerente</h3>
                <ul class="list-group list-group-flush fs-5 px-3" >
                    <li class="list-group-item p3 text-" style="background-color: #383D41;">
                        <router-link :to="{name:'AdminEmpleados'}" class="nav-link text-light">
                            Administrar empleados
                        </router-link>
                    </li>
                    <li class="list-group-item p3 text-" style="background-color: #383D41;">
                        <router-link :to="{ name: 'RegistroVen' }" class="nav-link text-light">
                            Registro de ventas
                        </router-link>
                    </li>
                    <li class="list-group-item p3 text-" style="background-color: #383D41;">
                        <router-link :to="{ name: 'AdminMesas' }" class="nav-link text-light">
                            Administrar Mesas
                        </router-link>
                    </li>
                    <li class="list-group-item p3 text-" style="background-color: #383D41;">
                        <a class="nav-link text-light disable">
                            Inventario
                        </a>
                    </li>
                    <li class="list-group-item p3 text-" style="background-color: #383D41;">
                        <router-link :to="{ name: 'Mercancia' }" class="nav-link text-light">
                            Mercancia
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="p-2 flex-grow-1 d-inline" style="background-color: #2c3034;">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>