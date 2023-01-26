<template>
    <HomePageBanner/>
    <HomeProjectsSection/>
</template>

<script>
import HomePageBanner from "@/components/pages/home/HomePageBanner";
import HomeProjectsSection from "@/components/pages/home/HomeProjectsSection";
export default {
    name: "HomePage",
    components: {HomeProjectsSection, HomePageBanner}
}
</script>

<style scoped>

</style>