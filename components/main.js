// import Vue from 'vue';
import MegaMenu from './MegaMenu.vue';
import StarCount from './StarCount.vue';
// import Bootstrap from 'bootstrap'
// import BlockContent from './BlockContent.vue'
require('./../css/bootstrap.min.css');
require('./../styl/main.styl');

new Vue({
    el: 'html',
    components: {
        MegaMenu,
        StarCount
    }
})
