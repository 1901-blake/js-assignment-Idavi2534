/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */


function isPalindrome(someStr) {




let stringLength= someStr.length;
let a= Math.floor(stringLength/2);

for (let i=0; i < a; i++){

    if(someStr[i] !== someStr[stringLength-1-i]){
        return false;
    }
}

return true;

}

//isPalindrome('eye');