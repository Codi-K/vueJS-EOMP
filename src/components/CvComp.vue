<template>
  <div>
    <div class="text-center my-4" v-for="cv in mycv" :key="cv.id">
      <a :href="cv.cvUrl" target="_blank">
        <button class="btn btn-outline-light " type="button">Download CV</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mycv() {
      return this.$store.state.mycv;
    },
  },
  mounted() {
    this.$store.dispatch("fetchMycv");
  },
};
</script>

<style scoped></style>
