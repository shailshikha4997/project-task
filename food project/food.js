function goodfood() {
    var box = document.getElementById("result").value
    var x = document.getElementById("s1")
    for (var i = 0; i < x.options.length; i++) {
        box.value += parseInt(x.options)
    }

}