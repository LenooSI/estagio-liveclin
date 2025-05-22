//Escreva uma função que retorne um objeto que respeite a seguinte interface:
//escreva uma função capaz de converter uma lista de textos em uma lista com somente a ultima letra de cada texto
// escreva uma funçao que receba ABC e retorne um texto no seguinte formato
// O valor de ABC.A é <VALOR DE A> o valor de ABC.B é <VALOR DE B> e as ultimas letras de ABC.C são <LISTA_CONVERTIDA_SOMENTE_COM_ULTIMAS_LETRAS>

export interface ABC {
  A: number;
  B: string;
  C: string[];
}

export function returnObject(): ABC {
  return {
    A: 1,
    B: "abc",
    C: ["a", "b", "1"],
  };
}

export function convertList(texto: string[]): string[] {
  return texto.map(function mapper(el: string): string {
    return el.at(-1)!;
  });
}

export function returnText(abc: ABC): string{
  const abcA = abc.A
  const abcB = abc.B
  const abcC = abc.C
  const coco123 = convertList(abcC)
  return `O valor de ABC.A é ${abcA} o valor de ABC.B é ${abcB} e as ultimas letras de ABC.C são ${coco123}`
}

console.log (returnText(returnObject()))