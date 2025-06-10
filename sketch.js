// ficção científica, romance de mistério, fantasia, terror

// o senhor dos anéis, 12, ficção científica
// a sombra do vampiro, 14, romance de mistério

// harry potter, 11, fantasia
// o corvo, 12, terror
// o menino do pijama listrado, 12, drama
// a hora da estrela, 12, romance

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("5");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "O senhor dos anéis";
    } else {
      return "harry potter";
    }
  } else {
    return "o menino do pijama listrado";
  }
}





