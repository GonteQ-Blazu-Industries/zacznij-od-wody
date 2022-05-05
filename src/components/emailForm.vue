<template>
    <div class="email-wrapper" @click="hideFormMethod" :class="{'hideForm': hideForm}">
        <div class="email-content">
            <form action="https://formsubmit.co/pabil@interia.pl"
            method="post"
            name="emailForm">
                <label for="email">Podaj swój E-mail:</label>
                <!-- <br> -->
                <input type="email"
                name="email"
                placeholder="E-mail">
                <input type="hidden"
                name="_captcha"
                value="false">
                <input type="text"
                name="_honey"
                style="display:none">
                <input type="hidden"
                name="_next"
                value="https://zacznijodwody.pl/dziekuje-za-email">
                <label for="message">Masz pytanie? Napisz wiadomość:</label>
                <!-- <br> -->
                <textarea type="text"
                name="message"
                placeholder="Tutaj wpisz treść wiadomości"
                required />
                <!-- <br> -->
                <br>
                <br>
                <button type="submit">Wyślij E-mail</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'EmailForm',
  data() {
    return {
    };
  },
  methods: {
    hideFormMethod() {
      console.log('clicked');
    },
  },
};
</script>
<style lang="scss" scoped>
    .email-wrapper{
        // position: absolute;
        z-index: 5000;
        background-color: rgba(26,26,26, 0.85);
        min-height: 100vh;
        height: 100%;
        width: 100%;
        // top: 10vh;
        // left: 0;
        .email-content{
            position: relative;
            top: 10vh;
            left: 10vw;
            display: flex;
            flex-flow: row;
            justify-content: center;
            align-items: center;
            // top: 50%;
            // left: calc(50% - 30vw);
            width: 80vw;
            height: 80vh;
            form{
                font-family: 'Barlow', sans-serif;
                width: 75%;
                height: 85%;
                input{
                    border-radius: 5px;
                    width: 100%;
                    // height: 10%;
                    height: 3vh;
                    font-size: 2vh;
                }
                label{
                    color: white;
                    font-size: 2vh;
                }
                textarea{
                    height: 80%;
                    width: 100%;
                    resize: none;
                    font-family: inherit;
                    border-radius: 5px;
                }
                button{
                    font-family: inherit;
                    height: 5%;
                    width: 50%;
                    // margin-left: 25%;
                    color: white;
                    background-color: #1399ee;
                    border-radius: 50px;
                    border: none;
                    text-decoration: none;
                    transition: background-color .3s ease-in;
                    &:hover{
                        cursor: pointer;
                        background-color: #006ee6;
                    }
                }
            }
        }
    }
    .hideForm{
        display: none;
    }
</style>
