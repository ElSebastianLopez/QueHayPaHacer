<template>
  <div class="card12">
    <div class="card" style="width: 95%; height:550px; margin-top: 15px;border-radius: 10px;">
      <img :src="urlImagen" class="card-img-top" alt="" style="width:400px;height:350px;margin:auto;margin-top: 1%;border-radius: 10px;"/>
      <div class="card-body">
        <h2 class="card-title" style="color:black;font-size: 25px;">{{tituloPrueba}}</h2>
        <p class="card-text" style="font-size: 18px;">
          {{descripcion}}
        </p>
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