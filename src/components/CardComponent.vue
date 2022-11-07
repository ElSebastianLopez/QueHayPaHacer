<template>
  <div class="card12">
    <div class="card" style="width: 90%">
      <img :src="urlImagen" class="card-img-top" alt="hola" style="width:500px;height:350px;margin:auto;margin-top: 1%;"/>
      <div class="card-body">
        <h5 class="card-title">{{tituloPrueba}}</h5>
        <p class="card-text">
          {{descripcion}}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  
    name: 'CardComponent',
    props: {
      tituloPrueba:String,
      descripcion:String,
      urlImagen:Image,
    },
  }
  </script>

<style>

</style>