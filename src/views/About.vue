<template>
  <div class='about'>
      <div id="about-container">
        <h1>
          O stronie
        </h1>
        <p>
          Strona poświęcona tematyce związanej z utrzymaniem dobrego zdrowia,
        urody, kondycji,
         samopoczucia, regulacji wagi,
         kondycji psychicznej itp., gdzie główną rolę, w tych zagadnieniach odgrywa żywa woda.
         </p>
         </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang='scss' scoped>
  .about{
    #about-container{
      // padding-left: 15vw;
      // padding-right: 15vw;
      color: #262626;
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
  }
    @media only screen and (max-width: 400px) {
      .about {
        #about-container{
          h1{
            font-size: 40px;
          }
          p{
            font-size: 15px;
          }
        }
      }
    }
</style>
