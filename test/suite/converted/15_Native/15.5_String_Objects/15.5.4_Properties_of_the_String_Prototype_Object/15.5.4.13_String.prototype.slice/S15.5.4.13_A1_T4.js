// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @section: 15.5.4.13;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T4.js;
 * @description: Arguments are null and number, and instance is function call, that returned string;
 */

//since ToInteger(null) yelds 0
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (function(){return "gnulluna"}().slice(null, -3) !== "gnull") {
  $ERROR('#1: function(){return "gnulluna"}().slice(null, -3) === "gnull". Actual: '+function(){return "gnulluna"}().slice(null, -3) );
}
//
//////////////////////////////////////////////////////////////////////////////

