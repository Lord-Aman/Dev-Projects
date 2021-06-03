import java.util.Set;
import java.util.HashSet;

public class FindChar{
    public static char findFirstRepeatedCharacter(String str){
        Set<Character> set = new HashSet<>();

        for(var ch: str.toCharArray()){
            if(set.contains(ch)) //If it founds an element which is already added, 
                return ch;// then, it simply returns that character.

            set.add(ch); // It adds every unique element in the set
        }

        return Character.MIN_VALUE; //In case, there is no any repeated Character
    }
    
    public static void main(String[] args){
        String str = "green apple";

        char ch = findFirstRepeatedCharacter(str);
        System.out.println(ch);
    }
}