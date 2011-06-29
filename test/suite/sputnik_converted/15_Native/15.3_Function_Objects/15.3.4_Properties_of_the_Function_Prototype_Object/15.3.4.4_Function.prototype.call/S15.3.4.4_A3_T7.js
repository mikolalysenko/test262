// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A3_T7;
* @section: 15.3.4.4;
* @assertion: If thisArg is null or undefined, the called function is passed the global object as the this value;
* @description: Argument at call function is void 0 and it called inside function declaration;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A3_T7",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.4_Function.prototype.call/S15.3.4.4_A3_T7.js",

assertion: "If thisArg is null or undefined, the called function is passed the global object as the this value",

description: "Argument at call function is void 0 and it called inside function declaration",

test: function testcase() {
   (function FACTORY(){
  Function("this.feat=\"in da haus\"").call(void 0);
})();


//CHECK#1
if (this["feat"] !== "in da haus") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

 }
});

