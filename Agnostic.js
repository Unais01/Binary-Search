// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [10,5,4,3,0];

let target = 0;
let start = 0;
let end = arr.length-1;
let ans = BinarySearch(arr, target,start,end);
console.log(ans);



//Binary Search Function
function BinarySearch(array, targetF,start,end) {
   

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let isAsc = arr[start] < arr[end];
        if (array[mid] == targetF) {
            return mid;
        }

        if (isAsc==true) {
            if (targetF < array[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }  //For Descending
        else {
            if (targetF > array[mid]) {
                end = mid -1;
            }
            else {
                start = mid + 1;
            }

        }

    }
    return -1;
}