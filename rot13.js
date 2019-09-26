/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the
 * letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar
 * cipher.
 * Create a function that takes a string and returns the string ciphered with
 * Rot13. If there are numbers or special characters included in the string,
 * they should be returned as they are. Only letters from the latin/english
 * alphabet should be shifted, like in the original Rot13 "implementation".
 */

// ABCDEFGHIJKLMNOPQRSTUVXYWZ

function rot13(message) {
  return message
    .split("")
    .map(letter => {
      let unicode = letter.charCodeAt(0);

      if (unicode >= 65 && unicode <= 90) {
        unicode = unicode + 13;
        if (unicode > 90) {
          unicode = unicode - 91 + 65;
        }
      }
      if (unicode >= 97 && unicode <= 122) {
        unicode = unicode + 13;
        if (unicode > 122) {
          unicode = unicode - 123 + 97;
        }
      }

      return String.fromCharCode(unicode);
    })
    .join("");
}

console.log(rot13("TEST"));
