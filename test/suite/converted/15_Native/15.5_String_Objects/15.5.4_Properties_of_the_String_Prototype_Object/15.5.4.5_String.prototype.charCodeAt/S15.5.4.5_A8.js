// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.charCodeAt.length property has the attribute DontEnum
 *
 * @section: 15.5.4.5;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.5_String.prototype.charCodeAt/S15.5.4.5_A8.js;
 * @description: Checking if enumerating the String.prototype.charCodeAt.length property fails;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.charCodeAt.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.charCodeAt.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.charCodeAt.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.prototype.charCodeAt.propertyIsEnumerable('length')) {
  $ERROR('#1: String.prototype.charCodeAt.propertyIsEnumerable(\'length\') return false. Actual: '+String.prototype.charCodeAt.propertyIsEnumerable('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// CHECK#2
var count=0;

for (p in String.prototype.charCodeAt){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count=0; for (p in String.prototype.charCodeAt){if (p==="length") count++;} count === 0. Actual: count ==='+count ); 
}
//
//////////////////////////////////////////////////////////////////////////////

