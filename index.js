const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const outputEl = document.getElementById("output-el")

function primeFactorsOf(x, y = [], z = 2) {
  if (x % z == 0) {
    y.push(z)
    x /= z
    return primeFactorsOf(x,y,z)
  } else if (x > 1) {
    z += (z === 2 ? 1 : 2)
    return primeFactorsOf(x,y,z)
  } else {
    return y
  }
}

btnEl.addEventListener("click", function(){
  let y = primeFactorsOf(Number(inputEl.value))
  let factors = "["
  for (let i=0;i<y.length-1;i++){
    factors += y[i] + ", "
  }
  factors += y[y.length-1]+"]"
  outputEl.innerHTML = factors
})