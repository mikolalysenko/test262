// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A9_T1;
 * @section: 7.9, 12.6.1;
 * @assertion: Check Do-While Statement for automatic semicolon insertion;
 * @description: Execute do { \n }while(false);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A9_T1",

path: "TestCases/07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A9_T1.js",

assertion: "Check Do-While Statement for automatic semicolon insertion",

description: "Execute do { \\n }while(false)",

test: function testcase() {
   //CHECK#1
do {  
} while (false)

 }
});

