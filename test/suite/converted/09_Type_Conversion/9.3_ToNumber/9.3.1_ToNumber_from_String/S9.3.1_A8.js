// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The MV of StrUnsignedDecimalLiteral::: DecimalDigits. ExponentPart
 * is the MV of DecimalDigits times 10<sup><small>e</small></sup> , where e is the MV of ExponentPart
 *
 * @section 9.3.1, 15.7.1
 * @path 09_Type_Conversion/9.3_ToNumber/9.3.1_ToNumber_from_String/S9.3.1_A8.js
 * @description Compare Number('1234e5') and Number('1234.e5') with Number('1234')*1e5
 */

// CHECK#1
if (Number("1234e5") !== Number("1234")*1e5)  {
  $ERROR('#1: Number("1234e5") === Number("1234")*1e5');
}

// CHECK#2
if (Number("1234.e5") !== +("1234")*1e5)  {
  $ERROR('#2: Number("1234.e5") === +("1234")*1e5');
}

