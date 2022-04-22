<template>
    <div class="about-me-wrapper">
        <h1>
            O mnie
        </h1>
        <p>
            Zawsze chciałem czegoś więcej niż przeciętność
        </p>
    </div>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style lang="scss" scoped>
    .about-me-wrapper{
      background-color: #262626;
      color: white;
      font-family: 'Courier New', Courier, monospace;
      padding: 10vw;
      text-align: center;
      h1{
        font-size: 60px;
      }
      p{
        font-size: 25px;
      }
    }
    @media only screen and (max-width: 400px) {
      .about-me-wrapper {
          h1{
            font-size: 40px;
          }
          p{
            font-size: 15px;
          }
      }
    }
</style>
