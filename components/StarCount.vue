<template lang="html">
    <div class="tag-count">
        <div class="star-like"></div>
        <span>2k</span>
    </div>
</template>

<script>
import dynamics from 'dynamics.js';

export default {
    data() {
        return {

        };
    },
    computed: {},
    ready() {
        var self = this;
        var el = document.getElementsByClassName("star-like");

        for (var i = 0; i < el.length; i++) {

            //   el[i].removeEventListener('mouseenter');
            el[i].addEventListener('click', function(event) {
                event.preventDefault();
                self.verticalBounce(this);
            }, false);
        }
    },
    attached() {},
    methods: {
        verticalBounce: function(el) {
            // Inpulso para saltar
            dynamics.animate(el, {
                scaleY: 0.8
            }, {
                type: dynamics.bounce,
                duration: 500,
                bounciness: 0
            })
            // Salto
            dynamics.animate(el, {
                translateY: -7
                // rotateY: -100
            }, {
                type: dynamics.forceWithGravity,
                bounciness: 0,
                duration: 500,
                delay: 70,
                frequency: 192
            })
            // Amortecendo salto
            dynamics.animate(el, {
                scaleY: 0.8
            }, {
                type: dynamics.bounce,
                duration: 400,
                bounciness: 600,
                delay: 650
                // complete: verticalBounce(el)
            })
        }
    },
    components: {}
};
</script>
<style lang="stylus" scoped>

$star_size = 25;

.tag-count
    position: relative;
    display: block;
    min-width: 60px;
    height: 30px;
    span
        color: $cinza_escuro;
        border: 1px solid #EEEEEE;
        border-radius: 10px;
        float: left;
        font-size: 12px;
        padding: 5px;
        margin-left: $star_size px;
    .star-like
        height: $star_size px;
        width: $star_size px;
        position: absolute;
        background: url('data:image/png;base64,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') no-repeat;
        background-size: ($star_size)px ($star_size)px;
        cursor: pointer;
</style>
