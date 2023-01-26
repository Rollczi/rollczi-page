<template>
    <span class="rainbow-loader">{{this.text}}</span>
</template>

<script>
export default {
    name: "RainbowText",
    props: {
        text: String,
    },
}
</script>

<style scoped>
@keyframes rotate-animate {
    0%,100% {
        filter: hue-rotate(-70deg);
    }

    50% {
        filter: hue-rotate(150deg);
    }
}

.rainbow-loader {
    color: rgb(0, 0, 0);
    background: linear-gradient(to right, #2d60ec, #3ccfda);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: rotate-animate 8s linear infinite;
    font-weight: bold;
}
</style>