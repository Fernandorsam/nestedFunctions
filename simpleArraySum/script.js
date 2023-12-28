function simpleArraySum(...ar) {
  // Write your code here
 
  let res =0
  for (let index = 0; index < ar.length; index++) {
   
    res += ar[index]
    
  }
  return res;
}
 console.log(simpleArraySum(1,2,3,4,10))
