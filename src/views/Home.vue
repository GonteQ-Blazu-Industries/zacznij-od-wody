<!-- eslint-disable import/no-extraneous-dependencies -->
<!-- eslint-disable import/no-unresolved -->
<!-- eslint-disable max-len -->
<template>
    <div class="home-page-wrapper" id="top" ref="firstElement">
        <!-- <video src="@/assets/waterfallvideo.mp4" muted loop autoplay playsinline></video> -->
        <img src="@/assets/waterfall.jpg" alt="wodospad">
        <div id="home-page-content">
            <h1>
                Dlaczego woda jest źródłem życia?
            </h1>
        </div>
        <div class="text" id="text">
            <p>
                Kolokwialnie można powiedzieć że "<strong>Bez wody nie ma życia</strong>".
            </p>
            <p>
                To właśnie dzięki tej substancji istnieje ono na ziemii.
            </p>
            <p>
                Co się dzieje w miejscach w których brakuje wody? (pustynie) Zanika tam życie.
            </p>
            <p>
                Jeżeli bez wody brakuje życia, to czy utrzymamy swoje zdrowie bez niej?
            </p>
            <p>
                Jeżeli nasze ciało składa się z niej w około 70% to w takim stopniu
                zdrowie od niej zależy.
            </p>
            <p>
                <strong>Zobacz</strong> z czego to wynika.
            </p>
            <div class="iframe-wrapper">
                <iframe src="https://www.youtube.com/embed/oiDxgkWI_ws" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <p>
                PS. Zobacz animowany filmik o funkcjonowaniu naszych
                komórek: &nbsp;
            </p>
            <div class="iframe-wrapper">
                <iframe src="https://www.youtube.com/embed/8NThJgYO0gs" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <p>
                A wszystko to dzieje się w wodzie.
            </p>
        </div>
        <EmailForm class="email-form" />
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import EmailForm from '@/components/emailForm.vue';

export default {
    name: 'Home',
    components: {
        EmailForm,
    },
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
.home-page-wrapper {
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

    #overlay {
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

    #home-page-content {
        position: relative;
        min-height: 86vh;
        // height: 25vh;
        z-index: 200;

        // background-color: #4080bf;
        h1 {
            color: white;
            font-family: 'Barlow', sans-serif;
            font-weight: 700;
            margin: 10vw 0;
            font-size: 100px;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 3rem;
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
            margin-top: 30px;

            // height: 100%;
            // width: 100%;
            iframe {
                width: 560px;
                height: 315px;
            }
        }

        .email-form {
            margin-bottom: 20px;
            padding-bottom: 20px;
        }
    }
}

@media only screen and (max-width: 1450px) {
    .home-page-wrapper {
        #home-page-content {
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
    .home-page-wrapper {
        #home-page-content {
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
    .home-page-wrapper {
        #home-page-content {
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
