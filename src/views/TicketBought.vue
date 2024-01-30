<template>
    <div class="enrollment-confirmation-wrapper">
        <h1>DZIĘKUJEMY ZA ZAKUP BILETU!</h1>
        <div class="transfer-info-wrapper">
            <h2>Dane do przelewu</h2>
            <p class="hover" title="Klikni, aby skopiować numer konta" @click="bankNumberClicked">Numer rachunku bankowego: <strong>10 1750 0012 0000 0000 3894 9691</strong></p>
            <p v-if="displayBankNumberCopyInfo">Skopiowano numer rachunku bankowego do schowka</p>
            <p class="hover" title="Kliknij, aby skopiować nazwę firmy" @click="companyNameClicked">Nazwa firmy: <strong>JAWJA SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</strong></p>
            <p v-if="displayCompanyNameCopyInfo">Skopiowano nazwę firmy do schowka</p>
            <h3>Po zaksięgowaniu wpłaty otrzymasz od nas potwierdzenie drogą mailową</h3>
        </div>
        <button @click="backToConference">WRÓĆ NA STRONĘ WYDARZENIA</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import clipboardCopy from 'clipboard-copy';

export default {
    setup() {
        const displayBankNumberCopyInfo = ref(false);
        const displayCompanyNameCopyInfo = ref(false);
        const router = useRouter();

        const backToConference = () => {
            router.push({ name: 'RzemienMeeting' });
        };

        const copyToClipboard = async (text) => {
            try {
                await clipboardCopy(text);
            } catch (err) {
                console.error('Copy to clipboard failed: ', err);
            }
        };

        const bankNumberClicked = () => {
            copyToClipboard('10 1750 0012 0000 0000 3894 9691');
            displayBankNumberCopyInfo.value = true;
            setTimeout(() => {
                displayBankNumberCopyInfo.value = false;
            }, 3000);
        };

        const companyNameClicked = () => {
            copyToClipboard('JAWJA SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ');
            displayCompanyNameCopyInfo.value = true;
            setTimeout(() => {
                displayCompanyNameCopyInfo.value = false;
            }, 3000);
        };

        return {
            backToConference,
            bankNumberClicked,
            companyNameClicked,
            displayBankNumberCopyInfo,
            displayCompanyNameCopyInfo,
        };
    },
};
</script>

<style lang="scss" scoped>
.enrollment-confirmation-wrapper{
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    color: #0B3954;
    font-family: 'Poppins', sans-serif;
    h1{
        @media only screen and (max-width: 720px) {
            font-size: 1.4rem;
        }
    }
    .transfer-info-wrapper{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        h2{
            @media only screen and (max-width: 720px) {
                font-size: 1.2rem;
            }
        }
    }
    button {
        padding: .7rem .9rem;
        background-color: #0B3954;
        color: #FFFFFF;
        border: none;
        border-radius: 8px;
        &:hover{
            cursor: pointer;
            background-color: #0B3954;
            box-shadow: 5px 5px 15px #0B3954 ;
            border-radius: 5px;
            color: white;
        }
    }
}
.hover{
    cursor: pointer;
}
</style>
