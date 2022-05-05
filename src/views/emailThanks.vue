<template>
    <div class="wrapper">
        <h1>Dziękuje za wiadomość</h1>
        <p>Postaram się jak najszybciej na nią odpowiedzieć</p>
        <a href="https://zacznijodwody.pl">Wróć na stronę główną</a>
    </div>
</template>
<script>
export default {
  name: 'EmailThanks',
};
</script>
<style lang="scss" scoped>
    .wrapper{
        background-image: url('@/assets/water.jpg');
        background-size: cover;
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
        width: 100vw;
        height: 100vh;
        background-color: #4c4c4c;
        background-blend-mode: multiply;
        font-family: 'Barlow', sans-serif;
        color: white;
        h1{
            font-weight: 700;
            font-size: 100px;
        }
        p{
            font-size: 35px;
        }
        a{
            font-size: 35px;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
            color: white;
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
            a{
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
            a{
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
            a{
                font-size: 18px;
            }
        }
    }
</style>
