<template>
  <div class='home'>
    <h1>Zacznij od wody</h1>

    <div id="posts">
      <div class="post">
        <!-- <h1>post pierwszy</h1> -->
        <!-- <img src="@/assets/bolestawow.jpg" alt="postpic"> -->
        <p>
          Bóle stawów i kręgosłupa
          Czy zastanawiałeś się kiedyś skąd one się biorą?🤔
          Powierzchnia stawowa jest pokryta gładką warstwą chrząstki,
          dzięki której możemy się swobodnie ruszać🏃🏼‍♀️.
          Chrząstka ta jest w prawie 80% zbudowana z wody.
          Jeśli nasz organizm jest odwodniony💧 pobiera wodę miedzy innymi ze stawów,
          by dostarczyć ją najbardziej potrzebnym do życia narządom (mózg,
          serce, płuca, wątroba, nerki).
          Powoduje to brak odpowiedniego smarowania,
          wynikiem czego jest tarcie i zużywanie się stawów a tym samym ból.😬
          Podobnie jest z bólem kręgosłupa.
          Między kręgami znajdują się dyski międzykręgowe.
          Płyn w nich zawarty pełni rolę amortyzatora.
          Jeśli pijemy mało wody to organizm pobiera tą wodę z dysków, zmniejszając ich objętość.
          To może powodować stykanie się kręgów,
          które naciskają 🙉 na wypustki nerwowe wychodzące z rdzenia kręgowego.
          Efektem czego są odczuwane przez nas bóle kręgosłupa.😖
          Jeśli zadbamy o prawidłowe nawodnienie💦 organizmu możemy uniknąć
          bólów stawów i kręgosłupa oraz wielu tego typu dolegliwości.🧚🏼‍♀️
        </p>
      </div>
      <div class="post">
        <!-- <h1>post drugi</h1> -->
        <!-- <img src="@/assets/postcoraloceamin.jpg" alt="postpic"> -->
        <p>
          Znasz już #Oceanmin?
          To unikalna kompozycja magnezu i innych 70 minerałów
          wydobywanych z głębin Oceanu Spokojnego🌊. Wspomoże Twoje ciało i umysł,
          poprawi siłę fizyczną, skupienie oraz pozwoli odzyskać energię🥰.
          Oceanmin pomoże Ci w pełni cieszyć się życiem.
          Rozpoczęliśmy trwający 14 dni maraton Ocean Vitality!💦
          Na uczestników czekają fantastyczne nagrody, świetna
          zabawa i przypływ sił witalnych🤸‍♀️.
          Zarejestruj się wypełniając formularz na stronie
          https://oceanvitality.club/?language=pl&ref=2822456.
          Wykonaj wszystkie 7️⃣ zadań, oznacz konto Coral Club Polska
          w swoich postach oraz na stories na Instagramie i weź udział
          w losowaniu wspaniałej nagrody🎁 - 2 opakowań Oceanmin w zestawie
          z butelką termiczną Hydrate the World!
          Więcej informacji o produkcie Oceanmin znajdziesz tutaj ➡️
          http://www.youtube.com/watch?v=5QlcEGaOX0g&t
        </p>
      </div>
      <div class="post">
        <!-- <h1>post trzeci</h1> -->
        <!-- <img src="@/assets/postonadwadzecd.jpg" alt="postpic"> -->
        <p>
          Z poprzedniego postu wiemy już, że #odwodnienie😰 może być
          przyczyną przyrostu masy ciała.
          Przyjrzyjmy się dokładniej temu tematowi🧐
          Mylenie głodu z pragnieniem to idealna podstawa do tycia😬.
          Często jest tak, że nasz układ pokarmowy nie strawił jeszcze
          poprzedniego posiłku🥗, a my zamiast nawodnić organizm,
          dostarczamy mu kolejną porcję jedzenia.
          Oprócz przybierania na wadzę może to powodować zgagę🥵,
          niestrawność czy powstawanie gazów.
          Wiemy już, że 80% toksyn rozpuszcza się w wodzie i z wodą
          jest wyprowadzanych z naszego organizmu💧
          Jeżeli nie pijemy odpowiedniej ilości #wody💦 nie jesteśmy w
          stanie wyprowadzić wszystkich toksyn, które z biegiem lat mogą
          się magazynować w naszych tkankach🧠 powodując wzrost masy ciała.
          Kumulowanie się toksyn💣 powoduje zatruwanie organizmu,
          a to zaś brak energii😴 i chęci do życia.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400&display=swap');

.home {
  h1 {
    width: 100%;
    background-color: #262626;
    padding: 5vh 0;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  background-color: #1c1e21;
  height: 100%;
  width: 100%;
  //  padding: 0 15% 0 15%;
  color: #0DB3D9;
  display: flex;
  flex-flow: column;
  align-items: center;

  #posts {
    display: flex;
    flex-flow: column;
    width: 60vw;

    .post {
      width: 100%;
      height: 90vh;
      background-color: #262626;
      margin: 3vh 0;
      border-radius: 40px;
      padding: 5% 5%;

      img {
        max-height: 100%;
        max-width: 100%;
      }

      p {
        color: white;
        font-family: 'Fredoka', sans-serif;
        font-weight: 400;
      }
    }
  }
}</style>
