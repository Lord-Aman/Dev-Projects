import java.util.Map;
import java.util.HashMap;

public class FindChar{
    public static char findFirstNonRepeatingCharacter(String str){
        Map<Character,Integer> map = new HashMap<>();

        var chars = str.toCharArray();

        for(var ch: chars){
            var count = map.containsKey(ch) ? map.get(ch) : 0; //map.get(ch) returns the value at ch
            map.put(ch,count + 1);
        }
        for(var ch : chars){
            if(map.get(ch) == 1){
                return ch;       
            }
        }

        //In case there isn't any non repeating character
        return Character.MIN_VALUE;

    }
    
    public static void main(String[] args){
        String str = "a green apple";
        var ch = findFirstNonRepeatingCharacter(str);
        System.out.println(ch);
        
    }
}