var result = new Object()
var result2 = new Object()
var result3 = new Object()
var allResult = new Object()

var total = []


function listboxresult() {

    // var spanResult = parseInt(document.getElementById("result").value)
    // spanResult = 0;
    var x = document.getElementById("dnr");
    // console.log(x)
    document.getElementById("dnr").multiple = true;

    var values = [];
    var keys = [];
    for (var option of document.getElementById('dnr').options) {
        if (option.selected) {
            values.push(option.value);
            keys.push(option.text);
            result = Object.assign.apply({}, keys.map((v, i) => ({
                [v]: values[i]
            })))
        }
    }
    // allResult = {...result}
    console.log(result)
    console.log(values)


    var x = document.getElementById("");
    // console.log(x)
    document.getElementById("lnch").multiple = true;

    var values = [];
    var keys = [];
    for (var option of document.getElementById('lnch').options) {
        if (option.selected) {
            values.push(option.value);
            keys.push(option.text);
            result2 = Object.assign.apply({}, keys.map((v, i) => ({
                [v]: values[i]
            })))
        }
    }
    console.log(result2)
    console.log(values)


    var x = document.getElementById("");

    document.getElementById("gft").multiple = true;

    var values = [];
    var keys = [];
    for (var option of document.getElementById('gft').options) {
        if (option.selected) {
            values.push(option.value);
            keys.push(option.text);
            result3 = Object.assign.apply({}, keys.map((v, i) => ({
                [v]: values[i]
            })))
        }
    }
    console.log(result3)
    console.log(values)



    // total = [...result, ...result2, ...result3]
    //console.log(total)
}
// console.log(allResult)


//document.getElementById("btn1").addEventListener("submit", listboxresult)