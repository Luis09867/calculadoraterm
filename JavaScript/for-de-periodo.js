var formulario = document.forms.periodo
var resultado = document.getElementById("periodo")
 


formulario.renta.oninput = calcularAV
formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() { 
  let r = parseFloat(formulario.renta.value)
 
  let i = parseFloat((formulario.interes.value)/100)
  let v = parseFloat(formulario.monto.value)
  
  let total = (((Math.log(r))-(Math.log(r-(i*v))))/(Math.log(1+i)))
  resultado.innerHTML = total.toFixed(2)

}
       





