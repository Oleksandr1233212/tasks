function chek(symb){
    return 'aeiou'.includes(symb);
}
function chekword(word1){
    if(word1.length >= 2){
        const word2=word1[word1.length-1]
        word2.toLowerCase()
        if(chek(word2)){
            return word1[word1.length-2];
        }
    }
    return
   

    
}
const word1 = 'кабачокa'
const chekwor=chekword(word1);
if(chekwor){
    console.log('Голосна. Остання буква: '+word1[word1.length-2]);
}
else{
    console.log('Приголосна')
}