import java.util.Scanner;

public class Task3_Pangram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a String: ");
        String s = scanner.nextLine();
        boolean isPangram = checkPangram(s);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkPangram(String s) {
        s = s.toLowerCase();
        boolean[] alphabetPresent = new boolean[26];
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c >= 'a' && c <= 'z') {
                alphabetPresent[c - 'a'] = true;
            }
        }
        for (boolean isPresent : alphabetPresent) {
            if (!isPresent) {
                return false;
            }
        }

        return true;
    }
}
