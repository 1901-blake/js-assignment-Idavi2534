/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/


let imanArr=[1,2,3,4,5,6,7,8,9];

function spliceElement(someArr, index) {
    
    result = someArr.filter(item => item !== index)
  console.log(result);
}

spliceElement(imanArr,5);
