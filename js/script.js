const btn = document.querySelector("#btn")


/* gerando o qrCode, tratamento de erro, animação quando o campo está vazio */
function qrCode() {
    let link = document.querySelector("#link")
    let img = document.querySelector("#qr-code")
    let linkValue = link.value
    let url = `http://api.qrserver.com/v1/create-qr-code/?data=${linkValue}&size=250x250`

    if(linkValue.length == 0) {
        url = `https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=250x250`

        link.classList.add('campo_vazio')
        img.setAttribute('src', `${url}`)
    }else {
        img.setAttribute('src', `${url}`)
    }
}


/* chamando a função qrcode  */
btn.addEventListener("click", ()=> {
    qrCode()
})


/* event animationnend remove a animação/class após o termino do evento */
link.addEventListener('animationend', () => {
    link.classList.remove('campo_vazio');
});
