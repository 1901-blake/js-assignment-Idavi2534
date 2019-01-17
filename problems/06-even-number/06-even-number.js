/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */



function isEven(someNum) {
    if(someNum & 1){
    console.log(`${someNum} is odd`);   
    return false;

    }

    else{
    console.log(`${someNum} is even`);
     return true;
    }
}


isEven(37)
isEven(50);