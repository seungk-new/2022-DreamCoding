// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
//선언되지 않은 변수 할당, 기존에 존재하는 프로토타입 변경 등.. 방지하기 위해 use strict(ecma strict5에 선언되어 있음)
'use strict';

// 2. Variable, rw(read and write)
// let (added in ES 6)
let globalName = 'global name'
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var(don't ever use this!)
// var hoisting (movw declaration from bottom to top)
// has no block scope

{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible
// only use let if variable needs to chagne
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data tpyes: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values; infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // template string(literals) : 문자열에 변수를 포함시킬 때, 직관적이고 편하게 사용하기 위한 기능

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// bolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: $ ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects(주어진 식별자에 상관없이 고유한 식별자를 가짐)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1==gSymbol2);
console.log(`value ${symbol1.description}, type: ${typeof symbol1}`); // Symbol은 .description 안 붙이면 에러남(symbole의 value인 id를 string으로 전환할 수 없기 때문)

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value ${text}, type: ${typeof text}`);
text = 1;
console.log(`value ${text}, type: ${typeof text}`);
text = 7 + '5';
console.log(`value ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value ${text}, type: ${typeof text}`);


