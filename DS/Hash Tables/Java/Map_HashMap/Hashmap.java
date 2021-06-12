
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Hashmap {
    public static void main(String[] args) {

        // Key : Value Pair
        // Key : Employee Number (Integer)
        // Value : Name (String)

        Map<Integer, String> map = new HashMap<>();

        map.put(1, "Mosh");
        map.put(2, "John");
        map.put(3, "Mary");

        System.out.println(map);

        // Iterate
        Set<Integer> keys = map.keySet();// map.keySet() returns a set of all the keys
        for (int key : keys)
            System.out.print(key + " ");
    }
}