function binarysearch(target){
    let arr=[10,20,30,40,50,60]
    let leftindex=0
    let rightindex=arr.length-1
    while(leftindex<rightindex){
        let middle=Math.floor((leftindex+rightindex)/2)
        if(target==arr[middle]){
            return middle
        }
        if(target>arr[middle]){
            leftindex=middle+1
        }else{
            rightindex=middle-1
        }
    }
    return -1
}
console.log('Index is :')
console.log(binarysearch(30))