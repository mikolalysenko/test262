// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.6_A2_T2;
 * @section: 15.4.4.6;
 * @assertion: The pop function is intentionally generic. 
 * It does not require that its this value be an Array object;
 * @description: If ToUint32(length) equal zero, call the [[Put]] method 
 * of this object with arguments "length" and 0 and return undefined;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.6_A2_T2",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.6_Array_prototype_pop/S15.4.4.6_A2_T2.js",

assertion: "The pop function is intentionally generic.",

description: "If ToUint32(length) equal zero, call the [[Put]] method",

test: function testcase() {
   var obj = {};
obj.pop = Array.prototype.pop;

//CHECK#1
obj.length = NaN;
var pop = obj.pop();
if (pop !== undefined) {
  $ERROR('#1: var obj = {}; obj.length = NaN; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + (pop));
}

//CHECK#2
if (obj.length !== 0) {
  $ERROR('#2: var obj = {}; obj.length = NaN; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + (obj.length));
}

//CHECK#3
obj.length = Number.POSITIVE_INFINITY;
var pop = obj.pop();
if (pop !== undefined) {
  $ERROR('#3: var obj = {}; obj.length = Number.POSITIVE_INFINITY; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + (pop));
}

//CHECK#4
if (obj.length !== 0) {
  $ERROR('#4: var obj = {}; obj.length = Number.POSITIVE_INFINITY; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + (obj.length));
}

//CHECK#5
obj.length = Number.NEGATIVE_INFINITY;
var pop = obj.pop();
if (pop !== undefined) {
  $ERROR('#5: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + (pop));
}

//CHECK#6
if (obj.length !== 0) {
  $ERROR('#6: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + (obj.length));
}

//CHECK#7
obj.length = -0;
var pop = obj.pop();
if (pop !== undefined) {
  $ERROR('#7: var obj = {}; obj.length = -0; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + (pop));
}    

//CHECK#8
if (obj.length !== 0) {
  $ERROR('#8: var obj = {}; obj.length = -0; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + (obj.length));
} else {
  if (1/obj.length !== Number.POSITIVE_INFINITY) {
    $ERROR('#8: var obj = {}; obj.length = -0; obj.pop = Array.prototype.pop; obj.pop(); obj.length === +0. Actual: ' + (obj.length));
  }  
}   

//CHECK#9
obj.length = 0.5;
var pop = obj.pop();
if (pop !== undefined) {
  $ERROR('#9: var obj = {}; obj.length = 0.5; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + (pop));
}

//CHECK#10
if (obj.length !== 0) {
  $ERROR('#10: var obj = {}; obj.length = 0.5; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + (obj.length));
} 

//CHECK#11
obj.length = new Number(0);
var pop = obj.pop();
if (pop !== undefined) {
  $ERROR('#11: var obj = {}; obj.length = new Number(0); obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + (pop));
}

//CHECK#12
if (obj.length !== 0) {
  $ERROR('#12: var obj = {}; obj.length = new Number(0); obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + (obj.length));
}

 }
});

