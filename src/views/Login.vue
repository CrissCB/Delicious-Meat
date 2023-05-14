<template>
  <!-- <div class="top-50 start-100 translate-middle"> -->
    <div class="fluid top-50 translate-middle">
    <form>
    
      <div class="text-center">
        <FONT FACE="Neue Haas Grotesk Text Pro 55 Roman" SIZE=5 COLOR="white">
        Delicious Meat</FONT>
      <br/>
      <br/>
      </div>
      <div class="form-outline mb-4 ">
      
        <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Correo electrónico"
               style="color: white;">
  
        <div id="emailHelp" class="form-text"></div>
      
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña*"
               style="color: white;">
  
      </div> 
    
      <div class="d-grid">
        <button type="button" class="btn btn-light"> INICIAR SESIÓN</button>
          <!-- Simple link -->
      </div>
  
    </form>
  
    <div class="text-center">
      <p>
        <a class="text-light" href="#!">
          ¿Se te olvidó tu contraseña?
        </a>
      </p>
    </div>
  
    <div class="h4 pb-2 mb-4 text border-bottom border-end-0"></div>
  
    <div class="text-center">
        <p class="text-light h5">¿Todavia no estas registrado? <u><a class="text-light" href="#!">Regístrate</a></u></p>  
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