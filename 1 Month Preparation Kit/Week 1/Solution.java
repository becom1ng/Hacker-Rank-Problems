// ! There appears to be bugs in multiple languages for this problem, so it was worked with Java 7.
// ? With two inputs, XOR is true if and only if the inputs differ (one is true, one is false).

// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
// Debug the given function strings_xor to find the XOR of the two given strings appropriately.
// ! Note: You can modify at most three lines in the given code and you cannot add or remove lines to the code.

// Input Format
// The input consists of two lines. The first line of the input contains the first string, s
// and the second line contains the second string, t.

// Output Format
// Print the string obtained by the XOR of the two input strings in a single line.

// Sample Input
// 10101
// 00101
// Sample Output
// 10000

// import java.util.*;

public class Solution {

    public static String stringsXOR(String s, String t) {
        String res = new String("");
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == t.charAt(i))
                res += "0";
            else
                res += "1";
        }
        return res;
    }

    public static void main(String[] args) {
        String s, t;
        // Scanner in = new Scanner(System.in); // Commented out to prevent closure error
        s = "10101";
        t = "00101";
        System.out.println(stringsXOR(s, t));
    }
}
