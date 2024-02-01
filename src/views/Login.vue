<template>
    <div class="login-wrapper">
        <h1>Zaloguj się</h1>
        <form>
            <div class="input-wrapper">
                <label for="email">E-mail</label>
                <input type="text" v-model="email" name="email" >
            </div>
            <div class="input-wrapper">
                <label for="password">Hasło</label>
                <input type="password" v-model="password" name="password" >
            </div>
            <p class="form-error" v-if="invalidLogin">Dane logowania nieprawidłowe</p>
            <div class="button-wrapper">
                <button @click="login">Zaloguj się</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const invalidLogin = ref(false);

        const router = useRouter();

        const login = async (e) => {
            e.preventDefault();
            await axios.post('https://api.zacznijodwody.pl/auth/login', {
                email: email.value,
                password: password.value,
            }, { withCredentials: true }).then(() => {
                router.push({ name: 'Dashboard' });
            }).catch((err) => {
                if (err.response.status === 401 || err.response.status === 400) {
                    invalidLogin.value = true;
                }
            });
        };

        return {
            email,
            password,
            invalidLogin,
            login,
        };
    },
};
</script>

<style lang="scss" scoped>
.login-wrapper{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 2rem;
        color: #0B3954;
        margin-bottom: 2rem;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40rem;
        @media only screen and (max-width: 720px) {
            width: 90%;
        }
        .input-wrapper{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-bottom: 1rem;
            label{
                font-family: 'Poppins', sans-serif;
                font-weight: 300;
                font-size: 1.2rem;
                color: #0B3954;
                margin-bottom: .5rem;
            }
            input{
                width: 100%;
                height: 3rem;
                border: 2px solid #0B3954;
                border-radius: 15px;
                padding: 0 1rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 300;
                font-size: 1.2rem;
                color: #0B3954;
                &:focus{
                    outline: none;
                }
            }
        }
        .form-error{
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: 1rem;
            color: #FF0000;
            margin-bottom: 1rem;
        }
        .button-wrapper{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            button{
                width: 100%;
                height: 3rem;
                border: none;
                border-radius: 15px;
                background-color: #0B3954;
                color: #FFFFFF;
                font-family: 'Poppins', sans-serif;
                font-weight: 300;
                font-size: 1.2rem;
                cursor: pointer;
            }
        }
    }
}
</style>
