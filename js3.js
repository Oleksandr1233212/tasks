//Дано число. Ȃеревірте, парне воно чи ні.

function oddoreven(number){
    if(number%2===0){
        return 'Число парне'
    }
    else{
        return 'Число не парне'
    }
}
console.log(oddoreven(32))