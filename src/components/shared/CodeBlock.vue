<template>
    <div class="card">
        <div class="tools">
            <div class="circle">
                <span class="red box"></span>
            </div>
            <div class="circle">
                <span class="yellow box"></span>
            </div>
            <div class="circle">
                <span class="green box"></span>
            </div>
        </div>
        <pre ref="code" :class="'card-content language-' + language">
            <slot/>
        </pre>
    </div>
</template>

<script>
import Prism from 'prismjs';

function correctHighlight(highlight) {
    highlight = correctPunctuation(highlight, ',', 'comma');
    highlight = correctPunctuation(highlight, ';', 'semicolon');

    return highlight;
}

function correctPunctuation(highlight, punctuation, replacement) {
    return highlight.replace(new RegExp('<span class="token punctuation">(' + punctuation + ')</span>', 'g'), '<span class="token ' + replacement + '">$1</span>');
}

export default {
    name: "CodeBlock",
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
.card {
    background-color: #2b2b2b;
    border-radius: 8px;
    z-index: 1;
}

.tools {
    display: flex;
    align-items: center;
    padding: 9px;
}

.circle {
    padding: 0 4px;
}

.box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
}

.red {
    background-color: #ff605c;
}

.yellow {
    background-color: #ffbd44;
}

.green {
    background-color: #00ca4e;
}

.card-content {
    padding: 0.2rem 1.2rem 1.2rem 1.2rem;
}

</style>