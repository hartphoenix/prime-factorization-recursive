const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const outputEl = document.getElementById("output-el")

function primeFactorsOf(x, y = null, z = 2) {
  if (y === null) {y = []}
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

function uniques(array) {
  let list = [];
  for (let item of array) {
    if (!list.includes(item)) {
      list.push(item);
    }
  }
  return list;
}

function bracket(y) {
  let brackExp = "["
  for (let i=0;i<y.length-1;i++){
    brackExp += y[i] + ", "
  }
  brackExp += y[y.length-1]+"]"
  return brackExp
}

btnEl.addEventListener("click", function(){
  let rawFactors = primeFactorsOf(Number(inputEl.value))
  outputEl.innerHTML = `Raw Factors: ${bracket(rawFactors)}<br>
                        Uniques: ${bracket(uniques(rawFactors))}`
})