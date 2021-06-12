import java.util.HashMap;
import java.util.Map;

public class Array_Intersection{
    public static void printIntersection(int[] arr1, int[] arr2){
        //Store the elements of arr1 with their frequency in Hash Table
        Map<Integer,Integer> map = new HashMap<>();

        for(int val: arr1){
            int count = map.containsKey(val) ? map.get(val) : 0;
            map.put(val,count + 1);
        }

        //Check for the elements in arr2 which are already present in arr1
        for(int val: arr2){
            if(map.containsKey(val)){
                int freq = map.get(val);
                if(freq > 0){
                    System.out.print(val + " ");
                    map.put(val,freq - 1);
                }
            }
        }
        
        

    }
    
    public static void main(String[] args){
        int[] arr1 = {1,4,5,2,2,3,6,5,3,2};
        int[] arr2 = {2,3,2,6,6,5,1};

        printIntersection(arr1,arr2);
    }
}