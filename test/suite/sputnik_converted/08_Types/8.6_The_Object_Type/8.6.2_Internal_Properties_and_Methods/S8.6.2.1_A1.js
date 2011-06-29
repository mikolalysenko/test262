// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.1_A1;
* @section: 8.6.2.1;
* @assertion: [[Get]](P) method should return value when property P does not exist in instance but prototype contain it;
* @description: Try to get P when property P does not exist in instance but prototype contain it; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.1_A1",

path: "TestCases/08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2.1_A1.js",

assertion: "[[Get]](P) method should return value when property P does not exist in instance but prototype contain it",

description: "Try to get P when property P does not exist in instance but prototype contain it",

test: function testcase() {
   //Establish foo object 
function FooObj(){}; FooObj.prototype.propFoo="some";

// Invoke instance of foo object
var __obj= new FooObj;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.propFoo !== "some"){
  $ERROR('#1: function FooObj(){}; FooObj.prototype.propFoo="some"; var __obj= new FooObj; __obj.propFoo === "some". Actual: ' + (__obj.propFoo));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj['propFoo'] !== "some"){
  $ERROR('#1: function FooObj(){}; FooObj.prototype.propFoo="some"; var __obj= new FooObj; __obj[\'propFoo\'] === "some". Actual: ' + (__obj['propFoo']));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

