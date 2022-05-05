<template>
    <div class="wrapper">
        <h1>Dziękuje za wiadomość</h1>
        <p>Postaram się jak najszybciej na nią odpowiedzieć</p>
    </div>
</template>
<script>
export default {
  name: 'EmailThanks',
};
</script>
<style lang="scss" scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        background-color: #1399ee;
        font-size: 'Barlow', sans-serif;
        color: white;
        h1{
            font-weight: 700;
            font-size: 100px;
        }
        p{
            font-size: 35px;
        }
    }
    @media only screen and (max-width: 1450px){
        .wrapper{
            h1{
                font-size: 70px;
            }
            p{
                font-size: 28px;
            }
        }
    }
    @media only screen and (max-width: 1024px){
        .wrapper{
            h1{
                font-size: 40px;
            }
            p{
                font-size: 25px;
            }
        }
    }
    @media only screen and (max-width: 768px){
        .wrapper{
            h1{
                font-size: 30px;
            }
            p{
                font-size: 18px;
            }
        }
    }
</style>
