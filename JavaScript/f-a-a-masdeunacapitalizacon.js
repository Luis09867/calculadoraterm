var formulario = document.forms.anualidadesadelantadas
var resultado = document.getElementById("anualidades_adelantadas")
 
formulario.tiempo.oninput = calcularAV

formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.capitalizacion.oninput = calcularAV


function calcularAV() { 
  let r = parseFloat(formulario.renta.value)
  let n = parseFloat(formulario.tiempo.value)
  let j = parseFloat((formulario.interes.value)/100)
  let m = parseFloat(formulario.capitalizacion.value)

  const primera= r*(((1+(j/m)))**m)
  const segunda= ((((1+(j/m)))**(m*n))-1)/(j/m)
  const tercera= ((j/m))/((((1+(j/m)))**m)-1)

const total = (primera*segunda)*tercera

  resultado.innerHTML = total.toFixed(2)

}
       





