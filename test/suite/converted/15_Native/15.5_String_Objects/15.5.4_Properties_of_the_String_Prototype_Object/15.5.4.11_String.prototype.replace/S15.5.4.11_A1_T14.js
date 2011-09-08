// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.replace (searchValue, replaceValue)
 *
 * @section: 15.5.4.11;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.11_String.prototype.replace/S15.5.4.11_A1_T14.js;
 * @description: Instance is string, searchValue is regular expression;
 */

var __reg = new RegExp("77");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041BABAB\u0037\u0037BBAA".replace(__reg, 1) !== "ABBABABAB\u0031BBAA") {
  $ERROR('#1: var __reg = new RegExp("77"); "ABB\\u0041BABAB\\u0037\\u0037BBAA".replace(__reg, 1) === "ABBABABAB\\u0031BBAA". Actual: '+("ABB\u0041BABAB\u0037\u0037BBAA".replace(__reg, 1)) );
}
//
//////////////////////////////////////////////////////////////////////////////

