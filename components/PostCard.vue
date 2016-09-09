<template lang="html">
    <div v-for="post in posts" class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <article class="post-card">
            <a href="#" alt="" title="">
                <div class="post-header">
                    <h3>{{post.titulo}}</h3>
                    <div class="bk-header" v-bind:style="{background: 'url( '+ post.imagem +' )  no-repeat center 0', backgroundSize: 'cover' }" ></div>
                </div>
            </a>
            <div class="post-content">
                <div class="post-info">
                    <div class="col-md-5">
                        <time datetime="2016-08-23">{{post.data}}</time>
                    </div>
                    <div class="col-md-7">
                        <span>
                            <a v-for="categoria in post.categorias" v-bind:style="{background: categoria.color}" href="{{categoria.link}}"  class="tagged">{{categoria.nome}}</a>
                        </span>
                    </div>
                </div>
                <div class="referencia">
                    <div class="col-xs-3 col-sm-3 col-md-3">
                        <img v-bind:src="post.logo" class="block-center">
                    </div>
                    <div class="col-xs-9 col-md-9 col-md-9">
                        <p>
                            <a href="#">{{post.referencia}}</a>
                        </p>
                    </div>
                </div>
                <div class="clear-fix">
                    <p>
                        {{post.descricao}}
                    </p>
                </div>
                <div class="post-footer">
                    <div class="col-sm-7">
                        <!-- component ViewCount -->
                        <view-count v-bind:postid="post.id" v-bind:postviews="post.views"></view-count>
                        <!-- <star-count v-bind:postid="post.id" v-bind:postlike="post.like"></star-count> -->
                    </div>
                    <div class="col-sm-5">
                        <a href="{{post.link}}" class="read-more">Leia mais</a>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import ViewCount from './ViewCount.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
// import StarCount from './StarCount.vue';

export default {
    data() {
        return {
            posts: []
        };
    },
    computed: {},
    ready() {
        //   self.$http.headers.common['X-CSRF-TOKEN'] = document.getElementById('token').getAttribute('value');

        var self = this;
        self.$http.get('/components/posts-example.json').then((data) => {
            self.posts = data.data;
        }, (data) => {
            console.log("Erro: " + data.status + " - " + data.statusText);
        });
    },
    attached() {},
    methods: {},
    components: {
    ViewCount,
    //   StarCount,
    }
};
</script>

<style lang="stylus" scoped>
$cinza_escuro = #36424a;
$laranja = #E84C1C;

$blur = 5px;
$bk-javascript = #F0DA50;
$bk-php = #8095D4;
$bk-laravel = #EE5F5B;

article.post-card
    overflow: hidden;
    background: #fff;
    min-height: 450px;
    width: 100%;
    float: left;
    margin-top: 70px;
    box-shadow: 1px 1px 3px #ccc;
    .post-header
        position: relative;
        .bk-header
            margin-top: 0;
            display: block;
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 200px;
            -webkit-filter: blur($blur);
            -moz-filter: blur($blur);
            -o-filter: blur($blur);
            -ms-filter: blur($blur);
            filter: blur($blur);
            transition: all ease 1s;
        h3
            bottom: 10px;
            margin-left: 10px;
            display: block;
            width: 75%;
            background: rgba(0,0,0,0.5);
            position: absolute;
            color: #fff;
            font-family: Verdana, Arial;
            font-size: 1.3em;
            padding: 7px;
            line-height: 33px;
            font-weight: bold;
            z-index: 3;
    .post-content
        p
            color: #4b4b4b;
            padding: 10px 30px 30px 30px;
            font-size: 15px;
            margin: 0;
        .post-footer
            width: 100%;
            height: 55px;
            .read-more
                display: block;
                background: $laranja;
                float: right;
                color: #fff;
                padding: 5px;
                margin-right: 30px;
                margin-bottom: 5px;
                box-shadow: 1px 1px 2px #ccc;
                font-size: 12px;
        .post-info
            time
                color: #aaa;
                font-size: 11px;
                padding: 5px;
                display: inline-block;
                line-height: 23px;
            span
                float: right;
                padding: 5px;
                a.tagged
                    padding: 5px;
                    font-size: 11px;
                    text-decoration: none;
                    color: #fff;
                    font-weight: bold;
                    box-shadow: 1px 1px 2px #ccc;
                    margin: 2px;
        .referencia
            min-height: 50px;
            clear: both;
            img
                border-radius: 100%;
                width: 50px;
            p
                text-align: left;
                padding: 0;
                a
                    line-height: 50px;
                    font-size: 25px;
                    color: $cinza_escuro;
                    text-decoration: none;
                    font-weight: bold;

</style>
