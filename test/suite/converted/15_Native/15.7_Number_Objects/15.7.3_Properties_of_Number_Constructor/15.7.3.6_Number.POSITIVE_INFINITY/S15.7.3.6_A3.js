// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.POSITIVE_INFINITY is DontDelete
 *
 * @section 15.7.3.6
 * @path 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.6_Number.POSITIVE_INFINITY/S15.7.3.6_A3.js
 * @description Checking if deleting Number.POSITIVE_INFINITY fails
 * @strict_only
 * @negative
 */

// CHECK#1
if (delete Number.POSITIVE_INFINITY !== false) {
  $ERROR('#1: delete Number.POSITIVE_INFINITY === false');
}

