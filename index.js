function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de ranqueadas
  const saldoVitorias = vitorias - derrotas;

  // Determina o nível do jogador com base no saldo de vitórias
  let nivel;
  if (saldoVitorias < 10) {
      nivel = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
      nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
      nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
      nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
      nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
      nivel = "Lendário";
  } else {
      nivel = "Imortal";
  }

  // Retorna a mensagem
  return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Usando o metodo Math.random para gerar condições aleátorias
const vitorias = Math.floor(Math.random() * 200);
const derrotas = Math.floor(Math.random() * 100);
console.log(calcularNivel(vitorias, derrotas));




