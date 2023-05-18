<template>
    <div class="row my-1 mx-1">
        <div class="col col-3">
            <select class="form-select" multiple aria-label="multiple select example"
                    style="background-color: #383d41; border: none;">
                <div >
                    <option> </option>
                </div>
            </select>

            <div class="my-3" style="margin-left: 28px;">
                <button type="button" class="btn btn-light">
                    Agregar
                </button>
                <button type="button" class="btn btn-secondary mx-3">
                    Eliminar
                </button>
            </div>
        </div>
        <div class="col col-9">
            <div class="mb-3">
                <label for="basic-url" class="form-label" style="color: white;">
                    ID Empleado
                </label>
                <div class="input-group">
                    <input type="text" aria-label="Id" class="form-control text-white" required>
                </div>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text text-white" style="background: none; border: none;">
                    Nombre</span>
                <input type="text" aria-label="First name" class="form-control text-white" required>
                <span class="input-group-text text-white" style="background: none; border: none;">
                    Apellido</span>
                <input type="text" aria-label="Last name" class="form-control text-white">
            </div>

            <div class="mb-3 my-4">
                <label for="CorreoElectronico" class="form-label" style="color: white;">
                    Correo electrónico
                </label>
                <input type="email" class="form-control text-white" 
                       id="CorreoElectronico" placeholder="nombre@ejemplo.com" required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text text-white" 
                      style="background-color: #383d41; border: none;
                      margin-right: 20px;"> 
                    Edad</span>
                <input type="number" aria-label="Edad" class="form-control text-white "
                       style="margin-right: 50%;" required>
            </div>

            <div>
                <button type="button" class="btn btn-outline-success" 
                        v-on:click="numero.methods.suma()">
                    Aceptar
                </button>
                <button type="button" class="btn btn-outline-light mx-3">
                    Cancelar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

var count = 0;

const numero = {

    data() {
        return {
          count
        }
    },

    methods: {
        suma(){
            count++;
            console.log(count);
        }
    },
}

</script>
