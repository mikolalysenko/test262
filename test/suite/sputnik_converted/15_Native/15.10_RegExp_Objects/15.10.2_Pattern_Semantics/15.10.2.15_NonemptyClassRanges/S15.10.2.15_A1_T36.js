// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.15_A1_T36;
* @section: 15.10.2.15;
* @assertion: The internal helper function CharacterRange takes two CharSet parameters A and B and performs the 
* following: 
* If A does not contain exactly one character or B does not contain exactly one character then throw 
* a SyntaxError exception;
* @description: Checking if execution of "/[d-G\f]/.exec("a")" leads to throwing the correct exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.15_A1_T36",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.15_NonemptyClassRanges\S15.10.2.15_A1_T36.js",

assertion: "The internal helper function CharacterRange takes two CharSet parameters A and B and performs the",

description: "Checking if execution of \"/[d-G\\f]/.exec(\"a\")\" leads to throwing the correct exception",

test: function testcase() {
   //CHECK#1
try {
  $ERROR('#1.1: /[d-G\\f]/.exec("a") throw SyntaxError. Actual: ' + (new RegExp("[d-G\\f]").exec("a")));
} catch (e) {
  if((e instanceof SyntaxError) !== true){
    $ERROR('#1.2: /[d-G\\f]/.exec("a") throw SyntaxError. Actual: ' + (e));
  }
}

 }
});

