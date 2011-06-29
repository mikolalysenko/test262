// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.1_A2_T1;
 * @section: 15.9.5.1;
 * @assertion: The "length" property of the "constructor" is 7;
 * @description: The "length" property of the "constructor" is 7;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.1_A2_T1",

path: "TestCases/15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.1_Date.prototype.constructor/S15.9.5.1_A2_T1.js",

assertion: "The \"length\" property of the \"constructor\" is 7",

description: "The \"length\" property of the \"constructor\" is 7",

test: function testcase() {
   if(Date.prototype.constructor.hasOwnProperty("length") !== true){
  $ERROR('#1: The constructor has a "length" property');
}

if(Date.prototype.constructor.length !== 7){
  $ERROR('#2: The "length" property of the constructor is 7');
}


 }
});

