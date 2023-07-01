<template>
  <NavbarComp/>
  <router-view/>
</template>

<script>
import NavbarComp from '@/components/NavbarComp'

export default {
  components: {
      NavbarComp
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

</style>
