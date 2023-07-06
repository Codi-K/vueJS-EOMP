<template>
  <div>
    <div class="container">
      <div class="row skills d-flex justify-content-center">
        <div class="col-sm-3 d-flex justify-content-center" v-for="skill in skills" :key="skill.id">
          <div class="card text-bg-dark" >
            <h5>{{ skill.name }}</h5>
            <img
              :src="skill.imageUrl"
              class="img-fluid"
              loading="lazy"
              :alt="skill.name"
            />
            <div class="card-body">
              <h5
                class="card-text animate__animated animate__zoomIn animate__delay-1s"
              >
                {{ skill.level }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style scoped></style>
