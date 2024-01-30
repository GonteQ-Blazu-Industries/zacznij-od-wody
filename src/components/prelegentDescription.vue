<template>
    <div class="prelegent-description-wrapper">
        <img v-if="image && image.trim()" :src="imagePath" alt="zdjęcie prelegenta">
        <div class="prelegent-info-wrapper">
            <h3>{{ name }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'name', 'description'],
    data() {
        return {
            imagePath: null,
        };
    },
    async mounted() {
        await this.loadImage();
    },
    watch: {
        image: 'loadImage',
    },
    methods: {
        async loadImage() {
            if (!this.image || !this.image.trim()) {
                this.imagePath = null;
                return;
            }
            try {
                const imageModule = await import(`@/assets/${this.image}`);
                this.imagePath = imageModule.default;
            } catch (error) {
                console.error(`Błąd ładowania obrazu: ${error}`);
                this.imagePath = null;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.prelegent-description-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 320px;
    @media only screen and (max-width: 720px) {
        width: 300px;
        gap: .5rem;
    }
    img{
        aspect-ratio: 1/1;
        height: 320px;
        object-fit: cover;
    }

    .prelegent-info-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        color: #0B3954;
        gap: 1rem;

        h3 {
            font-weight: 700;
            font-size: 1.2rem;
            @media only screen and (max-width: 720px) {
                font-size: 1.2rem;
            }
        }

        p {
            text-align: left;
            font-size: 1rem;
            font-weight: 200;
            @media only screen and (max-width: 720px) {
                font-size: 0.9rem;
                color: #000000;
                font-weight: 500;
            }
        }
    }
}
</style>
