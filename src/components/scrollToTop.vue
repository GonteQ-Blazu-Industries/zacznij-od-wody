<template>
    <div class="scroll-up-wrapper">
        <a href="#top" @click="scrollToTopView"
        v-smooth-scroll="{duration: 1000, offset: -20,}">
                <img src="@/assets/arrowup.svg" alt="wróć na górę">
        </a>
    </div>
</template>

<script>
export default {
  name: 'scrollToTop',
  data() {
    return {
      scrollToTop: false,
    };
  },
  methods: {
    scrollToTopView() {
      this.element.scrollIntoView(this.scrollToTextBool);
    },
  },
};
</script>

<style lang="scss" scoped>
    .scroll-up-wrapper{
      position: fixed;
      bottom: 10vh;
      right: 5vw;
      z-index: 300;
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
      .scroll-up-wrapper{
        a{
          img{
            width: 70px;
            height: 70px;
          }
        }
      }
    }
    @media only screen and (max-width: 1024px){
      .scroll-up-wrapper{
        a{
          margin-left: -30px;
          img{
            width: 60px;
            height: 60px;
          }
        }
      }
    }
    @media only screen and (max-width: 768px){
      .scroll-up-wrapper{
        margin-left: -25px;
        img{
          width: 50px;
          height: 50px;
        }
      }
    }
</style>
