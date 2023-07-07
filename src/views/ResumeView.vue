<template>
  <div class="resume pt-2">
    <div class="text-center">
      <h2>My Details</h2>
      <div>
        <div class="container">
          <div class="row m-2">
            <div class="col" v-for="details in mydetails" :key="details.id">
              <div class="card text-bg-dark" style="width: 100%">
                <div
                  class="card-body d-flex justify-content-evenly p-0"
                  id="cardb"
                >
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
      </div>
    </div>
    <div class="text-center">
      <h2>Skills</h2>
      <div class="container">
        <div class="row skills d-flex justify-content-center m-0 p-0">
          <div
            class="col-sm-3 p-0 m-0"
            v-for="skill in skills"
            :key="skill.id"
          >
            <div class="card text-bg-dark" id="edu">
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
    <div class="text-center my-3">
      <h2>Education</h2>
      <div>
        <div class="container">
          <div class="row justify-content--center m-2">
            <div class=" col" v-for="education in educations"  :key="education.id">
              <div
                class="card d-flex justify-content-evenly text-bg-dark"
                style="width: 100%"
              id="cardb"
              >
                <div class="card-body p-0">
                  <div>
                    <h5 class="card-text fw-bold">School:</h5>
                    <p>
                      {{ education.school }}
                    </p>
                    <h5 class="card-text fw-bold">Completed:</h5>
                    <p>
                      {{ education.pass }}
                    </p>
                    <h5 class="card-text fw-bold">Year</h5>
                    <p>
                      {{ education.year }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center my-4" v-for="cv in mycv" :key="cv.id">
      <a :href="cv.cvUrl" target="_blank">
        <button class="btn btn-outline-light" type="button">Download CV</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mydetails() {
      return this.$store.state.mydetails;
    },
    skills() {
      return this.$store.state.skills;
    },
    educations() {
      return this.$store.state.educations;
    },
    mycv() {
      return this.$store.state.mycv;
    },
  },
  mounted() {
    this.$store.dispatch("fetchMydetails"),
      this.$store.dispatch("fetchSkills"),
      this.$store.dispatch("fetchEducation"),
      this.$store.dispatch("fetchMycv");
  },
};
</script>

<style scoped></style>
