// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * This should generate no TypeError,
 * Cause we overload toString method so it return non Primitive value
 * but we overloaded valueOf method too.
 * See ECMA reference at http://bugzilla.mozilla.org/show_bug.cgi?id=167325
 *
 * @section: 8.6.2.6, 8.6.2, 9.8;
 * @path: 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2.6_A2.js;
 * @description: Try to overload toString, that returned new Object, and valueOf methods;
 */

try
{
	var __obj = {toString: function() {return new Object();}, valueOf: function() {return 1;}}
	if (String(__obj) !== "1") {
	  $ERROR('#1.1: var __obj = {toString: function() {return new Object();}, valueOf: function() {return 1;}}; String(__obj) === "1". Actual: ' + (String(__obj)));
	}
}
catch(e)
{
  $ERROR('#1.2: var __obj = {toString: function() {return new Object();}, valueOf: function() {return 1;}}; String(__obj) === "1". Actual: ' + (e));
}  


