<template>
    <div class="water-parameters-wrapper" id="top">
        <img src="@/assets/waterfall.jpg" alt="wodospad">
        <div class="content">
            <h1>
                Jakie woda powinna mieć parametry i dlaczego?
            </h1>
        </div>
        <div class="text" id="text">
            <p>Oprócz tego że woda powinna być czysta i pozbawiona szkodliwych
                substancji chemicznych i organicznych, powinna posiadać też
                odpowiednie parametry.
            </p>
            <p>
                <br>
                Woda w Twoim organizmie jest inna niż ta którą kupujesz w sklepie,
                czy ta która leci z Twojego kranu.
            </p>
            <p>
                <br>
                Woda „żywa” to taka w której żyją Twoje komórki. Ma ona kilka
                bardzo ważnych parametrów, dzięki którym one żyją, i dobrze się mają.
            </p>
            <p>
                <br>
                Za zdrowych komórek tworzą się tkanki. Z tkanek tworzą się organy.
                Organy wchodzą w skład różnych układów a odpowiednio współpracujące
                ze sobą układy stanowią człowieka.
            </p>
            <p>
                <br>
                Jak widzisz jakość Twojego życia w głównej mierze zależy od ilości i
                jakości wody którą pijesz.
            </p>
            <p>
                <br>
                Zobacz film który mówi o parametrach potrzebnych
                do zdrowego życia komórki. &nbsp;
                <a href="https://www.youtube.com/watch?v=Et0z6usZidw&t" target="_blank">
                    Kliknij tutaj</a>
            </p>
            <p>
                <br>
                PS. Zobacz animowany filmik o funkcjonowaniu naszych
                komórek: &nbsp;
                <a href="https://www.youtube.com/watch?v=8NThJgYO0gs&t" target="_blank">
                    Kliknij tutaj</a>
            </p>
            <p>
                <br>
                A wszystko to dzieje się w wodzie.
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WaterParameters',
};
</script>

<style lang="scss" scoped>
    .water-parameters-wrapper{
        height: 100vh;
        width: 100%;
        background-color: #4c4c4c;
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
        .water-parameters-wrapper{
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
        .water-parameters-wrapper{
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
        .water-parameters-wrapper{
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
