let num1 = Number(prompt("Informe um valor:"));
let num2 = Number(prompt("Informe outro valor:"));

if (num1 === num2) {
    console.log("O número " + num1 + " é igual ao número " + num2);
    alert("O número " + num1 + " é igual ao número " + num2);
}else if(num1 > num2){
    console.log("O número " + num1 + " é maior que o número " + num2);
    alert("O número " + num1 + " é maior que o número " + num2);
}else{
    console.log("O número " + num1 + " é menor que o número " + num2);
    alert("O número " + num1 + " é menor que o número " + num2);
}