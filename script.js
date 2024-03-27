function beforeSubmit() {
    let outputDate = document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    console.log("Input Lead Date from Form:",inputDate.value);

    let formatedDate = new Date(inputDate.value).toLocaleDateString("en-US");
    outputDate.value = formatedDate;

    console.log("Output Lead Date from JS:",outputDate.value);

}