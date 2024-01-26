<template>
    <div class="scroll-up-wrapper">
        <a href="#top" @click="scrollToTopView"
        v-smooth-scroll="{duration: 1000, offset: -20, updateHistory: false,}">
                <img src="@/assets/arrowup.svg" alt="wróć na górę" :class="{'colored': route.name === 'RzemienMeeting'}">
        </a>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed, ref, onMounted } from 'vue';

export default {
  name: 'scrollToTop',
  setup() {
    const route = useRoute();
    const currentRouteName = computed(() => route.name);
    const colored = ref(currentRouteName.value === 'RzemienMeeting');

    onMounted(() => {
      colored.value = route.name === 'RzemienMeeting';
    });

    return {
      colored,
      route,
    };
  },
  data() {
    return {
      scrollToTop: false,
    };
  },
  methods: {
    scrollToTopView() {
      // this.element.scrollIntoView(this.scrollToTop);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
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
      animation-name: bounceArrow;
      animation-duration: 2s;
      animation-iteration-count: infinite;
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
      .colored{
        filter: invert(15%) sepia(7%) saturate(6226%) hue-rotate(193deg) brightness(92%) contrast(91%);
        height: 30px;
        width: 30px;
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
        a{
          margin-left: -25px;
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
