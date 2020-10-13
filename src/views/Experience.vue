<template>
    <v-container>
        <v-row class="justify-center">
            <!-- <v-col cols="12" sm="2">
                <v-sheet rounded="lg" min-height="268">
                </v-sheet>
            </v-col> -->

            <v-col cols="12" sm="4">
                <!-- <v-sheet min-height="70vh" rounded="lg"> -->
                <h1 class="text-center">Experience</h1>
                <timeline></timeline>
                <!-- </v-sheet> -->
            </v-col>

            <!-- <v-col cols="12" sm="2">
                <v-sheet rounded="lg" min-height="268">
                </v-sheet>
            </v-col> -->
        </v-row>
    </v-container>
</template>
<script>
import Timeline from '../components/Timeline';

export default {
    data: () => ({}),
    components: {
        Timeline,
    },
};
</script>
