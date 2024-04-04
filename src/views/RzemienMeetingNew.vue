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
                <p><span class="material-icons">calendar_month</span>20.04.2024</p>
            </div>
            <h1>
                WIOSENNA WITALNOŚĆ KLUCZEM DO EFEKTYWNEGO ŻYCIA
            </h1>
            <div class="meeting-description-wrapper">
                <p>
                    Zapraszamy na inspirującą konferencję, która skupi się na promowaniu zdrowego stylu życia i świadomości zdrowotnej wraz z nadejściem wiosny. Poprzez prezentacje ekspertów w dziedzinie zdrowia, aktywności fizycznej i rozwoju osobistego, uczestnicy będą mieli okazję dowiedzieć się, jak wzmocnić swoją energię i sprawność wiosną, aby cieszyć się bardziej efektywnym życiem. Konferencja będzie stanowiła nie tylko źródło wiedzy, ale także inspirację do podejmowania zdrowych nawyków i działań na rzecz poprawy jakości życia.
                    Nie przegap tej unikalnej okazji - zarejestruj się już dziś i zmień swoje życie na lepsze!
                </p>
                <div class="description-buttons">
                    <button class="more-info-button" href="#benefits-info"  v-smooth-scroll="{duration: 1000, offset: -20, updateHistory: false,}">Dowiedz się więcej<span class="material-icons">expand_more</span></button>
                    <button class="buy-ticket-button" href="#buy-ticket"  v-smooth-scroll="{duration: 1000, offset: -20, updateHistory: false,}">Kup bilet<span class="material-icons">confirmation_number</span></button>
                    <!-- <button class="buy-ticket-button" @click="$router.push({ name: 'RzemienBuyTicket' })">Kup bilet<span class="material-icons">confirmation_number</span></button> -->
                </div>
            </div>
           </div>
           <div class="meeting-image-wrapper">
            <img src="@/assets/wiosna-sport.jpg" alt="zdjęcie poglądowe" height="359" width="640">
           </div>
        </div>
        <div class="benefits-for-participants-wrapper" id="benefits-info">
            <h2>Dlaczego warto wziąć udział?</h2>
            <div class="benefits-info">
                <div class="health-benefits">
                    <h3>Zdrowie</h3>
                    <ul>
                        <li>Poznasz nowe możliwości indywidualizacji działań profilaktycznych. </li>
                        <li>Spojrzysz na swoje zdrowie z szerszej perspektywy.</li>
                        <li>Nauczysz się jak utrzymać aktywne życie.</li>
                        <li>Przekonasz się, że możliwe jest życie bez bólu kręgosłupa.</li>
                        <li>Dowiesz się jak zadbać o swój układ ruchu w okresie wiosennym.</li>
                    </ul>
                </div>
                <div class="growth-benefits">
                    <h3>Rozwój</h3>
                    <ul>
                        <li>Odkryjesz jakie są zalety partnerstwa biznesowego z Coral Club i jak budować swoją przyszłość w oparciu o filozofię firmy.</li>
                        <li>Otworzysz się na nowe możliwości wzrostu i rozwoju.</li>
                        <li>Poznasz narzędzia do poprawy swojego zdrowia i finansów.</li>
                        <li>Nauczysz się jak wykorzystywać potęgę social mediów w swojej pracy.</li>
                        <li>Otrzymasz dużo motywacji i gotowych wskazówek.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="leaders-description-wrapper" id="leaders-description">
            <h2>Nasi prelegenci</h2>
            <div class="prelegents-wrapper">
                <PrelegentDescription image="Malgorzata-Rakowska.webp" name=" dr Małgorzta Rakowska" description='Fizjoterapeutka i terapeutka manualna. Od 20 lat wspiera pacjentów w pozbywaniu się bólu. Łączy pracę ciała i emocji. Jej misją jest poszerzanie świadomości ciała, tak aby każdy potrafił dbać o mięśnie, emocje i myśli. Autorka książki "Codzienność bez bólu". Prowadzi Instytut na Polance.' />
                <PrelegentDescription image="Tatiana-Kozuszna.webp" name="dr Tatiana Kożuszna" description="Od kilkunastu lat lekarz z misją edukacji dla utrzymania zdrowia. Wspiera tysiące osób w Polsce i na całym świecie. Systematycznie prowadzi spotkania Akademii Zdrowia w różnych miastach Polski. Współpracuje z lekarzami na całym świecie i prowadzi własne badania naukowe." />
                <PrelegentDescription image="Andrzej-Święcicki.jpg" name="dr Andrzej Święcicki" description="Lekarz pediatra, jego podejście do leczenia opiera się na holistycznym spojrzeniu na pacjenta, co pozwala na pełniejsze zrozumienie i skuteczniejsze adresowanie  fizycznych oraz emocjonalnych aspektów zdrowia. Równolegle z praktyką lekarską, od ponad 30 lat prowadzi badania naukowe nad biofizycznymi właściwościami tęczówki." />
                <PrelegentDescription image="Gosia-Baleczna-Nowacka.webp" name="Małgorzata Bałęczna-Nowacka" description="Trenerka witalności i metod oddechowych, konsultantka strategii 4 Kroków do Zdrowia, ekspertka od nawodnienia organizmu. Liderka i mentorka. Na co dzień wspiera ponad pół tysiąca osób w 4 Krokach Do Zdrowia. Przedsiębiorca. Mistrz Coral Club." />
                <PrelegentDescription image="Andrzej-Kozuszny.webp" name="Andrzej Kożuszny" description="Ponad 15 lat temu zapoczątkował działalność Coral Club w Polsce, zakładając pierwsze biuro regionalne. Odniósł spektakularny sukces. Obecnie dzieli się swoim doświadczeniem i angażuje w rozwój partnerów biznesowych." />
                <PrelegentDescription image="Pawel-Bilski.webp" name="Paweł Bilski" description="Przedsiębiorca, ekspert od nawadniania organizmu, pasjonat zdrowego stylu życia. Otwarty na rozwój. Lubi inspirować ludzi i dzielić się z nimi wiedzą, tak by każdy mógł wziąć odpowiedzialność za zdrowie w swoje ręce. " />
                <PrelegentDescription image="Lidia-Starzyk-Hudyka.jpg" name="Lidia Starzyk-Hudyka" description='Mama, przedsiębiorczyni kochająca życie i pozytywnych ludzi. Od 30 lat działa w branży beauty. Otwarta na rozwój, uznaje zasadę że "W życiu masz tyle, na ile się odważysz". ' />
                <PrelegentDescription image="Ewelina-Szymanska.jpg" name="Ewelina Szymańska" description="Mama, żona, kobieta sumienna, cierpliwa i wytrwała. Na codzień prowadzi sklep ze zdrową żywnością. Wykorzystując koncepcję Coral Club pomaga wielu osobom wrócic do zdrowia." />
                <PrelegentDescription image="Justyna-Mucha.jpg" name="Justyna Mucha" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="Nadia-Slaszczowa.jpg" name="Nadia Słaszczowa" description="Brylantowy dyrektor, od dwóch lat mieszka w Polsce. W swojej pracy umiejętnie wykorzystuje social media aby dotrzeć z koncepcją 4 Kroków do Zdrowia do jak największej liczy osób." />
                <PrelegentDescription image="Jola-Dziurko.jpg" name="Jolanta Dziurko - PROWADZĄCA" description="Pielęgniarka z wieloletnim stażem. Propagatorka koncepcji 4 Kroków do Zdrowia i współorganizatorka Maratonów Zdrowia. Interesuje się wpływem emocji na ciało, stawia na naukę oraz rozwój osobisty by zdrowo i pięknie żyć. " />
            </div>
        </div>
        <div class="program-info-wrapper">
            <h2 id="program-info">Program konferencji</h2>
            <p><span class="material-icons">schedule</span>10:00 - 18:30</p>
            <TimeTitleCard time="" title="10:00 | Rozpoczęcie i powitanie" leader="" reversed="true"/>
            <TimeTitleCard time="" title="4 Kroki do zdrowia" leader="Justyna Mucha"/>
            <TimeTitleCard time="" title="Wiosenna energia i witalność = aktywne życie" leader="Małgorzata Bałęczna-Nowacka"/>
            <TimeTitleCard time="" title="Wiosną zadbaj o swój układ ruchu." leader="dr Tatiana Kożuszna"/>
            <TimeTitleCard time="" title="11:45 - 12:00 | Przerwa kawowa" reversed="true"/>
            <TimeTitleCard time="" title="Badania obrazowe tęczówki oka jako wczesna profilaktyka zdrowia" leader="dr Andrzej Święcicki"/>
            <TimeTitleCard time="" title="Produkty - narzędzia do poprawy zdrowia i rozwoju" leader="Lidia Starzyk-Hudyka"/>
            <TimeTitleCard time="" title="Efekty zdrowotne" leader="prowadzi Ewelina Szymańska"/>
            <TimeTitleCard time="" title="14:00 - 15:00 | Obiad" reversed="true"/>
            <TimeTitleCard time="" title="Jak pracować w social mediach?" leader="Nadia Słaszczowa"/>
            <TimeTitleCard time="" title="Wyróznienia i historie sukcesu" leader="prowadzi Andrzej Kożuszny"/>
            <TimeTitleCard time="" title="Teraz jest najlepszy czas na budowanie swojej przyszłości" leader="Paweł Bilski"/>
            <TimeTitleCard time="" title="Relacja z wczasów mistrzowskich w Indiach" leader="Tatiana i Andrzej Kożuszni"/>
            <TimeTitleCard time="" title="16:45 - 17:00 | Przerwa kawowa" reversed="true"/>
            <TimeTitleCard time="" title="Ból kręgosłupa - czy to już zwyrodnienie?" leader="dr Małgorzata Rakowska"/>
            <TimeTitleCard time="" title="18:30 | Podwieczorek" reversed="true"/>
        </div>
        <div class="video-wrapper">
            <div class="video-text">
                <h2>Zapraszamy!</h2>
                <p style="padding-bottom: .7rem;">Kilku z naszych prelegentów miało możliwość nagrać dla Was zaproszenie na naszą konferencję &#128522;</p>
                <p>Zobacz co mają ci do przekazania!</p>
            </div>
            <div class="videos">
                <div class="youtube-video">
                    <!--<iframe width="250" height="130" src="https://youtube.com/embed/9vNafOSZTAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
                </div>
                <div class="youtube-video">
                    <iframe width="250" height="130" src="https://youtu.be/4jAFCi1aWg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="youtube-video">
                    <iframe width="250" height="130" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="date-and-place-info-wrapper" id="date-and-place">
            <h2>Konferencja odbędzie się:</h2>
            <div class="conference-info">
               <div class="conference-info-text">
                <h2>20.04.2024</h2>
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
            <!-- <h2>Dodatkowe informacje</h2>
            <p>Ze względu na to, że podczas jednego z wykładów bedziemy wykonywać ćwiczenia fizyczne, zalecany jest wygodny, niekrępujący ruchów strój.</p>
            <p>Mile widziana mata do ćwiczeń  &#128522;</p> -->
            <div class="contact-info-wrapper">
                <h2 id="contact-info">Dane do kontaktu</h2>
                <div class="contact-info-inner-wrapper">
                    <div class="contact-info-cards-wrapper">
                        <h4>W sprawie konferencji</h4>
                        <div class="conference-contact-cards">
                            <div class="contact-info">
                                <h4>Paweł Bilski</h4>
                                <a href="tel:+48509714295"><span class="material-icons">call</span> +48 509 714 295</a>
                                <a href="mailto:pabil@interia.pl"><span class="material-icons">mail</span> pabil@interia.pl</a>
                            </div>
                        </div>
                    </div>
                    <div class="contact-info-cards-wrapper">
                        <h4>W sprawie noclegu</h4>
                        <div class="conference-contact-cards">
                            <div class="contact-info">
                                <h4>Biuro JAWJA</h4>
                                <a href="tel:+48537425477"><span class="material-icons">call</span>+48 537 425 477</a>
                                <a href="mailto:biuro@jawjarzemien.pl"><span class="material-icons">mail</span>biuro@jawjarzemien.pl</a>
                            </div>
                        </div>
                    </div>
                    <img src="../assets/Nocleg.jpg" alt="" width="500">
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
                    <p><span class="material-icons">cookie</span>podwieczorek</p>
                    <p><span class="material-icons">local_parking</span>bezpłatny parking</p>
                    <h3>Cena: 150 zł</h3>
                    <button class="buy-ticket-button" @click="$router.push({ name: 'RzemienBuyTicket' })">Kup bilet<span class="material-icons">confirmation_number</span></button>
                </div>
                <div class="ticket-package">
                    <h3>Pakiet 5+ biletów<sup>*</sup></h3>
                    <h4>Co zawiera bilet:</h4>
                    <p><span class="material-icons">groups</span>udział w konferencji</p>
                    <p><span class="material-icons">restaurant</span>obiad</p>
                    <p><span class="material-icons">coffee</span>kawa i herbata</p>
                    <p><span class="material-icons">cookie</span>podwieczorek</p>
                    <p><span class="material-icons">local_parking</span>bezpłatny parking</p>

                    <h3 style="text-align: end;">Cena:</h3>
                    <h3><s style="font-size: .9rem;">150zł</s> 135zł</h3>
                    <p>za osobę</p>
                    <button class="buy-ticket-button" @click="$router.push({ name: 'RzemienBuyPacket' })">Kup bilet<span class="material-icons">confirmation_number</span></button>
                </div>
            </div>
            <div class="ticket-additional-info">
                <div class="points-notice">
                    <p><strong>Warunkiem uczestnictwa w konferencji jest obrót osobisty 50 pkt. w kwietniu.</strong></p>
                </div>
                <p><sup>*</sup>Przy wyborze pakietu biletów prosimy o wpisanie w wiadomości dodatkowej imion i nazwisk osób ze swojej struktury, dla których pakiet jest kupowany.</p>
            </div>
        </div>
        <TheMeetingFooter class="footer" />
    </div>
