<template>
    <div>
        <div class="container">
   <table class="table stripped bordered">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Correo</th>
            <th>Direccion</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="resultado in resultadoApiTabla" v-bind:id="resultado.id">
            <td>{{resultado.name}}</td>
            <td>{{resultado.username}}</td>
            <td>{{resultado.email}}</td>
            <td>
                <ul>
                    <li>Ciudad: {{resultado.address.city}}</li>
                    <li>Calle: {{resultado.address.street}}</li>
                    <li>ZIP: {{resultado.address.zipcode}}</li>
                </ul>
            </td>

        </tr>
    </tbody>
   </table>
</div>

    </div>

</template>

<script>
import axios from "axios";

export default {
    
    data (){
        return{
            resultadoApiTabla:{}
        }
    },
    //METODOS DE LA API
    //METODO PARA CONSULTAR LOS REJISTROS DE LA API
    methods:{
    consultarApiPublicacion(){
      axios.get("https://localhost:7157/api/PublicacionLugares").then((res)=>{
         console.log("publicaciones",res.data);
         this.resultadoApiTabla=res.data;
        
      })

    },

    }
}
</script>

<style>

</style>

