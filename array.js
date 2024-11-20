const colors = ["red", "blue", "green", "yellow", "purple"];

// // 1. Print the length of the array
console.log(colors.length); 

// 2. Convert the array into a single string
const colorsString = colors.join(" ");
console.log(colorsString); 

// 3. Get the third element (index 2) of the array
console.log(colors[2]); 

// // 4. Combine all elements into a string separated by dashes (-)
const colorsDash = colors.join("-");
console.log(colorsDash); 

// // 5. Remove the last element of the array and print the updated array
colors.pop();
console.log(colors); 

// // 6. Add "orange" to the end of the array and print the updated array
colors.push("orange");
console.log(colors); 

