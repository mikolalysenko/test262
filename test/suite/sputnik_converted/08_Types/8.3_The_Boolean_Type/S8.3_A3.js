// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.3_A3;
* @section: 8.3;
* @assertion: Applaing negation to boolean works well;
* @description: Check not false equals true, not true equals false;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.3_A3",

path: "08_Types\8.3_The_Boolean_Type\S8.3_A3.js",

assertion: "Applaing negation to boolean works well",

description: "Check not false equals true, not true equals false",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!false !== true){
  $ERROR('#1: !false === true');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!false != true){
  $ERROR('#2: !false == true');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!true !== false){
  $ERROR('#3: !true === false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (!true != false){
  $ERROR('#4: !true == false');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

