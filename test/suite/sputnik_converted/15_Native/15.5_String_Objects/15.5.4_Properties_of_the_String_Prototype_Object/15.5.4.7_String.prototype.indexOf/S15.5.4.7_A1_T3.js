// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A1_T3;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf(searchString, position);
* @description: Checking by using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A1_T3",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A1_T3.js",

assertion: "String.prototype.indexOf(searchString, position)",

description: "Checking by using eval",

test: function testcase() {
   var indexOf = String.prototype.indexOf;

var __obj__pos = {valueOf:function(){return 5;}};

if (typeof toString === "undefined"){
    toString = Object.prototype.toString;
}

var __class__ = toString();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (indexOf(eval("\"[\""),__obj__pos)!=-1) {
  $ERROR('#1: indexOf = String.prototype.indexOf; indexOf(eval("\\"[\\""),__obj__pos)==-1. Actual: indexOf(eval("\\"[\\""),__obj__pos)=='+indexOf(eval("\"[\""),__obj__pos)); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

