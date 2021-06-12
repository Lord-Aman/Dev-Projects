import java.util.Set;
import java.util.HashSet;


public class Main {
    public static void main(String[] args) {
        // Set stores keys only
        // Set doesn't allow duplicate keys
        Set<Integer> set = new HashSet<>();

        int[] numbers= {1,3,2,2,3,1,6,2,5};

        for(var number : numbers){
            set.add(number);
        }
        System.out.println(set);

    }
}