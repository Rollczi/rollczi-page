<template>
    <CodeBlock :language="language"/>
        <slot/>
    <CodeBlock/>
</template>

<script>
import Prism from 'prismjs';
import CodeBlock from "@/components/shared/CodeBlock";

function correctHighlight(highlight) {
    highlight = correctPunctuation(highlight, ',', 'comma');
    highlight = correctPunctuation(highlight, ';', 'semicolon');

    return highlight;
}

function correctPunctuation(highlight, punctuation, replacement) {
    return highlight.replace(new RegExp('<span class="token punctuation">(' + punctuation + ')</span>', 'g'), '<span class="token ' + replacement + '">$1</span>');
}

export default {
    name: "AnimatedCodeBlock",
    components: {CodeBlock},
    props: {
        language: {
            type: String,
            default: 'javascript'
        }
    },
    mounted() {
        // get slot content
        let code = this.$slots.default()[0].children;


        // remove leading spaces
        let lines = code.split('\n');
        let minSpace = lines.reduce((min, line) => {
            if (line.trim() === '') {
                return min;
            }

            let space = line.match(/^\s*/)[0].length;

            return space < min ? space : min;
        }, Infinity);

        // remove min space
        lines = lines.map(line => line.slice(minSpace));

        let highlight = Prism.highlight(lines.join('\n'), Prism.languages[this.language], this.language);

        this.$refs.code.innerHTML = correctHighlight(highlight);
    },
}
</script>

<style scoped>


</style>