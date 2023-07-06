<template>
  <div>
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary p-0"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            src="https://i.postimg.cc/ydQmsv52/C-K.gif"
            class="logo"
            loading="lazy"
            alt="Logo"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/resume">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects"
                >Projects</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/testimonials"
                >Testimonial</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
