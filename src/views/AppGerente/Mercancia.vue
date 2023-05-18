<template>
    <div class="container-fluid">
        <div class="d-flex d-flex-row container-fluid my-2">

            <div style="margin-left: 36%; margin-top: 8%;">
                <h3 class="text-center fs-1" style="color: white;">Selecciona</h3>
                <ul class="list-group fs-5 px-3">
                    <li class="list-group-item list-group-item-secondary p3">
                        <router-link :to="{ name: 'GestionProv' }" class="nav-link text-dark">
                            Gestión de proveedores
                        </router-link>
                    </li>
                    <li class="list-group-item list-group-item-dark p3">
                        <a class="nav-link text-dark disable">
                            Registro de mercancia
                        </a>
                    </li>
                    <li class="list-group-item list-group-item-secondary p3">
                        <a class="nav-link text-dark disable">
                            Devolución de producto
                        </a>
                    </li>
                    <li class="list-group-item list-group-item-dark p3">
                        <a class="nav-link text-dark disable">
                            Estado de pago
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>