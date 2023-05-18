<script setup lang="ts">
    import BarnavIncio from "../components/BarnavInicio.vue"
</script>

<template>
    <BarnavIncio/>
    <div class="container-fluid position-fixed  start-50 top-50 translate-middle ">
        <div class="row">
            <div class="col sm-12 px-1">
                <div class="card bg-dark text-white">
                    <img src="../assets/PGPrincipal/carne.jpg" class="img-fluid img-card opacity-50" 
                    alt="Responsive image">
                    <div class="card-img-overlay" style="top: 65px; font-style: oblique; font-weight: bolder;">
                        <p class="display-5 text-center">Menu</p>
                        <div class="position-absolute start-50 translate-middle my-2" >
                            <button type="button" class="btn btn-outline-light">Escoge tu plato</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col sm-12 px-1">
                <div class="card bg-dark text-white">
                    <img src="../assets/PGPrincipal/Mesas.jpg" class="img-fluid img-card opacity-50" 
                    alt="Responsive image">
                    <div class="card-img-overlay " style="top: 7px; font-style: oblique; font-weight: bolder;">
                        <p class="display-5 text-center">Reserva tu mesa</p>
                        <div class="position-absolute start-50 translate-middle my-2" >
                            <button type="button" class="btn btn-outline-light">Click aqui!</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col sm-12 px-1">
                <div class="card bg-dark text-white">
                    <img src="../assets/PGPrincipal/Delivery.jpg" class="img-fluid img-card opacity-50" 
                    alt="Responsive image">
                    <div class="card-img-overlay " style="top: 65px; font-style: oblique; font-weight: bolder;">
                        <p class="display-5 text-center">Domicilios</p>
                        <div class="position-absolute start-50 translate-middle my-2" >
                            <button type="button" class="btn btn-outline-light">Pide Ya!!</button>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="col sm-12 px-1">
                <div class="card bg-dark text-white">
                    <img src="../assets/PGPrincipal/Promociones.jpg" class="img-fluid img-card opacity-50" 
                    alt="Responsive image">
                    <div class="card-img-overlay" style="top: 65px; font-style: oblique; font-weight: bolder;">
                        <p class="display-5 text-center">Promociones</p>
                        <div class="position-absolute start-50 translate-middle my-2" >
                            <button type="button" class="btn btn-outline-light">Promociones</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>