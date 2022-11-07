<template>
  <div class="principal">
    <CardTwo class="card" v-for="lugares in resultadoPubli" v-bind:key="lugares"  
       :tituloPrueba="lugares.nombreLugar"
       :descripcion="lugares.descripcionLugar"
       :urlImagen="lugares.urlImagen"
       :fechaPubli="lugares.fechaPublicacion"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardTwo from "../components/CardTwo.vue";
import axios from "axios";

export default {
  components: {
    CardTwo,
  },
  data(){
    return{
      resultado:[],
      resultadoPubli:[],
    }
   },
   methods: {
     consultarApiPublicacion() {
       axios.get("https://localhost:7157/api/PublicacionLugares").then((res) => {
         console.log("publicaciones", res.data);
         this.resultadoPubli=res.data
       })

     },
  },
  mounted(){
    this.consultarApiPublicacion();
    
    }
};
</script>
<style lang="scss">


</style>
