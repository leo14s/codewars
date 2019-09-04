/**
 *
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 *
 */
function validParentheses(parens) {
  if (parens.charAt(0) == ")") {
    return false;
  }

  if (parens.charAt(parens.length) == "(") {
    return false;
  }

  let total = 0;
  let valido = true;
  parens.split("").forEach(char => {
    char == "(" ? (total += 1) : (total -= 1);
    if (total < 0) {
      valido = false;
    }
  });

  if (total == 0 && valido) {
    return true;
  } else {
    return false;
  }
}
console.log(validParentheses("()))((()"));

/**
 * function validParentheses(parens){
 *  var re = /\(\)/;
 *  while (re.test(parens)) parens = parens.replace(re, "");
 *  return !parens;
 *}
 */
