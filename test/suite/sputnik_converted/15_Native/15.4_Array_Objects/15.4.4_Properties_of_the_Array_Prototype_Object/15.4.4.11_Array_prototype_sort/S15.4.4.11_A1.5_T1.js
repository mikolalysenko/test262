// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.11_A1.5_T1;
 * @section: 15.4.4.11;
 * @assertion: If comparefn is undefined, use SortCompare operator; 
 * @description: Checking sort() and sort(undefined);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.11_A1.5_T1",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.11_Array_prototype_sort/S15.4.4.11_A1.5_T1.js",

assertion: "If comparefn is undefined, use SortCompare operator",

description: "Checking sort() and sort(undefined)",

test: function testcase() {
   var x = new Array(1,0);
x.sort();

//CHECK#1
if (x.length !== 2) {
  $ERROR('#1: var x = new Array(1,0);  x.sort(); x.length === 2. Actual: ' + (x.length));
}

//CHECK#2
if (x[0] !== 0) {
  $ERROR('#2: var x = new Array(1,0);  x.sort(); x[0] === 0. Actual: ' + (x[0]));
}    

//CHECK#3
if (x[1] !== 1) {
  $ERROR('#3: var x = new Array(1,0);  x.sort(); x[1] === 1. Actual: ' + (x[1]));
}

var x = new Array(1,0);
x.sort(undefined);

//CHECK#4
if (x.length !== 2) {
  $ERROR('#4: var x = new Array(1,0);  x.sort(undefined); x.length === 2. Actual: ' + (x.length));
}

//CHECK#5
if (x[0] !== 0) {
  $ERROR('#5: var x = new Array(1,0);  x.sort(undefined); x[0] === 0. Actual: ' + (x[0]));
}    

//CHECK#6
if (x[1] !== 1) {
  $ERROR('#6: var x = new Array(1,0);  x.sort(undefined); x[1] === 1. Actual: ' + (x[1]));
}

 }
});

