// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.NaN is DontDelete
 *
 * @section 15.7.3.4
 * @path 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.4_Number.NaN/S15.7.3.4_A3.js
 * @description Checking if deleting Number.NaN fails
 * @strict_only
 * @negative
 */

// CHECK#1
if (delete Number.NaN !== false) {
  $ERROR('#1: delete Number.NaN === false');
}

