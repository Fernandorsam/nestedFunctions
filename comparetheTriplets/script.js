function compareTriplets(a,b) {
  //criar 2 variaveis para receber pontuação dos jogadores
  let pontosAlice = 0;
  let pontosBob = 0;

  // inicializar um loop 3 vezes, um para cada categoria[clareza do problema,originalidade,difculdade]
  for (let index = 0; index < 3; index++) {

    // verificar o valor da categoria atual se  a[index] > b[index]
    if(a[index] > b[index]){

      // somar pontuação de Alice
      pontosAlice++;

    // verificar o valor da categoria atual se  a[index] < b[index]
    }else if(a[index] < b[index]){

      // somar pontuação de Bob
      pontosBob++;
    }

    // se a[index] === b[index]  não faz nada
    
  }
    //retornar array contendo os pontos de cada jogador
    return[pontosAlice , pontosBob];

  }
  // criar classificação de cada jogador em uma constante
  const classificacaoAlice = [2,5,1];
  const classificacaoBob = [4,5,2];

  const pontos = compareTriplets(classificacaoAlice ,classificacaoBob);

  console.log(`pontuação de Alice = ${pontos[0]} 
pontuação de Bob = ${pontos[1]}`);



 

