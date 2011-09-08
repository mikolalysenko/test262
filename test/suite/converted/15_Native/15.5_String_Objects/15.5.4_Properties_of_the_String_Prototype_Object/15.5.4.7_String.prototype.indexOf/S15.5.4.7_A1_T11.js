// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.indexOf(searchString, position)
 *
 * @section: 15.5.4.7;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A1_T11.js;
 * @description: Instance is Date(0) object;
 */

var __instance = new Date(0);

__instance.indexOf = String.prototype.indexOf;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((__instance.getTimezoneOffset()>0 ? __instance.indexOf('31') : __instance.indexOf('01')) !== 8) {
  $ERROR('#1: __instance = new Date(0); __instance.indexOf = String.prototype.indexOf;  (__instance.getTimezoneOffset()>0 ? __instance.indexOf(\'31\') : __instance.indexOf(\'01\')) === 8. Actual: '+(__instance.getTimezoneOffset()>0 ? __instance.indexOf('31') : __instance.indexOf('01')) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

