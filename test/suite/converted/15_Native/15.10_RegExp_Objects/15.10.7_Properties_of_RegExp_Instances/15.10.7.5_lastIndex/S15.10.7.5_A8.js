// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp instance lastIndex property has the attribute DontEnum
 *
 * @section: 15.10.7.5;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.7_Properties_of_RegExp_Instances/15.10.7.5_lastIndex/S15.10.7.5_A8.js;
 * @description: Checking if enumerating the lastIndex property of RegExp instance fails;
 */

__re = new RegExp("A?B");

//CHECK#0
if (__re.hasOwnProperty('lastIndex') !== true) {
  $FAIL('#0: __re = new RegExp("A?B"); __re.hasOwnProperty(\'lastIndex\') === true');
}

 //CHECK#1
if (__re.propertyIsEnumerable('lastIndex') !== false) {
  $ERROR('#1: __re = new RegExp("A?B"); __re.propertyIsEnumerable(\'lastIndex\') === false');
}

 //CHECK#2
count = 0
for (p in __re){
  if (p==="lastIndex") count++   
}

if (count !== 0) {
  $ERROR('#2: count = 0; __re = new RegExp("A?B"); for (p in __re){ if (p==="lastIndex") count++; } count === 0. Actual: ' + (count));
} 

