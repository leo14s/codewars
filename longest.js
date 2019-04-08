function Mylongest(s1, s2) {
    return s1
        .concat(s2)
        .split('')
        .sort()
        .filter(function(el,i,a){
            return i==a.indexOf(el);
        })
        .join('');
}
console.log(Mylongest('cbaa','fed'));



//solucao
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');
console.log(longest('cbaa','fed'));
