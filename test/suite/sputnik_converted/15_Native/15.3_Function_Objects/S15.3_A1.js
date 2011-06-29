// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.3_A1;
 * @section: 15.3;
 * @assertion: Function is the property of global;
 * @description: Compare Function with this.Function;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3_A1",

path: "TestCases/15_Native/15.3_Function_Objects/S15.3_A1.js",

assertion: "Function is the property of global",

description: "Compare Function with this.Function",

test: function testcase() {
   var obj = Function;

var thisobj = this.Function;

if (obj !== thisobj) {
  $ERROR('Function is the property of global');
}

 }
});

