// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.search.length property has the attribute DontDelete
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.12_String.prototype.search/S15.5.4.12_A9.js
 * @description Checking if deleting the String.prototype.search.length property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.search.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.search.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.search.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.search.length) {
  $ERROR('#1: delete String.prototype.search.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.search.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.search.length; String.prototype.search.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.search.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

