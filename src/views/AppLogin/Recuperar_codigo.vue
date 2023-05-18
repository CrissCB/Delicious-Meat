<script setup lang="ts">
import BarnavLogin from "../../components/BarnavLogin.vue"
</script>

<template>
      <BarnavLogin/>
      <div class="position-absolute translate-middle">
      <form>
      
        <div class="text-center">
          <FONT FACE="Neue Haas Grotesk Text Pro 65 Roman" SIZE=8 COLOR="white">
          Delicious Meat</FONT>
        <br/>
        <br/>
        </div>
        <div class="text-center">
          <p class="text-light">
            ¿Estas intentando recuperar tu cuenta?
            <br>  
            Ingresa el correo vinculado a la cuenta
        </p>
        
      </div>
        <div class="form-outline mb-4 ">

          <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Correo electrónico"
                 style="color: white;">
    
          <div id="emailHelp" class="form-text"></div>
    
        </div> 
      
        <div class="d-grid">
          <button type="button" class="btn btn-light"> 
            <router-link :to="{name:'RecuperarVal'}" class="text-dark">
                Enviar
            </router-link>
          </button>
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