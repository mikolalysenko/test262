// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If the length property is changed, every property whose name
 * is an array index whose value is not smaller than the new length is automatically deleted
 *
 * @path 15_Native/15.4_Array_Objects/15.4.5_Properties_of_Array_Instances/15.4.5.2_length/S15.4.5.2_A3_T1.js
 * @description If new length greater than the name of every property whose name
 * is an array index
 */

//CHECK#1
var x = [];
x.length = 1;
if (x.length !== 1) {  
  $ERROR('#1: x = []; x.length = 1; x.length === 1. Actual: ' + (x.length));    
}

//CHECK#2
x[5] = 1;
x.length = 10;
if (x.length !== 10) {      
  $ERROR('#2: x = []; x.length = 1; x[5] = 1; x.length = 10; x.length === 10. Actual: ' + (x.length));
}

//CHECK#3
if (x[5] !== 1) {      
  $ERROR('#3: x = []; x.length = 1; x[5] = 1; x.length = 10; x[5] = 1');
}

