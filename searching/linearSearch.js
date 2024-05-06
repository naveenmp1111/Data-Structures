function linearSearch(n){
    let arr=[10,44,35,64,23]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n){
           return i
        }
    }return -1
}

console.log('Index is :')
console.log(linearSearch(44))