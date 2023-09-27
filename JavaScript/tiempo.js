var formulario = document.forms.tiemporeantas
var resultado = document.getElementById("tiemporenta")
 


formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.monto.oninput = calcularAV


function calcularAV() { 
  let r = parseFloat(formulario.renta.value)
  let i = parseFloat((formulario.interes.value)/100)
  let s = parseFloat(formulario.monto.value)
  
  let total = ((Math.log10((s*i)+r))-Math.log10(r))/Math.log10(1+i)
  resultado.innerHTML = total.toFixed(2)

}
       





