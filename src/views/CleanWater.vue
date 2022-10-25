<template>
    <div class="clean-water-wrapper" id="top" ref="firstElement">
        <img src="@/assets/waterfall.jpg" alt="wodospad">
        <div class="content">
            <h1>
                Czysta woda - gdzie można taką znaleźć?
            </h1>
        </div>
        <div class="text" id="text">
            <p>
                Wiesz już jaką ilość wody potrzebujesz aby żyć w&nbsp;zdrowiu.
            </p>
            <p>
                <br>
                Wiesz jakie powinna posiadać parametry.
            </p>
            <p>
                <br>
                Wiesz też zapewne, że&nbsp;powinna być czysta.
            </p>
            <p>
                <br>
                I&nbsp;tu muszę powiedzieć, że nie mam dla Ciebie dobrych wiadomości.
            </p>
            <p>
                <br>
                W przyrodzie nie ma już czystej wody i&nbsp;za naszego życia już takiej nie będzie?
            </p>
            <p>
                <br>
                Może rodzi Ci się teraz pytanie <b>DLACZEGO?</b>
            </p>
            <p>
                <br>
                Wystarczy przeanalizować pewne fakty a&nbsp;wszystko stanie się jasne.
            </p>
            <p>
                <br>
                W tym nagraniu znajdziesz kilka informacji na ten temat.
                <!-- <a href="https://www.youtube.com/watch?v=3DHnUJEVX9c" target="_blank">
                    zobacz nagranie.</a> -->
                <br>
                <br>
            </p>
            <div class="iframe-wrapper">
                <iframe src="https://www.youtube.com/embed/3DHnUJEVX9c" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <p>
                <br>
                <br>
                Jeżeli chcesz mieć dostęp do czystej i bezpiecznej wody dla zdrowia całej
                rodziny, to skontaktuj się się z osobą która udostępniła Ci te informacje.
                <br>
                <br>
                Osoba ta podpowie Ci na co zwrócić uwagę przy wyborze takiego urządzenia.
            </p>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'CleanWater',
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
.clean-water-wrapper {
    // height: 100vh;
    // width: 100%;
    // background-color: #4c4c4c;
    padding-top: 10vh;
    text-align: center;

    img {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -100;
        opacity: 0.8;
        object-fit: cover;
    }

    .content {
        position: relative;
        z-index: 200;

        h1 {
            color: white;
            font-family: 'Barlow', sans-serif;
            font-weight: 700;
            margin: 10vw 0;
            font-size: 100px;
        }
    }

    .text {
        position: absolute;
        padding: 10vh 20vw;
        top: 100vh;
        min-height: 100vh;
        width: 100%;
        background-color: #1399ee;
        opacity: 85%;
        color: white;

        p {
            font-size: 35px;
            text-align: start;
            font-family: 'Barlow', sans-serif;

            a {
                text-decoration: none;
                color: white;
                text-transform: uppercase;
                font-weight: 700;
            }
        }

        .iframe-wrapper {

            // height: 100%;
            // width: 100%;
            iframe {
                width: 560px;
                height: 315px;
            }
        }
    }
}

@media only screen and (max-width: 1450px) {
    .clean-water-wrapper {
        .content {
            h1 {
                font-size: 70px;
            }
        }

        .text {
            p {
                font-size: 28px;
            }

            .iframe-wrapper {

                // height: 100%;
                // width: 100%;
                iframe {
                    width: 440px;
                    height: 248px;
                }
            }
        }
    }
}

@media only screen and (max-width: 1024px) {
    .clean-water-wrapper {
        .content {
            h1 {
                font-size: 40px;
            }
        }

        .text {
            p {
                font-size: 25px;
            }

            .iframe-wrapper {

                // height: 100%;
                // width: 100%;
                iframe {
                    width: 350px;
                    height: 197px;
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .clean-water-wrapper {
        .content {
            h1 {
                font-size: 30px;
            }
        }

        .text {
            p {
                font-size: 18px;
            }

            .iframe-wrapper {

                // height: 100%;
                // width: 100%;
                iframe {
                    width: 220px;
                    height: 124px;
                }
            }
        }
    }
}
</style>
