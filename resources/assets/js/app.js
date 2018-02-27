
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
window.Vue = require('vue');
import 'babel-polyfill'


import { routes } from './routes';
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
});


import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange.darken3,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})
import Vuemoment from 'vue-moment'
Vue.use(Vuemoment);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue);
//import SuiVue from 'semantic-ui-vue';
//Vue.use(SuiVue);

// import headroom from 'vue-headroom';
// Vue.use(headroom);
// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);

Vue.component('headermenu', require('./components/HeaderMenu.vue'));
Vue.component('headerlogo', require('./components/HeaderLogo.vue'));

Vue.component('advantages', require('./components/Advantages.vue'));
Vue.component('features', require('./components/Features.vue'));
Vue.component('steps', require('./components/Steps.vue'));

Vue.component('slider', require('./components/HomeSlider.vue'));
Vue.component('calc', require('./components/Calc.vue'));
Vue.component('w-button', require('./components/WButton.vue'));
Vue.component('feedback', require('./components/Feedback.vue'));
Vue.component('video', require('./components/Video.vue'));
Vue.component('order', require('./components/OrderForm.vue'));
Vue.component('support', require('./components/Support.vue'));
Vue.component('register', require('./components/Register.vue'));
Vue.component('jumbotron', require('./components/Jumbo.vue'));





// import SuiVue from 'semantic-ui-vue';
// Vue.use(SuiVue);

new Vue({
   el: "#app-block",
   router,
   methods: {
   },
   data: {
   }


});

// const app = new Vue({ router }).$mount('#app-block')
