<template>
  <div class="container-fluid footer">
    <div class="d-flex justify-content-center gap-2 my-1">
      <!-- instagram -->
      <a href="https://www.instagram.com/codells_bruh/" target="_blank">
        <img
          src="https://i.ibb.co/XYmcnR4/instagram-2.png"
          class="footerI"
          loading="lazy"
          alt="instagram"
      /></a>
      <!-- GitHub -->
      <a href="https://github.com/Codi-K" target="_blank">
        <img
          src="https://i.ibb.co/25rpbDX/github-sign.png"
          class="footerI"
          loading="lazy"
          alt="GitHub"
      /></a>
      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/codi-kader-6b481a16a/" target="_blank">
        <img
          src="https://i.ibb.co/M5wpTmd/linkedin-1.png"
          class="footerI"
          loading="lazy"
          alt="LinkedIn"
      /></a>
    </div>
    <div class="d-flex justify-content-center">
      <p class="copyright my-0">CopyRight &copy; {{ cYear }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scoped></style>
