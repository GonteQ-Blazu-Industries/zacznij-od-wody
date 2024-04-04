<template>
    <div class="the-meeting-footer-wrapper">
        <div class="footer-contact-info">
            <a href="tel:+48509714295"><span class="material-icons">phone_iphone</span>509 714 295</a>
            <a href="mailto:pabil@interia.pl"><span class="material-icons">mail</span>pabil@interia.pl</a>
        </div>
        <div class="footer-copyright-info">
            <p>&#169; 2024 zacznijodwody.pl</p>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.the-meeting-footer-wrapper{
    height: 100%;
    background-color: #b0c4b1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    color: #183A37;
    font-family: "Poppins", sans-serif;
    @media only screen and (max-width: 720px) {
        gap: .5rem;
    }
    .footer-contact-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        a{
            text-decoration: none;
            color: #183A37;
            font-family: 'Poppins', sans-serif;
            display: flex;
            gap: .7rem;
            align-items: center;
            justify-content: center;
            @media only screen and (max-width: 720px) {
                font-size: .7rem;
            }
        }
    }
    .footer-copyright-info{
        p{
            @media only screen and (max-width: 720px) {
                font-size: .7rem;
            }
        }
    }
}
</style>
