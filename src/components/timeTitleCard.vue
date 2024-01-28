<template>
    <div class="time-title-card-wrapper" :class="{'reversed': reversed}">
        <h3>{{ time }} | {{ title }}</h3>
        <h4 v-if="leader">{{ leader }}</h4>
    </div>
</template>

<script>
export default {
    props: ['time', 'title', 'leader', 'reversed'],
};
</script>

<style lang="scss" scoped>
.time-title-card-wrapper{
    padding: 1.2rem 6rem;
    background-color: #FFFFFF;
    border: 2px solid #0B3954;
    border-radius: 15px;
    width: 60rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: .7rem;
    h3{
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
    }
    h4{
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }
}

.reversed{
    background-color: #0B3954;
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
