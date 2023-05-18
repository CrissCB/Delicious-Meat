<template>
    <nav class="navbar fixed-top navbar-dark bg-dark">

        <div class="fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#MenuBarra"
                aria-controls="MenuBarra" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!--Start OfCanva-->
            <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="MenuBarra" aria-labelledby="Title">
                <div class="offcanvas-header">
                    <h3 class="offcanvas-title" id="Title">Delicious Meat</h3>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>

                <div class="offcanvas-body mt-4">
                    <ul class="list-group list-group-flush fs-5">
                        <li class="list-group-item p3 text-" style="background-color: #212529;">
                            <router-link :to="{name: 'Principal'}" class="nav-link text-light">
                                Home
                            </router-link>
                        </li>
                        <li class="list-group-item p3 text-" style="background-color: #212529;">
                            <router-link :to="{name: 'Login'}" class="nav-link text-light">
                                Mi cuenta
                            </router-link>
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

        </div>
        <router-link :to="{name: 'Principal'}" class="navbar-brand h1 fw-semibold fs-3">
            DELICIOUS MEAT
        </router-link>
        <div>
            <button type="button" class="btn btn-dark">
                <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"
                    stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
                    <circle cx="25" cy="27" r="2" />
                    <circle cx="12" cy="27" r="2" />
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