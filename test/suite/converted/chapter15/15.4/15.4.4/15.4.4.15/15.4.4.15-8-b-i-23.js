/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/**
 * @path chapter15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-b-i-23.js
 * @description Array.prototype.lastIndexOf - This object is the global object
 */


function testcase() {

        var targetObj = {};
        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[0] = targetObj;
            fnGlobalObject()[100] = "100";
            fnGlobalObject()[200] = "200";
            fnGlobalObject().length = 200;
            return 0 === Array.prototype.lastIndexOf.call(fnGlobalObject(), targetObj) &&
                100 === Array.prototype.lastIndexOf.call(fnGlobalObject(), "100") &&
                -1 === Array.prototype.lastIndexOf.call(fnGlobalObject(), "200");
        } finally {
            delete fnGlobalObject()[0];
            delete fnGlobalObject()[100];
            delete fnGlobalObject()[200];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);
