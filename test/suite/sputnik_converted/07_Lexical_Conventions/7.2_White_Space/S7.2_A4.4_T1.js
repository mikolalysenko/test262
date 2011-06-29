// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A4.4_T1;
 * @section: 7.2, 7.4;
 * @assertion: Multi line comment can contain SPACE (U+0020);
 * @description: Use SPACE(\u0020);
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A4.4_T1",

path: "TestCases/07_Lexical_Conventions/7.2_White_Space/S7.2_A4.4_T1.js",

assertion: "Multi line comment can contain SPACE (U+0020)",

description: "Use SPACE(\\u0020)",

test: function testcase() {
   // CHECK#1
eval("/*\u0020 multi line \u0020 comment \u0020*/");

//CHECK#2
var x = 0;
eval("/*\u0020 multi line \u0020 comment \u0020 x = 1;*/");
if (x !== 0) {
  $ERROR('#1: var x = 0; eval("/*\\u0020 multi line \\u0020 comment \\u0020 x = 1;*/"); x === 0. Actual: ' + (x));
}

 }
});

