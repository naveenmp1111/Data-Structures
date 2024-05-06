function prime(n){
    let flag=0
    if(n<2){
        return false
    }
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            flag=1
            break;
        }
    }
    if(flag==0){
        return true
    }else{
        return false
    }
}

console.log(prime(4))

//Big-O - O(sqrt(n))