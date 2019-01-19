/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function turnArry(someStr) {

    let anyArray =[];
    for(let i = 0; i < someStr.length; i++) {
        anyArray.push(someStr.charAt(i));
    }

return anyArray;
}



function substring(someStr, startIndex, endIndex) {

     if(typeof someStr==='string'|| someStr instanceof String){
      
     someStr=turnArry(someStr);
    let slicedit = someStr.slice(startIndex, endIndex);
     console.log(slicedit);

     }
     else{
throw `${someStr} =Input Incorrect`;
     }
}


substring("hello", 0,3);
substring(2,3,4);



