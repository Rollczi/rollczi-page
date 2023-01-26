<template>
    <div class="header-menu-item" :class="[this.selected ? 'current' : 'not-current']">
        <span>
            {{ name }}
        </span>
    </div>
</template>

<script>
export default {
    name: "HeaderMenuItem",
    props: {
        name: String,
        link: String,
        selected: Boolean,
    },
}
</script>

<style scoped>
.header-menu-item {
    align-items: center;
    display: flex;

    margin: 0 1rem;
    padding: 0.5rem 1rem;

    transition-duration: 0.2s;
    cursor: pointer;
    user-select: none;
    font-weight: 500;
}

.current {
    background-color: var(--button-selected);
    color: var(--on-button-selected);
}
.not-current {
    background-color: var(--button);
    color: var(--on-button);
}
.header-menu-item:hover {
    background-color: var(--button-hover);
    color: var(--on-button-hover);
    text-shadow: 0 0 0.5rem var(--on-button-hover);
}
</style>