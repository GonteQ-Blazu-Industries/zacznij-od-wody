<template>
    <div class="privacy-policy-view-wrapper">
        <h1>Polityka prywatności</h1>
        <p class="privacy-policy-subtitle">
            Niniejsza polityka prywatności określa zasady przetwarzania danych osobowych
            zbieranych od użytkowników poprzez formularz rejestracyjny do newslettera,
            znajdujący się na stronie <a href="https://zacznijodwody.pl">Zacznij od wody</a>
            Ostatnia zmiana: 24.04.2023r.
        </p>
        <ol>
            <li>
                <h3>
                    <b>
                        Administator danych osobowych
                    </b>
                </h3>
                <p>
                    Administratorem danych osobowych jest PB PaBil Paweł Bilski, z siedzibą
                    w Żegocina 102, NIP 868 140 23 23, REGON 852091922. Kontakt z Administratorem
                    możliwy jest za pośrednictwem poczty elektronicznej na adres
                    <a href="mailto:pabil@interia.pl">pabil@interia.pl</a> lub listownie na adres
                    siedziby firmy.
                </p>
            </li>
            <li>
                <h3>
                    <b>
                        Cele przetwarzania danych osobowych
                    </b>
                </h3>
                <p>
                    Dane osobowe użytkowników, tj. adres e-mail, imię i płeć, przetwarzane
                    są w celu dostarczenia newslettera zawierającego informacje o produktach
                    i usługach oferowanych przez PB PaBil Paweł Bilski.
                </p>
            </li>
            <li>
                <h3>
                    <b>
                        Podstawa prawna danych osobowych
                    </b>
                </h3>
                <p>
                    Podstawą prawną przetwarzania danych osobowych jest zgoda użytkownika,
                    wyrażana poprzez dobrowolne wypełnienie formularza rejestracyjnego i zaznaczenie
                    pola wyrażającego zgodę na otrzymywania newslettera.
                </p>
            </li>
            <li>
                <h3>
                    <b>
                        Okres przetwarzania danych osobowych
                    </b>
                </h3>
                <p>
                    Dane osobowe będą przetwarzane przez okres niezbędny do realizacji celu,
                    dla którego zostały zebrane, tj. do momentu wypisania się
                    użytkownika z newslettera.
                </p>
            </li>
            <li>
                <h3>
                    <b>
                        Odbiorcy danych osobowych
                    </b>
                </h3>
                <p>
                    Dane osobowe użytkowników nie będą udostępniane innym podmiotom,
                    z wyjątkiem podmiotów uprawnionych na podstawie przepisów prawa.
                </p>
            </li>
            <li>
                <h3>
                    <b>
                        Prawa użytkowników
                    </b>
                </h3>
                <p>
                    Użytkownikom przysługuje prawo do żądania od Administratora dostępu
                    do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia
                    przetwarzania, a także prawo do wniesienia sprzeciwu wobec przetwarzania
                    danych oraz prawo do przenoszenia danych.
                </p>
            </li>
            <li>
                <h3>
                    <b>
                        Wypisanie się z newslettera
                    </b>
                </h3>
                <p>
                    Użytkownik ma prawo wypisania się z newslettera w każdym czasie,
                    klikając w link "'wypisz się" znajdujący się na końcu każdego otrzymanego maila
                    lub poprzez link [wypisz się].
                </p>
            </li>
            <li>
                <h3>
                    <b>
                        Zmiany w polityce prywatności
                    </b>
                </h3>
                <p>
                    Zastrzegamy sobie prawo do dokonywania zmian w Polityce Prywatności.
                    Każda zmiana będzie publikowana na niniejszej stronie.
                </p>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'PrivacyPolicy',
};
</script>

<style lang="scss" scoped>
.privacy-policy-view-wrapper {
    padding: 12vh 15vw 12vh 15vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
    font-family: 'Barlow', sans-serif;
    background-color: #1399ee;

    h1 {
        font-size: 4rem;
    }

    .privacy-policy-subtitle {
        font-size: 2rem;
    }

    ol {
        text-align: start;

        li {
            font-weight: bold;
            font-size: 2rem;
            padding: 1rem;

            p {
                font-weight: normal;
                font-size: 1.4rem;
            }
        }
    }

    a {
        text-decoration: none;
        color: white;
    }
}
</style>
