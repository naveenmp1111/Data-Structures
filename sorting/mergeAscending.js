function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    // console.log('$$$$$$$$$$$$$')
    // console.log((mergeSort(leftArr)))
    console.log('*********')
    // console.log(mergeSort(rightArr))
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    console.log('---------')
    console.log(leftArr)
    console.log('<<<<<<<<<<<<')
    console.log(rightArr)
    console.log('>>>>>>>>>')
    const sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    // console.log([...sortedArr,...leftArr,...rightArr])
    // console.log('^^^^^^^^^^^^^^^^^^')
    return [...sortedArr,...leftArr,...rightArr]
}

let arr=[3,7,9,-2,8,-4]
console.log(mergeSort(arr))