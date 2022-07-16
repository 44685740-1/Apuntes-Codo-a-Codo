function CambiarColor() {
    document.getElementById("OnMouseColor").style.backgroundColor ="red";
    
}

function VueltaColor() {
    document.getElementById("OnMouseColor").style.backgroundColor ="#aaa";
    
}

function imprimir() {
    window.print();
}


// hay que usar alt + 96 para las comillas que te permiten usar el $ y que imprima las variables

function sumar() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    var result = parseFloat(a) + parseFloat(b);
    document.getElementById("ResultadoSuma").innerHTML = `<span style= 'color=red'> la resta de ${a} - ${b} = ${result}`;
}