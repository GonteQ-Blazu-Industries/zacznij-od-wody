<template>
    <div class="the-meeting-navbar-wrapper">
        <router-link to="/">
            <img src="../assets/pabilkropla.png" alt="Strona główna" height="50"></router-link>
        <ul class="the-meeting-navbar">
            <li class="the-meeting-navbar-item">O wydarzeniu</li>
            <li class="the-meeting-navbar-item">Prelegenci</li>
            <li class="the-meeting-navbar-item">Program</li>
            <li class="the-meeting-navbar-item">Data i miejsce</li>
            <li class="the-meeting-navbar-item">Kontakt</li>
            <li class="the-meeting-navbar-item buy-ticket" @click="handleBuyTicket">Kup bilet</li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        handleBuyTicket() {
            console.log('You clicked me!');
        },
    },
};
</script>

<style lang="scss" scoped>
.the-meeting-navbar-wrapper{
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vh 5vw;
    .the-meeting-navbar{
        list-style-type: none;
        display: flex;
        gap: 1.2rem;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        align-items: center;
        .the-meeting-navbar-item{
            padding: .5rem 1rem;
            &:hover{
                cursor: pointer;
            }
        }
        .buy-ticket{
            color: white;
            background-color: #0B3954;
            border-radius: 5px;

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
    }
}
</style>
