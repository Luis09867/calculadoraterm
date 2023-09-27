var formulario = document.forms.gennermonto
var resultado = document.getElementById("gennermonto")
 
formulario.tiempo.oninput = calcularAV

formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV



function calcularAV() { 
  let v = parseFloat(formulario.monto.value)
  let n = parseFloat(formulario.tiempo.value)
  let i = parseFloat((formulario.interes.value)/100)
 
  
  let total = v*((i*(((1+i)**n)))/(((1+i)**n)-1))
  resultado.innerHTML = total.toFixed(2)

}
       





