<template>
    <div class="rzemien-meeting-view-wrapper" id="top">
        <nav>
            <TheMeetingNavbar />
        </nav>
        <Countdown class="counter" />
        <div class="date-and-place-image-wrapper">
           <div class="date-and-place-description-wrapper">
            <div class="date-and-place-wrapper"  id="about-meeting">
                <p><span class="material-icons">location_on</span>Rzemień</p>
                <p><span class="material-icons">calendar_month</span>17.02.2024</p>
            </div>
            <h1>
                POZYTYWNE MYŚLENIE I PRAWIDŁOWE ŻYWIENIE JAKO ELEMENTY NIEZBĘDNE DO SZCZĘŚLIWEGO ŻYCIA
            </h1>
            <div class="meeting-description-wrapper">
                <p>
                    Zapraszamy na inspirującą konferencję, która połączy dwie kluczowe sfery życia - pozytywne myślenie i prawidłowe odżywianie. Odkryj, w jaki sposób te dwa elementy mogą wspólnie tworzyć fundamenty zdrowego i szczęśliwego życia. Czekamy na Ciebie!
                </p>
                <div class="description-buttons">
                    <button class="more-info-button" href="#leaders-description"  v-smooth-scroll="{duration: 1000, offset: -20, updateHistory: false,}">Dowiedz się więcej<span class="material-icons">expand_more</span></button>
                    <button class="buy-ticket-button" href="#buy-ticket"  v-smooth-scroll="{duration: 1000, offset: -20, updateHistory: false,}">Kup bilet<span class="material-icons">confirmation_number</span></button>
                    <!-- <button class="buy-ticket-button" @click="$router.push({ name: 'RzemienBuyTicket' })">Kup bilet<span class="material-icons">confirmation_number</span></button> -->
                </div>
            </div>
           </div>
           <div class="meeting-image-wrapper">
            <img src="@/assets/zdrowe-jedzenie.jpg" alt="zdjęcie poglądowe" height="350" width="500">
           </div>
        </div>
        <div class="leaders-description-wrapper" id="leaders-description">
            <h2>Nasi prelegenci</h2>
            <div class="prelegents-wrapper">
                <PrelegentDescription image="Malgorzata-Rakowska.webp" name=" dr Małgorzta Rakowska" description='Fizjoterapeutka i terapeutka manualna. Od 20 lat wspiera pacjentów w pozbywaniu się bólu. Łączy pracę ciała i emocji. Jej misją jest poszerzanie świadomości ciała, tak aby każdy potrafił dbać o mięśnie, emocje i myśli. Autorka książki "Codzienność bez bólu". Prowadzi Instytut na Polance.' />
                <PrelegentDescription image="Tatiana-Kozuszna.webp" name="Tatiana Kożuszna" description="Od kilkunastu lat lekarz z misją edukacji dla utrzymania zdrowia. Wspiera tysiące osób w Polsce i na całym świecie. Systematycznie prowadzi spotkania Akademii Zdrowia w różnych miastach Polski. Współpracuje z lekarzami na całym świecie i prowadzi własne badania naukowe." />
                <PrelegentDescription image="Joanna-Marszalek.jpg" name="Joanna Marszałek" description="Żona i mama trójki dzieci (czwarte w drodze). Z zawodu pielegniarka. Jej największą wartością jest rodzina i zdrowie. Pasjonuje się naturalnymi metodami leczenia oraz medycyną chinską. Uwielbia pracę z ludzmi, zdrowe jedzenie oraz podróże." />
                <PrelegentDescription image="Bozena-Rzasa.jpg" name="Bożena Rząsa" description="Promotor zdrowia, od ponad 30 lat krzewi kulturę zdrowego odżywiania. Miłośniczka naturalnego stylu życia. Dzięki wiedzy makrobiotycznej pomaga ludziom przywracać dobry stan zdrowia." />
                <PrelegentDescription image="Irena-Prochon-Dziewonska.jpg" name="Irena Prochoń-Dziewońska" description="Z domu wyniosła umiłowanie do natury. Chętnie dzieli się wiedzą, jaką zdobywała od najmłodszych lat od ojca zielarza i którą zdobywa nadal dzięki wspaniałym znawcom tego tematu w CoralClub." />
                <PrelegentDescription image="Ewelina-Szymanska.jpg" name="Ewelina Szymańska" description="" />
                <PrelegentDescription image="Janina-Machniak-Rozborska.jpg" name="Janina Machniak-Rozborska" description="Mama, kobieta z ogromną radością i pokojem serca, wytrwała i nieustępliwa. Dzięki łatwości nawiązywania kontaktów dociera do wielu osób, którym przekazuje cenne informacje dotyczące poprawy zdrowia i jakości życia." />
                <PrelegentDescription image="Pawel-Bilski.webp" name="Paweł Bilski" description="Przedsiębiorca, rolnik, ekspert od nawadniania organizmu. Pasjonat zdrowego stylu życia. Otwarty na rozwój. Lubi inspirować ludzi i dzielić się z nimi wiedzą, tak by każdy mógł wziąć odpowiedzialność za zdrowie w swoje ręce. " />
                <PrelegentDescription image="Andrzej-Kozuszny.webp" name="Andrzej Kożuszny" description="Ponad 15 lat temu zapoczątkował działalność Coral Club w Polsce, zakładając pierwsze biuro regionalne. Odniósł spektakularny sukces. Obecnie dzieli się swoim doświadczeniem i angażuje w rozwój partnerów biznesowych." />
                <PrelegentDescription image="Rafal-Wozniak.webp" name="Rafał Woźniak" description="Od 7 lat kieruje polskim Coral Club. Ekspert od nowoczesnej przedsiębiorczości i współpracy z partnerami biznesowymi. Na co dzień wspomaga procesy biznesowe na rynku polskim i europejskim." />
                <PrelegentDescription image="Lidia-Starzyk-Hudyka.jpg" name="Lidia Starzyk-Hudyka" description='Mama, przedsiębiorczyni kochająca życie i pozytywnych ludzi. Od 30 lat działa w branży beauty. Otwarta na rozwój, uznaje zasadę że "W życiu masz tyle, na ile się odważysz". ' />
                <PrelegentDescription image="Justyna-Mucha.jpg" name="Justyna Mucha - PROWADZĄCA" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
            </div>
        </div>
        <div class="program-info-wrapper">
            <h2 id="program-info">Program konferencji</h2>
            <p><span class="material-icons">schedule</span>11:00-18:00</p>
            <TimeTitleCard time="11:00" title="Rozpoczęcie i powitanie" leader="Justyna Mucha" reversed="true"/>
            <TimeTitleCard time="11:15" title="4 Kroki do zdrowia" leader="Tatiana Kożuszna"/>
            <TimeTitleCard time="11:45" title="Dieta zgodna z porami roku" leader="Joanna Marszałek"/>
            <TimeTitleCard time="12:15" title="Dobre tłuszcze oraz zagrożenia związane z ich niedoborami" leader="Bożena Rząsa"/>
            <TimeTitleCard time="12:45" title="Odżywcze produkty Coral Club" leader="Irena Prochoń-Dziewońska"/>
            <TimeTitleCard time="13:15" title="Efekty zdrowotne" leader="prowadzi Ewelina Szymańska"/>
            <TimeTitleCard time="13:45" title="Obiad" reversed="true"/>
            <TimeTitleCard time="15:00" title="Emocje i ich wpływ na nasze ciało" leader="dr Małgorzata Rakowska"/>
            <TimeTitleCard time="16:00" title="Dlaczego Coral Club" leader="Rafał Woźniak"/>
            <TimeTitleCard time="16:20" title="Edyfikacja - mocne wejście" leader="Lidia Starzyk-Hudyka"/>
            <TimeTitleCard time="16:40" title="Wyróznienia i historie sukcesu" leader="prowadzi Janina Machniak-Rozborska"/>
            <TimeTitleCard time="17:10" title="Produkty za darmo? Jest na to sposób" leader="Paweł Bilski"/>
            <TimeTitleCard time="17:30" title="Perspektywy na przyszłość" leader="Andrzej Kożuszny"/>
            <TimeTitleCard time="18:00" title="Zakończenie" reversed="true"/>
        </div>
        <div class="video-wrapper">
            <div class="video-text">
                <h2>Zapraszamy!</h2>
                <p>Kilku z naszych prelegentów miało możliwość nagrać dla Was zaproszenie na naszą konferencję</p>
                <p>Zobacz co mają ci do przekazania</p>
            </div>
            <div class="youtube-video">
                <iframe width="170" height="320" src="https://www.youtube.com/embed/vrg2qGPalms?si=g1iwRHA9oQtWrhR6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div class="date-and-place-info-wrapper" id="date-and-place">
            <h2>Konferencja odbędzie się:</h2>
            <div class="conference-info">
               <div class="conference-info-text">
                <h2>17.02.2024</h2>
                <div class="location-wrapper">
                    <p><span class="material-icons">location_on</span>Ośrodek wypoczynkowy JAWJA</p>
                    <p>Rzemień 312</p>
                    <p>39-322 Rzemień</p>
                </div>
               </div>
               <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.8448469429445!2d21.51582317582303!3d50.238803402581254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d136f0df8ab05%3A0x91e0641fa79b2906!2sO%C5%9Brodek%20Wypoczynkowy%20-%20JAWJA%20Sp%C3%B3%C5%82ka%20z%20o.o.!5e0!3m2!1spl!2spl!4v1706463791667!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
        </div>
        <div class="additional-info-wrapper">
            <h2>Dodatkowe informacje</h2>
            <div class="contact-info-wrapper">
                <h3>Dane do kontaktu</h3>
            <div class="contact-info-cards-wrapper">
                <div class="contact-info">
                    <h4>Paweł Bilski</h4>
                    <a href="tel:+48509714295"><span class="material-icons">call</span> +48 509 714 295</a>
                    <a href="mailto:pabil@interia.pl"><span class="material-icons">mail</span> pabil@interia.pl</a>
                </div>
                <div class="contact-info">
                    <h4>Tatiana Kożuszna</h4>
                    <a href="tel:+48509714295"><span class="material-icons">call</span> +48 509 714 295</a>
                    <a href="mailto:pabil@interia.pl"><span class="material-icons">mail</span> pabil@interia.pl</a>
                </div>
            </div>
        </div>
        </div>
        <div class="tickets-wrapper" id="buy-ticket">
            <div class="ticket-heading">
                <h2>Wybierz swój bilet</h2>
            </div>
            <div class="ticket-choice">
                <div class="single-ticket">
                    <h3>Jeden bilet</h3>
                    <h4>Co zawiera bilet:</h4>
                    <p><span class="material-icons">groups</span>udział w konferencji</p>
                    <p><span class="material-icons">restaurant</span>obiad</p>
                    <p><span class="material-icons">coffee</span>kawa i herbata</p>
                    <p><span class="material-icons">local_parking</span>bezpłatny parking</p>
                    <h3>Cena: 150 zł*</h3>
                    <button class="buy-ticket-button" @click="$router.push({ name: 'RzemienBuyTicket' })">Kup bilet<span class="material-icons">confirmation_number</span></button>
                </div>
                <div class="ticket-package">
                    <h3>Pakiet 5 biletów</h3>
                    <h4>Co zawiera bilet:</h4>
                    <p><span class="material-icons">groups</span>udział w konferencji</p>
                    <p><span class="material-icons">restaurant</span>obiad</p>
                    <p><span class="material-icons">coffee</span>kawa i herbata</p>
                    <p><span class="material-icons">local_parking</span>bezpłatny parking</p>
                    <h3 style="text-align: end;">Cena:</h3>
                    <h3><s style="font-size: .9rem;">750zł</s> 675zł</h3>
                    <p>135 zł za osobę*</p>
                    <button class="buy-ticket-button" @click="$router.push({ name: 'RzemienBuyTicket' })">Kup bilet<span class="material-icons">confirmation_number</span></button>
                </div>
            </div>
            <div class="ticket-additional-info">
                <p>*Cena za jedną osobę dorosłą. Za każde dziecko do lat 10 proszę doliczyć kwotę za sam posiłek w wysokości 50 zł.</p>
            </div>
        </div>
        <TheMeetingFooter class="footer" id="contact" />
    </div>
