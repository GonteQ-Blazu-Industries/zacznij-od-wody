<template>
    <div class="clean-water-wrapper" id="top">
        <img src="@/assets/waterfall.jpg" alt="wodospad">
        <div class="content">
            <h1>
                Czysta woda - gdzie można taką znaleźć?
            </h1>
        </div>
        <div class="text" id="text">
            <p>
                Wiesz już jaka potrzebna Ci jest odpowiednia ilość wody.
            </p>
            <p>
                <br>
                Wiesz jakie powinna posiadać parametry.
            </p>
            <p>
                <br>
                Wiesz też zapewne, że powinna być ona czysta.
            </p>
            <p>
                <br>
                I tu muszę powiedzieć, że nie mam dla Ciebie dobrych wiadomości.
            </p>
            <p>
                <br>
                Wiesz że w przyrodzie nie ma już czystej wody i za naszego życia nie będzie?
            </p>
            <p>
                <br>
                Może rodzi Ci się teraz pytanie DLACZEGO i skąd takie przypuszczenia?
            </p>
            <p>
                <br>
                Wystarczy przeanalizować pewne fakty a wszystko stanie się jasne.
            </p>
            <p>
                <br>
                Zebrałem dla Ciebie kilka informacji na ten temat, zobacz nagranie.
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CleanWater',
};
</script>

<style lang="scss" scoped>
    .clean-water-wrapper{
        // height: 100vh;
        // width: 100%;
        // background-color: #4c4c4c;
        padding-top: 10vh;
        text-align: center;
        img{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -100;
            opacity: 0.8;
            object-fit: cover;
        }
        .content{
            position: relative;
            z-index: 200;
            h1{
                color: white;
                font-family: 'Barlow', sans-serif;
                font-weight: 700;
                margin: 10vw 0;
                font-size: 100px;
            }
        }
        .text{
            position: absolute;
            padding: 10vh 20vw;
            top: 100vh;
            min-height: 100vh;
            width: 100%;
            background-color: #1399ee;
            color: white;
            p{
                font-size: 35px;
                text-align: start;
                font-family: 'Barlow', sans-serif;
                a{
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
    @media only screen and (max-width: 1450px){
        .clean-water-wrapper{
            .content{
                h1{
                    font-size: 70px;
                }
            }
            .text{
                p{
                    font-size: 28px;
                }
            }
        }
    }
    @media only screen and (max-width: 1024px){
        .clean-water-wrapper{
            .content{
                h1{
                    font-size: 40px;
                }
            }
            .text{
                p{
                    font-size: 25px;
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        .clean-water-wrapper{
            .content{
                h1{
                    font-size: 30px;
                }
            }
        }
        .text{
            p{
                font-size: 18px;
            }
        }
    }
</style>
