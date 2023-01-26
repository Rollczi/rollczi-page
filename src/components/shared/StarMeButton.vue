<template>
    <BaseButton class="star-me-button" :href="'https://github.com/Rollczi?tab=repositories'">
        <StarIcon
            :size="'2.1rem'"
            :color="'#ffffff'"
            :strokeWidth="'2.1'"
        />
        <span>Star Me</span>
    </BaseButton>
</template>

<script>
import StarIcon from "@/components/icons/StarIcon";
import BaseButton from "@/components/shared/BaseButton";
export default {
    name: "StarMeButton",
    components: {BaseButton, StarIcon}
}
</script>

<style scoped>
.star-me-button {
    --raw-color: 255, 217, 86 !important;
}

.star-me-button svg {
    transition: all 0.3s ease-in-out;
    fill: transparent;
}

.star-me-button:hover svg {
    stroke: var(--text-color);
    fill: var(--text-color);
    filter: drop-shadow(0 0 10px var(--text-color-shadow));
}
</style>