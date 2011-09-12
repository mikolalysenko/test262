// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The parseInt property has the attribute DontEnum
 *
 * @section 15.1.2.2, 15.2.4.7, 12.6.4
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.2_parseInt/S15.1.2.2_A9.5.js
 * @description Checking use propertyIsEnumerable, for-in
 */

//CHECK#1
if (this.propertyIsEnumerable('parseInt') !== false) {
  $ERROR('#1: this.propertyIsEnumerable(\'parseInt\') === false. Actual: ' + (this.propertyIsEnumerable('parseInt')));
}

//CHECK#2
var result = true;
for (var p in this){
  if (p === "parseInt") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in this) { if (p === "parseInt") result = false; }  result === true;');
}

