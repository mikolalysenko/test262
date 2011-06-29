// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.1_A4_T4;
* @section: 11.2.1;
* @assertion: Check type of various properties;
* @description: Checking properties of the Array object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.1_A4_T4",

path: "TestCases/11_Expressions/11.2_Left_Hand_Side_Expressions/11.2.1_Property_Accessors/S11.2.1_A4_T4.js",

assertion: "Check type of various properties",

description: "Checking properties of the Array object",

test: function testcase() {
   //CHECK#1-8
if (typeof Array.prototype  !== "object")  $ERROR('#1: typeof Array.prototype === "object". Actual: ' + (typeof Array.prototype ));
if (typeof Array['prototype'] !== "object")  $ERROR('#2: typeof Array["prototype"] === "object". Actual: ' + (typeof Array["prototype"] ));
if (typeof Array.length  !== "number")  $ERROR('#3: typeof Array.length === "number". Actual: ' + (typeof Array.length ));
if (typeof Array['length'] !== "number")  $ERROR('#4: typeof Array["length"] === "number". Actual: ' + (typeof Array["length"] ));
if (typeof Array.prototype.constructor  !== "function")  $ERROR('#5: typeof Array.prototype.constructor === "function". Actual: ' + (typeof Array.prototype.constructor ));
if (typeof Array.prototype['constructor'] !== "function")  $ERROR('#6: typeof Array.prototype["constructor"] === "function". Actual: ' + (typeof Array.prototype["constructor"] ));
if (typeof Array.prototype.toString  !== "function")  $ERROR('#7: typeof Array.prototype.toString === "function". Actual: ' + (typeof Array.prototype.toString ));
if (typeof Array.prototype['toString'] !== "function")  $ERROR('#8: typeof Array.prototype["toString"] === "function". Actual: ' + (typeof Array.prototype["toString"] ));
if (typeof Array.prototype.join  !== "function")  $ERROR('#9: typeof Array.prototype.join === "function". Actual: ' + (typeof Array.prototype.join ));
if (typeof Array.prototype['join'] !== "function")  $ERROR('#10: typeof Array.prototype["join"] === "function". Actual: ' + (typeof Array.prototype["join"] ));
if (typeof Array.prototype.reverse  !== "function")  $ERROR('#11: typeof Array.prototype.reverse === "function". Actual: ' + (typeof Array.prototype.reverse ));
if (typeof Array.prototype['reverse'] !== "function")  $ERROR('#12: typeof Array.prototype["reverse"] === "function". Actual: ' + (typeof Array.prototype["reverse"] ));
if (typeof Array.prototype.sort  !== "function")  $ERROR('#13: typeof Array.prototype.sort === "function". Actual: ' + (typeof Array.prototype.sort ));
if (typeof Array.prototype['sort'] !== "function")  $ERROR('#14: typeof Array.prototype["sort"] === "function". Actual: ' + (typeof Array.prototype["sort"] ));


 }
});

