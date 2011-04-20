// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A3_T10;
* @section: 15.3.4.4;
* @assertion: If thisArg is null or undefined, the called function is passed the global object as the this value;
* @description: Checking by using eval, no any arguments at call function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A3_T10",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.4_Function.prototype.call\S15.3.4.4_A3_T10.js",

assertion: "If thisArg is null or undefined, the called function is passed the global object as the this value",

description: "Checking by using eval, no any arguments at call function",

test: function testcase() {
   eval(" (function(){this.feat=1}).call()");

//CHECK#1
if (this["feat"] !== 1) {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

 }
});

