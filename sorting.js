'use strict';

let arr =[0, 1, 0, 1, 1, 1, 0, 0, 1];
let arr2 = [9,2,7,8,3,3,4,6,1,5,0];

//sorts an array using recursion
const sortArr = (arr, i=0, counter=0) => {
    //base case
    if(i >= arr.length - 1) {
        return arr;
    }
    //update the counter
    counter ++;
    console.log(`SA: Step: ${counter}, i=${i} arr=${arr}`)
    //sorting code
    let temp;
    if(arr[i] > arr[i + 1]) {
        //do swap
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        //recursivly call sortArr with i - 1
        //case when i is already 0 and cannot -1
        if(i === 0) {
            sortArr(arr, i+1, counter);
        }
        //case when i is > 0 and can -1
        else {
            sortArr(arr, i-1, counter);
        }
    }
    else {
        //don't swap, recursively call sortArr with i + 1
        sortArr(arr, i+1, counter);
    }
};

const forwardProgressSort = (arr, i = 0, forwardProgress = 0, counter=0) => {
    //base case
    if(i >= arr.length - 1) {
        return arr;
    }
    //update the counter
    counter ++;
    console.log(`FPS Step: ${counter}, i=${i}, fp=${forwardProgress}, arr=${arr}`);
    //update forward progress
    if(i >= forwardProgress) {
        forwardProgress = i + 1;
    }
    //sorting code
    let temp;
    if(arr[i] > arr[i + 1]) {
        //do swap
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        //recursivly call sortArr with i - 1
        //case when i is already 0 and cannot -1
        if(i === 0) {
            forwardProgressSort(arr, i+1, forwardProgress, counter);
        }
        //case when i is > 0 and can -1
        else {
            forwardProgressSort(arr, i-1, forwardProgress, counter);
        }
    }
    else {
        //don't swap, recursively call sortArr with i + 1
        forwardProgressSort(arr, forwardProgress, forwardProgress, counter);
    }
};

/* implementing a froward progress variable
reduced sorting arr =[0, 1, 0, 1, 1, 1, 0, 0, 1]
from 26 steps to 17 steps
and arr = [9,2,7,8,3,3,4,6,1,5,0] from
78 steps to 46 steps
*/