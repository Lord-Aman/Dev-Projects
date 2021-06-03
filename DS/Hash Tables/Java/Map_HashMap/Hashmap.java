import java.util.HashMap;
import java.util.Map;

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

    }
}