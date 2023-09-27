var formulario = document.forms.fordeltiemanuladel
var resultado = document.getElementById("fordeltiemanuladel")
 

formulario.monto.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() { 
  let r = parseFloat(formulario.renta.value)
  let s = parseFloat(formulario.monto.value)
  let i = parseFloat((formulario.interes.value)/100)
  
  let total = (((Math.log((s*i+r)*(1+i)))-(Math.log(r*(1+i))))/(Math.log(1+i)))
  resultado.innerHTML = total.toFixed(2)

}
       





