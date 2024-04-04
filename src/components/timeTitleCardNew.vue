<template>
    <div class="time-title-card-wrapper" :class="{'reversed': reversed}">
        <h3>{{ title }}</h3>
        <h4 v-if="leader">{{ leader }}</h4>
    </div>
</template>

<script>
export default {
    props: ['title', 'leader', 'reversed'],
};
</script>

<style lang="scss" scoped>
.time-title-card-wrapper{
    padding: 1.2rem 6rem;
    background-color: #FFFFFF;
    border: 2px solid #183A37;
    border-radius: 15px;
    width: 60rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: .7rem;
    @media only screen and (max-width: 720px) {
        padding: .2rem .4rem;
        width: 250px;
        gap: .3rem;
        border: 1px solid #183A37;
    }
    h3{
        color: #183A37;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        @media only screen and (max-width: 720px) {
            font-size: 1rem;
            font-weight: 400;
        }
    }
    h4{
        color: #183A37;
        display: inline-block;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        @media only screen and (max-width: 720px) {
            font-size: .9rem;
        }
    }
}

.reversed{
    background-color: #183A37;
    color: #FFFFFF;
    border: none;
    h3{
        color: #FFFFFF;
    }
    h4{
        color: #FFFFFF;
    }
}
</style>
