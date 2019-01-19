/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */



function fib(n) {

let first=0;
let second=1;
let next=1;

for(let i=2;i<=n; i++){
    next=first+second;
    first=second;
    second=next;
    console.log(next);
}

 return next;
};

fib(8);






    /*   if(n<=1){
       return 1;
    
   }
  return fib(n-1)+ fib(n-2);
  */

