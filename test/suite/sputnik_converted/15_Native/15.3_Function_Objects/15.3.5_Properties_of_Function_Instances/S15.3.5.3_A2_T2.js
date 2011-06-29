// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.5.3_A2_T2;
* @section: 15.3.5.3, 11.8.6;
* @assertion: Assume F is a Function object. When the [[HasInstance]] method of F is called with value V and V is an object, the following steps are taken:
* i) Call the [[Get]] method of F with property name "prototype".
* ii) Let O be Result(i).
* iii) O is not an object, throw a TypeError exception;
* @description: F.prototype is undefined, and V is empty object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.5.3_A2_T2",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.5_Properties_of_Function_Instances/S15.3.5.3_A2_T2.js",

assertion: "Assume F is a Function object. When the [[HasInstance]] method of F is called with value V and V is an object, the following steps are taken:",

description: "F.prototype is undefined, and V is empty object",

test: function testcase() {
   FACTORY = new Function;

FACTORY.prototype = undefined;

obj={};

//CHECK#1
try {
  obj instanceof  FACTORY;
  $FAIL('#1: O is not an object, throw a TypeError exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
  	$ERROR('#1.1: O is not an object, throw a TypeError exception');
  }
}



 }
});

