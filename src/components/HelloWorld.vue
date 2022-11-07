<template>
  <div class="pr35">
    <nav class="navbar navbar-expand-lg bg-cyan hh" >
  <div class="container-fluid">
    <img src='../assets/imagenes/Logo3.png' width="80" height="80">
    <a class="navbar-brand" href="/" style="font-size: 30px;margin-left: 1%;">Que Hay Pa' Hacer</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Interes">Publicaciones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Nosotros">Quienes Somos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contactenos">Contactos</a>
        </li>
      </ul>    
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pr35{
  font-size: 30px;
}

.menu{
  margin-left: 29%;  
}
li{
  padding-left: 20px;
}
li:hover{

  border-bottom: 2px solid rgb(181, 228, 228);

}
</style>
