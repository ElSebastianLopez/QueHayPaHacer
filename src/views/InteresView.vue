<template>
  <div class="principal">
    <CardTwo v-for="lugares in resultadoPubli" v-bind:key="lugares"  
       :tituloPrueba="lugares.nombreLugar"
       :descripcion="lugares.descripcionLugar"
       :urlImagen="lugares.urlImagen"/>
  
    <ModalCard />

  </div>
</template>

<script>
// @ is an alias to /src
import CardTwo from "../components/CardTwo.vue";
import ModalCard from "../components/ModalCard.vue";
import axios from "axios";

export default {
  components: {
    CardTwo,
    ModalCard,
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
