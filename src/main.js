import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import router from './router';
import vuetify from './plugins/vuetify';

new Vue({
    render: h => h(App),
    vuetify,
    router
}).$mount('#app');
