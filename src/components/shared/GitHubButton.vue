<template>
    <BaseButton class="github-button" :href="'https://github.com/Rollczi/'">
        <GitHubIcon
        :size="'1.8rem'"
        />
        <span>GitHub</span>
    </BaseButton>
</template>

<script>
import BaseButton from "@/components/shared/BaseButton";
import GitHubIcon from "@/components/icons/GitHubIcon";
export default {
    name: "GitHubButton",
    components: {GitHubIcon, BaseButton}
}
</script>

<style>
.github-button {
    --raw-color: 135, 107, 256 !important;
}

.github-button path {
    transition: all 0.3s ease-in-out;
    fill: var(--on-background-secondary) !important;
}

.github-button:hover svg {
    filter: drop-shadow(0 0 10px var(--text-color-shadow));
}

.github-button:hover path {
    fill: var(--text-color) !important;
}
</style>