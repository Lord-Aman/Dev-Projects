import java.util.Set;
import java.util.HashSet;


public class Main {
    public static void main(String[] args) {
        // Set stores keys only
        // Set doesn't allow duplicate keys
        Set<Integer> set = new HashSet<>();

        int[] numbers= {2,3,4,3,2,3,4,5,4,56,6,7,5,5,4,32,3,2,2,1};

        for(var number : numbers){
            set.add(number);
        }
        System.out.println(set);

    }
}