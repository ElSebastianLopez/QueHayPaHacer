<template>
  <div class="principal">
    <CardTwo />
    <CardTwo />
    <CardTwo />
    <CardTwo />
    <CardTwo />
    <ModalCard />

  </div>
</template>

<script>
// @ is an alias to /src
import CardTwo from "../components/CardTwo.vue";
import ModalCard from "../components/ModalCard.vue";


export default {
  components: {
    CardTwo,
    ModalCard,
  },
};
</script>
<style lang="scss">


</style>
