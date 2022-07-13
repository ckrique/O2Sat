var alterna = 1;
setInterval(updateComponents, 2000);

function updateComponents() {        
    $.post('http://localhost:55000/api/Values', function (data) {
        console.log(data);

        var saturationValue = data.split("|")[0];
        var fanExhaustorState = data.split("|")[1];

        document.getElementById("pValorSaturacao").innerHTML = saturationValue;
        document.getElementById("divRectangle").style.backgroundColor = (fanExhaustorState == "ON") ? "green" : "orange";
        document.getElementById("divRectangle").innerHTML = (fanExhaustorState == "ON") ? "LIGADO" : "DESLIGADOR";
    });

}

