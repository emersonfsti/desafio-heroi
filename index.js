/*
    # Desafio Classificador de nível de Herói
*/
let nomeHeroi = "Superman";
let xpHeroi = 0; // Exemplo de XP inicial

// Laço for que itera 21 vezes (de 0 a 20)
for (let index = 0; index < 21; index++) {
  xpHeroi += 500; // Incrementa a XP em 500 a cada iteração

  switch (true) {
    // Se XP for menor do que 1.000 = Ferro
    case xpHeroi <= 1000:
      console.log(
        "O Herói de nome " +
          nomeHeroi +
          " está no nível de Ferro (" +
          xpHeroi +
          "xp)"
      );
      break;

    // Se XP for entre 1.001 e 2.000 = Bronze
    case xpHeroi >= 1001 && xpHeroi <= 2000:
      console.log(
        "O Herói de nome " +
          nomeHeroi +
          " está no nível de Bronze (" +
          xpHeroi +
          "xp)"
      );
      break;

    //  Se XP for entre 2.001 e 5.000 = Prata
    case xpHeroi >= 2001 && xpHeroi <= 5000:
      console.log(
        "O Herói de nome " +
          nomeHeroi +
          " está no nível de Prata (" +
          xpHeroi +
          "xp)"
      );
      break;

    //Se XP for entre 5.001 e 7.000 = Ouro
    case xpHeroi >= 5000 && xpHeroi <= 7000:
      console.log(
        "O Herói de nome " +
          nomeHeroi +
          " está no nível de Ouro (" +
          xpHeroi +
          "xp)"
      );
      break;

    //Se XP for entre 7.001 e 8.000 = Platina
    case xpHeroi >= 7001 && xpHeroi <= 8000:
      console.log(
        "O Herói de nome " +
          nomeHeroi +
          " está no nível de Platina (" +
          xpHeroi +
          "xp)"
      );
      break;

    //Se XP for entre 8.001 e 9.000 = Ascendente
    case xpHeroi >= 8001 && xpHeroi <= 9000:
      console.log(
        "O Herói de nome " +
          nomeHeroi +
          " está no nível de Ascendente (" +
          xpHeroi +
          "xp)"
      );
      break;

    //Se XP for entre 9.001 e 10.000= Imortal
    case xpHeroi >= 9001 && xpHeroi <= 10000:
      console.log(
        "O Herói de nome " +
          nomeHeroi +
          " está no nível de Imortal (" +
          xpHeroi +
          "xp)"
      );
      break;

    //Se XP for maior ou igual a 10.001 = Radiante
    case xpHeroi >= 10001:
      console.log(
        "O Herói de nome " +
          nomeHeroi +
          " está no nível de Radiante (" +
          xpHeroi +
          "xp)"
      );
      break;

    // Caso não se encaixe em nenhuma faixa de XP especificada
    default:
      console.log(
        "Classificação não encontrada para " +
          nomeHeroi +
          " com " +
          xpHeroi +
          "xp)"
      );
      break;
  }
}
