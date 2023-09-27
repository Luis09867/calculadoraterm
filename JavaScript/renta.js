var formulario = document.forms.venciadasrenta
var resultado = document.getElementById("venciadasrenta")
 
formulario.tiempo.oninput = calcularAV

formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() { 
  let s = parseFloat(formulario.monto.value)
  let n = parseFloat(formulario.tiempo.value)
  let i = parseFloat((formulario.interes.value)/100)
  
  let total = (i/(((1+i)**n)-1))*s
  resultado.innerHTML = total.toFixed(2)

}
       





