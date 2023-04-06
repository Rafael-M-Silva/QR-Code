const btn = document.querySelector("#btn")

btn.addEventListener("click", ()=> {
    const link = document.querySelector("#link").value
    const img = document.querySelector("#qr-code")

    let url = `http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=250x250`
    
    if(link.length == 0) {
        url = `https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=250x250`

        img.setAttribute('src', `${url}`)
        alert("Digite um valor valido!")
    }else {
        img.setAttribute('src', `${url}`)
    }
})
