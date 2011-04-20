// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
  * @name: S11.8.4_A3.1_T2.8;
  * @section: 11.8.4;
  * @assertion: If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x >= y returns ToNumber(x) >= ToNumber(y); 
  * @description: Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Boolean (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.4_A3.1_T2.8",

path: "11_Expressions\11.8_Relational_Operators\11.8.4_The_Grater_than_or_equal_Operator\S11.8.4_A3.1_T2.8.js",

assertion: "If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x >= y returns ToNumber(x) >= ToNumber(y)",

description: "Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Boolean (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
if (true >= undefined !== false) {
  $ERROR('#1: true >= undefined === false');
}

//CHECK#2
if (undefined >= true !== false) {
  $ERROR('#2: undefined >= true === false');
}

//CHECK#3
if (new Boolean(true) >= undefined !== false) {
  $ERROR('#3: new Boolean(true) >= undefined === false');
}

//CHECK#4
if (undefined >= new Boolean(true) !== false) {
  $ERROR('#4: undefined >= new Boolean(true) === false');
}

 }
});

