<template>
  <div class="home container-fluid">
    <div class="welcome text-white text-center">
      <h1 class="heading animate__animated animate__pulse">
        Welcome To Codi Kader's Web Portfolio
      </h1>
      <h4 class="heading">- Aspiring Full Stack Web Developer -</h4>
      <div class="p-5">
        <router-link to="/about">
          <button
            type="button"
            class="btn btn-outline-light heading animate__animated animate__zoomIn animate__delay-2s"
          >
            Learn More
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
