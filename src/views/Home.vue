<template>
    <div class="home-page-wrapper">
        <video src="@/assets/waterfallvideo.mp4" muted loop autoplay playsinline></video>
        <div id="overlay">
        </div>
        <div id="home-page-content">
            <h1>
                Dlaczego woda jest źródłem życia?
            </h1>
        </div>
        <a id="read-more" @click="scrollToText" href="#text"
        v-smooth-scroll="{duration: 1000, offset: -20,}">
                <img src="@/assets/arrowdown.svg" alt="czytaj więcej" height="75" width="75">
        </a>
        <div class="text" id="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
                vulputate nisi,
                fringilla vulputate quam tempor a. Phasellus dignissim luctus elit
                eu dictum. Mauris
                metus dolor, feugiat ut orci at, tincidunt hendrerit ante. In sed
                porttitor nisi.
                Fusce elementum sed nunc id malesuada. Suspendisse felis sem, dictum
                sit amet quam
                sed, luctus tincidunt ex. Nam vel mauris dolor. Nam eget ante id
                tellus vulputate
                laoreet. Duis mollis vestibulum elementum. Cras non tellus lacus.
                Cras mattis posuere
                ante varius tincidunt. Vestibulum egestas a diam eu lobortis.</p>

            <p>Cras eu elementum magna, quis rutrum nibh. Vestibulum ante ipsum
                primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Maecenas dolor
                nulla, aliquam sed
                porttitor at, dictum eu tortor. Nunc fermentum est vitae vehicula
                ullamcorper. In
                pulvinar tempor enim, et placerat justo varius ac. Phasellus cursus
                commodo blandit.
                Nullam vitae dolor at est scelerisque tincidunt et non magna. Quisque
                 ullamcorper justo
                eget augue fermentum, sed ornare neque egestas. Sed at diam ac magna
                 ultricies luctus eu
                sit amet sapien.</p>

            <p>Aliquam quis lorem lectus. Vestibulum ac sapien fringilla, hendrerit
                nisl et, posuere dui.
                Nulla semper nulla sit amet convallis viverra. Sed a facilisis justo,
                 nec sodales odio.
                Praesent tempus a nibh sit amet mattis. Donec sit amet sapien vehicula,
                pellentesque orci a,
                 cursus eros. Cras vitae egestas nunc, dignissim scelerisque lectus.
                 Donec sapien diam,
                 pulvinar vel augue vel, congue tincidunt turpis. Nulla mattis nibh
                  ligula, fringilla feugiat
                 dolor dictum id. Fusce sit amet porta purus, et varius quam. Sed
                 imperdiet, tortor eget egestas
                  rhoncus, nulla eros aliquam massa, sit amet iaculis dolor urna vel
                   arcu. Curabitur id vulputate
                  orci, sit amet sodales felis. Vivamus et egestas nisi. Curabitur
                  interdum dui vitae ipsum pulvinar
                   maximus. Suspendisse fringilla accumsan libero sed vestibulum. Nam
                   ultrices eleifend ex id
                   convallis.</p>

            <p>Donec ullamcorper porta ante sit amet fermentum. Nam volutpat condimentum
                auctor. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Pellentesque vestibulum enim ut
                egestas pharetra. Vestibulum
                sollicitudin augue massa, vitae bibendum mauris aliquet ut. Donec et mauris
                mauris. Donec dictum metus
                 mauris, cursus faucibus sem sagittis nec. Aenean ut blandit sapien.</p>

            <p>Quisque sodales felis vel sem porttitor sodales. In faucibus iaculis placerat.
                Mauris iaculis pulvinar
                 ex eget vehicula. Ut ante sapien, pellentesque vitae volutpat quis, varius sed
                 leo. Mauris elementum
                 dapibus convallis. Vivamus sit amet arcu urna. Pellentesque vestibulum, mauris
                 a tincidunt mattis,
                 orci velit rutrum elit, aliquet interdum lorem elit facilisis sem. Nam sed quam
                 massa. Maecenas
                 vestibulum tellus augue, sit amet dignissim magna faucibus blandit. Proin et velit
                 lorem.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    // const element = document.querySelector('#read-more');
    return {
      scrollToTextBool: false,
    };
  },
  methods: {
    scrollToText() {
      this.element.scrollIntoView(this.scrollToTextBool);
    },
  },
};
</script>

<style lang="scss" scoped>
    .home-page-wrapper{
        padding-top: 10vh;
        text-align: center;
        video{
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            object-fit: cover;
            z-index: -100;
            opacity: 0.8;
        }
        #overlay{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
            // background: #4c4c4c;
            // background: #3973ac;
            background: #4080bf;

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
        .text{
            position: absolute;
            padding: 10vh;
            top: 100vh;
            min-height: 100vh;
            width: 100%;
            background-color: #4c4c4c;
            // color: #0DB3D9;
            color: white;
            p{
                font-size: 35px;
                text-align: start;
                font-family: 'Barlow', sans-serif;
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
                #read-more{
                    margin-left: -30px;
                    img{
                        width: 60px;
                        height: 60px;
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
            .home-page-wrapper{
                #home-page-content{
                    h1{
                        font-size: 30px;
                    }
                }
                #read-more{
                    margin-left: -25px;
                    img{
                        width: 50px;
                        height: 50px;
                    }
                }
                .text{
                    p{
                        font-size: 18px;
                    }
                }
            }
        }

</style>
