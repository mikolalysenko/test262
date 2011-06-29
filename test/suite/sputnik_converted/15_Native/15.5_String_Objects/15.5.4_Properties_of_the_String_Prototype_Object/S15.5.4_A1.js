// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4_A1;
* @section: 15.5.4;
* @assertion: The String prototype object is itself a String object (its [[Class]] is "String");
* @description: first we delete String.prototype.toString cause it overrides Object prototype toString. 
* Object.prototype.toString returns [object+[[class]]+];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4_A1",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/S15.5.4_A1.js",

assertion: "The String prototype object is itself a String object (its [[Class]] is \"String\")",

description: "first we delete String.prototype.toString cause it overrides Object prototype toString.",

test: function testcase() {
   delete String.prototype.toString;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.toString() !== "[object "+"String"+"]") {
  $ERROR('#1: delete String.prototype.toString; String.prototype.toString() === "[object "+"String"+"]". Actual: String.prototype.toString() ==='+String.prototype.toString() ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

