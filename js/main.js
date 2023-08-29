function resolverStolfi() {
  let numInt = document.querySelector("#numInt").value;
  let nStolfi = Number(document.querySelector("#nStolfi").value);
  let result = document.querySelector("#result");
  let sum = 0;
  if (numInt == "" || nStolfi == "") {
    result.innerHTML = `Preencha todos os campos`;
    result.style.color = "red";
  } else {
    const numbers = numInt.split("").map(Number);
    for (const element of numbers) {
      sum += element;
    }
    if (sum % nStolfi == numbers[0]) {
      result.innerHTML = `${numInt} é um número de ${nStolfi}-Stolfi`;
      result.style.color = "green";
      result.style.transition = "transform 500ms ease";
      result.style.transform = "scale(1.3)";
    } else {
      result.innerHTML = `${numInt} não é um número de ${nStolfi}-Stolfi`;
      result.style.color = "red";
      result.style.transition = "transform 500ms ease";
      result.style.transform = "scale(1.3)";
    }
  }
}
