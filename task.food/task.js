function food() {
    var input = document.getElementsByName("foodmenu");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            total += parseFloat(input[i].value);
        }
    }
    // document.getElementById("total").value = "total amount =" + total.toFixed(2);
}

function total() {
    var input = document.getElementsByName("foodmenu");
    var totalSun = 0;
    var prodName = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            totalSun += parseFloat(input[i].value);
            prodName += input[i].id + " " + parseFloat(input[i].value) + "   ";
        }
    }
    document.getElementById("total").value = prodName + "   total amount =" + totalSun.toFixed(2);
}