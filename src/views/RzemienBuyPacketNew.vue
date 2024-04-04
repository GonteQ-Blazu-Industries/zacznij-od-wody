<template>
    <div class="buy-ticket-wrapper">
        <nav>
            <TheMeetingNavbar />
        </nav>
        <h1>Kup pakiet 5+ biletów</h1>
        <h2>Dane</h2>
        <form>
            <div class="input-wrapper">
                <label for="firstName">Imię:</label>
                <input type="text" name="firstName" placeholder="Podaj imię" v-model="firstName" @blur="validateFirstName">
                <p v-if="firstNameMessage" class="form-error">{{ firstNameMessage }}</p>
            </div>
            <div class="input-wrapper">
                <label for="lastName">Nazwisko:</label>
                <input type="text" name="lastName" placeholder="Podaj nazwisko" v-model="lastName" @blur="validateLastName">
                <p v-if="lastNameMessage" class="form-error">{{ lastNameMessage }}</p>
            </div>
            <div class="input-wrapper">
                <label for="email">E-mail:</label>
                <input type="text" name="email" placeholder="Podaj E-mail" v-model="email" @blur="validateEmail">
                <p v-if="emailMessage" class="form-error">{{ emailMessage }}</p>
            </div>
            <div class="input-wrapper">
                <label for="phone">Numer telefonu:</label>
                <input type="text" name="phone" placeholder="Podaj numer telefonu (+48123123123)" v-model="phone" @blur="validatePhone">
                <p v-if="phoneMessage" class="form-error">{{ phoneMessage }}</p>
            </div>
            <div class="input-wrapper textarea-wrapper">
                <label for="message">Dane osób w pakiecie (Dane do faktury - opcjonalnie):</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Dane" v-model="message"></textarea>
                <p class="form-error" v-if="messageMessage">{{ messageMessage }}</p>
            </div>
            <div class="input-wrapper">
                <label for="amountOfTickets">Ilość osób w pakiecie (Minimum 5): </label>
                <input type="number" name="amountOfTickets" id="amountOfTickets" v-model="amountOfTickets" min="5" @blur="validateAmountOfTickets">
                <p class="form-error" v-if="amountOfTicketsMessage">{{ amountOfTicketsMessage }}</p>
            </div>
            <p class="form-error" v-if="emailOrPhoneTaken">{{ emailOrPhoneTaken }}</p>
            <div class="button-wrapper">
                <button @click="buyTicket">Kup pakiet</button>
            </div>
        </form>
        <TheMeetingFooter class="footer" id="contact" />
    </div>
</template>

<script>
import { ref } from 'vue';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { validate as emailValidator } from 'email-validator';
import axios from 'axios';
import { useRouter } from 'vue-router';
import TheMeetingNavbar from '@/components/theMeetingNavbarNew.vue';
import TheMeetingFooter from '@/components/theMeetingFooterNew.vue';

