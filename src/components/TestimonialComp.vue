<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-4" v-for="testimonil in testimonils" :key="testimonil.id">
        <div class="card text-bg-dark mt-3" style="max-width: 540px">
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
                <h5 class="card-text">
                  {{ testimonil.testimonial }}
                </h5>
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
