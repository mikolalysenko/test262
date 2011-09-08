// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String instance has not [[call]] property
 *
 * @section: 15.5.5;
 * @path: 15_Native/15.5_String_Objects/15.5.5_Properties_of_String_Instances/S15.5.5_A1_T2.js;
 * @description: Checking if creating new "String("a|b")()" fails;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  String("a|b")();
  $FAIL('#1: String("a|b")() lead to throwing exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: Exception is instance of TypeError. Actual: exception is '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

