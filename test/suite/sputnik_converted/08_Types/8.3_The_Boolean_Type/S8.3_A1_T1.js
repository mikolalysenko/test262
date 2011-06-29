// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.3_A1_T1;
 * @section: 8.3;
 * @assertion: The Boolean type have two values, called true and false;
 * @description: Assign true and false to variables;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.3_A1_T1",

path: "TestCases/08_Types/8.3_The_Boolean_Type/S8.3_A1_T1.js",

assertion: "The Boolean type have two values, called true and false",

description: "Assign true and false to variables",

test: function testcase() {
   if (x == undefined) {
    $ERROR("x == undefined, but actual is "+ x);
}   

////////////////////////////////////////////////////////////////////////
// CHECK#1
var x = true;
var y = false;
//
////////////////////////////////////////////////////////////////////////

 }
});

