require('./bootstrap');
Vue.component('poll', require('../../vendor/voyager-polls/resources/assets/js/poll.vue'));

const app = new Vue({
    el: '#app'
});