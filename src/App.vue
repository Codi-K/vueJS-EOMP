<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavbarComp from '@/components/NavbarComp'
import FooterComp from '@/components/FooterComp'

export default {
  components: {
    NavbarComp,
    FooterComp
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
