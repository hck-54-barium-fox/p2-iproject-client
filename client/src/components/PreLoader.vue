<script>
export default {};
</script>

<template>
  <!-- Preloader -->
  <div id="loader-page"></div>
  <div id="preloader">
    <div class="loading">
      <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_3QexPM.json" background="transparent" speed="2" style="width: 300px; height: 300px" loop autoplay></lottie-player>
    </div>
  </div>

  <!-- End Preloader -->
</template>

<style scoped>
#preloader .loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

#loader-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  background-color: #fff;
  opacity: 0.8;
}
</style>
