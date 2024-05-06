function fibonacci(n){
    if(n<2){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log('element in the nt position of fibonacci series is :')
console.log(fibonacci(5)) 