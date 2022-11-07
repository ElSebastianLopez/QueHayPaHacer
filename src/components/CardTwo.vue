<template>
  <div
    class="card"
    style="width: 20rem; height: 400px; margin-top: 20px; border-radius: 20px"
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
      <p class="card-text des">{{ descripcion }}</p>
      <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
      <button
        type="button"
        class="btn btn-primary mt-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Leer más...
      </button>
    </div>
  </div>

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
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Detalle: {{ tituloPrueba }}
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
            <!--<div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>-->
            <small class="text-muted pr">{{ fechaPubli }}</small>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                :src="urlImagen"
                class="card-img-top"
                alt="Card image cap"
                style="
                  width: 400px;
                  height: 250px;
                  margin: auto;
                  border-radius: 20px;
                  padding-top: 10px;
                "
              />
              <div class="card-body">
                <h5 class="card-title">{{ tituloPrueba }}</h5>
                <p class="card-text des">{{ descripcion }}</p>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    tituloPrueba: String,
    descripcion: String,
    urlImagen: Image,
    fechaPubli: Date,
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
