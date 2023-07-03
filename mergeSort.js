// first split the array into 2 until the 


function mergeSort(wholeArr){
    let length = wholeArr.length;
    if(length <= 1) return;

    let middle = length / 2;
    let leftArr = new Array(middle)
    let rightArr = new Array(length - middle)

    let i = 0; //left array
    let r = 0; //right array

    for(; i < length; i++){
        if(i < middle){
            leftArr[i] = wholeArr[i]
        }
        else {
            rightArr[r] = wholeArr[i];
            r++
        }
    }
    mergeSort(leftArr)
    mergeSort(rightArr)
    merge(leftArr, rightArr, wholeArr)
}

function merge(leftArr, rightArr, wholeArr){
    let leftSize = wholeArr.length / 2;
    let rightSize = wholeArr.length - leftSize;
    let i =0 , l=0, r = 0; //indices

    while(l < leftSize && r < rightSize){
        if(leftArr[l] < rightArr[r]){
            wholeArr[i] = leftArr[l];
            i++;
            l++;
        } else {
            wholeArr[i] = rightArr[r];
            i++
            r++
        }
    }
    while(l < leftSize){
        wholeArr[i] = leftArr[l];
        i++;
        l++;
    }
    while(r < rightSize){
        wholeArr[i] = rightArr[r];
        i++;
        r++;
    }
}
let array = [1,5,6,9,0,2,3,5]
mergeSort(array)
console.log(array)
