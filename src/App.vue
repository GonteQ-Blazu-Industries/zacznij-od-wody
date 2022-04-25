<template>
  <div id="app-wrapper">
    <div id='app-nav'>
        <Navbar :class="{'page-scrolled': pageScrolled}"/>
    </div>
    <router-view class='router-view'/>
    <footer>
      <CustomFooter :class="{'page-scrolled-footer': pageScrolledFooter}"/>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import CustomFooter from '@/components/footer.vue';

export default {
  components: {
    Navbar,
    CustomFooter,
  },
  data() {
    return {
      goToTopShow: false,
      pageScrolled: false,
      pageScrolledFooter: false,
    };
  },
  mounted() {
    document.addEventListener('scroll', () => {
    //   this.pageScrolled = true;
      //   console.log(window.scrollY);
      const windowScroll = window.scrollY;
      if (windowScroll > (window.innerHeight - (window.innerHeight / 5))) {
        this.pageScrolled = true;
        this.goToTopShow = true;
      } else {
        this.pageScrolled = false;
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
      background-color: #128ee3;
  }
  .go-to-top-display{
            display: block;
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
</style>
