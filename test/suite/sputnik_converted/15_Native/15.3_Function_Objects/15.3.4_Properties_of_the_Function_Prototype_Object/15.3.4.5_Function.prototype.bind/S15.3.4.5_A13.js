// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.5_A13;
* @section: 15.3.4.5;
* @assertion: If IsCallable(func) is false, then throw a TypeError exception.
* @negative TypeError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.5_A13",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.5_Function.prototype.bind/S15.3.4.5_A13.js",

assertion: "If IsCallable(func) is false, then throw a TypeError exception.",

description: "",

test: function testcase() {
   Function.prototype.bind.call(undefined, {});


 }
});

