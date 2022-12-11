function square(x){
    return x*y;
}
console.log(square(2));
//or
const a=[1,2,3,4,5];
const square_a=a.map((e)=>square(e))
const odd_a=a.filter((e)=>e%2);

console.log(squatre_a);