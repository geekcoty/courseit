function reverseString(str) {
let splitString = str.split("");
let reverseArray = splitString.reverse();
let joinString = reverseArray.join("");

return joinString;
}

