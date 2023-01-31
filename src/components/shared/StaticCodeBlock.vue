<template>
    <CodeBlock :language="language" :code="code"/>
</template>

<script>
import CodeBlock from "@/components/shared/BaseCodeBlock";

export default {
    name: "StaticCodeBlock",
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
        }
    },
    mounted() {
        this.code = this.$slots.default()[0].children;
    },
}
</script>

<style scoped>


</style>