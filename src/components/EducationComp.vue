<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-evenly">
        <div
          class="card text-bg-dark"
          v-for="education in educations"
          style="width: 100%"
          :key="education.id"
        >
          <div class="card-body p-0">
            <div>
              <h5 class="card-text fw-bold">
                School:
              </h5>
              <p>
                {{ education.school }}
              </p>
              <h5 class="card-text fw-bold">
                Completed:
              </h5>
              <p>
                {{ education.pass }}
              </p>
              <h5 class="card-text fw-bold">
                Year
              </h5>
              <p>
                {{ education.year }}
              </p>
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
    educations() {
      return this.$store.state.educations;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
  },
};
</script>

<style scoped>

</style>