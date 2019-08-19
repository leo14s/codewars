function MyfindOdd(A) {
  const resp = A.find((number, index, array) => {
    if (array.lastIndexOf(number) == array.indexOf(number)) {
      return number;
    }
    const quantidade = array.filter((e, i) => {
      if (!(i == index)) {
        return e == number;
      }
    });

    if (quantidade.length > 0 && quantidade.length % 2 == 0) {
      return number;
    }
  });
  return resp;
}

MyfindOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);

const findOdd = xs => xs.reduce((a, b) => a ^ b);
//https://www.codewars.com/kata/reviews/56257b1427e918467e000174/groups/562b3fdcd9377354db00002b
