<template>
    <div class="row my-1 mx-1">
        <div class="col col-3">
            <select class="form-select" multiple aria-label="multiple select example"
                style="background-color: #383d41; border: none;">
                <div v-if="proveedores != null">
                    <option v-for="proveedor of proveedores"> {{ proveedor.nombreProv }}</option>
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
                    Nombre
                </label>
                <div class="input-group">
                    <input type="text" aria-label="Id" class="form-control text-white">
                </div>
            </div>

            <div class="input-group mb-3">
                <label for="basic-url" class="form-label" style="color: white;">
                    Dirección
                </label>
                <div class="input-group">
                    <input type="text" aria-label="Direccion" class="form-control text-white">
                </div>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text text-white" style="background-color: #383d41; border: none; 
                      margin-right: 20px;">
                    Numero Telefono</span>
                <input type="number" aria-label="Edad" class="form-control text-white " style="margin-right: 50%;">
            </div>

            <div class="mb-3 my-4">
                <label for="CorreoElectronico" class="form-label" style="color: white;">
                    Correo electrónico
                </label>
                <input type="email" class="form-control text-white" id="CorreoElectronico" placeholder="nombre@ejemplo.com">
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
class Proveedor {

    public nombreProv: string;
    public direccionProv: string;
    public telefonoProv: number;
    public correoEmp: string;

    constructor(nombreProv: string, direccionProv: string, telefonoProv: number, correoEmp: string) {
        this.nombreProv = nombreProv;
        this.direccionProv = direccionProv
        this.telefonoProv = telefonoProv;
        this.correoEmp = correoEmp;
    }
}

let proveedores: Proveedor[];

function addProveedores(nombreProv: string, direccionProv: string, telefonoProv: number, correoEmp: string) {
    const proveedor = new Proveedor(nombreProv, direccionProv, telefonoProv, correoEmp);

    proveedores.push(proveedor);
}

</script>