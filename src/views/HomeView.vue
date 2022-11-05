<template>
  <div class="pr35">
    <div>
      <CarruselCom />
    </div>
    <div class="card1">
      <card-component v-for="lugares in resultadoPubli" v-bind:key="lugares.idLugar"  
       :tituloPrueba="lugares.nombreLugar"
       :descripcion="lugares.descripcionLugar"
       :urlImagen="lugares.urlImagen"
       />
    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CarruselCom from "@/components/CarruselCom.vue";
import CardComponent from "@/components/CardComponent.vue";
import axios from "axios";

export default {
  components: {
    CarruselCom,
    CardComponent,
  },
  data(){
    return{
      resultado:[],
      resultadoPubli:{},
    }
   },
   methods: {
    consultarApiPublicacion(){
      axios.get("https://localhost:7157/api/PublicacionLugares").then((res)=>{
         console.log("publicaciones",res.data);
         this.resultadoPubli=res.data;
      })

    },
  },
  mounted(){
    this.consultarApiPublicacion();
    
    }
};
</script>

<style lang="scss" scoped>
.card1 {
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(70px, auto);
  gap: 1rem;
  justify-items: center;
}

@import "../assets/styles/main.scss";
</style>
