<template lang="html">
    <div class="navegacao">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h1>
                        <a href="#">
                            <img src="http://placehold.it/250x75?text=LOGO" class="block-center">
                        </a>
                    </h1>
                </div>
                <div class="col-md-6">
                    <nav>
                        <button class="hamburguer">

                        </button>
                        <ul class="nav-principal">
                            <li v-for="links in listaLinks"><a @click="showMenu($event, links.title)" href="{{links.link}}">{{links.title}}</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-3">
                    <!-- Component InputSearch -->
                    <input-search></input-search>
                </div>
            </div> <!-- end row -->
        </div> <!-- container -->
    </div> <!-- navegacao -->
    <div class="color-sptripe azul col-md-2"></div>
    <div class="color-sptripe laranja col-md-8"></div>
    <div class="color-sptripe verde col-md-2"></div>
    <div v-show="menuDestaqueStatus" class="mega-menu-dropdown animated" transition="slideInDown">
        <div class="container">
            <div class="row">
                <div >
                    <div class="col-md-3 destaque">
                        <div class="chamada-destaque">
                            <a href="#">
                                <img src="./../images/dockercon-2016.png" class="img-responsive" alt="" />
                                <p>Dia 31 de fevereiro, não perca o maior evento de Docker da galaxia, faça sua incrição</p>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div v-for="lista in listaDestaques" class="col-md-6 box-links">
                            <h3><span class="icon icon-code"></span> <a href="#">{{lista.category}}_</a></h3>
                            <div v-for="post in lista.posts" class="link-preview">
                                <a href="#">
                                    <img v-bind:src="post.thumb" class="pull-left"> <!-- <img :src="'img/category/'+c.image" /> -->
                                    <h4>{{post.title}}</h4>
                                    <p>{{post.description}}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- #megaMenu -->

</template>

<script>
Vue.transition('slideInDown', {
    enterClass: 'slideInDown',
    leaveClass: 'slideOutUp'
});

import InputSearch from './InputSearch.vue';
require("./../node_modules/animate.css/animate.min.css");


