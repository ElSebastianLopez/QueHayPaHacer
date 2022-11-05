<template>
  <div class="about">
    <div class="container">
      <div>

        <a href="/AddOrEdit"><button type="button" class="btn btn-primary">Crear Publicacion</button></a>
      </div>
      <div>

      </div>
      <table class="table stripped bordered">
        <thead>
          <tr>
            <th>IDLugar</th>
            <th>Direccion</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in resultadoApiTabla" v-bind:key="result.idPublicacionLugares">
            <td>{{ result.idPublicacionLugares }}</td>
            <td>{{ result.direccionLugar }}</td>
            <td>{{ result.nombreLugar }}</td>
            <td>{{ result.descripcionLugar }}</td>
            <td>
              <a @click="consultarApiPublicacionXId(result.idPublicacionLugares)"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style="cursor:pointer"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg></a>
              &nbsp;&nbsp;
              <a @click="EliminarApi(result.idPublicacionLugares)" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                  height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Nombre:</label>
            <input type="text" class="form-control"  v-model="resultadoApiEdit.nombreLugar" placeholder="Editar Nombre">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Direccion:</label>
            <input type="text" class="form-control"  v-model="resultadoApiEdit.direccionLugar" placeholder="Editar Direccion">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Descripcion:</label>
            <input type="text" class="form-control"  v-model="resultadoApiEdit.descripcionLugar" placeholder="Editar Descripcion">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Url:</label>
            <input type="text" class="form-control"  v-model="resultadoApiEdit.urlImagen" placeholder="Editar Descripcion">
          </div>
         
          
         
         
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a @click="EditarPublicacion(resultadoApiEdit.idPublicacionLugares)"><button type="button" class="btn btn-primary">Send message</button></a>
      </div>
    </div>
  </div>
</div>


    <!--<div  v-bind="ventana" v-if="ventana" class="modal" tabindex="-1" role="dialog" >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button @click.prevent="ventana=false" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>-->


  </div>

</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {

  components: {

  },
  data() {
    return {
      resultadoApiTabla: {},
      eliminar:
      {
        idPublicacionLugares: 0
      },
      editar:
      {
        idPublicacionLugares: 0,
        nombreLugar: "",
        direccionLugar: "",
        descripcionLugar: "",
        urlImagen: "",
        descripcionPublicacion:""
      },
      resultadoApiEdit:{},
      


    }
  },
  //METODOS DE LA API
  //METODO PARA CONSULTAR LOS REJISTROS DE LA API
  methods: {
    consultarApiPublicacion() {
      axios.get("https://localhost:7157/api/PublicacionLugares").then((res) => {
        //console.log("publicaciones", res.data);
        this.resultadoApiTabla = res.data;
        //console.log(this.resultadoApiTabla = res.data);
        

      })

    },
    //Metodo para eliminar 
    EliminarApi(id) {
      this.eliminar.idPublicacionLugares = id;
      

      axios.post("https://localhost:7157/api/PublicacionLugares/DeletePublicacionLugares", this.eliminar).then((res) => {
        if (res.data.result == "Borrado correctamente") {
          this.mensaje('Borrado correctamente');
        }
        else {
          this.mensaje('No se pudo eliminar ');
        }
        this.consultarApiPublicacion();
      })
        .catch((e) => {
          console.log(e)
        })

    },

    //consultar api por id
    consultarApiPublicacionXId(id) {
      console.log('rrrr',id)

      axios.get(`https://localhost:7157/api/PublicacionLugares/porId/${id}`).then((res) => {
        console.log("editar", res.data);
        this.resultadoApiEdit=res.data;
        console.log("mmm",this.resultadoApiEdit)
       

      })

    },

    EditarPublicacion(id) {
      this.editar.idPublicacionLugares = id;
      this.editar.nombreLugar=this.resultadoApiEdit.nombreLugar;
      this.editar.direccionLugar=this.resultadoApiEdit.direccionLugar;
      this.editar.descripcionLugar=this.resultadoApiEdit.descripcionLugar;
      this.editar.urlImagen=this.resultadoApiEdit.urlImagen;
      this.editar.descripcionPublicacion="";

      axios.put(`https://localhost:7157/api/PublicacionLugares/${id}`,this.editar).then((res) => {

        console.log('editar', res.data);
        this.consultarApiPublicacion();
      })
        .catch((e) => {
          console.log(e)
        })

    },

    

    mensaje(mensaje) {
      Swal.fire(mensaje)
    },

  },

  mounted() {
    this.consultarApiPublicacion();

  }

}
</script>

<style>

</style>