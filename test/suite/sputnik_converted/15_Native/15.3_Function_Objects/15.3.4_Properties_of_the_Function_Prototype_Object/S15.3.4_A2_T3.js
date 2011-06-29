// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4_A2_T3;
* @section: 15.3.4;
* @assertion: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined;
* @description: Call Function.prototype(x), where x is undefined variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4_A2_T3",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/S15.3.4_A2_T3.js",

assertion: "The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined",

description: "Call Function.prototype(x), where x is undefined variable",

test: function testcase() {
   //CHECK#1
try {
  if (Function.prototype(x) !== undefined) {
    var x;
    $ERROR('#1: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined');
  }
} catch (e) {
  $ERROR('#1.1: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined: '+e);
}


 }
});

