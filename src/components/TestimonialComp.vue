<template>
  <div>
    <div class="row justify-content-center ">
      <div
        class="card mb-3"
        v-for="testimonil in testimonils"
        style="max-width: 540px"
        :key="testimonil.id"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="testimonil.imageUrl"
              class="img-fluid rounded-start"
              :alt="testimonil.name"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">{{ testimonil.name }}</h2>
              <h4 class="card-text">
                {{ testimonil.testimonial }}
              </h4>
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
    testimonils() {
      return this.$store.state.testimonils;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped></style>
