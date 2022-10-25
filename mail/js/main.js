// chiedo l'email all'utente
const userEmail = prompt ("inserisci la tua email");
console.log( userEmail)
// creo un array con le email approvate
const approvedEmail = ["pippo@gmail.com", "franco@gmail.com", "roberto@gmail.com"]
console.log( approvedEmail)
// creo un ciclo dove controlla se l'email inserita e' tra quella approvate
let pippo=false;
for (let index = 0; index < approvedEmail.length; index++) {
    const verifiedEmail = approvedEmail[index];
    
    if(verifiedEmail===userEmail){
        pippo=true
    }
    // se verifiedEmail===userEmail mi ritorna vero
    // invece se verifiedEmail non e' === useremail mi ritorna falso
}
if(pippo===true){
    alert("u welcome")
    
}else{
    alert("non e' l'indirizzo email corretto prego inserirne un'altro")
}






