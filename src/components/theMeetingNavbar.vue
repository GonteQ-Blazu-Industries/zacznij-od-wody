<template>
    <div class="the-meeting-navbar-wrapper">
        <router-link to="/">
            <img src="../assets/pabilkropla.png" alt="Strona główna" height="50"></router-link>
        <ul class="the-meeting-navbar">
            <a class="the-meeting-navbar-item" href="#about-meeting"  v-smooth-scroll="{duration: 1000, offset: -100, updateHistory: false,}">O wydarzeniu</a>
            <a class="the-meeting-navbar-item" href="#leaders-description"  v-smooth-scroll="{duration: 1000, offset: -100, updateHistory: false,}">Prelegenci</a>
            <a class="the-meeting-navbar-item" href="#program-info"  v-smooth-scroll="{duration: 1000, offset: -100, updateHistory: false,}">Program</a>
            <a class="the-meeting-navbar-item" href="#date-and-place"  v-smooth-scroll="{duration: 1000, offset: -100, updateHistory: false,}">Data i miejsce</a>
            <a class="the-meeting-navbar-item" href="#contact-info"  v-smooth-scroll="{duration: 1000, offset: -100, updateHistory: false,}">Kontakt</a>
            <!-- <a class="the-meeting-navbar-item-buy" href="#buy-ticket"  v-smooth-scroll="{duration: 1000, offset: -100, updateHistory: false,}">Kup bilet</a> -->
            <!-- <li class="the-meeting-navbar-item buy-ticket" @click="$router.push({ name: 'RzemienBuyTicket' })">Kup bilet</li> -->
        </ul>
        <!-- <div class="mobile-menu-icon-wrapper" @click="mobileMenuActive = !mobileMenuActive">
            <a class="the-meeting-navbar-item-buy" href="#buy-ticket"  v-smooth-scroll="{duration: 1000, offset: -120, updateHistory: false,}">Kup bilet</a>
        </div> -->
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.the-meeting-navbar-wrapper{
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vh 5vw;
    img{
        @media only screen and (max-width: 720px) {
            height: 30px;
        }
    }
    .the-meeting-navbar{
        list-style-type: none;
        display: flex;
        gap: 1.2rem;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        align-items: center;
        a{
            text-decoration: none;
            color: #0B3954;
        }
        .the-meeting-navbar-item{
            padding: .5rem 1rem;
            &:hover{
                cursor: pointer;
            }
        }
        .the-meeting-navbar-item-buy{
            color: white;
            background-color: #0B3954;
            border-radius: 5px;
            padding: .5rem 1rem;

            &:hover{
                background-color: #0B3954;
                // border: 2px solid #0B3954;
                // border-style: inset;
                box-shadow: 5px 5px 15px #0B3954 ;
                border-radius: 5px;
                color: white;
                cursor: pointer;
            }
        }

        @media only screen and (max-width: 720px){
            display: none;
        }
    }
    .mobile-menu-icon-wrapper{
        display: none;

        @media only screen and (max-width: 720px) {
            display: block;
        }
    }
}
</style>
