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
    // change function to declaration-function if it is a declaration of java method
    highlight = highlight.replace(new RegExp('(((<span class="token keyword"> {0,3}(void|int|double|float|byte|short|long|boolean|char) {0,3})|((<span class="token class-name">) {0,3}([a-zA-Z_$][a-zA-Z\\d_$]*\\.)*[a-zA-Z_$][a-zA-Z\\d_$]*)) {0,3}(\\[])* {0,3}<\\/span>) *<span class="token function"> {0,3}(.*) {0,3}<\\/span>', 'g'), '$1 <span class="token declaration-function">$9</span>');
    // replace generic types with class-name
    // highlight = highlight.replace(new RegExp(');

    highlight = correctPunctuation(highlight, ',', 'comma');
    highlight = correctPunctuation(highlight, ';', 'semicolon');

    return highlight + "<span class=\"code-cursor\"></span>";
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
        },
        code: {
            type: String,
            default: ''
        }
    },
    mounted() {
        let code = this.code;

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

<style>
.code-cursor {
    display: inline-block;
    width: 2px;
    height: 1.2rem;
    margin-left: 0.1rem;
    margin-bottom: -0.23rem;
    background-color: var(--on-background-shadow);
    animation: code-cursor 1s infinite;
}

@keyframes code-cursor {
    0% {
        opacity: 1;
    }
    49% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}
</style>