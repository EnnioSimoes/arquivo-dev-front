<template>
    <form class="buscar form-inline">
        <div class="form-group pull-right">
            <button type="button" class="search form-control" name="button"></button>
            <input type="text" id="text_busca" placeholder="Buscar no site" class="form-control" name="name" value="">
        </div>
    </form>
</template>

<script>
    export default {};
</script>

<style lang="stylus" scoped>
$cinza = #eee;

form.buscar
    box-sizing: border-box;
    color: rgb(51, 51, 51);
    display: block;
    float: right;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    height: 106px;
    line-height: 20px;
    margin-top: 0px;
    min-width: 242px;
    padding-bottom: 33px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 33px;
    position: relative;
    width: 242px;
    .form-group
        min-width: 66px;
        position: relative;
    input[type="text"]
        display: block;
        float: left;
        height: 40px;
        border-radius: 3px 0 0 3px;
        width: 0px;
        right: -30px;
        transition: all ease 0.5s
        position: absolute;
        top: 0;
        left: 5px;
        &:hover, &:focus
            width: 150px;
            left: -150px;
    button.search
        width: 40px;
        height: 40px;
        background: url('data:image/png;base64,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') no-repeat;
        background-color: $cinza;
        background-size: 25px 25px;
        background-position: center;
        border: none;
        border-radius: 3px;
        position: relative;
        z-index: 10;
        &:hover ~ #text_busca
            width: 150px;
            left: -150px;
</style>
