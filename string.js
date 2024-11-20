let str = " JavaScript is fun. Learn JavaScript! ";

// 1. Convert the string to lowercase
str = str.toLowerCase();
console.log(str); 

// 2. Remove leading and trailing whitespace
str = str.trim();
console.log(str);  

// 3. Replace all occurrences of "JavaScript" with "JS"
str = str.replaceAll("javascript", "JS");
console.log(str); 

// 4. Convert the string to uppercase
str = str.toUpperCase();
console.log(str);  

// 5. Replace the word "JavaScript" with "JS" using .split() and .join()
let originalStr = " JavaScript is fun. Learn JavaScript! ";
originalStr = originalStr.split("JavaScript").join("JS");
console.log(originalStr); 

// 6. Concatenate " Let's code!" to the string
originalStr = originalStr + " Let's code!";
console.log(originalStr);  

// 7. Repeat the final string twice
originalStr = originalStr.repeat(2);
console.log(originalStr);  
