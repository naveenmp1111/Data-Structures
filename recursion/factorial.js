function factorial(n){
    if(n<2){
        return n
    }
    return n * factorial(n-1)
}
console.log('fatorial of 5 is :')
console.log(factorial(5))