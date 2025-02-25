function calcularSaldo(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

let vitorias = 21;
let derrotas = 10;
let rank = calcularSaldo(vitorias, derrotas)
let saldo = calcularSaldo(vitorias, derrotas);

if(saldo < 10){
    saldo = "Ferro"
}else if(saldo <= 20){
    saldo = "Bronze"
}else if(saldo <= 50){
    saldo = "Prata"
}else if(saldo <= 80){
    saldo = "Ouro"
}else if(saldo <= 90){
    saldo = "Diamante"
}else if(saldo <= 100){
    saldo = "Lendario"
}else{
    saldo = "Imortal"
}

console.log("O Herói tem saldo " + rank + " está no nivel " + saldo );
