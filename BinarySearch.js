let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 10;
let ans = BinarySearch(arr, target);
console.log(ans);



//Binary Search Function
function BinarySearch(array, targetF) {
    let start = 0;
    let end = array.length;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (targetF < array[mid]) {
            end = mid - 1;
        }
        else if (targetF > array[mid]) {
            start = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}