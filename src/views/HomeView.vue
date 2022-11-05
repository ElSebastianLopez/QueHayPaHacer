<template>
  <div class="pr35">
    <div>
      <CarruselCom />
    </div>
    <div class="card1">
      <card-component />
      <card-component />
      <card-component />
      <card-component />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CarruselCom from "@/components/CarruselCom.vue";
import CardComponent from "@/components/CardComponent.vue";

export default {
  components: {
    CarruselCom,
    CardComponent,
  },
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
