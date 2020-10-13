<template>
    <v-app id="inspire">
        <top-nav></top-nav>

        <v-main class="grey lighten-3">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </v-main>
    </v-app>
</template>

<script>
import TopNav from './components/TopNav';

export default {
    data: () => ({}),
    components: {
        TopNav,
    },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>