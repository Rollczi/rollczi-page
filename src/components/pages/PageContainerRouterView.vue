<template>
    <div id="home" class="page-container-view">
        <RouterView/>
    </div>
</template>

<script>
export default {
    name: "PageContainerRouterView"
}
</script>

<style scoped>
.page-container-view {
    padding-top: 7rem;
    padding-left: 7vw;
    padding-right: 7vw;
    flex: 1;
}
</style>