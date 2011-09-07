// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The $ replacements are done left-to-right, and, once such are placement is performed, the new
 * replacement text is not subject to further replacements
 *
 * @id: S15.5.4.11_A2_T5;
 * @section: 15.5.4.11;
 * @description: Use $' in replaceValue, searchValue is regular expression /sh/g;
 */

var __str = 'She sells seashells by the seashore.';
var __re = /sh/g;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.replace(__re, "$'" + 'sch')!=='She sells seaells by the seashore.schells by the seaore.schore.') {
  $ERROR('#1: var __str = \'She sells seashells by the seashore.\'; var __re = /sh/g; __str.replace(__re, "$\'" + \'sch\')===\'She sells seaells by the seashore.schells by the seaore.schore.\'. Actual: '+__str.replace(__re, "$'" + 'sch'));
}
//
//////////////////////////////////////////////////////////////////////////////

