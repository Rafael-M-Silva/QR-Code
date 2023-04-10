const btn = document.querySelector("#btn")
const menu = document.querySelector(".fa-solid")
const navbar = document.querySelector(".navbar ul")

/* Menu navbar (mobile) */
menu.addEventListener("click", ()=> {

    navbar.classList.toggle("active")
    menu.classList.toggle('fa-x')
})

window.onscroll = () => {
    menu.classList.remove('fa-x')
    navbar.classList.remove('active')
  }

/* gerando o qrCode, tratamento de erro, animação quando o campo está vazio */
function qrCode() {
    let download = document.querySelector(".btn-download")
    let img = document.querySelector("#qr-code")
    let link = document.querySelector("#link")
    let linkValue = link.value
    let url = `http://api.qrserver.com/v1/create-qr-code/?data=${linkValue}&size=250x250`

    if(linkValue.length == 0) {
        url = `https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=250x250`

        link.classList.add('campo_vazio')
        img.setAttribute('src', `${url}`)
        download.classList.remove('download-active')
    }else {
        img.setAttribute('src', `${url}`)
        download.classList.add('download-active')
    }
}
/* gerando o download do qrCode */
function downloadImage() {
    let link = document.querySelector("#link")
    let linkValue = link.value
    let url = `http://api.qrserver.com/v1/create-qr-code/?data=${linkValue}&size=250x250`
    let download = document.querySelector(".btn-download #qr")
    download.setAttribute('href', `${url}`)
}


/* chamando a função qrcode  */
btn.addEventListener("click", ()=> {
    qrCode()
    downloadImage()
})


/* event animationnend remove a animação/class após o termino do evento */
link.addEventListener('animationend', () => {
    link.classList.remove('campo_vazio');
});
