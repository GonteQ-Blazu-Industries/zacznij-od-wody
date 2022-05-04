<template>
    <footer>
        <a href="https://pawelbilski.pl/" target="_blank">
            <img src="@/assets/webpage.svg"
            alt="webpage icon"
            class='icons'
            loading='lazy'
            decoding='async'
            width='50'
            height='50'>
        </a>
        <a href="tel:+48509714295" target="_blank">
            <img src="@/assets/phone.svg"
            alt="phone icon"
            class='icons'
            loading='lazy'
            decoding='async'
            width='50'
            height='50'>
        </a>
        <a href="mailto:pabil@interia.pl" target="_blank">
            <img src="@/assets/email.svg"
            alt="email icon"
            class='icons'
            loading='lazy'
            decoding='async'
            width='50'
            height='50'>
        </a>
        <a href="https://www.messenger.com/t/100000518911924" target="_blank">
        <img src="@/assets/messenger.svg"
            alt="messenger icon"
            class='icons'
            loading='lazy'
            decoding='async'
            width='50'
            height='50'>
            </a>
    </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
};
</script>

<style lang='scss' scoped>
    footer{
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content:space-between;
        align-items: center;
        // justify-content: center;
        // background-color: #262626;
        // position: absolute;
        // bottom: 0;
        a{
            // height: 100%;
            width: 25%;
            display: flex;
            justify-content: center;
            text-decoration: none;
            color: #F2F2F2;
            :visited{
                text-decoration: none;
                color: #F2F2F2;
            }
            .icons{
                filter: invert(99%)
                sepia(1%)
                saturate(0%)
                hue-rotate(96deg)
                brightness(105%)
                contrast(100%);
            }
        }
    }
    @media only screen and(max-width: 1024px){
        footer{
            a{
                img{
                    height: 35px;
                    width: 35px;
                }
            }
        }
    }
    @media only screen and(max-width: 768px){
        footer{
            a{
                img{
                    height: 25px;
                    width: 25px;
                }
            }
        }
    }
</style>
