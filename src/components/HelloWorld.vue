<template>
  <div class="">
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img src='../assets/logo.png' width="50" height="50">
    <a class="navbar-brand" href="/">Que Hay Pa' Hacer</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Interes">Lugares de Intereses</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ver Más
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Nosotros">Quienes Somos</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/Aliados">Aliados</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contactenos">Contactos</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Lo que quieras conocer" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
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

</style>
