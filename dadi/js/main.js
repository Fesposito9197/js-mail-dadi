// dado giocatore
let playerDice = Math.floor(Math.random() * 6) + 1;
console.log(playerDice)
// dado cpu
let cpuDice = Math.floor(Math.random() * 6) + 1;
console.log(cpuDice)
// condizione in cui vince il giocatore
if(playerDice > cpuDice){
    alert("hai vinto!!!!!!!!!!")

}else if (playerDice < cpuDice){
    alert("il computer ha vinto!!!!!!!!!!!!")
}else{
    alert("tenta un altro tiro")
}


