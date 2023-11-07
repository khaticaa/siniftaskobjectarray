 const mikasa={
Name: "Mikasa",
boy: 1.64,
ceki:56,
bk: function(){
    return this.ceki/(this.boy**2)
}
}
console.log(mikasa.bk())

// hesablari bir arrayda saxla(verilecek);
// 50-300 arasi  -15 %, diger hallarda 20%;
// baxshilari hesabliyib bir arraya yig;
// umumi odenecek meblegleri bir arraya yig
let bills = [22, 2995, 176, 440, 37, 105, 10, 1100, 86, 52];
const money = (pul) => {
    let tips = [];
    let totals = [];
    for (let i = 0; i < pul.length; i++) {
        if (pul[i] > 50 ** pul[i] <= 300) {
            totals.push(pul[i] * 0.15)
            tips.push(pul[i] + (pul[i] + 0.15))

        }
        else {
            totals.push(pul[i] * 0.2)
            tips.push(pul[i] + (pul[i] + 0.2))
        }
    }

    // totalsin ortalamasi
let s=0
for( let i =0 ; i< totals.length;i++){
  s=s+totals[i];
}
 let avarage=s/totals.length

    return [tips, totals,avarage]
}
console.log(money(bills));