        // Agnostic Binary Search ==> we don't know that Array is sorted in which order{Ascending or Descending}
class OrderAgnosticBS{
    public static void main(String[] args) {
        // int[]arr = {0,1,2,3,4,5,6,7,8,9,10};  Ascending array
        int []arr={5,4,3,2,1,0};    //Descending Array
        int target = 1;
        int ans = orderAgnosticBs(arr,target);
        System.out.println(ans);
    }



    static int orderAgnosticBs(int []arr , int target){
        int start = 0;
        int end = arr.length-1;
        boolean isAsc=  arr[start]<arr[end];
        
        while(start<=end){
        int mid = (start+end)/2;
        if(arr[mid]==target){
            return mid;
        }
            if(isAsc){

                if(target<arr[mid]){
                    end = mid-1; 
                }
                else {
                    start = mid + 1;
            }
               
            }
            else{
                if(target>arr[mid]){
                    end=mid-1;
                }
                else {
                    start = mid + 1;
                }
            }
         }
    return -1;
         }
    }