<template>
    <div id="home" class="banner">
        <div class="banner-content">
            <h1 class="title">
                I am a <b>Java Developer</b><br/>
                and passionate <b>Web Designer</b>

            </h1>

            <p class="subtitle">
                I love to create <u>things</u> that are useful and <RainbowText text="beautiful"/>.
            </p>
            <div class="buttons-container">
                <StarMeButton/>
                <GitHubButton/>
            </div>

        </div>
        <div class="banner-images">
            <img class="java no-select" src="@/assets/images/banner/java.png" alt="Java icon">
            <img class="kotlin no-select" src="@/assets/images/banner/kotlin.png" alt="Kotlin icon">
            <img class="intellij no-select" src="@/assets/images/banner/intellij.svg" alt="IntelliJ icon">
        </div>
    </div>
</template>

<script>
import RainbowText from "@/components/shared/RainbowText";
import StarMeButton from "@/components/shared/StarMeButton";
import GitHubButton from "@/components/shared/GitHubButton";
export default {
    name: "HomePageBanner",
    components: {GitHubButton, StarMeButton, RainbowText}
}
</script>

<style scoped>
@import "homePageBannerImages.css";

.banner {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 12rem;
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

.buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2.2rem;
    gap: 1.2rem;
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
}

</style>