<template>
    <div class="scroll-down-wrapper">
        <a id="read-more" @click="scrollToText"
        href="#text"
        v-smooth-scroll="{duration: 1000, offset: -20,}">
                <img src="@/assets/arrowdown.svg" alt="czytaj więcej">
        </a>
    </div>
</template>

<script>

export default {
  name: 'scrollDown',
  data() {
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
    .scroll-down-wrapper{
        // width: 100vw;
        position: absolute;
        bottom: 10vh;
        left: 50vw;
        z-index: 300;
        margin-left: -37.5px;
        animation-name: bounceArrow;
        animation-duration: 2s;
        // animation-delay: 1s;
        animation-iteration-count: infinite;
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
            height: 75px;
            width: 75px;
            position: relative;
        }
    }
    @media only screen and (max-width: 1450px){
        .scroll-down-wrapper{
            #read-more{
                img{
                    width: 70px;
                    height: 70px;
                }
            }
        }
    }
    @media only screen and (max-width: 1024px){
        .scroll-down-wrapper{
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
        .scroll-down-wrapper{
            #read-more{
                margin-left: calc((37.5px) /2);
                img{
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
    @keyframes bounceArrow{
        0%{
            bottom: 10vh;
        }
        50%{
            bottom: 12vh;
        }
        100%{
            bottom: 10vh;
        }
    }
</style>
