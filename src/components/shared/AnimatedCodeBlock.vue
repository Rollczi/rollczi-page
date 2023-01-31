<template>
    <CodeBlock :key="renderKey" :language="language" :code="code"/>
</template>

<script>
import CodeBlock from "@/components/shared/BaseCodeBlock";

export default {
    name: "AnimatedCodeBlock",
    components: {CodeBlock},
    props: {
        language: {
            type: String,
            default: 'javascript'
        }
    },
    data() {
        return {
            code: "",
            renderKey: 0
        }
    },
    methods: {
        forcesUpdateComponent() {
            this.renderKey++;
        }
    },
    mounted() {
        let code = this.$slots.default()[0].children;
        let charactersCount = 0;

        function changeCount(charactersCount) {
            if (code[charactersCount] === ' ' && code[charactersCount + 1] === ' ') {
                return changeCount(charactersCount + 1);
            }

            return charactersCount;
        }


        setInterval(() => {
            charactersCount++;

            charactersCount = changeCount(charactersCount);

            if (charactersCount > code.length) {
                clearInterval(this.interval);
                return;
            }

            this.code = code.slice(0, charactersCount);
            this.forcesUpdateComponent();

        }, 50);
    },
}
</script>

<style scoped>


</style>