<template>
    <h2 id="project-litecommands">LiteCommands</h2>
    <p>
        LiteCommands is a lightweight, easy to use, and powerful annotation based command framework for Java.
        It is designed to be easy to use and easy to implement.
    </p>

    <h3>
        TODO: design website for LiteCommands
    </h3>
    <AnimatedCodeBlock language="java">
        <pre>
            @Route(name = "hello")
            public class HelloCommand {

                @Execute
                public void hello(@Context CommandSender sender, @Arg String text) {
                    sender.sendMessage("Hello " + text);
                }

            }
        </pre>
    </AnimatedCodeBlock>

    <h3>
        Each command is represented by a class, and each method in the class is a command.
    </h3>
    <AnimatedCodeBlock language="java">
        <pre>
            @Permission("my.permission")
            @Route(name = "hello world", aliases = {"hi world", "siema swiecie"})
            public class HelloCommand {

                @Async // this command will be executed asynchronously
                @Execute
                public String hello(
                        @Context Player sender,
                        @Arg int x,
                        @Arg String text,
                        @Flag("-a") boolean isFlagA
                ) {
                    int x = 10;
                    int y = 20;
                    sender.sendMessage("Hello world!");
                    sender.sendMessage("x = %d, text = %s, isFlagA = %b".formatted(x, text, isFlagA));
                }

            }
        </pre>
    </AnimatedCodeBlock>

</template>

<script>
import AnimatedCodeBlock from "@/components/shared/AnimatedCodeBlock";
export default {
    name: "HomeProjectLiteCommands",
    components: {AnimatedCodeBlock}
}
</script>

<style scoped>
.code {
    margin: 1rem auto;
}

    h2 {
        padding: 0 50px;
        font-size: 3.5rem;
        font-weight: 400;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }

    h3 {
        font-weight: 500;
    }

    p {
        padding: 0 50px;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }

    img {
        width: min(100%, 800px);
        max-width: 100%;
        margin-top: 2rem;
        border-radius: 1rem;
    }

</style>