export default {
    components: {
        TheMeetingNavbar,
        TheMeetingFooter,
    },
    setup() {
        const firstName = ref('');
        const lastName = ref('');
        const email = ref('');
        const phone = ref('+48');
        const message = ref('');
        const amountOfTickets = ref(5);
        const firstNameMessage = ref(null);
        const lastNameMessage = ref(null);
        const emailMessage = ref(null);
        const phoneMessage = ref(null);
        const messageMessage = ref(null);
        const emailOrPhoneTaken = ref(null);
        const amountOfTicketsMessage = ref(null);

        const router = useRouter();

        const validateFirstName = () => {
            if (!firstName.value) {
                firstNameMessage.value = 'Proszę podać imię';
                return false;
            }
            if (firstName.value.trim().length < 3) {
                firstNameMessage.value = 'Imię jest za krótkie';
                return false;
            }
            if (firstName.value.trim().length > 50) {
                firstNameMessage.value = 'Imię jest za długie';
            }
            firstNameMessage.value = null;
            return true;
        };

        const validateLastName = () => {
            if (!lastName.value) {
                lastNameMessage.value = 'Proszę podać nazwisko';
                return false;
            }
            if (lastName.value.trim().length < 3) {
                lastNameMessage.value = 'Nazwisko jest za krótkie';
                return false;
            }
            if (lastName.value.trim().length > 50) {
                lastNameMessage.value = 'Nazwisko jest za długie';
            }
            lastNameMessage.value = null;
            return true;
        };

        const validateEmail = () => {
            if (!email.value) {
                emailMessage.value = 'Proszę podać E-mail';
                return false;
            }
            if (email.value.trim().length < 3) {
                emailMessage.value = 'E-mail jest za krótki';
                return false;
            }
            if (email.value.trim().length > 320) {
                emailMessage.value = 'E-mail jest za długi';
                return false;
            }
            if (!emailValidator(email.value.trim())) {
                emailMessage.value = 'E-mail jest nieprawidłowy';
                return false;
            }
            emailMessage.value = null;
            return true;
        };

        const validatePhone = () => {
            if (!phone.value) {
                phoneMessage.value = 'Proszę podać numer telefonu';
                return false;
            }
            if (!parsePhoneNumberFromString(phone.value.trim())) {
                phoneMessage.value = 'Numer telefonu jest nieprawidłowy - poprawny format to +48123123123';
                return false;
            }
            phoneMessage.value = null;
            return true;
        };

        const validateMessage = () => {
            if(!message.value) {
                messageMessage.value = 'Należy podać dane osób zawartych w pakiecie';
                return false;
            }
            if (message.value.trim().length > 5000) {
                messageMessage.value = 'Wiadomość nie może być dłuższa niż 5000 znaków';
                return false;
            }
            messageMessage.value = null;
            return true;
        };
        
        const validateAmountOfTickets = () => {
            if (amountOfTickets.value < 5) {
                amountOfTicketsMessage.value = 'Pakiet nie może zostać zakupiony dla mniej niż 5 osób';
                return false;
            }
            amountOfTicketsMessage.value = null;
            return true;
        };

        const buyTicket = async (e) => {
            e.preventDefault();
            if (!validateFirstName()) {
                return;
            }
            if (!validateLastName()) {
                return;
            }
            if (!validateEmail()) {
                return;
            }
            if (!validatePhone()) {
                return;
            }
            if (!validateMessage()) {
                return;
            }
            if(!validateAmountOfTickets()){
                return;
            }

            await axios.post('https://api.zacznijodwody.pl/enrollments/', {
                email: email.value.trim(),
                firstName: firstName.value.trim(),
                lastName: lastName.value.trim(),
                phone: phone.value.trim(),
                message: message.value.trim(),
                packet: true,
                amountOfTickets: amountOfTickets.value,
            }).then(() => {
                router.push({ name: 'PacketBought', query: {
                    amountOfTickets: amountOfTickets.value
                } });
            }).catch((err) => {
                console.log(err.response.data.msg);
                emailOrPhoneTaken.value = err.response.data.msg;
            });
        };

        return {
            firstName,
            lastName,
            email,
            phone,
            message,
            amountOfTickets,
            firstNameMessage,
            lastNameMessage,
            emailMessage,
            phoneMessage,
            messageMessage,
            emailOrPhoneTaken,
            amountOfTicketsMessage,
            router,
            validateFirstName,
            validateLastName,
            validateEmail,
            validatePhone,
            validateMessage,
            validateAmountOfTickets,
            buyTicket,
        };
    },
};
</script>

<style lang="scss" scoped>
.buy-ticket-wrapper{
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    font-family: 'Poppins', sans-serif;
    color: #183A37;
    nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        @media only screen and (max-width: 720px) {
            display: none;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        min-width: 500px;
        @media only screen and (max-width: 720px) {
            min-width: 100px;
            width: 320px;
            max-width: 320px;
        }
        .input-wrapper{
            display: flex;
            flex-direction: column;
            gap: .4rem;
            font-family: 'Poppins',sans-serif;
            input{
                padding: 5px;
                height: 30px;
                border: 1px solid #183A37;
                border-radius: 8px;

            }
            textarea{
                padding: 5px;
                font-family: 'Poppins', sans-serif;
                resize: none;
                border: 1px solid #183A37;
                border-radius: 8px;
            }
        }
        .button-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                padding: .5rem .7rem;
                background-color: #183A37;
                color: #FFFFFF;
                border: 2px solid #183A37;
                border-radius: 8px;
                font-family: 'Poppins', sans-serif;
                font-size: 1.2rem;
                min-width: 12rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .5rem;
                &:hover{
                    cursor: pointer;
                    background-color: #183A37;
                    box-shadow: 5px 5px 15px #183A37 ;
                    border-radius: 5px;
                    color: white;
                }
            }
        }
    }
    .footer{
        height: 10rem;
        width: 100vw;
    }
}
.form-error{
    color: red;
    font-family: 'Poppins', sans-serif;
}
</style>
