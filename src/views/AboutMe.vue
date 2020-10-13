<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" sm="3">
                <!-- <v-sheet rounded="lg" min-height="50vh"> -->
                <div class="text-right pa-5 pl-10">
                    <h1>John Doe</h1>
                    <h4 class="pb-8">Web Developer</h4>

                    <v-divider inset class="orange darken-2"></v-divider>

                    <p class="pt-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non
                        odio euismod lacinia at. Netus et malesuada fames ac turpis egestas sed tempus. Non quam lacus suspendisse faucibus interdum. Erat pellentesque adipiscing
                        commodo elit. Morbi tristique senectus et netus. Sit amet dictum sit amet justo donec enim. Pharetra et ultrices neque ornare aenean euismod elementum nisi.
                        Tincidunt arcu non sodales neque sodales ut etiam sit amet. Duis ultricies lacus sed turpis tincidunt id aliquet. Sollicitudin aliquam ultrices sagittis
                        orci a scelerisque purus semper. Vel eros donec ac odio tempor.
                    </p>
                </div>
                <!-- </v-sheet> -->
            </v-col>

            <v-col cols="12" sm="4">
                <v-img :src="imageUrl" class="rounded-lg" gradient="to bottom, rgba(148,71,14,.33), rgba(25,32,52,.7)">
                    <div class="top-left-vertical"></div>
                    <div class="top-left-horizontal"></div>
                    <div class="bottom-right-vertical"></div>
                    <div class="bottom-right-horizontal"></div>
                </v-img>
            </v-col>

            <v-col cols="12" sm="3">
                <!-- <v-sheet rounded="lg" min-height="50vh"> -->
                <div class="text-left pa-5">
                    <div v-for="(item, index) in skills" :key="index" class="my-6">
                        <p class="text-overline text-center">
                            {{ item.name }} <span class="orange--text text--darken-2">({{ item.value }}%)</span>
                        </p>
                        <v-progress-linear :value="item.value" color="orange darken-2"></v-progress-linear>
                    </div>
                </div>
                <!-- </v-sheet> -->
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        imageUrl: require('../assets/me.jpg'),
        skills: [
            {
                name: 'Lorem Ipsum',
                value: 90,
            },
            {
                name: 'Adipiscing Elit',
                value: 80,
            },
            {
                name: 'Tincidunt',
                value: 75,
            },
            {
                name: 'Vel Eros',
                value: 85,
            },
            {
                name: 'Odio Tempor',
                value: 70,
            },
        ],
    }),
    components: {},
};
</script>
<style lang="scss" scoped>
.progress-bar {
    color: #f6741e;
}

.bottom-right-vertical,
.bottom-right-horizontal,
.top-left-vertical,
.top-left-horizontal {
    position: absolute;
    background: #f57c00;
}

.top-left-vertical,
.top-left-horizontal {
    top: 15px;
    left: 15px;
}

.bottom-right-vertical,
.bottom-right-horizontal {
    bottom: 15px;
    right: 15px;
}

.top-left-vertical,
.bottom-right-vertical {
    width: 3px;
    height: 75px;
}
.top-left-horizontal,
.bottom-right-horizontal {
    width: 75px;
    height: 3px;
}
</style>
