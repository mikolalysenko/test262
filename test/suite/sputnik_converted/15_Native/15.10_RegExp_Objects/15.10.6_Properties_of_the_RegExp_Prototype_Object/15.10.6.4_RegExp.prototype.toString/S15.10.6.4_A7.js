// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.4_A7;
* @section: 15.10.6.4, 13.2;
* @assertion: RegExp.prototype.toString can't be used as constructor;
* @description: Checking if creating the RegExp.prototype.toString object fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.4_A7",

path: "TestCases/15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.4_RegExp.prototype.toString/S15.10.6.4_A7.js",

assertion: "RegExp.prototype.toString can\'t be used as constructor",

description: "Checking if creating the RegExp.prototype.toString object fails",

test: function testcase() {
   __FACTORY = RegExp.prototype.toString;

try {
	__instance = new __FACTORY;
	$ERROR('#1.1: __FACTORY = RegExp.prototype.toString throw TypeError. Actual: ' + (__instance));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: __FACTORY = RegExp.prototype.toString throw TypeError. Actual: ' + (e));
  }
}

 }
});

