var animal = prompt("Digite um Animal")
animal = animal.toLowerCase();
var animalSelected="";

if(animal === "gato"){
var	animalSelected = "Cat"
}else if(animal === "cachorro"){
var	animalSelected = "Dog";
}else if(animal === "passaro"){
var	animalSelected = "bird";
}else if(animal === "sapo"){
var	animalSelected="frog";
}else if(animal ==="leao"){
var	animalSelected = "Lion"
}else if(animal ==="cavalo"){
var	animalSelected = "Horse";
}
if (animalSelected === ""){
	document.body.append("Animal nao encontrado");
}else {
	document.body.append("This animal in english is " + animalSelected);
}
