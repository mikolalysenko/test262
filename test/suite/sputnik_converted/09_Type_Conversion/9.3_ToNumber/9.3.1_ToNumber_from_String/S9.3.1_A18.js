// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A18;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of DecimalDigit ::: 2 or of HexDigit ::: 2 is 2;
 * @description: Compare Number('0x2') and Number('0X2') with 2;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A18",

path: "TestCases/09_Type_Conversion/9.3_ToNumber/9.3.1_ToNumber_from_String/S9.3.1_A18.js",

assertion: "The MV of DecimalDigit ::: 2 or of HexDigit ::: 2 is 2",

description: "Compare Number(\'0x2\') and Number(\'0X2\') with 2",

test: function testcase() {
   // CHECK#1
if (+("2") !== 2)  {
  $ERROR('#1: +("2") === 2. Actual: ' + (+("2")));
}

// CHECK#2
if (Number("0x2") !== 2)  {
  $ERROR('#2: Number("0x2") === 2. Actual: ' + (Number("0x2")));
}

// CHECK#3
if (Number("0X2") !== 2)  {
  $ERROR('#3: Number("0X2") === 2. Actual: ' + (Number("0X2")));
}

 }
});

