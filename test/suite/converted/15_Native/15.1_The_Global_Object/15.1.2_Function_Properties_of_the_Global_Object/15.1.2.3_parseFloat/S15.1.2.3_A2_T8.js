// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator remove leading StrWhiteSpaceChar
 *
 * @section: 15.1.2.3;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.3_parseFloat/S15.1.2.3_A2_T8.js;
 * @description: StrWhiteSpaceChar :: LS (U+2028);
 */

//CHECK#1
if (parseFloat("\u20281.1") !== parseFloat("1.1")) {
  $ERROR('#1: parseFloat("\\u20281.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u20281.1")));
}

//CHECK#2
if (parseFloat("\u2028\u2028-1.1") !== parseFloat("-1.1")) {
  $ERROR('#2: parseFloat("\\u2028\\u2028-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u2028\u2028-1.1")));
}

//CHECK#3
if (isNaN(parseFloat("\u2028")) !== true) {
  $ERROR('#3: parseFloat("\\u2028") === Not-a-Number. Actual: ' + (parseFloat("\u2028")));
}

