let arr=[3,7,9,-2,8,-4]

function quicksort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let leftarr=[]
    let rightarr=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftarr.push(arr[i])
        }else{
            rightarr.push(arr[i])
        }
    }
    return [...quicksort(leftarr),pivot,...quicksort(rightarr)]
}

console.log(quicksort(arr))