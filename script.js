const text = [
"Python Full Stack Developer",
"Backend Developer",
"AI Enthusiast",
"Machine Learning Developer"
];

let index = 0;
let char = 0;

function typeEffect(){

const typing = document.getElementById("typing");

if(char < text[index].length){

typing.innerHTML += text[index].charAt(char);

char++;

setTimeout(typeEffect,100);

}else{

setTimeout(() => {

typing.innerHTML = "";

char = 0;

index++;

if(index === text.length){
index = 0;
}

typeEffect();

},1500);
}
}

typeEffect();