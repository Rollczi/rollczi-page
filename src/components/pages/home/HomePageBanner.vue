<template>
    <div id="home" class="banner">
        <div class="banner-content">
            <h1 class="title">
                I am a <b>Java Developer</b><br/>
                and passionate <b>Web Designer</b>
            </h1>
            <p class="subtitle">
                and ...<br/>
                I love to create <u>things</u> that are useful and beautiful.
            </p>
            <DrawButton :text="'GitHub'"/>
        </div>
        <div class="banner-images">
            <img class="java no-select" :src="require('@/assets/images/banner/java.png')" alt="Java icon">
            <img class="kotlin no-select" src="@/assets/images/banner/kotlin.png" alt="Kotlin icon">
            <img class="intellij no-select" src="@/assets/images/banner/intellij.svg" alt="IntelliJ icon">
        </div>
    </div>
</template>

<script>
import DrawButton from "@/components/shared/DrawButton";
export default {
    name: "HomePageBanner",
    components: {DrawButton}
}
</script>

<style scoped>
.banner {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 10rem;
    padding-bottom: 20rem;
    user-select: none;
}

.banner-content {
    z-index: 1;
}

.title {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    margin-left: -0.35rem;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    color: var(--on-background-shadow);
}

.small-text a {
    font-weight: 600;
}

.banner-images {
    position: relative;
    width: 20%;
    opacity: 0.8;
    z-index: 0;
}

.java, .kotlin, .intellij {
    position: absolute;
    opacity: 0.0;
}

.java {
    top: -4rem;
    left: -11rem;
    width: 15rem;
    animation: banner-icon-setup 0.3s ease-in-out both, up-down 3.5s ease-in-out infinite;
    animation-delay: 100ms;
}

.kotlin {
    top: -11rem;
    left: 6rem;
    width: 12rem;
    animation: banner-icon-setup 0.3s ease-in-out both, up-down 3.5s ease-in-out infinite;
    animation-delay: 500ms;
}


.intellij {
    top: 7rem;
    left: 8rem;
    width: 15rem;
    animation: banner-icon-setup-intellij 0.3s ease-in-out both, up-down 3.5s ease-in-out infinite;
    animation-delay: 800ms;
}

@keyframes banner-icon-setup {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes banner-icon-setup-intellij {
    0% { opacity: 0; }
    100% { opacity: 0.7; }
}

@keyframes up-down {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}

@media only screen and (max-width: 980px) {
    .banner {
        flex-direction: column;
        padding-top: 5rem;
        padding-bottom: 20rem;
    }

    .title {
        font-size: 2.1rem;
    }

    .subtitle {
        font-size: 0.9rem;
    }

    .banner-images {
        width: 35%;
        opacity: 0.3;
        margin-top: -17rem;
    }

    .java, .intellij {
        width: 12rem;
    }

    .kotlin {
        width: 10rem;
    }
}

</style>