String.prototype.replaceAt = function(index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};
function MyduplicateEncode(word) {
  let newString = word.toUpperCase();
  console.log(newString);
  let tamanho = word.length;
  let letra;
  let count = 0;
  for (let i = 0; i < tamanho; i++) {
    letra = word.charAt(i);
    for (let j = 0; j < tamanho; j++) {
      if (letra == word.charAt(j)) {
        count++;
        console.log(`letra ${i}: ${count} vezes`);
      }
    }
    if (count > 1) {
      newString = newString.replaceAt(i, ")");
    } else {
      newString = newString.replaceAt(i, "(");
    }
    count = 0;
  }
  console.log(newString);
}
MyduplicateEncode("aba");

//solução
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function(a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
console.log(duplicateEncode("aba"));
