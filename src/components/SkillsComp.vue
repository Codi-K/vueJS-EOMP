<template>
  <div>
    <div class="container-fluid d-flex justify-content-center skills">
    <div class="card text-bg-dark" v-for="skill in skills" style="width: 13rem" :key="skill.id">
        <h5>{{ skill.name }}</h5>
      <img :src="skill.imageUrl" class="img-fluid " loading="lazy" :alt="skill.name" />
      <div class="card-body">
        <h5 class="card-text">
          {{ skill.level }}
        </h5>
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
