function obterMédia() {
    var n1 = parseInt(document.getElementById("n1").value); 
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);

    var média = (n1 + n2 + n3) / 3;
    document.getElementById("resultado").innerHTML = "Resultado: " + média;

}