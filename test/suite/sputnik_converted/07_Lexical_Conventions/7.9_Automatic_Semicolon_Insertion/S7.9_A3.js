// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A3;
 * @section: 7.9, 12.9;
 * @assertion: Check Return Statement for automatic semicolon insertion;
 * @description: Try use return \n Expression construction;   
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A3",

path: "TestCases/07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A3.js",

assertion: "Check Return Statement for automatic semicolon insertion",

description: "Try use return \\n Expression construction",

test: function testcase() {
   //CHECK#1
function f1()
{
  return 1;
}
if (f1() !== 1) { 
  $ERROR('#1: Check return statement for automatic semicolon insertion');
}  

//CHECK#2
function f2()
{
  return 
  1;
}
if (f2() !== undefined) { 
  $ERROR('#2: Check return statement for automatic semicolon insertion');
}  

 }
});

