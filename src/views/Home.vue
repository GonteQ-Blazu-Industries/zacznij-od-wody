<template>
    <div class="home-page-wrapper">
        <video src="@/assets/waterfallvideo.mp4" muted loop autoplay></video>
        <div id="overlay">
        </div>
        <div id="home-page-content">
            <h1>
                Dlaczego woda jest źródłem życia?
            </h1>
        </div>
        <div id="read-more">
                <img src="@/assets/arrowdown.svg" alt="czytaj więcej" height="75" width="75">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
    .home-page-wrapper{
        text-align: center;
        video{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -100;
            opacity: 0.7;
        }
        #overlay{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
            background: #4c4c4c;
            mix-blend-mode: overlay;
        }
        #read-more{
                position: absolute;
                bottom: 10vh;
                left: 50%;
                z-index: 300;
                margin-left: -37.5px;
                // margin-top: 25vh;
                :hover{
                    cursor: pointer;
                }
                img{
                    filter: invert(99%)
                    sepia(1%)
                    saturate(0%)
                    hue-rotate(96deg)
                    brightness(105%)
                    contrast(100%);
                }
            }
        #home-page-content{
            position: relative;
            min-height: 100vh;
            z-index: 200;
            h1{
                color: white;
                font-family: 'Barlow', sans-serif;
                font-weight: 700;
                padding: 10vw 0;
                font-size: 100px;
            }
            #more-text{
                display: none;
                color: white;
                font-family: 'Barlow', sans-serif;
            }
        }
    }
        @media only screen and (max-width: 1024px){
            .home-page-wrapper{
                #home-page-content{
                    h1{
                        font-size:25px;
                    }
                }
                #read-more{
                    margin-left: -30px;
                    img{
                        width: 60px;
                        height: 60px;
                    }
                }
            }
        }
        @media only screen and (max-width: 768px){
            .home-page-wrapper{
                #home-page-content{
                    h1{
                        font-size: 40px;
                    }
                }
                #read-more{
                    margin-left: -25px;
                    img{
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }

</style>
