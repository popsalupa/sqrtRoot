'use strict';
// ax^2+bx+c=0
// discrim D=b^2-4ac
// if D>0 (2sqrt) (-b + Math.sqrt(d) )/(2*a) и (-b - Math.sqrt(d) )/(2*a).
// if D=0 (1sqrt) -b/(2*a)
// if D<0 (NO sqrt)
function solveEquation() {
let a = +prompt('a');
let b = +prompt('b');
let c = +prompt('c');
  if (a == 0)
    return false;
   let result = {};
   let D = Math.pow(b, 2) - 4 * a * c;
  console.log ('D= '+D);
    if (D > 0) {
      let arr = [];
      arr.push((-b + Math.sqrt(D) )/(2*a));
      arr.push((-b - Math.sqrt(D) )/(2*a));
      result['sqrtRoot'] = arr;
    }
  else if (D == 0)
    result['sqrtRoot'] = (-b/(2*a));
  else if (D < 0)
    return false;
  result['discrimin'] = D;
return result;
  
}
console.log (solveEquation());