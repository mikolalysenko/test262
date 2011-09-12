// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check ToUint32(length) for non Array objects
 *
 * @section 15.4.4.6
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.6_Array_prototype_pop/S15.4.4.6_A3_T3.js
 * @description length = -1
 */

var obj = {};
obj.pop = Array.prototype.pop;
obj[4294967294] = "x";
obj.length = -1;

//CHECK#1
var pop = obj.pop();
if (pop !== "x") {
  $ERROR('#1: var obj = {}; obj.pop = Array.prototype.pop; obj[4294967294] = "x"; obj.length = -1; obj.pop() === "x". Actual: ' + (pop));
}

//CHECK#2
if (obj.length !== 4294967294) {
  $ERROR('#2: var obj = {}; obj.pop = Array.prototype.pop; obj[4294967294] = "x"; obj.length = -1; obj.pop(); obj.length === 4294967294. Actual: ' + (obj.length));
}

//CHECK#3
if (obj[4294967294] !== undefined) {
   $ERROR('#3: var obj = {}; obj.pop = Array.prototype.pop; obj[4294967294] = "x"; obj.length = -1; obj.pop(); obj[4294967294] === undefined. Actual: ' + (obj[4294967294]));
}  

