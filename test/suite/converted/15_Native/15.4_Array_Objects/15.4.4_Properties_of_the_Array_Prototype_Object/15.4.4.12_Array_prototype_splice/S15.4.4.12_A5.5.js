// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The splice property of Array has the attribute DontEnum
 *
 * @section: 15.4.4.12, 15.2.4.7, 12.6.4;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.12_Array_prototype_splice/S15.4.4.12_A5.5.js;
 * @description: Checking use propertyIsEnumerable, for-in;
 */

//CHECK#1
if (Array.propertyIsEnumerable('splice') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'splice\') === false. Actual: ' + (Array.propertyIsEnumerable('splice')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "splice") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "splice") result = false; }  result === true;');
}


