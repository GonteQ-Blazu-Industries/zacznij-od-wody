<template>
    <div class="home-page-wrapper" id="top">
        <!-- <video src="@/assets/waterfallvideo.mp4" muted loop autoplay playsinline></video> -->
        <img src="@/assets/waterfall.jpg" alt="wodospad">
        <!-- <div id="overlay">
        </div> -->
        <div id="home-page-content">
            <h1>
                Dlaczego woda jest źródłem życia?
            </h1>
        </div>
        <div class="text" id="text">
           <p>
                W naszym układzie słonecznym jest tylko jedna planeta, na&nbsp;której
                istnieje życie. Mamy szczęście mieszkać na tej błękitnej planecie.
            </p>
            <p>
                <br>
                Wiesz dlaczego jest tu życie i&nbsp;dlaczego jest błękitna?
                Bo około 70% jej powierzchni pokryte jest wodą.
            </p>
            <p>
                <br>
                To właśnie dzięki wodzie istnieje życie na&nbsp;ziemi.
            </p>

            <p>
                <br>
                Ale nawet tu na ziemi są miejsca, gdzie życia jest niewiele
                i&nbsp;wygląda jakby ono zanikało. Ale są też miejsca tętniące życiem.
            </p>
            <p>
                <br>
                Od czego to zależy? <br> Od dostępności, obfitości i&nbsp;jakości wody.
            </p>
            <p>
                <br>
                Te informacje można krótko podsumować
                stwierdzeniem: „Gdzie jest woda, tam jest życie”
            </p>
            <p>
                <br>
                Na tej stronie dowiesz się dlaczego woda jest tak ważna
                dla Ciebie i&nbsp;Twoich bliskich.
            </p>
            <p>
                <br>
                Jaką odgrywa ona rolę w Twoim zdrowiu,  samopoczuciu,
                regulacji&nbsp;wagi, kondycji fizycznej i&nbsp;psychicznej, oraz
                jakiej wody potrzebuje Twój organizm, by codziennie tryskał energią.
            </p>
            <p>
                <br>
                Zapraszam Cię do zgłębiania najprostszej, a&nbsp;zarazem
                najbardziej tajemniczej substancji na świecie.
            </p>
            <p>
                <br>
                Jeżeli trudno Ci uwierzyć, że woda jest jedną z&nbsp;najbardziej
                tajemniczych substancji na&nbsp;świecie,
                <b>ZOBACZ TEN FILM.</b>
            </p>
            <p>
                <br>
                <!-- <br> -->
                <!-- <a href="https://www.youtube.com/watch?v=IrCIpNOVxCY&t" target="_blank">
                    zobacz ten film</a> -->

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
        <EmailForm/>
    </div>
</template>

<script>
import EmailForm from '@/components/emailForm.vue';

export default {
  name: 'Home',
  components: {
    EmailForm,
  },
};
</script>

<style lang="scss" scoped>
    .home-page-wrapper{
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
        #overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
            background: #4080bf;
            // background: #1399ee;
            mix-blend-mode: overlay;
        }

        #home-page-content{
            position: relative;
            min-height: 82vh;
            // height: 25vh;
            z-index: 200;
            // background-color: #4080bf;
            h1{
                color: white;
                font-family: 'Barlow', sans-serif;
                font-weight: 700;
                margin: 10vw 0;
                font-size: 100px;
            }
        }
        .text{
            // position: absolute;
            padding: 10vh 20vw;
            top: 100vh;
            min-height: 100vh;
            width: 100%;
            // z-index: 200;
            // background-color: #4c4c4c;
            // background-color: #0DB3D9;
            background-color: #1399ee;
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
            .home-page-wrapper{
                #home-page-content{
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
            .home-page-wrapper{
                #home-page-content{
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
            .home-page-wrapper{
                #home-page-content{
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
