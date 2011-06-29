// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A8_T4;
 * @section: 7.9, 12.4;
 * @assertion: Check Empty Statement for automatic semicolon insertion;
 * @description: Checking if execution of some semicolons with LineTerminators and numbers passes;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A8_T4",

path: "TestCases/07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A8_T4.js",

assertion: "Check Empty Statement for automatic semicolon insertion",

description: "Checking if execution of some semicolons with LineTerminators and numbers passes",

test: function testcase() {
   //CHECK#1
;1;
;1
;1;
;1

 }
});

