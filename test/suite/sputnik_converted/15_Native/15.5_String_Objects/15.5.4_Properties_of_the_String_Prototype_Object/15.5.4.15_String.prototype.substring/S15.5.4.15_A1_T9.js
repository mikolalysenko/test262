// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A1_T9;
* @section: 15.5.4.15;
* @assertion: String.prototype.substring (start, end);
* @description: Arguments are undefined and object, and instance is new String(object), object have overrided valueOf and toString functions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A1_T9",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A1_T9.js",

assertion: "String.prototype.substring (start, end)",

description: "Arguments are undefined and object, and instance is new String(object), object have overrided valueOf and toString functions",

test: function testcase() {
   var __obj = {
    valueOf:function(){},
    toString:void 0
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (new String(__obj).substring(/*(function(){})()*/undefined,undefined) !== "undefined") {
  $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; new String(__obj).substring(/*(function(){})()*/undefined,undefined) === "undefined". Actual: '+new String(__obj).substring(/*(function(){})()*/undefined,undefined) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

