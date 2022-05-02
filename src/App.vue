<template>
  <div id="app-wrapper">
    <div id='app-nav'>
        <Navbar :class="{'page-scrolled': pageScrolled}"/>
    </div>
    <router-view class='router-view'/>
    <ScrollDown :class="{'display-none': hideArrowDown}" />
    <ScrollToTop :class="{'display-none': hideArrowUp}"/>
    <footer>
      <CustomFooter :class="{'page-scrolled-footer': pageScrolledFooter}"/>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import CustomFooter from '@/components/footer.vue';
import ScrollDown from '@/components/scrollDown.vue';
import ScrollToTop from '@/components/scrollToTop.vue';

export default {
  components: {
    Navbar,
    CustomFooter,
    ScrollDown,
    ScrollToTop,
  },
  data() {
    return {
      pageScrolled: false,
      pageScrolledFooter: false,
      hideArrowDown: false,
      hideArrowUp: true,
    };
  },
  mounted() {
    document.addEventListener('scroll', () => {
    //   this.pageScrolled = true;
      //   console.log(window.scrollY);
      const windowScroll = window.scrollY;
      // if (windowScroll > (window.innerHeight - (window.innerHeight / 5))) {
      if (windowScroll) {
        this.pageScrolled = true;
        this.hideArrowDown = true;
        this.hideArrowUp = false;
      } else {
        this.pageScrolled = false;
        this.hideArrowDown = false;
        this.hideArrowUp = true;
      }
      if (windowScroll > (window.innerHeight - (window.innerHeight - 100))) {
        this.pageScrolledFooter = true;
      } else {
        this.pageScrolledFooter = false;
      }
    });
  },
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700&family=Fredoka:wght@300;400&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  // overflow-x: hidden;
  // -ms-overflow-style: none;
  // scrollbar-width: none;
}
body{
  background-color: #4c4c4c;
  z-index: -200;
}
// ::-webkit-scrollbar{
//         display: none;
//       }
#app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
  // height: 100vh;
//
#app-wrapper{
  .page-scrolled{
    background-color: #4c4c4c;
  }
  .page-scrolled-footer{
      background-color: #1399ee;
  }
  .go-to-top-display{
    display: block;
  }
  .display-none{
    display: none;
  }
  // max-width: 100vw;
    #app-nav {
      z-index: 10000;
      position: fixed;
      top: 0;
      height: 10vh;
      width: 100%;
      Navbar{
        height: 100%;
      }
    // CustomFooter{
    //   height: 4vh;
    //   position: bottom;
    //   // bottom: 0;
    // }
    }
    .router-view{
      min-height: 80vh;
    }
    footer{
      position: fixed;
      bottom: 0;
      height: 10vh;
      width: 100%;
      z-index: 1500;
    }
  }
}
@media only screen and(min-width: 1024px){
  .page-scrolled-footer{
    background-color: #128ee3;
  }
}
</style>
