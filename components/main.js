// import Vue from 'vue';
import MegaMenu from './MegaMenu.vue';
import PostCard from './PostCard.vue';
// import Bootstrap from 'bootstrap'
// import BlockContent from './BlockContent.vue'
require('./../css/bootstrap.min.css');
require('./../styl/main.styl');

new Vue({
    el: 'html',
    components: {
        MegaMenu,
        PostCard
    }
})
