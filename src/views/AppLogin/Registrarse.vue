<script setup lang="ts">
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import BarnavLogin from "../../components/BarnavLogin.vue"

var correo = '';
var codigo = '';

const registrar = () =>{
  if (correo && codigo) 
  {
    createUserWithEmailAndPassword(getAuth(), correo, codigo);
    console.log("funciona");
  }
  else
  {
    console.log("No funciona");
  }
}

</script>

<template>
  <BarnavLogin/>
  <!-- <div class="top-50 start-100 translate-middle"> -->
    <div class="position-absolute translate-middle">

    <form action="#" v-on:submit.v-pre="registrar">
      <div class="text-center">
        <FONT FACE="Neue Haas Grotesk Text Pro 55 Roman" SIZE=5 COLOR="white">
          Regístrate
        </FONT>
      <br/>
      <br/>
      </div>
      <div class="form-outline mb-4 ">
      
        <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Correo electrónico"
               style="color: white;" v-model="correo" required>
  
        <div id="emailHelp" class="form-text"></div>
      
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña*"
               style="color: white;" v-model="codigo" required>
  
      </div> 
    
      <div class="d-grid">
        <button type="submit" class="btn btn-light"> REGISTRAR</button>
          <!-- Simple link -->
      </div>
    </form>
  
    <div class="h4 pb-2 mb-4 text border-bottom border-end-0"></div>
  
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
      <p class="text-light">Al usar esta aplicación,Aceptas los 
        <u><a class="text-light disable" href="#!">Términos de uso</a></u> 
        y la 
        <u><a class="text-light disable" href="#!"> política de privacidad</a></u>
      </p>
    </div>
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

