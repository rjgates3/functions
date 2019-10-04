'use strict';

let arr =[0, 1, 0, 1, 1, 1, 0, 0, 1];

//iteratively sort the above array
/*

step 1
i = 0 value = 0 nextvalue = 1:
don't swap arr = [0, 1, 0, 1, 1, 1, 0, 0, 1]
call sortArr with arr and i += 1 -> i = 1

step 2
i = 1 value = 1, nextvalue = 0:
do swapt arr = [0, 0, 1, 1, 1, 1, 0, 0, 1]
question; Do we know that arr[1] >= arr[0]
go back and test
----- forward progress -> i = 2(swapped i = 1 to i = 2) ---- How do we get this in?
call sortArr with i -= 1 -> i = 0

step 3
i = 0 value = 0 nextvalue = 1:
don't swap arr = [0, 0, 1, 1, 1, 1, 0, 0, 1]
call sortArr with i += 1 -> i = 1

step f4 -- with forward progress we could skip this step --
i = 1 value = 0 nextvalue = 1
don't swap arr = [0, 0, 1, 1, 1, 1, 0, 0, 1]
call sortAtt with i += 1 -> i = 2

step f5
i = 2 value = 1 nextvalue = 1;
don't swap arr = [0, 0, 1, 1, 1, 1, 0, 0, 1]
call sortArr with i += 1 -> i = 3

step 6
i = 3 value = 1 next value = 1;
don't swap arr = [0, 0, 1, 1, 1, 1, 0, 0, 1]
call sortArr with i += 1 -> i = 4

step 7 
i = 4 value =1 nextvalue = 1
don't swap arr = [0, 0, 1, 1, 1, 1, 0, 0, 1]
call sortArr with i += 1 -> i = 5

step 8
i = 5 value = 1 nextvalue = 0
do swap arr = [0, 0, 1, 1, 1, 0, 1 0, 1]
question; Do we know that arr[5] >= arr[4]
go back and test
----- forward progress -> i = 6 (swapped i = 5 to i = 6) ---- How do we get this in?
call sortArr with i -= 1 -> i = 4

step 9
i = 4 value = 1 nextvalue = 0
do swap arr = [0, 0, 1, 1, 0, 1, 1, 0, 1]
question; Do we know that arr[4] >= arr[3]
go back and test
----- forward progress -> i = 5 ---- How do we get this in?
call sortArr with i -= 1 -> i = 3

step 10
i = 3 value = 1 nextvalue = 0
do swap arr = [0, 0, 1, 0, 1, 1, 1 0, 1]
question; Do we know that arr[4] >= arr[3]
go back and test
----- forward progress -> i = 5 ---- How do we get this in?
call sortArr with i -= 1 -> i = 2

step 11
i = 2 value = 1 nextvalue = 0
do swap arr = [0, 0, 0, 1, 1, 1, 1, 0, 1]
question; Do we know that arr[3] >= arr[2]
go back and test
----- forward progress -> i = 5 ---- How do we get this in?
call sortArr with i -= 1 -> i = 1

step 12
i = 1 value = 0 nextvalue = 0
------  it would be nice to call forward progress here ----
don't swap arr = [0, 0, 0, 1, 1, 1, 1, 0, 1]
call sortArr with i += 1 -> i = 2

step f13 i += 1 -> i = 3
step f14 i += 1 -> i = 4
step f15 i += 1 -> i = 5
step f16 i += 1 -> i = 6

step 17 (finally back to the value when we took a 0 back then forward)
i = 7 value = 1 next value = 0
do swap arr = [0, 0, 0, 1, 1, 1, 0, 1, 1]
--forward progress i = 8 (swapped i =7 to i =8) ----

next steps are moving 0 backwards
step 18 i = 6 swapp arr = [0, 0, 0, 1, 1, 0, 1, 1, 1]
step 19 i = 5 swapp arr = [0, 0, 0, 1, 0, 1, 1, 1, 1]
step 20 i = 4 swapp arr = [0, 0, 0, 0, 1, 1, 1, 1, 1]
step 21 i = 3  don't swapp arr = [0, 0, 0, 0, 1, 1, 1, 1, 1]

next steps are moving back to our forward progress

step f22 i = 4
step f23 i = 5
step f24 i = 6
step f25 i = 7
step f26 i = 8

step 27
i = 8 value = 
1 nextvalue = 1
don't swap arr = [0, 0, 0, 0, 1, 1, 1, 1, 1]
call sortArr with i += 1 -> i = 9

*/

let counter = 0;

const sortArr = (arr, i=0) => {
    //base case
    if(i >= arr.length - 1) {
        return arr;
    }
    //update the counter
    counter ++;
    console.log(`Step: ${counter}, i=${i} arr=${arr}`)
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
            sortArr(arr, i+1);
        }
        //case when i is > 0 and can -1
        else {
            sortArr(arr, i-1);
        }
    }
    else {
        //don't swap, recursively call sortArr with i + 1
        sortArr(arr, i+1);
    }
};

// sortArr(arr); //26 steps vs predicted 27 steps becasue function breaks out at i = length - 1

let arr2 = [9,2,7,8,3,3,4,6,1,5,0]

sortArr(arr2);