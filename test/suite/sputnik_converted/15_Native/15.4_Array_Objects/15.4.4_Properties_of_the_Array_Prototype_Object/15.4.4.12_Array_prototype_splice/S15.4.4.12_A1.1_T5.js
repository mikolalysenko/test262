// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.12_A1.1_T5;
 * @section: 15.4.4.12;
 * @assertion: If start is positive, use min(start, length). 
 * If deleteCount is positive, use min(deleteCount, length - start);
 * @description: deleteCount > length > start = 0, itemCount = 0; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.12_A1.1_T5",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.12_Array_prototype_splice/S15.4.4.12_A1.1_T5.js",

assertion: "If start is positive, use min(start, length).",

description: "deleteCount > length > start = 0, itemCount = 0",

test: function testcase() {
   var x = [0,1,2,3];
var arr = x.splice(0,5);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3]; var arr = x.splice(0,5); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 4) {
  $ERROR('#2: var x = [0,1,2,3]; var arr = x.splice(0,5); arr.length === 4. Actual: ' + (arr.length));
}      

//CHECK#3
if (arr[0] !== 0) {
  $ERROR('#3: var x = [0,1,2,3]; var arr = x.splice(0,5); arr[0] === 0. Actual: ' + (arr[0]));
}

//CHECK#4
if (arr[1] !== 1) {
  $ERROR('#4: var x = [0,1,2,3]; var arr = x.splice(0,5); arr[1] === 1. Actual: ' + (arr[1]));
}      

//CHECK#5
if (arr[2] !== 2) {
  $ERROR('#5: var x = [0,1,2,3]; var arr = x.splice(0,5); arr[2] === 2. Actual: ' + (arr[2]));
}   

//CHECK#6
if (arr[3] !== 3) {
  $ERROR('#6: var x = [0,1,2,3]; var arr = x.splice(0,5); arr[3] === 3. Actual: ' + (arr[3]));
} 

//CHECK#7
if (x.length !== 0) {
  $ERROR('#7: var x = [0,1,2,3]; var arr = x.splice(0,5); x.length === 0. Actual: ' + (x.length));
} 

 }
});

