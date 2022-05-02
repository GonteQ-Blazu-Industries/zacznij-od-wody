<template>
    <div class="water-parameters-wrapper">
        <div class="content">
            <h1>
                Jakie są parametry wody?
            </h1>
        </div>
        <div class="text" id="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
                vulputate nisi,
                fringilla vulputate quam tempor a. Phasellus dignissim luctus elit
                eu dictum. Mauris
                metus dolor, feugiat ut orci at, tincidunt hendrerit ante. In sed
                porttitor nisi.
                Fusce elementum sed nunc id malesuada. Suspendisse felis sem, dictum
                sit amet quam
                sed, luctus tincidunt ex. Nam vel mauris dolor. Nam eget ante id
                tellus vulputate
                laoreet. Duis mollis vestibulum elementum. Cras non tellus lacus.
                Cras mattis posuere
                ante varius tincidunt. Vestibulum egestas a diam eu lobortis.</p>

            <p>Cras eu elementum magna, quis rutrum nibh. Vestibulum ante ipsum
                primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Maecenas dolor
                nulla, aliquam sed
                porttitor at, dictum eu tortor. Nunc fermentum est vitae vehicula
                ullamcorper. In
                pulvinar tempor enim, et placerat justo varius ac. Phasellus cursus
                commodo blandit.
                Nullam vitae dolor at est scelerisque tincidunt et non magna. Quisque
                 ullamcorper justo
                eget augue fermentum, sed ornare neque egestas. Sed at diam ac magna
                 ultricies luctus eu
                sit amet sapien.</p>

            <p>Aliquam quis lorem lectus. Vestibulum ac sapien fringilla, hendrerit
                nisl et, posuere dui.
                Nulla semper nulla sit amet convallis viverra. Sed a facilisis justo,
                 nec sodales odio.
                Praesent tempus a nibh sit amet mattis. Donec sit amet sapien vehicula,
                pellentesque orci a,
                 cursus eros. Cras vitae egestas nunc, dignissim scelerisque lectus.
                 Donec sapien diam,
                 pulvinar vel augue vel, congue tincidunt turpis. Nulla mattis nibh
                  ligula, fringilla feugiat
                 dolor dictum id. Fusce sit amet porta purus, et varius quam. Sed
                 imperdiet, tortor eget egestas
                  rhoncus, nulla eros aliquam massa, sit amet iaculis dolor urna vel
                   arcu. Curabitur id vulputate
                  orci, sit amet sodales felis. Vivamus et egestas nisi. Curabitur
                  interdum dui vitae ipsum pulvinar
                   maximus. Suspendisse fringilla accumsan libero sed vestibulum. Nam
                   ultrices eleifend ex id
                   convallis.</p>

            <p>Donec ullamcorper porta ante sit amet fermentum. Nam volutpat condimentum
                auctor. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Pellentesque vestibulum enim ut
                egestas pharetra. Vestibulum
                sollicitudin augue massa, vitae bibendum mauris aliquet ut. Donec et mauris
                mauris. Donec dictum metus
                 mauris, cursus faucibus sem sagittis nec. Aenean ut blandit sapien.</p>

            <p>Quisque sodales felis vel sem porttitor sodales. In faucibus iaculis placerat.
                Mauris iaculis pulvinar
                 ex eget vehicula. Ut ante sapien, pellentesque vitae volutpat quis, varius sed
                 leo. Mauris elementum
                 dapibus convallis. Vivamus sit amet arcu urna. Pellentesque vestibulum, mauris
                 a tincidunt mattis,
                 orci velit rutrum elit, aliquet interdum lorem elit facilisis sem. Nam sed quam
                 massa. Maecenas
                 vestibulum tellus augue, sit amet dignissim magna faucibus blandit. Proin et velit
                 lorem.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WaterParameters',
};
</script>

<style lang="scss" scoped>
    .water-parameters-wrapper{
        height: 100vh;
        width: 100%;
        background-color: #4c4c4c;
        padding-top: 10vh;
        text-align: center;
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
            }
        }
    }
    @media only screen and (max-width: 1450px){
        .water-parameters-wrapper{
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
        .water-parameters-wrapper{
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
        .water-parameters-wrapper{
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
