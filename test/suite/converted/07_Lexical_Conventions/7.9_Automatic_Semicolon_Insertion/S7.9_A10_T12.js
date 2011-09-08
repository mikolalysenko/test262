// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check {} for automatic semicolon insertion
 *
 * @section: 7.9;
 * @path: 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A10_T12.js;
 * @description: Checking if execution of "{ \n a: \n 1 \n } \n 3" passes;
 */

//CHECK#1
{
a:
1 
} 
3

