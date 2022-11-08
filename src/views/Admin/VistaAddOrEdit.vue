<template>
    <div class="row g-3 ancho">
        <div class="col-md-6">
            <label for="prueba" class="form-label">Nombre Lugar</label>
            <input v-model="nombreLugarf" class="form-control" id="nombre" type="text" required>
        </div>
        <div class="col-md-6">
            <label for="" class="form-label">Direccion Lugar</label>
            <input v-model="direccionLugarf" type="text" id="Direccion" class="form-control" required>
        </div>
        <div class="col-md-6">
            <label for="" class="form-label">Descripcion Lugar</label>
            <input v-model="descripcionLugarf" type="text" class="form-control" required>
        </div>
        <div class="col-md-6">
            <label for="" class="form-label">Fecha Publicacion</label>
            <input v-model="fechaPublicacionf" type="text" class="form-control" required>
        </div>
        <div class="col-md-6">
            <label for="" class="form-label">Url Imagen</label>
            <input v-model="urlImagenf" type="url" id="imagen" class="form-control"  required>
        </div>
        <div class="col-md-6">
            <label for="" class="form-label">Descripcion Publicacion</label>
            <input v-model="descripcionPublicacionf" type="text" class="form-control" required>
        </div>

        <button @click="CrearApiPublicacion()" type="button" class="btn btn-primary">Guardar</button>

        <a href="/Admin"><button type="button" class="btn btn-primary">Regresar Al panel principal</button></a>

        
    </div>
   
</template>

<script>

import axios from "axios";

import Swal from 'sweetalert2';

export default {
    data(){
        return{
          
            
        }

    },
    
    methods: {
        CrearApiPublicacion() {


            const nombrePublicacion = document.getElementById('nombre');
            const direccion = document.getElementById('Direccion');
            const imagen = document.getElementById('imagen');
            if (nombrePublicacion.value === "") {
                alert("Por favor, escribe El nombre de la publicacion.");
                nombrePublicacion.focus();
                return false;
            }
            if (direccion.value === "") {
                alert("Por favor, escribe la direccion del lugar");
                direccion.focus();
                return false;
            }
            if (imagen.value === "") {
                alert("Por favor, Ingresa la url de la imagen de la publicacion");
                imagen.focus();
                return false;
            }
            else {
                var crearPublicacion =
                {
                    direccionLugar: this.direccionLugarf,
                    nombreLugar: this.nombreLugarf,
                    descripcionLugar: this.descripcionLugarf,
                    fechaPublicacion: "2022-10-27T05:25:34.010Z",
                    urlImagen: this.urlImagenf,
                    descripcionPublicacion: this.descripcionPublicacionf
                }

                axios.post("https://localhost:7157/api/PublicacionLugares", crearPublicacion).then((res) => {
                    //crearPublicacion(res.data)
                    if (res.data.result == "Registro Creado Correctamente ") {
                        this.mensaje('Registro Creado Correctamente');
                    }
                    else {
                        this.mensaje('No se a podido crear el registro  ');
                    }
                })
                    .catch((e) => {
                        console.log(e)
                    })
            }

        },

        mensaje(mensaje) {
            Swal.fire(mensaje)
        },
    }

    
}
</script>

<style>

.ancho{
    width: 80%;
    margin: auto;
}
</style>