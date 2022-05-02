<template>
    <div class="water-parameters-wrapper">
        <div class="content">
            <h1>
                Jakie są parametry wody?
            </h1>
        </div>
        <div class="text" id="text">
            <p>
                W naszym układzie słonecznym jest tylko jedna planeta, na której
                istnieje życie. Mamy szczęście mieszkać na tej błękitnej planecie.
            </p>

            <p>
                Wiesz dlaczego jest tu życie i dlaczego jest błękitna?
                Bo około 70% jej powierzchni pokryte jest wodą.
            </p>

            <p>
                To właśnie dzięki wodzie istnieje życie na ziemi.
            </p>

            <p>
                Ale nawet tu na ziemi są miejsca, gdzie życia jest niewiele
                i wygląda jakby ono zanikało, a są też miejsca, gdzie
                jest go wielka obfitość.
            </p>

            <p>
                Od czego to zależy? Od dostępności, obfitości i jakości wody.
            </p>
            <p>
                Można te informacje krótko podsumować: „Gdzie jest woda, tam jest życie”
            </p>
            <p>
                Z informacji na tej stronie dowiesz się dlaczego woda jest tak ważna
                dla Ciebie i Twoich bliskich.
            </p>
            <p>
                Jaką odgrywa ona rolę w Twoim zdrowiu,  samopoczuciu,
                regulacji wagi, kondycji fizycznej i psychicznej, oraz
                jakiej wody potrzebuje Twój organizm, by codziennie tryskał
                 energią.
            </p>
            <p>
                Zapraszam Cię do zgłębiania najprostszej, a zarazem
                najbardziej tajemniczej substancji na świecie.
            </p>
            <p>
                Jeżeli nie wierzysz że tą najbardziej tajemniczą substancją
                jest woda, koniecznie zobacz ten film.
            </p>
            <p>
                Woda, wielka tajemnica: www.youtube.com/watch?v=IrCIpNOVxCY&t
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
