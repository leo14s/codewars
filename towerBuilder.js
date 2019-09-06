function towerBuilder(nFloors) {
  const array = new Array(nFloors);

  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      array[i] = "*";
    } else {
      array[i] = array[i - 1] + "**";
      for (let j = i; j > 0; j--) {
        array[j - 1] = " " + array[j - 1] + " ";
      }
    }
  }
  return array;
}

towerBuilder(5);
