async function teste1(): Promise<string> {
  await sleep(5000);
  return "leno";
}

function teste2() {
  return "leo";
}

async function executar() {
  const nome1 = await teste1();
  const nome2 = teste2();

  console.log(nome1, nome2);
}
executar();

async function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