export default {
  data() {
    return {
        menuDestaqueStatus: false,
        listaLinks: [
            {title: 'Home', link: '#'},
            {title: 'Destaques', link: '#'},
            {title: 'Mais Votados', link: '#'},
            {title: 'Envie seu Link', link: '#'},
            {title: 'Contato', link: '#'}
        ],
        listaDestaques: [
            {
                category: 'BACKEND',
                posts: [
                    {title: 'Título', thumb: 'http://lorempixel.com/90/90/sports/', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                    {title: 'Título', thumb: 'http://lorempixel.com/90/90/abstract/', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                    {title: 'Título', thumb: 'http://lorempixel.com/90/90/city/', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                ]
            },
            {
                category: 'FRONTEND',
                posts: [
                    {title: 'Título', thumb: 'http://lorempixel.com/90/90/technics/', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                    {title: 'Teste Front', thumb: 'http://lorempixel.com/90/90/transport/', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                    {title: 'Título', thumb: 'http://lorempixel.com/90/90/nature/', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                ]
            }
        ]
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
      showMenu: function(e, menu) {
          e.preventDefault();
          var self = this;
          if(menu === 'Destaques' || self.menuDestaqueStatus == true) {
              console.log(true);
              self.menuDestaqueStatus = ! self.menuDestaqueStatus;
          }
      }
  },
  components: {
      InputSearch
  }
};
</script>


<style lang="stylus" scoped>
$cinza_escuro = #36424a;
$bk_primary = #fff;
$bk_secondary = #ccc;
$text_color = #333;
$azul = #0483B5;
$laranja = #E84C1C;
$verde = #05C290;

//####### HEADER ########
header
    position: relative;
    .navegacao
        width: 100%;
        background-color: $bk_primary;
        position: relative;
        z-index: 10;
        box-shadow: 1px 0 2px 2px rgba(42,42,42,.25);
        nav
            button.hamburguer
                border: 1px solid #000;
                width: 45px;
                height: 45px;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADHklEQVR42u2agXWbMBCGLxOUbuBu4E4QPEG8QfEESSaoO0HjCUInaDtBnQlCJijdwJ3A1f90elaowAgQB7H+9/QgPJDvPqQ76cgVXbiupA2QVgQgbYC0IgBpA6QVAUgbIK0IQNoAaUUA0gZIKxSARLWlaqlq7/ic+Jg0PFeoduDzJ9VKvlbMAcBCtVt2etmrJ7d+qPaTj4eefQ0KAA5/5uMYgvM71R6GANEHQMKO343kuAvEhvSIGB0AnP9FYYa6rzAS7scGAOdTac8tYSTkYwHAkP8q7XFFmA4fSWeN4AB+k474U1NOeiQEBbBW7bu0pzXCKHgfGsCWdOSfqlaq7UMCmFrwqwrZ4OGSAXwhPUqDAXhzigCkDRhAWI0iML9Qh/1BGwApnTY7Oel5Vp55ZkE6Zd7wvd/IMzq3kGsvcmD7WgfCJgC241W5QBinP5F7j4A9/Y7aL1lT7qdwwMtIr0braguwa0MtoLsAZOxEeu5hdualwWmXzHY2Z0NThod2bZ0f2HkDYcfHx4ptBpABZgvX76mhoOIC8Gz9+F/rHLqhdgWPgp0DHFMROge0ZIOf+FjydbxlDPNbPi8q99lzfsG/Y+w0IwSwnVO3z3YYw/2a//5jGV02PLdgGEt+tnQ4PKSMjRnpusF/e4U2ALak6Xuvs+egcwAQaO6se4/SBg/gU+ubMUyfK/deFIAtvd75zWnRZDJHLwAZ6ZQD7UlvNeeiI9uMoFd2BQBh/iPiI4KC6JqhJDSckMaQq/OW9y/Zhmoqhn0r7u9o9b0iz3VAk0KWw3IG0bSWz6h5BWgqxHasKknXC539+gIIHQTxpjbkfmN2RqrTnvQbr9pZWyeYGgAju7Lj8w2iDoC53hvAmBUhxB3sIn1ijvk+UJ2qgwFIPA0aU5g25gvRll6n8NqvR3PK7b4CBLPfqA2ubxlAK005BnRR8KpwBHDpAPBdcC3tZYO8P5P7AsjotEGaoj6QZ2WpSxZ4ZBBTU6d/kuiaBrEmN4VHSZV0qhjvu3QQ1wHSBkgrApA2QFoRgLQB0ooApA2QVgQgbYC0IgBpA6T1D+TlsUGYQEEWAAAAAElFTkSuQmCC') no-repeat;
                background-size: 45px 45px;
                float: right;
                margin-top: -50px;
                margin-right: 20px;
            ul.nav-principal
                display: block;
                padding: 0;
                margin: 0;
                min-width: 470px;
                li
                    display: inline-block;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    a
                        color: $text_color;
                        font-weight: bold;
                        font-size: 16px;
                        text-decoration: none;
                        padding: 42px 7px;
                        display: block;
                        margin: 0;
                        transition: all ease 0.5s;
                        &:hover
                            background-color: $bk_secondary;
    .mega-menu-dropdown
        position: absolute;
        width: 1170px;
        height: 350px;
        left: 50%;
        margin-left: -585px;
        background: #EEEEEE;
        z-index: 5;
        box-shadow: 2px 2px 10px #333;
        .destaque
            background: #F9C92B;
            min-height: 349px;
            padding-top: 30px;
            .chamada-destaque
            a
                text-decoration: none;
            p
                color: #333;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                margin-top: 10px;
                padding-left: 10px;
                padding-right: 10px;
        .box-links
            min-height: 310px;
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 0;
            h3
                text-transform: uppercase;
                margin-top: 0;
            h4
                font-size: 12px;
                color: #333;
                font-weight: bold;
                margin-bottom: 5px;
                margin-top: 5px;
            .link-preview
                height: 90px;
                overflow: hidden;
                margin-top: 5px;
                margin-right: 15px;
                transition: all ease 0.4s
                border-radius: 2px;
                &:hover
                    background: #ccc;
                a
                    text-decoration: none;
                img
                    margin-right: 5px;
                p
                    font-size: 12px;
                    color: #333;
                    text-align: justify;
                    padding-right: 15px;
    .color-sptripe
        height: 4px;
        &.laranja
            background-color: $laranja;
        &.azul
            background-color: $azul;
        &.verde
            background-color: $verde;
</style>
