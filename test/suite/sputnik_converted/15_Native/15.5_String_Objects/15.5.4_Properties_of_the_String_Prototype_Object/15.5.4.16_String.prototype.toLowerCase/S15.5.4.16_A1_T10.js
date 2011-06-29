// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A1_T10;
* @section: 15.5.4.16;
* @assertion: String.prototype.toLowerCase();
* @description: Call toLowerCase() function of object with overrode toString function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A1_T10",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.16_String.prototype.toLowerCase/S15.5.4.16_A1_T10.js",

assertion: "String.prototype.toLowerCase()",

description: "Call toLowerCase() function of object with overrode toString function",

test: function testcase() {
   var __obj = {toString:function(){return "\u0041B";}}
__obj.toLowerCase = String.prototype.toLowerCase;


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.toLowerCase() !=="ab") {
  $ERROR('#1: var __obj = {toString:function(){return "\u0041B";}}; __obj.toLowerCase = String.prototype.toLowerCase; __obj.toLowerCase() ==="ab". Actual: '+__obj.toLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

