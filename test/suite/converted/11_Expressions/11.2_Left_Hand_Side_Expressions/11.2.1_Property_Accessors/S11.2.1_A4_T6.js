// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check type of various properties
 *
 * @section 11.2.1
 * @path 11_Expressions/11.2_Left_Hand_Side_Expressions/11.2.1_Property_Accessors/S11.2.1_A4_T6.js
 * @description Checking properties of the Boolean object
 */

//CHECK#1-8
if (typeof Boolean.prototype  !== "object")   $ERROR('#1: typeof Boolean.prototype === "object". Actual: ' + (typeof Boolean.prototype ));
if (typeof Boolean['prototype']  !== "object")  $ERROR('#2: typeof Boolean["prototype"] === "object". Actual: ' + (typeof Boolean["prototype"] ));
if (typeof Boolean.constructor  !== "function")  $ERROR('#3: typeof Boolean.constructor === "function". Actual: ' + (typeof Boolean.constructor ));
if (typeof Boolean['constructor']  !== "function")  $ERROR('#4: typeof Boolean["constructor"] === "function". Actual: ' + (typeof Boolean["constructor"] ));
if (typeof Boolean.prototype.valueOf  !== "function")  $ERROR('#5: typeof Boolean.prototype.valueOf === "function". Actual: ' + (typeof Boolean.prototype.valueOf ));
if (typeof Boolean.prototype['valueOf'] !== "function")  $ERROR('#6: typeof Boolean.prototype["valueOf"] === "function". Actual: ' + (typeof Boolean.prototype["valueOf"] ));
if (typeof Boolean.prototype.toString !== "function")  $ERROR('#7: typeof Boolean.prototype.toString === "function". Actual: ' + (typeof Boolean.prototype.toString ));
if (typeof Boolean.prototype['toString'] !== "function")  $ERROR('#8: typeof Boolean.prototype["toString"] === "function". Actual: ' + (typeof Boolean.prototype["toString"] ));


