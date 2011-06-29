// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A24;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of DecimalDigit ::: 8 or of HexDigit ::: 8 is 8;
 * @description: Compare Number('0x8') and Number('0X8') with 8;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A24",

path: "TestCases/09_Type_Conversion/9.3_ToNumber/9.3.1_ToNumber_from_String/S9.3.1_A24.js",

assertion: "The MV of DecimalDigit ::: 8 or of HexDigit ::: 8 is 8",

description: "Compare Number(\'0x8\') and Number(\'0X8\') with 8",

test: function testcase() {
   // CHECK#1
if (+("8") !== 8)  {
  $ERROR('#1: +("8") === 8. Actual: ' + (+("8")));
}

// CHECK#2
if (Number("0x8") !== 8)  {
  $ERROR('#2: Number("0x8") === 8. Actual: ' + (Number("0x8")));
}

// CHECK#3
if (Number("0X8") !== 8)  {
  $ERROR('#3: Number("0X8") === 8. Actual: ' + (Number("0X8")));
}

 }
});

