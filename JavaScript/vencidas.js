var formulario = document.forms.vencidas
var resultado = document.getElementById("vencidas")
 
formulario.tiempo.oninput = calcularAV

formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() { 
  let r = parseFloat(formulario.renta.value)
  let n = parseFloat(formulario.tiempo.value)
  let i = parseFloat((formulario.interes.value)/100)
  
  let total = ((((1+i)**n)-1)/i)*r
  resultado.innerHTML = total.toFixed(2)

}
       





