<template>
    <div class="container-fluid footer">
        <div class="d-flex justify-content-center gap-2 my-1">
            <!-- instagram -->
            <a href="https://www.instagram.com/codells_bruh/" target="_blank">
                <img src="https://i.postimg.cc/c4Lh1cd1/instagram.png" class="footerI" loading="lazy" alt="instagram"></a>
                <!-- GitHub -->
            <a href="https://github.com/Codi-K" target="_blank">
                <img src="https://i.postimg.cc/h40F5gDJ/github-sign.png" class="footerI" loading="lazy" alt="GitHub"></a>
                <!-- LinkedIn -->
            <a href="#" target="_blank">
                <img src="https://i.postimg.cc/P5qL11vG/linkedin.png" class="footerI" loading="lazy" alt="LinkedIn"></a>
        </div>
        <div class="d-flex justify-content-center">
            <p class="copyright my-0">
                    CopyRight &copy; {{ cYear }} Powered by xqcL
                </p>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
            return {
                cYear: new Date().getUTCFullYear()
            }
        }
    }
</script>

<style scoped>

</style>