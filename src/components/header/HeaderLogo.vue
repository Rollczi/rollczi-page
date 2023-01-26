<template>
    <div class="logo" @click="onLogoClick">
        <GitHubIcon
            :scale="34"
            :color="'var(--on-background-secondary)'"
        />
        <h1>Rollczi.dev</h1>
    </div>
</template>

<script>
import GitHubIcon from "@/components/icons/GitHubIcon";
export default {
    name: "HeaderLogo",
    components: {GitHubIcon},
    methods: {
        onLogoClick() {
            window.location = 'https://rollczi.dev/';
        }
    }
}
</script>

<style scoped>
.logo {
    margin: 0;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    gap: 1.5em;
    transition: .3s ease-in-out;
}

.logo svg {
    font-size: 4rem;
}

.logo h1 {
    margin: 0;
    padding: 0;
}

.logo:hover {
    text-shadow: 0 0 0.5em var(--on-background-secondary);
}

.logo:hover svg {
    filter: drop-shadow(0 0 0.1em var(--on-background-secondary));
}

</style>