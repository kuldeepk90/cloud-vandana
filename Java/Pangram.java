import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase();

        boolean isPangram = isPangram(sentence);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        Set<Character> letters = new HashSet<>();

        for (char c : sentence.toCharArray()) {
            if (Character.isLetter(c)) {
                char lowercaseChar = Character.toLowerCase(c);
                letters.add(lowercaseChar);
            }
        }

        for (char c = 'a'; c <= 'z'; c++) {
            if (!letters.contains(c)) {
                return false;
            }
        }

        return true;
    }
}
