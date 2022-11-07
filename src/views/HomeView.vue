<template>
  <div class="pr35">
    <div>
      <CarruselCom />
    </div>
    <div class="" style="width: 100%;margin:auto;margin-left: 30px;">
      <div class="card1 primari">
        <card-component v-for="lugares in resultadoPubli" v-bind:key="lugares" :tituloPrueba="lugares.nombreLugar"
          :descripcion="lugares.descripcionLugar" :urlImagen="lugares.urlImagen" />
    
      </div>
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
      resultadoPubli:[],
    }
   },
   methods: {
     consultarApiPublicacion() {
       axios.get("https://localhost:7157/api/PublicacionLugares").then((res) => {
         console.log("publicaciones", res.data);
         var contador = 0;
         res.data.map(item => {
          if (contador <= 5) {
            contador++;
             console.log('conut',contador)
           return this.resultadoPubli.push(item);

         }
         return true;
         
         })
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
  display: grid;
	grid-template-columns: [x0] 1fr [x1] 1fr [x2] 1fr [x3];
	grid-template-rows: [y0] 1fr [y1] 1fr [y2] ;
}
.pr35{
  margin: auto;
}
.primari{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
}
@import "../assets/styles/main.scss";
</style>
