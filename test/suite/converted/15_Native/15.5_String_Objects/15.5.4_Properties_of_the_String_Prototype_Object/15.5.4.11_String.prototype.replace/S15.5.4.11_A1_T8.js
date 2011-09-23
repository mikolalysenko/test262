// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.replace (searchValue, replaceValue)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.11_String.prototype.replace/S15.5.4.11_A1_T8.js
 * @description Call replace (searchValue, replaceValue) function with regular expression and void 0 arguments of String object
 */

var __obj = {toString:function(){}};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String(__obj).replace(/e/g,void 0) !== "undundefinedfinundefinedd") {
  $ERROR('#1: __obj = {toString:function(){}}; String(__obj).replace(/e/g,void 0) === "undundefinedfinundefinedd". Actual: '+String(__obj).replace(/e/g,void 0) );
}
//
//////////////////////////////////////////////////////////////////////////////

