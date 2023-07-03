function fibs(num, fibArr = [0, 1]) {
    for(let i=2; i < num;i++){
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
  }
  return fibArr
   
}

function fibsRec(num,i=2,fibArr = [0, 1]){
    if(fibArr.length == num){
        console.log("fibArr: ",fibArr) 
        console.log("done");
        return fibArr}
        fibArr[i] = (fibArr[i-1] + fibArr[i - 2] )     
       fibsRec(num,i+1, fibArr)    
}

console.log(fibsRec(8));