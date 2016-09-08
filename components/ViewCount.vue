<template lang="html">
    <div class="view-count">
        <div @click="likeMais($event)" v-bind:class="{'bounceIn': animate}" class="eye-icon animated"></div>
        <span>{{postviews}}</span>
    </div>
</template>
<script>
var VueResource = require('vue-resource');
Vue.use(VueResource);

export default {
    data() {
        return {
            animate: false
        };
    },
    props: ['postid','postviews'],
    computed: {},
    ready() {

    },
    attached() {},
    methods: {
    },
    components: {}
};
</script>
<style lang="stylus" scoped>

$eye_size = 25;

.view-count
    position: relative;
    display: block;
    min-width: 60px;
    height: 30px;
    float: left;
    span
        color: $cinza_escuro;
        border: 1px solid #EEEEEE;
        border-radius: 10px;
        float: left;
        font-size: 12px;
        padding: 5px;
        margin-left: $eye_size px;
    .eye-icon
        height: $eye_size px;
        width: $eye_size px;
        position: absolute;
        background: url('data:image/png;base64,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') no-repeat;
        background-size: ($eye_size)px ($eye_size)px;
        cursor: pointer;
</style>
