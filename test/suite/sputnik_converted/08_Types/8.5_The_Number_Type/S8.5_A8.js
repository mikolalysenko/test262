// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A8;
 * @section: 8.5, 7.8.3;
 * @assertion: Infinity is the same as +Infinity;
 * @description: Compare Infinity and +Infinity; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A8",

path: "TestCases/08_Types/8.5_The_Number_Type/S8.5_A8.js",

assertion: "Infinity is the same as +Infinity",

description: "Compare Infinity and +Infinity",

test: function testcase() {
   var p_inf=+Infinity;
var inf=Infinity;

///////////////////////////////////////////////////////
// 
if (p_inf!==inf){
  $ERROR('#1: Infinity is the same as +Infinity');
}
//
//////////////////////////////////////////////////////////

 }
});

