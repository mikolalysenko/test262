// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A3_T3;
* @section: 15.5.4.7;
* @assertion: Since we deal with max(ToInteger(pos), 0) if ToInteger(pos) less than 0 indexOf(searchString,0) returns;
* @description: Call "$$abcdabcd".indexOf("ab",function(){return -Infinity;}()) and check result;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A3_T3",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A3_T3.js",

assertion: "Since we deal with max(ToInteger(pos), 0) if ToInteger(pos) less than 0 indexOf(searchString,0) returns",

description: "Call \"$$abcdabcd\".indexOf(\"ab\",function(){return -Infinity;}()) and check result",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("$$abcdabcd".indexOf("ab", function(){return -Infinity;}())!==2) {
  $ERROR('#1: "$$abcdabcd".indexOf("ab", function(){return -Infinity;}())===2. Actual: '+("$$abcdabcd".indexOf("ab", function(){return -Infinity;}()))); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

