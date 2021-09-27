let qrcode = select("img");
let qrtext = select("input");
let qrbutton = select(".item-5");

qrbutton.addEventListener("click", generateQR);

function generateQR() {
    let size = "1000x1000";
    let data = 'UWS,branch,accnum,'+qrtext.value;
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

    let url = `${baseURL}?data=${data}&size${size}&bgcolor=f1f1f1`;

    qrcode.src = url;
}


function select(el) {
    return document.querySelector(el);
}