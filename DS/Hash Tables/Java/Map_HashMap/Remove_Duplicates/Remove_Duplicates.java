import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class Remove_Duplicates {

    public static ArrayList<Integer> Remove_Duplicate(int[] numbers) {
        // Put all the numbers into a HashMap
        // If an element is already in the HashSet, then don't add it to the Arraylist
        ArrayList<Integer> output = new ArrayList<>();
        Set<Integer> map = new HashSet<>();

        for (int val : numbers) {
            if (!map.contains(val)) {
                output.add(val);
            }
            map.add(val);
        }
        return output;
    }

    public static void main(String[] args) {
        int[] numbers = { 1, 3, 2, 2, 3, 1, 6, 2, 5 };

        ArrayList<Integer> output = Remove_Duplicate(numbers);

        System.out.println(output);
    }

}