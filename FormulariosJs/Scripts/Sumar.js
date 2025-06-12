var btnSumar = document.getElementById("btnSumar");
btnSumar.onclick = function () {

    var num1 = document.getElementById("txtnum1").value * 1;
    var num2 = document.getElementById("txtnum2").value * 1;
    var suma = num1 + num2;

    document.getElementById("lblRespuesta").innerHTML = "La suma es:" + suma;
}

var btnClear = document.getElementById("btnClear");
btnClear.onclick = function () {

        document.getElementById("txtnum1").value = "";
        document.getElementById("txtnum2").value = "";
        document.getElementById("lblRespuesta").innerHTML = "";
    }
