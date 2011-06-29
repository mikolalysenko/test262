// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.9_A5;
* @section: 12.9;
* @assertion: Code after ReturnStatement is not evaluated;
* @description: Using code after Return statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.9_A5",

path: "TestCases/12_Statement/12.9_The_return_Statement/S12.9_A5.js",

assertion: "Code after ReturnStatement is not evaluated",

description: "Using code after Return statement",

test: function testcase() {
   //CHECK#1
var x1=1;
function myfunc1(){
	x1++;
	return;
	x1*=2;
}
myfunc1();
if (x1!==2) $ERROR('#1: x1 === 2. Actual:  x1 ==='+ x1  );

//CHECK#2
var x2=1;
function myfunc2(){
  x2++;
  return x2;
  x2*=2;
}
myfunc2();
if (x2!==2) $ERROR('#2: x2 === 2. Actual:  x2 ==='+ x2  );

//CHECK#3
var x3=1;
function myfunc3(){
  x3++;
  return;
  return x3;
  x3*=2;
}
if (myfunc3()!==undefined) $ERROR('#3: myfunc3() === undefined. Actual:  myfunc3() ==='+ myfunc3()  );

 }
});

