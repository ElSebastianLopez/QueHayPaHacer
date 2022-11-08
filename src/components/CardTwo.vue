<template>
  <div
    class="card"
    style="width: 20rem; height: 380px; margin-top: 20px; border-radius: 20px"
  >  
    <img
      :src="urlImagen"
      class="card-img-top"
      alt="Card image cap"
      style="
        width: 300px;
        height: 180px;
        margin: auto;
        border-radius: 20px;
        padding-top: 10px;
      "
    />
    <div class="card-body">
      <h5 class="card-title">{{ tituloPrueba }}</h5>
      <!-- <h5 class="card-title">{{ idLugar }}</h5> -->
      <p class="card-text des">{{ descripcion }}</p>
      <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
      <button
        type="button"
        class="btn btn-primary mt-2"
       
        @click="consultarApiPublicacionXId(idLugar)"
      >
        Leer más...
      </button>
    </div>
     <!--Modal que se ejecuta al dar leer mas -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel" >
            Detalle:{{Title}}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="aline pr">
            <small class="text-muted pr">{{ fecha }}</small>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img :src="urlImagen" class="card-img-top" alt="Card image cap" style="
                                width: 400px;
                                height: 250px;
                                margin: auto;
                                border-radius: 20px;
                                padding-top: 10px;
                              " />
              <div class="card-body">
                <h5 class="card-title">{{ Title}}</h5>
                <p class="card-text des">{{ descripcionn }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button @click="consultarApiPublicacionXId(16)">Holaa</button>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";


export default {
  name: "CardComponent",
  props: {
    idLugar:Number,
    tituloPrueba: String,
    descripcion: String,
    urlImagen: Image,
    fechaPubli: Date,
  },
  data() {
    return {
      Title:'',
      Url:'',
      fecha:'',

    }
  },
  methods:{
    //consultar api por id
    consultarApiPublicacionXId(id) {
      console.log('rrrr',id)

      axios.get(`https://localhost:7157/api/PublicacionLugares/porId/${id}`).then((res) => {
        console.log("editar", res.data);
        const resData=res.data;        
        this.Title=resData.nombreLugar;
        this.Url=resData.urlImagen;
        this.fecha=resData.fechaPublicacion;
        this.des=resData.descripcionLugar;

        this.modalSweet();
        console.log("nombre",this.Title)
      })
      
    },
    modalSweet(){
      Swal.fire({
        title: this.Title,
        text: this.des,
        imageUrl: this.Url,       
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: this.fecha,
})
    }

  },
};
</script>
<style>
.des {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  overflow: hidden;
  cursor: pointer;
}
.des:active {
  display: block;
  
}
.pr {
  max-width: 82px;
  white-space: nowrap;
  overflow: hidden;
}
.aline{
  text-align: right;
}
</style>
