<template>
    <div class="email-wrapper">
        <div class="email-content">
            <form action="mailto:pabil@interia.pl"
            method="post"
            enctype="multipart/form-data"
            name="emailForm">

            </form>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
    .email-wrapper{
        position: fixed;
        z-index: 20000;
        background-color: #4c4c4c;
        height: 100vh;
        width: 100vh;
        top: 0;
        left: 0;
        .email-content{
            position: relative;
            z-index: 30000;
            width: 80vw;
            height: 80vh;;
        }
    }
</style>
