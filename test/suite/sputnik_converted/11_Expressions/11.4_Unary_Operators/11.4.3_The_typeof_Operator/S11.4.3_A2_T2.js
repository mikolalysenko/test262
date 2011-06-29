// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.3_A2_T2;
* @section: 11.4.3;
* @assertion: Operator "typeof" uses GetValue;
* @description: If GetBase(x) is null, return "undefined";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.3_A2_T2",

path: "TestCases/11_Expressions/11.4_Unary_Operators/11.4.3_The_typeof_Operator/S11.4.3_A2_T2.js",

assertion: "Operator \"typeof\" uses GetValue",

description: "If GetBase(x) is null, return \"undefined\"",

test: function testcase() {
   //CHECK#1
if (typeof x !== "undefined") {
  $ERROR('#1: typeof x === "undefined". Actual: ' + (typeof x));
}

 }
});

