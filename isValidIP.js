/**
 * Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
 * IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
 *
 * Input to the function is guaranteed to be a single string.
 *
 * Examples
 * Valid inputs:
 *
 * 1.2.3.4
 * 123.45.67.89
 *
 * Invalid inputs:
 *
 * 1.2.3
 * 1.2.3.4.5
 * 123.456.78.90
 * 123.045.067.089
 * Note that leading zeros (e.g. 01.02.03.04) are considered invalid.
 */

function isValidIP(str) {
  const ip = str.split(".");
  if (ip.length > 4 && ip.length < 4) {
    return false;
  }
  console.log(ip.length);
  const result = ip.some(octet => {
    if (
      octet.charAt(0) == "0" &&
      octet.length > 1 &&
      octet > 255 &&
      Number(octet) == NaN
    ) {
      return true;
    }
  });

  return !result;
}

console.log(isValidIP(""));
