<template>
    <button>{{this.text}}</button>
</template>

<script>
export default {
    name: "DrawButton",
    props: {
        text: {
            type: String,
            default: "Learn More"
        }
    }
}
</script>

<style scoped>
button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    vertical-align: middle;
    text-decoration: none;
    font-family: inherit;
    font-size: 15px;

    font-weight: 600;
    color: var(--on-background-primary);
    text-transform: uppercase;
    padding: 0.9em 2em;
    background: var(--background-primary);
    border: 2px solid var(--on-background-shadow);
    border-radius: 0.75em;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
}

button::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--background-primary);
    border-radius: inherit;
    -webkit-box-shadow: 0 0 0 2px var(--on-background-shadow), 0 0.625em 0 0 var(--on-background-shadow);
    box-shadow: 0 0 0 2px var(--on-background-shadow), 0 0.625em 0 0 var(--on-background-shadow);
    -webkit-transform: translate3d(0, 0.75em, -1em);
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

button:hover {
    background: var(--background-primary);
    -webkit-transform: translate(0, 0.25em);
    transform: translate(0, 0.25em);
}

button:hover::before {
    -webkit-box-shadow: 0 0 0 2px var(--on-background-shadow), 0 0.5em 0 0 var(--on-background-shadow);
    box-shadow: 0 0 0 2px var(--on-background-shadow), 0 0.5em 0 0 var(--on-background-shadow);
    -webkit-transform: translate3d(0, 0.5em, -1em);
    transform: translate3d(0, 0.5em, -1em);
}

button:active {
    background: var(--background-primary);
    -webkit-transform: translate(0em, 0.75em);
    transform: translate(0em, 0.75em);
}

button:active::before {
    -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    -webkit-transform: translate3d(0, 0, -1em);
    transform: translate3d(0, 0, -1em);
}
</style>