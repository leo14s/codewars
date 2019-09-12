function longestConsec(strarr, k) {
  return (
    strarr
      .map(word => ({
        tamanho: word.length,
        palavra: word
      }))
      .sort((a, b) => {
        if (a.tamanho < b.tamanho) {
          return -1;
        }
        if (a.tamanho > b.tamanho) {
          return 1;
        }
        return 0;
      })
      //.reverse()
      .slice(-k)
      .reduce(function(longest, obj) {
        return longest + obj.palavra;
      }, "")
  );
}

longestConsec(
  [
    "itvayloxrp",
    "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    "wkppqsztdkmvcuwvereiupccauycnjutlv"
  ],
  2
);
