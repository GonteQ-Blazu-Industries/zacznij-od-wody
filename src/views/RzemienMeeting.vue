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
                WPŁYW EMOCJI NA NASZE CIAŁO
            </h1>
            <div class="meeting-description-wrapper">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus esse dolor maiores quidem aliquam quasi ducimus, veniam optio aliquid nobis molestiae hic tempore magni delectus aperiam, enim corrupti molestias quisquam!
                </p>
                <div class="description-buttons">
                    <button class="more-info-button" href="#leaders-description"  v-smooth-scroll="{duration: 1000, offset: -20, updateHistory: false,}">Dowiedz się więcej<span class="material-icons">expand_more</span></button>
                    <button class="buy-ticket-button" @click="$router.push({ name: 'RzemienBuyTicket' })">Kup bilet<span class="material-icons">confirmation_number</span></button>
                </div>
            </div>
           </div>
           <div class="meeting-image-wrapper">
            <img src="@/assets/pabilkropla.png" alt="zdjęcie poglądowe" height="450" width="800">
           </div>
        </div>
        <div class="leaders-description-wrapper" id="leaders-description">
            <h3>Nasi prelegenci</h3>
            <div class="prelegents-wrapper">
                <PrelegentDescription image="" name="Justyna Mucha" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="" name="Tatiana Kożuszna" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="" name="Joanna Marszałek" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="" name="Bożena Rząsa" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="" name="Irena Prochoń-Dziewońska" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="" name="Ewelina Szymańska" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="" name="Małgorzta Rakowska" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="" name="Rafał Woźniak" description="Od 7 lat kieruje polskim Coral Club. Ekspert od nowoczesnej przedsiębiorczości i współpracy z partnerami biznesowymi. Na co dzień wspomaga procesy biznesowe na rynku polskim i europejskim." />
                <PrelegentDescription image="" name="" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="" name="Janina Machniak-Rozborska" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
                <PrelegentDescription image="" name="Paweł Bilski" description="Przedsiębiorca, Producent organicznej żywności. Ekspert od nawadniania organizmu. Pasjonat zdrowego stylu życia. Wspiera tysiące osób w Polsce i na całym świecie w utrzymaniu zdrowia." />
                <PrelegentDescription image="" name="Andrzej Kożuszny" description="Łączy naukę i empatię w swojej pracy jako diagnosta laboratoryjny, dietetyk kliniczny i pedagog. Jej serce bije w rytmie medycyny naturalnej, gdzie zdrowie jest harmonią między ciałem a naturą." />
            </div>
        </div>
        <div class="program-info-wrapper">
            <h3 id="program-info">Program konferencji</h3>
            <TimeTitleCard time="11:00" title="Rozpoczęcie i powitanie" leader="Justyna Mucha" reversed="true"/>
            <TimeTitleCard time="11:15" title="4 Kroki do zdrowia" leader="Tatiana Kożuszna"/>
            <TimeTitleCard time="11:45" title="Dieta zgodna z porami roku" leader="Joanna Marszałek"/>
            <TimeTitleCard time="12:15" title="Dobre tłuszcze oraz zagrożenia związane z ich niedoborami" leader="Bożena Rząsa"/>
            <TimeTitleCard time="12:45" title="Odżywcze produkty Coral Club" leader="Irena Prochoń-Dziewońska"/>
            <TimeTitleCard time="13:15" title="Efekty zdrowotne" leader="prowadzi Ewelina Szymańska"/>
            <TimeTitleCard time="13:45" title="Obiad" reversed="true"/>
            <TimeTitleCard time="15:00" title="Emocje i ich wpływ na nasze ciało" leader="Małgorzata Rakowska"/>
            <TimeTitleCard time="16:00" title="Dlaczego Coral Club" leader="Rafał Woźniak"/>
            <TimeTitleCard time="16:20" title="Edyfikacja - mocne wejście" leader="" reversed="true"/>
            <TimeTitleCard time="16:40" title="Wyróznienia i historie sukcesu" leader="prowadzi Janina Machniak-Rozborska"/>
            <TimeTitleCard time="17:10" title="Produkty za darmo? Jest na to sposób" leader="Paweł Bilski"/>
            <TimeTitleCard time="17:30" title="Perspektywy na przyszłość" leader="Andrzej Kożuszny"/>
        </div>
        <div class="ticket-content-wrapper">
            <h3>Co zawiera bilet:</h3>
            <p><span class="material-icons">groups</span>udział w konferencji</p>
            <p><span class="material-icons">restaurant</span>obiad</p>
            <p><span class="material-icons">coffee</span>kawa i herbata</p>
            <p><span class="material-icons">local_parking</span>bezpłatny parking</p>
            <h3>Cena: 150 zł</h3>
            <button class="buy-ticket-button" @click="$router.push({ name: 'RzemienBuyTicket' })">Kup bilet<span class="material-icons">confirmation_number</span></button>
        </div>
        <div class="date-and-place-info-wrapper" id="date-and-place">
            <h3>Konferencja odbędzie się:</h3>
            <div class="conference-info">
               <div class="conference-info-text">
                <h2>17.02.2024</h2>
                <p><span class="material-icons">location_on</span>Ośrodek wypoczynkowy JAWJA</p>
                <p>Rzemień 312</p>
                <p>39-322 Rzemień</p>
               </div>
               <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.8448469429445!2d21.51582317582303!3d50.238803402581254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d136f0df8ab05%3A0x91e0641fa79b2906!2sO%C5%9Brodek%20Wypoczynkowy%20-%20JAWJA%20Sp%C3%B3%C5%82ka%20z%20o.o.!5e0!3m2!1spl!2spl!4v1706463791667!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
        </div>
        <div class="additional-info-wrapper">
            <h3>Dodatkowe informacje</h3>
            <p>Jest możliwość noclegu</p>
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
    padding: 7rem 0 0 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100vw;

    nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    .counter{
        width: 100%;
        background-color: #E0E1DD;
    }

    .date-and-place-image-wrapper{
        padding: 0 4rem;
        display: flex;
        gap: 3rem;
        padding-top: 5rem;

        .date-and-place-description-wrapper{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            .date-and-place-wrapper{
                display: flex;
                gap: 8rem;
                align-items: center;
                justify-content: center;
                color: #0B3954;
                font-family: 'Poppins', sans-serif;
                font-size: 1.5rem;
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
            gap: 1rem;
            align-items: center;
            justify-content: center;
            p{
                font-family: 'Poppins', sans-serif;
                color: #0B3954;
                font-size: 1.5rem;
                max-width: 50rem;
                text-align: left;
            }

            .description-buttons{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;

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
        font-size: 3rem;
    }

    .leaders-description-wrapper{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        padding-bottom: 5rem;

        .prelegents-wrapper{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 5rem;
        }
    }

    h3{
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        padding: 4rem 0 2rem 0;
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
    }

    .ticket-content-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            color: #0B3954;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
        }
        h3{
            padding: 2rem 0;
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
        width: 100%;

        .conference-info{
            display: flex;
            gap: 10rem;
            .conference-info-text{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
                justify-content: center;
            }
        }
        h3{
            color: #ffffff;
            font-size: 2.5rem;
        }
        h2{
            font-family: 'Poppins', sans-serif;
            font-size: 3rem;
            font-weight: 400;
            color: #ffffff;
        }
        p{
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
        }
    }

    .additional-info-wrapper{
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            color: #0B3954;
        }
    }
    .footer{
        height: 10rem;
        width: 100vw;
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
}
.buy-ticket-button{
    background-color: #0B3954;
    color: #ffffff;
    border: 2px solid #0B3954;
    border-radius: 8px;
    &:hover{
        background-color: #0B3954;
        box-shadow: 5px 5px 15px #0B3954 ;
        border-radius: 5px;
        color: white;
    }
}
</style>
