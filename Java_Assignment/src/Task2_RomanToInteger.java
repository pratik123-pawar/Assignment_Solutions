import java.util.Scanner;

public class Task2_RomanToInteger {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman number: ");
        String romanNum = scanner.nextLine();
        scanner.close();

        int result = romanToInteger(romanNum);
        System.out.println("Integer representation: " + result);
    }

    public static int romanToInteger(String romanNum) {
        if (romanNum == null || romanNum.length() == 0) {
            return 0;
        }

        int result = 0;
        int prevValue = 0;

        for (int i = romanNum.length() - 1; i >= 0; i--) {
            char currentChar = romanNum.charAt(i);
            int currentValue = mapRomanToInteger(currentChar);

            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    public static int mapRomanToInteger(char romanChar) {
        switch (romanChar) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0; 
        }
    }
}
