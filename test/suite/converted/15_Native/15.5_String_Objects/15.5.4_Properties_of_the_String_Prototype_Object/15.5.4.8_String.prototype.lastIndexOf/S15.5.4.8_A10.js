// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.lastIndexOf.length property has the attribute ReadOnly
 *
 * @section: 15.5.4.8;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.8_String.prototype.lastIndexOf/S15.5.4.8_A10.js;
 * @description: Checking if varying the String.prototype.lastIndexOf.length property fails;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.lastIndexOf.hasOwnProperty('length'))) {
  $FAIL('#1: String.prototype.lastIndexOf.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.lastIndexOf.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype.lastIndexOf.length;

String.prototype.lastIndexOf.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.lastIndexOf.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.lastIndexOf.length; String.prototype.lastIndexOf.length = function(){return "shifted";}; String.prototype.lastIndexOf.length === __obj. Actual: '+String.prototype.lastIndexOf.length );
}
//
//////////////////////////////////////////////////////////////////////////////

