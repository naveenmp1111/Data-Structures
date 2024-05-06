let arr=[3,7,9,-2,8,-4]
for(let i=1;i<arr.length;i++){
    let j=i-1;
    let elementToInsert=arr[i]
    while(j>=0 && arr[j]<elementToInsert){
        arr[j+1]=arr[j]
        j=j-1
    }
    arr[j+1]=elementToInsert
}
console.log(arr)