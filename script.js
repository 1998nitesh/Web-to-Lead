captchaChecked = false;

function beforeSubmit(event) {
    if(captchaChecked){
        let outputDate = document.querySelector(".outputDate");
        let inputDate = document.querySelector(".inputDate");
        console.log("Input Lead Date from Form:",inputDate.value);

        let formatedDate = new Date(inputDate.value).toLocaleDateString("en-US");
        outputDate.value = formatedDate;

        console.log("Output Lead Date from JS:",outputDate.value);
    } else {
        alert("Please check the reCAPTCHA box to subit the lead");
        event.preventDefault();
    }
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500);

function captchaSuccess() {
    captchaChecked = true;
}