import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Maximum_Frequency_Number {

    public static int max_frequency(int[] numbers) {

        // HashMap to store the frequency of all the numbers
        Map<Integer, Integer> map = new HashMap<>();

        for (int val : numbers) {
            int count = map.containsKey(val) ? map.get(val) : 0;
            map.put(val, count + 1);
        }

        int key = numbers[0]; // To store the keys 
        int max = 0; // To compare the values

        for (int val : numbers) {
            if (map.get(val) > max) {
                max = map.get(val);
                key = val;
            }
        }

        System.out.println(map);
        return key;

    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int arrSize = scan.nextInt();
        int[] numbers = new int[arrSize];

        for (int i = 0; i < arrSize; i++) {
            numbers[i] = scan.nextInt();
        }

        int output = max_frequency(numbers);
        System.out.println(output);
    }
}
