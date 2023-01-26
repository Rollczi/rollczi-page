import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/pages/home/HomePage";

createApp(App)
    .use(createRouter( {
        history: createWebHistory(),
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            }

            if (to.hash) {
                return { el: to.hash }
            }

            return { x: 0, y: 0 };
        },
        routes: [
            { path: '/', component: HomePage },
            { path: '/:catchAll(.*)', component: HomePage }
        ]
    }))
    .mount('#app')