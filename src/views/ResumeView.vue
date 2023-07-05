<template>
 <div class="resume pt-2">
    <div class="text-center">
      <h2>My Details</h2>
      <DetailsComp/>
    </div>
    <div class="text-center">
      <h2>Skills</h2>
      <SkillsComp/>
    </div>
    <div class="text-center mt-3">
      <h2>Education</h2>
      <EducationComp/>
    </div>
    <CvComp/>
 </div>
</template>

<script>
import DetailsComp from '@/components/DetailsComp'
import SkillsComp from '@/components/SkillsComp.vue';
import EducationComp from '@/components/EducationComp.vue';
import CvComp from '@/components/CvComp'


    export default {
  components: {
        DetailsComp,
        SkillsComp,
        EducationComp,
        CvComp
        }
    }
</script>

<style scoped>

</style>