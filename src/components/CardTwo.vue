<template>
  <div>
    <div class="card" style="width: 23rem; height: 450px;margin-top: 20px;border-radius: 20px;">
      <img :src="urlImagen" class="card-img-top"  alt="Card image cap" style="width:330px;height:180px; margin: auto;border-radius: 20px;padding-top: 10px;">
      <div class="card-body">
        <h5 class="card-title">{{tituloPrueba}}</h5>
        <p class="card-text">{{descripcion}}</p>
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
