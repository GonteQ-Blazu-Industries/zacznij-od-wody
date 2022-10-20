<template>
    <div class="water-parameters-wrapper" id="top" ref="firstElement">
        <img src="@/assets/waterfall.jpg" alt="wodospad">
        <div class="content">
            <h1>
                Jakie woda powinna mieć parametry i dlaczego?
            </h1>
        </div>
        <div class="text" id="text">
            <p>Oprócz tego że&nbsp;woda powinna być czysta i&nbsp;pozbawiona szkodliwych
                substancji chemicznych i&nbsp;organicznych, powinna posiadać też
                odpowiednie parametry.
            </p>
            <p>
                <br>
                Woda w&nbsp;Twoim organizmie jest inna niż ta którą kupujesz w sklepie,
                czy ta która leci z&nbsp;Twojego kranu.
            </p>
            <p>
                <br>
                Woda „żywa” to taka w&nbsp;której żyją Twoje komórki. Ma ona kilka
                bardzo ważnych parametrów, które są niezbędne dla ich prawidłowego funckjonowania.
            </p>
            <p>
                <br>
                -> człowiek zbudowany jest z&nbsp;12 układów <br>
                -> układy zbudowane są z&nbsp;organów <br> -> organy zbudowane są z&nbsp;tkanek
                <br> ->
                a&nbsp;tkanka to skupisko komórek otoczonych wodą
            </p>
            <p>
                <br>
                Dlatego od jakości wody w jakiej żyją nasze komórki, zależy jakość naszego życia.
            </p>
            <p>
                <br>
                Zobacz film który mówi o&nbsp;parametrach wody potrzebnych
                do zdrowego życia komórki.
                <br>
                <br>
                <!-- <a href="https://www.youtube.com/watch?v=Et0z6usZidw&t" target="_blank">
                    Kliknij tutaj</a> -->
            </p>
            <div class="iframe-wrapper">
                <iframe
                src="https://www.youtube.com/embed/Et0z6usZidw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen>
                 </iframe>
            </div>
            <p>
                <br>
                Jednym z parametrów jest struktura wody, zobacz jak ważną rolę odgrywa ona
                 w naszym życiu.
                 <br>
                 <br>
            </p>
            <div class="iframe-wrapper">
                        <iframe
                        src="https://www.youtube.com/embed/IrCIpNOVxCY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'WaterParameters',
  setup() {
    const firstElement = ref(null);

    onMounted(() => {
      firstElement.value.scrollIntoView({ behavior: 'smooth' });
    });

    return {
      firstElement,
    };
  },
};
</script>

<style lang="scss" scoped>
    .water-parameters-wrapper{
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
            opacity: 85%;
            color: white;
            p{
                font-size: 35px;
                text-align: start;
                font-family: 'Barlow', sans-serif;
                a{
                    text-decoration: none;
                    color: white;
                    text-transform: uppercase;
                    font-weight: 700;
                }
            }
            .iframe-wrapper{
                // height: 100%;
                // width: 100%;
                iframe{
                    width: 560px;
                    height: 315px;
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
                .iframe-wrapper{
                        // height: 100%;
                        // width: 100%;
                        iframe{
                            width: 440px;
                            height: 248px;
                        }
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
                .iframe-wrapper{
                     // height: 100%;
                    // width: 100%;
                    iframe{
                        width: 350px;
                        height: 197px;
                    }
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

        .text{
            p{
                font-size: 18px;
            }
                .iframe-wrapper{
                            // height: 100%;
                            // width: 100%;
                            iframe{
                                width: 220px;
                                height: 124px;
                            }
                        }
            }
        }
    }
</style>
