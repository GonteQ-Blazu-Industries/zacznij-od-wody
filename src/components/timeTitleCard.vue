<template>
    <div class="time-title-card-wrapper">
        <h3>{{ time }} | {{ title }} {{ leader ? '~ ' + leader : '' }}</h3>
    </div>
</template>

<script>
export default {
    props: ['time', 'title', 'leader'],
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

    h3{
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
    }
}
</style>
