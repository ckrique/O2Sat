var alterna = 1;
setInterval(updateComponents, 2000);

function updateComponents() {    
    //if (alterna == 1) {
    //    document.getElementById("pValorSaturacao").innerHTML = "29.6%";
    //    document.getElementById("divRectangle").style.backgroundColor = "green";
    //    alterna = 2;
    //}
    //else if (alterna == 2) {
    //    document.getElementById("pValorSaturacao").innerHTML = "21.8%";
    //    document.getElementById("divRectangle").style.backgroundColor = "orange";
    //    alterna = 1;
    //}
       
    var person = new Object();
    //person.name = "Nome";
    //person.surname = "Sobrenome";
    $.post('http://localhost:55000/api/Values', function (data) {
        console.log(data);

        var saturationValue = data.split("|")[0];
        var fanExhaustorState = data.split("|")[1];

        document.getElementById("pValorSaturacao").innerHTML = saturationValue;
        document.getElementById("divRectangle").style.backgroundColor = (fanExhaustorState == "ON") ? "green" : "orange";
    });

}

