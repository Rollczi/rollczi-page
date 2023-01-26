<template>
    <PageContainer>
        <Header/>
        <PageContainerView/>
        <Footer/>
    </PageContainer>
</template>

<script>
import PageContainer from "@/components/pages/PageContainer";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import PageContainerView from "@/components/pages/PageContainerRouterView";
export default {
  name: 'App',
    components: {PageContainerView, Header, Footer, PageContainer}
}
</script>

<style>
@import "styles/font.css";
@import "styles/theme.css";
@import "styles/common.css";
@import "styles/highlight/highlight.css";

</style>
