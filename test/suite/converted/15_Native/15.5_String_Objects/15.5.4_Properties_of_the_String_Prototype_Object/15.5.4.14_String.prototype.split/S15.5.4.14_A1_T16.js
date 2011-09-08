// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.split(separator, limit):
 * i) can be transferred to other kinds of objects for use as a method.
 * separator and limit can be any kinds of object since:
 * ii) if separator is not RegExp ToString(separator) performs and
 * iii) ToInteger(limit) performs
 *
 * @section: 15.5.4.14;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.14_String.prototype.split/S15.5.4.14_A1_T16.js;
 * @description: Argument is object, and instance is Number.
 * Object have overrided toString function, that return regexp;
 */

var __obj = {toString:function(){return /\u0037\u0037/g;}};

Number.prototype.split=String.prototype.split;

try {
  var __split = 6776767677.006771122677555.split(__obj);
  $FAIL('#1: "__split = 6776767677.006771122677555.split(__obj)" lead to throwing exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: Exception is instance of TypeError. Actual: '+e);
  }
}

