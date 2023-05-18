<script setup lang="ts">
import BarnavLogin from "../../components/BarnavLogin.vue";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

var correo = '';
var codigo = '';

const login = () =>{

  if (correo && codigo) {
    signInWithEmailAndPassword(getAuth(), correo, codigo);
    console.log("sirve");
  }
  else
  {
    console.log("no sirve");
  }

}
</script>

<template>
    <!-- position-absolute top-50 start-50 translate-middle -->
    <BarnavLogin/>
    <div class="position-absolute translate-middle">
      <div class="text-center my-4">
        <FONT FACE="Neue Haas Grotesk Text Pro 55 Roman" SIZE=5 COLOR="white">
            Delicious Meat
        </FONT>
      </div>

        <form action="#" v-on:submit.v-pre="login" >
          <div class="form-outline mb-4 ">
            <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Correo electrónico"
                   style="color: white;"
                   v-model="correo" required>
  
            <div id="emailHelp" class="form-text"></div>
      
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña*"
                   style="color: white;"
                   v-model="codigo" required>
          </div> 
    
          <div class="d-grid">
            <button type="submit" class="btn btn-light"> INICIAR SESIÓN</button>
              <!-- Simple link -->
          </div>
  
        </form>
  
        <div class="text-center">
          <p>
            <router-link :to="{ name: 'RecuperarCod' }" class="nav-link text-light">
              ¿Se te olvidó tu contraseña?
            </router-link>
          </p>
        </div>
  
        <div class="h4 pb-2 mb-4 text border-bottom border-end-0"></div>
  
        <div class="text-center">
            <p class="text-light h5">¿Todavia no estas registrado? 
                <u>
                  <router-link :to="{name: 'Registrarse'}" class="nav-link text-light">
                    Regístrate
                  </router-link>
                </u>
            </p>  
        </div>
  
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <p class="text-light">Al usar esta aplicación,Aceptas los 
            <u><a class="text-light" href="#!">Términos de uso</a></u> 
            y la 
            <u><a class="text-light" href="#!"> política de privacidad</a></u>
          </p>
        </div>
      </div>
</template>

<style>
.formulario {
    color: rgb(199, 199, 199);
}

.form-control::placeholder {
    color: rgb(199, 199, 199);
}

.form-control:focus {
    color: white;
    background: none;
    outline: none;
    box-shadow: none;
}

.form-control {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;
    border-radius: 0%;
    border-color: white;
}
</style>