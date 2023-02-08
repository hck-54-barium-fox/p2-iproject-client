<script>
export default {
  name: "CarouselComponent",
};
</script>

<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/images/sec1.webp" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img
          src="/images/alexander-andrews-JYGnB9gTCls-unsplash.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="/images/georgia-de-lotz-rncny1536Xs-unsplash.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="/images/rasheed-kemy-oqY09oVTa3k-unsplash.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style>
.carousel-item img {
  object-fit: cover;
  height: 40rem;
  margin: auto;
  object-position: center;
}
</style>
