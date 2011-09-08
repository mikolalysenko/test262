// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @section: 15.5.4.13;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T13.js;
 * @description: Arguments are objects, and instance is string.
 * First object have overrided valueOf and toString functions.
 * Second object have overrided toString function, that return exception;
 */

var __obj = {valueOf:function(){return {};}, toString:function(){return 1;}};
var __obj2 = {toString:function(){throw "inend";}};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
    var x = "ABB\u0041BABAB\u0031BBAA".slice(__obj, __obj2);
    $FAIL('#1: "var x = slice(__obj,__obj2)" lead to throwing exception');
} catch (e) {
    if (e!=="inend") {
        $ERROR('#1.1: Exception === "inend". Actual: '+e);
    }
}
//
//////////////////////////////////////////////////////////////////////////////


