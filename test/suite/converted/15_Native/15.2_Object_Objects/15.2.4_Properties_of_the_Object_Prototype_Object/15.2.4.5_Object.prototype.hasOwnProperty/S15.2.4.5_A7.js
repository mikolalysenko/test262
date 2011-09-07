// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object.prototype.hasOwnProperty can't be used as a constructor
 *
 * @id: S15.2.4.5_A7;
 * @section: 15.2.4.5, 13.2;
 * @description: Checking if creating "new Object.prototype.hasOwnProperty" fails;
 */

var FACTORY = Object.prototype.hasOwnProperty;

try {
  instance = new FACTORY;
  $FAIL('#1: Object.prototype.hasOwnProperty can\'t be used as a constructor');
} catch (e) {
  $PRINT(e);

}

