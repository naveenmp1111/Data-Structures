function binarySearch(target){
    let arr=[10,20,30,40,50]
    return search(target,arr,0,arr.length-1)
}

function search(target,arr,leftindex,rightindex){
    if(leftindex>rightindex){
        return -1
    }
    let middle=Math.floor((leftindex+rightindex)/2)
    if(arr[middle]==target){
        return middle
    }else if(target>arr[middle]){
        return search(target,arr,middle+1,rightindex)
    }else{
        return search(target,arr,leftindex,middle+1)
    }
}
console.log('index is:')
console.log(binarySearch(50))
