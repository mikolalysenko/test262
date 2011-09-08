// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When the [[Delete]] method of O is called with property name P,
 * and if O doesn't have a property with name P, return true
 *
 * @section: 8.6.2.5, 11.4.1;
 * @path: 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2.5_A2_T2.js;
 * @description: Try to delete not existent properties of O, but existent property of prototype;
 */

function Palette(){};
Palette.prototype = {red:0xFF0000, green:0x00FF00};
var __palette = new Palette;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__palette.red !== 0xFF0000){
  $ERROR('#1: function Palette(){}; Palette.prototype = {red:0xFF0000, green:0x00FF00}; __palette = new Palette; __palette.red === 0xFF0000. Actual: ' + (__palette.red));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (delete __palette.red !== true) {
  $ERROR('#2 function Palette(){}; Palette.prototype = {red:0xFF0000, green:0x00FF00}; __palette = new Palette; delete __palette.red === true. Actual: ' + (delete __palette.red));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__palette.red !== 0xFF0000){
  $ERROR('#3: function Palette(){}; Palette.prototype = {red:0xFF0000, green:0x00FF00}; __palette = new Palette; __palette.red === 0xFF0000. Actual: ' + (__palette.red));
}
//
//////////////////////////////////////////////////////////////////////////////


