// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.concat.length property has the attribute DontEnum
 *
 * @section: 15.5.4.6;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.6_String.prototype.concat/S15.5.4.6_A8.js;
 * @description: Checking if enumerating the String.prototype.concat.length property fails;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.concat.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.concat.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.concat.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.prototype.concat.propertyIsEnumerable('length')) {
  $ERROR('#1: String.prototype.concat.propertyIsEnumerable(\'length\') return false. Actual: '+String.prototype.concat.propertyIsEnumerable('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// CHECK#2
count = 0;

for (p in String.prototype.concat){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count = 0; for (p in String.prototype.concat){ if (p==="length") count++;}; count === 0. Actual: '+count); 
}
//
//////////////////////////////////////////////////////////////////////////////

