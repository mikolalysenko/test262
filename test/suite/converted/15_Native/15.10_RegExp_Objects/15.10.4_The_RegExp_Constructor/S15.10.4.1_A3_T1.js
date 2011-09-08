// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * let P be the empty string if pattern is undefined
 *
 * @section: 15.10.4.1;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.4_The_RegExp_Constructor/S15.10.4.1_A3_T1.js;
 * @description: RegExp is new RegExp;
 */

__re = new RegExp;

//CHECK#1
if (__re.source !== "") {
  $ERROR('#1: __re = new RegExp; __re.source === "". Actual: '+ (__re.source));
}

//CHECK#2
if (__re.multiline !== false) {
  $ERROR('#2: __re = new RegExp; __re.multiline === false. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== false) {
  $ERROR('#3: __re = new RegExp; __re.global === false. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.ignoreCase !== false) {
  $ERROR('#4: __re = new RegExp; __re.ignoreCase === false. Actual: ' + (__re.ignoreCase));
}



