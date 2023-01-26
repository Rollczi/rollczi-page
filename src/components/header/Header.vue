<template>
    <header>
        <HeaderLogo/>
        <HeaderMenu/>
    </header>
</template>

<script>
import HeaderMenu from "@/components/header/HeaderMenu";
import HeaderLogo from "@/components/header/HeaderLogo";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    components: {HeaderLogo, HeaderMenu}
}
</script>

<style scoped>
header {
    position: fixed;
    display: flex;
    justify-content: space-around;

    z-index: 100;
    width: 100%;
    padding: 1.5rem;
    background-color: var(--background-secondary-transparent);
    backdrop-filter: blur(15px);
}

</style>