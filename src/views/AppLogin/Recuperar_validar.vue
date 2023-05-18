<script setup lang="ts">
import BarnavLogin from "../../components/BarnavLogin.vue"
</script>

<template>
    <BarnavLogin/>
    <div class="position-absolute translate-middle">
    <form>
      <div class="text-center">
        <FONT FACE="Neue Haas Grotesk Text Pro 55 Roman" 
              SIZE=5 COLOR="white"
              class="fs-2">
        Delicious Meat
        </FONT>
      <br/>
      <br/>
      </div>
      <div class="form-outline mb-4 ">
        <label for="codigo" class="text-white fs-5">
          Ingrese el codigo que hemos enviado a su correo electrónico:
        </label>
        <input type="codigo" class="form-control" id="codigo" aria-describedby="codigoHelp" placeholder="codigo"
               style="color: white;">
        <div id="codigoHelp" class="form-text"></div>
      </div> 
    
      <div class="d-grid">
        <button type="button" class="btn btn-light"> Verficar</button>
          <!-- Simple link -->
          <br/>
      </div>
  
      <div class="form-outline mb-4 ">
        <input type="nuevapwd" class="form-control" id="nuevapwd" aria-describedby="codigoHelp" placeholder="ingresa la nueva contraseña"
               style="color: white;">
        <div id="codigoHelp" class="form-text"></div>
      </div> 
      <div class="form-outline mb-4 ">
        <input type="nuevapwdd" class="form-control" id="nuevapwdd" aria-describedby="codigoHelp" placeholder="Repite la nueva contraseña"
               style="color: white;">
      </div> 
      <div class="d-grid">
        <button type="button" class="btn btn-light"> Actualizar</button>
          <!-- Simple link -->
      </div>

    </form>
  
  </div>
</template>

<style>

.formulario{
  color: rgb(199, 199, 199);
}

.form-control::placeholder {
  color: rgb(199, 199, 199);
}

.form-control:focus{
  color: white;
  background: none;
  outline: none;
  box-shadow: none;
}

.form-control{
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  border-radius: 0%;
  border-color: white;
}
</style>

