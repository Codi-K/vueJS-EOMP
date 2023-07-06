<template>
  <div class="container-fluid">
    <div class="row  mt-5">
      <div class="col-lg-4 d-flex justify-content-center" v-for="testimonil in testimonils" :key="testimonil.id">
        <div class="card text-bg-dark my-3 text-center" style="max-width: 540px">
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
                <p class="card-text">
                  {{ testimonil.testimonial }}
                </p>
              </div>
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
