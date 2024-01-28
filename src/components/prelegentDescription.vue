<template>
    <div class="prelegent-description-wrapper">
        <img :src="image" alt="zdjęcie prelegenta">
        <div class="prelegent-info-wrapper">
            <h3>{{ name }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'name', 'description'],
};
</script>

<style land="sccs" scoped>
.prelegent-description-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 320px;
    .prelegent-info-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        color: #0B3954;
        gap: 1rem;
        h3{
            font-weight: 700;
            font-size: 1.2rem;
        }
        p{
            text-align: left;
            font-size: 1rem;
            font-weight: 200;
        }
    }
}
</style>
