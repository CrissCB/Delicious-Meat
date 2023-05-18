<template>
    <div class="row my-1 mx-1">
        <div class="col col-3">
            <select class="form-select" multiple aria-label="multiple select example"
                    style="background-color: #383d41; border: none;">
                <div v-if="mesas != null">
                    <option v-for="mesa of mesas"> 
                        {{ mesa.ubicacion +" - "+ mesa.capacidad }}
                    </option>
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
                <label for="basic-url" class="form-label fs-3" style="color: white;">
                    Ubicación
                </label>
                <div class="input-group">
                    <input type="text" class="form-control text-white">
                </div>
            </div>

            <div class="mb-3">
                <select class="form-select text-white" aria-label="Default select example"
                style="background-color: #383d41; width: 200px;">
                  <option selected>Capacidad</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
            </div>

            <div>
                <button type="button" class="btn btn-outline-success">
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
class Mesa {

    public ubicacion: string;
    public capacidad: number;

    constructor(ubicacion: string, capacidad: number) {
        this.ubicacion = ubicacion;
        this.capacidad = capacidad;
    }
}

let mesas: Mesa[];

function addMesa(ubicacion: string, capacidad: number) {
    const mesa = new Mesa(ubicacion, capacidad);

    mesas.push(mesa);
}

</script>