// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * URI tests
 *
 * @section: 15.1.3.3;
 * @path: 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.3_encodeURI/S15.1.3.3_A4_T1.js;
 * @description: Checking ENGLISH ALPHABET;
 */

//CHECK#1
if (encodeURI("http://unipro.ru/0123456789") !== "http://unipro.ru/0123456789") {
  $ERROR('#1: http://unipro.ru/0123456789');
}

//CHECK#2
if (encodeURI("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ") !== "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ") {
  $ERROR('#2: aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ');
}

//CHECK#3
if (encodeURI("aA_bB-cC.dD!eE~fF*gG'hH(iI)jJ;kK/lL?mM:nN@oO&pP=qQ+rR$sS,tT9uU8vV7wW6xX5yY4zZ") !== "aA_bB-cC.dD!eE~fF*gG'hH(iI)jJ;kK/lL?mM:nN@oO&pP=qQ+rR$sS,tT9uU8vV7wW6xX5yY4zZ") {
  $ERROR('#3: ');
}

