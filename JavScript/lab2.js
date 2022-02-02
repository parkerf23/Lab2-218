function modifyInfo() {
    document.getElementById("check").innerHTML = "Wow it changed!"
}

function checkNumber() {
    let numBer = document.getElementById("myInput").value;
    if (isNaN(numBer) || numBer < 10 || numBer > 20) {
        text = "Input is not valid!";
    } else {
        text = "Input valid!";
    }
    document.getElementById("check2").innerHTML = text;
}

