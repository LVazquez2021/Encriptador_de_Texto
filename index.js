const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const munieco = document.querySelector(".container-img");
const msg = document.querySelector(".container-msg");
const parrafo = document.querySelector(".container-parrafo");
const txtResultado = document.querySelector(".txtRdo");
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;


function encriptar()
{

    ocultarAdelante();
    let area = recuperarInfo();
    txtResultado.textContent = encriptarTexto(area);
}

function desencriptar()
{
    ocultarAdelante();
    let area = recuperarInfo();
    txtResultado.textContent = desencriptarTexto(area);
}


function recuperarInfo()
{
    let area = document.querySelector(".area");
    return (area.value);
}

function ocultarAdelante()
{
    munieco.classList.add("ocultar");
    msg.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje)
{
    let texto = mensaje;
    let txtFinal = "";

    for (let i = 0; i < texto.length; i++) {
        let e = texto[i];
        switch (e) {
            case "e":
                e = "enter";
                txtFinal+=e;
                break;
            case "i":
                e = "imes";
                txtFinal+=e;
                break;
            case "a":
                e = "ai";
                txtFinal+=e;
                break;
            case "o":
                e = "ober";
                txtFinal+=e;
                break;
            case "u":
                e = "ufat";
                txtFinal+=e;
                break;
            default:
                txtFinal+=e;  
                break;
        }      
    }
    return txtFinal;
}
function desencriptarTexto(mensaje)
{
    let texto = mensaje;
    let txtFinal = "";

    for (let i = 0; i < texto.length; i++) {
        let e = texto[i];
        switch (e) {
            case "e":
                e = "e";
                txtFinal+=e;
                i=i+4;
                break;
            case "i":
                e = "i";
                txtFinal+=e;
                i=i+3;
                break;
            case "a":
                e = "a";
                txtFinal+=e;
                i=i+1;
                break;
            case "o":
                e = "o";
                txtFinal+=e;
                i=i+3;
                break;
            case "u":
                e = "u";
                txtFinal+=e;
                i=i+3;
                break;
            default:
                txtFinal+=e;  
                break;
        }      
    }
    return txtFinal;
}

function extraerData(){
    let contenido = document.getElementById("txtRes");
    contenido.select();
    document.execCommand("copy");
    alert("¡copiado!");
}

function copiar()
{
     extraerData();   
}



