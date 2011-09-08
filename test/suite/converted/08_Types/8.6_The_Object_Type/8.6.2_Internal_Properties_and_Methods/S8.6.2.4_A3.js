// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * [[hasProperty]] is sensitive to property existence but [[Get]] is not
 *
 * @section: 8.6.2.4, 12.6.4;
 * @path: 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2.4_A3.js;
 * @description: Use [[hasProperty]] and [[Get]] for existent and not existent properties;
 */

var __obj={}; __obj.hole=undefined;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.hole !== undefined) {
  $ERROR('#1: var __obj={}; __obj.hole=undefined; __obj.hole === undefined. Actual: ' + (__obj.hole));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj.notexist !== undefined) {
  $ERROR('#2: var __obj={}; __obj.hole=undefined; __obj.notexist === undefined. Actual: ' + (__obj.notexist));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!("hole" in __obj)) {
  $ERROR('#3: var __obj={}; __obj.hole=undefined; "hole" in __obj');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (("notexist" in __obj)) {
  $ERROR('#4: var __obj={}; __obj.hole=undefined; "notexist" in __obj');
}
//
//////////////////////////////////////////////////////////////////////////////

