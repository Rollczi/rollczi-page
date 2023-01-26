<template>
    <main class="page-container">
        <slot/>
    </main>
</template>

<script>
export default {
    name: "PageContainer"
}
</script>

<style scoped>
.page-container {
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    background-color: var(--background-primary);
    background-image: url("@/assets/images/background/background.svg");
    background-repeat: repeat-y;
    background-size: cover;
    color: var(--on-background-primary);
}
</style>

