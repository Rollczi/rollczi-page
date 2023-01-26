<template>
    <div class="menu" :class="isMobileOpen ? '' : 'mobile-hide'">
        <HeaderMenuItem
            @click="onMenuItemClick(item)"
            v-for="item in menu"
            :key="item.link"
            :name="item.name"
            :link="item.link"
            :selected="item.selected"
        />
    </div>
</template>

<script>
import HeaderMenuItem from "@/components/header/HeaderMenuItem";

export default {
    name: "HeaderMenu",
    components: {HeaderMenuItem},
    data() {
        return {
            menu: [
                { name: 'Home',     link: '/#home',               selected: true },
                { name: 'LiteCommands', link: '/#project-litecommands',       selected: false },
                { name: 'Contact', link: '/#contat', selected: false },
            ],
            isMobileOpen: false,
        };
    },

    methods: {
        onMenuItemClick(item) {
            this.moveToRoute(item.link);

            this.menu.forEach(menuItem => menuItem.selected = false);
            item.selected = true;
        },
        moveToRoute(link) {
            this.$router.push(link)
        },
        onScroll() {
            let currentItemWithAnchor = this.getCurrentItemWithAnchor();

            if (currentItemWithAnchor) {
                this.menu.forEach(menuItem => menuItem.selected = false);
                currentItemWithAnchor.selected = true;
            }
        },
        getCurrentItemWithAnchor() {
            const scrollPosition = window.scrollY;
            const mapAnchors = new Map();

            const currentSelected = this.menu.find(item => item.selected);
            const currentLinkWithoutAnchor =  currentSelected.link.split('#')[0];

            this.menu.forEach(menuItem => {
                const link = menuItem.link;

                if (!link.includes('#')) {
                    return;
                }

                const linkWithoutAnchor = link.split('#')[0];
                const anchor = link.split('#')[1];

                if (linkWithoutAnchor !== currentLinkWithoutAnchor) {
                    return;
                }

                const anchorElement = document.getElementById(anchor);

                if (!anchorElement) {
                    return;
                }

                mapAnchors.set(menuItem, anchorElement.offsetTop);
            });

            if (mapAnchors.size === 0) {
                return currentSelected;
            }

            // filter anchors that are above current scroll position and get anchor with smallest offset
            const filteredAnchors = Array.from(mapAnchors.keys())
                .filter(key => mapAnchors.get(key) < scrollPosition + 300);

            if (filteredAnchors.length === 0) {
                let find = this.menu.find(item => !item.link.includes("#") && item.link === currentLinkWithoutAnchor);

                if (find) {
                    return find;
                }

                return Array.from(mapAnchors.keys()).reduce((a, b) => mapAnchors.get(a) < mapAnchors.get(b) ? a : b);
            }

            return filteredAnchors.reduce((a, b) => mapAnchors.get(a) > mapAnchors.get(b) ? a : b);
        },

    },
    created() {
        window.addEventListener('scroll', this.onScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.onScroll);
    }
}
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: center;
}
</style>