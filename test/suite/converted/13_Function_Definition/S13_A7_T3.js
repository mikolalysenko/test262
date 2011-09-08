// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The FunctionBody must be SourceElements
 *
 * @section: 13;
 * @path: 13_Function_Definition/S13_A7_T3.js;
 * @description: Checking if execution of "function __func(){\A\B\C}" fails;
 * @negative;
 */

function __func(){\A\B\C};

