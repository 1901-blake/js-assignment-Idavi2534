/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */


function bubbleSort(numArray) {
 
    let numSwap;
    do{
        numSwap =false;
        for(let i=0; i< numArray.length-1; i++){
            if(numArray[i] > numArray[i+1]){
                let x=numArray[i];
                numArray[i]=numArray[i+1];
                numArray[i+1]=x;
                numSwap=true;
            }
        }

    }while(numSwap);
  
}

let bubbleArray=[33,4,6,7676,324,42,5435,65,32,3343];
bubbleSort(bubbleArray);
console.log(bubbleArray);