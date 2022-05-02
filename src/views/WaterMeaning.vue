<template>
    <div class="water-meaning-wrapper" id="top">
        <div class="content">
            <h1>
                Dlaczego woda jest najważniejszą substancją w Twoim życiu?
            </h1>
        </div>
        <div class="text" id="text">
            <p>
                Czy to możliwe, że tak powszechna i prosta  substancja
                (H2O- dwa atomy wodoru i jeden tlenu)
                odgrywała tak znaczącą i kluczową rolę w naszym życiu?
            </p>
            <p>
                <br>
                Organizm ludzki składa się w około 70-ciu % z wody.
            </p>
            <p>
               <br>
                Humorystycznie możemy powiedzieć że jesteśmy chodzącym
                akwarium w którym jak rybki w akwarium, pływają nasze komórki.
            </p>
            <p>
                <br>
                Wszystkie zachodzące w naszym organizmie reakcje,
                biologiczno-chemiczno-elektryczne zachodzą w wodzie.
            </p>
            <p>
                <br>
                Gdy w tym chodzącym „akwarium” zaczyna brakować wody,
                albo jest ono uzupełniane czymś innym niż woda (kawa,
                herbata, napoje kolorowe, piwo itp) wiele z tych reakcji
                zaczyna szwankować.
            </p>
            <p>
                <br>
                Wtedy nasze zdrowie zaczyna się psuć. Na wskutek tego
                brakuje nam energii, jesteśmy rozdrażnienie, pojawiają
                się nieokreślone bule i problemy zdrowotne.
            </p>
            <p>
                <br>
                Posłuchaj i zobacz, jakie problemy zdrowotne powstają,
                gdy zaniedbujemy picie odpowiedniej ilości wody.
                <br>
                <a href="https://www.youtube.com/watch?v=oiDxgkWI_ws" target="_blank">
                    <br> https://www.youtube.com/watch?v=oiDxgkWI_ws</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WaterMeaning',
};
</script>

<style lang="scss" scoped>
    .water-meaning-wrapper{
        padding-top: 10vh;
        text-align: center;
        height: 100vh;
        width: 100%;
        background-color: #4c4c4c;
        .content{
            position: relative;
            z-index: 200;
            h1{
                color: white;
                font-family: 'Barlow', sans-serif;
                font-weight: 700;
                margin: 10vw 0;
                font-size: 100px;
            }
        }
        .text{
            position: absolute;
            padding: 10vh 20vw;
            top: 100vh;
            min-height: 100vh;
            width: 100%;
            background-color: #1399ee;
            color: white;
            p{
                font-size: 35px;
                text-align: start;
                font-family: 'Barlow', sans-serif;
                a{
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
    @media only screen and (max-width: 1450px){
        .water-meaning-wrapper{
            .content{
                h1{
                    font-size: 70px;
                }
            }
            .text{
                p{
                    font-size: 28px;
                }
            }
        }
    }
    @media only screen and (max-width: 1024px){
        .water-meaning-wrapper{
            .content{
                h1{
                    font-size: 40px;
                }
            }
            .text{
                p{
                    font-size: 25px;
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        .water-meaning-wrapper{
            .content{
                h1{
                    font-size: 30px;
                }
            }
        }
        .text{
            p{
                font-size: 18px;
            }
        }
    }
</style>
