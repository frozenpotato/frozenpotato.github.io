<template>
    <v-app-bar app color="white" flat>
        <v-avatar :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'" size="32"></v-avatar>

        <v-tabs centered class="ml-n9" color="grey darken-1">
            <v-tab v-for="link in links" :key="link" :to="link.path">
                {{ link.name }}
            </v-tab>
        </v-tabs>

        <v-avatar class="hidden-sm-and-down" color="grey darken-1 shrink" size="32"></v-avatar>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                name: 'About Me',
                path: '/about',
            },
            {
                name: 'Experience',
                path: '/experience',
            },
            {
                name: 'Portfolio',
                path: '/portfolio',
            },
            {
                name: 'Contact',
                path: '/contact',
            },
        ],
    }),
};
</script>
