// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.10_A4_T3;
 * @section: 12.10;
 * @assertion: Changing property using "eval" statement containing "with" statement;
 * @description: Changing boolean property;
 * @strict_mode_negative
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.10_A4_T3",

path: "TestCases/12_Statement/12.10_The_with_Statement/S12.10_A4_T3.js",

assertion: "Changing property using \"eval\" statement containing \"with\" statement",

description: "Changing boolean property",

test: function testcase() {
   this.p1 = 'a';
var myObj = {
  p1: true, 
}
eval("with(myObj){p1=false}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 !== false){
  $ERROR('#1: myObj.p1 === false. Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 === 'a'){
  $ERROR('#2: myObj.p1 !== \'a\'');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

