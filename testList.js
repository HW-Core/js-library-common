/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

// list of test files
hw2.define(function () {
    $ = this;
    return {
        dep: [
            $.const.PATH_JS_LIB + "common/Array.js",
            $.const.PATH_JS_LIB + "common/Event.js",
            $.const.PATH_JS_LIB + "common/Object.js",
            $.const.PATH_JS_LIB + "common/Path.js",
            $.const.PATH_JS_LIB + "common/String.js",
            $.const.PATH_JS_LIB + "common/Uri.js",
            $.const.PATH_JS_LIB + "common/Var.js"
        ],
        test: [
            $.const.PATH_JS_LIB + "common/tests/tests/array.js",
            $.const.PATH_JS_LIB + "common/tests/tests/event.js",
            $.const.PATH_JS_LIB + "common/tests/tests/object.js",
            $.const.PATH_JS_LIB + "common/tests/tests/path.js",
            $.const.PATH_JS_LIB + "common/tests/tests/string.js",
            $.const.PATH_JS_LIB + "common/tests/tests/uri.js",
            $.const.PATH_JS_LIB + "common/tests/tests/var.js"
        ]
    };
});
