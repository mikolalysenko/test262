// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.indexOf works properly
 *
 * @section 15.5.4.7
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A5_T3.js
 * @description Search one symbol from it`s position+1 in the string
 */

var TEST_STRING = new String( " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~" );

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for ( var k = 0, i = 0x0020; i < 0x007e; i++, k++ ) {
    if (TEST_STRING.indexOf( String.fromCharCode(i), k+1 ) !== -1) {
      $ERROR('#'+(i-0x0020)+': TEST_STRING.indexOf( String.fromCharCode('+i+'), '+(k+1)+' )===-1. Actual: '+TEST_STRING.indexOf( String.fromCharCode(i), k+1 )); 
    }
}
//
//////////////////////////////////////////////////////////////////////////////

