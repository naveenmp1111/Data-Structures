// function power(n){
//     let flag=0
//     for(let i=0;i<n;i++){
//         if(2**i==n){
//             flag=1
//             break;
//         }
//     }
//     if(flag==1){
//         return true
//     }return false
// }

// console.log(power(5))


function power(n){
    if(n<1){
        return false
    }
   while(n>1){
    if(n%2!=0){
        return false
    }
    n=n/2
   }
   return true
}

console.log(power(8))