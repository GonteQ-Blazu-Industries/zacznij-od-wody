<template>
    <div class="scroll-down-wrapper">
        <a id="read-more" @click="scrollToText" href="#text"
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
                margin-left: -25px;
                img{
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
</style>
