// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.indexOf(searchString, position)
 *
 * @section 15.5.4.7
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A1_T5.js
 * @description Call indexOf(searchString, position) function with null argument of function object
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" indexOf(null) evaluates to indexOf("",0)
if (function(){return "gnulluna"}().indexOf(null) !== 1) {
  $ERROR('#1: function(){return "gnulluna"}().indexOf(null) === 1. Actual: '+function(){return "gnulluna"}().indexOf(null) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

