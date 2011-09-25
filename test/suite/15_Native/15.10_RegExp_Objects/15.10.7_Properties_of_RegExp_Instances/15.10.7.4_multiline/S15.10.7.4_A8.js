// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp instance multiline property has the attribute DontEnum
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.7_Properties_of_RegExp_Instances/15.10.7.4_multiline/S15.10.7.4_A8.js
 * @description Checking if enumerating the multiline property of RegExp instance fails
 */

__re = new RegExp("[\u0041-\u0049]");

//CHECK#0
if (__re.hasOwnProperty('multiline') !== true) {
  $FAIL('#0: __re = new RegExp("[\\u0041-\\u0049]"); __re.hasOwnProperty(\'multiline\') === true');
}

 //CHECK#1
if (__re.propertyIsEnumerable('multiline') !== false) {
  $ERROR('#1: __re = new RegExp("[\\u0041-\\u0049]"); __re.propertyIsEnumerable(\'multiline\') === false');
}

 //CHECK#2
count = 0
for (p in __re){
  if (p==="multiline") count++   
}

if (count !== 0) {
  $ERROR('#2: count = 0; __re = new RegExp("[\\u0041-\\u0049]"); for (p in __re){ if (p==="multiline") count++; } count === 0. Actual: ' + (count));
} 

