// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleUpperCase()
 *
 * @section 15.5.4.19
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.19_String.prototype.toLocaleUpperCase/S15.5.4.19_A1_T12.js
 * @description Override toString and valueOf functions, valueOf throw exception, then call toLocaleUpperCase() function for this object
 */

var __obj = {toString:function(){return {};},valueOf:function(){throw "intostr";}}
__obj.toLocaleUpperCase = String.prototype.toLocaleUpperCase;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var x = __obj.toLocaleUpperCase();
 	$FAIL('#1: "var x = __obj.toLocaleUpperCase()" lead to throwing exception');
} catch (e) {
  if (e!=="intostr") {
    $ERROR('#1.1: Exception === "intostr". Actual: '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

