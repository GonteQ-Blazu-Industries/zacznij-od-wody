<template>
  <div id="app-wrapper">
    <div id='app-nav'>
        <Navbar />
    </div>
    <router-view class='router-view'/>
    <footer>
      <CustomFooter />
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
    #app-nav {
      z-index: 10000;
      position: sticky;
      top: 0;
      height: 10vh;
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
