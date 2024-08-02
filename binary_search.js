function binarySearch(arr, target) {
    let first=0;
    let last = arr.length - 1;
    while(first <= last){
        let mid = Math.floor((first+last)/2)
        if (target===arr[mid]) return mid
        else if (target<arr[mid]) last = mid - 1
        else first = mid + 1
        
    }
    return -1;
}

const arry = [2,4,5,6,7,8,9]
let target = 10
let result = binarySearch(arry,target)
console.log(result)