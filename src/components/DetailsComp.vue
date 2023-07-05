<template>
  <div>
    <div class="container">
      <div class="row m-2">
        <div
          class="card text-bg-dark"
          v-for="details in mydetails"
          style="width: 100%"
          :key="details.id"
        >
          <div class="card-body d-flex justify-content-evenly p-0">
            <div>
              <h5 class="card-text fw-bold">Name:</h5>
              <p>
                {{ details.name }}
              </p>
              <h5 class="card-text fw-bold">Date of Birth:</h5>
              <p>
                {{ details.dob }}
              </p>
              <h5 class="card-text fw-bold">Location:</h5>
              <p>
                {{ details.loacation }}
              </p>
            </div>
            <div>
              <h5 class="card-text fw-bold">Phone Number:</h5>
              <p>
                {{ details.number }}
              </p>
              <h5 class="card-text fw-bold">Email:</h5>
              <p>
                {{ details.email }}
              </p>
              <h5 class="card-text fw-bold">Languages:</h5>
              <p>
                {{ details.language }}
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
    mydetails() {
      return this.$store.state.mydetails;
    },
  },
  mounted() {
    this.$store.dispatch("fetchMydetails");
  },
};
</script>

<style scoped></style>
