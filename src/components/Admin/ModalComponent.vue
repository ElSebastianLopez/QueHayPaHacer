<template>
    <div>
        <transition name="fade">
            <div class="modeal-overlay" v-if="showModel"></div>
        </transition>

        <transition name="fade">
            <div class="modeal" v-if="showModel"></div>
            <h1>Titulo</h1>
            <button class="boton1" @click="showModel=false">ABIR MODAL</button>
        </transition>


        <button class="boton1" @click="showModel=true">ABIR MODAL</button>
    </div>
</template>


<script>
export default {
    data(){
        return{
            showModel:false,
        }
    }
}
</script>


<style scoped>
.boton1{
    border:none;
    background: none;
    cursor: pointer;
    border-radius: 15px;
    display: block;
   padding:  15px 20px;
    background-image: linear-gradient(to right #0606);
    color: black;
    font-size: 20px;
    font-weight: bold;
    box-shadow:6px 6px ggba(0,0,0,0.4);

}

fade{

}
.modeal-overlay{
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 100;
background: rgb(243, 234, 234);
}

.boton1:hover{
    box-shadow:6px 6px ggba(0,0,0,0.4);
}
</style>