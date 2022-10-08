let x: unknown = 'hello';

console.log((x as string).length);


let y: unknown = 45;
console.log((y as string).length);

let z: unknown = 'hello';
console.log((<string>z).length);