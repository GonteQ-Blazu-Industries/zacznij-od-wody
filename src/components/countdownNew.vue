<template>
    <div class="countdown-wrapper">
        <p class="countdown-text">DO KONFERENCJI ZOSTAŁO:</p>
        <div class="counter-wrapper">
            <div class="countdown" v-if="countdown > 0">
                <div class="countdown-item">
                    <p class="counter-item">{{ days }}</p>
                    <p class="counter-description">{{ days > 1 ? 'DNI' : 'DZIEŃ' }}</p>
                </div>
                <div class="countdown-item">
                    <p class="counter-item">{{ hours }}</p>
                    <p class="counter-description">{{ hourDescription.toUpperCase() }}</p>
                </div>
                <div class="countdown-item">
                    <p class="counter-item">{{ minutes }}</p>
                    <p class="counter-description">{{ minuteDescription.toUpperCase() }}</p>
                </div>
            </div>
            <div class="countdown-downed" v-else>
                <p>Wydarzenie już się zakończyło!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            targetDate: new Date('2024-04-20T10:00:00'),
            countdown: 0,
        };
    },
    computed: {
        days() {
            return Math.floor(this.countdown / (1000 * 60 * 60 * 24));
        },
        hours() {
            return Math.floor((this.countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        },
        minutes() {
            return Math.floor((this.countdown % (1000 * 60 * 60)) / (1000 * 60));
        },
        hourDescription() {
            if (this.hours === 1) {
                return 'godzina';
            }
            if (this.hours > 1 && this.hours < 5) {
                return 'godziny';
            }
            return 'godzin';
        },
        minuteDescription() {
            if (this.minutes === 1) {
                return 'minuta';
            }
            if ((this.minutes > 1 && this.minutes < 5) || (this.minutes > 20 && this.minutes % 10 > 1 && this.minutes % 10 < 5)) {
                return 'minuty';
            }
            return 'minut';
        },
    },
    methods: {
        updateCountdown() {
            const currentDate = new Date();
            this.countdown = this.targetDate - currentDate;

            if (this.countdown <= 0) {
                clearInterval(this.intervalId);
            }
        },
    },
    mounted() {
        this.updateCountdown();
        this.intervalId = setInterval(this.updateCountdown, 1000);
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    },
};
</script>

<style lang="scss" scoped>
.countdown-wrapper{
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 720px) {
        height: 100%;
        padding-bottom: 1rem;
    }
    .countdown-text{
        color: #183a37;
        font-family: 'Poppins', sans-serif;
        font-size: 3rem;
        padding-top: 2rem;
        @media only screen and (max-width: 720px) {
            font-size: 1.4rem;
            padding-top: 1rem;
        }
    }
    .counter-wrapper{
        .countdown{
        display: flex;
        gap: 3rem;
        @media only screen and (max-width: 720px) {
            gap: .5rem;
        }
        .countdown-item{
            padding: 2rem 5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            @media only screen and (max-width: 720px) {
                padding: .4rem .7rem;
            }
            p{
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                color: #183a37;
                text-align: center;
            }
            .counter-item{
                font-size: 12rem;
                @media only screen and (max-width: 720px) {
                    font-size: 1.5rem;
                }
            }
            .counter-description{
                font-size: 3rem;
                @media only screen and (max-width: 720px) {
                    font-size: 0.8rem;
                }
            }
        }
    }
    }
}
</style>
