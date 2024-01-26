<template>
    <div class="rzemien-meeting-view-wrapper" id="top">
        <nav>
            <TheMeetingNavbar />
        </nav>
        <Countdown />
        <div class="date-and-place-wrapper">
            <p>Rzemień</p>
            <p>17.02.2024</p>
        </div>
        <h1>
            WPŁYW EMOCJI NA NASZE CIAŁO
        </h1>
        <div class="meeting-description-wrapper">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus esse dolor maiores quidem aliquam quasi ducimus, veniam optio aliquid nobis molestiae hic tempore magni delectus aperiam, enim corrupti molestias quisquam!
            </p>
            <div class="description-buttons">
                <button class="more-info-button">Dowiedz się więcej</button>
                <button class="buy-ticket-button">Kup bilet</button>
            </div>
        </div>
        <div class="leaders-description-wrapper">
            <h3>Nasi prelegenci</h3>
            <p>Od 7 lat kieruje polskim Coral Club. Ekspert od nowoczesnej przedsiębiorczości i współpracy z partnerami biznesowymi. Na co dzień wspomaga procesy biznesowe na rynku polskim i europejskim.</p>
        </div>
        <h3>Program konferencji</h3>
        <TimeTitleCard time="11:00" title="Rozpoczęcie i powitanie" leader="Justyna Mucha"/>
        <TimeTitleCard time="11:15" title="4 Kroki do zdrowia" leader="Tatiana Kożuszna"/>
        <TimeTitleCard time="11:45" title="Dieta zgodna z porami roku" leader="Joanna Marszałek"/>
        <TimeTitleCard time="12:15" title="Dobre tłuszcze oraz zagrożenia związane z ich niedoborami" leader="Bożena Rząsa"/>
        <TimeTitleCard time="12:45" title="Odżywcze produkty Coral Club" leader="Irena Prochoń-Dziewońska"/>
        <TimeTitleCard time="13:15" title="Efekty zdrowotne" leader="prowadzi Ewelina Szymańska"/>
        <TimeTitleCard time="13:45" title="Obiad"/>
        <TimeTitleCard time="15:00" title="Emocje i ich wpływ na nasze ciało" leader="dr Małgorzata Rakowska"/>
        <TimeTitleCard time="16:00" title="Dlaczego Coral Club" leader="Rafał Woźniak"/>
        <TimeTitleCard time="16:20" title="Edyfikacja - mocne wejście" leader=""/>
        <TimeTitleCard time="16:40" title="Wyróznienia i historie sukcesu" leader="prowadzi Janina Machniak-Rozborska"/>
        <TimeTitleCard time="17:10" title="Produkty za darmo? Jest na to sposób" leader="Paweł Bilski"/>
        <TimeTitleCard time="17:30" title="Perspektywy na przyszłość" leader="Andrzej Kożuszny"/>
        <div class="ticket-content-wrapper">
            <h3>Co zawiera bilet:</h3>
            <p>udział w konferencji</p>
            <p>obiad</p>
            <p>kawa i herbata</p>
            <p>bezpłatny parking</p>
            <h3>Cena: 150 zł</h3>
            <button class="buy-ticket-button">Kup bilet</button>
        </div>
        <div class="date-and-place-info-wrapper">
            <h3>Konferencja odbędzie się:</h3>
            <h2>17.02.2024</h2>
        </div>
        <div class="more-info-wrapper">
            <h3>Dodatkowe informacje</h3>
            <p>Jest możliwość noclegu</p>
        </div>
        <TheMeetingFooter class="footer" />
    </div>
</template>

<script>
import TimeTitleCard from '@/components/timeTitleCard.vue';
import TheMeetingNavbar from '@/components/theMeetingNavbar.vue';
import Countdown from '@/components/countdown.vue';
import TheMeetingFooter from '@/components/theMeetingFooter.vue';

export default {
    name: 'RzemienMeeting',
    components: {
        TimeTitleCard,
        TheMeetingNavbar,
        Countdown,
        TheMeetingFooter,
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

    .date-and-place-wrapper{
        display: flex;
        gap: 8rem;
        align-items: center;
        justify-content: center;
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
    }

    h1{
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 3rem;
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

    h3{
        color: #0B3954;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        padding: 4rem 0 2rem 0;
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
    }

    .more-info-wrapper{

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
