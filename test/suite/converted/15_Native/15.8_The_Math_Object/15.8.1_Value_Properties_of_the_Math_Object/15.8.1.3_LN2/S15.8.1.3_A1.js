// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Math.LN2 is approximately 0.6931471805599453
 *
 * @section: 15.8.1.3;
 * @path: 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.3_LN2/S15.8.1.3_A1.js;
 * @description: Comparing Math.LN2 with 0.6931471805599453;
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Math.LN2, 0.6931471805599453)) {
  $ERROR('#1: \'Math.LN2 is not approximately equal to 0.6931471805599453\'');
}

