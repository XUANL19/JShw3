// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 

function reverseNumber(num) {
    let str = String(num);
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return Number(res);
}
console.log(reverseNumber(32243));    



// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const isPalindrome = (str) => {
    let str1 = str.toLowerCase().split(" ").join("");
    str2 = str1.split("").reverse().join("");
    return str1 === str2;
}
console.log(isPalindrome("nurses run")); 



// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
const combinations = (str) => {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        let j = i;
        while (j >= 0) {
            res.push(str.slice(j, i + 1));
            j--;
        }
    }
    return res.join(", ");
}
console.log(combinations("dog"));



// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
const sortString = (str) => {
    return str.split("").sort().join("");
}
console.log(sortString("webmaster"));



// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
const capitalize = (str) => {
    let res = str.split(" ");
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i][0].toUpperCase() + res[i].slice(1);
    }
    return res.join(" ");
}
console.log(capitalize("the quick brown fox"));



// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
const longestWord = (str) => {
    let maxLength = 0;
    let maxIndex = 0;
    let wordArray = str.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length;
            maxIndex = i;
        }
    }
    return wordArray[maxIndex];
}
console.log(longestWord("Web Development Tutorial"));



// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
const countVowels = (str) => {
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("The quick brown fox"));



// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < (num / 2) + 1; i++) {
        if (!(num % i)) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(4));



// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const getType = (arg) => {
    return typeof arg;
}
console.log(getType({}));
console.log(getType(() => { }));
console.log(getType(undefined));
console.log(getType(null));                 // typeof null returns "object" instead of "null"



// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
const identityMatrix = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push([]);
        for (let j = 0; j < n; j++) {
            if (i === j) {
                res[i].push(1);
            } else {
                res[i].push(0);
            }
        }
    }
    return res;
}
console.log(identityMatrix(5));



// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
const secondLowestGreatest = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b);
    return `${sortedArr[1]}, ${sortedArr[sortedArr.length - 2]}`;
}
console.log(secondLowestGreatest([1, 2, 3, 4, 5]));



// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (!(num % i)) {
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfect(6));



// 13. Write a JavaScript function to compute the factors of a positive integer. 
const factors = (num) => {
    let res = [];
    for (let i = 1; i <= num; i++) {
        if (!(num % i)) {
            res.push(i);
        }
    }
    return res;
}
console.log(factors(2));



// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
const amountToCoins = (amount, coins) => {
    let res = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            res.push(coins[i]);
            amount -= coins[i];
        }
    }
    return res;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));



// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
const exponent = (b, n) => {
    return b ** n;
}
console.log(exponent(2, 3));



// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
const uniqueChars = (str) => {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (!res.includes(str[i])) {
            res.push(str[i]);
        }
    }
    return res.join("");
}
console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"));



// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
const occurrences = (str) => {
    let res = {};
    for (let i = 0; i < str.length; i++) {
        res[str[i]] = (res[str[i]] || 0) + 1;
    }
    return res;
}
console.log(occurrences("aaaaabbbbbcccc"));



// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
const binarySearch = (arr, val) => {
    arr.sort((x, y) => x - y);
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (arr[mid] !== val && start <= end) {
        if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return arr[mid] === val ? mid : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3));



// 19. Write a JavaScript function that returns array elements larger than a number. 
const largerThan = (arr, num) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(largerThan([1, 2, 3, 4, 5], 3));



// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const randomString = (length) => {
    let res = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}
console.log(randomString(5));



// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function getSubsets(array, subsetLength) {
    const result = [];
  
    function generateSubsets(startIndex, subset) {
      if (subset.length === subsetLength) {
        result.push(subset.slice());
        return;
      }
  
      for (let i = startIndex; i < array.length; i++) {
        subset.push(array[i]);
        generateSubsets(i + 1, subset);
        subset.pop();
      }
    }
  
    generateSubsets(0, []);
    return result;
  }
console.log(getSubsets([1, 2, 3, 4, 5], 3));



// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
const occurrencesOfLetter = (str, letter) => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            res++;
        }
    }
    return res;
}
console.log(occurrencesOfLetter("microsoft.com", "o"));



// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
const firstNotRepeated = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
}
console.log(firstNotRepeated("abacddbec"));



// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
const bubbleSort = (arr) => {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] > arr[i]) {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
                swapped = true;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));



// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
const longestCountryName = (arr) => {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > res.length) {
            res = arr[i];
        }
    }
    return res;
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));



// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
const longestSubstring = (str) => {
    let res = "";
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (temp.indexOf(str[i]) === -1) {
            temp += str[i];
        } else {
            if (temp.length > res.length) {
                res = temp;
            }
            temp = str[i];
        }
    }
    return res;
}
console.log(longestSubstring("google.com"));



// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
const longestPalindrome = (s) => {
    let maxLen = 1;
    let begin = 0;
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(true));

    for (let i = n - 1; i >= 0; i--) {
      for (let j = i + 1; j < n; j++) {
        dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
        if (dp[i][j] && j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          begin = i;
        }
      }
    }

    return s.slice(begin, begin + maxLen);
}
console.log(longestPalindrome("abracadabra"));



// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
const func = (func) => {
    return func;
}
console.log(func(func));



// 29. Write a JavaScript function to get the function name. 
const funcName = (func) => {
    return func.name;
}
console.log(funcName(funcName));
