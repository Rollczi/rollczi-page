<template>
    <div class="menu" :class="isMobileOpen ? '' : 'mobile--hide'">
        <HeaderMenuItem
            @click="isMobileOpen = false"
            v-for="item in menu"
            v-bind:key="item.link"
            :item = "item"
        />
    </div>
</template>

<script>
import HeaderMenuItem from "@/components/header/HeaderMenuItem";

export default {
    name: "HeaderMenuMobileIcon",
    components: {HeaderMenuItem},
    data() {
        return {
            menu: [
                { name: 'Home', link: '/' },
                { name: 'Oferty', link: '/offers' },
            ],
            isMobileOpen: false,
        };
    },
}
</script>

<style scoped>

</style>