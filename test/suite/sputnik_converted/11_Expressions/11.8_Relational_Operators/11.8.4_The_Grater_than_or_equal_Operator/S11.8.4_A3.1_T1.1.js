// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
  * @name: S11.8.4_A3.1_T1.1;
  * @section: 11.8.4;
  * @assertion: If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x >= y returns ToNumber(x) >= ToNumber(y); 
  * @description: Type(Primitive(x)) and Type(Primitive(y)) vary between primitive boolean and Boolean object;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.4_A3.1_T1.1",

path: "TestCases/11_Expressions/11.8_Relational_Operators/11.8.4_The_Grater_than_or_equal_Operator/S11.8.4_A3.1_T1.1.js",

assertion: "If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x >= y returns ToNumber(x) >= ToNumber(y)",

description: "Type(Primitive(x)) and Type(Primitive(y)) vary between primitive boolean and Boolean object",

test: function testcase() {
   //CHECK#1
if (true >= true !== true) {
  $ERROR('#1: true >= true === true');
}

//CHECK#2
if (new Boolean(true) >= true !== true) {
  $ERROR('#2: new Boolean(true) >= true === true');
}

//CHECK#3
if (true >= new Boolean(true) !== true) {
  $ERROR('#3: true >= new Boolean(true) === true');
}

//CHECK#4
if (new Boolean(true) >= new Boolean(true) !== true) {
  $ERROR('#4: new Boolean(true) >= new Boolean(true) === true');
}

 }
});

