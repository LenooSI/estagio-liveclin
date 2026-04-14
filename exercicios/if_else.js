let idade = Math.floor(Math.random() *100) +1;
console.log(`Sua idade é ${idade} anos`)

if (idade < 18){
    console.log("Você é criança/ adolescente")
} 
else if(idade < 60 ){
    console.log("Você é adulto")
} 
else{
    console.log("O senhor é idoso")
}