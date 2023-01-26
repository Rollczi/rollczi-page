<template>
    <a class="base-button" :href="href">
        <slot/>
    </a>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        href: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.base-button {
    --raw-color: 255, 255, 255;
    --text-color: rgba(var(--raw-color));
    --text-color-shadow: rgba(var(--raw-color), 0.92);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    padding: 0 1.2rem;
    height: 3.4rem;

    border: 2px solid var(--on-button-hover);
    border-radius: 0.7rem;

    background-color: transparent;
    color: var(--on-background-primary);
    font-size: 1.0rem;
    font-weight: 600;
    font-family: inherit;

    cursor: pointer;
    transition: all 0.3s ease-in-out, box-shadow 0.1s ease-in-out;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.29);
}

.base-button:hover {
    background-color: var(--background-secondary);
    transform: translateY(-4px);
    text-shadow: 0 0 20px var(--text-color-shadow), 0 0 15px var(--text-color-shadow), 0 0 10px var(--text-color-shadow);
    box-shadow: 0 0 13px rgba(236, 227, 208, 0.64), 0 15px 15px rgba(255, 255, 255, 0.09);
}
.base-button:active {
    background-color: var(--background-secondary);
    transform: translateY(0px);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.29);
}
</style>