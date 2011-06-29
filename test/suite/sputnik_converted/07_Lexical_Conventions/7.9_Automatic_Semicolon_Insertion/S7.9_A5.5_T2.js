// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A5.5_T2;
 * @section: 7.9, 12.4, 11.2.5;
 * @assertion: Check Function Expression for automatic semicolon insertion;
 * @description: Try use function f(o) {o.x = 1; return o;}; \n (new Object()).x; construction;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A5.5_T2",

path: "TestCases/07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A5.5_T2.js",

assertion: "Check Function Expression for automatic semicolon insertion",

description: "Try use function f(o) {o.x = 1; return o;}; \\n (new Object()).x; construction",

test: function testcase() {
   //CHECK#1
var result = function f(o) {o.x = 1; return o;};
(new Object()).x;
if (typeof result !== "function") {
  $ERROR('#1: Check Function Expression for automatic semicolon insertion');
}

 }
});

