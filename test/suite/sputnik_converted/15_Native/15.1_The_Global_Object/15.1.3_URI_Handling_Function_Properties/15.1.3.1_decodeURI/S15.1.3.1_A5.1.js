// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.1_A5.1;
 * @section: 15.1.3.1, 15.2.4.7, 12.6.4;
 * @assertion: The length property of decodeURI has the attribute DontEnum;
 * @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.1_A5.1",

path: "TestCases/15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.1_decodeURI/S15.1.3.1_A5.1.js",

assertion: "The length property of decodeURI has the attribute DontEnum",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (decodeURI.propertyIsEnumerable('length') !== false) {
  $ERROR('#1: decodeURI.propertyIsEnumerable(\'length\') === false. Actual: ' + (decodeURI.propertyIsEnumerable('length')));
}

//CHECK#2
result = true;
for (p in decodeURI){
  if (p === "length") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in decodeURI) { if (p === "length") result = false; }  result === true;');
}

 }
});

