function compareTriplets(a,b) {

  let pontosAlice = 0;
  let pontosBob = 0;

  for (let index = 0; index < 3; index++) {

    if(a[index] > b[index]){

      pontosAlice++;

    }else if(a[index] < b[index]){

      pontosBob++;
    }

  }
    return[pontosAlice , pontosBob];

  }
  const classificacaoAlice = [2,5,1];
  const classificacaoBob = [4,5,2];

  const pontos = compareTriplets(classificacaoAlice ,classificacaoBob);

  console.log(`pontuação de Alice = ${pontos[0]} 
pontuação de Bob = ${pontos[1]}`);



 

