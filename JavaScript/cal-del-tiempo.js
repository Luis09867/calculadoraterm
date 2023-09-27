var formulario = document.forms.adelantadas
var resultado = document.getElementById("adelantadas")
 
formulario.tiempo.oninput = calcularAV

formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() { 
  let r = parseFloat(formulario.renta.value)
  let n = parseFloat(formulario.tiempo.value)
  let i = parseFloat((formulario.interes.value)/100)
  
  let total = (((((1 + i )**n)-1)/i)*(1+i))*r
  resultado.innerHTML = total.toFixed(2)

}
       





