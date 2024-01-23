<!-- eslint-disable max-len -->
<template>
    <div class="newsletter-view-wrapper">
        <h1>Zapisz się bezpłatnie na kurs z wiedzą, która poprawiła zdrowie tysiącom osób w Polsce!</h1>
        <form accept-charset="UTF-8" action="https://mail.pawelbilski.pl/subscribe.php" method="POST">
            <div id="sqm-liveform" data-enhance="false"
                style="border-width: 0px; border-radius: 20px; background: rgb(242, 242, 242); border-color: rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 20px; border-style: solid;">
                <div class="sqm-description"
                    style="margin-bottom: 20px; width: 100%; float: none; padding-right: 0px; display: none;">
                    <p>Exemplary description</p>
                </div>
                <div class="sqm-form" style="float: none; width: 100%;">
                    <div class="sqm-fields" style="float: none;">
                        <div class="sqm-form-group" style="margin: 20px 0px; display: block;"><label for="sqm-femail"
                                style="width: inherit;">Adres E-mail</label><input type="text" name="email"
                                class="form-control sqm-textinput" id="sqm-femail" value="" data-placeholder="Adres E-mail"
                                placeholder="Adres E-mail"
                                onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; "
                                onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "
                                style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block; height: 40px;padding-left: 10px;">
                        </div>
                        <div class="sqm-form-group" style="margin: 20px 0px; display: block;"><label for="sqm-ffname"
                                style="width: inherit;">Imię</label><input type="text" name="fname"
                                class="form-control sqm-textinput" id="sqm-ffname" value="" data-placeholder="Imię"
                                placeholder="Imię"
                                onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; "
                                onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "
                                style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block; height: 40px;padding-left: 10px;">
                        </div>
                        <div class="sqm-form-group" style="margin: 20px 0px; display: block;"><label
                                style="width: inherit;">Płeć</label>
                            <div class="radio radio-info" style="display: flex;width: 100%;gap: 1rem;"><input
                                    class="sqm-textinput" id="sqm-rsex0" value="kobieta" name="sex" type="radio"
                                    onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; "
                                    onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "
                                    style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); height: 20px;"><label
                                    for="sqm-rsex0" style="width: inherit;">kobieta</label></div>
                            <div class="radio radio-info" style="display:flex;width: 100%;gap: 1rem;"><input
                                    class="sqm-textinput" id="sqm-rsex1" value="mężczyzna" name="sex" type="radio"
                                    onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; "
                                    onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "
                                    style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181);height: 20px;"><label
                                    for="sqm-rsex1" style="width: inherit;">mężczyzna</label></div>
                        </div>
                        <div class="form-group" style="margin: 10px 0;">
                            <div class="checkbox checkbox-info hyphens"><label for="sqm-policy"
                                    style="display: table-row; width: inherit;"><input type="checkbox" id="sqm-policy"
                                        name="policy" value="1" style="display:table-cell;"><span
                                        style="display:table-cell;padding-left:5px;">Oświadczam, że zapoznałem/am się i
                                        akceptuję
                                        <a href="https://zacznijodwody.pl/#/polityka-prywatnosci"
                                            style="color: rgb(63, 81, 181);">politykę prywatności</a></span></label><input
                                    type="hidden" name="policyReq" value="1"></div>
                        </div>
                    </div>
                    <div id="sqm-coregister" style="display: none;">
                        <h5 id="sqm-coregister-text">Sign me also to the following lists:</h5>
                    </div>
                    <div id="sqm-submit-box" style="width: 100%; text-align: left; float: none;">
                        <div id="sqm-submit1" class="sqm-form-group form-group"
                            style="margin: 20px 0px; text-align: center; display: block;"><input type="submit"
                                class="sqm-submit" id="sqm-submit" value="Zapisz się"
                                style="border-style: solid; background: rgb(63, 81, 181); color: rgb(255, 255, 255); border-color: rgb(102, 181, 240); border-width: 0px; border-radius: 15px; padding: 7px 25px; margin: 0px; font-size: 16px;"
                                onmouseover="this.style.backgroundColor = '#98c8eb';"
                                onmouseout="this.style.backgroundColor = '#3f51b5';"></div>

                    </div>
                </div>
                <div style="clear: both;"></div>
            </div><input type="hidden" name="mlid" value="9" />
            <input type="hidden" name="req" value="email:fname:sex" />
            <input type="hidden" name="token" value="f002da69d81e5ed96ea36779afdb1482c0426c8c" />
            <input type="hidden" name="coregister" value="" />

        </form>
    </div>
</template>

<script>
export default {
    name: 'NewsletterView',
};
</script>

<style lang="scss" scoped>
.newsletter-view-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1399ee;
    gap: 3rem;

    h1 {
        color: white;
        font-size: 4rem;
        width: 60%;
        text-align: center;
        font-family: 'Barlow', sans-serif;
    }

    form {
        font-family: 'Barlow', sans-serif;
    }
}
</style>
