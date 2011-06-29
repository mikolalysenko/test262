// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A5.1_T2;
 * @section: 7.8.4;
 * @assertion: EscapeSequence :: 0;
 * @description: "\u0000";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A5.1_T2",

path: "TestCases/07_Lexical_Conventions/7.8_Literals/7.8.4_String_Literals/S7.8.4_A5.1_T2.js",

assertion: "EscapeSequence :: 0",

description: "\"\\u0000\"",

test: function testcase() {
   //CHECK#1
if ("\u0000" !== "\0") {
  $ERROR('#1: "\\u0000" === "\\0"');
}

 }
});

