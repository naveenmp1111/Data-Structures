let arr=[3,7,9,-2,8,-4]
let swapped
do{
    swapped=false
for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1]){
        let temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        swapped=true
    }
}
}while(swapped)

console.log(arr)

//big-O => O(n^2)