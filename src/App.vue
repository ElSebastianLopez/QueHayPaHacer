<template>
  <nav>
   <HelloWorld/>
  </nav>
  <router-view/>
  <FooterComponet/>
</template>

<script>
 import HelloWorld from '@/components/HelloWorld.vue'
 import FooterComponet from '@/components/FooterComponet.vue'

 
  export default {
  components: {
    HelloWorld,
    FooterComponet,
}
}
</script>

<style lang="scss">

#app {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import './assets/styles/main.scss';
</style>
