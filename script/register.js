function getdata(e) {
    e.preventDefault()

    let form = document.getElementById("form")
    let number = form.number.value

    form.number.value = null


    let pass = form.password.value

    form.password.value = null

    let rec = form.rec.value

    console.log(number, pass, rec)
    alert(" Registeration Successfully !")
}