</template>

<script>
import TimeTitleCard from '@/components/timeTitleCard.vue';
import TheMeetingNavbar from '@/components/theMeetingNavbar.vue';
import Countdown from '@/components/countdown.vue';
import PrelegentDescription from '@/components/prelegentDescription.vue';
import TheMeetingFooter from '@/components/theMeetingFooter.vue';

export default {
    name: 'RzemienMeeting',
    components: {
        TimeTitleCard,
        TheMeetingNavbar,
        Countdown,
        TheMeetingFooter,
        PrelegentDescription,
    },
};
</script>

<style lang="scss" scoped>
.rzemien-meeting-view-wrapper{
    padding: 5rem 0 0 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100vw;
    @media only screen and (max-width: 720px) {
        padding: 0;
        max-width: 320px;
    }

    nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        @media only screen and (max-width: 720px) {
            display: none;
        }
    }

    .counter{
        width: 100%;
        background-color: #E0E1DD;
    }

    .date-and-place-image-wrapper{
        padding: 0 4rem;
        display: flex;
        gap: 2rem;
        padding-top: 5rem;
        @media only screen and (max-width: 720px) {
            flex-direction: column;
            gap: .5rem;
            padding: 0 .4rem;
            padding-top: .7rem;
        }
        .meeting-image-wrapper{
            padding-top: 3.5rem;
            @media only screen and (max-width: 720px) {
                padding-top: .3rem;
                img {
                    aspect-ratio: 1/1;
                    width: 100%;
                    height: 8rem;
                    object-fit: cover;
                }
            }
        }

        .date-and-place-description-wrapper{
            display: flex;
            flex-direction: column;
            gap: 3rem;
            @media only screen and (max-width: 720px) {
                gap: .5rem;
            }
            h1{
                font-size: 2.1rem;
                @media only screen and (max-width: 720px) {
                    font-size: 1.2rem;
                }
            }
            .date-and-place-wrapper{
                display: flex;
                gap: 8rem;
                align-items: center;
                justify-content: center;
                color: #0B3954;
                font-family: 'Poppins', sans-serif;
                font-size: 1.5rem;
                @media only screen and (max-width: 720px) {
                    flex-direction: column;
                    gap: .5rem;
                    font-size: 0.8rem;
                }
                p{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5rem;
                }
            }
            .meeting-description-wrapper{
                display: flex;
                flex-direction: column;
                gap: 2rem;
                align-items: center;
                justify-content: center;
                p{
                    font-family: 'Poppins', sans-serif;
                    color: #000000;
                    font-size: 1.2rem;
                    max-width: 50rem;
                    text-align: left;
                    gap: 1rem;
                    @media only screen and (max-width: 720px) {
                        font-size: 0.9rem;
                        max-width: 80vw;
                        gap: .5rem;
                    }
                }

                .description-buttons{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;

                    @media only screen and (max-width: 720px) {
                        flex-direction: column;
                        gap: .5rem;
                    }

                    .more-info-button{
                        background-color: #ffffff;
                        border: 2px solid #0B3954;
                        border-radius: 8px;
                        color: #0B3954;
                    }
                }
            }
        }
    }

    h1{
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 2rem;
        text-align: left;
        @media only screen and (max-width: 720px) {
            font-size: 1.2rem;
        }
    }

    .leaders-description-wrapper{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        padding-bottom: 5rem;

        @media only screen and (max-width: 720px) {
            gap: .3rem;
            padding-bottom: .5rem;
        }

        .prelegents-wrapper{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 5rem;
            @media only screen and (max-width: 720px) {
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }
        }
    }

    h2{
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        padding: 4rem 0 2rem 0;
        @media only screen and (max-width: 720px) {
            font-size: 1rem;
            padding: 0;
        }
    }

    .program-info-wrapper{
        width: 100%;
        background-color: #E0E1DD;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        padding-bottom: 5rem;
        @media only screen and (max-width: 720px) {
            gap: .3rem;
            padding-bottom: .5rem;
            padding-top: .5rem;
        }
        h2{
            padding-bottom: 0;
        }
        p{
            color: #0B3954;
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            @media only screen and (max-width: 720px) {
                font-size: .7rem;
            }
        }
    }
    .video-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 2rem;
        @media only screen and (max-width: 720px) {
            flex-direction: column;
            padding: 0;
        }

        .video-text{
            padding: 5rem;
            display: flex;
            flex-direction: column;
            @media only screen and (max-width: 720px) {
                padding: .2rem;
            }
            h2{
                font-family: 'Poppins', sans-serif;
                font-size: 2rem;
                color: #0B3954;
                display: flex;
                align-items: center;
                justify-content: center;
                @media only screen and (max-width: 720px) {
                    font-size: .9rem;
                }
            }
            p{
                font-family: 'Poppins', sans-serif;
                font-size: 1.2rem;
                color: #0B3954;
                display: flex;
                align-items: center;
                justify-content: center;
                @media only screen and (max-width: 720px) {
                    font-size: .7rem;
                }
            }
        }
    }

    .date-and-place-info-wrapper{
        background-color: #0B3954;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-bottom: 2rem;
        @media only screen and (max-width: 720px) {
            padding-bottom: .5rem;
            padding-top: .5rem;
        }
        h2{
            color: #FFFFFF;
            font-size: 2.5rem;
            @media only screen and (max-width: 720px) {
                font-size: 1rem;
            }
        }
        .conference-info{
            display: flex;
            gap: 10rem;
            @media only screen and (max-width: 720px) {
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: .5rem;
            }
            .map{
                @media only screen and (max-width: 720px) {
                    display: none;
                }
            }
            .conference-info-text{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
                justify-content: center;
                @media only screen and (max-width: 720px) {
                    align-items: center;
                    gap: .5rem;
                }
                h2{
                    font-family: 'Poppins', sans-serif;
                    font-size: 3rem;
                    font-weight: 400;
                    color: #FFFFFF;
                    @media only screen and (max-width: 720px) {
                        font-size: 1rem;
                    }
                }
                .location-wrapper{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: flex-start;
                    justify-content: center;
                    border: 2px solid #FFFFFF;
                    border-radius: 8px;
                    padding: .5rem .7rem;
                    @media only screen and (max-width: 720px) {
                        gap: .5rem;
                        padding: .2rem .3rem;
                        align-items: center;
                    }
                    p{
                        font-family: 'Poppins', sans-serif;
                        font-size: 1rem;
                        color: #FFFFFF;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: .5rem;
                        @media only screen and (max-width: 720px) {
                            font-size: .7rem;
                        }
                    }
                }
            }
        }
    }
    .additional-info-wrapper{
        h2{
            padding-bottom: 0;
        }
        .contact-info-wrapper{
        padding: 2rem 0;
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        text-align: left;
        h3{
            padding-bottom: 1rem;
        }
        .contact-info-cards-wrapper{
            display: flex;
            gap: 3rem;
        }
            .contact-info{
                color: #0B3954;
                font-family: 'Poppins', sans-serif;
                font-size: 1rem;
                gap: .7rem;
                h4{
                    padding-bottom: 0.5rem;
                }
                a{
                    text-decoration: none;
                    color: #0B3954;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5rem;
                }
            }
        }
    }
    .tickets-wrapper{
        padding: 2rem 0;
        @media only screen and (max-width: 720px) {
            padding: .5rem;
        }
        .ticket-heading{
            h2{
                color: #0B3954;
                font-family: 'Poppins', sans-serif;
                font-size: 2rem;
                padding-bottom: 3rem;
                @media only screen and (max-width: 720px) {
                    font-size: 1rem;
                    padding-bottom: .5rem;
                }
            }
        }
        .ticket-choice{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5rem;
            @media only screen and (max-width: 720px) {
                flex-direction: column;
                gap: .5rem;
            }
            .single-ticket{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 3rem;
                border: 1px solid #0B3954;
                border-radius: 8px;
                gap: 1rem;
                @media only screen and (max-width: 720px) {
                    padding: .5rem;
                }
                h3{
                    color: #0B3954;
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.5rem;
                    @media only screen and (max-width: 720px) {
                        font-size: 1rem;
                    }
                }
                p{
                    font-family: 'Poppins', sans-serif;
                    font-size: 1rem;
                    color: #0B3954;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5rem;
                    @media only screen and (max-width: 720px) {
                        font-size: .7rem;
                    }
                }
                h4{
                    padding: 1rem 0;
                    font-size: 1.2rem;
                    color: #0B3954;
                    font-family: 'Poppins', sans-serif;
                    @media only screen and (max-width: 720px) {
                        font-size: .9rem;
                        padding: .5rem 0;
                    }
                }
            }
            .ticket-package{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 3rem;
                border: 1px solid #0B3954;
                border-radius: 8px;
                background-color: #0B3954;
                gap: 1rem;
                @media only screen and (max-width: 720px) {
                    padding: .5rem;
                }
                h3{
                    color: #FFFFFF;
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.5rem;
                    @media only screen and (max-width: 720px) {
                        font-size: 1rem;
                    }
                }
                p{
                    font-family: 'Poppins', sans-serif;
                    font-size: 1rem;
                    color: #FFFFFF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5rem;
                    @media only screen and (max-width: 720px) {
                        font-size: .7rem;
                    }
                }
                h4{
                    padding: 0rem 0;
                    font-size: 1.2rem;
                    color: #FFFFFF;
                    @media only screen and (max-width: 720px) {
                        padding: .5rem 0;
                        font-size: .9rem;
                    }
                }
                .buy-ticket-button{
                    background-color: #FFFFFF;
                    color: #0B3954;
                    border: 2px solid #FFFFFF;
                    &:hover{
                        background-color: #FFFFFF;
                        box-shadow: 5px 5px 15px #FFFFFF;
                        border-radius: 5px;
                        color: #0B3954;
                    }
                }
            }
        }
        .ticket-additional-info{
            padding-top: 2rem;
            p{
                color: #000000;
                font-family: 'Poppins', sans-serif;
                font-size: .9rem;
            }
        }
    }

    // .additional-info-wrapper{
    //     font-family: 'Poppins', sans-serif;
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: center;
    //     .additional-info-text{
    //         display: flex;
    //         flex-direction: column;
    //         gap: 3rem;
    //         p{
    //         color: #0B3954;
    //         }
    //     }
    //     .acommodation-photo{
    //     }
    // }
    .footer{
        height: 10rem;
        width: 100vw;
        @media only screen and (max-width: 720px) {
            height: 5rem;
        }
    }
}

button{
    padding: .5rem .7rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    min-width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    &:hover{
        cursor: pointer;
    }
    @media only screen and (max-width: 720px) {
        font-size: .9rem;
        padding: .1rem .15rem;
        min-width: none;
        max-width: 60vw;
        gap: .2rem;
    }
}
.buy-ticket-button{
    background-color: #0B3954;
    color: #FFFFFF;
    border: 2px solid #0B3954;
    border-radius: 8px;
    &:hover{
        background-color: #0B3954;
        box-shadow: 5px 5px 15px #0B3954 ;
        border-radius: 5px;
        color: #FFFFFF;
    }
}
</style>
