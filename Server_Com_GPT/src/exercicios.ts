const dados = [3, 12, 5, 20, 8, 15];

function filtrarNumeros(numeros: number[]): number[] {
  let maiores: number[] = [];

    for(let i = 0; i<numeros.length; i++){
        if(numeros[i] > 10){
            maiores.push(numeros[i])
        }
    }
    return maiores;
}

console.log(filtrarNumeros(dados));

function somarMaiores(numeros: number[]): number{
    let maiores = filtrarNumeros(numeros);
    let resultado = maiores.reduce((acc:number, m: number) => acc + m, 0);

    return resultado;
}

console.log(somarMaiores(dados));

function filtrarMediaMaiores(numeros: number[]): number{
    let maiores = filtrarNumeros(numeros); 

    if (maiores.length === 0){
        return 0;
    }

    let soma = maiores.reduce((acc:number, m: number) => acc + m, 0);

    return soma / maiores.length;
}

console.log(filtrarMediaMaiores(dados));