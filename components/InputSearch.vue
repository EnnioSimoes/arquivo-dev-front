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
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4AgSFwwCSyL+IgAAAj5JREFUSMfdlE1oE1EQx/+z6TbJarIlm1AoiOC16mkREVG0ttJDPQrdq1AUc9Qe9SZoRQ82ntqbidBzwY9CxUNFMYJF19KDUKMx36tJzCa25D0v2botrrvUeNB3mtl98/+9N/NmgH99kdOPJ0tL+1nbdw7EhgHq73zOg7DAGc2cOnb43Y4Ac7reGzWqtzjoPACfQ1ybA4m+oHhJVdUNz4A5Xe9VjNo8gGEvp+OgR0YkdObs4OC6054euxMxqncA2hSX5RBiUQUBvx8A0Gq1UCobqNbqndPx0xGjdhvARdcbLDx9dkAQ6DUAAQAGBvoRU5RfBpXKFXzOFX6mi9NBp5oImwbRhOXLcshRHABiUQVyOGy5PiI24bRXsN1lyC7gtqLRiD0RQ+4AYI9lBANBV4AUDNjdvV4A9DcazQ7IWEaz1XQNNJst+4PNeKnBQ8ssFiuugGKpbG+IB64Agm8WQBsAavU68oWSo3ihWEK9/q2jDSb0YNYVcPLoIR3g03aRtcxHNEwTnDFwxtBoNLD24dMWeDaXFZ4vL496GhXpdFqsmuvzIBrxUsAv1a94u7oCSZK+S33y8fj4+IvfFRmqqm5UFHmMwBNWupzGUDafg766AlEUsSsU8hNji4lk8sQOxjUfAbCvo/seRI85o5mXb17dJBJGd4fDILJkuCkQjV3QtMWuvP3pVOoycdzYdrktEOFPAHFNmyLQtW1JkdqcjnS1exP3UpMgXAcATpiMa9pU10dCInn/6t1U6gr+u/UDwQPMHRgDG7EAAAAASUVORK5CYII=') no-repeat;
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