</template>

<script>
import TimeTitleCard from '@/components/timeTitleCardNew.vue';
import TheMeetingNavbar from '@/components/theMeetingNavbarNew.vue';
import Countdown from '@/components/countdownNew.vue';
import PrelegentDescription from '@/components/prelegentDescriptionNew.vue';
import TheMeetingFooter from '@/components/theMeetingFooterNew.vue';

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
        background-color: #b0c4b1;
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
                    text-align: center;
                }
            }
            .date-and-place-wrapper{
                display: flex;
                gap: 8rem;
                align-items: center;
                justify-content: center;
                color: #183a37;
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
                        text-align: center;
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
                        border: 2px solid #183a37;
                        border-radius: 8px;
                        color: #183a37;
                    }
                }
            }
        }
    }

    h1{
        color: #183a37;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 2rem;
        text-align: left;
        @media only screen and (max-width: 720px) {
            font-size: 1.2rem;
        }
    }
    .benefits-for-participants-wrapper{
        font-family: 'Poppins', sans-serif;
        color: #354f52;
        text-align: center;
        font-size: 1.2rem;
        padding-top: 2rem;
        font-weight: 100;
        .benefits-info{
            display: flex;
            gap: 5rem;
            padding: 2rem 10rem;
            text-align: left;
            line-height: 2rem;
            align-items: center;
            justify-content: center;
            @media only screen and (max-width: 720px) {
                flex-direction: column;
                padding: 1.5rem .7rem;
                width: 100%;
                gap: 1rem;
            }
        }
        .health-benefits{
            padding: 3rem 2rem;
            border: 1.5px solid #b0c4b1;
            border-radius: 8px;
            max-width: 40%;
            height: 500px;
            @media only screen and (max-width: 720px) {
                max-width: 100%;
                padding: .1rem 2rem;
            }
            h3{
                text-align: center;
                padding-bottom: 1.2rem;
            }
            ul{
                li{
                    font-weight: 400;
                }
            }
        }
        .growth-benefits{
            padding: 3rem 2rem;
            border: 1.5px solid #b0c4b1;
            border-radius: 8px;
            max-width: 40%;
            height: 500px;
            @media only screen and (max-width: 720px) {
                max-width: 100%;
                padding: .1rem 2rem;
            }
            h3{
            text-align: center;
            padding-bottom: 1.2rem;
            }
            ul{
                li{
                    font-weight: 400;
                }
            }
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
        color: #183a37;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        padding: 4rem 0 2rem 0;
        @media only screen and (max-width: 720px) {
            font-size: 1.5rem;
            padding: 0;
        }
    }

    .program-info-wrapper{
        width: 100%;
        background-color: #b0c4b1;
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
            color: #183a37;
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
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        padding: 2rem;
        gap: 5rem;
        @media only screen and (max-width: 720px) {
            flex-direction: column;
            padding: 0;
            align-items: center;
            justify-content: center;
        }

        .video-text{
            padding: 2rem 5rem;
            width: 50%;
            display: flex;
            flex-direction: column;
            @media only screen and (max-width: 720px) {
                padding: .2rem;
                align-items: center;
                justify-content: center;
            }
            h2{
                font-family: 'Poppins', sans-serif;
                font-size: 2rem;
                color: #183a37;
                display: flex;
                align-items: center;
                justify-content: center;
                @media only screen and (max-width: 720px) {
                    font-size: 1.5rem;
                    padding-bottom: .5rem;
                }
            }
            p{
                font-family: 'Poppins', sans-serif;
                font-size: 1.2rem;
                color: #000000;
                display: flex;
                align-items: center;
                justify-content: center;
                @media only screen and (max-width: 720px) {
                    font-size: 1rem;
                }
            }
        }
        .videos {
            max-width:550px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }
    }

    .date-and-place-info-wrapper{
        background-color: #183a37;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-bottom: 2rem;
        @media only screen and (max-width: 720px) {
            padding-bottom: .7rem;
            padding-top: .7rem;
        }
        h2{
            color: #FFFFFF;
            font-size: 2.5rem;
            @media only screen and (max-width: 720px) {
                font-size: 1.4rem;
                padding-bottom: .5rem;
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
                        font-size: 1.2rem;
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
                            font-size: .9rem;
                        }
                    }
                }
            }
        }
    }
    .additional-info-wrapper{
        font-family: 'Poppins', sans-serif;
        h2{
            padding-bottom: 1rem;
        }
        p{
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem ;
        }
        .contact-info-wrapper{
        padding: 2rem 0;
        color: #183a37;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 2rem;
        h3{
            padding-bottom: 1rem;
        }
        .contact-info-inner-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5rem;
            @media only screen and (max-width: 720px) {
                flex-direction: column;
                gap: 1rem;
            }
            img {
                @media only screen and (max-width: 1024px) {
                    width: 320px;
                }
            }
            .contact-info-cards-wrapper{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            .conference-contact-cards{
                display: flex;
                gap: 2rem;
                .contact-info{
                color: #183a37;
                font-family: 'Poppins', sans-serif;
                font-size: 1rem;
                gap: .7rem;
                h4{
                    padding-bottom: 0.5rem;
                }
                a{
                    text-decoration: none;
                    color: #000000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5rem;
                }
            }
            }
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
                color: #183a37;
                font-family: 'Poppins', sans-serif;
                font-size: 2rem;
                padding-bottom: 3rem;
                @media only screen and (max-width: 720px) {
                    font-size: 1.5rem;
                    padding-bottom: .7rem;
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
                border: 1px solid #183a37;
                border-radius: 8px;
                gap: 1rem;
                @media only screen and (max-width: 720px) {
                    padding: .5rem;
                }
                h3{
                    color: #183a37;
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.5rem;
                    @media only screen and (max-width: 720px) {
                        font-size: 1rem;
                    }
                }
                p{
                    font-family: 'Poppins', sans-serif;
                    font-size: 1rem;
                    color: #183a37;
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
                    color: #183a37;
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
                border: 1px solid #183a37;
                border-radius: 8px;
                background-color: #183a37;
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
                    font-family: 'Poppins', sans-serif;
                    color: #FFFFFF;
                    @media only screen and (max-width: 720px) {
                        padding: .5rem 0;
                        font-size: .9rem;
                    }
                }
                .buy-ticket-button{
                    background-color: #FFFFFF;
                    color: #183a37;
                    border: 2px solid #FFFFFF;
                    &:hover{
                        background-color: #FFFFFF;
                        box-shadow: 5px 5px 15px #FFFFFF;
                        border-radius: 5px;
                        color: #183a37;
                    }
                }
            }
        }
        .ticket-additional-info{
            padding-top: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: .8rem;
            .points-notice {
                padding: 15px;
                background-color: #E25F4260;
                color: #800020;
                border: 2px solid #800020;
                border-radius: 8px;
                p{
                    color: #800020;
                }
            }
            p{
                color: #000000;
                font-family: 'Poppins', sans-serif;
                font-size: 1rem;
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
            width: 100%;
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
    background-color: #183a37;
    color: #FFFFFF;
    border: 2px solid #183a37;
    border-radius: 8px;
    &:hover{
        background-color: #183a37;
        box-shadow: 5px 5px 15px #183a37 ;
        border-radius: 5px;
        color: #FFFFFF;
    }
}
</style>
