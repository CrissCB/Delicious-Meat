<script setup lang="ts">
    import { useRouter } from "vue-router"

    const router = useRouter();

</script>

<template>
    <nav class="navbar fixed-top navbar-dark bg-dark">
       
        <div>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
                    data-bs-target="#MenuBarra" 
                    aria-controls="MenuBarra" 
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!--Start OfCanva-->
            <div class="offcanvas offcanvas-start text-bg-dark" 
                tabindex="-1"
                id="MenuBarra" 
                aria-labelledby="Title">
                <div class="offcanvas-header">
                  <h3 class="offcanvas-title" id="Title">Delicious Meat</h3>
                  <button type="button" class="btn-close btn-close-white" 
                          data-bs-dismiss="offcanvas" 
                          aria-label="Close"></button>
                </div>

                <div class="offcanvas-body mt-4">
                    <ul class="list-group list-group-flush fs-5" >
                      <li class="list-group-item p3 text-" style="background-color: #212529;">
                        <a class="nav-link active text-light" href="">
                            Home
                        </a>
                      </li>
                      <li id="Micuenta" class="list-group-item p3 text-" style="background-color: #212529;">
                        <a class="nav-link text-light" href="">
                            Mi cuenta
                        </a>
                      </li>
                      <li class="list-group-item p3 text-" style="background-color: #212529;">
                        <a class="nav-link text-light" href="">
                            Menu
                        </a>
                      </li>
                      <li class="list-group-item p3 text-" style="background-color: #212529;">
                        <a class="nav-link text-secondary disabled" href="">
                            Gerente
                        </a>
                      </li>
                      <li class="list-group-item p3 text-" style="background-color: #212529;">
                        <a class="nav-link text-secondary disabled" href="">
                            Empleado
                        </a>
                      </li>
                      <li class="list-group-item p3 text-" style="background-color: #212529;">
                        <a class="nav-link text-light" href="">
                            Pedidos
                        </a>
                      </li>
                      <li class="list-group-item p3 text-" style="background-color: #212529;">
                        <a class="nav-link text-light" href="">
                            Promociones
                        </a>
                      </li>
                    </ul>
                </div>

            </div>
            <!--End OfCanva-->

            <a class="navbar-brand h1 fw-semibold fs-3" href="#">DELICIOUS MEAT</a>
        </div>
        <div>
            <button type="button" class="btn btn-dark">
                <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"
                    stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
                    <circle cx="25" cy="27" r="2" />
                    <circle cx="12" cy="27" r="2" />
                </svg>
            </button>

            <button type="button" class="btn btn-dark">
                <svg id="i-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"
                    fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path
                        d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
                    <circle cx="16" cy="16" r="4" />
                </svg>
            </button>
        </div>
    </nav>
</template>

<style>
    .navbar-toggler {
        border: none;
    }
    
    .navbar-toggler:focus {
        outline: none;
        box-shadow: none;
    }
</style>