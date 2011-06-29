// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.5_A1.2_T4;
 * @section: 10.1.5, 15.1;
 * @assertion: Global object has properties such as built-in objects such as 
 * Math, String, Date, parseInt, etc; 
 * @description: Function execution context - Other Properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.5_A1.2_T4",

path: "TestCases/10_Execution_Contexts/10.1_Definitions/10.1.5_Global_Object/S10.1.5_A1.2_T4.js",

assertion: "Global object has properties such as built-in objects such as",

description: "Function execution context - Other Properties",

test: function testcase() {
   function test() {
  //CHECK#27
  if ( Math === null ) {
    $ERROR("#27: Math === null");
  }
}

test();

 }
});

