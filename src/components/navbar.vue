<!-- eslint-disable max-len -->
<template>
  <nav :class="{ 'page-scrolled': pageScrolled }" @scroll="onScroll">
    <div id="logo-section" @click.stop="navUnSlide">
      <router-link to="/">
        <div id="logo">
          <img src="@/assets/pabilkropla.png" alt="kropla wody" />
          <h1>Zacznij od wody</h1>
        </div>
      </router-link>
    </div>
    <div class="mobile-menu-section-drawer" :class="{ 'nav-active': navbarActive }" @click="navSlide">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <div class="desktop-menu-section" :class="{ 'nav-active': navbarActive }">
      <!-- <router-link to="/znaczenie-wody" @click="navSlide" class="menu-items">
                <h3>Znaczenie wody</h3>
                                                            </router-link> -->
      <router-link to="/parametry-wody" @click="navSlide" class="menu-items">
        <h3>Parametry wody</h3>
      </router-link>
      <router-link to="/czysta-woda" @click="navSlide" class="menu-items">
        <h3>Czysta woda</h3>
      </router-link>
      <a href="https://pawelbilski.pl/kurs/" target="_blank" @click="navSlide" class="menu-itmes">
        <h3>Kurs</h3>
      </a>
      <router-link to="/konferencja" @click="navSlide" class="menu-items">
        <h3>Konferencja</h3>
      </router-link>
    </div>
    <!-- <router-link to='/about' class='router'>O stronie</router-link> -->
    <!-- <router-link to="/about-me">O mnie</router-link> -->
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Navbar",
  data() {
    return {
      navbarActive: false,
      //   pageScrolled: false,
    };
  },
  //   mounted() {
  //     document.addEventListener('scroll', () => {
  //     //   this.pageScrolled = true;
  //       //   console.log(window.scrollY);
  //       const windowScroll = window.scrollY;
  //       if (windowScroll > 10) {
  //         this.pageScrolled = true;
  //       } else {
  //         this.pageScrolled = false;
  //       }
  //     });
  //   },
  methods: {
    navSlide() {
      this.navbarActive = !this.navbarActive;
    },
    navUnSlide() {
      if (this.navbarActive === true) {
        this.navbarActive = !this.navbarActive;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 100%;
  display: flex;
  justify-content: space-between;

  // background-color: #262626;
  .mobile-menu-section-drawer {
    display: none;

    img {
      filter: invert(61%) sepia(98%) saturate(2225%) hue-rotate(149deg) brightness(93%) contrast(90%);
      width: 100%;
      height: 50px;
    }

    :hover {
      cursor: pointer;
    }
  }

  .desktop-menu-section {
    display: flex;
  }

  a {
    font-weight: bold;
    font-size: 20px;
    padding: 0 2vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f2f2f2;
    text-decoration: none;

    #logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      h1 {
        padding: 0 1vw;
        font-family: "Fredoka", sans-serif;
        color: #0db3d9;
      }

      img {
        width: 50px;
      }
    }

    h3 {
      font-family: "Barlow", sans-serif;
      font-weight: 400;
    }

    &.router-link-active {
      // color: #3E77B6;
      color: #0db3d9;
      text-decoration: none;
    }
  }
}

.page-scrolled {
  background-color: #4c4c4c;
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

@media only screen and (max-width: 1450px) {
  nav {
    #logo-section {
      #logo {
        img {
          width: 35px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  nav {
    #logo-section {
      z-index: 2500;
    }

    justify-content: space-between;

    .mobile-menu-section-drawer {
      flex-flow: column;
      z-index: 2500;
      display: flex;
      position: absolute;
      top: 2.5vh;
      right: 2vw;

      div {
        width: 40px;
        height: 3px;
        background-color: #0db3d9;
        margin: 5px;
        border-radius: 50px;
        transition: all 0.3s ease;
      }
    }

    .desktop-menu-section {
      position: fixed;
      top: 0;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      // background-color: #4c4c4c;
      background-image: url("@/assets/water.jpg");
      background-color: #4c4c4c;
      background-blend-mode: multiply;
      background-size: cover;
      height: 100vh;
      z-index: 2000;
      width: 100vw;
      transform: translateX(100vw);
      transition: transform 0.5s ease-in;

      a {
        opacity: 0;

        :last-child {
          padding-bottom: 3vh;
        }
      }
    }

    a {
      #logo {
        img {
          width: 45px;
        }
      }
    }

    .nav-active {
      transform: translateX(0vw);

      a {
        animation: navLinkFade 1s forwards;
      }

      .line1 {
        transform: rotate(-45deg) translate(-10px, 8px);
      }

      .line2 {
        // display: none;
        // visibility: hidden;
        opacity: 0;
      }

      .line3 {
        transform: rotate(45deg) translate(-10px, -8px);
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  nav {
    .mobile-menu-section-drawer {
      top: 3vh;
      right: 4vw;

      img {
        width: 100%;
      }

      div {
        width: 30px;
        margin: 3px;
      }
    }

    a {
      #logo {
        h1 {
          display: none;
        }

        img {
          width: 40px;
        }
      }
    }

    .nav-active {
      .line1 {
        transform: rotate(-45deg) translate(-5px, 8px);
      }

      .line3 {
        transform: rotate(45deg) translate(-5px, -8px);
      }
    }
  }
}
</style>
