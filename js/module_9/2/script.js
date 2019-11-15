/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

  const refs = {
    inputs: document.querySelectorAll('input'),
    add: document.querySelector('.container'),
    result: document.querySelector('.result')
  };
 

console.log(refs.inputs);


const calc = () => {
  return refs.result.textContent = Number(refs.inputs[0].value) + Number(refs.inputs[1].value);
}

refs.add.addEventListener('click', calc);