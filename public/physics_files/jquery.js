//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var $, jQuery;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jquery/jquery.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * jQuery JavaScript Library v1.8.2                                                                                    // 2
 * http://jquery.com/                                                                                                  // 3
 *                                                                                                                     // 4
 * Includes Sizzle.js                                                                                                  // 5
 * http://sizzlejs.com/                                                                                                // 6
 *                                                                                                                     // 7
 * Copyright 2012 jQuery Foundation and other contributors                                                             // 8
 * Released under the MIT license                                                                                      // 9
 * http://jquery.org/license                                                                                           // 10
 *                                                                                                                     // 11
 * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)                                                     // 12
 */                                                                                                                    // 13
(function( window, undefined ) {                                                                                       // 14
var                                                                                                                    // 15
	// A central reference to the root jQuery(document)                                                                   // 16
	rootjQuery,                                                                                                           // 17
                                                                                                                       // 18
	// The deferred used on DOM ready                                                                                     // 19
	readyList,                                                                                                            // 20
                                                                                                                       // 21
	// Use the correct document accordingly with window argument (sandbox)                                                // 22
	document = window.document,                                                                                           // 23
	location = window.location,                                                                                           // 24
	navigator = window.navigator,                                                                                         // 25
                                                                                                                       // 26
	// Map over jQuery in case of overwrite                                                                               // 27
	_jQuery = window.jQuery,                                                                                              // 28
                                                                                                                       // 29
	// Map over the $ in case of overwrite                                                                                // 30
	_$ = window.$,                                                                                                        // 31
                                                                                                                       // 32
	// Save a reference to some core methods                                                                              // 33
	core_push = Array.prototype.push,                                                                                     // 34
	core_slice = Array.prototype.slice,                                                                                   // 35
	core_indexOf = Array.prototype.indexOf,                                                                               // 36
	core_toString = Object.prototype.toString,                                                                            // 37
	core_hasOwn = Object.prototype.hasOwnProperty,                                                                        // 38
	core_trim = String.prototype.trim,                                                                                    // 39
                                                                                                                       // 40
	// Define a local copy of jQuery                                                                                      // 41
	jQuery = function( selector, context ) {                                                                              // 42
		// The jQuery object is actually just the init constructor 'enhanced'                                                // 43
		return new jQuery.fn.init( selector, context, rootjQuery );                                                          // 44
	},                                                                                                                    // 45
                                                                                                                       // 46
	// Used for matching numbers                                                                                          // 47
	core_pnum = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,                                                           // 48
                                                                                                                       // 49
	// Used for detecting and trimming whitespace                                                                         // 50
	core_rnotwhite = /\S/,                                                                                                // 51
	core_rspace = /\s+/,                                                                                                  // 52
                                                                                                                       // 53
	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)                                          // 54
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,                                                                         // 55
                                                                                                                       // 56
	// A simple way to check for HTML strings                                                                             // 57
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)                                                   // 58
	rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,                                                              // 59
                                                                                                                       // 60
	// Match a standalone tag                                                                                             // 61
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,                                                                            // 62
                                                                                                                       // 63
	// JSON RegExp                                                                                                        // 64
	rvalidchars = /^[\],:{}\s]*$/,                                                                                        // 65
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,                                                                                // 66
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,                                                                  // 67
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,                                  // 68
                                                                                                                       // 69
	// Matches dashed string for camelizing                                                                               // 70
	rmsPrefix = /^-ms-/,                                                                                                  // 71
	rdashAlpha = /-([\da-z])/gi,                                                                                          // 72
                                                                                                                       // 73
	// Used by jQuery.camelCase as callback to replace()                                                                  // 74
	fcamelCase = function( all, letter ) {                                                                                // 75
		return ( letter + "" ).toUpperCase();                                                                                // 76
	},                                                                                                                    // 77
                                                                                                                       // 78
	// The ready event handler and self cleanup method                                                                    // 79
	DOMContentLoaded = function() {                                                                                       // 80
		if ( document.addEventListener ) {                                                                                   // 81
			document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );                                        // 82
			jQuery.ready();                                                                                                     // 83
		} else if ( document.readyState === "complete" ) {                                                                   // 84
			// we're here because readyState === "complete" in oldIE                                                            // 85
			// which is good enough for us to call the dom ready!                                                               // 86
			document.detachEvent( "onreadystatechange", DOMContentLoaded );                                                     // 87
			jQuery.ready();                                                                                                     // 88
		}                                                                                                                    // 89
	},                                                                                                                    // 90
                                                                                                                       // 91
	// [[Class]] -> type pairs                                                                                            // 92
	class2type = {};                                                                                                      // 93
                                                                                                                       // 94
jQuery.fn = jQuery.prototype = {                                                                                       // 95
	constructor: jQuery,                                                                                                  // 96
	init: function( selector, context, rootjQuery ) {                                                                     // 97
		var match, elem, ret, doc;                                                                                           // 98
                                                                                                                       // 99
		// Handle $(""), $(null), $(undefined), $(false)                                                                     // 100
		if ( !selector ) {                                                                                                   // 101
			return this;                                                                                                        // 102
		}                                                                                                                    // 103
                                                                                                                       // 104
		// Handle $(DOMElement)                                                                                              // 105
		if ( selector.nodeType ) {                                                                                           // 106
			this.context = this[0] = selector;                                                                                  // 107
			this.length = 1;                                                                                                    // 108
			return this;                                                                                                        // 109
		}                                                                                                                    // 110
                                                                                                                       // 111
		// Handle HTML strings                                                                                               // 112
		if ( typeof selector === "string" ) {                                                                                // 113
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {       // 114
				// Assume that strings that start and end with <> are HTML and skip the regex check                                // 115
				match = [ null, selector, null ];                                                                                  // 116
                                                                                                                       // 117
			} else {                                                                                                            // 118
				match = rquickExpr.exec( selector );                                                                               // 119
			}                                                                                                                   // 120
                                                                                                                       // 121
			// Match html or make sure no context is specified for #id                                                          // 122
			if ( match && (match[1] || !context) ) {                                                                            // 123
                                                                                                                       // 124
				// HANDLE: $(html) -> $(array)                                                                                     // 125
				if ( match[1] ) {                                                                                                  // 126
					context = context instanceof jQuery ? context[0] : context;                                                       // 127
					doc = ( context && context.nodeType ? context.ownerDocument || context : document );                              // 128
                                                                                                                       // 129
					// scripts is true for back-compat                                                                                // 130
					selector = jQuery.parseHTML( match[1], doc, true );                                                               // 131
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {                                           // 132
						this.attr.call( selector, context, true );                                                                       // 133
					}                                                                                                                 // 134
                                                                                                                       // 135
					return jQuery.merge( this, selector );                                                                            // 136
                                                                                                                       // 137
				// HANDLE: $(#id)                                                                                                  // 138
				} else {                                                                                                           // 139
					elem = document.getElementById( match[2] );                                                                       // 140
                                                                                                                       // 141
					// Check parentNode to catch when Blackberry 4.6 returns                                                          // 142
					// nodes that are no longer in the document #6963                                                                 // 143
					if ( elem && elem.parentNode ) {                                                                                  // 144
						// Handle the case where IE and Opera return items                                                               // 145
						// by name instead of ID                                                                                         // 146
						if ( elem.id !== match[2] ) {                                                                                    // 147
							return rootjQuery.find( selector );                                                                             // 148
						}                                                                                                                // 149
                                                                                                                       // 150
						// Otherwise, we inject the element directly into the jQuery object                                              // 151
						this.length = 1;                                                                                                 // 152
						this[0] = elem;                                                                                                  // 153
					}                                                                                                                 // 154
                                                                                                                       // 155
					this.context = document;                                                                                          // 156
					this.selector = selector;                                                                                         // 157
					return this;                                                                                                      // 158
				}                                                                                                                  // 159
                                                                                                                       // 160
			// HANDLE: $(expr, $(...))                                                                                          // 161
			} else if ( !context || context.jquery ) {                                                                          // 162
				return ( context || rootjQuery ).find( selector );                                                                 // 163
                                                                                                                       // 164
			// HANDLE: $(expr, context)                                                                                         // 165
			// (which is just equivalent to: $(context).find(expr)                                                              // 166
			} else {                                                                                                            // 167
				return this.constructor( context ).find( selector );                                                               // 168
			}                                                                                                                   // 169
                                                                                                                       // 170
		// HANDLE: $(function)                                                                                               // 171
		// Shortcut for document ready                                                                                       // 172
		} else if ( jQuery.isFunction( selector ) ) {                                                                        // 173
			return rootjQuery.ready( selector );                                                                                // 174
		}                                                                                                                    // 175
                                                                                                                       // 176
		if ( selector.selector !== undefined ) {                                                                             // 177
			this.selector = selector.selector;                                                                                  // 178
			this.context = selector.context;                                                                                    // 179
		}                                                                                                                    // 180
                                                                                                                       // 181
		return jQuery.makeArray( selector, this );                                                                           // 182
	},                                                                                                                    // 183
                                                                                                                       // 184
	// Start with an empty selector                                                                                       // 185
	selector: "",                                                                                                         // 186
                                                                                                                       // 187
	// The current version of jQuery being used                                                                           // 188
	jquery: "1.8.2",                                                                                                      // 189
                                                                                                                       // 190
	// The default length of a jQuery object is 0                                                                         // 191
	length: 0,                                                                                                            // 192
                                                                                                                       // 193
	// The number of elements contained in the matched element set                                                        // 194
	size: function() {                                                                                                    // 195
		return this.length;                                                                                                  // 196
	},                                                                                                                    // 197
                                                                                                                       // 198
	toArray: function() {                                                                                                 // 199
		return core_slice.call( this );                                                                                      // 200
	},                                                                                                                    // 201
                                                                                                                       // 202
	// Get the Nth element in the matched element set OR                                                                  // 203
	// Get the whole matched element set as a clean array                                                                 // 204
	get: function( num ) {                                                                                                // 205
		return num == null ?                                                                                                 // 206
                                                                                                                       // 207
			// Return a 'clean' array                                                                                           // 208
			this.toArray() :                                                                                                    // 209
                                                                                                                       // 210
			// Return just the object                                                                                           // 211
			( num < 0 ? this[ this.length + num ] : this[ num ] );                                                              // 212
	},                                                                                                                    // 213
                                                                                                                       // 214
	// Take an array of elements and push it onto the stack                                                               // 215
	// (returning the new matched element set)                                                                            // 216
	pushStack: function( elems, name, selector ) {                                                                        // 217
                                                                                                                       // 218
		// Build a new jQuery matched element set                                                                            // 219
		var ret = jQuery.merge( this.constructor(), elems );                                                                 // 220
                                                                                                                       // 221
		// Add the old object onto the stack (as a reference)                                                                // 222
		ret.prevObject = this;                                                                                               // 223
                                                                                                                       // 224
		ret.context = this.context;                                                                                          // 225
                                                                                                                       // 226
		if ( name === "find" ) {                                                                                             // 227
			ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;                                             // 228
		} else if ( name ) {                                                                                                 // 229
			ret.selector = this.selector + "." + name + "(" + selector + ")";                                                   // 230
		}                                                                                                                    // 231
                                                                                                                       // 232
		// Return the newly-formed element set                                                                               // 233
		return ret;                                                                                                          // 234
	},                                                                                                                    // 235
                                                                                                                       // 236
	// Execute a callback for every element in the matched set.                                                           // 237
	// (You can seed the arguments with an array of args, but this is                                                     // 238
	// only used internally.)                                                                                             // 239
	each: function( callback, args ) {                                                                                    // 240
		return jQuery.each( this, callback, args );                                                                          // 241
	},                                                                                                                    // 242
                                                                                                                       // 243
	ready: function( fn ) {                                                                                               // 244
		// Add the callback                                                                                                  // 245
		jQuery.ready.promise().done( fn );                                                                                   // 246
                                                                                                                       // 247
		return this;                                                                                                         // 248
	},                                                                                                                    // 249
                                                                                                                       // 250
	eq: function( i ) {                                                                                                   // 251
		i = +i;                                                                                                              // 252
		return i === -1 ?                                                                                                    // 253
			this.slice( i ) :                                                                                                   // 254
			this.slice( i, i + 1 );                                                                                             // 255
	},                                                                                                                    // 256
                                                                                                                       // 257
	first: function() {                                                                                                   // 258
		return this.eq( 0 );                                                                                                 // 259
	},                                                                                                                    // 260
                                                                                                                       // 261
	last: function() {                                                                                                    // 262
		return this.eq( -1 );                                                                                                // 263
	},                                                                                                                    // 264
                                                                                                                       // 265
	slice: function() {                                                                                                   // 266
		return this.pushStack( core_slice.apply( this, arguments ),                                                          // 267
			"slice", core_slice.call(arguments).join(",") );                                                                    // 268
	},                                                                                                                    // 269
                                                                                                                       // 270
	map: function( callback ) {                                                                                           // 271
		return this.pushStack( jQuery.map(this, function( elem, i ) {                                                        // 272
			return callback.call( elem, i, elem );                                                                              // 273
		}));                                                                                                                 // 274
	},                                                                                                                    // 275
                                                                                                                       // 276
	end: function() {                                                                                                     // 277
		return this.prevObject || this.constructor(null);                                                                    // 278
	},                                                                                                                    // 279
                                                                                                                       // 280
	// For internal use only.                                                                                             // 281
	// Behaves like an Array's method, not like a jQuery method.                                                          // 282
	push: core_push,                                                                                                      // 283
	sort: [].sort,                                                                                                        // 284
	splice: [].splice                                                                                                     // 285
};                                                                                                                     // 286
                                                                                                                       // 287
// Give the init function the jQuery prototype for later instantiation                                                 // 288
jQuery.fn.init.prototype = jQuery.fn;                                                                                  // 289
                                                                                                                       // 290
jQuery.extend = jQuery.fn.extend = function() {                                                                        // 291
	var options, name, src, copy, copyIsArray, clone,                                                                     // 292
		target = arguments[0] || {},                                                                                         // 293
		i = 1,                                                                                                               // 294
		length = arguments.length,                                                                                           // 295
		deep = false;                                                                                                        // 296
                                                                                                                       // 297
	// Handle a deep copy situation                                                                                       // 298
	if ( typeof target === "boolean" ) {                                                                                  // 299
		deep = target;                                                                                                       // 300
		target = arguments[1] || {};                                                                                         // 301
		// skip the boolean and the target                                                                                   // 302
		i = 2;                                                                                                               // 303
	}                                                                                                                     // 304
                                                                                                                       // 305
	// Handle case when target is a string or something (possible in deep copy)                                           // 306
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {                                                     // 307
		target = {};                                                                                                         // 308
	}                                                                                                                     // 309
                                                                                                                       // 310
	// extend jQuery itself if only one argument is passed                                                                // 311
	if ( length === i ) {                                                                                                 // 312
		target = this;                                                                                                       // 313
		--i;                                                                                                                 // 314
	}                                                                                                                     // 315
                                                                                                                       // 316
	for ( ; i < length; i++ ) {                                                                                           // 317
		// Only deal with non-null/undefined values                                                                          // 318
		if ( (options = arguments[ i ]) != null ) {                                                                          // 319
			// Extend the base object                                                                                           // 320
			for ( name in options ) {                                                                                           // 321
				src = target[ name ];                                                                                              // 322
				copy = options[ name ];                                                                                            // 323
                                                                                                                       // 324
				// Prevent never-ending loop                                                                                       // 325
				if ( target === copy ) {                                                                                           // 326
					continue;                                                                                                         // 327
				}                                                                                                                  // 328
                                                                                                                       // 329
				// Recurse if we're merging plain objects or arrays                                                                // 330
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {                    // 331
					if ( copyIsArray ) {                                                                                              // 332
						copyIsArray = false;                                                                                             // 333
						clone = src && jQuery.isArray(src) ? src : [];                                                                   // 334
                                                                                                                       // 335
					} else {                                                                                                          // 336
						clone = src && jQuery.isPlainObject(src) ? src : {};                                                             // 337
					}                                                                                                                 // 338
                                                                                                                       // 339
					// Never move original objects, clone them                                                                        // 340
					target[ name ] = jQuery.extend( deep, clone, copy );                                                              // 341
                                                                                                                       // 342
				// Don't bring in undefined values                                                                                 // 343
				} else if ( copy !== undefined ) {                                                                                 // 344
					target[ name ] = copy;                                                                                            // 345
				}                                                                                                                  // 346
			}                                                                                                                   // 347
		}                                                                                                                    // 348
	}                                                                                                                     // 349
                                                                                                                       // 350
	// Return the modified object                                                                                         // 351
	return target;                                                                                                        // 352
};                                                                                                                     // 353
                                                                                                                       // 354
jQuery.extend({                                                                                                        // 355
	noConflict: function( deep ) {                                                                                        // 356
		if ( window.$ === jQuery ) {                                                                                         // 357
			window.$ = _$;                                                                                                      // 358
		}                                                                                                                    // 359
                                                                                                                       // 360
		if ( deep && window.jQuery === jQuery ) {                                                                            // 361
			window.jQuery = _jQuery;                                                                                            // 362
		}                                                                                                                    // 363
                                                                                                                       // 364
		return jQuery;                                                                                                       // 365
	},                                                                                                                    // 366
                                                                                                                       // 367
	// Is the DOM ready to be used? Set to true once it occurs.                                                           // 368
	isReady: false,                                                                                                       // 369
                                                                                                                       // 370
	// A counter to track how many items to wait for before                                                               // 371
	// the ready event fires. See #6781                                                                                   // 372
	readyWait: 1,                                                                                                         // 373
                                                                                                                       // 374
	// Hold (or release) the ready event                                                                                  // 375
	holdReady: function( hold ) {                                                                                         // 376
		if ( hold ) {                                                                                                        // 377
			jQuery.readyWait++;                                                                                                 // 378
		} else {                                                                                                             // 379
			jQuery.ready( true );                                                                                               // 380
		}                                                                                                                    // 381
	},                                                                                                                    // 382
                                                                                                                       // 383
	// Handle when the DOM is ready                                                                                       // 384
	ready: function( wait ) {                                                                                             // 385
                                                                                                                       // 386
		// Abort if there are pending holds or we're already ready                                                           // 387
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {                                                         // 388
			return;                                                                                                             // 389
		}                                                                                                                    // 390
                                                                                                                       // 391
		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).                             // 392
		if ( !document.body ) {                                                                                              // 393
			return setTimeout( jQuery.ready, 1 );                                                                               // 394
		}                                                                                                                    // 395
                                                                                                                       // 396
		// Remember that the DOM is ready                                                                                    // 397
		jQuery.isReady = true;                                                                                               // 398
                                                                                                                       // 399
		// If a normal DOM Ready event fired, decrement, and wait if need be                                                 // 400
		if ( wait !== true && --jQuery.readyWait > 0 ) {                                                                     // 401
			return;                                                                                                             // 402
		}                                                                                                                    // 403
                                                                                                                       // 404
		// If there are functions bound, to execute                                                                          // 405
		readyList.resolveWith( document, [ jQuery ] );                                                                       // 406
                                                                                                                       // 407
		// Trigger any bound ready events                                                                                    // 408
		if ( jQuery.fn.trigger ) {                                                                                           // 409
			jQuery( document ).trigger("ready").off("ready");                                                                   // 410
		}                                                                                                                    // 411
	},                                                                                                                    // 412
                                                                                                                       // 413
	// See test/unit/core.js for details concerning isFunction.                                                           // 414
	// Since version 1.3, DOM methods and functions like alert                                                            // 415
	// aren't supported. They return false on IE (#2968).                                                                 // 416
	isFunction: function( obj ) {                                                                                         // 417
		return jQuery.type(obj) === "function";                                                                              // 418
	},                                                                                                                    // 419
                                                                                                                       // 420
	isArray: Array.isArray || function( obj ) {                                                                           // 421
		return jQuery.type(obj) === "array";                                                                                 // 422
	},                                                                                                                    // 423
                                                                                                                       // 424
	isWindow: function( obj ) {                                                                                           // 425
		return obj != null && obj == obj.window;                                                                             // 426
	},                                                                                                                    // 427
                                                                                                                       // 428
	isNumeric: function( obj ) {                                                                                          // 429
		return !isNaN( parseFloat(obj) ) && isFinite( obj );                                                                 // 430
	},                                                                                                                    // 431
                                                                                                                       // 432
	type: function( obj ) {                                                                                               // 433
		return obj == null ?                                                                                                 // 434
			String( obj ) :                                                                                                     // 435
			class2type[ core_toString.call(obj) ] || "object";                                                                  // 436
	},                                                                                                                    // 437
                                                                                                                       // 438
	isPlainObject: function( obj ) {                                                                                      // 439
		// Must be an Object.                                                                                                // 440
		// Because of IE, we also have to check the presence of the constructor property.                                    // 441
		// Make sure that DOM nodes and window objects don't pass through, as well                                           // 442
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {                             // 443
			return false;                                                                                                       // 444
		}                                                                                                                    // 445
                                                                                                                       // 446
		try {                                                                                                                // 447
			// Not own constructor property must be Object                                                                      // 448
			if ( obj.constructor &&                                                                                             // 449
				!core_hasOwn.call(obj, "constructor") &&                                                                           // 450
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {                                                  // 451
				return false;                                                                                                      // 452
			}                                                                                                                   // 453
		} catch ( e ) {                                                                                                      // 454
			// IE8,9 Will throw exceptions on certain host objects #9897                                                        // 455
			return false;                                                                                                       // 456
		}                                                                                                                    // 457
                                                                                                                       // 458
		// Own properties are enumerated firstly, so to speed up,                                                            // 459
		// if last one is own, then all properties are own.                                                                  // 460
                                                                                                                       // 461
		var key;                                                                                                             // 462
		for ( key in obj ) {}                                                                                                // 463
                                                                                                                       // 464
		return key === undefined || core_hasOwn.call( obj, key );                                                            // 465
	},                                                                                                                    // 466
                                                                                                                       // 467
	isEmptyObject: function( obj ) {                                                                                      // 468
		var name;                                                                                                            // 469
		for ( name in obj ) {                                                                                                // 470
			return false;                                                                                                       // 471
		}                                                                                                                    // 472
		return true;                                                                                                         // 473
	},                                                                                                                    // 474
                                                                                                                       // 475
	error: function( msg ) {                                                                                              // 476
		throw new Error( msg );                                                                                              // 477
	},                                                                                                                    // 478
                                                                                                                       // 479
	// data: string of html                                                                                               // 480
	// context (optional): If specified, the fragment will be created in this context, defaults to document               // 481
	// scripts (optional): If true, will include scripts passed in the html string                                        // 482
	parseHTML: function( data, context, scripts ) {                                                                       // 483
		var parsed;                                                                                                          // 484
		if ( !data || typeof data !== "string" ) {                                                                           // 485
			return null;                                                                                                        // 486
		}                                                                                                                    // 487
		if ( typeof context === "boolean" ) {                                                                                // 488
			scripts = context;                                                                                                  // 489
			context = 0;                                                                                                        // 490
		}                                                                                                                    // 491
		context = context || document;                                                                                       // 492
                                                                                                                       // 493
		// Single tag                                                                                                        // 494
		if ( (parsed = rsingleTag.exec( data )) ) {                                                                          // 495
			return [ context.createElement( parsed[1] ) ];                                                                      // 496
		}                                                                                                                    // 497
                                                                                                                       // 498
		parsed = jQuery.buildFragment( [ data ], context, scripts ? null : [] );                                             // 499
		return jQuery.merge( [],                                                                                             // 500
			(parsed.cacheable ? jQuery.clone( parsed.fragment ) : parsed.fragment).childNodes );                                // 501
	},                                                                                                                    // 502
                                                                                                                       // 503
	parseJSON: function( data ) {                                                                                         // 504
		if ( !data || typeof data !== "string") {                                                                            // 505
			return null;                                                                                                        // 506
		}                                                                                                                    // 507
                                                                                                                       // 508
		// Make sure leading/trailing whitespace is removed (IE can't handle it)                                             // 509
		data = jQuery.trim( data );                                                                                          // 510
                                                                                                                       // 511
		// Attempt to parse using the native JSON parser first                                                               // 512
		if ( window.JSON && window.JSON.parse ) {                                                                            // 513
			return window.JSON.parse( data );                                                                                   // 514
		}                                                                                                                    // 515
                                                                                                                       // 516
		// Make sure the incoming data is actual JSON                                                                        // 517
		// Logic borrowed from http://json.org/json2.js                                                                      // 518
		if ( rvalidchars.test( data.replace( rvalidescape, "@" )                                                             // 519
			.replace( rvalidtokens, "]" )                                                                                       // 520
			.replace( rvalidbraces, "")) ) {                                                                                    // 521
                                                                                                                       // 522
			return ( new Function( "return " + data ) )();                                                                      // 523
                                                                                                                       // 524
		}                                                                                                                    // 525
		jQuery.error( "Invalid JSON: " + data );                                                                             // 526
	},                                                                                                                    // 527
                                                                                                                       // 528
	// Cross-browser xml parsing                                                                                          // 529
	parseXML: function( data ) {                                                                                          // 530
		var xml, tmp;                                                                                                        // 531
		if ( !data || typeof data !== "string" ) {                                                                           // 532
			return null;                                                                                                        // 533
		}                                                                                                                    // 534
		try {                                                                                                                // 535
			if ( window.DOMParser ) { // Standard                                                                               // 536
				tmp = new DOMParser();                                                                                             // 537
				xml = tmp.parseFromString( data , "text/xml" );                                                                    // 538
			} else { // IE                                                                                                      // 539
				xml = new ActiveXObject( "Microsoft.XMLDOM" );                                                                     // 540
				xml.async = "false";                                                                                               // 541
				xml.loadXML( data );                                                                                               // 542
			}                                                                                                                   // 543
		} catch( e ) {                                                                                                       // 544
			xml = undefined;                                                                                                    // 545
		}                                                                                                                    // 546
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {                            // 547
			jQuery.error( "Invalid XML: " + data );                                                                             // 548
		}                                                                                                                    // 549
		return xml;                                                                                                          // 550
	},                                                                                                                    // 551
                                                                                                                       // 552
	noop: function() {},                                                                                                  // 553
                                                                                                                       // 554
	// Evaluates a script in a global context                                                                             // 555
	// Workarounds based on findings by Jim Driscoll                                                                      // 556
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context                            // 557
	globalEval: function( data ) {                                                                                        // 558
		if ( data && core_rnotwhite.test( data ) ) {                                                                         // 559
			// We use execScript on Internet Explorer                                                                           // 560
			// We use an anonymous function so that context is window                                                           // 561
			// rather than jQuery in Firefox                                                                                    // 562
			( window.execScript || function( data ) {                                                                           // 563
				window[ "eval" ].call( window, data );                                                                             // 564
			} )( data );                                                                                                        // 565
		}                                                                                                                    // 566
	},                                                                                                                    // 567
                                                                                                                       // 568
	// Convert dashed to camelCase; used by the css and data modules                                                      // 569
	// Microsoft forgot to hump their vendor prefix (#9572)                                                               // 570
	camelCase: function( string ) {                                                                                       // 571
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );                                         // 572
	},                                                                                                                    // 573
                                                                                                                       // 574
	nodeName: function( elem, name ) {                                                                                    // 575
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();                                          // 576
	},                                                                                                                    // 577
                                                                                                                       // 578
	// args is for internal usage only                                                                                    // 579
	each: function( obj, callback, args ) {                                                                               // 580
		var name,                                                                                                            // 581
			i = 0,                                                                                                              // 582
			length = obj.length,                                                                                                // 583
			isObj = length === undefined || jQuery.isFunction( obj );                                                           // 584
                                                                                                                       // 585
		if ( args ) {                                                                                                        // 586
			if ( isObj ) {                                                                                                      // 587
				for ( name in obj ) {                                                                                              // 588
					if ( callback.apply( obj[ name ], args ) === false ) {                                                            // 589
						break;                                                                                                           // 590
					}                                                                                                                 // 591
				}                                                                                                                  // 592
			} else {                                                                                                            // 593
				for ( ; i < length; ) {                                                                                            // 594
					if ( callback.apply( obj[ i++ ], args ) === false ) {                                                             // 595
						break;                                                                                                           // 596
					}                                                                                                                 // 597
				}                                                                                                                  // 598
			}                                                                                                                   // 599
                                                                                                                       // 600
		// A special, fast, case for the most common use of each                                                             // 601
		} else {                                                                                                             // 602
			if ( isObj ) {                                                                                                      // 603
				for ( name in obj ) {                                                                                              // 604
					if ( callback.call( obj[ name ], name, obj[ name ] ) === false ) {                                                // 605
						break;                                                                                                           // 606
					}                                                                                                                 // 607
				}                                                                                                                  // 608
			} else {                                                                                                            // 609
				for ( ; i < length; ) {                                                                                            // 610
					if ( callback.call( obj[ i ], i, obj[ i++ ] ) === false ) {                                                       // 611
						break;                                                                                                           // 612
					}                                                                                                                 // 613
				}                                                                                                                  // 614
			}                                                                                                                   // 615
		}                                                                                                                    // 616
                                                                                                                       // 617
		return obj;                                                                                                          // 618
	},                                                                                                                    // 619
                                                                                                                       // 620
	// Use native String.trim function wherever possible                                                                  // 621
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?                                                                    // 622
		function( text ) {                                                                                                   // 623
			return text == null ?                                                                                               // 624
				"" :                                                                                                               // 625
				core_trim.call( text );                                                                                            // 626
		} :                                                                                                                  // 627
                                                                                                                       // 628
		// Otherwise use our own trimming functionality                                                                      // 629
		function( text ) {                                                                                                   // 630
			return text == null ?                                                                                               // 631
				"" :                                                                                                               // 632
				( text + "" ).replace( rtrim, "" );                                                                                // 633
		},                                                                                                                   // 634
                                                                                                                       // 635
	// results is for internal usage only                                                                                 // 636
	makeArray: function( arr, results ) {                                                                                 // 637
		var type,                                                                                                            // 638
			ret = results || [];                                                                                                // 639
                                                                                                                       // 640
		if ( arr != null ) {                                                                                                 // 641
			// The window, strings (and functions) also have 'length'                                                           // 642
			// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930                                              // 643
			type = jQuery.type( arr );                                                                                          // 644
                                                                                                                       // 645
			if ( arr.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( arr ) ) {
				core_push.call( ret, arr );                                                                                        // 647
			} else {                                                                                                            // 648
				jQuery.merge( ret, arr );                                                                                          // 649
			}                                                                                                                   // 650
		}                                                                                                                    // 651
                                                                                                                       // 652
		return ret;                                                                                                          // 653
	},                                                                                                                    // 654
                                                                                                                       // 655
	inArray: function( elem, arr, i ) {                                                                                   // 656
		var len;                                                                                                             // 657
                                                                                                                       // 658
		if ( arr ) {                                                                                                         // 659
			if ( core_indexOf ) {                                                                                               // 660
				return core_indexOf.call( arr, elem, i );                                                                          // 661
			}                                                                                                                   // 662
                                                                                                                       // 663
			len = arr.length;                                                                                                   // 664
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;                                                                     // 665
                                                                                                                       // 666
			for ( ; i < len; i++ ) {                                                                                            // 667
				// Skip accessing in sparse arrays                                                                                 // 668
				if ( i in arr && arr[ i ] === elem ) {                                                                             // 669
					return i;                                                                                                         // 670
				}                                                                                                                  // 671
			}                                                                                                                   // 672
		}                                                                                                                    // 673
                                                                                                                       // 674
		return -1;                                                                                                           // 675
	},                                                                                                                    // 676
                                                                                                                       // 677
	merge: function( first, second ) {                                                                                    // 678
		var l = second.length,                                                                                               // 679
			i = first.length,                                                                                                   // 680
			j = 0;                                                                                                              // 681
                                                                                                                       // 682
		if ( typeof l === "number" ) {                                                                                       // 683
			for ( ; j < l; j++ ) {                                                                                              // 684
				first[ i++ ] = second[ j ];                                                                                        // 685
			}                                                                                                                   // 686
                                                                                                                       // 687
		} else {                                                                                                             // 688
			while ( second[j] !== undefined ) {                                                                                 // 689
				first[ i++ ] = second[ j++ ];                                                                                      // 690
			}                                                                                                                   // 691
		}                                                                                                                    // 692
                                                                                                                       // 693
		first.length = i;                                                                                                    // 694
                                                                                                                       // 695
		return first;                                                                                                        // 696
	},                                                                                                                    // 697
                                                                                                                       // 698
	grep: function( elems, callback, inv ) {                                                                              // 699
		var retVal,                                                                                                          // 700
			ret = [],                                                                                                           // 701
			i = 0,                                                                                                              // 702
			length = elems.length;                                                                                              // 703
		inv = !!inv;                                                                                                         // 704
                                                                                                                       // 705
		// Go through the array, only saving the items                                                                       // 706
		// that pass the validator function                                                                                  // 707
		for ( ; i < length; i++ ) {                                                                                          // 708
			retVal = !!callback( elems[ i ], i );                                                                               // 709
			if ( inv !== retVal ) {                                                                                             // 710
				ret.push( elems[ i ] );                                                                                            // 711
			}                                                                                                                   // 712
		}                                                                                                                    // 713
                                                                                                                       // 714
		return ret;                                                                                                          // 715
	},                                                                                                                    // 716
                                                                                                                       // 717
	// arg is for internal usage only                                                                                     // 718
	map: function( elems, callback, arg ) {                                                                               // 719
		var value, key,                                                                                                      // 720
			ret = [],                                                                                                           // 721
			i = 0,                                                                                                              // 722
			length = elems.length,                                                                                              // 723
			// jquery objects are treated as arrays                                                                             // 724
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;
                                                                                                                       // 726
		// Go through the array, translating each of the items to their                                                      // 727
		if ( isArray ) {                                                                                                     // 728
			for ( ; i < length; i++ ) {                                                                                         // 729
				value = callback( elems[ i ], i, arg );                                                                            // 730
                                                                                                                       // 731
				if ( value != null ) {                                                                                             // 732
					ret[ ret.length ] = value;                                                                                        // 733
				}                                                                                                                  // 734
			}                                                                                                                   // 735
                                                                                                                       // 736
		// Go through every key on the object,                                                                               // 737
		} else {                                                                                                             // 738
			for ( key in elems ) {                                                                                              // 739
				value = callback( elems[ key ], key, arg );                                                                        // 740
                                                                                                                       // 741
				if ( value != null ) {                                                                                             // 742
					ret[ ret.length ] = value;                                                                                        // 743
				}                                                                                                                  // 744
			}                                                                                                                   // 745
		}                                                                                                                    // 746
                                                                                                                       // 747
		// Flatten any nested arrays                                                                                         // 748
		return ret.concat.apply( [], ret );                                                                                  // 749
	},                                                                                                                    // 750
                                                                                                                       // 751
	// A global GUID counter for objects                                                                                  // 752
	guid: 1,                                                                                                              // 753
                                                                                                                       // 754
	// Bind a function to a context, optionally partially applying any                                                    // 755
	// arguments.                                                                                                         // 756
	proxy: function( fn, context ) {                                                                                      // 757
		var tmp, args, proxy;                                                                                                // 758
                                                                                                                       // 759
		if ( typeof context === "string" ) {                                                                                 // 760
			tmp = fn[ context ];                                                                                                // 761
			context = fn;                                                                                                       // 762
			fn = tmp;                                                                                                           // 763
		}                                                                                                                    // 764
                                                                                                                       // 765
		// Quick check to determine if target is callable, in the spec                                                       // 766
		// this throws a TypeError, but we will just return undefined.                                                       // 767
		if ( !jQuery.isFunction( fn ) ) {                                                                                    // 768
			return undefined;                                                                                                   // 769
		}                                                                                                                    // 770
                                                                                                                       // 771
		// Simulated bind                                                                                                    // 772
		args = core_slice.call( arguments, 2 );                                                                              // 773
		proxy = function() {                                                                                                 // 774
			return fn.apply( context, args.concat( core_slice.call( arguments ) ) );                                            // 775
		};                                                                                                                   // 776
                                                                                                                       // 777
		// Set the guid of unique handler to the same of original handler, so it can be removed                              // 778
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;                                                                     // 779
                                                                                                                       // 780
		return proxy;                                                                                                        // 781
	},                                                                                                                    // 782
                                                                                                                       // 783
	// Multifunctional method to get and set values of a collection                                                       // 784
	// The value/s can optionally be executed if it's a function                                                          // 785
	access: function( elems, fn, key, value, chainable, emptyGet, pass ) {                                                // 786
		var exec,                                                                                                            // 787
			bulk = key == null,                                                                                                 // 788
			i = 0,                                                                                                              // 789
			length = elems.length;                                                                                              // 790
                                                                                                                       // 791
		// Sets many values                                                                                                  // 792
		if ( key && typeof key === "object" ) {                                                                              // 793
			for ( i in key ) {                                                                                                  // 794
				jQuery.access( elems, fn, i, key[i], 1, emptyGet, value );                                                         // 795
			}                                                                                                                   // 796
			chainable = 1;                                                                                                      // 797
                                                                                                                       // 798
		// Sets one value                                                                                                    // 799
		} else if ( value !== undefined ) {                                                                                  // 800
			// Optionally, function values get executed if exec is true                                                         // 801
			exec = pass === undefined && jQuery.isFunction( value );                                                            // 802
                                                                                                                       // 803
			if ( bulk ) {                                                                                                       // 804
				// Bulk operations only iterate when executing function values                                                     // 805
				if ( exec ) {                                                                                                      // 806
					exec = fn;                                                                                                        // 807
					fn = function( elem, key, value ) {                                                                               // 808
						return exec.call( jQuery( elem ), value );                                                                       // 809
					};                                                                                                                // 810
                                                                                                                       // 811
				// Otherwise they run against the entire set                                                                       // 812
				} else {                                                                                                           // 813
					fn.call( elems, value );                                                                                          // 814
					fn = null;                                                                                                        // 815
				}                                                                                                                  // 816
			}                                                                                                                   // 817
                                                                                                                       // 818
			if ( fn ) {                                                                                                         // 819
				for (; i < length; i++ ) {                                                                                         // 820
					fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );                         // 821
				}                                                                                                                  // 822
			}                                                                                                                   // 823
                                                                                                                       // 824
			chainable = 1;                                                                                                      // 825
		}                                                                                                                    // 826
                                                                                                                       // 827
		return chainable ?                                                                                                   // 828
			elems :                                                                                                             // 829
                                                                                                                       // 830
			// Gets                                                                                                             // 831
			bulk ?                                                                                                              // 832
				fn.call( elems ) :                                                                                                 // 833
				length ? fn( elems[0], key ) : emptyGet;                                                                           // 834
	},                                                                                                                    // 835
                                                                                                                       // 836
	now: function() {                                                                                                     // 837
		return ( new Date() ).getTime();                                                                                     // 838
	}                                                                                                                     // 839
});                                                                                                                    // 840
                                                                                                                       // 841
jQuery.ready.promise = function( obj ) {                                                                               // 842
	if ( !readyList ) {                                                                                                   // 843
                                                                                                                       // 844
		readyList = jQuery.Deferred();                                                                                       // 845
                                                                                                                       // 846
		// Catch cases where $(document).ready() is called after the browser event has already occurred.                     // 847
		// we once tried to use readyState "interactive" here, but it caused issues like the one                             // 848
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15                                         // 849
		if ( document.readyState === "complete" ) {                                                                          // 850
			// Handle it asynchronously to allow scripts the opportunity to delay ready                                         // 851
			setTimeout( jQuery.ready, 1 );                                                                                      // 852
                                                                                                                       // 853
		// Standards-based browsers support DOMContentLoaded                                                                 // 854
		} else if ( document.addEventListener ) {                                                                            // 855
			// Use the handy event callback                                                                                     // 856
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );                                           // 857
                                                                                                                       // 858
			// A fallback to window.onload, that will always work                                                               // 859
			window.addEventListener( "load", jQuery.ready, false );                                                             // 860
                                                                                                                       // 861
		// If IE event model is used                                                                                         // 862
		} else {                                                                                                             // 863
			// Ensure firing before onload, maybe late but safe also for iframes                                                // 864
			document.attachEvent( "onreadystatechange", DOMContentLoaded );                                                     // 865
                                                                                                                       // 866
			// A fallback to window.onload, that will always work                                                               // 867
			window.attachEvent( "onload", jQuery.ready );                                                                       // 868
                                                                                                                       // 869
			// If IE and not a frame                                                                                            // 870
			// continually check to see if the document is ready                                                                // 871
			var top = false;                                                                                                    // 872
                                                                                                                       // 873
			try {                                                                                                               // 874
				top = window.frameElement == null && document.documentElement;                                                     // 875
			} catch(e) {}                                                                                                       // 876
                                                                                                                       // 877
			if ( top && top.doScroll ) {                                                                                        // 878
				(function doScrollCheck() {                                                                                        // 879
					if ( !jQuery.isReady ) {                                                                                          // 880
                                                                                                                       // 881
						try {                                                                                                            // 882
							// Use the trick by Diego Perini                                                                                // 883
							// http://javascript.nwbox.com/IEContentLoaded/                                                                 // 884
							top.doScroll("left");                                                                                           // 885
						} catch(e) {                                                                                                     // 886
							return setTimeout( doScrollCheck, 50 );                                                                         // 887
						}                                                                                                                // 888
                                                                                                                       // 889
						// and execute any waiting functions                                                                             // 890
						jQuery.ready();                                                                                                  // 891
					}                                                                                                                 // 892
				})();                                                                                                              // 893
			}                                                                                                                   // 894
		}                                                                                                                    // 895
	}                                                                                                                     // 896
	return readyList.promise( obj );                                                                                      // 897
};                                                                                                                     // 898
                                                                                                                       // 899
// Populate the class2type map                                                                                         // 900
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {                  // 901
	class2type[ "[object " + name + "]" ] = name.toLowerCase();                                                           // 902
});                                                                                                                    // 903
                                                                                                                       // 904
// All jQuery objects should point back to these                                                                       // 905
rootjQuery = jQuery(document);                                                                                         // 906
// String to Object options format cache                                                                               // 907
var optionsCache = {};                                                                                                 // 908
                                                                                                                       // 909
// Convert String-formatted options into Object-formatted ones and store in cache                                      // 910
function createOptions( options ) {                                                                                    // 911
	var object = optionsCache[ options ] = {};                                                                            // 912
	jQuery.each( options.split( core_rspace ), function( _, flag ) {                                                      // 913
		object[ flag ] = true;                                                                                               // 914
	});                                                                                                                   // 915
	return object;                                                                                                        // 916
}                                                                                                                      // 917
                                                                                                                       // 918
/*                                                                                                                     // 919
 * Create a callback list using the following parameters:                                                              // 920
 *                                                                                                                     // 921
 *	options: an optional list of space-separated options that will change how                                           // 922
 *			the callback list behaves or a more traditional option object                                                     // 923
 *                                                                                                                     // 924
 * By default a callback list will act like an event callback list and can be                                          // 925
 * "fired" multiple times.                                                                                             // 926
 *                                                                                                                     // 927
 * Possible options:                                                                                                   // 928
 *                                                                                                                     // 929
 *	once:			will ensure the callback list can only be fired once (like a Deferred)                                      // 930
 *                                                                                                                     // 931
 *	memory:			will keep track of previous values and will call any callback added                                       // 932
 *					after the list has been fired right away with the latest "memorized"                                            // 933
 *					values (like a Deferred)                                                                                        // 934
 *                                                                                                                     // 935
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)                                  // 936
 *                                                                                                                     // 937
 *	stopOnFalse:	interrupt callings when a callback returns false                                                       // 938
 *                                                                                                                     // 939
 */                                                                                                                    // 940
jQuery.Callbacks = function( options ) {                                                                               // 941
                                                                                                                       // 942
	// Convert options from String-formatted to Object-formatted if needed                                                // 943
	// (we check in cache first)                                                                                          // 944
	options = typeof options === "string" ?                                                                               // 945
		( optionsCache[ options ] || createOptions( options ) ) :                                                            // 946
		jQuery.extend( {}, options );                                                                                        // 947
                                                                                                                       // 948
	var // Last fire value (for non-forgettable lists)                                                                    // 949
		memory,                                                                                                              // 950
		// Flag to know if list was already fired                                                                            // 951
		fired,                                                                                                               // 952
		// Flag to know if list is currently firing                                                                          // 953
		firing,                                                                                                              // 954
		// First callback to fire (used internally by add and fireWith)                                                      // 955
		firingStart,                                                                                                         // 956
		// End of the loop when firing                                                                                       // 957
		firingLength,                                                                                                        // 958
		// Index of currently firing callback (modified by remove if needed)                                                 // 959
		firingIndex,                                                                                                         // 960
		// Actual callback list                                                                                              // 961
		list = [],                                                                                                           // 962
		// Stack of fire calls for repeatable lists                                                                          // 963
		stack = !options.once && [],                                                                                         // 964
		// Fire callbacks                                                                                                    // 965
		fire = function( data ) {                                                                                            // 966
			memory = options.memory && data;                                                                                    // 967
			fired = true;                                                                                                       // 968
			firingIndex = firingStart || 0;                                                                                     // 969
			firingStart = 0;                                                                                                    // 970
			firingLength = list.length;                                                                                         // 971
			firing = true;                                                                                                      // 972
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {                                                       // 973
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {                        // 974
					memory = false; // To prevent further calls using add                                                             // 975
					break;                                                                                                            // 976
				}                                                                                                                  // 977
			}                                                                                                                   // 978
			firing = false;                                                                                                     // 979
			if ( list ) {                                                                                                       // 980
				if ( stack ) {                                                                                                     // 981
					if ( stack.length ) {                                                                                             // 982
						fire( stack.shift() );                                                                                           // 983
					}                                                                                                                 // 984
				} else if ( memory ) {                                                                                             // 985
					list = [];                                                                                                        // 986
				} else {                                                                                                           // 987
					self.disable();                                                                                                   // 988
				}                                                                                                                  // 989
			}                                                                                                                   // 990
		},                                                                                                                   // 991
		// Actual Callbacks object                                                                                           // 992
		self = {                                                                                                             // 993
			// Add a callback or a collection of callbacks to the list                                                          // 994
			add: function() {                                                                                                   // 995
				if ( list ) {                                                                                                      // 996
					// First, we save the current length                                                                              // 997
					var start = list.length;                                                                                          // 998
					(function add( args ) {                                                                                           // 999
						jQuery.each( args, function( _, arg ) {                                                                          // 1000
							var type = jQuery.type( arg );                                                                                  // 1001
							if ( type === "function" && ( !options.unique || !self.has( arg ) ) ) {                                         // 1002
								list.push( arg );                                                                                              // 1003
							} else if ( arg && arg.length && type !== "string" ) {                                                          // 1004
								// Inspect recursively                                                                                         // 1005
								add( arg );                                                                                                    // 1006
							}                                                                                                               // 1007
						});                                                                                                              // 1008
					})( arguments );                                                                                                  // 1009
					// Do we need to add the callbacks to the                                                                         // 1010
					// current firing batch?                                                                                          // 1011
					if ( firing ) {                                                                                                   // 1012
						firingLength = list.length;                                                                                      // 1013
					// With memory, if we're not firing then                                                                          // 1014
					// we should call right away                                                                                      // 1015
					} else if ( memory ) {                                                                                            // 1016
						firingStart = start;                                                                                             // 1017
						fire( memory );                                                                                                  // 1018
					}                                                                                                                 // 1019
				}                                                                                                                  // 1020
				return this;                                                                                                       // 1021
			},                                                                                                                  // 1022
			// Remove a callback from the list                                                                                  // 1023
			remove: function() {                                                                                                // 1024
				if ( list ) {                                                                                                      // 1025
					jQuery.each( arguments, function( _, arg ) {                                                                      // 1026
						var index;                                                                                                       // 1027
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {                                                   // 1028
							list.splice( index, 1 );                                                                                        // 1029
							// Handle firing indexes                                                                                        // 1030
							if ( firing ) {                                                                                                 // 1031
								if ( index <= firingLength ) {                                                                                 // 1032
									firingLength--;                                                                                               // 1033
								}                                                                                                              // 1034
								if ( index <= firingIndex ) {                                                                                  // 1035
									firingIndex--;                                                                                                // 1036
								}                                                                                                              // 1037
							}                                                                                                               // 1038
						}                                                                                                                // 1039
					});                                                                                                               // 1040
				}                                                                                                                  // 1041
				return this;                                                                                                       // 1042
			},                                                                                                                  // 1043
			// Control if a given callback is in the list                                                                       // 1044
			has: function( fn ) {                                                                                               // 1045
				return jQuery.inArray( fn, list ) > -1;                                                                            // 1046
			},                                                                                                                  // 1047
			// Remove all callbacks from the list                                                                               // 1048
			empty: function() {                                                                                                 // 1049
				list = [];                                                                                                         // 1050
				return this;                                                                                                       // 1051
			},                                                                                                                  // 1052
			// Have the list do nothing anymore                                                                                 // 1053
			disable: function() {                                                                                               // 1054
				list = stack = memory = undefined;                                                                                 // 1055
				return this;                                                                                                       // 1056
			},                                                                                                                  // 1057
			// Is it disabled?                                                                                                  // 1058
			disabled: function() {                                                                                              // 1059
				return !list;                                                                                                      // 1060
			},                                                                                                                  // 1061
			// Lock the list in its current state                                                                               // 1062
			lock: function() {                                                                                                  // 1063
				stack = undefined;                                                                                                 // 1064
				if ( !memory ) {                                                                                                   // 1065
					self.disable();                                                                                                   // 1066
				}                                                                                                                  // 1067
				return this;                                                                                                       // 1068
			},                                                                                                                  // 1069
			// Is it locked?                                                                                                    // 1070
			locked: function() {                                                                                                // 1071
				return !stack;                                                                                                     // 1072
			},                                                                                                                  // 1073
			// Call all callbacks with the given context and arguments                                                          // 1074
			fireWith: function( context, args ) {                                                                               // 1075
				args = args || [];                                                                                                 // 1076
				args = [ context, args.slice ? args.slice() : args ];                                                              // 1077
				if ( list && ( !fired || stack ) ) {                                                                               // 1078
					if ( firing ) {                                                                                                   // 1079
						stack.push( args );                                                                                              // 1080
					} else {                                                                                                          // 1081
						fire( args );                                                                                                    // 1082
					}                                                                                                                 // 1083
				}                                                                                                                  // 1084
				return this;                                                                                                       // 1085
			},                                                                                                                  // 1086
			// Call all the callbacks with the given arguments                                                                  // 1087
			fire: function() {                                                                                                  // 1088
				self.fireWith( this, arguments );                                                                                  // 1089
				return this;                                                                                                       // 1090
			},                                                                                                                  // 1091
			// To know if the callbacks have already been called at least once                                                  // 1092
			fired: function() {                                                                                                 // 1093
				return !!fired;                                                                                                    // 1094
			}                                                                                                                   // 1095
		};                                                                                                                   // 1096
                                                                                                                       // 1097
	return self;                                                                                                          // 1098
};                                                                                                                     // 1099
jQuery.extend({                                                                                                        // 1100
                                                                                                                       // 1101
	Deferred: function( func ) {                                                                                          // 1102
		var tuples = [                                                                                                       // 1103
				// action, add listener, listener list, final state                                                                // 1104
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],                                                // 1105
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],                                                 // 1106
				[ "notify", "progress", jQuery.Callbacks("memory") ]                                                               // 1107
			],                                                                                                                  // 1108
			state = "pending",                                                                                                  // 1109
			promise = {                                                                                                         // 1110
				state: function() {                                                                                                // 1111
					return state;                                                                                                     // 1112
				},                                                                                                                 // 1113
				always: function() {                                                                                               // 1114
					deferred.done( arguments ).fail( arguments );                                                                     // 1115
					return this;                                                                                                      // 1116
				},                                                                                                                 // 1117
				then: function( /* fnDone, fnFail, fnProgress */ ) {                                                               // 1118
					var fns = arguments;                                                                                              // 1119
					return jQuery.Deferred(function( newDefer ) {                                                                     // 1120
						jQuery.each( tuples, function( i, tuple ) {                                                                      // 1121
							var action = tuple[ 0 ],                                                                                        // 1122
								fn = fns[ i ];                                                                                                 // 1123
							// deferred[ done | fail | progress ] for forwarding actions to newDefer                                        // 1124
							deferred[ tuple[1] ]( jQuery.isFunction( fn ) ?                                                                 // 1125
								function() {                                                                                                   // 1126
									var returned = fn.apply( this, arguments );                                                                   // 1127
									if ( returned && jQuery.isFunction( returned.promise ) ) {                                                    // 1128
										returned.promise()                                                                                           // 1129
											.done( newDefer.resolve )                                                                                   // 1130
											.fail( newDefer.reject )                                                                                    // 1131
											.progress( newDefer.notify );                                                                               // 1132
									} else {                                                                                                      // 1133
										newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );                            // 1134
									}                                                                                                             // 1135
								} :                                                                                                            // 1136
								newDefer[ action ]                                                                                             // 1137
							);                                                                                                              // 1138
						});                                                                                                              // 1139
						fns = null;                                                                                                      // 1140
					}).promise();                                                                                                     // 1141
				},                                                                                                                 // 1142
				// Get a promise for this deferred                                                                                 // 1143
				// If obj is provided, the promise aspect is added to the object                                                   // 1144
				promise: function( obj ) {                                                                                         // 1145
					return obj != null ? jQuery.extend( obj, promise ) : promise;                                                     // 1146
				}                                                                                                                  // 1147
			},                                                                                                                  // 1148
			deferred = {};                                                                                                      // 1149
                                                                                                                       // 1150
		// Keep pipe for back-compat                                                                                         // 1151
		promise.pipe = promise.then;                                                                                         // 1152
                                                                                                                       // 1153
		// Add list-specific methods                                                                                         // 1154
		jQuery.each( tuples, function( i, tuple ) {                                                                          // 1155
			var list = tuple[ 2 ],                                                                                              // 1156
				stateString = tuple[ 3 ];                                                                                          // 1157
                                                                                                                       // 1158
			// promise[ done | fail | progress ] = list.add                                                                     // 1159
			promise[ tuple[1] ] = list.add;                                                                                     // 1160
                                                                                                                       // 1161
			// Handle state                                                                                                     // 1162
			if ( stateString ) {                                                                                                // 1163
				list.add(function() {                                                                                              // 1164
					// state = [ resolved | rejected ]                                                                                // 1165
					state = stateString;                                                                                              // 1166
                                                                                                                       // 1167
				// [ reject_list | resolve_list ].disable; progress_list.lock                                                      // 1168
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );                                                          // 1169
			}                                                                                                                   // 1170
                                                                                                                       // 1171
			// deferred[ resolve | reject | notify ] = list.fire                                                                // 1172
			deferred[ tuple[0] ] = list.fire;                                                                                   // 1173
			deferred[ tuple[0] + "With" ] = list.fireWith;                                                                      // 1174
		});                                                                                                                  // 1175
                                                                                                                       // 1176
		// Make the deferred a promise                                                                                       // 1177
		promise.promise( deferred );                                                                                         // 1178
                                                                                                                       // 1179
		// Call given func if any                                                                                            // 1180
		if ( func ) {                                                                                                        // 1181
			func.call( deferred, deferred );                                                                                    // 1182
		}                                                                                                                    // 1183
                                                                                                                       // 1184
		// All done!                                                                                                         // 1185
		return deferred;                                                                                                     // 1186
	},                                                                                                                    // 1187
                                                                                                                       // 1188
	// Deferred helper                                                                                                    // 1189
	when: function( subordinate /* , ..., subordinateN */ ) {                                                             // 1190
		var i = 0,                                                                                                           // 1191
			resolveValues = core_slice.call( arguments ),                                                                       // 1192
			length = resolveValues.length,                                                                                      // 1193
                                                                                                                       // 1194
			// the count of uncompleted subordinates                                                                            // 1195
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,               // 1196
                                                                                                                       // 1197
			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.                          // 1198
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),                                                       // 1199
                                                                                                                       // 1200
			// Update function for both resolve and progress values                                                             // 1201
			updateFunc = function( i, contexts, values ) {                                                                      // 1202
				return function( value ) {                                                                                         // 1203
					contexts[ i ] = this;                                                                                             // 1204
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;                                        // 1205
					if( values === progressValues ) {                                                                                 // 1206
						deferred.notifyWith( contexts, values );                                                                         // 1207
					} else if ( !( --remaining ) ) {                                                                                  // 1208
						deferred.resolveWith( contexts, values );                                                                        // 1209
					}                                                                                                                 // 1210
				};                                                                                                                 // 1211
			},                                                                                                                  // 1212
                                                                                                                       // 1213
			progressValues, progressContexts, resolveContexts;                                                                  // 1214
                                                                                                                       // 1215
		// add listeners to Deferred subordinates; treat others as resolved                                                  // 1216
		if ( length > 1 ) {                                                                                                  // 1217
			progressValues = new Array( length );                                                                               // 1218
			progressContexts = new Array( length );                                                                             // 1219
			resolveContexts = new Array( length );                                                                              // 1220
			for ( ; i < length; i++ ) {                                                                                         // 1221
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {                                     // 1222
					resolveValues[ i ].promise()                                                                                      // 1223
						.done( updateFunc( i, resolveContexts, resolveValues ) )                                                         // 1224
						.fail( deferred.reject )                                                                                         // 1225
						.progress( updateFunc( i, progressContexts, progressValues ) );                                                  // 1226
				} else {                                                                                                           // 1227
					--remaining;                                                                                                      // 1228
				}                                                                                                                  // 1229
			}                                                                                                                   // 1230
		}                                                                                                                    // 1231
                                                                                                                       // 1232
		// if we're not waiting on anything, resolve the master                                                              // 1233
		if ( !remaining ) {                                                                                                  // 1234
			deferred.resolveWith( resolveContexts, resolveValues );                                                             // 1235
		}                                                                                                                    // 1236
                                                                                                                       // 1237
		return deferred.promise();                                                                                           // 1238
	}                                                                                                                     // 1239
});                                                                                                                    // 1240
jQuery.support = (function() {                                                                                         // 1241
                                                                                                                       // 1242
	var support,                                                                                                          // 1243
		all,                                                                                                                 // 1244
		a,                                                                                                                   // 1245
		select,                                                                                                              // 1246
		opt,                                                                                                                 // 1247
		input,                                                                                                               // 1248
		fragment,                                                                                                            // 1249
		eventName,                                                                                                           // 1250
		i,                                                                                                                   // 1251
		isSupported,                                                                                                         // 1252
		clickFn,                                                                                                             // 1253
		div = document.createElement("div");                                                                                 // 1254
                                                                                                                       // 1255
	// Preliminary tests                                                                                                  // 1256
	div.setAttribute( "className", "t" );                                                                                 // 1257
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";                                 // 1258
                                                                                                                       // 1259
	all = div.getElementsByTagName("*");                                                                                  // 1260
	a = div.getElementsByTagName("a")[ 0 ];                                                                               // 1261
	a.style.cssText = "top:1px;float:left;opacity:.5";                                                                    // 1262
                                                                                                                       // 1263
	// Can't get basic test support                                                                                       // 1264
	if ( !all || !all.length ) {                                                                                          // 1265
		return {};                                                                                                           // 1266
	}                                                                                                                     // 1267
                                                                                                                       // 1268
	// First batch of supports tests                                                                                      // 1269
	select = document.createElement("select");                                                                            // 1270
	opt = select.appendChild( document.createElement("option") );                                                         // 1271
	input = div.getElementsByTagName("input")[ 0 ];                                                                       // 1272
                                                                                                                       // 1273
	support = {                                                                                                           // 1274
		// IE strips leading whitespace when .innerHTML is used                                                              // 1275
		leadingWhitespace: ( div.firstChild.nodeType === 3 ),                                                                // 1276
                                                                                                                       // 1277
		// Make sure that tbody elements aren't automatically inserted                                                       // 1278
		// IE will insert them into empty tables                                                                             // 1279
		tbody: !div.getElementsByTagName("tbody").length,                                                                    // 1280
                                                                                                                       // 1281
		// Make sure that link elements get serialized correctly by innerHTML                                                // 1282
		// This requires a wrapper element in IE                                                                             // 1283
		htmlSerialize: !!div.getElementsByTagName("link").length,                                                            // 1284
                                                                                                                       // 1285
		// Get the style information from getAttribute                                                                       // 1286
		// (IE uses .cssText instead)                                                                                        // 1287
		style: /top/.test( a.getAttribute("style") ),                                                                        // 1288
                                                                                                                       // 1289
		// Make sure that URLs aren't manipulated                                                                            // 1290
		// (IE normalizes it by default)                                                                                     // 1291
		hrefNormalized: ( a.getAttribute("href") === "/a" ),                                                                 // 1292
                                                                                                                       // 1293
		// Make sure that element opacity exists                                                                             // 1294
		// (IE uses filter instead)                                                                                          // 1295
		// Use a regex to work around a WebKit issue. See #5145                                                              // 1296
		opacity: /^0.5/.test( a.style.opacity ),                                                                             // 1297
                                                                                                                       // 1298
		// Verify style float existence                                                                                      // 1299
		// (IE uses styleFloat instead of cssFloat)                                                                          // 1300
		cssFloat: !!a.style.cssFloat,                                                                                        // 1301
                                                                                                                       // 1302
		// Make sure that if no value is specified for a checkbox                                                            // 1303
		// that it defaults to "on".                                                                                         // 1304
		// (WebKit defaults to "" instead)                                                                                   // 1305
		checkOn: ( input.value === "on" ),                                                                                   // 1306
                                                                                                                       // 1307
		// Make sure that a selected-by-default option has a working selected property.                                      // 1308
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)                                        // 1309
		optSelected: opt.selected,                                                                                           // 1310
                                                                                                                       // 1311
		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)          // 1312
		getSetAttribute: div.className !== "t",                                                                              // 1313
                                                                                                                       // 1314
		// Tests for enctype support on a form(#6743)                                                                        // 1315
		enctype: !!document.createElement("form").enctype,                                                                   // 1316
                                                                                                                       // 1317
		// Makes sure cloning an html5 element does not cause problems                                                       // 1318
		// Where outerHTML is undefined, this still works                                                                    // 1319
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",                           // 1320
                                                                                                                       // 1321
		// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode                                      // 1322
		boxModel: ( document.compatMode === "CSS1Compat" ),                                                                  // 1323
                                                                                                                       // 1324
		// Will be defined later                                                                                             // 1325
		submitBubbles: true,                                                                                                 // 1326
		changeBubbles: true,                                                                                                 // 1327
		focusinBubbles: false,                                                                                               // 1328
		deleteExpando: true,                                                                                                 // 1329
		noCloneEvent: true,                                                                                                  // 1330
		inlineBlockNeedsLayout: false,                                                                                       // 1331
		shrinkWrapBlocks: false,                                                                                             // 1332
		reliableMarginRight: true,                                                                                           // 1333
		boxSizingReliable: true,                                                                                             // 1334
		pixelPosition: false                                                                                                 // 1335
	};                                                                                                                    // 1336
                                                                                                                       // 1337
	// Make sure checked status is properly cloned                                                                        // 1338
	input.checked = true;                                                                                                 // 1339
	support.noCloneChecked = input.cloneNode( true ).checked;                                                             // 1340
                                                                                                                       // 1341
	// Make sure that the options inside disabled selects aren't marked as disabled                                       // 1342
	// (WebKit marks them as disabled)                                                                                    // 1343
	select.disabled = true;                                                                                               // 1344
	support.optDisabled = !opt.disabled;                                                                                  // 1345
                                                                                                                       // 1346
	// Test to see if it's possible to delete an expando from an element                                                  // 1347
	// Fails in Internet Explorer                                                                                         // 1348
	try {                                                                                                                 // 1349
		delete div.test;                                                                                                     // 1350
	} catch( e ) {                                                                                                        // 1351
		support.deleteExpando = false;                                                                                       // 1352
	}                                                                                                                     // 1353
                                                                                                                       // 1354
	if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {                                                    // 1355
		div.attachEvent( "onclick", clickFn = function() {                                                                   // 1356
			// Cloning a node shouldn't copy over any                                                                           // 1357
			// bound event handlers (IE does this)                                                                              // 1358
			support.noCloneEvent = false;                                                                                       // 1359
		});                                                                                                                  // 1360
		div.cloneNode( true ).fireEvent("onclick");                                                                          // 1361
		div.detachEvent( "onclick", clickFn );                                                                               // 1362
	}                                                                                                                     // 1363
                                                                                                                       // 1364
	// Check if a radio maintains its value                                                                               // 1365
	// after being appended to the DOM                                                                                    // 1366
	input = document.createElement("input");                                                                              // 1367
	input.value = "t";                                                                                                    // 1368
	input.setAttribute( "type", "radio" );                                                                                // 1369
	support.radioValue = input.value === "t";                                                                             // 1370
                                                                                                                       // 1371
	input.setAttribute( "checked", "checked" );                                                                           // 1372
                                                                                                                       // 1373
	// #11217 - WebKit loses check when the name is after the checked attribute                                           // 1374
	input.setAttribute( "name", "t" );                                                                                    // 1375
                                                                                                                       // 1376
	div.appendChild( input );                                                                                             // 1377
	fragment = document.createDocumentFragment();                                                                         // 1378
	fragment.appendChild( div.lastChild );                                                                                // 1379
                                                                                                                       // 1380
	// WebKit doesn't clone checked state correctly in fragments                                                          // 1381
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;                                  // 1382
                                                                                                                       // 1383
	// Check if a disconnected checkbox will retain its checked                                                           // 1384
	// value of true after appended to the DOM (IE6/7)                                                                    // 1385
	support.appendChecked = input.checked;                                                                                // 1386
                                                                                                                       // 1387
	fragment.removeChild( input );                                                                                        // 1388
	fragment.appendChild( div );                                                                                          // 1389
                                                                                                                       // 1390
	// Technique from Juriy Zaytsev                                                                                       // 1391
	// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/                                       // 1392
	// We only care about the case where non-standard event systems                                                       // 1393
	// are used, namely in IE. Short-circuiting here helps us to                                                          // 1394
	// avoid an eval call (in setAttribute) which can cause CSP                                                           // 1395
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP                                                  // 1396
	if ( div.attachEvent ) {                                                                                              // 1397
		for ( i in {                                                                                                         // 1398
			submit: true,                                                                                                       // 1399
			change: true,                                                                                                       // 1400
			focusin: true                                                                                                       // 1401
		}) {                                                                                                                 // 1402
			eventName = "on" + i;                                                                                               // 1403
			isSupported = ( eventName in div );                                                                                 // 1404
			if ( !isSupported ) {                                                                                               // 1405
				div.setAttribute( eventName, "return;" );                                                                          // 1406
				isSupported = ( typeof div[ eventName ] === "function" );                                                          // 1407
			}                                                                                                                   // 1408
			support[ i + "Bubbles" ] = isSupported;                                                                             // 1409
		}                                                                                                                    // 1410
	}                                                                                                                     // 1411
                                                                                                                       // 1412
	// Run tests that need a body at doc ready                                                                            // 1413
	jQuery(function() {                                                                                                   // 1414
		var container, div, tds, marginDiv,                                                                                  // 1415
			divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;",                                            // 1416
			body = document.getElementsByTagName("body")[0];                                                                    // 1417
                                                                                                                       // 1418
		if ( !body ) {                                                                                                       // 1419
			// Return for frameset docs that don't have a body                                                                  // 1420
			return;                                                                                                             // 1421
		}                                                                                                                    // 1422
                                                                                                                       // 1423
		container = document.createElement("div");                                                                           // 1424
		container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";        // 1425
		body.insertBefore( container, body.firstChild );                                                                     // 1426
                                                                                                                       // 1427
		// Construct the test element                                                                                        // 1428
		div = document.createElement("div");                                                                                 // 1429
		container.appendChild( div );                                                                                        // 1430
                                                                                                                       // 1431
		// Check if table cells still have offsetWidth/Height when they are set                                              // 1432
		// to display:none and there are still other visible table cells in a                                                // 1433
		// table row; if so, offsetWidth/Height are not reliable for use when                                                // 1434
		// determining if an element has been hidden directly using                                                          // 1435
		// display:none (it is still safe to use offsets if a parent element is                                              // 1436
		// hidden; don safety goggles and see bug #4512 for more information).                                               // 1437
		// (only IE 8 fails this test)                                                                                       // 1438
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";                                                       // 1439
		tds = div.getElementsByTagName("td");                                                                                // 1440
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";                                                 // 1441
		isSupported = ( tds[ 0 ].offsetHeight === 0 );                                                                       // 1442
                                                                                                                       // 1443
		tds[ 0 ].style.display = "";                                                                                         // 1444
		tds[ 1 ].style.display = "none";                                                                                     // 1445
                                                                                                                       // 1446
		// Check if empty table cells still have offsetWidth/Height                                                          // 1447
		// (IE <= 8 fail this test)                                                                                          // 1448
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );                                      // 1449
                                                                                                                       // 1450
		// Check box-sizing and margin behavior                                                                              // 1451
		div.innerHTML = "";                                                                                                  // 1452
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
		support.boxSizing = ( div.offsetWidth === 4 );                                                                       // 1454
		support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );                                                 // 1455
                                                                                                                       // 1456
		// NOTE: To any future maintainer, we've window.getComputedStyle                                                     // 1457
		// because jsdom on node.js will break without it.                                                                   // 1458
		if ( window.getComputedStyle ) {                                                                                     // 1459
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";                                // 1460
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";           // 1461
                                                                                                                       // 1462
			// Check if div with explicit width and no margin-right incorrectly                                                 // 1463
			// gets computed margin-right based on width of container. For more                                                 // 1464
			// info see bug #3333                                                                                               // 1465
			// Fails in WebKit before Feb 2011 nightlies                                                                        // 1466
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right                                         // 1467
			marginDiv = document.createElement("div");                                                                          // 1468
			marginDiv.style.cssText = div.style.cssText = divReset;                                                             // 1469
			marginDiv.style.marginRight = marginDiv.style.width = "0";                                                          // 1470
			div.style.width = "1px";                                                                                            // 1471
			div.appendChild( marginDiv );                                                                                       // 1472
			support.reliableMarginRight =                                                                                       // 1473
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );                                   // 1474
		}                                                                                                                    // 1475
                                                                                                                       // 1476
		if ( typeof div.style.zoom !== "undefined" ) {                                                                       // 1477
			// Check if natively block-level elements act like inline-block                                                     // 1478
			// elements when setting their display to 'inline' and giving                                                       // 1479
			// them layout                                                                                                      // 1480
			// (IE < 8 does this)                                                                                               // 1481
			div.innerHTML = "";                                                                                                 // 1482
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";                                       // 1483
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );                                                         // 1484
                                                                                                                       // 1485
			// Check if elements with layout shrink-wrap their children                                                         // 1486
			// (IE 6 does this)                                                                                                 // 1487
			div.style.display = "block";                                                                                        // 1488
			div.style.overflow = "visible";                                                                                     // 1489
			div.innerHTML = "<div></div>";                                                                                      // 1490
			div.firstChild.style.width = "5px";                                                                                 // 1491
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );                                                               // 1492
                                                                                                                       // 1493
			container.style.zoom = 1;                                                                                           // 1494
		}                                                                                                                    // 1495
                                                                                                                       // 1496
		// Null elements to avoid leaks in IE                                                                                // 1497
		body.removeChild( container );                                                                                       // 1498
		container = div = tds = marginDiv = null;                                                                            // 1499
	});                                                                                                                   // 1500
                                                                                                                       // 1501
	// Null elements to avoid leaks in IE                                                                                 // 1502
	fragment.removeChild( div );                                                                                          // 1503
	all = a = select = opt = input = fragment = div = null;                                                               // 1504
                                                                                                                       // 1505
	return support;                                                                                                       // 1506
})();                                                                                                                  // 1507
var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,                                                                           // 1508
	rmultiDash = /([A-Z])/g;                                                                                              // 1509
                                                                                                                       // 1510
jQuery.extend({                                                                                                        // 1511
	cache: {},                                                                                                            // 1512
                                                                                                                       // 1513
	deletedIds: [],                                                                                                       // 1514
                                                                                                                       // 1515
	// Remove at next major release (1.9/2.0)                                                                             // 1516
	uuid: 0,                                                                                                              // 1517
                                                                                                                       // 1518
	// Unique for each copy of jQuery on the page                                                                         // 1519
	// Non-digits removed to match rinlinejQuery                                                                          // 1520
	expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),                                        // 1521
                                                                                                                       // 1522
	// The following elements throw uncatchable exceptions if you                                                         // 1523
	// attempt to add expando properties to them.                                                                         // 1524
	noData: {                                                                                                             // 1525
		"embed": true,                                                                                                       // 1526
		// Ban all objects except for Flash (which handle expandos)                                                          // 1527
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",                                                              // 1528
		"applet": true                                                                                                       // 1529
	},                                                                                                                    // 1530
                                                                                                                       // 1531
	hasData: function( elem ) {                                                                                           // 1532
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];                                // 1533
		return !!elem && !isEmptyDataObject( elem );                                                                         // 1534
	},                                                                                                                    // 1535
                                                                                                                       // 1536
	data: function( elem, name, data, pvt /* Internal Use Only */ ) {                                                     // 1537
		if ( !jQuery.acceptData( elem ) ) {                                                                                  // 1538
			return;                                                                                                             // 1539
		}                                                                                                                    // 1540
                                                                                                                       // 1541
		var thisCache, ret,                                                                                                  // 1542
			internalKey = jQuery.expando,                                                                                       // 1543
			getByName = typeof name === "string",                                                                               // 1544
                                                                                                                       // 1545
			// We have to handle DOM nodes and JS objects differently because IE6-7                                             // 1546
			// can't GC object references properly across the DOM-JS boundary                                                   // 1547
			isNode = elem.nodeType,                                                                                             // 1548
                                                                                                                       // 1549
			// Only DOM nodes need the global jQuery cache; JS object data is                                                   // 1550
			// attached directly to the object so GC can occur automatically                                                    // 1551
			cache = isNode ? jQuery.cache : elem,                                                                               // 1552
                                                                                                                       // 1553
			// Only defining an ID for JS objects if its cache already exists allows                                            // 1554
			// the code to shortcut on the same path as a DOM node with no cache                                                // 1555
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;                                             // 1556
                                                                                                                       // 1557
		// Avoid doing any more work than we need to when trying to get data on an                                           // 1558
		// object that has no data at all                                                                                    // 1559
		if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {                         // 1560
			return;                                                                                                             // 1561
		}                                                                                                                    // 1562
                                                                                                                       // 1563
		if ( !id ) {                                                                                                         // 1564
			// Only DOM nodes need a new unique ID for each element since their data                                            // 1565
			// ends up in the global cache                                                                                      // 1566
			if ( isNode ) {                                                                                                     // 1567
				elem[ internalKey ] = id = jQuery.deletedIds.pop() || jQuery.guid++;                                               // 1568
			} else {                                                                                                            // 1569
				id = internalKey;                                                                                                  // 1570
			}                                                                                                                   // 1571
		}                                                                                                                    // 1572
                                                                                                                       // 1573
		if ( !cache[ id ] ) {                                                                                                // 1574
			cache[ id ] = {};                                                                                                   // 1575
                                                                                                                       // 1576
			// Avoids exposing jQuery metadata on plain JS objects when the object                                              // 1577
			// is serialized using JSON.stringify                                                                               // 1578
			if ( !isNode ) {                                                                                                    // 1579
				cache[ id ].toJSON = jQuery.noop;                                                                                  // 1580
			}                                                                                                                   // 1581
		}                                                                                                                    // 1582
                                                                                                                       // 1583
		// An object can be passed to jQuery.data instead of a key/value pair; this gets                                     // 1584
		// shallow copied over onto the existing cache                                                                       // 1585
		if ( typeof name === "object" || typeof name === "function" ) {                                                      // 1586
			if ( pvt ) {                                                                                                        // 1587
				cache[ id ] = jQuery.extend( cache[ id ], name );                                                                  // 1588
			} else {                                                                                                            // 1589
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );                                                        // 1590
			}                                                                                                                   // 1591
		}                                                                                                                    // 1592
                                                                                                                       // 1593
		thisCache = cache[ id ];                                                                                             // 1594
                                                                                                                       // 1595
		// jQuery data() is stored in a separate object inside the object's internal data                                    // 1596
		// cache in order to avoid key collisions between internal data and user-defined                                     // 1597
		// data.                                                                                                             // 1598
		if ( !pvt ) {                                                                                                        // 1599
			if ( !thisCache.data ) {                                                                                            // 1600
				thisCache.data = {};                                                                                               // 1601
			}                                                                                                                   // 1602
                                                                                                                       // 1603
			thisCache = thisCache.data;                                                                                         // 1604
		}                                                                                                                    // 1605
                                                                                                                       // 1606
		if ( data !== undefined ) {                                                                                          // 1607
			thisCache[ jQuery.camelCase( name ) ] = data;                                                                       // 1608
		}                                                                                                                    // 1609
                                                                                                                       // 1610
		// Check for both converted-to-camel and non-converted data property names                                           // 1611
		// If a data property was specified                                                                                  // 1612
		if ( getByName ) {                                                                                                   // 1613
                                                                                                                       // 1614
			// First Try to find as-is property data                                                                            // 1615
			ret = thisCache[ name ];                                                                                            // 1616
                                                                                                                       // 1617
			// Test for null|undefined property data                                                                            // 1618
			if ( ret == null ) {                                                                                                // 1619
                                                                                                                       // 1620
				// Try to find the camelCased property                                                                             // 1621
				ret = thisCache[ jQuery.camelCase( name ) ];                                                                       // 1622
			}                                                                                                                   // 1623
		} else {                                                                                                             // 1624
			ret = thisCache;                                                                                                    // 1625
		}                                                                                                                    // 1626
                                                                                                                       // 1627
		return ret;                                                                                                          // 1628
	},                                                                                                                    // 1629
                                                                                                                       // 1630
	removeData: function( elem, name, pvt /* Internal Use Only */ ) {                                                     // 1631
		if ( !jQuery.acceptData( elem ) ) {                                                                                  // 1632
			return;                                                                                                             // 1633
		}                                                                                                                    // 1634
                                                                                                                       // 1635
		var thisCache, i, l,                                                                                                 // 1636
                                                                                                                       // 1637
			isNode = elem.nodeType,                                                                                             // 1638
                                                                                                                       // 1639
			// See jQuery.data for more information                                                                             // 1640
			cache = isNode ? jQuery.cache : elem,                                                                               // 1641
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;                                                              // 1642
                                                                                                                       // 1643
		// If there is already no cache entry for this object, there is no                                                   // 1644
		// purpose in continuing                                                                                             // 1645
		if ( !cache[ id ] ) {                                                                                                // 1646
			return;                                                                                                             // 1647
		}                                                                                                                    // 1648
                                                                                                                       // 1649
		if ( name ) {                                                                                                        // 1650
                                                                                                                       // 1651
			thisCache = pvt ? cache[ id ] : cache[ id ].data;                                                                   // 1652
                                                                                                                       // 1653
			if ( thisCache ) {                                                                                                  // 1654
                                                                                                                       // 1655
				// Support array or space separated string names for data keys                                                     // 1656
				if ( !jQuery.isArray( name ) ) {                                                                                   // 1657
                                                                                                                       // 1658
					// try the string as a key before any manipulation                                                                // 1659
					if ( name in thisCache ) {                                                                                        // 1660
						name = [ name ];                                                                                                 // 1661
					} else {                                                                                                          // 1662
                                                                                                                       // 1663
						// split the camel cased version by spaces unless a key with the spaces exists                                   // 1664
						name = jQuery.camelCase( name );                                                                                 // 1665
						if ( name in thisCache ) {                                                                                       // 1666
							name = [ name ];                                                                                                // 1667
						} else {                                                                                                         // 1668
							name = name.split(" ");                                                                                         // 1669
						}                                                                                                                // 1670
					}                                                                                                                 // 1671
				}                                                                                                                  // 1672
                                                                                                                       // 1673
				for ( i = 0, l = name.length; i < l; i++ ) {                                                                       // 1674
					delete thisCache[ name[i] ];                                                                                      // 1675
				}                                                                                                                  // 1676
                                                                                                                       // 1677
				// If there is no data left in the cache, we want to continue                                                      // 1678
				// and let the cache object itself get destroyed                                                                   // 1679
				if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {                                          // 1680
					return;                                                                                                           // 1681
				}                                                                                                                  // 1682
			}                                                                                                                   // 1683
		}                                                                                                                    // 1684
                                                                                                                       // 1685
		// See jQuery.data for more information                                                                              // 1686
		if ( !pvt ) {                                                                                                        // 1687
			delete cache[ id ].data;                                                                                            // 1688
                                                                                                                       // 1689
			// Don't destroy the parent cache unless the internal data object                                                   // 1690
			// had been the only thing left in it                                                                               // 1691
			if ( !isEmptyDataObject( cache[ id ] ) ) {                                                                          // 1692
				return;                                                                                                            // 1693
			}                                                                                                                   // 1694
		}                                                                                                                    // 1695
                                                                                                                       // 1696
		// Destroy the cache                                                                                                 // 1697
		if ( isNode ) {                                                                                                      // 1698
			jQuery.cleanData( [ elem ], true );                                                                                 // 1699
                                                                                                                       // 1700
		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)                           // 1701
		} else if ( jQuery.support.deleteExpando || cache != cache.window ) {                                                // 1702
			delete cache[ id ];                                                                                                 // 1703
                                                                                                                       // 1704
		// When all else fails, null                                                                                         // 1705
		} else {                                                                                                             // 1706
			cache[ id ] = null;                                                                                                 // 1707
		}                                                                                                                    // 1708
	},                                                                                                                    // 1709
                                                                                                                       // 1710
	// For internal use only.                                                                                             // 1711
	_data: function( elem, name, data ) {                                                                                 // 1712
		return jQuery.data( elem, name, data, true );                                                                        // 1713
	},                                                                                                                    // 1714
                                                                                                                       // 1715
	// A method for determining if a DOM node can handle the data expando                                                 // 1716
	acceptData: function( elem ) {                                                                                        // 1717
		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];                                          // 1718
                                                                                                                       // 1719
		// nodes accept data unless otherwise specified; rejection can be conditional                                        // 1720
		return !noData || noData !== true && elem.getAttribute("classid") === noData;                                        // 1721
	}                                                                                                                     // 1722
});                                                                                                                    // 1723
                                                                                                                       // 1724
jQuery.fn.extend({                                                                                                     // 1725
	data: function( key, value ) {                                                                                        // 1726
		var parts, part, attr, name, l,                                                                                      // 1727
			elem = this[0],                                                                                                     // 1728
			i = 0,                                                                                                              // 1729
			data = null;                                                                                                        // 1730
                                                                                                                       // 1731
		// Gets all values                                                                                                   // 1732
		if ( key === undefined ) {                                                                                           // 1733
			if ( this.length ) {                                                                                                // 1734
				data = jQuery.data( elem );                                                                                        // 1735
                                                                                                                       // 1736
				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {                                               // 1737
					attr = elem.attributes;                                                                                           // 1738
					for ( l = attr.length; i < l; i++ ) {                                                                             // 1739
						name = attr[i].name;                                                                                             // 1740
                                                                                                                       // 1741
						if ( !name.indexOf( "data-" ) ) {                                                                                // 1742
							name = jQuery.camelCase( name.substring(5) );                                                                   // 1743
                                                                                                                       // 1744
							dataAttr( elem, name, data[ name ] );                                                                           // 1745
						}                                                                                                                // 1746
					}                                                                                                                 // 1747
					jQuery._data( elem, "parsedAttrs", true );                                                                        // 1748
				}                                                                                                                  // 1749
			}                                                                                                                   // 1750
                                                                                                                       // 1751
			return data;                                                                                                        // 1752
		}                                                                                                                    // 1753
                                                                                                                       // 1754
		// Sets multiple values                                                                                              // 1755
		if ( typeof key === "object" ) {                                                                                     // 1756
			return this.each(function() {                                                                                       // 1757
				jQuery.data( this, key );                                                                                          // 1758
			});                                                                                                                 // 1759
		}                                                                                                                    // 1760
                                                                                                                       // 1761
		parts = key.split( ".", 2 );                                                                                         // 1762
		parts[1] = parts[1] ? "." + parts[1] : "";                                                                           // 1763
		part = parts[1] + "!";                                                                                               // 1764
                                                                                                                       // 1765
		return jQuery.access( this, function( value ) {                                                                      // 1766
                                                                                                                       // 1767
			if ( value === undefined ) {                                                                                        // 1768
				data = this.triggerHandler( "getData" + part, [ parts[0] ] );                                                      // 1769
                                                                                                                       // 1770
				// Try to fetch any internally stored data first                                                                   // 1771
				if ( data === undefined && elem ) {                                                                                // 1772
					data = jQuery.data( elem, key );                                                                                  // 1773
					data = dataAttr( elem, key, data );                                                                               // 1774
				}                                                                                                                  // 1775
                                                                                                                       // 1776
				return data === undefined && parts[1] ?                                                                            // 1777
					this.data( parts[0] ) :                                                                                           // 1778
					data;                                                                                                             // 1779
			}                                                                                                                   // 1780
                                                                                                                       // 1781
			parts[1] = value;                                                                                                   // 1782
			this.each(function() {                                                                                              // 1783
				var self = jQuery( this );                                                                                         // 1784
                                                                                                                       // 1785
				self.triggerHandler( "setData" + part, parts );                                                                    // 1786
				jQuery.data( this, key, value );                                                                                   // 1787
				self.triggerHandler( "changeData" + part, parts );                                                                 // 1788
			});                                                                                                                 // 1789
		}, null, value, arguments.length > 1, null, false );                                                                 // 1790
	},                                                                                                                    // 1791
                                                                                                                       // 1792
	removeData: function( key ) {                                                                                         // 1793
		return this.each(function() {                                                                                        // 1794
			jQuery.removeData( this, key );                                                                                     // 1795
		});                                                                                                                  // 1796
	}                                                                                                                     // 1797
});                                                                                                                    // 1798
                                                                                                                       // 1799
function dataAttr( elem, key, data ) {                                                                                 // 1800
	// If nothing was found internally, try to fetch any                                                                  // 1801
	// data from the HTML5 data-* attribute                                                                               // 1802
	if ( data === undefined && elem.nodeType === 1 ) {                                                                    // 1803
                                                                                                                       // 1804
		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();                                                 // 1805
                                                                                                                       // 1806
		data = elem.getAttribute( name );                                                                                    // 1807
                                                                                                                       // 1808
		if ( typeof data === "string" ) {                                                                                    // 1809
			try {                                                                                                               // 1810
				data = data === "true" ? true :                                                                                    // 1811
				data === "false" ? false :                                                                                         // 1812
				data === "null" ? null :                                                                                           // 1813
				// Only convert to a number if it doesn't change the string                                                        // 1814
				+data + "" === data ? +data :                                                                                      // 1815
				rbrace.test( data ) ? jQuery.parseJSON( data ) :                                                                   // 1816
					data;                                                                                                             // 1817
			} catch( e ) {}                                                                                                     // 1818
                                                                                                                       // 1819
			// Make sure we set the data so it isn't changed later                                                              // 1820
			jQuery.data( elem, key, data );                                                                                     // 1821
                                                                                                                       // 1822
		} else {                                                                                                             // 1823
			data = undefined;                                                                                                   // 1824
		}                                                                                                                    // 1825
	}                                                                                                                     // 1826
                                                                                                                       // 1827
	return data;                                                                                                          // 1828
}                                                                                                                      // 1829
                                                                                                                       // 1830
// checks a cache object for emptiness                                                                                 // 1831
function isEmptyDataObject( obj ) {                                                                                    // 1832
	var name;                                                                                                             // 1833
	for ( name in obj ) {                                                                                                 // 1834
                                                                                                                       // 1835
		// if the public data object is empty, the private is still empty                                                    // 1836
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {                                                        // 1837
			continue;                                                                                                           // 1838
		}                                                                                                                    // 1839
		if ( name !== "toJSON" ) {                                                                                           // 1840
			return false;                                                                                                       // 1841
		}                                                                                                                    // 1842
	}                                                                                                                     // 1843
                                                                                                                       // 1844
	return true;                                                                                                          // 1845
}                                                                                                                      // 1846
jQuery.extend({                                                                                                        // 1847
	queue: function( elem, type, data ) {                                                                                 // 1848
		var queue;                                                                                                           // 1849
                                                                                                                       // 1850
		if ( elem ) {                                                                                                        // 1851
			type = ( type || "fx" ) + "queue";                                                                                  // 1852
			queue = jQuery._data( elem, type );                                                                                 // 1853
                                                                                                                       // 1854
			// Speed up dequeue by getting out quickly if this is just a lookup                                                 // 1855
			if ( data ) {                                                                                                       // 1856
				if ( !queue || jQuery.isArray(data) ) {                                                                            // 1857
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );                                                       // 1858
				} else {                                                                                                           // 1859
					queue.push( data );                                                                                               // 1860
				}                                                                                                                  // 1861
			}                                                                                                                   // 1862
			return queue || [];                                                                                                 // 1863
		}                                                                                                                    // 1864
	},                                                                                                                    // 1865
                                                                                                                       // 1866
	dequeue: function( elem, type ) {                                                                                     // 1867
		type = type || "fx";                                                                                                 // 1868
                                                                                                                       // 1869
		var queue = jQuery.queue( elem, type ),                                                                              // 1870
			startLength = queue.length,                                                                                         // 1871
			fn = queue.shift(),                                                                                                 // 1872
			hooks = jQuery._queueHooks( elem, type ),                                                                           // 1873
			next = function() {                                                                                                 // 1874
				jQuery.dequeue( elem, type );                                                                                      // 1875
			};                                                                                                                  // 1876
                                                                                                                       // 1877
		// If the fx queue is dequeued, always remove the progress sentinel                                                  // 1878
		if ( fn === "inprogress" ) {                                                                                         // 1879
			fn = queue.shift();                                                                                                 // 1880
			startLength--;                                                                                                      // 1881
		}                                                                                                                    // 1882
                                                                                                                       // 1883
		if ( fn ) {                                                                                                          // 1884
                                                                                                                       // 1885
			// Add a progress sentinel to prevent the fx queue from being                                                       // 1886
			// automatically dequeued                                                                                           // 1887
			if ( type === "fx" ) {                                                                                              // 1888
				queue.unshift( "inprogress" );                                                                                     // 1889
			}                                                                                                                   // 1890
                                                                                                                       // 1891
			// clear up the last queue stop function                                                                            // 1892
			delete hooks.stop;                                                                                                  // 1893
			fn.call( elem, next, hooks );                                                                                       // 1894
		}                                                                                                                    // 1895
                                                                                                                       // 1896
		if ( !startLength && hooks ) {                                                                                       // 1897
			hooks.empty.fire();                                                                                                 // 1898
		}                                                                                                                    // 1899
	},                                                                                                                    // 1900
                                                                                                                       // 1901
	// not intended for public consumption - generates a queueHooks object, or returns the current one                    // 1902
	_queueHooks: function( elem, type ) {                                                                                 // 1903
		var key = type + "queueHooks";                                                                                       // 1904
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {                                                       // 1905
			empty: jQuery.Callbacks("once memory").add(function() {                                                             // 1906
				jQuery.removeData( elem, type + "queue", true );                                                                   // 1907
				jQuery.removeData( elem, key, true );                                                                              // 1908
			})                                                                                                                  // 1909
		});                                                                                                                  // 1910
	}                                                                                                                     // 1911
});                                                                                                                    // 1912
                                                                                                                       // 1913
jQuery.fn.extend({                                                                                                     // 1914
	queue: function( type, data ) {                                                                                       // 1915
		var setter = 2;                                                                                                      // 1916
                                                                                                                       // 1917
		if ( typeof type !== "string" ) {                                                                                    // 1918
			data = type;                                                                                                        // 1919
			type = "fx";                                                                                                        // 1920
			setter--;                                                                                                           // 1921
		}                                                                                                                    // 1922
                                                                                                                       // 1923
		if ( arguments.length < setter ) {                                                                                   // 1924
			return jQuery.queue( this[0], type );                                                                               // 1925
		}                                                                                                                    // 1926
                                                                                                                       // 1927
		return data === undefined ?                                                                                          // 1928
			this :                                                                                                              // 1929
			this.each(function() {                                                                                              // 1930
				var queue = jQuery.queue( this, type, data );                                                                      // 1931
                                                                                                                       // 1932
				// ensure a hooks for this queue                                                                                   // 1933
				jQuery._queueHooks( this, type );                                                                                  // 1934
                                                                                                                       // 1935
				if ( type === "fx" && queue[0] !== "inprogress" ) {                                                                // 1936
					jQuery.dequeue( this, type );                                                                                     // 1937
				}                                                                                                                  // 1938
			});                                                                                                                 // 1939
	},                                                                                                                    // 1940
	dequeue: function( type ) {                                                                                           // 1941
		return this.each(function() {                                                                                        // 1942
			jQuery.dequeue( this, type );                                                                                       // 1943
		});                                                                                                                  // 1944
	},                                                                                                                    // 1945
	// Based off of the plugin by Clint Helfers, with permission.                                                         // 1946
	// http://blindsignals.com/index.php/2009/07/jquery-delay/                                                            // 1947
	delay: function( time, type ) {                                                                                       // 1948
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;                                                          // 1949
		type = type || "fx";                                                                                                 // 1950
                                                                                                                       // 1951
		return this.queue( type, function( next, hooks ) {                                                                   // 1952
			var timeout = setTimeout( next, time );                                                                             // 1953
			hooks.stop = function() {                                                                                           // 1954
				clearTimeout( timeout );                                                                                           // 1955
			};                                                                                                                  // 1956
		});                                                                                                                  // 1957
	},                                                                                                                    // 1958
	clearQueue: function( type ) {                                                                                        // 1959
		return this.queue( type || "fx", [] );                                                                               // 1960
	},                                                                                                                    // 1961
	// Get a promise resolved when queues of a certain type                                                               // 1962
	// are emptied (fx is the type by default)                                                                            // 1963
	promise: function( type, obj ) {                                                                                      // 1964
		var tmp,                                                                                                             // 1965
			count = 1,                                                                                                          // 1966
			defer = jQuery.Deferred(),                                                                                          // 1967
			elements = this,                                                                                                    // 1968
			i = this.length,                                                                                                    // 1969
			resolve = function() {                                                                                              // 1970
				if ( !( --count ) ) {                                                                                              // 1971
					defer.resolveWith( elements, [ elements ] );                                                                      // 1972
				}                                                                                                                  // 1973
			};                                                                                                                  // 1974
                                                                                                                       // 1975
		if ( typeof type !== "string" ) {                                                                                    // 1976
			obj = type;                                                                                                         // 1977
			type = undefined;                                                                                                   // 1978
		}                                                                                                                    // 1979
		type = type || "fx";                                                                                                 // 1980
                                                                                                                       // 1981
		while( i-- ) {                                                                                                       // 1982
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );                                                           // 1983
			if ( tmp && tmp.empty ) {                                                                                           // 1984
				count++;                                                                                                           // 1985
				tmp.empty.add( resolve );                                                                                          // 1986
			}                                                                                                                   // 1987
		}                                                                                                                    // 1988
		resolve();                                                                                                           // 1989
		return defer.promise( obj );                                                                                         // 1990
	}                                                                                                                     // 1991
});                                                                                                                    // 1992
var nodeHook, boolHook, fixSpecified,                                                                                  // 1993
	rclass = /[\t\r\n]/g,                                                                                                 // 1994
	rreturn = /\r/g,                                                                                                      // 1995
	rtype = /^(?:button|input)$/i,                                                                                        // 1996
	rfocusable = /^(?:button|input|object|select|textarea)$/i,                                                            // 1997
	rclickable = /^a(?:rea|)$/i,                                                                                          // 1998
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute;                                                                     // 2000
                                                                                                                       // 2001
jQuery.fn.extend({                                                                                                     // 2002
	attr: function( name, value ) {                                                                                       // 2003
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );                                        // 2004
	},                                                                                                                    // 2005
                                                                                                                       // 2006
	removeAttr: function( name ) {                                                                                        // 2007
		return this.each(function() {                                                                                        // 2008
			jQuery.removeAttr( this, name );                                                                                    // 2009
		});                                                                                                                  // 2010
	},                                                                                                                    // 2011
                                                                                                                       // 2012
	prop: function( name, value ) {                                                                                       // 2013
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );                                        // 2014
	},                                                                                                                    // 2015
                                                                                                                       // 2016
	removeProp: function( name ) {                                                                                        // 2017
		name = jQuery.propFix[ name ] || name;                                                                               // 2018
		return this.each(function() {                                                                                        // 2019
			// try/catch handles cases where IE balks (such as removing a property on window)                                   // 2020
			try {                                                                                                               // 2021
				this[ name ] = undefined;                                                                                          // 2022
				delete this[ name ];                                                                                               // 2023
			} catch( e ) {}                                                                                                     // 2024
		});                                                                                                                  // 2025
	},                                                                                                                    // 2026
                                                                                                                       // 2027
	addClass: function( value ) {                                                                                         // 2028
		var classNames, i, l, elem,                                                                                          // 2029
			setClass, c, cl;                                                                                                    // 2030
                                                                                                                       // 2031
		if ( jQuery.isFunction( value ) ) {                                                                                  // 2032
			return this.each(function( j ) {                                                                                    // 2033
				jQuery( this ).addClass( value.call(this, j, this.className) );                                                    // 2034
			});                                                                                                                 // 2035
		}                                                                                                                    // 2036
                                                                                                                       // 2037
		if ( value && typeof value === "string" ) {                                                                          // 2038
			classNames = value.split( core_rspace );                                                                            // 2039
                                                                                                                       // 2040
			for ( i = 0, l = this.length; i < l; i++ ) {                                                                        // 2041
				elem = this[ i ];                                                                                                  // 2042
                                                                                                                       // 2043
				if ( elem.nodeType === 1 ) {                                                                                       // 2044
					if ( !elem.className && classNames.length === 1 ) {                                                               // 2045
						elem.className = value;                                                                                          // 2046
                                                                                                                       // 2047
					} else {                                                                                                          // 2048
						setClass = " " + elem.className + " ";                                                                           // 2049
                                                                                                                       // 2050
						for ( c = 0, cl = classNames.length; c < cl; c++ ) {                                                             // 2051
							if ( setClass.indexOf( " " + classNames[ c ] + " " ) < 0 ) {                                                    // 2052
								setClass += classNames[ c ] + " ";                                                                             // 2053
							}                                                                                                               // 2054
						}                                                                                                                // 2055
						elem.className = jQuery.trim( setClass );                                                                        // 2056
					}                                                                                                                 // 2057
				}                                                                                                                  // 2058
			}                                                                                                                   // 2059
		}                                                                                                                    // 2060
                                                                                                                       // 2061
		return this;                                                                                                         // 2062
	},                                                                                                                    // 2063
                                                                                                                       // 2064
	removeClass: function( value ) {                                                                                      // 2065
		var removes, className, elem, c, cl, i, l;                                                                           // 2066
                                                                                                                       // 2067
		if ( jQuery.isFunction( value ) ) {                                                                                  // 2068
			return this.each(function( j ) {                                                                                    // 2069
				jQuery( this ).removeClass( value.call(this, j, this.className) );                                                 // 2070
			});                                                                                                                 // 2071
		}                                                                                                                    // 2072
		if ( (value && typeof value === "string") || value === undefined ) {                                                 // 2073
			removes = ( value || "" ).split( core_rspace );                                                                     // 2074
                                                                                                                       // 2075
			for ( i = 0, l = this.length; i < l; i++ ) {                                                                        // 2076
				elem = this[ i ];                                                                                                  // 2077
				if ( elem.nodeType === 1 && elem.className ) {                                                                     // 2078
                                                                                                                       // 2079
					className = (" " + elem.className + " ").replace( rclass, " " );                                                  // 2080
                                                                                                                       // 2081
					// loop over each item in the removal list                                                                        // 2082
					for ( c = 0, cl = removes.length; c < cl; c++ ) {                                                                 // 2083
						// Remove until there is nothing to remove,                                                                      // 2084
						while ( className.indexOf(" " + removes[ c ] + " ") >= 0 ) {                                                     // 2085
							className = className.replace( " " + removes[ c ] + " " , " " );                                                // 2086
						}                                                                                                                // 2087
					}                                                                                                                 // 2088
					elem.className = value ? jQuery.trim( className ) : "";                                                           // 2089
				}                                                                                                                  // 2090
			}                                                                                                                   // 2091
		}                                                                                                                    // 2092
                                                                                                                       // 2093
		return this;                                                                                                         // 2094
	},                                                                                                                    // 2095
                                                                                                                       // 2096
	toggleClass: function( value, stateVal ) {                                                                            // 2097
		var type = typeof value,                                                                                             // 2098
			isBool = typeof stateVal === "boolean";                                                                             // 2099
                                                                                                                       // 2100
		if ( jQuery.isFunction( value ) ) {                                                                                  // 2101
			return this.each(function( i ) {                                                                                    // 2102
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );                             // 2103
			});                                                                                                                 // 2104
		}                                                                                                                    // 2105
                                                                                                                       // 2106
		return this.each(function() {                                                                                        // 2107
			if ( type === "string" ) {                                                                                          // 2108
				// toggle individual class names                                                                                   // 2109
				var className,                                                                                                     // 2110
					i = 0,                                                                                                            // 2111
					self = jQuery( this ),                                                                                            // 2112
					state = stateVal,                                                                                                 // 2113
					classNames = value.split( core_rspace );                                                                          // 2114
                                                                                                                       // 2115
				while ( (className = classNames[ i++ ]) ) {                                                                        // 2116
					// check each className given, space separated list                                                               // 2117
					state = isBool ? state : !self.hasClass( className );                                                             // 2118
					self[ state ? "addClass" : "removeClass" ]( className );                                                          // 2119
				}                                                                                                                  // 2120
                                                                                                                       // 2121
			} else if ( type === "undefined" || type === "boolean" ) {                                                          // 2122
				if ( this.className ) {                                                                                            // 2123
					// store className if set                                                                                         // 2124
					jQuery._data( this, "__className__", this.className );                                                            // 2125
				}                                                                                                                  // 2126
                                                                                                                       // 2127
				// toggle whole className                                                                                          // 2128
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";             // 2129
			}                                                                                                                   // 2130
		});                                                                                                                  // 2131
	},                                                                                                                    // 2132
                                                                                                                       // 2133
	hasClass: function( selector ) {                                                                                      // 2134
		var className = " " + selector + " ",                                                                                // 2135
			i = 0,                                                                                                              // 2136
			l = this.length;                                                                                                    // 2137
		for ( ; i < l; i++ ) {                                                                                               // 2138
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {   // 2139
				return true;                                                                                                       // 2140
			}                                                                                                                   // 2141
		}                                                                                                                    // 2142
                                                                                                                       // 2143
		return false;                                                                                                        // 2144
	},                                                                                                                    // 2145
                                                                                                                       // 2146
	val: function( value ) {                                                                                              // 2147
		var hooks, ret, isFunction,                                                                                          // 2148
			elem = this[0];                                                                                                     // 2149
                                                                                                                       // 2150
		if ( !arguments.length ) {                                                                                           // 2151
			if ( elem ) {                                                                                                       // 2152
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];                            // 2153
                                                                                                                       // 2154
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {                               // 2155
					return ret;                                                                                                       // 2156
				}                                                                                                                  // 2157
                                                                                                                       // 2158
				ret = elem.value;                                                                                                  // 2159
                                                                                                                       // 2160
				return typeof ret === "string" ?                                                                                   // 2161
					// handle most common string cases                                                                                // 2162
					ret.replace(rreturn, "") :                                                                                        // 2163
					// handle cases where value is null/undef or number                                                               // 2164
					ret == null ? "" : ret;                                                                                           // 2165
			}                                                                                                                   // 2166
                                                                                                                       // 2167
			return;                                                                                                             // 2168
		}                                                                                                                    // 2169
                                                                                                                       // 2170
		isFunction = jQuery.isFunction( value );                                                                             // 2171
                                                                                                                       // 2172
		return this.each(function( i ) {                                                                                     // 2173
			var val,                                                                                                            // 2174
				self = jQuery(this);                                                                                               // 2175
                                                                                                                       // 2176
			if ( this.nodeType !== 1 ) {                                                                                        // 2177
				return;                                                                                                            // 2178
			}                                                                                                                   // 2179
                                                                                                                       // 2180
			if ( isFunction ) {                                                                                                 // 2181
				val = value.call( this, i, self.val() );                                                                           // 2182
			} else {                                                                                                            // 2183
				val = value;                                                                                                       // 2184
			}                                                                                                                   // 2185
                                                                                                                       // 2186
			// Treat null/undefined as ""; convert numbers to string                                                            // 2187
			if ( val == null ) {                                                                                                // 2188
				val = "";                                                                                                          // 2189
			} else if ( typeof val === "number" ) {                                                                             // 2190
				val += "";                                                                                                         // 2191
			} else if ( jQuery.isArray( val ) ) {                                                                               // 2192
				val = jQuery.map(val, function ( value ) {                                                                         // 2193
					return value == null ? "" : value + "";                                                                           // 2194
				});                                                                                                                // 2195
			}                                                                                                                   // 2196
                                                                                                                       // 2197
			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];                             // 2198
                                                                                                                       // 2199
			// If set returns undefined, fall back to normal setting                                                            // 2200
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {                               // 2201
				this.value = val;                                                                                                  // 2202
			}                                                                                                                   // 2203
		});                                                                                                                  // 2204
	}                                                                                                                     // 2205
});                                                                                                                    // 2206
                                                                                                                       // 2207
jQuery.extend({                                                                                                        // 2208
	valHooks: {                                                                                                           // 2209
		option: {                                                                                                            // 2210
			get: function( elem ) {                                                                                             // 2211
				// attributes.value is undefined in Blackberry 4.7 but                                                             // 2212
				// uses .value. See #6932                                                                                          // 2213
				var val = elem.attributes.value;                                                                                   // 2214
				return !val || val.specified ? elem.value : elem.text;                                                             // 2215
			}                                                                                                                   // 2216
		},                                                                                                                   // 2217
		select: {                                                                                                            // 2218
			get: function( elem ) {                                                                                             // 2219
				var value, i, max, option,                                                                                         // 2220
					index = elem.selectedIndex,                                                                                       // 2221
					values = [],                                                                                                      // 2222
					options = elem.options,                                                                                           // 2223
					one = elem.type === "select-one";                                                                                 // 2224
                                                                                                                       // 2225
				// Nothing was selected                                                                                            // 2226
				if ( index < 0 ) {                                                                                                 // 2227
					return null;                                                                                                      // 2228
				}                                                                                                                  // 2229
                                                                                                                       // 2230
				// Loop through all the selected options                                                                           // 2231
				i = one ? index : 0;                                                                                               // 2232
				max = one ? index + 1 : options.length;                                                                            // 2233
				for ( ; i < max; i++ ) {                                                                                           // 2234
					option = options[ i ];                                                                                            // 2235
                                                                                                                       // 2236
					// Don't return options that are disabled or in a disabled optgroup                                               // 2237
					if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {                          // 2239
                                                                                                                       // 2240
						// Get the specific value for the option                                                                         // 2241
						value = jQuery( option ).val();                                                                                  // 2242
                                                                                                                       // 2243
						// We don't need an array for one selects                                                                        // 2244
						if ( one ) {                                                                                                     // 2245
							return value;                                                                                                   // 2246
						}                                                                                                                // 2247
                                                                                                                       // 2248
						// Multi-Selects return an array                                                                                 // 2249
						values.push( value );                                                                                            // 2250
					}                                                                                                                 // 2251
				}                                                                                                                  // 2252
                                                                                                                       // 2253
				// Fixes Bug #2551 -- select.val() broken in IE after form.reset()                                                 // 2254
				if ( one && !values.length && options.length ) {                                                                   // 2255
					return jQuery( options[ index ] ).val();                                                                          // 2256
				}                                                                                                                  // 2257
                                                                                                                       // 2258
				return values;                                                                                                     // 2259
			},                                                                                                                  // 2260
                                                                                                                       // 2261
			set: function( elem, value ) {                                                                                      // 2262
				var values = jQuery.makeArray( value );                                                                            // 2263
                                                                                                                       // 2264
				jQuery(elem).find("option").each(function() {                                                                      // 2265
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;                                                // 2266
				});                                                                                                                // 2267
                                                                                                                       // 2268
				if ( !values.length ) {                                                                                            // 2269
					elem.selectedIndex = -1;                                                                                          // 2270
				}                                                                                                                  // 2271
				return values;                                                                                                     // 2272
			}                                                                                                                   // 2273
		}                                                                                                                    // 2274
	},                                                                                                                    // 2275
                                                                                                                       // 2276
	// Unused in 1.8, left in so attrFn-stabbers won't die; remove in 1.9                                                 // 2277
	attrFn: {},                                                                                                           // 2278
                                                                                                                       // 2279
	attr: function( elem, name, value, pass ) {                                                                           // 2280
		var ret, hooks, notxml,                                                                                              // 2281
			nType = elem.nodeType;                                                                                              // 2282
                                                                                                                       // 2283
		// don't get/set attributes on text, comment and attribute nodes                                                     // 2284
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {                                                          // 2285
			return;                                                                                                             // 2286
		}                                                                                                                    // 2287
                                                                                                                       // 2288
		if ( pass && jQuery.isFunction( jQuery.fn[ name ] ) ) {                                                              // 2289
			return jQuery( elem )[ name ]( value );                                                                             // 2290
		}                                                                                                                    // 2291
                                                                                                                       // 2292
		// Fallback to prop when attributes are not supported                                                                // 2293
		if ( typeof elem.getAttribute === "undefined" ) {                                                                    // 2294
			return jQuery.prop( elem, name, value );                                                                            // 2295
		}                                                                                                                    // 2296
                                                                                                                       // 2297
		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );                                                                    // 2298
                                                                                                                       // 2299
		// All attributes are lowercase                                                                                      // 2300
		// Grab necessary hook if one is defined                                                                             // 2301
		if ( notxml ) {                                                                                                      // 2302
			name = name.toLowerCase();                                                                                          // 2303
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );                                // 2304
		}                                                                                                                    // 2305
                                                                                                                       // 2306
		if ( value !== undefined ) {                                                                                         // 2307
                                                                                                                       // 2308
			if ( value === null ) {                                                                                             // 2309
				jQuery.removeAttr( elem, name );                                                                                   // 2310
				return;                                                                                                            // 2311
                                                                                                                       // 2312
			} else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {           // 2313
				return ret;                                                                                                        // 2314
                                                                                                                       // 2315
			} else {                                                                                                            // 2316
				elem.setAttribute( name, value + "" );                                                                             // 2317
				return value;                                                                                                      // 2318
			}                                                                                                                   // 2319
                                                                                                                       // 2320
		} else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {                        // 2321
			return ret;                                                                                                         // 2322
                                                                                                                       // 2323
		} else {                                                                                                             // 2324
                                                                                                                       // 2325
			ret = elem.getAttribute( name );                                                                                    // 2326
                                                                                                                       // 2327
			// Non-existent attributes return null, we normalize to undefined                                                   // 2328
			return ret === null ?                                                                                               // 2329
				undefined :                                                                                                        // 2330
				ret;                                                                                                               // 2331
		}                                                                                                                    // 2332
	},                                                                                                                    // 2333
                                                                                                                       // 2334
	removeAttr: function( elem, value ) {                                                                                 // 2335
		var propName, attrNames, name, isBool,                                                                               // 2336
			i = 0;                                                                                                              // 2337
                                                                                                                       // 2338
		if ( value && elem.nodeType === 1 ) {                                                                                // 2339
                                                                                                                       // 2340
			attrNames = value.split( core_rspace );                                                                             // 2341
                                                                                                                       // 2342
			for ( ; i < attrNames.length; i++ ) {                                                                               // 2343
				name = attrNames[ i ];                                                                                             // 2344
                                                                                                                       // 2345
				if ( name ) {                                                                                                      // 2346
					propName = jQuery.propFix[ name ] || name;                                                                        // 2347
					isBool = rboolean.test( name );                                                                                   // 2348
                                                                                                                       // 2349
					// See #9699 for explanation of this approach (setting first, then removal)                                       // 2350
					// Do not do this for boolean attributes (see #10870)                                                             // 2351
					if ( !isBool ) {                                                                                                  // 2352
						jQuery.attr( elem, name, "" );                                                                                   // 2353
					}                                                                                                                 // 2354
					elem.removeAttribute( getSetAttribute ? name : propName );                                                        // 2355
                                                                                                                       // 2356
					// Set corresponding property to false for boolean attributes                                                     // 2357
					if ( isBool && propName in elem ) {                                                                               // 2358
						elem[ propName ] = false;                                                                                        // 2359
					}                                                                                                                 // 2360
				}                                                                                                                  // 2361
			}                                                                                                                   // 2362
		}                                                                                                                    // 2363
	},                                                                                                                    // 2364
                                                                                                                       // 2365
	attrHooks: {                                                                                                          // 2366
		type: {                                                                                                              // 2367
			set: function( elem, value ) {                                                                                      // 2368
				// We can't allow the type property to be changed (since it causes problems in IE)                                 // 2369
				if ( rtype.test( elem.nodeName ) && elem.parentNode ) {                                                            // 2370
					jQuery.error( "type property can't be changed" );                                                                 // 2371
				} else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {                  // 2372
					// Setting the type on a radio button after the value resets the value in IE6-9                                   // 2373
					// Reset value to it's default in case type is set after value                                                    // 2374
					// This is for element creation                                                                                   // 2375
					var val = elem.value;                                                                                             // 2376
					elem.setAttribute( "type", value );                                                                               // 2377
					if ( val ) {                                                                                                      // 2378
						elem.value = val;                                                                                                // 2379
					}                                                                                                                 // 2380
					return value;                                                                                                     // 2381
				}                                                                                                                  // 2382
			}                                                                                                                   // 2383
		},                                                                                                                   // 2384
		// Use the value property for back compat                                                                            // 2385
		// Use the nodeHook for button elements in IE6/7 (#1954)                                                             // 2386
		value: {                                                                                                             // 2387
			get: function( elem, name ) {                                                                                       // 2388
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {                                                             // 2389
					return nodeHook.get( elem, name );                                                                                // 2390
				}                                                                                                                  // 2391
				return name in elem ?                                                                                              // 2392
					elem.value :                                                                                                      // 2393
					null;                                                                                                             // 2394
			},                                                                                                                  // 2395
			set: function( elem, value, name ) {                                                                                // 2396
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {                                                             // 2397
					return nodeHook.set( elem, value, name );                                                                         // 2398
				}                                                                                                                  // 2399
				// Does not return so that setAttribute is also used                                                               // 2400
				elem.value = value;                                                                                                // 2401
			}                                                                                                                   // 2402
		}                                                                                                                    // 2403
	},                                                                                                                    // 2404
                                                                                                                       // 2405
	propFix: {                                                                                                            // 2406
		tabindex: "tabIndex",                                                                                                // 2407
		readonly: "readOnly",                                                                                                // 2408
		"for": "htmlFor",                                                                                                    // 2409
		"class": "className",                                                                                                // 2410
		maxlength: "maxLength",                                                                                              // 2411
		cellspacing: "cellSpacing",                                                                                          // 2412
		cellpadding: "cellPadding",                                                                                          // 2413
		rowspan: "rowSpan",                                                                                                  // 2414
		colspan: "colSpan",                                                                                                  // 2415
		usemap: "useMap",                                                                                                    // 2416
		frameborder: "frameBorder",                                                                                          // 2417
		contenteditable: "contentEditable"                                                                                   // 2418
	},                                                                                                                    // 2419
                                                                                                                       // 2420
	prop: function( elem, name, value ) {                                                                                 // 2421
		var ret, hooks, notxml,                                                                                              // 2422
			nType = elem.nodeType;                                                                                              // 2423
                                                                                                                       // 2424
		// don't get/set properties on text, comment and attribute nodes                                                     // 2425
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {                                                          // 2426
			return;                                                                                                             // 2427
		}                                                                                                                    // 2428
                                                                                                                       // 2429
		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );                                                                    // 2430
                                                                                                                       // 2431
		if ( notxml ) {                                                                                                      // 2432
			// Fix name and attach hooks                                                                                        // 2433
			name = jQuery.propFix[ name ] || name;                                                                              // 2434
			hooks = jQuery.propHooks[ name ];                                                                                   // 2435
		}                                                                                                                    // 2436
                                                                                                                       // 2437
		if ( value !== undefined ) {                                                                                         // 2438
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {                            // 2439
				return ret;                                                                                                        // 2440
                                                                                                                       // 2441
			} else {                                                                                                            // 2442
				return ( elem[ name ] = value );                                                                                   // 2443
			}                                                                                                                   // 2444
                                                                                                                       // 2445
		} else {                                                                                                             // 2446
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {                                        // 2447
				return ret;                                                                                                        // 2448
                                                                                                                       // 2449
			} else {                                                                                                            // 2450
				return elem[ name ];                                                                                               // 2451
			}                                                                                                                   // 2452
		}                                                                                                                    // 2453
	},                                                                                                                    // 2454
                                                                                                                       // 2455
	propHooks: {                                                                                                          // 2456
		tabIndex: {                                                                                                          // 2457
			get: function( elem ) {                                                                                             // 2458
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set                        // 2459
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/           // 2460
				var attributeNode = elem.getAttributeNode("tabindex");                                                             // 2461
                                                                                                                       // 2462
				return attributeNode && attributeNode.specified ?                                                                  // 2463
					parseInt( attributeNode.value, 10 ) :                                                                             // 2464
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?                               // 2465
						0 :                                                                                                              // 2466
						undefined;                                                                                                       // 2467
			}                                                                                                                   // 2468
		}                                                                                                                    // 2469
	}                                                                                                                     // 2470
});                                                                                                                    // 2471
                                                                                                                       // 2472
// Hook for boolean attributes                                                                                         // 2473
boolHook = {                                                                                                           // 2474
	get: function( elem, name ) {                                                                                         // 2475
		// Align boolean attributes with corresponding properties                                                            // 2476
		// Fall back to attribute presence where some booleans are not supported                                             // 2477
		var attrNode,                                                                                                        // 2478
			property = jQuery.prop( elem, name );                                                                               // 2479
		return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
			name.toLowerCase() :                                                                                                // 2481
			undefined;                                                                                                          // 2482
	},                                                                                                                    // 2483
	set: function( elem, value, name ) {                                                                                  // 2484
		var propName;                                                                                                        // 2485
		if ( value === false ) {                                                                                             // 2486
			// Remove boolean attributes when set to false                                                                      // 2487
			jQuery.removeAttr( elem, name );                                                                                    // 2488
		} else {                                                                                                             // 2489
			// value is true since we know at this point it's type boolean and not false                                        // 2490
			// Set boolean attributes to the same name and set the DOM property                                                 // 2491
			propName = jQuery.propFix[ name ] || name;                                                                          // 2492
			if ( propName in elem ) {                                                                                           // 2493
				// Only set the IDL specifically if it already exists on the element                                               // 2494
				elem[ propName ] = true;                                                                                           // 2495
			}                                                                                                                   // 2496
                                                                                                                       // 2497
			elem.setAttribute( name, name.toLowerCase() );                                                                      // 2498
		}                                                                                                                    // 2499
		return name;                                                                                                         // 2500
	}                                                                                                                     // 2501
};                                                                                                                     // 2502
                                                                                                                       // 2503
// IE6/7 do not support getting/setting some attributes with get/setAttribute                                          // 2504
if ( !getSetAttribute ) {                                                                                              // 2505
                                                                                                                       // 2506
	fixSpecified = {                                                                                                      // 2507
		name: true,                                                                                                          // 2508
		id: true,                                                                                                            // 2509
		coords: true                                                                                                         // 2510
	};                                                                                                                    // 2511
                                                                                                                       // 2512
	// Use this for any attribute in IE6/7                                                                                // 2513
	// This fixes almost every IE6/7 issue                                                                                // 2514
	nodeHook = jQuery.valHooks.button = {                                                                                 // 2515
		get: function( elem, name ) {                                                                                        // 2516
			var ret;                                                                                                            // 2517
			ret = elem.getAttributeNode( name );                                                                                // 2518
			return ret && ( fixSpecified[ name ] ? ret.value !== "" : ret.specified ) ?                                         // 2519
				ret.value :                                                                                                        // 2520
				undefined;                                                                                                         // 2521
		},                                                                                                                   // 2522
		set: function( elem, value, name ) {                                                                                 // 2523
			// Set the existing or create a new attribute node                                                                  // 2524
			var ret = elem.getAttributeNode( name );                                                                            // 2525
			if ( !ret ) {                                                                                                       // 2526
				ret = document.createAttribute( name );                                                                            // 2527
				elem.setAttributeNode( ret );                                                                                      // 2528
			}                                                                                                                   // 2529
			return ( ret.value = value + "" );                                                                                  // 2530
		}                                                                                                                    // 2531
	};                                                                                                                    // 2532
                                                                                                                       // 2533
	// Set width and height to auto instead of 0 on empty string( Bug #8150 )                                             // 2534
	// This is for removals                                                                                               // 2535
	jQuery.each([ "width", "height" ], function( i, name ) {                                                              // 2536
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {                                                // 2537
			set: function( elem, value ) {                                                                                      // 2538
				if ( value === "" ) {                                                                                              // 2539
					elem.setAttribute( name, "auto" );                                                                                // 2540
					return value;                                                                                                     // 2541
				}                                                                                                                  // 2542
			}                                                                                                                   // 2543
		});                                                                                                                  // 2544
	});                                                                                                                   // 2545
                                                                                                                       // 2546
	// Set contenteditable to false on removals(#10429)                                                                   // 2547
	// Setting to empty string throws an error as an invalid value                                                        // 2548
	jQuery.attrHooks.contenteditable = {                                                                                  // 2549
		get: nodeHook.get,                                                                                                   // 2550
		set: function( elem, value, name ) {                                                                                 // 2551
			if ( value === "" ) {                                                                                               // 2552
				value = "false";                                                                                                   // 2553
			}                                                                                                                   // 2554
			nodeHook.set( elem, value, name );                                                                                  // 2555
		}                                                                                                                    // 2556
	};                                                                                                                    // 2557
}                                                                                                                      // 2558
                                                                                                                       // 2559
                                                                                                                       // 2560
// Some attributes require a special call on IE                                                                        // 2561
if ( !jQuery.support.hrefNormalized ) {                                                                                // 2562
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {                                               // 2563
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {                                                // 2564
			get: function( elem ) {                                                                                             // 2565
				var ret = elem.getAttribute( name, 2 );                                                                            // 2566
				return ret === null ? undefined : ret;                                                                             // 2567
			}                                                                                                                   // 2568
		});                                                                                                                  // 2569
	});                                                                                                                   // 2570
}                                                                                                                      // 2571
                                                                                                                       // 2572
if ( !jQuery.support.style ) {                                                                                         // 2573
	jQuery.attrHooks.style = {                                                                                            // 2574
		get: function( elem ) {                                                                                              // 2575
			// Return undefined in the case of empty string                                                                     // 2576
			// Normalize to lowercase since IE uppercases css property names                                                    // 2577
			return elem.style.cssText.toLowerCase() || undefined;                                                               // 2578
		},                                                                                                                   // 2579
		set: function( elem, value ) {                                                                                       // 2580
			return ( elem.style.cssText = value + "" );                                                                         // 2581
		}                                                                                                                    // 2582
	};                                                                                                                    // 2583
}                                                                                                                      // 2584
                                                                                                                       // 2585
// Safari mis-reports the default selected property of an option                                                       // 2586
// Accessing the parent's selectedIndex property fixes it                                                              // 2587
if ( !jQuery.support.optSelected ) {                                                                                   // 2588
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {                                               // 2589
		get: function( elem ) {                                                                                              // 2590
			var parent = elem.parentNode;                                                                                       // 2591
                                                                                                                       // 2592
			if ( parent ) {                                                                                                     // 2593
				parent.selectedIndex;                                                                                              // 2594
                                                                                                                       // 2595
				// Make sure that it also works with optgroups, see #5701                                                          // 2596
				if ( parent.parentNode ) {                                                                                         // 2597
					parent.parentNode.selectedIndex;                                                                                  // 2598
				}                                                                                                                  // 2599
			}                                                                                                                   // 2600
			return null;                                                                                                        // 2601
		}                                                                                                                    // 2602
	});                                                                                                                   // 2603
}                                                                                                                      // 2604
                                                                                                                       // 2605
// IE6/7 call enctype encoding                                                                                         // 2606
if ( !jQuery.support.enctype ) {                                                                                       // 2607
	jQuery.propFix.enctype = "encoding";                                                                                  // 2608
}                                                                                                                      // 2609
                                                                                                                       // 2610
// Radios and checkboxes getter/setter                                                                                 // 2611
if ( !jQuery.support.checkOn ) {                                                                                       // 2612
	jQuery.each([ "radio", "checkbox" ], function() {                                                                     // 2613
		jQuery.valHooks[ this ] = {                                                                                          // 2614
			get: function( elem ) {                                                                                             // 2615
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified                       // 2616
				return elem.getAttribute("value") === null ? "on" : elem.value;                                                    // 2617
			}                                                                                                                   // 2618
		};                                                                                                                   // 2619
	});                                                                                                                   // 2620
}                                                                                                                      // 2621
jQuery.each([ "radio", "checkbox" ], function() {                                                                      // 2622
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {                                                   // 2623
		set: function( elem, value ) {                                                                                       // 2624
			if ( jQuery.isArray( value ) ) {                                                                                    // 2625
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );                                        // 2626
			}                                                                                                                   // 2627
		}                                                                                                                    // 2628
	});                                                                                                                   // 2629
});                                                                                                                    // 2630
var rformElems = /^(?:textarea|input|select)$/i,                                                                       // 2631
	rtypenamespace = /^([^\.]*|)(?:\.(.+)|)$/,                                                                            // 2632
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,                                                                               // 2633
	rkeyEvent = /^key/,                                                                                                   // 2634
	rmouseEvent = /^(?:mouse|contextmenu)|click/,                                                                         // 2635
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,                                                                      // 2636
	hoverHack = function( events ) {                                                                                      // 2637
		return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );              // 2638
	};                                                                                                                    // 2639
                                                                                                                       // 2640
/*                                                                                                                     // 2641
 * Helper functions for managing events -- not part of the public interface.                                           // 2642
 * Props to Dean Edwards' addEvent library for many of the ideas.                                                      // 2643
 */                                                                                                                    // 2644
jQuery.event = {                                                                                                       // 2645
                                                                                                                       // 2646
	add: function( elem, types, handler, data, selector ) {                                                               // 2647
                                                                                                                       // 2648
		var elemData, eventHandle, events,                                                                                   // 2649
			t, tns, type, namespaces, handleObj,                                                                                // 2650
			handleObjIn, handlers, special;                                                                                     // 2651
                                                                                                                       // 2652
		// Don't attach events to noData or text/comment nodes (allow plain objects tho)                                     // 2653
		if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {      // 2654
			return;                                                                                                             // 2655
		}                                                                                                                    // 2656
                                                                                                                       // 2657
		// Caller can pass in an object of custom data in lieu of the handler                                                // 2658
		if ( handler.handler ) {                                                                                             // 2659
			handleObjIn = handler;                                                                                              // 2660
			handler = handleObjIn.handler;                                                                                      // 2661
			selector = handleObjIn.selector;                                                                                    // 2662
		}                                                                                                                    // 2663
                                                                                                                       // 2664
		// Make sure that the handler has a unique ID, used to find/remove it later                                          // 2665
		if ( !handler.guid ) {                                                                                               // 2666
			handler.guid = jQuery.guid++;                                                                                       // 2667
		}                                                                                                                    // 2668
                                                                                                                       // 2669
		// Init the element's event structure and main handler, if this is the first                                         // 2670
		events = elemData.events;                                                                                            // 2671
		if ( !events ) {                                                                                                     // 2672
			elemData.events = events = {};                                                                                      // 2673
		}                                                                                                                    // 2674
		eventHandle = elemData.handle;                                                                                       // 2675
		if ( !eventHandle ) {                                                                                                // 2676
			elemData.handle = eventHandle = function( e ) {                                                                     // 2677
				// Discard the second event of a jQuery.event.trigger() and                                                        // 2678
				// when an event is called after a page has unloaded                                                               // 2679
				return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?                                // 2680
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :                                                      // 2681
					undefined;                                                                                                        // 2682
			};                                                                                                                  // 2683
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events                       // 2684
			eventHandle.elem = elem;                                                                                            // 2685
		}                                                                                                                    // 2686
                                                                                                                       // 2687
		// Handle multiple events separated by a space                                                                       // 2688
		// jQuery(...).bind("mouseover mouseout", fn);                                                                       // 2689
		types = jQuery.trim( hoverHack(types) ).split( " " );                                                                // 2690
		for ( t = 0; t < types.length; t++ ) {                                                                               // 2691
                                                                                                                       // 2692
			tns = rtypenamespace.exec( types[t] ) || [];                                                                        // 2693
			type = tns[1];                                                                                                      // 2694
			namespaces = ( tns[2] || "" ).split( "." ).sort();                                                                  // 2695
                                                                                                                       // 2696
			// If event changes its type, use the special event handlers for the changed type                                   // 2697
			special = jQuery.event.special[ type ] || {};                                                                       // 2698
                                                                                                                       // 2699
			// If selector defined, determine special event api type, otherwise given type                                      // 2700
			type = ( selector ? special.delegateType : special.bindType ) || type;                                              // 2701
                                                                                                                       // 2702
			// Update special based on newly reset type                                                                         // 2703
			special = jQuery.event.special[ type ] || {};                                                                       // 2704
                                                                                                                       // 2705
			// handleObj is passed to all event handlers                                                                        // 2706
			handleObj = jQuery.extend({                                                                                         // 2707
				type: type,                                                                                                        // 2708
				origType: tns[1],                                                                                                  // 2709
				data: data,                                                                                                        // 2710
				handler: handler,                                                                                                  // 2711
				guid: handler.guid,                                                                                                // 2712
				selector: selector,                                                                                                // 2713
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),                                         // 2714
				namespace: namespaces.join(".")                                                                                    // 2715
			}, handleObjIn );                                                                                                   // 2716
                                                                                                                       // 2717
			// Init the event handler queue if we're the first                                                                  // 2718
			handlers = events[ type ];                                                                                          // 2719
			if ( !handlers ) {                                                                                                  // 2720
				handlers = events[ type ] = [];                                                                                    // 2721
				handlers.delegateCount = 0;                                                                                        // 2722
                                                                                                                       // 2723
				// Only use addEventListener/attachEvent if the special events handler returns false                               // 2724
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {                     // 2725
					// Bind the global event handler to the element                                                                   // 2726
					if ( elem.addEventListener ) {                                                                                    // 2727
						elem.addEventListener( type, eventHandle, false );                                                               // 2728
                                                                                                                       // 2729
					} else if ( elem.attachEvent ) {                                                                                  // 2730
						elem.attachEvent( "on" + type, eventHandle );                                                                    // 2731
					}                                                                                                                 // 2732
				}                                                                                                                  // 2733
			}                                                                                                                   // 2734
                                                                                                                       // 2735
			if ( special.add ) {                                                                                                // 2736
				special.add.call( elem, handleObj );                                                                               // 2737
                                                                                                                       // 2738
				if ( !handleObj.handler.guid ) {                                                                                   // 2739
					handleObj.handler.guid = handler.guid;                                                                            // 2740
				}                                                                                                                  // 2741
			}                                                                                                                   // 2742
                                                                                                                       // 2743
			// Add to the element's handler list, delegates in front                                                            // 2744
			if ( selector ) {                                                                                                   // 2745
				handlers.splice( handlers.delegateCount++, 0, handleObj );                                                         // 2746
			} else {                                                                                                            // 2747
				handlers.push( handleObj );                                                                                        // 2748
			}                                                                                                                   // 2749
                                                                                                                       // 2750
			// Keep track of which events have ever been used, for event optimization                                           // 2751
			jQuery.event.global[ type ] = true;                                                                                 // 2752
		}                                                                                                                    // 2753
                                                                                                                       // 2754
		// Nullify elem to prevent memory leaks in IE                                                                        // 2755
		elem = null;                                                                                                         // 2756
	},                                                                                                                    // 2757
                                                                                                                       // 2758
	global: {},                                                                                                           // 2759
                                                                                                                       // 2760
	// Detach an event or set of events from an element                                                                   // 2761
	remove: function( elem, types, handler, selector, mappedTypes ) {                                                     // 2762
                                                                                                                       // 2763
		var t, tns, type, origType, namespaces, origCount,                                                                   // 2764
			j, events, special, eventType, handleObj,                                                                           // 2765
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );                                                          // 2766
                                                                                                                       // 2767
		if ( !elemData || !(events = elemData.events) ) {                                                                    // 2768
			return;                                                                                                             // 2769
		}                                                                                                                    // 2770
                                                                                                                       // 2771
		// Once for each type.namespace in types; type may be omitted                                                        // 2772
		types = jQuery.trim( hoverHack( types || "" ) ).split(" ");                                                          // 2773
		for ( t = 0; t < types.length; t++ ) {                                                                               // 2774
			tns = rtypenamespace.exec( types[t] ) || [];                                                                        // 2775
			type = origType = tns[1];                                                                                           // 2776
			namespaces = tns[2];                                                                                                // 2777
                                                                                                                       // 2778
			// Unbind all events (on this namespace, if provided) for the element                                               // 2779
			if ( !type ) {                                                                                                      // 2780
				for ( type in events ) {                                                                                           // 2781
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );                                          // 2782
				}                                                                                                                  // 2783
				continue;                                                                                                          // 2784
			}                                                                                                                   // 2785
                                                                                                                       // 2786
			special = jQuery.event.special[ type ] || {};                                                                       // 2787
			type = ( selector? special.delegateType : special.bindType ) || type;                                               // 2788
			eventType = events[ type ] || [];                                                                                   // 2789
			origCount = eventType.length;                                                                                       // 2790
			namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                                                                                                                       // 2792
			// Remove matching events                                                                                           // 2793
			for ( j = 0; j < eventType.length; j++ ) {                                                                          // 2794
				handleObj = eventType[ j ];                                                                                        // 2795
                                                                                                                       // 2796
				if ( ( mappedTypes || origType === handleObj.origType ) &&                                                         // 2797
					 ( !handler || handler.guid === handleObj.guid ) &&                                                               // 2798
					 ( !namespaces || namespaces.test( handleObj.namespace ) ) &&                                                     // 2799
					 ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {                  // 2800
					eventType.splice( j--, 1 );                                                                                       // 2801
                                                                                                                       // 2802
					if ( handleObj.selector ) {                                                                                       // 2803
						eventType.delegateCount--;                                                                                       // 2804
					}                                                                                                                 // 2805
					if ( special.remove ) {                                                                                           // 2806
						special.remove.call( elem, handleObj );                                                                          // 2807
					}                                                                                                                 // 2808
				}                                                                                                                  // 2809
			}                                                                                                                   // 2810
                                                                                                                       // 2811
			// Remove generic event handler if we removed something and no more handlers exist                                  // 2812
			// (avoids potential for endless recursion during removal of special event handlers)                                // 2813
			if ( eventType.length === 0 && origCount !== eventType.length ) {                                                   // 2814
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {                 // 2815
					jQuery.removeEvent( elem, type, elemData.handle );                                                                // 2816
				}                                                                                                                  // 2817
                                                                                                                       // 2818
				delete events[ type ];                                                                                             // 2819
			}                                                                                                                   // 2820
		}                                                                                                                    // 2821
                                                                                                                       // 2822
		// Remove the expando if it's no longer used                                                                         // 2823
		if ( jQuery.isEmptyObject( events ) ) {                                                                              // 2824
			delete elemData.handle;                                                                                             // 2825
                                                                                                                       // 2826
			// removeData also checks for emptiness and clears the expando if empty                                             // 2827
			// so use it instead of delete                                                                                      // 2828
			jQuery.removeData( elem, "events", true );                                                                          // 2829
		}                                                                                                                    // 2830
	},                                                                                                                    // 2831
                                                                                                                       // 2832
	// Events that are safe to short-circuit if no handlers are attached.                                                 // 2833
	// Native DOM events should not be added, they may have inline handlers.                                              // 2834
	customEvent: {                                                                                                        // 2835
		"getData": true,                                                                                                     // 2836
		"setData": true,                                                                                                     // 2837
		"changeData": true                                                                                                   // 2838
	},                                                                                                                    // 2839
                                                                                                                       // 2840
	trigger: function( event, data, elem, onlyHandlers ) {                                                                // 2841
		// Don't do events on text and comment nodes                                                                         // 2842
		if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {                                                        // 2843
			return;                                                                                                             // 2844
		}                                                                                                                    // 2845
                                                                                                                       // 2846
		// Event object or event type                                                                                        // 2847
		var cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType,                                   // 2848
			type = event.type || event,                                                                                         // 2849
			namespaces = [];                                                                                                    // 2850
                                                                                                                       // 2851
		// focus/blur morphs to focusin/out; ensure we're not firing them right now                                          // 2852
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {                                                           // 2853
			return;                                                                                                             // 2854
		}                                                                                                                    // 2855
                                                                                                                       // 2856
		if ( type.indexOf( "!" ) >= 0 ) {                                                                                    // 2857
			// Exclusive events trigger only for the exact event (no namespaces)                                                // 2858
			type = type.slice(0, -1);                                                                                           // 2859
			exclusive = true;                                                                                                   // 2860
		}                                                                                                                    // 2861
                                                                                                                       // 2862
		if ( type.indexOf( "." ) >= 0 ) {                                                                                    // 2863
			// Namespaced trigger; create a regexp to match event type in handle()                                              // 2864
			namespaces = type.split(".");                                                                                       // 2865
			type = namespaces.shift();                                                                                          // 2866
			namespaces.sort();                                                                                                  // 2867
		}                                                                                                                    // 2868
                                                                                                                       // 2869
		if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {                                 // 2870
			// No jQuery handlers for this event type, and it can't have inline handlers                                        // 2871
			return;                                                                                                             // 2872
		}                                                                                                                    // 2873
                                                                                                                       // 2874
		// Caller can pass in an Event, Object, or just an event type string                                                 // 2875
		event = typeof event === "object" ?                                                                                  // 2876
			// jQuery.Event object                                                                                              // 2877
			event[ jQuery.expando ] ? event :                                                                                   // 2878
			// Object literal                                                                                                   // 2879
			new jQuery.Event( type, event ) :                                                                                   // 2880
			// Just the event type (string)                                                                                     // 2881
			new jQuery.Event( type );                                                                                           // 2882
                                                                                                                       // 2883
		event.type = type;                                                                                                   // 2884
		event.isTrigger = true;                                                                                              // 2885
		event.exclusive = exclusive;                                                                                         // 2886
		event.namespace = namespaces.join( "." );                                                                            // 2887
		event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;   // 2888
		ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";                                                                 // 2889
                                                                                                                       // 2890
		// Handle a global trigger                                                                                           // 2891
		if ( !elem ) {                                                                                                       // 2892
                                                                                                                       // 2893
			// TODO: Stop taunting the data cache; remove global events and always attach to document                           // 2894
			cache = jQuery.cache;                                                                                               // 2895
			for ( i in cache ) {                                                                                                // 2896
				if ( cache[ i ].events && cache[ i ].events[ type ] ) {                                                            // 2897
					jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );                                                // 2898
				}                                                                                                                  // 2899
			}                                                                                                                   // 2900
			return;                                                                                                             // 2901
		}                                                                                                                    // 2902
                                                                                                                       // 2903
		// Clean up the event in case it is being reused                                                                     // 2904
		event.result = undefined;                                                                                            // 2905
		if ( !event.target ) {                                                                                               // 2906
			event.target = elem;                                                                                                // 2907
		}                                                                                                                    // 2908
                                                                                                                       // 2909
		// Clone any incoming data and prepend the event, creating the handler arg list                                      // 2910
		data = data != null ? jQuery.makeArray( data ) : [];                                                                 // 2911
		data.unshift( event );                                                                                               // 2912
                                                                                                                       // 2913
		// Allow special events to draw outside the lines                                                                    // 2914
		special = jQuery.event.special[ type ] || {};                                                                        // 2915
		if ( special.trigger && special.trigger.apply( elem, data ) === false ) {                                            // 2916
			return;                                                                                                             // 2917
		}                                                                                                                    // 2918
                                                                                                                       // 2919
		// Determine event propagation path in advance, per W3C events spec (#9951)                                          // 2920
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)                               // 2921
		eventPath = [[ elem, special.bindType || type ]];                                                                    // 2922
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {                                              // 2923
                                                                                                                       // 2924
			bubbleType = special.delegateType || type;                                                                          // 2925
			cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;                                               // 2926
			for ( old = elem; cur; cur = cur.parentNode ) {                                                                     // 2927
				eventPath.push([ cur, bubbleType ]);                                                                               // 2928
				old = cur;                                                                                                         // 2929
			}                                                                                                                   // 2930
                                                                                                                       // 2931
			// Only add window if we got to document (e.g., not plain obj or detached DOM)                                      // 2932
			if ( old === (elem.ownerDocument || document) ) {                                                                   // 2933
				eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);                                     // 2934
			}                                                                                                                   // 2935
		}                                                                                                                    // 2936
                                                                                                                       // 2937
		// Fire handlers on the event path                                                                                   // 2938
		for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {                                          // 2939
                                                                                                                       // 2940
			cur = eventPath[i][0];                                                                                              // 2941
			event.type = eventPath[i][1];                                                                                       // 2942
                                                                                                                       // 2943
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );                    // 2944
			if ( handle ) {                                                                                                     // 2945
				handle.apply( cur, data );                                                                                         // 2946
			}                                                                                                                   // 2947
			// Note that this is a bare JS function and not a jQuery handler                                                    // 2948
			handle = ontype && cur[ ontype ];                                                                                   // 2949
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {                  // 2950
				event.preventDefault();                                                                                            // 2951
			}                                                                                                                   // 2952
		}                                                                                                                    // 2953
		event.type = type;                                                                                                   // 2954
                                                                                                                       // 2955
		// If nobody prevented the default action, do it now                                                                 // 2956
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {                                                                // 2957
                                                                                                                       // 2958
			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&                         // 2959
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {                               // 2960
                                                                                                                       // 2961
				// Call a native DOM method on the target with the same name name as the event.                                    // 2962
				// Can't use an .isFunction() check here because IE6/7 fails that test.                                            // 2963
				// Don't do default actions on window, that's where global variables be (#6170)                                    // 2964
				// IE<9 dies on focus/blur to hidden element (#1486)                                                               // 2965
				if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {
                                                                                                                       // 2967
					// Don't re-trigger an onFOO event when we call its FOO() method                                                  // 2968
					old = elem[ ontype ];                                                                                             // 2969
                                                                                                                       // 2970
					if ( old ) {                                                                                                      // 2971
						elem[ ontype ] = null;                                                                                           // 2972
					}                                                                                                                 // 2973
                                                                                                                       // 2974
					// Prevent re-triggering of the same event, since we already bubbled it above                                     // 2975
					jQuery.event.triggered = type;                                                                                    // 2976
					elem[ type ]();                                                                                                   // 2977
					jQuery.event.triggered = undefined;                                                                               // 2978
                                                                                                                       // 2979
					if ( old ) {                                                                                                      // 2980
						elem[ ontype ] = old;                                                                                            // 2981
					}                                                                                                                 // 2982
				}                                                                                                                  // 2983
			}                                                                                                                   // 2984
		}                                                                                                                    // 2985
                                                                                                                       // 2986
		return event.result;                                                                                                 // 2987
	},                                                                                                                    // 2988
                                                                                                                       // 2989
	dispatch: function( event ) {                                                                                         // 2990
                                                                                                                       // 2991
		// Make a writable jQuery.Event from the native event object                                                         // 2992
		event = jQuery.event.fix( event || window.event );                                                                   // 2993
                                                                                                                       // 2994
		var i, j, cur, ret, selMatch, matched, matches, handleObj, sel, related,                                             // 2995
			handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),                                          // 2996
			delegateCount = handlers.delegateCount,                                                                             // 2997
			args = core_slice.call( arguments ),                                                                                // 2998
			run_all = !event.exclusive && !event.namespace,                                                                     // 2999
			special = jQuery.event.special[ event.type ] || {},                                                                 // 3000
			handlerQueue = [];                                                                                                  // 3001
                                                                                                                       // 3002
		// Use the fix-ed jQuery.Event rather than the (read-only) native event                                              // 3003
		args[0] = event;                                                                                                     // 3004
		event.delegateTarget = this;                                                                                         // 3005
                                                                                                                       // 3006
		// Call the preDispatch hook for the mapped type, and let it bail if desired                                         // 3007
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {                                    // 3008
			return;                                                                                                             // 3009
		}                                                                                                                    // 3010
                                                                                                                       // 3011
		// Determine handlers that should run if there are delegated events                                                  // 3012
		// Avoid non-left-click bubbling in Firefox (#3861)                                                                  // 3013
		if ( delegateCount && !(event.button && event.type === "click") ) {                                                  // 3014
                                                                                                                       // 3015
			for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {                                             // 3016
                                                                                                                       // 3017
				// Don't process clicks (ONLY) on disabled elements (#6911, #8165, #11382, #11764)                                 // 3018
				if ( cur.disabled !== true || event.type !== "click" ) {                                                           // 3019
					selMatch = {};                                                                                                    // 3020
					matches = [];                                                                                                     // 3021
					for ( i = 0; i < delegateCount; i++ ) {                                                                           // 3022
						handleObj = handlers[ i ];                                                                                       // 3023
						sel = handleObj.selector;                                                                                        // 3024
                                                                                                                       // 3025
						if ( selMatch[ sel ] === undefined ) {                                                                           // 3026
							selMatch[ sel ] = handleObj.needsContext ?                                                                      // 3027
								jQuery( sel, this ).index( cur ) >= 0 :                                                                        // 3028
								jQuery.find( sel, this, null, [ cur ] ).length;                                                                // 3029
						}                                                                                                                // 3030
						if ( selMatch[ sel ] ) {                                                                                         // 3031
							matches.push( handleObj );                                                                                      // 3032
						}                                                                                                                // 3033
					}                                                                                                                 // 3034
					if ( matches.length ) {                                                                                           // 3035
						handlerQueue.push({ elem: cur, matches: matches });                                                              // 3036
					}                                                                                                                 // 3037
				}                                                                                                                  // 3038
			}                                                                                                                   // 3039
		}                                                                                                                    // 3040
                                                                                                                       // 3041
		// Add the remaining (directly-bound) handlers                                                                       // 3042
		if ( handlers.length > delegateCount ) {                                                                             // 3043
			handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });                                        // 3044
		}                                                                                                                    // 3045
                                                                                                                       // 3046
		// Run delegates first; they may want to stop propagation beneath us                                                 // 3047
		for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {                                       // 3048
			matched = handlerQueue[ i ];                                                                                        // 3049
			event.currentTarget = matched.elem;                                                                                 // 3050
                                                                                                                       // 3051
			for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {                          // 3052
				handleObj = matched.matches[ j ];                                                                                  // 3053
                                                                                                                       // 3054
				// Triggered event must either 1) be non-exclusive and have no namespace, or                                       // 3055
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).                // 3056
				if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {
                                                                                                                       // 3058
					event.data = handleObj.data;                                                                                      // 3059
					event.handleObj = handleObj;                                                                                      // 3060
                                                                                                                       // 3061
					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )                          // 3062
							.apply( matched.elem, args );                                                                                   // 3063
                                                                                                                       // 3064
					if ( ret !== undefined ) {                                                                                        // 3065
						event.result = ret;                                                                                              // 3066
						if ( ret === false ) {                                                                                           // 3067
							event.preventDefault();                                                                                         // 3068
							event.stopPropagation();                                                                                        // 3069
						}                                                                                                                // 3070
					}                                                                                                                 // 3071
				}                                                                                                                  // 3072
			}                                                                                                                   // 3073
		}                                                                                                                    // 3074
                                                                                                                       // 3075
		// Call the postDispatch hook for the mapped type                                                                    // 3076
		if ( special.postDispatch ) {                                                                                        // 3077
			special.postDispatch.call( this, event );                                                                           // 3078
		}                                                                                                                    // 3079
                                                                                                                       // 3080
		return event.result;                                                                                                 // 3081
	},                                                                                                                    // 3082
                                                                                                                       // 3083
	// Includes some event props shared by KeyEvent and MouseEvent                                                        // 3084
	// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
	props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                                                                                                                       // 3087
	fixHooks: {},                                                                                                         // 3088
                                                                                                                       // 3089
	keyHooks: {                                                                                                           // 3090
		props: "char charCode key keyCode".split(" "),                                                                       // 3091
		filter: function( event, original ) {                                                                                // 3092
                                                                                                                       // 3093
			// Add which for key events                                                                                         // 3094
			if ( event.which == null ) {                                                                                        // 3095
				event.which = original.charCode != null ? original.charCode : original.keyCode;                                    // 3096
			}                                                                                                                   // 3097
                                                                                                                       // 3098
			return event;                                                                                                       // 3099
		}                                                                                                                    // 3100
	},                                                                                                                    // 3101
                                                                                                                       // 3102
	mouseHooks: {                                                                                                         // 3103
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {                                                                                // 3105
			var eventDoc, doc, body,                                                                                            // 3106
				button = original.button,                                                                                          // 3107
				fromElement = original.fromElement;                                                                                // 3108
                                                                                                                       // 3109
			// Calculate pageX/Y if missing and clientX/Y available                                                             // 3110
			if ( event.pageX == null && original.clientX != null ) {                                                            // 3111
				eventDoc = event.target.ownerDocument || document;                                                                 // 3112
				doc = eventDoc.documentElement;                                                                                    // 3113
				body = eventDoc.body;                                                                                              // 3114
                                                                                                                       // 3115
				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}                                                                                                                   // 3118
                                                                                                                       // 3119
			// Add relatedTarget, if necessary                                                                                  // 3120
			if ( !event.relatedTarget && fromElement ) {                                                                        // 3121
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;                             // 3122
			}                                                                                                                   // 3123
                                                                                                                       // 3124
			// Add which for click: 1 === left; 2 === middle; 3 === right                                                       // 3125
			// Note: button is not normalized, so don't use it                                                                  // 3126
			if ( !event.which && button !== undefined ) {                                                                       // 3127
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );                                    // 3128
			}                                                                                                                   // 3129
                                                                                                                       // 3130
			return event;                                                                                                       // 3131
		}                                                                                                                    // 3132
	},                                                                                                                    // 3133
                                                                                                                       // 3134
	fix: function( event ) {                                                                                              // 3135
		if ( event[ jQuery.expando ] ) {                                                                                     // 3136
			return event;                                                                                                       // 3137
		}                                                                                                                    // 3138
                                                                                                                       // 3139
		// Create a writable copy of the event object and normalize some properties                                          // 3140
		var i, prop,                                                                                                         // 3141
			originalEvent = event,                                                                                              // 3142
			fixHook = jQuery.event.fixHooks[ event.type ] || {},                                                                // 3143
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;                                             // 3144
                                                                                                                       // 3145
		event = jQuery.Event( originalEvent );                                                                               // 3146
                                                                                                                       // 3147
		for ( i = copy.length; i; ) {                                                                                        // 3148
			prop = copy[ --i ];                                                                                                 // 3149
			event[ prop ] = originalEvent[ prop ];                                                                              // 3150
		}                                                                                                                    // 3151
                                                                                                                       // 3152
		// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)                                                     // 3153
		if ( !event.target ) {                                                                                               // 3154
			event.target = originalEvent.srcElement || document;                                                                // 3155
		}                                                                                                                    // 3156
                                                                                                                       // 3157
		// Target should not be a text node (#504, Safari)                                                                   // 3158
		if ( event.target.nodeType === 3 ) {                                                                                 // 3159
			event.target = event.target.parentNode;                                                                             // 3160
		}                                                                                                                    // 3161
                                                                                                                       // 3162
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328; IE6/7/8)                                   // 3163
		event.metaKey = !!event.metaKey;                                                                                     // 3164
                                                                                                                       // 3165
		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;                                               // 3166
	},                                                                                                                    // 3167
                                                                                                                       // 3168
	special: {                                                                                                            // 3169
		load: {                                                                                                              // 3170
			// Prevent triggered image.load events from bubbling to window.load                                                 // 3171
			noBubble: true                                                                                                      // 3172
		},                                                                                                                   // 3173
                                                                                                                       // 3174
		focus: {                                                                                                             // 3175
			delegateType: "focusin"                                                                                             // 3176
		},                                                                                                                   // 3177
		blur: {                                                                                                              // 3178
			delegateType: "focusout"                                                                                            // 3179
		},                                                                                                                   // 3180
                                                                                                                       // 3181
		beforeunload: {                                                                                                      // 3182
			setup: function( data, namespaces, eventHandle ) {                                                                  // 3183
				// We only want to do this special case on windows                                                                 // 3184
				if ( jQuery.isWindow( this ) ) {                                                                                   // 3185
					this.onbeforeunload = eventHandle;                                                                                // 3186
				}                                                                                                                  // 3187
			},                                                                                                                  // 3188
                                                                                                                       // 3189
			teardown: function( namespaces, eventHandle ) {                                                                     // 3190
				if ( this.onbeforeunload === eventHandle ) {                                                                       // 3191
					this.onbeforeunload = null;                                                                                       // 3192
				}                                                                                                                  // 3193
			}                                                                                                                   // 3194
		}                                                                                                                    // 3195
	},                                                                                                                    // 3196
                                                                                                                       // 3197
	simulate: function( type, elem, event, bubble ) {                                                                     // 3198
		// Piggyback on a donor event to simulate a different one.                                                           // 3199
		// Fake originalEvent to avoid donor's stopPropagation, but if the                                                   // 3200
		// simulated event prevents default then we do the same on the donor.                                                // 3201
		var e = jQuery.extend(                                                                                               // 3202
			new jQuery.Event(),                                                                                                 // 3203
			event,                                                                                                              // 3204
			{ type: type,                                                                                                       // 3205
				isSimulated: true,                                                                                                 // 3206
				originalEvent: {}                                                                                                  // 3207
			}                                                                                                                   // 3208
		);                                                                                                                   // 3209
		if ( bubble ) {                                                                                                      // 3210
			jQuery.event.trigger( e, null, elem );                                                                              // 3211
		} else {                                                                                                             // 3212
			jQuery.event.dispatch.call( elem, e );                                                                              // 3213
		}                                                                                                                    // 3214
		if ( e.isDefaultPrevented() ) {                                                                                      // 3215
			event.preventDefault();                                                                                             // 3216
		}                                                                                                                    // 3217
	}                                                                                                                     // 3218
};                                                                                                                     // 3219
                                                                                                                       // 3220
// Some plugins are using, but it's undocumented/deprecated and will be removed.                                       // 3221
// The 1.7 special event interface should provide all the hooks needed now.                                            // 3222
jQuery.event.handle = jQuery.event.dispatch;                                                                           // 3223
                                                                                                                       // 3224
jQuery.removeEvent = document.removeEventListener ?                                                                    // 3225
	function( elem, type, handle ) {                                                                                      // 3226
		if ( elem.removeEventListener ) {                                                                                    // 3227
			elem.removeEventListener( type, handle, false );                                                                    // 3228
		}                                                                                                                    // 3229
	} :                                                                                                                   // 3230
	function( elem, type, handle ) {                                                                                      // 3231
		var name = "on" + type;                                                                                              // 3232
                                                                                                                       // 3233
		if ( elem.detachEvent ) {                                                                                            // 3234
                                                                                                                       // 3235
			// #8545, #7054, preventing memory leaks for custom events in IE6-8 –                                               // 3236
			// detachEvent needed property on element, by name of that event, to properly expose it to GC                       // 3237
			if ( typeof elem[ name ] === "undefined" ) {                                                                        // 3238
				elem[ name ] = null;                                                                                               // 3239
			}                                                                                                                   // 3240
                                                                                                                       // 3241
			elem.detachEvent( name, handle );                                                                                   // 3242
		}                                                                                                                    // 3243
	};                                                                                                                    // 3244
                                                                                                                       // 3245
jQuery.Event = function( src, props ) {                                                                                // 3246
	// Allow instantiation without the 'new' keyword                                                                      // 3247
	if ( !(this instanceof jQuery.Event) ) {                                                                              // 3248
		return new jQuery.Event( src, props );                                                                               // 3249
	}                                                                                                                     // 3250
                                                                                                                       // 3251
	// Event object                                                                                                       // 3252
	if ( src && src.type ) {                                                                                              // 3253
		this.originalEvent = src;                                                                                            // 3254
		this.type = src.type;                                                                                                // 3255
                                                                                                                       // 3256
		// Events bubbling up the document may have been marked as prevented                                                 // 3257
		// by a handler lower down the tree; reflect the correct value.                                                      // 3258
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||                                     // 3259
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;                                      // 3260
                                                                                                                       // 3261
	// Event type                                                                                                         // 3262
	} else {                                                                                                              // 3263
		this.type = src;                                                                                                     // 3264
	}                                                                                                                     // 3265
                                                                                                                       // 3266
	// Put explicitly provided properties onto the event object                                                           // 3267
	if ( props ) {                                                                                                        // 3268
		jQuery.extend( this, props );                                                                                        // 3269
	}                                                                                                                     // 3270
                                                                                                                       // 3271
	// Create a timestamp if incoming event doesn't have one                                                              // 3272
	this.timeStamp = src && src.timeStamp || jQuery.now();                                                                // 3273
                                                                                                                       // 3274
	// Mark it as fixed                                                                                                   // 3275
	this[ jQuery.expando ] = true;                                                                                        // 3276
};                                                                                                                     // 3277
                                                                                                                       // 3278
function returnFalse() {                                                                                               // 3279
	return false;                                                                                                         // 3280
}                                                                                                                      // 3281
function returnTrue() {                                                                                                // 3282
	return true;                                                                                                          // 3283
}                                                                                                                      // 3284
                                                                                                                       // 3285
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding                                // 3286
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html                                   // 3287
jQuery.Event.prototype = {                                                                                             // 3288
	preventDefault: function() {                                                                                          // 3289
		this.isDefaultPrevented = returnTrue;                                                                                // 3290
                                                                                                                       // 3291
		var e = this.originalEvent;                                                                                          // 3292
		if ( !e ) {                                                                                                          // 3293
			return;                                                                                                             // 3294
		}                                                                                                                    // 3295
                                                                                                                       // 3296
		// if preventDefault exists run it on the original event                                                             // 3297
		if ( e.preventDefault ) {                                                                                            // 3298
			e.preventDefault();                                                                                                 // 3299
                                                                                                                       // 3300
		// otherwise set the returnValue property of the original event to false (IE)                                        // 3301
		} else {                                                                                                             // 3302
			e.returnValue = false;                                                                                              // 3303
		}                                                                                                                    // 3304
	},                                                                                                                    // 3305
	stopPropagation: function() {                                                                                         // 3306
		this.isPropagationStopped = returnTrue;                                                                              // 3307
                                                                                                                       // 3308
		var e = this.originalEvent;                                                                                          // 3309
		if ( !e ) {                                                                                                          // 3310
			return;                                                                                                             // 3311
		}                                                                                                                    // 3312
		// if stopPropagation exists run it on the original event                                                            // 3313
		if ( e.stopPropagation ) {                                                                                           // 3314
			e.stopPropagation();                                                                                                // 3315
		}                                                                                                                    // 3316
		// otherwise set the cancelBubble property of the original event to true (IE)                                        // 3317
		e.cancelBubble = true;                                                                                               // 3318
	},                                                                                                                    // 3319
	stopImmediatePropagation: function() {                                                                                // 3320
		this.isImmediatePropagationStopped = returnTrue;                                                                     // 3321
		this.stopPropagation();                                                                                              // 3322
	},                                                                                                                    // 3323
	isDefaultPrevented: returnFalse,                                                                                      // 3324
	isPropagationStopped: returnFalse,                                                                                    // 3325
	isImmediatePropagationStopped: returnFalse                                                                            // 3326
};                                                                                                                     // 3327
                                                                                                                       // 3328
// Create mouseenter/leave events using mouseover/out and event-time checks                                            // 3329
jQuery.each({                                                                                                          // 3330
	mouseenter: "mouseover",                                                                                              // 3331
	mouseleave: "mouseout"                                                                                                // 3332
}, function( orig, fix ) {                                                                                             // 3333
	jQuery.event.special[ orig ] = {                                                                                      // 3334
		delegateType: fix,                                                                                                   // 3335
		bindType: fix,                                                                                                       // 3336
                                                                                                                       // 3337
		handle: function( event ) {                                                                                          // 3338
			var ret,                                                                                                            // 3339
				target = this,                                                                                                     // 3340
				related = event.relatedTarget,                                                                                     // 3341
				handleObj = event.handleObj,                                                                                       // 3342
				selector = handleObj.selector;                                                                                     // 3343
                                                                                                                       // 3344
			// For mousenter/leave call the handler if related is outside the target.                                           // 3345
			// NB: No relatedTarget if the mouse left/entered the browser window                                                // 3346
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {                                    // 3347
				event.type = handleObj.origType;                                                                                   // 3348
				ret = handleObj.handler.apply( this, arguments );                                                                  // 3349
				event.type = fix;                                                                                                  // 3350
			}                                                                                                                   // 3351
			return ret;                                                                                                         // 3352
		}                                                                                                                    // 3353
	};                                                                                                                    // 3354
});                                                                                                                    // 3355
                                                                                                                       // 3356
// IE submit delegation                                                                                                // 3357
if ( !jQuery.support.submitBubbles ) {                                                                                 // 3358
                                                                                                                       // 3359
	jQuery.event.special.submit = {                                                                                       // 3360
		setup: function() {                                                                                                  // 3361
			// Only need this for delegated form submit events                                                                  // 3362
			if ( jQuery.nodeName( this, "form" ) ) {                                                                            // 3363
				return false;                                                                                                      // 3364
			}                                                                                                                   // 3365
                                                                                                                       // 3366
			// Lazy-add a submit handler when a descendant form may potentially be submitted                                    // 3367
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {                                           // 3368
				// Node name check avoids a VML-related crash in IE (#9807)                                                        // 3369
				var elem = e.target,                                                                                               // 3370
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;             // 3371
				if ( form && !jQuery._data( form, "_submit_attached" ) ) {                                                         // 3372
					jQuery.event.add( form, "submit._submit", function( event ) {                                                     // 3373
						event._submit_bubble = true;                                                                                     // 3374
					});                                                                                                               // 3375
					jQuery._data( form, "_submit_attached", true );                                                                   // 3376
				}                                                                                                                  // 3377
			});                                                                                                                 // 3378
			// return undefined since we don't need an event listener                                                           // 3379
		},                                                                                                                   // 3380
                                                                                                                       // 3381
		postDispatch: function( event ) {                                                                                    // 3382
			// If form was submitted by the user, bubble the event up the tree                                                  // 3383
			if ( event._submit_bubble ) {                                                                                       // 3384
				delete event._submit_bubble;                                                                                       // 3385
				if ( this.parentNode && !event.isTrigger ) {                                                                       // 3386
					jQuery.event.simulate( "submit", this.parentNode, event, true );                                                  // 3387
				}                                                                                                                  // 3388
			}                                                                                                                   // 3389
		},                                                                                                                   // 3390
                                                                                                                       // 3391
		teardown: function() {                                                                                               // 3392
			// Only need this for delegated form submit events                                                                  // 3393
			if ( jQuery.nodeName( this, "form" ) ) {                                                                            // 3394
				return false;                                                                                                      // 3395
			}                                                                                                                   // 3396
                                                                                                                       // 3397
			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above                             // 3398
			jQuery.event.remove( this, "._submit" );                                                                            // 3399
		}                                                                                                                    // 3400
	};                                                                                                                    // 3401
}                                                                                                                      // 3402
                                                                                                                       // 3403
// IE change delegation and checkbox/radio fix                                                                         // 3404
if ( !jQuery.support.changeBubbles ) {                                                                                 // 3405
                                                                                                                       // 3406
	jQuery.event.special.change = {                                                                                       // 3407
                                                                                                                       // 3408
		setup: function() {                                                                                                  // 3409
                                                                                                                       // 3410
			if ( rformElems.test( this.nodeName ) ) {                                                                           // 3411
				// IE doesn't fire change on a check/radio until blur; trigger it on click                                         // 3412
				// after a propertychange. Eat the blur-change in special.change.handle.                                           // 3413
				// This still fires onchange a second time for check/radio after blur.                                             // 3414
				if ( this.type === "checkbox" || this.type === "radio" ) {                                                         // 3415
					jQuery.event.add( this, "propertychange._change", function( event ) {                                             // 3416
						if ( event.originalEvent.propertyName === "checked" ) {                                                          // 3417
							this._just_changed = true;                                                                                      // 3418
						}                                                                                                                // 3419
					});                                                                                                               // 3420
					jQuery.event.add( this, "click._change", function( event ) {                                                      // 3421
						if ( this._just_changed && !event.isTrigger ) {                                                                  // 3422
							this._just_changed = false;                                                                                     // 3423
						}                                                                                                                // 3424
						// Allow triggered, simulated change events (#11500)                                                             // 3425
						jQuery.event.simulate( "change", this, event, true );                                                            // 3426
					});                                                                                                               // 3427
				}                                                                                                                  // 3428
				return false;                                                                                                      // 3429
			}                                                                                                                   // 3430
			// Delegated event; lazy-add a change handler on descendant inputs                                                  // 3431
			jQuery.event.add( this, "beforeactivate._change", function( e ) {                                                   // 3432
				var elem = e.target;                                                                                               // 3433
                                                                                                                       // 3434
				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "_change_attached" ) ) {                             // 3435
					jQuery.event.add( elem, "change._change", function( event ) {                                                     // 3436
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {                                               // 3437
							jQuery.event.simulate( "change", this.parentNode, event, true );                                                // 3438
						}                                                                                                                // 3439
					});                                                                                                               // 3440
					jQuery._data( elem, "_change_attached", true );                                                                   // 3441
				}                                                                                                                  // 3442
			});                                                                                                                 // 3443
		},                                                                                                                   // 3444
                                                                                                                       // 3445
		handle: function( event ) {                                                                                          // 3446
			var elem = event.target;                                                                                            // 3447
                                                                                                                       // 3448
			// Swallow native change events from checkbox/radio, we already triggered them above                                // 3449
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );                                                           // 3451
			}                                                                                                                   // 3452
		},                                                                                                                   // 3453
                                                                                                                       // 3454
		teardown: function() {                                                                                               // 3455
			jQuery.event.remove( this, "._change" );                                                                            // 3456
                                                                                                                       // 3457
			return !rformElems.test( this.nodeName );                                                                           // 3458
		}                                                                                                                    // 3459
	};                                                                                                                    // 3460
}                                                                                                                      // 3461
                                                                                                                       // 3462
// Create "bubbling" focus and blur events                                                                             // 3463
if ( !jQuery.support.focusinBubbles ) {                                                                                // 3464
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {                                           // 3465
                                                                                                                       // 3466
		// Attach a single capturing handler while someone wants focusin/focusout                                            // 3467
		var attaches = 0,                                                                                                    // 3468
			handler = function( event ) {                                                                                       // 3469
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );                                       // 3470
			};                                                                                                                  // 3471
                                                                                                                       // 3472
		jQuery.event.special[ fix ] = {                                                                                      // 3473
			setup: function() {                                                                                                 // 3474
				if ( attaches++ === 0 ) {                                                                                          // 3475
					document.addEventListener( orig, handler, true );                                                                 // 3476
				}                                                                                                                  // 3477
			},                                                                                                                  // 3478
			teardown: function() {                                                                                              // 3479
				if ( --attaches === 0 ) {                                                                                          // 3480
					document.removeEventListener( orig, handler, true );                                                              // 3481
				}                                                                                                                  // 3482
			}                                                                                                                   // 3483
		};                                                                                                                   // 3484
	});                                                                                                                   // 3485
}                                                                                                                      // 3486
                                                                                                                       // 3487
jQuery.fn.extend({                                                                                                     // 3488
                                                                                                                       // 3489
	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {                                                         // 3490
		var origFn, type;                                                                                                    // 3491
                                                                                                                       // 3492
		// Types can be a map of types/handlers                                                                              // 3493
		if ( typeof types === "object" ) {                                                                                   // 3494
			// ( types-Object, selector, data )                                                                                 // 3495
			if ( typeof selector !== "string" ) { // && selector != null                                                        // 3496
				// ( types-Object, data )                                                                                          // 3497
				data = data || selector;                                                                                           // 3498
				selector = undefined;                                                                                              // 3499
			}                                                                                                                   // 3500
			for ( type in types ) {                                                                                             // 3501
				this.on( type, selector, data, types[ type ], one );                                                               // 3502
			}                                                                                                                   // 3503
			return this;                                                                                                        // 3504
		}                                                                                                                    // 3505
                                                                                                                       // 3506
		if ( data == null && fn == null ) {                                                                                  // 3507
			// ( types, fn )                                                                                                    // 3508
			fn = selector;                                                                                                      // 3509
			data = selector = undefined;                                                                                        // 3510
		} else if ( fn == null ) {                                                                                           // 3511
			if ( typeof selector === "string" ) {                                                                               // 3512
				// ( types, selector, fn )                                                                                         // 3513
				fn = data;                                                                                                         // 3514
				data = undefined;                                                                                                  // 3515
			} else {                                                                                                            // 3516
				// ( types, data, fn )                                                                                             // 3517
				fn = data;                                                                                                         // 3518
				data = selector;                                                                                                   // 3519
				selector = undefined;                                                                                              // 3520
			}                                                                                                                   // 3521
		}                                                                                                                    // 3522
		if ( fn === false ) {                                                                                                // 3523
			fn = returnFalse;                                                                                                   // 3524
		} else if ( !fn ) {                                                                                                  // 3525
			return this;                                                                                                        // 3526
		}                                                                                                                    // 3527
                                                                                                                       // 3528
		if ( one === 1 ) {                                                                                                   // 3529
			origFn = fn;                                                                                                        // 3530
			fn = function( event ) {                                                                                            // 3531
				// Can use an empty set, since event contains the info                                                             // 3532
				jQuery().off( event );                                                                                             // 3533
				return origFn.apply( this, arguments );                                                                            // 3534
			};                                                                                                                  // 3535
			// Use same guid so caller can remove using origFn                                                                  // 3536
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );                                                           // 3537
		}                                                                                                                    // 3538
		return this.each( function() {                                                                                       // 3539
			jQuery.event.add( this, types, fn, data, selector );                                                                // 3540
		});                                                                                                                  // 3541
	},                                                                                                                    // 3542
	one: function( types, selector, data, fn ) {                                                                          // 3543
		return this.on( types, selector, data, fn, 1 );                                                                      // 3544
	},                                                                                                                    // 3545
	off: function( types, selector, fn ) {                                                                                // 3546
		var handleObj, type;                                                                                                 // 3547
		if ( types && types.preventDefault && types.handleObj ) {                                                            // 3548
			// ( event )  dispatched jQuery.Event                                                                               // 3549
			handleObj = types.handleObj;                                                                                        // 3550
			jQuery( types.delegateTarget ).off(                                                                                 // 3551
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,                         // 3552
				handleObj.selector,                                                                                                // 3553
				handleObj.handler                                                                                                  // 3554
			);                                                                                                                  // 3555
			return this;                                                                                                        // 3556
		}                                                                                                                    // 3557
		if ( typeof types === "object" ) {                                                                                   // 3558
			// ( types-object [, selector] )                                                                                    // 3559
			for ( type in types ) {                                                                                             // 3560
				this.off( type, selector, types[ type ] );                                                                         // 3561
			}                                                                                                                   // 3562
			return this;                                                                                                        // 3563
		}                                                                                                                    // 3564
		if ( selector === false || typeof selector === "function" ) {                                                        // 3565
			// ( types [, fn] )                                                                                                 // 3566
			fn = selector;                                                                                                      // 3567
			selector = undefined;                                                                                               // 3568
		}                                                                                                                    // 3569
		if ( fn === false ) {                                                                                                // 3570
			fn = returnFalse;                                                                                                   // 3571
		}                                                                                                                    // 3572
		return this.each(function() {                                                                                        // 3573
			jQuery.event.remove( this, types, fn, selector );                                                                   // 3574
		});                                                                                                                  // 3575
	},                                                                                                                    // 3576
                                                                                                                       // 3577
	bind: function( types, data, fn ) {                                                                                   // 3578
		return this.on( types, null, data, fn );                                                                             // 3579
	},                                                                                                                    // 3580
	unbind: function( types, fn ) {                                                                                       // 3581
		return this.off( types, null, fn );                                                                                  // 3582
	},                                                                                                                    // 3583
                                                                                                                       // 3584
	live: function( types, data, fn ) {                                                                                   // 3585
		jQuery( this.context ).on( types, this.selector, data, fn );                                                         // 3586
		return this;                                                                                                         // 3587
	},                                                                                                                    // 3588
	die: function( types, fn ) {                                                                                          // 3589
		jQuery( this.context ).off( types, this.selector || "**", fn );                                                      // 3590
		return this;                                                                                                         // 3591
	},                                                                                                                    // 3592
                                                                                                                       // 3593
	delegate: function( selector, types, data, fn ) {                                                                     // 3594
		return this.on( types, selector, data, fn );                                                                         // 3595
	},                                                                                                                    // 3596
	undelegate: function( selector, types, fn ) {                                                                         // 3597
		// ( namespace ) or ( selector, types [, fn] )                                                                       // 3598
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );                // 3599
	},                                                                                                                    // 3600
                                                                                                                       // 3601
	trigger: function( type, data ) {                                                                                     // 3602
		return this.each(function() {                                                                                        // 3603
			jQuery.event.trigger( type, data, this );                                                                           // 3604
		});                                                                                                                  // 3605
	},                                                                                                                    // 3606
	triggerHandler: function( type, data ) {                                                                              // 3607
		if ( this[0] ) {                                                                                                     // 3608
			return jQuery.event.trigger( type, data, this[0], true );                                                           // 3609
		}                                                                                                                    // 3610
	},                                                                                                                    // 3611
                                                                                                                       // 3612
	toggle: function( fn ) {                                                                                              // 3613
		// Save reference to arguments for access in closure                                                                 // 3614
		var args = arguments,                                                                                                // 3615
			guid = fn.guid || jQuery.guid++,                                                                                    // 3616
			i = 0,                                                                                                              // 3617
			toggler = function( event ) {                                                                                       // 3618
				// Figure out which function to execute                                                                            // 3619
				var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;                                        // 3620
				jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );                                                      // 3621
                                                                                                                       // 3622
				// Make sure that clicks stop                                                                                      // 3623
				event.preventDefault();                                                                                            // 3624
                                                                                                                       // 3625
				// and execute the function                                                                                        // 3626
				return args[ lastToggle ].apply( this, arguments ) || false;                                                       // 3627
			};                                                                                                                  // 3628
                                                                                                                       // 3629
		// link all the functions, so any of them can unbind this click handler                                              // 3630
		toggler.guid = guid;                                                                                                 // 3631
		while ( i < args.length ) {                                                                                          // 3632
			args[ i++ ].guid = guid;                                                                                            // 3633
		}                                                                                                                    // 3634
                                                                                                                       // 3635
		return this.click( toggler );                                                                                        // 3636
	},                                                                                                                    // 3637
                                                                                                                       // 3638
	hover: function( fnOver, fnOut ) {                                                                                    // 3639
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );                                                      // 3640
	}                                                                                                                     // 3641
});                                                                                                                    // 3642
                                                                                                                       // 3643
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +                                // 3644
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +                                             // 3645
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {                    // 3646
                                                                                                                       // 3647
	// Handle event binding                                                                                               // 3648
	jQuery.fn[ name ] = function( data, fn ) {                                                                            // 3649
		if ( fn == null ) {                                                                                                  // 3650
			fn = data;                                                                                                          // 3651
			data = null;                                                                                                        // 3652
		}                                                                                                                    // 3653
                                                                                                                       // 3654
		return arguments.length > 0 ?                                                                                        // 3655
			this.on( name, null, data, fn ) :                                                                                   // 3656
			this.trigger( name );                                                                                               // 3657
	};                                                                                                                    // 3658
                                                                                                                       // 3659
	if ( rkeyEvent.test( name ) ) {                                                                                       // 3660
		jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;                                                               // 3661
	}                                                                                                                     // 3662
                                                                                                                       // 3663
	if ( rmouseEvent.test( name ) ) {                                                                                     // 3664
		jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;                                                             // 3665
	}                                                                                                                     // 3666
});                                                                                                                    // 3667
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var cachedruns,
	assertGetIdNotName,
	Expr,
	getText,
	isXML,
	contains,
	compile,
	sortOrder,
	hasDuplicate,
	outermostContext,

	baseHasDuplicate = true,
	strundefined = "undefined",

	expando = ( "sizcache" + Math.random() ).replace( ".", "" ),

	Token = String,
	document = window.document,
	docElem = document.documentElement,
	dirruns = 0,
	done = 0,
	pop = [].pop,
	push = [].push,
	slice = [].slice,
	// Use a stripped-down indexOf if a native one is unavailable
	indexOf = [].indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	// Augment a function for special use by Sizzle
	markFunction = function( fn, value ) {
		fn[ expando ] = value == null || value;
		return fn;
	},

	createCache = function() {
		var cache = {},
			keys = [];

		return markFunction(function( key, value ) {
			// Only keep the most recent entries
			if ( keys.push( key ) > Expr.cacheLength ) {
				delete cache[ keys.shift() ];
			}

			return (cache[ key ] = value);
		}, cache );
	},

	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),

	// Regex

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier (http://www.w3.org/TR/css3-selectors/#attribute-selectors)
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	operators = "([*^$|!~]?=)",
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments not in parens/brackets,
	//   then attribute selectors and non-pseudos (denoted by :),
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + attributes + ")|[^:]|\\\\.)*|.*))\\)|)",

	// For matchExpr.POS and matchExpr.needsContext
	pos = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
		"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
	rpseudo = new RegExp( pseudos ),

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,

	rnot = /^:not/,
	rsibling = /[\x20\t\r\n\f]*[+~]/,
	rendsWithNot = /:not\($/,

	rheader = /h\d/i,
	rinputs = /input|select|textarea|button/i,

	rbackslash = /\\(?!\\)/g,

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"POS": new RegExp( pos, "i" ),
		"CHILD": new RegExp( "^:(only|nth|first|last)-child(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		// For use in libraries implementing .is()
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|" + pos, "i" )
	},

	// Support

	// Used for testing something on an element
	assert = function( fn ) {
		var div = document.createElement("div");

		try {
			return fn( div );
		} catch (e) {
			return false;
		} finally {
			// release memory in IE
			div = null;
		}
	},

	// Check if getElementsByTagName("*") returns only elements
	assertTagNameNoComments = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	}),

	// Check if getAttribute returns normalized href attributes
	assertHrefNotNormalized = assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
			div.firstChild.getAttribute("href") === "#";
	}),

	// Check if attributes should be retrieved by attribute nodes
	assertAttributes = assert(function( div ) {
		div.innerHTML = "<select></select>";
		var type = typeof div.lastChild.getAttribute("multiple");
		// IE8 returns a string for some attributes even when not present
		return type !== "boolean" && type !== "string";
	}),

	// Check if getElementsByClassName can be trusted
	assertUsableClassName = assert(function( div ) {
		// Opera can't find a second classname (in 9.6)
		div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
		if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
			return false;
		}

		// Safari 3.2 caches class attributes and doesn't catch changes
		div.lastChild.className = "e";
		return div.getElementsByClassName("e").length === 2;
	}),

	// Check if getElementById returns elements by name
	// Check if getElementsByName privileges form controls or returns elements by ID
	assertUsableName = assert(function( div ) {
		// Inject content
		div.id = expando + 0;
		div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
		docElem.insertBefore( div, docElem.firstChild );

		// Test
		var pass = document.getElementsByName &&
			// buggy browsers will return fewer than the correct 2
			document.getElementsByName( expando ).length === 2 +
			// buggy browsers will return more than the correct 0
			document.getElementsByName( expando + 0 ).length;
		assertGetIdNotName = !document.getElementById( expando );

		// Cleanup
		docElem.removeChild( div );

		return pass;
	});

// If slice is not available, provide a backup
try {
	slice.call( docElem.childNodes, 0 )[0].nodeType;
} catch ( e ) {
	slice = function( i ) {
		var elem,
			results = [];
		for ( ; (elem = this[i]); i++ ) {
			results.push( elem );
		}
		return results;
	};
}

function Sizzle( selector, context, results, seed ) {
	results = results || [];
	context = context || document;
	var match, elem, xml, m,
		nodeType = context.nodeType;

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( nodeType !== 1 && nodeType !== 9 ) {
		return [];
	}

	xml = isXML( context );

	if ( !xml && !seed ) {
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && assertUsableClassName && context.getElementsByClassName ) {
				push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
				return results;
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed, xml );
}

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	return Sizzle( expr, null, null, [ elem ] ).length > 0;
};

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( nodeType ) {
		if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (see #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	} else {

		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	}
	return ret;
};

isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Element contains another
contains = Sizzle.contains = docElem.contains ?
	function( a, b ) {
		var adown = a.nodeType === 9 ? a.documentElement : a,
			bup = b && b.parentNode;
		return a === bup || !!( bup && bup.nodeType === 1 && adown.contains && adown.contains(bup) );
	} :
	docElem.compareDocumentPosition ?
	function( a, b ) {
		return b && !!( a.compareDocumentPosition( b ) & 16 );
	} :
	function( a, b ) {
		while ( (b = b.parentNode) ) {
			if ( b === a ) {
				return true;
			}
		}
		return false;
	};

Sizzle.attr = function( elem, name ) {
	var val,
		xml = isXML( elem );

	if ( !xml ) {
		name = name.toLowerCase();
	}
	if ( (val = Expr.attrHandle[ name ]) ) {
		return val( elem );
	}
	if ( xml || assertAttributes ) {
		return elem.getAttribute( name );
	}
	val = elem.getAttributeNode( name );
	return val ?
		typeof elem[ name ] === "boolean" ?
			elem[ name ] ? name : null :
			val.specified ? val.value : null :
		null;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	// IE6/7 return a modified href
	attrHandle: assertHrefNotNormalized ?
		{} :
		{
			"href": function( elem ) {
				return elem.getAttribute( "href", 2 );
			},
			"type": function( elem ) {
				return elem.getAttribute("type");
			}
		},

	find: {
		"ID": assertGetIdNotName ?
			function( id, context, xml ) {
				if ( typeof context.getElementById !== strundefined && !xml ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [m] : [];
				}
			} :
			function( id, context, xml ) {
				if ( typeof context.getElementById !== strundefined && !xml ) {
					var m = context.getElementById( id );

					return m ?
						m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
							[m] :
							undefined :
						[];
				}
			},

		"TAG": assertTagNameNoComments ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== strundefined ) {
					return context.getElementsByTagName( tag );
				}
			} :
			function( tag, context ) {
				var results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					var elem,
						tmp = [],
						i = 0;

					for ( ; (elem = results[i]); i++ ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			},

		"NAME": assertUsableName && function( tag, context ) {
			if ( typeof context.getElementsByName !== strundefined ) {
				return context.getElementsByName( name );
			}
		},

		"CLASS": assertUsableClassName && function( className, context, xml ) {
			if ( typeof context.getElementsByClassName !== strundefined && !xml ) {
				return context.getElementsByClassName( className );
			}
		}
	},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( rbackslash, "" );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( rbackslash, "" );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				3 xn-component of xn+y argument ([+-]?\d*n|)
				4 sign of xn-component
				5 x of xn-component
				6 sign of y-component
				7 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1] === "nth" ) {
				// nth-child requires argument
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[3] = +( match[3] ? match[4] + (match[5] || 1) : 2 * ( match[2] === "even" || match[2] === "odd" ) );
				match[4] = +( ( match[6] + match[7] ) || match[2] === "odd" );

			// other types prohibit arguments
			} else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var unquoted, excess;
			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			if ( match[3] ) {
				match[2] = match[3];
			} else if ( (unquoted = match[4]) ) {
				// Only check arguments that contain a pseudo
				if ( rpseudo.test(unquoted) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					unquoted = unquoted.slice( 0, excess );
					match[0] = match[0].slice( 0, excess );
				}
				match[2] = unquoted;
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {
		"ID": assertGetIdNotName ?
			function( id ) {
				id = id.replace( rbackslash, "" );
				return function( elem ) {
					return elem.getAttribute("id") === id;
				};
			} :
			function( id ) {
				id = id.replace( rbackslash, "" );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
					return node && node.value === id;
				};
			},

		"TAG": function( nodeName ) {
			if ( nodeName === "*" ) {
				return function() { return true; };
			}
			nodeName = nodeName.replace( rbackslash, "" ).toLowerCase();

			return function( elem ) {
				return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
			};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ expando ][ className ];
			if ( !pattern ) {
				pattern = classCache( className, new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)") );
			}
			return function( elem ) {
				return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
			};
		},

		"ATTR": function( name, operator, check ) {
			return function( elem, context ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.substr( result.length - check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.substr( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, argument, first, last ) {

			if ( type === "nth" ) {
				return function( elem ) {
					var node, diff,
						parent = elem.parentNode;

					if ( first === 1 && last === 0 ) {
						return true;
					}

					if ( parent ) {
						diff = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								diff++;
								if ( elem === node ) {
									break;
								}
							}
						}
					}

					// Incorporate the offset (or cast to NaN), then check against cycle size
					diff -= last;
					return diff === first || ( diff % first === 0 && diff / first >= 0 );
				};
			}

			return function( elem ) {
				var node = elem;

				switch ( type ) {
					case "only":
					case "first":
						while ( (node = node.previousSibling) ) {
							if ( node.nodeType === 1 ) {
								return false;
							}
						}

						if ( type === "first" ) {
							return true;
						}

						node = elem;

						/* falls through */
					case "last":
						while ( (node = node.nextSibling) ) {
							if ( node.nodeType === 1 ) {
								return false;
							}
						}

						return true;
				}
			};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			var nodeType;
			elem = elem.firstChild;
			while ( elem ) {
				if ( elem.nodeName > "@" || (nodeType = elem.nodeType) === 3 || nodeType === 4 ) {
					return false;
				}
				elem = elem.nextSibling;
			}
			return true;
		},

		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"text": function( elem ) {
			var type, attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				(type = elem.type) === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === type );
		},

		// Input types
		"radio": createInputPseudo("radio"),
		"checkbox": createInputPseudo("checkbox"),
		"file": createInputPseudo("file"),
		"password": createInputPseudo("password"),
		"image": createInputPseudo("image"),

		"submit": createButtonPseudo("submit"),
		"reset": createButtonPseudo("reset"),

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"focus": function( elem ) {
			var doc = elem.ownerDocument;
			return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href);
		},

		"active": function( elem ) {
			return elem === elem.ownerDocument.activeElement;
		},

		// Positional types
		"first": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length, argument ) {
			for ( var i = 0; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length, argument ) {
			for ( var i = 1; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			for ( var i = argument < 0 ? argument + length : argument; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			for ( var i = argument < 0 ? argument + length : argument; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

function siblingCheck( a, b, ret ) {
	if ( a === b ) {
		return ret;
	}

	var cur = a.nextSibling;

	while ( cur ) {
		if ( cur === b ) {
			return -1;
		}

		cur = cur.nextSibling;
	}

	return 1;
}

sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		return ( !a.compareDocumentPosition || !b.compareDocumentPosition ?
			a.compareDocumentPosition :
			a.compareDocumentPosition(b) & 4
		) ? -1 : 1;
	} :
	function( a, b ) {
		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Fallback to using sourceIndex (in IE) if it's available on both nodes
		} else if ( a.sourceIndex && b.sourceIndex ) {
			return a.sourceIndex - b.sourceIndex;
		}

		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// If the nodes are siblings (or identical) we can do a quick check
		if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

// Always assume the presence of duplicates if sort doesn't
// pass them to our comparison function (as in Google Chrome).
[0, 0].sort( sortOrder );
baseHasDuplicate = !hasDuplicate;

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
	var elem,
		i = 1;

	hasDuplicate = baseHasDuplicate;
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		for ( ; (elem = results[i]); i++ ) {
			if ( elem === results[ i - 1 ] ) {
				results.splice( i--, 1 );
			}
		}
	}

	return results;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type, soFar, groups, preFilters,
		cached = tokenCache[ expando ][ selector ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				soFar = soFar.slice( match[0].length );
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			tokens.push( matched = new Token( match.shift() ) );
			soFar = soFar.slice( matched.length );

			// Cast descendant combinators to space
			matched.type = match[0].replace( rtrim, " " );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				// The last two arguments here are (context, xml) for backCompat
				(match = preFilters[ type ]( match, document, true ))) ) {

				tokens.push( matched = new Token( match.shift() ) );
				soFar = soFar.slice( matched.length );
				matched.type = type;
				matched.matches = match;
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && combinator.dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( checkNonElements || elem.nodeType === 1  ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( !xml ) {
				var cache,
					dirkey = dirruns + " " + doneName + " ",
					cachedkey = dirkey + cachedruns;
				while ( (elem = elem[ dir ]) ) {
					if ( checkNonElements || elem.nodeType === 1 ) {
						if ( (cache = elem[ expando ]) === cachedkey ) {
							return elem.sizset;
						} else if ( typeof cache === "string" && cache.indexOf(dirkey) === 0 ) {
							if ( elem.sizset ) {
								return elem;
							}
						} else {
							elem[ expando ] = cachedkey;
							if ( matcher( elem, context, xml ) ) {
								elem.sizset = true;
								return elem;
							}
							elem.sizset = false;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( checkNonElements || elem.nodeType === 1 ) {
						if ( matcher( elem, context, xml ) ) {
							return elem;
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		// Positional selectors apply to seed elements, so it is invalid to follow them with relative ones
		if ( seed && postFinder ) {
			return;
		}

		var i, elem, postFilterIn,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [], seed ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			postFilterIn = condense( matcherOut, postMap );
			postFilter( postFilterIn, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = postFilterIn.length;
			while ( i-- ) {
				if ( (elem = postFilterIn[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		// Keep seed and results synchronized
		if ( seed ) {
			// Ignore postFinder because it can't coexist with seed
			i = preFilter && matcherOut.length;
			while ( i-- ) {
				if ( (elem = matcherOut[i]) ) {
					seed[ preMap[i] ] = !(results[ preMap[i] ] = elem);
				}
			}
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			// The concatenated values are (context, xml) for backCompat
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && tokens.slice( 0, i - 1 ).join("").replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && tokens.join("")
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Nested matchers should use non-integer dirruns
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.E);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = superMatcher.el;
			}

			// Add elements passing elementMatchers directly to results
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					for ( j = 0; (matcher = elementMatchers[j]); j++ ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++superMatcher.el;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				for ( j = 0; (matcher = setMatchers[j]); j++ ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	superMatcher.el = 0;
	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ expando ][ selector ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results, seed ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results, seed );
	}
	return results;
}

function select( selector, context, results, seed, xml ) {
	var i, tokens, token, type, find,
		match = tokenize( selector ),
		j = match.length;

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && !xml &&
					Expr.relative[ tokens[1].type ] ) {

				context = Expr.find["ID"]( token.matches[0].replace( rbackslash, "" ), context, xml )[0];
				if ( !context ) {
					return results;
				}

				selector = selector.slice( tokens.shift().length );
			}

			// Fetch a seed set for right-to-left matching
			for ( i = matchExpr["POS"].test( selector ) ? -1 : tokens.length - 1; i >= 0; i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( rbackslash, "" ),
						rsibling.test( tokens[0].type ) && context.parentNode || context,
						xml
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && tokens.join("");
						if ( !selector ) {
							push.apply( results, slice.call( seed, 0 ) );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		xml,
		results,
		rsibling.test( selector )
	);
	return results;
}

if ( document.querySelectorAll ) {
	(function() {
		var disconnectedMatch,
			oldSelect = select,
			rescape = /'|\\/g,
			rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

			// qSa(:focus) reports false when true (Chrome 21),
			// A support test would require too much code (would include document ready)
			rbuggyQSA = [":focus"],

			// matchesSelector(:focus) reports false when true (Chrome 21),
			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			// A support test would require too much code (would include document ready)
			// just skip matchesSelector for :active
			rbuggyMatches = [ ":active", ":focus" ],
			matches = docElem.matchesSelector ||
				docElem.mozMatchesSelector ||
				docElem.webkitMatchesSelector ||
				docElem.oMatchesSelector ||
				docElem.msMatchesSelector;

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explictly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// IE8 - Some boolean attributes are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here (do not put tests after this one)
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Opera 10-12/IE9 - ^= $= *= and empty values
			// Should not select anything
			div.innerHTML = "<p test=''></p>";
			if ( div.querySelectorAll("[test^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here (do not put tests after this one)
			div.innerHTML = "<input type='hidden'/>";
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push(":enabled", ":disabled");
			}
		});

		// rbuggyQSA always contains :focus, so no need for a length check
		rbuggyQSA = /* rbuggyQSA.length && */ new RegExp( rbuggyQSA.join("|") );

		select = function( selector, context, results, seed, xml ) {
			// Only use querySelectorAll when not filtering,
			// when this is not xml,
			// and when no QSA bugs apply
			if ( !seed && !xml && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				var groups, i,
					old = true,
					nid = expando,
					newContext = context,
					newSelector = context.nodeType === 9 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + groups[i].join("");
					}
					newContext = rsibling.test( selector ) && context.parentNode || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results, slice.call( newContext.querySelectorAll(
							newSelector
						), 0 ) );
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}

			return oldSelect( selector, context, results, seed, xml );
		};

		if ( matches ) {
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				try {
					matches.call( div, "[test!='']:sizzle" );
					rbuggyMatches.push( "!=", pseudos );
				} catch ( e ) {}
			});

			// rbuggyMatches always contains :active and :focus, so no need for a length check
			rbuggyMatches = /* rbuggyMatches.length && */ new RegExp( rbuggyMatches.join("|") );

			Sizzle.matchesSelector = function( elem, expr ) {
				// Make sure that attribute selectors are quoted
				expr = expr.replace( rattributeQuotes, "='$1']" );

				// rbuggyMatches always contains :active, so no need for an existence check
				if ( !isXML( elem ) && !rbuggyMatches.test( expr ) && (!rbuggyQSA || !rbuggyQSA.test( expr )) ) {
					try {
						var ret = matches.call( elem, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9
								elem.document && elem.document.nodeType !== 11 ) {
							return ret;
						}
					} catch(e) {}
				}

				return Sizzle( expr, null, null, [ elem ] ).length > 0;
			};
		}
	})();
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Back-compat
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Override sizzle attribute retrieval                                                                                 // 5329
Sizzle.attr = jQuery.attr;                                                                                             // 5330
jQuery.find = Sizzle;                                                                                                  // 5331
jQuery.expr = Sizzle.selectors;                                                                                        // 5332
jQuery.expr[":"] = jQuery.expr.pseudos;                                                                                // 5333
jQuery.unique = Sizzle.uniqueSort;                                                                                     // 5334
jQuery.text = Sizzle.getText;                                                                                          // 5335
jQuery.isXMLDoc = Sizzle.isXML;                                                                                        // 5336
jQuery.contains = Sizzle.contains;                                                                                     // 5337


})( window );
var runtil = /Until$/,                                                                                                 // 5341
	rparentsprev = /^(?:parents|prev(?:Until|All))/,                                                                      // 5342
	isSimple = /^.[^:#\[\.,]*$/,                                                                                          // 5343
	rneedsContext = jQuery.expr.match.needsContext,                                                                       // 5344
	// methods guaranteed to produce a unique set when starting from a unique set                                         // 5345
	guaranteedUnique = {                                                                                                  // 5346
		children: true,                                                                                                      // 5347
		contents: true,                                                                                                      // 5348
		next: true,                                                                                                          // 5349
		prev: true                                                                                                           // 5350
	};                                                                                                                    // 5351
                                                                                                                       // 5352
jQuery.fn.extend({                                                                                                     // 5353
	find: function( selector ) {                                                                                          // 5354
		var i, l, length, n, r, ret,                                                                                         // 5355
			self = this;                                                                                                        // 5356
                                                                                                                       // 5357
		if ( typeof selector !== "string" ) {                                                                                // 5358
			return jQuery( selector ).filter(function() {                                                                       // 5359
				for ( i = 0, l = self.length; i < l; i++ ) {                                                                       // 5360
					if ( jQuery.contains( self[ i ], this ) ) {                                                                       // 5361
						return true;                                                                                                     // 5362
					}                                                                                                                 // 5363
				}                                                                                                                  // 5364
			});                                                                                                                 // 5365
		}                                                                                                                    // 5366
                                                                                                                       // 5367
		ret = this.pushStack( "", "find", selector );                                                                        // 5368
                                                                                                                       // 5369
		for ( i = 0, l = this.length; i < l; i++ ) {                                                                         // 5370
			length = ret.length;                                                                                                // 5371
			jQuery.find( selector, this[i], ret );                                                                              // 5372
                                                                                                                       // 5373
			if ( i > 0 ) {                                                                                                      // 5374
				// Make sure that the results are unique                                                                           // 5375
				for ( n = length; n < ret.length; n++ ) {                                                                          // 5376
					for ( r = 0; r < length; r++ ) {                                                                                  // 5377
						if ( ret[r] === ret[n] ) {                                                                                       // 5378
							ret.splice(n--, 1);                                                                                             // 5379
							break;                                                                                                          // 5380
						}                                                                                                                // 5381
					}                                                                                                                 // 5382
				}                                                                                                                  // 5383
			}                                                                                                                   // 5384
		}                                                                                                                    // 5385
                                                                                                                       // 5386
		return ret;                                                                                                          // 5387
	},                                                                                                                    // 5388
                                                                                                                       // 5389
	has: function( target ) {                                                                                             // 5390
		var i,                                                                                                               // 5391
			targets = jQuery( target, this ),                                                                                   // 5392
			len = targets.length;                                                                                               // 5393
                                                                                                                       // 5394
		return this.filter(function() {                                                                                      // 5395
			for ( i = 0; i < len; i++ ) {                                                                                       // 5396
				if ( jQuery.contains( this, targets[i] ) ) {                                                                       // 5397
					return true;                                                                                                      // 5398
				}                                                                                                                  // 5399
			}                                                                                                                   // 5400
		});                                                                                                                  // 5401
	},                                                                                                                    // 5402
                                                                                                                       // 5403
	not: function( selector ) {                                                                                           // 5404
		return this.pushStack( winnow(this, selector, false), "not", selector);                                              // 5405
	},                                                                                                                    // 5406
                                                                                                                       // 5407
	filter: function( selector ) {                                                                                        // 5408
		return this.pushStack( winnow(this, selector, true), "filter", selector );                                           // 5409
	},                                                                                                                    // 5410
                                                                                                                       // 5411
	is: function( selector ) {                                                                                            // 5412
		return !!selector && (                                                                                               // 5413
			typeof selector === "string" ?                                                                                      // 5414
				// If this is a positional/relative selector, check membership in the returned set                                 // 5415
				// so $("p:first").is("p:last") won't return true for a doc with two "p".                                          // 5416
				rneedsContext.test( selector ) ?                                                                                   // 5417
					jQuery( selector, this.context ).index( this[0] ) >= 0 :                                                          // 5418
					jQuery.filter( selector, this ).length > 0 :                                                                      // 5419
				this.filter( selector ).length > 0 );                                                                              // 5420
	},                                                                                                                    // 5421
                                                                                                                       // 5422
	closest: function( selectors, context ) {                                                                             // 5423
		var cur,                                                                                                             // 5424
			i = 0,                                                                                                              // 5425
			l = this.length,                                                                                                    // 5426
			ret = [],                                                                                                           // 5427
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?                                            // 5428
				jQuery( selectors, context || this.context ) :                                                                     // 5429
				0;                                                                                                                 // 5430
                                                                                                                       // 5431
		for ( ; i < l; i++ ) {                                                                                               // 5432
			cur = this[i];                                                                                                      // 5433
                                                                                                                       // 5434
			while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {                                      // 5435
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {                                   // 5436
					ret.push( cur );                                                                                                  // 5437
					break;                                                                                                            // 5438
				}                                                                                                                  // 5439
				cur = cur.parentNode;                                                                                              // 5440
			}                                                                                                                   // 5441
		}                                                                                                                    // 5442
                                                                                                                       // 5443
		ret = ret.length > 1 ? jQuery.unique( ret ) : ret;                                                                   // 5444
                                                                                                                       // 5445
		return this.pushStack( ret, "closest", selectors );                                                                  // 5446
	},                                                                                                                    // 5447
                                                                                                                       // 5448
	// Determine the position of an element within                                                                        // 5449
	// the matched set of elements                                                                                        // 5450
	index: function( elem ) {                                                                                             // 5451
                                                                                                                       // 5452
		// No argument, return index in parent                                                                               // 5453
		if ( !elem ) {                                                                                                       // 5454
			return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;                                              // 5455
		}                                                                                                                    // 5456
                                                                                                                       // 5457
		// index in selector                                                                                                 // 5458
		if ( typeof elem === "string" ) {                                                                                    // 5459
			return jQuery.inArray( this[0], jQuery( elem ) );                                                                   // 5460
		}                                                                                                                    // 5461
                                                                                                                       // 5462
		// Locate the position of the desired element                                                                        // 5463
		return jQuery.inArray(                                                                                               // 5464
			// If it receives a jQuery object, the first element is used                                                        // 5465
			elem.jquery ? elem[0] : elem, this );                                                                               // 5466
	},                                                                                                                    // 5467
                                                                                                                       // 5468
	add: function( selector, context ) {                                                                                  // 5469
		var set = typeof selector === "string" ?                                                                             // 5470
				jQuery( selector, context ) :                                                                                      // 5471
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),                                       // 5472
			all = jQuery.merge( this.get(), set );                                                                              // 5473
                                                                                                                       // 5474
		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?                                        // 5475
			all :                                                                                                               // 5476
			jQuery.unique( all ) );                                                                                             // 5477
	},                                                                                                                    // 5478
                                                                                                                       // 5479
	addBack: function( selector ) {                                                                                       // 5480
		return this.add( selector == null ?                                                                                  // 5481
			this.prevObject : this.prevObject.filter(selector)                                                                  // 5482
		);                                                                                                                   // 5483
	}                                                                                                                     // 5484
});                                                                                                                    // 5485
                                                                                                                       // 5486
jQuery.fn.andSelf = jQuery.fn.addBack;                                                                                 // 5487
                                                                                                                       // 5488
// A painfully simple check to see if an element is disconnected                                                       // 5489
// from a document (should be improved, where feasible).                                                               // 5490
function isDisconnected( node ) {                                                                                      // 5491
	return !node || !node.parentNode || node.parentNode.nodeType === 11;                                                  // 5492
}                                                                                                                      // 5493
                                                                                                                       // 5494
function sibling( cur, dir ) {                                                                                         // 5495
	do {                                                                                                                  // 5496
		cur = cur[ dir ];                                                                                                    // 5497
	} while ( cur && cur.nodeType !== 1 );                                                                                // 5498
                                                                                                                       // 5499
	return cur;                                                                                                           // 5500
}                                                                                                                      // 5501
                                                                                                                       // 5502
jQuery.each({                                                                                                          // 5503
	parent: function( elem ) {                                                                                            // 5504
		var parent = elem.parentNode;                                                                                        // 5505
		return parent && parent.nodeType !== 11 ? parent : null;                                                             // 5506
	},                                                                                                                    // 5507
	parents: function( elem ) {                                                                                           // 5508
		return jQuery.dir( elem, "parentNode" );                                                                             // 5509
	},                                                                                                                    // 5510
	parentsUntil: function( elem, i, until ) {                                                                            // 5511
		return jQuery.dir( elem, "parentNode", until );                                                                      // 5512
	},                                                                                                                    // 5513
	next: function( elem ) {                                                                                              // 5514
		return sibling( elem, "nextSibling" );                                                                               // 5515
	},                                                                                                                    // 5516
	prev: function( elem ) {                                                                                              // 5517
		return sibling( elem, "previousSibling" );                                                                           // 5518
	},                                                                                                                    // 5519
	nextAll: function( elem ) {                                                                                           // 5520
		return jQuery.dir( elem, "nextSibling" );                                                                            // 5521
	},                                                                                                                    // 5522
	prevAll: function( elem ) {                                                                                           // 5523
		return jQuery.dir( elem, "previousSibling" );                                                                        // 5524
	},                                                                                                                    // 5525
	nextUntil: function( elem, i, until ) {                                                                               // 5526
		return jQuery.dir( elem, "nextSibling", until );                                                                     // 5527
	},                                                                                                                    // 5528
	prevUntil: function( elem, i, until ) {                                                                               // 5529
		return jQuery.dir( elem, "previousSibling", until );                                                                 // 5530
	},                                                                                                                    // 5531
	siblings: function( elem ) {                                                                                          // 5532
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );                                                 // 5533
	},                                                                                                                    // 5534
	children: function( elem ) {                                                                                          // 5535
		return jQuery.sibling( elem.firstChild );                                                                            // 5536
	},                                                                                                                    // 5537
	contents: function( elem ) {                                                                                          // 5538
		return jQuery.nodeName( elem, "iframe" ) ?                                                                           // 5539
			elem.contentDocument || elem.contentWindow.document :                                                               // 5540
			jQuery.merge( [], elem.childNodes );                                                                                // 5541
	}                                                                                                                     // 5542
}, function( name, fn ) {                                                                                              // 5543
	jQuery.fn[ name ] = function( until, selector ) {                                                                     // 5544
		var ret = jQuery.map( this, fn, until );                                                                             // 5545
                                                                                                                       // 5546
		if ( !runtil.test( name ) ) {                                                                                        // 5547
			selector = until;                                                                                                   // 5548
		}                                                                                                                    // 5549
                                                                                                                       // 5550
		if ( selector && typeof selector === "string" ) {                                                                    // 5551
			ret = jQuery.filter( selector, ret );                                                                               // 5552
		}                                                                                                                    // 5553
                                                                                                                       // 5554
		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;                                     // 5555
                                                                                                                       // 5556
		if ( this.length > 1 && rparentsprev.test( name ) ) {                                                                // 5557
			ret = ret.reverse();                                                                                                // 5558
		}                                                                                                                    // 5559
                                                                                                                       // 5560
		return this.pushStack( ret, name, core_slice.call( arguments ).join(",") );                                          // 5561
	};                                                                                                                    // 5562
});                                                                                                                    // 5563
                                                                                                                       // 5564
jQuery.extend({                                                                                                        // 5565
	filter: function( expr, elems, not ) {                                                                                // 5566
		if ( not ) {                                                                                                         // 5567
			expr = ":not(" + expr + ")";                                                                                        // 5568
		}                                                                                                                    // 5569
                                                                                                                       // 5570
		return elems.length === 1 ?                                                                                          // 5571
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :                                                   // 5572
			jQuery.find.matches(expr, elems);                                                                                   // 5573
	},                                                                                                                    // 5574
                                                                                                                       // 5575
	dir: function( elem, dir, until ) {                                                                                   // 5576
		var matched = [],                                                                                                    // 5577
			cur = elem[ dir ];                                                                                                  // 5578
                                                                                                                       // 5579
		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {   // 5580
			if ( cur.nodeType === 1 ) {                                                                                         // 5581
				matched.push( cur );                                                                                               // 5582
			}                                                                                                                   // 5583
			cur = cur[dir];                                                                                                     // 5584
		}                                                                                                                    // 5585
		return matched;                                                                                                      // 5586
	},                                                                                                                    // 5587
                                                                                                                       // 5588
	sibling: function( n, elem ) {                                                                                        // 5589
		var r = [];                                                                                                          // 5590
                                                                                                                       // 5591
		for ( ; n; n = n.nextSibling ) {                                                                                     // 5592
			if ( n.nodeType === 1 && n !== elem ) {                                                                             // 5593
				r.push( n );                                                                                                       // 5594
			}                                                                                                                   // 5595
		}                                                                                                                    // 5596
                                                                                                                       // 5597
		return r;                                                                                                            // 5598
	}                                                                                                                     // 5599
});                                                                                                                    // 5600
                                                                                                                       // 5601
// Implement the identical functionality for filter and not                                                            // 5602
function winnow( elements, qualifier, keep ) {                                                                         // 5603
                                                                                                                       // 5604
	// Can't pass null or undefined to indexOf in Firefox 4                                                               // 5605
	// Set to 0 to skip string check                                                                                      // 5606
	qualifier = qualifier || 0;                                                                                           // 5607
                                                                                                                       // 5608
	if ( jQuery.isFunction( qualifier ) ) {                                                                               // 5609
		return jQuery.grep(elements, function( elem, i ) {                                                                   // 5610
			var retVal = !!qualifier.call( elem, i, elem );                                                                     // 5611
			return retVal === keep;                                                                                             // 5612
		});                                                                                                                  // 5613
                                                                                                                       // 5614
	} else if ( qualifier.nodeType ) {                                                                                    // 5615
		return jQuery.grep(elements, function( elem, i ) {                                                                   // 5616
			return ( elem === qualifier ) === keep;                                                                             // 5617
		});                                                                                                                  // 5618
                                                                                                                       // 5619
	} else if ( typeof qualifier === "string" ) {                                                                         // 5620
		var filtered = jQuery.grep(elements, function( elem ) {                                                              // 5621
			return elem.nodeType === 1;                                                                                         // 5622
		});                                                                                                                  // 5623
                                                                                                                       // 5624
		if ( isSimple.test( qualifier ) ) {                                                                                  // 5625
			return jQuery.filter(qualifier, filtered, !keep);                                                                   // 5626
		} else {                                                                                                             // 5627
			qualifier = jQuery.filter( qualifier, filtered );                                                                   // 5628
		}                                                                                                                    // 5629
	}                                                                                                                     // 5630
                                                                                                                       // 5631
	return jQuery.grep(elements, function( elem, i ) {                                                                    // 5632
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;                                                          // 5633
	});                                                                                                                   // 5634
}                                                                                                                      // 5635
function createSafeFragment( document ) {                                                                              // 5636
	var list = nodeNames.split( "|" ),                                                                                    // 5637
	safeFrag = document.createDocumentFragment();                                                                         // 5638
                                                                                                                       // 5639
	if ( safeFrag.createElement ) {                                                                                       // 5640
		while ( list.length ) {                                                                                              // 5641
			safeFrag.createElement(                                                                                             // 5642
				list.pop()                                                                                                         // 5643
			);                                                                                                                  // 5644
		}                                                                                                                    // 5645
	}                                                                                                                     // 5646
	return safeFrag;                                                                                                      // 5647
}                                                                                                                      // 5648
                                                                                                                       // 5649
var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +                // 5650
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",                                           // 5651
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,                                                                         // 5652
	rleadingWhitespace = /^\s+/,                                                                                          // 5653
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,                                // 5654
	rtagName = /<([\w:]+)/,                                                                                               // 5655
	rtbody = /<tbody/i,                                                                                                   // 5656
	rhtml = /<|&#?\w+;/,                                                                                                  // 5657
	rnoInnerhtml = /<(?:script|style|link)/i,                                                                             // 5658
	rnocache = /<(?:script|object|embed|option|style)/i,                                                                  // 5659
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),                                                      // 5660
	rcheckableType = /^(?:checkbox|radio)$/,                                                                              // 5661
	// checked="checked" or checked                                                                                       // 5662
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,                                                                       // 5663
	rscriptType = /\/(java|ecma)script/i,                                                                                 // 5664
	rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,                                                            // 5665
	wrapMap = {                                                                                                           // 5666
		option: [ 1, "<select multiple='multiple'>", "</select>" ],                                                          // 5667
		legend: [ 1, "<fieldset>", "</fieldset>" ],                                                                          // 5668
		thead: [ 1, "<table>", "</table>" ],                                                                                 // 5669
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],                                                                     // 5670
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],                                                            // 5671
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],                                               // 5672
		area: [ 1, "<map>", "</map>" ],                                                                                      // 5673
		_default: [ 0, "", "" ]                                                                                              // 5674
	},                                                                                                                    // 5675
	safeFragment = createSafeFragment( document ),                                                                        // 5676
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );                                              // 5677
                                                                                                                       // 5678
wrapMap.optgroup = wrapMap.option;                                                                                     // 5679
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;                                    // 5680
wrapMap.th = wrapMap.td;                                                                                               // 5681
                                                                                                                       // 5682
// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,                                             // 5683
// unless wrapped in a div with non-breaking characters in front of it.                                                // 5684
if ( !jQuery.support.htmlSerialize ) {                                                                                 // 5685
	wrapMap._default = [ 1, "X<div>", "</div>" ];                                                                         // 5686
}                                                                                                                      // 5687
                                                                                                                       // 5688
jQuery.fn.extend({                                                                                                     // 5689
	text: function( value ) {                                                                                             // 5690
		return jQuery.access( this, function( value ) {                                                                      // 5691
			return value === undefined ?                                                                                        // 5692
				jQuery.text( this ) :                                                                                              // 5693
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );                   // 5694
		}, null, value, arguments.length );                                                                                  // 5695
	},                                                                                                                    // 5696
                                                                                                                       // 5697
	wrapAll: function( html ) {                                                                                           // 5698
		if ( jQuery.isFunction( html ) ) {                                                                                   // 5699
			return this.each(function(i) {                                                                                      // 5700
				jQuery(this).wrapAll( html.call(this, i) );                                                                        // 5701
			});                                                                                                                 // 5702
		}                                                                                                                    // 5703
                                                                                                                       // 5704
		if ( this[0] ) {                                                                                                     // 5705
			// The elements to wrap the target around                                                                           // 5706
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);                                                 // 5707
                                                                                                                       // 5708
			if ( this[0].parentNode ) {                                                                                         // 5709
				wrap.insertBefore( this[0] );                                                                                      // 5710
			}                                                                                                                   // 5711
                                                                                                                       // 5712
			wrap.map(function() {                                                                                               // 5713
				var elem = this;                                                                                                   // 5714
                                                                                                                       // 5715
				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {                                                      // 5716
					elem = elem.firstChild;                                                                                           // 5717
				}                                                                                                                  // 5718
                                                                                                                       // 5719
				return elem;                                                                                                       // 5720
			}).append( this );                                                                                                  // 5721
		}                                                                                                                    // 5722
                                                                                                                       // 5723
		return this;                                                                                                         // 5724
	},                                                                                                                    // 5725
                                                                                                                       // 5726
	wrapInner: function( html ) {                                                                                         // 5727
		if ( jQuery.isFunction( html ) ) {                                                                                   // 5728
			return this.each(function(i) {                                                                                      // 5729
				jQuery(this).wrapInner( html.call(this, i) );                                                                      // 5730
			});                                                                                                                 // 5731
		}                                                                                                                    // 5732
                                                                                                                       // 5733
		return this.each(function() {                                                                                        // 5734
			var self = jQuery( this ),                                                                                          // 5735
				contents = self.contents();                                                                                        // 5736
                                                                                                                       // 5737
			if ( contents.length ) {                                                                                            // 5738
				contents.wrapAll( html );                                                                                          // 5739
                                                                                                                       // 5740
			} else {                                                                                                            // 5741
				self.append( html );                                                                                               // 5742
			}                                                                                                                   // 5743
		});                                                                                                                  // 5744
	},                                                                                                                    // 5745
                                                                                                                       // 5746
	wrap: function( html ) {                                                                                              // 5747
		var isFunction = jQuery.isFunction( html );                                                                          // 5748
                                                                                                                       // 5749
		return this.each(function(i) {                                                                                       // 5750
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );                                                   // 5751
		});                                                                                                                  // 5752
	},                                                                                                                    // 5753
                                                                                                                       // 5754
	unwrap: function() {                                                                                                  // 5755
		return this.parent().each(function() {                                                                               // 5756
			if ( !jQuery.nodeName( this, "body" ) ) {                                                                           // 5757
				jQuery( this ).replaceWith( this.childNodes );                                                                     // 5758
			}                                                                                                                   // 5759
		}).end();                                                                                                            // 5760
	},                                                                                                                    // 5761
                                                                                                                       // 5762
	append: function() {                                                                                                  // 5763
		return this.domManip(arguments, true, function( elem ) {                                                             // 5764
			if ( this.nodeType === 1 || this.nodeType === 11 ) {                                                                // 5765
				this.appendChild( elem );                                                                                          // 5766
			}                                                                                                                   // 5767
		});                                                                                                                  // 5768
	},                                                                                                                    // 5769
                                                                                                                       // 5770
	prepend: function() {                                                                                                 // 5771
		return this.domManip(arguments, true, function( elem ) {                                                             // 5772
			if ( this.nodeType === 1 || this.nodeType === 11 ) {                                                                // 5773
				this.insertBefore( elem, this.firstChild );                                                                        // 5774
			}                                                                                                                   // 5775
		});                                                                                                                  // 5776
	},                                                                                                                    // 5777
                                                                                                                       // 5778
	before: function() {                                                                                                  // 5779
		if ( !isDisconnected( this[0] ) ) {                                                                                  // 5780
			return this.domManip(arguments, false, function( elem ) {                                                           // 5781
				this.parentNode.insertBefore( elem, this );                                                                        // 5782
			});                                                                                                                 // 5783
		}                                                                                                                    // 5784
                                                                                                                       // 5785
		if ( arguments.length ) {                                                                                            // 5786
			var set = jQuery.clean( arguments );                                                                                // 5787
			return this.pushStack( jQuery.merge( set, this ), "before", this.selector );                                        // 5788
		}                                                                                                                    // 5789
	},                                                                                                                    // 5790
                                                                                                                       // 5791
	after: function() {                                                                                                   // 5792
		if ( !isDisconnected( this[0] ) ) {                                                                                  // 5793
			return this.domManip(arguments, false, function( elem ) {                                                           // 5794
				this.parentNode.insertBefore( elem, this.nextSibling );                                                            // 5795
			});                                                                                                                 // 5796
		}                                                                                                                    // 5797
                                                                                                                       // 5798
		if ( arguments.length ) {                                                                                            // 5799
			var set = jQuery.clean( arguments );                                                                                // 5800
			return this.pushStack( jQuery.merge( this, set ), "after", this.selector );                                         // 5801
		}                                                                                                                    // 5802
	},                                                                                                                    // 5803
                                                                                                                       // 5804
	// keepData is for internal use only--do not document                                                                 // 5805
	remove: function( selector, keepData ) {                                                                              // 5806
		var elem,                                                                                                            // 5807
			i = 0;                                                                                                              // 5808
                                                                                                                       // 5809
		for ( ; (elem = this[i]) != null; i++ ) {                                                                            // 5810
			if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {                                                    // 5811
				if ( !keepData && elem.nodeType === 1 ) {                                                                          // 5812
					jQuery.cleanData( elem.getElementsByTagName("*") );                                                               // 5813
					jQuery.cleanData( [ elem ] );                                                                                     // 5814
				}                                                                                                                  // 5815
                                                                                                                       // 5816
				if ( elem.parentNode ) {                                                                                           // 5817
					elem.parentNode.removeChild( elem );                                                                              // 5818
				}                                                                                                                  // 5819
			}                                                                                                                   // 5820
		}                                                                                                                    // 5821
                                                                                                                       // 5822
		return this;                                                                                                         // 5823
	},                                                                                                                    // 5824
                                                                                                                       // 5825
	empty: function() {                                                                                                   // 5826
		var elem,                                                                                                            // 5827
			i = 0;                                                                                                              // 5828
                                                                                                                       // 5829
		for ( ; (elem = this[i]) != null; i++ ) {                                                                            // 5830
			// Remove element nodes and prevent memory leaks                                                                    // 5831
			if ( elem.nodeType === 1 ) {                                                                                        // 5832
				jQuery.cleanData( elem.getElementsByTagName("*") );                                                                // 5833
			}                                                                                                                   // 5834
                                                                                                                       // 5835
			// Remove any remaining nodes                                                                                       // 5836
			while ( elem.firstChild ) {                                                                                         // 5837
				elem.removeChild( elem.firstChild );                                                                               // 5838
			}                                                                                                                   // 5839
		}                                                                                                                    // 5840
                                                                                                                       // 5841
		return this;                                                                                                         // 5842
	},                                                                                                                    // 5843
                                                                                                                       // 5844
	clone: function( dataAndEvents, deepDataAndEvents ) {                                                                 // 5845
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;                                                       // 5846
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;                                   // 5847
                                                                                                                       // 5848
		return this.map( function () {                                                                                       // 5849
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );                                                      // 5850
		});                                                                                                                  // 5851
	},                                                                                                                    // 5852
                                                                                                                       // 5853
	html: function( value ) {                                                                                             // 5854
		return jQuery.access( this, function( value ) {                                                                      // 5855
			var elem = this[0] || {},                                                                                           // 5856
				i = 0,                                                                                                             // 5857
				l = this.length;                                                                                                   // 5858
                                                                                                                       // 5859
			if ( value === undefined ) {                                                                                        // 5860
				return elem.nodeType === 1 ?                                                                                       // 5861
					elem.innerHTML.replace( rinlinejQuery, "" ) :                                                                     // 5862
					undefined;                                                                                                        // 5863
			}                                                                                                                   // 5864
                                                                                                                       // 5865
			// See if we can take a shortcut and just use innerHTML                                                             // 5866
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&                                                    // 5867
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&                                                // 5868
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&                                       // 5869
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {                                            // 5870
                                                                                                                       // 5871
				value = value.replace( rxhtmlTag, "<$1></$2>" );                                                                   // 5872
                                                                                                                       // 5873
				try {                                                                                                              // 5874
					for (; i < l; i++ ) {                                                                                             // 5875
						// Remove element nodes and prevent memory leaks                                                                 // 5876
						elem = this[i] || {};                                                                                            // 5877
						if ( elem.nodeType === 1 ) {                                                                                     // 5878
							jQuery.cleanData( elem.getElementsByTagName( "*" ) );                                                           // 5879
							elem.innerHTML = value;                                                                                         // 5880
						}                                                                                                                // 5881
					}                                                                                                                 // 5882
                                                                                                                       // 5883
					elem = 0;                                                                                                         // 5884
                                                                                                                       // 5885
				// If using innerHTML throws an exception, use the fallback method                                                 // 5886
				} catch(e) {}                                                                                                      // 5887
			}                                                                                                                   // 5888
                                                                                                                       // 5889
			if ( elem ) {                                                                                                       // 5890
				this.empty().append( value );                                                                                      // 5891
			}                                                                                                                   // 5892
		}, null, value, arguments.length );                                                                                  // 5893
	},                                                                                                                    // 5894
                                                                                                                       // 5895
	replaceWith: function( value ) {                                                                                      // 5896
		if ( !isDisconnected( this[0] ) ) {                                                                                  // 5897
			// Make sure that the elements are removed from the DOM before they are inserted                                    // 5898
			// this can help fix replacing a parent with child elements                                                         // 5899
			if ( jQuery.isFunction( value ) ) {                                                                                 // 5900
				return this.each(function(i) {                                                                                     // 5901
					var self = jQuery(this), old = self.html();                                                                       // 5902
					self.replaceWith( value.call( this, i, old ) );                                                                   // 5903
				});                                                                                                                // 5904
			}                                                                                                                   // 5905
                                                                                                                       // 5906
			if ( typeof value !== "string" ) {                                                                                  // 5907
				value = jQuery( value ).detach();                                                                                  // 5908
			}                                                                                                                   // 5909
                                                                                                                       // 5910
			return this.each(function() {                                                                                       // 5911
				var next = this.nextSibling,                                                                                       // 5912
					parent = this.parentNode;                                                                                         // 5913
                                                                                                                       // 5914
				jQuery( this ).remove();                                                                                           // 5915
                                                                                                                       // 5916
				if ( next ) {                                                                                                      // 5917
					jQuery(next).before( value );                                                                                     // 5918
				} else {                                                                                                           // 5919
					jQuery(parent).append( value );                                                                                   // 5920
				}                                                                                                                  // 5921
			});                                                                                                                 // 5922
		}                                                                                                                    // 5923
                                                                                                                       // 5924
		return this.length ?                                                                                                 // 5925
			this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :                        // 5926
			this;                                                                                                               // 5927
	},                                                                                                                    // 5928
                                                                                                                       // 5929
	detach: function( selector ) {                                                                                        // 5930
		return this.remove( selector, true );                                                                                // 5931
	},                                                                                                                    // 5932
                                                                                                                       // 5933
	domManip: function( args, table, callback ) {                                                                         // 5934
                                                                                                                       // 5935
		// Flatten any nested arrays                                                                                         // 5936
		args = [].concat.apply( [], args );                                                                                  // 5937
                                                                                                                       // 5938
		var results, first, fragment, iNoClone,                                                                              // 5939
			i = 0,                                                                                                              // 5940
			value = args[0],                                                                                                    // 5941
			scripts = [],                                                                                                       // 5942
			l = this.length;                                                                                                    // 5943
                                                                                                                       // 5944
		// We can't cloneNode fragments that contain checked, in WebKit                                                      // 5945
		if ( !jQuery.support.checkClone && l > 1 && typeof value === "string" && rchecked.test( value ) ) {                  // 5946
			return this.each(function() {                                                                                       // 5947
				jQuery(this).domManip( args, table, callback );                                                                    // 5948
			});                                                                                                                 // 5949
		}                                                                                                                    // 5950
                                                                                                                       // 5951
		if ( jQuery.isFunction(value) ) {                                                                                    // 5952
			return this.each(function(i) {                                                                                      // 5953
				var self = jQuery(this);                                                                                           // 5954
				args[0] = value.call( this, i, table ? self.html() : undefined );                                                  // 5955
				self.domManip( args, table, callback );                                                                            // 5956
			});                                                                                                                 // 5957
		}                                                                                                                    // 5958
                                                                                                                       // 5959
		if ( this[0] ) {                                                                                                     // 5960
			results = jQuery.buildFragment( args, this, scripts );                                                              // 5961
			fragment = results.fragment;                                                                                        // 5962
			first = fragment.firstChild;                                                                                        // 5963
                                                                                                                       // 5964
			if ( fragment.childNodes.length === 1 ) {                                                                           // 5965
				fragment = first;                                                                                                  // 5966
			}                                                                                                                   // 5967
                                                                                                                       // 5968
			if ( first ) {                                                                                                      // 5969
				table = table && jQuery.nodeName( first, "tr" );                                                                   // 5970
                                                                                                                       // 5971
				// Use the original fragment for the last item instead of the first because it can end up                          // 5972
				// being emptied incorrectly in certain situations (#8070).                                                        // 5973
				// Fragments from the fragment cache must always be cloned and never used in place.                                // 5974
				for ( iNoClone = results.cacheable || l - 1; i < l; i++ ) {                                                        // 5975
					callback.call(                                                                                                    // 5976
						table && jQuery.nodeName( this[i], "table" ) ?                                                                   // 5977
							findOrAppend( this[i], "tbody" ) :                                                                              // 5978
							this[i],                                                                                                        // 5979
						i === iNoClone ?                                                                                                 // 5980
							fragment :                                                                                                      // 5981
							jQuery.clone( fragment, true, true )                                                                            // 5982
					);                                                                                                                // 5983
				}                                                                                                                  // 5984
			}                                                                                                                   // 5985
                                                                                                                       // 5986
			// Fix #11809: Avoid leaking memory                                                                                 // 5987
			fragment = first = null;                                                                                            // 5988
                                                                                                                       // 5989
			if ( scripts.length ) {                                                                                             // 5990
				jQuery.each( scripts, function( i, elem ) {                                                                        // 5991
					if ( elem.src ) {                                                                                                 // 5992
						if ( jQuery.ajax ) {                                                                                             // 5993
							jQuery.ajax({                                                                                                   // 5994
								url: elem.src,                                                                                                 // 5995
								type: "GET",                                                                                                   // 5996
								dataType: "script",                                                                                            // 5997
								async: false,                                                                                                  // 5998
								global: false,                                                                                                 // 5999
								"throws": true                                                                                                 // 6000
							});                                                                                                             // 6001
						} else {                                                                                                         // 6002
							jQuery.error("no ajax");                                                                                        // 6003
						}                                                                                                                // 6004
					} else {                                                                                                          // 6005
						jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "" ) );      // 6006
					}                                                                                                                 // 6007
                                                                                                                       // 6008
					if ( elem.parentNode ) {                                                                                          // 6009
						elem.parentNode.removeChild( elem );                                                                             // 6010
					}                                                                                                                 // 6011
				});                                                                                                                // 6012
			}                                                                                                                   // 6013
		}                                                                                                                    // 6014
                                                                                                                       // 6015
		return this;                                                                                                         // 6016
	}                                                                                                                     // 6017
});                                                                                                                    // 6018
                                                                                                                       // 6019
function findOrAppend( elem, tag ) {                                                                                   // 6020
	return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );            // 6021
}                                                                                                                      // 6022
                                                                                                                       // 6023
function cloneCopyEvent( src, dest ) {                                                                                 // 6024
                                                                                                                       // 6025
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {                                                                // 6026
		return;                                                                                                              // 6027
	}                                                                                                                     // 6028
                                                                                                                       // 6029
	var type, i, l,                                                                                                       // 6030
		oldData = jQuery._data( src ),                                                                                       // 6031
		curData = jQuery._data( dest, oldData ),                                                                             // 6032
		events = oldData.events;                                                                                             // 6033
                                                                                                                       // 6034
	if ( events ) {                                                                                                       // 6035
		delete curData.handle;                                                                                               // 6036
		curData.events = {};                                                                                                 // 6037
                                                                                                                       // 6038
		for ( type in events ) {                                                                                             // 6039
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {                                                              // 6040
				jQuery.event.add( dest, type, events[ type ][ i ] );                                                               // 6041
			}                                                                                                                   // 6042
		}                                                                                                                    // 6043
	}                                                                                                                     // 6044
                                                                                                                       // 6045
	// make the cloned public data object a copy from the original                                                        // 6046
	if ( curData.data ) {                                                                                                 // 6047
		curData.data = jQuery.extend( {}, curData.data );                                                                    // 6048
	}                                                                                                                     // 6049
}                                                                                                                      // 6050
                                                                                                                       // 6051
function cloneFixAttributes( src, dest ) {                                                                             // 6052
	var nodeName;                                                                                                         // 6053
                                                                                                                       // 6054
	// We do not need to do anything for non-Elements                                                                     // 6055
	if ( dest.nodeType !== 1 ) {                                                                                          // 6056
		return;                                                                                                              // 6057
	}                                                                                                                     // 6058
                                                                                                                       // 6059
	// clearAttributes removes the attributes, which we don't want,                                                       // 6060
	// but also removes the attachEvent events, which we *do* want                                                        // 6061
	if ( dest.clearAttributes ) {                                                                                         // 6062
		dest.clearAttributes();                                                                                              // 6063
	}                                                                                                                     // 6064
                                                                                                                       // 6065
	// mergeAttributes, in contrast, only merges back on the                                                              // 6066
	// original attributes, not the events                                                                                // 6067
	if ( dest.mergeAttributes ) {                                                                                         // 6068
		dest.mergeAttributes( src );                                                                                         // 6069
	}                                                                                                                     // 6070
                                                                                                                       // 6071
	nodeName = dest.nodeName.toLowerCase();                                                                               // 6072
                                                                                                                       // 6073
	if ( nodeName === "object" ) {                                                                                        // 6074
		// IE6-10 improperly clones children of object elements using classid.                                               // 6075
		// IE10 throws NoModificationAllowedError if parent is null, #12132.                                                 // 6076
		if ( dest.parentNode ) {                                                                                             // 6077
			dest.outerHTML = src.outerHTML;                                                                                     // 6078
		}                                                                                                                    // 6079
                                                                                                                       // 6080
		// This path appears unavoidable for IE9. When cloning an object                                                     // 6081
		// element in IE9, the outerHTML strategy above is not sufficient.                                                   // 6082
		// If the src has innerHTML and the destination does not,                                                            // 6083
		// copy the src.innerHTML into the dest.innerHTML. #10324                                                            // 6084
		if ( jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML)) ) {                                // 6085
			dest.innerHTML = src.innerHTML;                                                                                     // 6086
		}                                                                                                                    // 6087
                                                                                                                       // 6088
	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {                                               // 6089
		// IE6-8 fails to persist the checked state of a cloned checkbox                                                     // 6090
		// or radio button. Worse, IE6-7 fail to give the cloned element                                                     // 6091
		// a checked appearance if the defaultChecked value isn't also set                                                   // 6092
                                                                                                                       // 6093
		dest.defaultChecked = dest.checked = src.checked;                                                                    // 6094
                                                                                                                       // 6095
		// IE6-7 get confused and end up setting the value of a cloned                                                       // 6096
		// checkbox/radio button to an empty string instead of "on"                                                          // 6097
		if ( dest.value !== src.value ) {                                                                                    // 6098
			dest.value = src.value;                                                                                             // 6099
		}                                                                                                                    // 6100
                                                                                                                       // 6101
	// IE6-8 fails to return the selected option to the default selected                                                  // 6102
	// state when cloning options                                                                                         // 6103
	} else if ( nodeName === "option" ) {                                                                                 // 6104
		dest.selected = src.defaultSelected;                                                                                 // 6105
                                                                                                                       // 6106
	// IE6-8 fails to set the defaultValue to the correct value when                                                      // 6107
	// cloning other types of input fields                                                                                // 6108
	} else if ( nodeName === "input" || nodeName === "textarea" ) {                                                       // 6109
		dest.defaultValue = src.defaultValue;                                                                                // 6110
                                                                                                                       // 6111
	// IE blanks contents when cloning scripts                                                                            // 6112
	} else if ( nodeName === "script" && dest.text !== src.text ) {                                                       // 6113
		dest.text = src.text;                                                                                                // 6114
	}                                                                                                                     // 6115
                                                                                                                       // 6116
	// Event data gets referenced instead of copied if the expando                                                        // 6117
	// gets copied too                                                                                                    // 6118
	dest.removeAttribute( jQuery.expando );                                                                               // 6119
}                                                                                                                      // 6120
                                                                                                                       // 6121
jQuery.buildFragment = function( args, context, scripts ) {                                                            // 6122
	var fragment, cacheable, cachehit,                                                                                    // 6123
		first = args[ 0 ];                                                                                                   // 6124
                                                                                                                       // 6125
	// Set context from what may come in as undefined or a jQuery collection or a node                                    // 6126
	// Updated to fix #12266 where accessing context[0] could throw an exception in IE9/10 &                              // 6127
	// also doubles as fix for #8950 where plain objects caused createDocumentFragment exception                          // 6128
	context = context || document;                                                                                        // 6129
	context = !context.nodeType && context[0] || context;                                                                 // 6130
	context = context.ownerDocument || context;                                                                           // 6131
                                                                                                                       // 6132
	// Only cache "small" (1/2 KB) HTML strings that are associated with the main document                                // 6133
	// Cloning options loses the selected state, so don't cache them                                                      // 6134
	// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment                                       // 6135
	// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache                                      // 6136
	// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501              // 6137
	if ( args.length === 1 && typeof first === "string" && first.length < 512 && context === document &&                  // 6138
		first.charAt(0) === "<" && !rnocache.test( first ) &&                                                                // 6139
		(jQuery.support.checkClone || !rchecked.test( first )) &&                                                            // 6140
		(jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {                                                       // 6141
                                                                                                                       // 6142
		// Mark cacheable and look for a hit                                                                                 // 6143
		cacheable = true;                                                                                                    // 6144
		fragment = jQuery.fragments[ first ];                                                                                // 6145
		cachehit = fragment !== undefined;                                                                                   // 6146
	}                                                                                                                     // 6147
                                                                                                                       // 6148
	if ( !fragment ) {                                                                                                    // 6149
		fragment = context.createDocumentFragment();                                                                         // 6150
		jQuery.clean( args, context, fragment, scripts );                                                                    // 6151
                                                                                                                       // 6152
		// Update the cache, but only store false                                                                            // 6153
		// unless this is a second parsing of the same content                                                               // 6154
		if ( cacheable ) {                                                                                                   // 6155
			jQuery.fragments[ first ] = cachehit && fragment;                                                                   // 6156
		}                                                                                                                    // 6157
	}                                                                                                                     // 6158
                                                                                                                       // 6159
	return { fragment: fragment, cacheable: cacheable };                                                                  // 6160
};                                                                                                                     // 6161
                                                                                                                       // 6162
jQuery.fragments = {};                                                                                                 // 6163
                                                                                                                       // 6164
jQuery.each({                                                                                                          // 6165
	appendTo: "append",                                                                                                   // 6166
	prependTo: "prepend",                                                                                                 // 6167
	insertBefore: "before",                                                                                               // 6168
	insertAfter: "after",                                                                                                 // 6169
	replaceAll: "replaceWith"                                                                                             // 6170
}, function( name, original ) {                                                                                        // 6171
	jQuery.fn[ name ] = function( selector ) {                                                                            // 6172
		var elems,                                                                                                           // 6173
			i = 0,                                                                                                              // 6174
			ret = [],                                                                                                           // 6175
			insert = jQuery( selector ),                                                                                        // 6176
			l = insert.length,                                                                                                  // 6177
			parent = this.length === 1 && this[0].parentNode;                                                                   // 6178
                                                                                                                       // 6179
		if ( (parent == null || parent && parent.nodeType === 11 && parent.childNodes.length === 1) && l === 1 ) {           // 6180
			insert[ original ]( this[0] );                                                                                      // 6181
			return this;                                                                                                        // 6182
		} else {                                                                                                             // 6183
			for ( ; i < l; i++ ) {                                                                                              // 6184
				elems = ( i > 0 ? this.clone(true) : this ).get();                                                                 // 6185
				jQuery( insert[i] )[ original ]( elems );                                                                          // 6186
				ret = ret.concat( elems );                                                                                         // 6187
			}                                                                                                                   // 6188
                                                                                                                       // 6189
			return this.pushStack( ret, name, insert.selector );                                                                // 6190
		}                                                                                                                    // 6191
	};                                                                                                                    // 6192
});                                                                                                                    // 6193
                                                                                                                       // 6194
function getAll( elem ) {                                                                                              // 6195
	if ( typeof elem.getElementsByTagName !== "undefined" ) {                                                             // 6196
		return elem.getElementsByTagName( "*" );                                                                             // 6197
                                                                                                                       // 6198
	} else if ( typeof elem.querySelectorAll !== "undefined" ) {                                                          // 6199
		return elem.querySelectorAll( "*" );                                                                                 // 6200
                                                                                                                       // 6201
	} else {                                                                                                              // 6202
		return [];                                                                                                           // 6203
	}                                                                                                                     // 6204
}                                                                                                                      // 6205
                                                                                                                       // 6206
// Used in clean, fixes the defaultChecked property                                                                    // 6207
function fixDefaultChecked( elem ) {                                                                                   // 6208
	if ( rcheckableType.test( elem.type ) ) {                                                                             // 6209
		elem.defaultChecked = elem.checked;                                                                                  // 6210
	}                                                                                                                     // 6211
}                                                                                                                      // 6212
                                                                                                                       // 6213
jQuery.extend({                                                                                                        // 6214
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {                                                           // 6215
		var srcElements,                                                                                                     // 6216
			destElements,                                                                                                       // 6217
			i,                                                                                                                  // 6218
			clone;                                                                                                              // 6219
                                                                                                                       // 6220
		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {       // 6221
			clone = elem.cloneNode( true );                                                                                     // 6222
                                                                                                                       // 6223
		// IE<=8 does not properly clone detached, unknown element nodes                                                     // 6224
		} else {                                                                                                             // 6225
			fragmentDiv.innerHTML = elem.outerHTML;                                                                             // 6226
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );                                                          // 6227
		}                                                                                                                    // 6228
                                                                                                                       // 6229
		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&                                             // 6230
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {                                        // 6231
			// IE copies events bound via attachEvent when using cloneNode.                                                     // 6232
			// Calling detachEvent on the clone will also remove the events                                                     // 6233
			// from the original. In order to get around this, we use some                                                      // 6234
			// proprietary methods to clear the events. Thanks to MooTools                                                      // 6235
			// guys for this hotness.                                                                                           // 6236
                                                                                                                       // 6237
			cloneFixAttributes( elem, clone );                                                                                  // 6238
                                                                                                                       // 6239
			// Using Sizzle here is crazy slow, so we use getElementsByTagName instead                                          // 6240
			srcElements = getAll( elem );                                                                                       // 6241
			destElements = getAll( clone );                                                                                     // 6242
                                                                                                                       // 6243
			// Weird iteration because IE will replace the length property                                                      // 6244
			// with an element if you are cloning the body and one of the                                                       // 6245
			// elements on the page has a name or id of "length"                                                                // 6246
			for ( i = 0; srcElements[i]; ++i ) {                                                                                // 6247
				// Ensure that the destination node is not null; Fixes #9587                                                       // 6248
				if ( destElements[i] ) {                                                                                           // 6249
					cloneFixAttributes( srcElements[i], destElements[i] );                                                            // 6250
				}                                                                                                                  // 6251
			}                                                                                                                   // 6252
		}                                                                                                                    // 6253
                                                                                                                       // 6254
		// Copy the events from the original to the clone                                                                    // 6255
		if ( dataAndEvents ) {                                                                                               // 6256
			cloneCopyEvent( elem, clone );                                                                                      // 6257
                                                                                                                       // 6258
			if ( deepDataAndEvents ) {                                                                                          // 6259
				srcElements = getAll( elem );                                                                                      // 6260
				destElements = getAll( clone );                                                                                    // 6261
                                                                                                                       // 6262
				for ( i = 0; srcElements[i]; ++i ) {                                                                               // 6263
					cloneCopyEvent( srcElements[i], destElements[i] );                                                                // 6264
				}                                                                                                                  // 6265
			}                                                                                                                   // 6266
		}                                                                                                                    // 6267
                                                                                                                       // 6268
		srcElements = destElements = null;                                                                                   // 6269
                                                                                                                       // 6270
		// Return the cloned set                                                                                             // 6271
		return clone;                                                                                                        // 6272
	},                                                                                                                    // 6273
                                                                                                                       // 6274
	clean: function( elems, context, fragment, scripts ) {                                                                // 6275
		var i, j, elem, tag, wrap, depth, div, hasBody, tbody, len, handleScript, jsTags,                                    // 6276
			safe = context === document && safeFragment,                                                                        // 6277
			ret = [];                                                                                                           // 6278
                                                                                                                       // 6279
		// Ensure that context is a document                                                                                 // 6280
		if ( !context || typeof context.createDocumentFragment === "undefined" ) {                                           // 6281
			context = document;                                                                                                 // 6282
		}                                                                                                                    // 6283
                                                                                                                       // 6284
		// Use the already-created safe fragment if context permits                                                          // 6285
		for ( i = 0; (elem = elems[i]) != null; i++ ) {                                                                      // 6286
			if ( typeof elem === "number" ) {                                                                                   // 6287
				elem += "";                                                                                                        // 6288
			}                                                                                                                   // 6289
                                                                                                                       // 6290
			if ( !elem ) {                                                                                                      // 6291
				continue;                                                                                                          // 6292
			}                                                                                                                   // 6293
                                                                                                                       // 6294
			// Convert html string into DOM nodes                                                                               // 6295
			if ( typeof elem === "string" ) {                                                                                   // 6296
				if ( !rhtml.test( elem ) ) {                                                                                       // 6297
					elem = context.createTextNode( elem );                                                                            // 6298
				} else {                                                                                                           // 6299
					// Ensure a safe container in which to render the html                                                            // 6300
					safe = safe || createSafeFragment( context );                                                                     // 6301
					div = context.createElement("div");                                                                               // 6302
					safe.appendChild( div );                                                                                          // 6303
                                                                                                                       // 6304
					// Fix "XHTML"-style tags in all browsers                                                                         // 6305
					elem = elem.replace(rxhtmlTag, "<$1></$2>");                                                                      // 6306
                                                                                                                       // 6307
					// Go to html and back, then peel off extra wrappers                                                              // 6308
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();                                                     // 6309
					wrap = wrapMap[ tag ] || wrapMap._default;                                                                        // 6310
					depth = wrap[0];                                                                                                  // 6311
					div.innerHTML = wrap[1] + elem + wrap[2];                                                                         // 6312
                                                                                                                       // 6313
					// Move to the right depth                                                                                        // 6314
					while ( depth-- ) {                                                                                               // 6315
						div = div.lastChild;                                                                                             // 6316
					}                                                                                                                 // 6317
                                                                                                                       // 6318
					// Remove IE's autoinserted <tbody> from table fragments                                                          // 6319
					if ( !jQuery.support.tbody ) {                                                                                    // 6320
                                                                                                                       // 6321
						// String was a <table>, *may* have spurious <tbody>                                                             // 6322
						hasBody = rtbody.test(elem);                                                                                     // 6323
							tbody = tag === "table" && !hasBody ?                                                                           // 6324
								div.firstChild && div.firstChild.childNodes :                                                                  // 6325
                                                                                                                       // 6326
								// String was a bare <thead> or <tfoot>                                                                        // 6327
								wrap[1] === "<table>" && !hasBody ?                                                                            // 6328
									div.childNodes :                                                                                              // 6329
									[];                                                                                                           // 6330
                                                                                                                       // 6331
						for ( j = tbody.length - 1; j >= 0 ; --j ) {                                                                     // 6332
							if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {                                // 6333
								tbody[ j ].parentNode.removeChild( tbody[ j ] );                                                               // 6334
							}                                                                                                               // 6335
						}                                                                                                                // 6336
					}                                                                                                                 // 6337
                                                                                                                       // 6338
					// IE completely kills leading whitespace when innerHTML is used                                                  // 6339
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {                                     // 6340
						div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );                  // 6341
					}                                                                                                                 // 6342
                                                                                                                       // 6343
					elem = div.childNodes;                                                                                            // 6344
                                                                                                                       // 6345
					// Take out of fragment container (we need a fresh div each time)                                                 // 6346
					div.parentNode.removeChild( div );                                                                                // 6347
				}                                                                                                                  // 6348
			}                                                                                                                   // 6349
                                                                                                                       // 6350
			if ( elem.nodeType ) {                                                                                              // 6351
				ret.push( elem );                                                                                                  // 6352
			} else {                                                                                                            // 6353
				jQuery.merge( ret, elem );                                                                                         // 6354
			}                                                                                                                   // 6355
		}                                                                                                                    // 6356
                                                                                                                       // 6357
		// Fix #11356: Clear elements from safeFragment                                                                      // 6358
		if ( div ) {                                                                                                         // 6359
			elem = div = safe = null;                                                                                           // 6360
		}                                                                                                                    // 6361
                                                                                                                       // 6362
		// Reset defaultChecked for any radios and checkboxes                                                                // 6363
		// about to be appended to the DOM in IE 6/7 (#8060)                                                                 // 6364
		if ( !jQuery.support.appendChecked ) {                                                                               // 6365
			for ( i = 0; (elem = ret[i]) != null; i++ ) {                                                                       // 6366
				if ( jQuery.nodeName( elem, "input" ) ) {                                                                          // 6367
					fixDefaultChecked( elem );                                                                                        // 6368
				} else if ( typeof elem.getElementsByTagName !== "undefined" ) {                                                   // 6369
					jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );                                             // 6370
				}                                                                                                                  // 6371
			}                                                                                                                   // 6372
		}                                                                                                                    // 6373
                                                                                                                       // 6374
		// Append elements to a provided document fragment                                                                   // 6375
		if ( fragment ) {                                                                                                    // 6376
			// Special handling of each script element                                                                          // 6377
			handleScript = function( elem ) {                                                                                   // 6378
				// Check if we consider it executable                                                                              // 6379
				if ( !elem.type || rscriptType.test( elem.type ) ) {                                                               // 6380
					// Detach the script and store it in the scripts array (if provided) or the fragment                              // 6381
					// Return truthy to indicate that it has been handled                                                             // 6382
					return scripts ?                                                                                                  // 6383
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :                                   // 6384
						fragment.appendChild( elem );                                                                                    // 6385
				}                                                                                                                  // 6386
			};                                                                                                                  // 6387
                                                                                                                       // 6388
			for ( i = 0; (elem = ret[i]) != null; i++ ) {                                                                       // 6389
				// Check if we're done after handling an executable script                                                         // 6390
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {                                            // 6391
					// Append to fragment and handle embedded scripts                                                                 // 6392
					fragment.appendChild( elem );                                                                                     // 6393
					if ( typeof elem.getElementsByTagName !== "undefined" ) {                                                         // 6394
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration                                 // 6395
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );                   // 6396
                                                                                                                       // 6397
						// Splice the scripts into ret after their former ancestor and advance our index beyond them                     // 6398
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );                                                            // 6399
						i += jsTags.length;                                                                                              // 6400
					}                                                                                                                 // 6401
				}                                                                                                                  // 6402
			}                                                                                                                   // 6403
		}                                                                                                                    // 6404
                                                                                                                       // 6405
		return ret;                                                                                                          // 6406
	},                                                                                                                    // 6407
                                                                                                                       // 6408
	cleanData: function( elems, /* internal */ acceptData ) {                                                             // 6409
		var data, id, elem, type,                                                                                            // 6410
			i = 0,                                                                                                              // 6411
			internalKey = jQuery.expando,                                                                                       // 6412
			cache = jQuery.cache,                                                                                               // 6413
			deleteExpando = jQuery.support.deleteExpando,                                                                       // 6414
			special = jQuery.event.special;                                                                                     // 6415
                                                                                                                       // 6416
		for ( ; (elem = elems[i]) != null; i++ ) {                                                                           // 6417
                                                                                                                       // 6418
			if ( acceptData || jQuery.acceptData( elem ) ) {                                                                    // 6419
                                                                                                                       // 6420
				id = elem[ internalKey ];                                                                                          // 6421
				data = id && cache[ id ];                                                                                          // 6422
                                                                                                                       // 6423
				if ( data ) {                                                                                                      // 6424
					if ( data.events ) {                                                                                              // 6425
						for ( type in data.events ) {                                                                                    // 6426
							if ( special[ type ] ) {                                                                                        // 6427
								jQuery.event.remove( elem, type );                                                                             // 6428
                                                                                                                       // 6429
							// This is a shortcut to avoid jQuery.event.remove's overhead                                                   // 6430
							} else {                                                                                                        // 6431
								jQuery.removeEvent( elem, type, data.handle );                                                                 // 6432
							}                                                                                                               // 6433
						}                                                                                                                // 6434
					}                                                                                                                 // 6435
                                                                                                                       // 6436
					// Remove cache only if it was not already removed by jQuery.event.remove                                         // 6437
					if ( cache[ id ] ) {                                                                                              // 6438
                                                                                                                       // 6439
						delete cache[ id ];                                                                                              // 6440
                                                                                                                       // 6441
						// IE does not allow us to delete expando properties from nodes,                                                 // 6442
						// nor does it have a removeAttribute function on Document nodes;                                                // 6443
						// we must handle all of these cases                                                                             // 6444
						if ( deleteExpando ) {                                                                                           // 6445
							delete elem[ internalKey ];                                                                                     // 6446
                                                                                                                       // 6447
						} else if ( elem.removeAttribute ) {                                                                             // 6448
							elem.removeAttribute( internalKey );                                                                            // 6449
                                                                                                                       // 6450
						} else {                                                                                                         // 6451
							elem[ internalKey ] = null;                                                                                     // 6452
						}                                                                                                                // 6453
                                                                                                                       // 6454
						jQuery.deletedIds.push( id );                                                                                    // 6455
					}                                                                                                                 // 6456
				}                                                                                                                  // 6457
			}                                                                                                                   // 6458
		}                                                                                                                    // 6459
	}                                                                                                                     // 6460
});                                                                                                                    // 6461
// Limit scope pollution from any deprecated API                                                                       // 6462
(function() {                                                                                                          // 6463
                                                                                                                       // 6464
var matched, browser;                                                                                                  // 6465
                                                                                                                       // 6466
// Use of jQuery.browser is frowned upon.                                                                              // 6467
// More details: http://api.jquery.com/jQuery.browser                                                                  // 6468
// jQuery.uaMatch maintained for back-compat                                                                           // 6469
jQuery.uaMatch = function( ua ) {                                                                                      // 6470
	ua = ua.toLowerCase();                                                                                                // 6471
                                                                                                                       // 6472
	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||                                                                     // 6473
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||                                                                                // 6474
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||                                                                   // 6475
		/(msie) ([\w.]+)/.exec( ua ) ||                                                                                      // 6476
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||                                        // 6477
		[];                                                                                                                  // 6478
                                                                                                                       // 6479
	return {                                                                                                              // 6480
		browser: match[ 1 ] || "",                                                                                           // 6481
		version: match[ 2 ] || "0"                                                                                           // 6482
	};                                                                                                                    // 6483
};                                                                                                                     // 6484
                                                                                                                       // 6485
matched = jQuery.uaMatch( navigator.userAgent );                                                                       // 6486
browser = {};                                                                                                          // 6487
                                                                                                                       // 6488
if ( matched.browser ) {                                                                                               // 6489
	browser[ matched.browser ] = true;                                                                                    // 6490
	browser.version = matched.version;                                                                                    // 6491
}                                                                                                                      // 6492
                                                                                                                       // 6493
// Chrome is Webkit, but Webkit is also Safari.                                                                        // 6494
if ( browser.chrome ) {                                                                                                // 6495
	browser.webkit = true;                                                                                                // 6496
} else if ( browser.webkit ) {                                                                                         // 6497
	browser.safari = true;                                                                                                // 6498
}                                                                                                                      // 6499
                                                                                                                       // 6500
jQuery.browser = browser;                                                                                              // 6501
                                                                                                                       // 6502
jQuery.sub = function() {                                                                                              // 6503
	function jQuerySub( selector, context ) {                                                                             // 6504
		return new jQuerySub.fn.init( selector, context );                                                                   // 6505
	}                                                                                                                     // 6506
	jQuery.extend( true, jQuerySub, this );                                                                               // 6507
	jQuerySub.superclass = this;                                                                                          // 6508
	jQuerySub.fn = jQuerySub.prototype = this();                                                                          // 6509
	jQuerySub.fn.constructor = jQuerySub;                                                                                 // 6510
	jQuerySub.sub = this.sub;                                                                                             // 6511
	jQuerySub.fn.init = function init( selector, context ) {                                                              // 6512
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {                                     // 6513
			context = jQuerySub( context );                                                                                     // 6514
		}                                                                                                                    // 6515
                                                                                                                       // 6516
		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );                                                // 6517
	};                                                                                                                    // 6518
	jQuerySub.fn.init.prototype = jQuerySub.fn;                                                                           // 6519
	var rootjQuerySub = jQuerySub(document);                                                                              // 6520
	return jQuerySub;                                                                                                     // 6521
};                                                                                                                     // 6522
                                                                                                                       // 6523
})();                                                                                                                  // 6524
var curCSS, iframe, iframeDoc,                                                                                         // 6525
	ralpha = /alpha\([^)]*\)/i,                                                                                           // 6526
	ropacity = /opacity=([^)]*)/,                                                                                         // 6527
	rposition = /^(top|right|bottom|left)$/,                                                                              // 6528
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"                 // 6529
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display                                  // 6530
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,                                                                           // 6531
	rmargin = /^margin/,                                                                                                  // 6532
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),                                                           // 6533
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),                                                  // 6534
	rrelNum = new RegExp( "^([-+])=(" + core_pnum + ")", "i" ),                                                           // 6535
	elemdisplay = {},                                                                                                     // 6536
                                                                                                                       // 6537
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },                                           // 6538
	cssNormalTransform = {                                                                                                // 6539
		letterSpacing: 0,                                                                                                    // 6540
		fontWeight: 400                                                                                                      // 6541
	},                                                                                                                    // 6542
                                                                                                                       // 6543
	cssExpand = [ "Top", "Right", "Bottom", "Left" ],                                                                     // 6544
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],                                                                         // 6545
                                                                                                                       // 6546
	eventsToggle = jQuery.fn.toggle;                                                                                      // 6547
                                                                                                                       // 6548
// return a css property mapped to a potentially vendor prefixed property                                              // 6549
function vendorPropName( style, name ) {                                                                               // 6550
                                                                                                                       // 6551
	// shortcut for names that are not vendor prefixed                                                                    // 6552
	if ( name in style ) {                                                                                                // 6553
		return name;                                                                                                         // 6554
	}                                                                                                                     // 6555
                                                                                                                       // 6556
	// check for vendor prefixed names                                                                                    // 6557
	var capName = name.charAt(0).toUpperCase() + name.slice(1),                                                           // 6558
		origName = name,                                                                                                     // 6559
		i = cssPrefixes.length;                                                                                              // 6560
                                                                                                                       // 6561
	while ( i-- ) {                                                                                                       // 6562
		name = cssPrefixes[ i ] + capName;                                                                                   // 6563
		if ( name in style ) {                                                                                               // 6564
			return name;                                                                                                        // 6565
		}                                                                                                                    // 6566
	}                                                                                                                     // 6567
                                                                                                                       // 6568
	return origName;                                                                                                      // 6569
}                                                                                                                      // 6570
                                                                                                                       // 6571
function isHidden( elem, el ) {                                                                                        // 6572
	elem = el || elem;                                                                                                    // 6573
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );                      // 6574
}                                                                                                                      // 6575
                                                                                                                       // 6576
function showHide( elements, show ) {                                                                                  // 6577
	var elem, display,                                                                                                    // 6578
		values = [],                                                                                                         // 6579
		index = 0,                                                                                                           // 6580
		length = elements.length;                                                                                            // 6581
                                                                                                                       // 6582
	for ( ; index < length; index++ ) {                                                                                   // 6583
		elem = elements[ index ];                                                                                            // 6584
		if ( !elem.style ) {                                                                                                 // 6585
			continue;                                                                                                           // 6586
		}                                                                                                                    // 6587
		values[ index ] = jQuery._data( elem, "olddisplay" );                                                                // 6588
		if ( show ) {                                                                                                        // 6589
			// Reset the inline display of this element to learn if it is                                                       // 6590
			// being hidden by cascaded rules or not                                                                            // 6591
			if ( !values[ index ] && elem.style.display === "none" ) {                                                          // 6592
				elem.style.display = "";                                                                                           // 6593
			}                                                                                                                   // 6594
                                                                                                                       // 6595
			// Set elements which have been overridden with display: none                                                       // 6596
			// in a stylesheet to whatever the default browser style is                                                         // 6597
			// for such an element                                                                                              // 6598
			if ( elem.style.display === "" && isHidden( elem ) ) {                                                              // 6599
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );                           // 6600
			}                                                                                                                   // 6601
		} else {                                                                                                             // 6602
			display = curCSS( elem, "display" );                                                                                // 6603
                                                                                                                       // 6604
			if ( !values[ index ] && display !== "none" ) {                                                                     // 6605
				jQuery._data( elem, "olddisplay", display );                                                                       // 6606
			}                                                                                                                   // 6607
		}                                                                                                                    // 6608
	}                                                                                                                     // 6609
                                                                                                                       // 6610
	// Set the display of most of the elements in a second loop                                                           // 6611
	// to avoid the constant reflow                                                                                       // 6612
	for ( index = 0; index < length; index++ ) {                                                                          // 6613
		elem = elements[ index ];                                                                                            // 6614
		if ( !elem.style ) {                                                                                                 // 6615
			continue;                                                                                                           // 6616
		}                                                                                                                    // 6617
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {                                         // 6618
			elem.style.display = show ? values[ index ] || "" : "none";                                                         // 6619
		}                                                                                                                    // 6620
	}                                                                                                                     // 6621
                                                                                                                       // 6622
	return elements;                                                                                                      // 6623
}                                                                                                                      // 6624
                                                                                                                       // 6625
jQuery.fn.extend({                                                                                                     // 6626
	css: function( name, value ) {                                                                                        // 6627
		return jQuery.access( this, function( elem, name, value ) {                                                          // 6628
			return value !== undefined ?                                                                                        // 6629
				jQuery.style( elem, name, value ) :                                                                                // 6630
				jQuery.css( elem, name );                                                                                          // 6631
		}, name, value, arguments.length > 1 );                                                                              // 6632
	},                                                                                                                    // 6633
	show: function() {                                                                                                    // 6634
		return showHide( this, true );                                                                                       // 6635
	},                                                                                                                    // 6636
	hide: function() {                                                                                                    // 6637
		return showHide( this );                                                                                             // 6638
	},                                                                                                                    // 6639
	toggle: function( state, fn2 ) {                                                                                      // 6640
		var bool = typeof state === "boolean";                                                                               // 6641
                                                                                                                       // 6642
		if ( jQuery.isFunction( state ) && jQuery.isFunction( fn2 ) ) {                                                      // 6643
			return eventsToggle.apply( this, arguments );                                                                       // 6644
		}                                                                                                                    // 6645
                                                                                                                       // 6646
		return this.each(function() {                                                                                        // 6647
			if ( bool ? state : isHidden( this ) ) {                                                                            // 6648
				jQuery( this ).show();                                                                                             // 6649
			} else {                                                                                                            // 6650
				jQuery( this ).hide();                                                                                             // 6651
			}                                                                                                                   // 6652
		});                                                                                                                  // 6653
	}                                                                                                                     // 6654
});                                                                                                                    // 6655
                                                                                                                       // 6656
jQuery.extend({                                                                                                        // 6657
	// Add in style property hooks for overriding the default                                                             // 6658
	// behavior of getting and setting a style property                                                                   // 6659
	cssHooks: {                                                                                                           // 6660
		opacity: {                                                                                                           // 6661
			get: function( elem, computed ) {                                                                                   // 6662
				if ( computed ) {                                                                                                  // 6663
					// We should always get a number back from opacity                                                                // 6664
					var ret = curCSS( elem, "opacity" );                                                                              // 6665
					return ret === "" ? "1" : ret;                                                                                    // 6666
                                                                                                                       // 6667
				}                                                                                                                  // 6668
			}                                                                                                                   // 6669
		}                                                                                                                    // 6670
	},                                                                                                                    // 6671
                                                                                                                       // 6672
	// Exclude the following css properties to add px                                                                     // 6673
	cssNumber: {                                                                                                          // 6674
		"fillOpacity": true,                                                                                                 // 6675
		"fontWeight": true,                                                                                                  // 6676
		"lineHeight": true,                                                                                                  // 6677
		"opacity": true,                                                                                                     // 6678
		"orphans": true,                                                                                                     // 6679
		"widows": true,                                                                                                      // 6680
		"zIndex": true,                                                                                                      // 6681
		"zoom": true                                                                                                         // 6682
	},                                                                                                                    // 6683
                                                                                                                       // 6684
	// Add in properties whose names you wish to fix before                                                               // 6685
	// setting or getting the value                                                                                       // 6686
	cssProps: {                                                                                                           // 6687
		// normalize float css property                                                                                      // 6688
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"                                                         // 6689
	},                                                                                                                    // 6690
                                                                                                                       // 6691
	// Get and set the style property on a DOM Node                                                                       // 6692
	style: function( elem, name, value, extra ) {                                                                         // 6693
		// Don't set styles on text and comment nodes                                                                        // 6694
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {                                          // 6695
			return;                                                                                                             // 6696
		}                                                                                                                    // 6697
                                                                                                                       // 6698
		// Make sure that we're working with the right name                                                                  // 6699
		var ret, type, hooks,                                                                                                // 6700
			origName = jQuery.camelCase( name ),                                                                                // 6701
			style = elem.style;                                                                                                 // 6702
                                                                                                                       // 6703
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );           // 6704
                                                                                                                       // 6705
		// gets hook for the prefixed version                                                                                // 6706
		// followed by the unprefixed version                                                                                // 6707
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];                                                      // 6708
                                                                                                                       // 6709
		// Check if we're setting a value                                                                                    // 6710
		if ( value !== undefined ) {                                                                                         // 6711
			type = typeof value;                                                                                                // 6712
                                                                                                                       // 6713
			// convert relative number strings (+= or -=) to relative numbers. #7345                                            // 6714
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {                                                         // 6715
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );                                          // 6716
				// Fixes bug #9237                                                                                                 // 6717
				type = "number";                                                                                                   // 6718
			}                                                                                                                   // 6719
                                                                                                                       // 6720
			// Make sure that NaN and null values aren't set. See: #7116                                                        // 6721
			if ( value == null || type === "number" && isNaN( value ) ) {                                                       // 6722
				return;                                                                                                            // 6723
			}                                                                                                                   // 6724
                                                                                                                       // 6725
			// If a number was passed in, add 'px' to the (except for certain CSS properties)                                   // 6726
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {                                                         // 6727
				value += "px";                                                                                                     // 6728
			}                                                                                                                   // 6729
                                                                                                                       // 6730
			// If a hook was provided, use that value, otherwise just set the specified value                                   // 6731
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {                     // 6732
				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided                                   // 6733
				// Fixes bug #5509                                                                                                 // 6734
				try {                                                                                                              // 6735
					style[ name ] = value;                                                                                            // 6736
				} catch(e) {}                                                                                                      // 6737
			}                                                                                                                   // 6738
                                                                                                                       // 6739
		} else {                                                                                                             // 6740
			// If a hook was provided get the non-computed value from there                                                     // 6741
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {                           // 6742
				return ret;                                                                                                        // 6743
			}                                                                                                                   // 6744
                                                                                                                       // 6745
			// Otherwise just get the value from the style object                                                               // 6746
			return style[ name ];                                                                                               // 6747
		}                                                                                                                    // 6748
	},                                                                                                                    // 6749
                                                                                                                       // 6750
	css: function( elem, name, numeric, extra ) {                                                                         // 6751
		var val, num, hooks,                                                                                                 // 6752
			origName = jQuery.camelCase( name );                                                                                // 6753
                                                                                                                       // 6754
		// Make sure that we're working with the right name                                                                  // 6755
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );      // 6756
                                                                                                                       // 6757
		// gets hook for the prefixed version                                                                                // 6758
		// followed by the unprefixed version                                                                                // 6759
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];                                                      // 6760
                                                                                                                       // 6761
		// If a hook was provided get the computed value from there                                                          // 6762
		if ( hooks && "get" in hooks ) {                                                                                     // 6763
			val = hooks.get( elem, true, extra );                                                                               // 6764
		}                                                                                                                    // 6765
                                                                                                                       // 6766
		// Otherwise, if a way to get the computed value exists, use that                                                    // 6767
		if ( val === undefined ) {                                                                                           // 6768
			val = curCSS( elem, name );                                                                                         // 6769
		}                                                                                                                    // 6770
                                                                                                                       // 6771
		//convert "normal" to computed value                                                                                 // 6772
		if ( val === "normal" && name in cssNormalTransform ) {                                                              // 6773
			val = cssNormalTransform[ name ];                                                                                   // 6774
		}                                                                                                                    // 6775
                                                                                                                       // 6776
		// Return, converting to number if forced or a qualifier was provided and val looks numeric                          // 6777
		if ( numeric || extra !== undefined ) {                                                                              // 6778
			num = parseFloat( val );                                                                                            // 6779
			return numeric || jQuery.isNumeric( num ) ? num || 0 : val;                                                         // 6780
		}                                                                                                                    // 6781
		return val;                                                                                                          // 6782
	},                                                                                                                    // 6783
                                                                                                                       // 6784
	// A method for quickly swapping in/out CSS properties to get correct calculations                                    // 6785
	swap: function( elem, options, callback ) {                                                                           // 6786
		var ret, name,                                                                                                       // 6787
			old = {};                                                                                                           // 6788
                                                                                                                       // 6789
		// Remember the old values, and insert the new ones                                                                  // 6790
		for ( name in options ) {                                                                                            // 6791
			old[ name ] = elem.style[ name ];                                                                                   // 6792
			elem.style[ name ] = options[ name ];                                                                               // 6793
		}                                                                                                                    // 6794
                                                                                                                       // 6795
		ret = callback.call( elem );                                                                                         // 6796
                                                                                                                       // 6797
		// Revert the old values                                                                                             // 6798
		for ( name in options ) {                                                                                            // 6799
			elem.style[ name ] = old[ name ];                                                                                   // 6800
		}                                                                                                                    // 6801
                                                                                                                       // 6802
		return ret;                                                                                                          // 6803
	}                                                                                                                     // 6804
});                                                                                                                    // 6805
                                                                                                                       // 6806
// NOTE: To any future maintainer, we've window.getComputedStyle                                                       // 6807
// because jsdom on node.js will break without it.                                                                     // 6808
if ( window.getComputedStyle ) {                                                                                       // 6809
	curCSS = function( elem, name ) {                                                                                     // 6810
		var ret, width, minWidth, maxWidth,                                                                                  // 6811
			computed = window.getComputedStyle( elem, null ),                                                                   // 6812
			style = elem.style;                                                                                                 // 6813
                                                                                                                       // 6814
		if ( computed ) {                                                                                                    // 6815
                                                                                                                       // 6816
			ret = computed[ name ];                                                                                             // 6817
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {                                                 // 6818
				ret = jQuery.style( elem, name );                                                                                  // 6819
			}                                                                                                                   // 6820
                                                                                                                       // 6821
			// A tribute to the "awesome hack by Dean Edwards"                                                                  // 6822
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right                        // 6823
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels     // 6824
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values                             // 6825
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {                                                              // 6826
				width = style.width;                                                                                               // 6827
				minWidth = style.minWidth;                                                                                         // 6828
				maxWidth = style.maxWidth;                                                                                         // 6829
                                                                                                                       // 6830
				style.minWidth = style.maxWidth = style.width = ret;                                                               // 6831
				ret = computed.width;                                                                                              // 6832
                                                                                                                       // 6833
				style.width = width;                                                                                               // 6834
				style.minWidth = minWidth;                                                                                         // 6835
				style.maxWidth = maxWidth;                                                                                         // 6836
			}                                                                                                                   // 6837
		}                                                                                                                    // 6838
                                                                                                                       // 6839
		return ret;                                                                                                          // 6840
	};                                                                                                                    // 6841
} else if ( document.documentElement.currentStyle ) {                                                                  // 6842
	curCSS = function( elem, name ) {                                                                                     // 6843
		var left, rsLeft,                                                                                                    // 6844
			ret = elem.currentStyle && elem.currentStyle[ name ],                                                               // 6845
			style = elem.style;                                                                                                 // 6846
                                                                                                                       // 6847
		// Avoid setting ret to empty string here                                                                            // 6848
		// so we don't default to auto                                                                                       // 6849
		if ( ret == null && style && style[ name ] ) {                                                                       // 6850
			ret = style[ name ];                                                                                                // 6851
		}                                                                                                                    // 6852
                                                                                                                       // 6853
		// From the awesome hack by Dean Edwards                                                                             // 6854
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291                                                  // 6855
                                                                                                                       // 6856
		// If we're not dealing with a regular pixel number                                                                  // 6857
		// but a number that has a weird ending, we need to convert it to pixels                                             // 6858
		// but not position css attributes, as those are proportional to the parent element instead                          // 6859
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem                       // 6860
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {                                                            // 6861
                                                                                                                       // 6862
			// Remember the original values                                                                                     // 6863
			left = style.left;                                                                                                  // 6864
			rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;                                                               // 6865
                                                                                                                       // 6866
			// Put in the new values to get a computed value out                                                                // 6867
			if ( rsLeft ) {                                                                                                     // 6868
				elem.runtimeStyle.left = elem.currentStyle.left;                                                                   // 6869
			}                                                                                                                   // 6870
			style.left = name === "fontSize" ? "1em" : ret;                                                                     // 6871
			ret = style.pixelLeft + "px";                                                                                       // 6872
                                                                                                                       // 6873
			// Revert the changed values                                                                                        // 6874
			style.left = left;                                                                                                  // 6875
			if ( rsLeft ) {                                                                                                     // 6876
				elem.runtimeStyle.left = rsLeft;                                                                                   // 6877
			}                                                                                                                   // 6878
		}                                                                                                                    // 6879
                                                                                                                       // 6880
		return ret === "" ? "auto" : ret;                                                                                    // 6881
	};                                                                                                                    // 6882
}                                                                                                                      // 6883
                                                                                                                       // 6884
function setPositiveNumber( elem, value, subtract ) {                                                                  // 6885
	var matches = rnumsplit.exec( value );                                                                                // 6886
	return matches ?                                                                                                      // 6887
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :                                        // 6888
			value;                                                                                                              // 6889
}                                                                                                                      // 6890
                                                                                                                       // 6891
function augmentWidthOrHeight( elem, name, extra, isBorderBox ) {                                                      // 6892
	var i = extra === ( isBorderBox ? "border" : "content" ) ?                                                            // 6893
		// If we already have the right measurement, avoid augmentation                                                      // 6894
		4 :                                                                                                                  // 6895
		// Otherwise initialize for horizontal or vertical properties                                                        // 6896
		name === "width" ? 1 : 0,                                                                                            // 6897
                                                                                                                       // 6898
		val = 0;                                                                                                             // 6899
                                                                                                                       // 6900
	for ( ; i < 4; i += 2 ) {                                                                                             // 6901
		// both box models exclude margin, so add it if we want it                                                           // 6902
		if ( extra === "margin" ) {                                                                                          // 6903
			// we use jQuery.css instead of curCSS here                                                                         // 6904
			// because of the reliableMarginRight CSS hook!                                                                     // 6905
			val += jQuery.css( elem, extra + cssExpand[ i ], true );                                                            // 6906
		}                                                                                                                    // 6907
                                                                                                                       // 6908
		// From this point on we use curCSS for maximum performance (relevant in animations)                                 // 6909
		if ( isBorderBox ) {                                                                                                 // 6910
			// border-box includes padding, so remove it if we want content                                                     // 6911
			if ( extra === "content" ) {                                                                                        // 6912
				val -= parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;                                              // 6913
			}                                                                                                                   // 6914
                                                                                                                       // 6915
			// at this point, extra isn't border nor margin, so remove border                                                   // 6916
			if ( extra !== "margin" ) {                                                                                         // 6917
				val -= parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;                                     // 6918
			}                                                                                                                   // 6919
		} else {                                                                                                             // 6920
			// at this point, extra isn't content, so add padding                                                               // 6921
			val += parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;                                               // 6922
                                                                                                                       // 6923
			// at this point, extra isn't content nor padding, so add border                                                    // 6924
			if ( extra !== "padding" ) {                                                                                        // 6925
				val += parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;                                     // 6926
			}                                                                                                                   // 6927
		}                                                                                                                    // 6928
	}                                                                                                                     // 6929
                                                                                                                       // 6930
	return val;                                                                                                           // 6931
}                                                                                                                      // 6932
                                                                                                                       // 6933
function getWidthOrHeight( elem, name, extra ) {                                                                       // 6934
                                                                                                                       // 6935
	// Start with offset property, which is equivalent to the border-box value                                            // 6936
	var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,                                                    // 6937
		valueIsBorderBox = true,                                                                                             // 6938
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box";                          // 6939
                                                                                                                       // 6940
	// some non-html elements return undefined for offsetWidth, so check for null/undefined                               // 6941
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285                                                          // 6942
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668                                                       // 6943
	if ( val <= 0 || val == null ) {                                                                                      // 6944
		// Fall back to computed then uncomputed css if necessary                                                            // 6945
		val = curCSS( elem, name );                                                                                          // 6946
		if ( val < 0 || val == null ) {                                                                                      // 6947
			val = elem.style[ name ];                                                                                           // 6948
		}                                                                                                                    // 6949
                                                                                                                       // 6950
		// Computed unit is not pixels. Stop here and return.                                                                // 6951
		if ( rnumnonpx.test(val) ) {                                                                                         // 6952
			return val;                                                                                                         // 6953
		}                                                                                                                    // 6954
                                                                                                                       // 6955
		// we need the check for style in case a browser which returns unreliable values                                     // 6956
		// for getComputedStyle silently falls back to the reliable elem.style                                               // 6957
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );                // 6958
                                                                                                                       // 6959
		// Normalize "", auto, and prepare for extra                                                                         // 6960
		val = parseFloat( val ) || 0;                                                                                        // 6961
	}                                                                                                                     // 6962
                                                                                                                       // 6963
	// use the active box-sizing model to add/subtract irrelevant styles                                                  // 6964
	return ( val +                                                                                                        // 6965
		augmentWidthOrHeight(                                                                                                // 6966
			elem,                                                                                                               // 6967
			name,                                                                                                               // 6968
			extra || ( isBorderBox ? "border" : "content" ),                                                                    // 6969
			valueIsBorderBox                                                                                                    // 6970
		)                                                                                                                    // 6971
	) + "px";                                                                                                             // 6972
}                                                                                                                      // 6973
                                                                                                                       // 6974
                                                                                                                       // 6975
// Try to determine the default display value of an element                                                            // 6976
function css_defaultDisplay( nodeName ) {                                                                              // 6977
	if ( elemdisplay[ nodeName ] ) {                                                                                      // 6978
		return elemdisplay[ nodeName ];                                                                                      // 6979
	}                                                                                                                     // 6980
                                                                                                                       // 6981
	var elem = jQuery( "<" + nodeName + ">" ).appendTo( document.body ),                                                  // 6982
		display = elem.css("display");                                                                                       // 6983
	elem.remove();                                                                                                        // 6984
                                                                                                                       // 6985
	// If the simple way fails,                                                                                           // 6986
	// get element's real default display by attaching it to a temp iframe                                                // 6987
	if ( display === "none" || display === "" ) {                                                                         // 6988
		// Use the already-created iframe if possible                                                                        // 6989
		iframe = document.body.appendChild(                                                                                  // 6990
			iframe || jQuery.extend( document.createElement("iframe"), {                                                        // 6991
				frameBorder: 0,                                                                                                    // 6992
				width: 0,                                                                                                          // 6993
				height: 0                                                                                                          // 6994
			})                                                                                                                  // 6995
		);                                                                                                                   // 6996
                                                                                                                       // 6997
		// Create a cacheable copy of the iframe document on first call.                                                     // 6998
		// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML                                // 6999
		// document to it; WebKit & Firefox won't allow reusing the iframe document.                                         // 7000
		if ( !iframeDoc || !iframe.createElement ) {                                                                         // 7001
			iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;                                            // 7002
			iframeDoc.write("<!doctype html><html><body>");                                                                     // 7003
			iframeDoc.close();                                                                                                  // 7004
		}                                                                                                                    // 7005
                                                                                                                       // 7006
		elem = iframeDoc.body.appendChild( iframeDoc.createElement(nodeName) );                                              // 7007
                                                                                                                       // 7008
		display = curCSS( elem, "display" );                                                                                 // 7009
		document.body.removeChild( iframe );                                                                                 // 7010
	}                                                                                                                     // 7011
                                                                                                                       // 7012
	// Store the correct default display                                                                                  // 7013
	elemdisplay[ nodeName ] = display;                                                                                    // 7014
                                                                                                                       // 7015
	return display;                                                                                                       // 7016
}                                                                                                                      // 7017
                                                                                                                       // 7018
jQuery.each([ "height", "width" ], function( i, name ) {                                                               // 7019
	jQuery.cssHooks[ name ] = {                                                                                           // 7020
		get: function( elem, computed, extra ) {                                                                             // 7021
			if ( computed ) {                                                                                                   // 7022
				// certain elements can have dimension info if we invisibly show them                                              // 7023
				// however, it must have a current display style that would benefit from this                                      // 7024
				if ( elem.offsetWidth === 0 && rdisplayswap.test( curCSS( elem, "display" ) ) ) {                                  // 7025
					return jQuery.swap( elem, cssShow, function() {                                                                   // 7026
						return getWidthOrHeight( elem, name, extra );                                                                    // 7027
					});                                                                                                               // 7028
				} else {                                                                                                           // 7029
					return getWidthOrHeight( elem, name, extra );                                                                     // 7030
				}                                                                                                                  // 7031
			}                                                                                                                   // 7032
		},                                                                                                                   // 7033
                                                                                                                       // 7034
		set: function( elem, value, extra ) {                                                                                // 7035
			return setPositiveNumber( elem, value, extra ?                                                                      // 7036
				augmentWidthOrHeight(                                                                                              // 7037
					elem,                                                                                                             // 7038
					name,                                                                                                             // 7039
					extra,                                                                                                            // 7040
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box"                                      // 7041
				) : 0                                                                                                              // 7042
			);                                                                                                                  // 7043
		}                                                                                                                    // 7044
	};                                                                                                                    // 7045
});                                                                                                                    // 7046
                                                                                                                       // 7047
if ( !jQuery.support.opacity ) {                                                                                       // 7048
	jQuery.cssHooks.opacity = {                                                                                           // 7049
		get: function( elem, computed ) {                                                                                    // 7050
			// IE uses filters for opacity                                                                                      // 7051
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?      // 7052
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :                                                                          // 7053
				computed ? "1" : "";                                                                                               // 7054
		},                                                                                                                   // 7055
                                                                                                                       // 7056
		set: function( elem, value ) {                                                                                       // 7057
			var style = elem.style,                                                                                             // 7058
				currentStyle = elem.currentStyle,                                                                                  // 7059
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",                                   // 7060
				filter = currentStyle && currentStyle.filter || style.filter || "";                                                // 7061
                                                                                                                       // 7062
			// IE has trouble with opacity if it does not have layout                                                           // 7063
			// Force it by setting the zoom level                                                                               // 7064
			style.zoom = 1;                                                                                                     // 7065
                                                                                                                       // 7066
			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652                   // 7067
			if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&                                            // 7068
				style.removeAttribute ) {                                                                                          // 7069
                                                                                                                       // 7070
				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText                                     // 7071
				// if "filter:" is present at all, clearType is disabled, we want to avoid this                                    // 7072
				// style.removeAttribute is IE Only, but so apparently is this code path...                                        // 7073
				style.removeAttribute( "filter" );                                                                                 // 7074
                                                                                                                       // 7075
				// if there there is no filter style applied in a css rule, we are done                                            // 7076
				if ( currentStyle && !currentStyle.filter ) {                                                                      // 7077
					return;                                                                                                           // 7078
				}                                                                                                                  // 7079
			}                                                                                                                   // 7080
                                                                                                                       // 7081
			// otherwise, set new filter values                                                                                 // 7082
			style.filter = ralpha.test( filter ) ?                                                                              // 7083
				filter.replace( ralpha, opacity ) :                                                                                // 7084
				filter + " " + opacity;                                                                                            // 7085
		}                                                                                                                    // 7086
	};                                                                                                                    // 7087
}                                                                                                                      // 7088
                                                                                                                       // 7089
// These hooks cannot be added until DOM ready because the support test                                                // 7090
// for it is not run until after DOM ready                                                                             // 7091
jQuery(function() {                                                                                                    // 7092
	if ( !jQuery.support.reliableMarginRight ) {                                                                          // 7093
		jQuery.cssHooks.marginRight = {                                                                                      // 7094
			get: function( elem, computed ) {                                                                                   // 7095
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right                                        // 7096
				// Work around by temporarily setting element display to inline-block                                              // 7097
				return jQuery.swap( elem, { "display": "inline-block" }, function() {                                              // 7098
					if ( computed ) {                                                                                                 // 7099
						return curCSS( elem, "marginRight" );                                                                            // 7100
					}                                                                                                                 // 7101
				});                                                                                                                // 7102
			}                                                                                                                   // 7103
		};                                                                                                                   // 7104
	}                                                                                                                     // 7105
                                                                                                                       // 7106
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084                                                          // 7107
	// getComputedStyle returns percent when specified for top/left/bottom/right                                          // 7108
	// rather than make the css module depend on the offset module, we just check for it here                             // 7109
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {                                                          // 7110
		jQuery.each( [ "top", "left" ], function( i, prop ) {                                                                // 7111
			jQuery.cssHooks[ prop ] = {                                                                                         // 7112
				get: function( elem, computed ) {                                                                                  // 7113
					if ( computed ) {                                                                                                 // 7114
						var ret = curCSS( elem, prop );                                                                                  // 7115
						// if curCSS returns percentage, fallback to offset                                                              // 7116
						return rnumnonpx.test( ret ) ? jQuery( elem ).position()[ prop ] + "px" : ret;                                   // 7117
					}                                                                                                                 // 7118
				}                                                                                                                  // 7119
			};                                                                                                                  // 7120
		});                                                                                                                  // 7121
	}                                                                                                                     // 7122
                                                                                                                       // 7123
});                                                                                                                    // 7124
                                                                                                                       // 7125
if ( jQuery.expr && jQuery.expr.filters ) {                                                                            // 7126
	jQuery.expr.filters.hidden = function( elem ) {                                                                       // 7127
		return ( elem.offsetWidth === 0 && elem.offsetHeight === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || curCSS( elem, "display" )) === "none");
	};                                                                                                                    // 7129
                                                                                                                       // 7130
	jQuery.expr.filters.visible = function( elem ) {                                                                      // 7131
		return !jQuery.expr.filters.hidden( elem );                                                                          // 7132
	};                                                                                                                    // 7133
}                                                                                                                      // 7134
                                                                                                                       // 7135
// These hooks are used by animate to expand properties                                                                // 7136
jQuery.each({                                                                                                          // 7137
	margin: "",                                                                                                           // 7138
	padding: "",                                                                                                          // 7139
	border: "Width"                                                                                                       // 7140
}, function( prefix, suffix ) {                                                                                        // 7141
	jQuery.cssHooks[ prefix + suffix ] = {                                                                                // 7142
		expand: function( value ) {                                                                                          // 7143
			var i,                                                                                                              // 7144
                                                                                                                       // 7145
				// assumes a single number if not a string                                                                         // 7146
				parts = typeof value === "string" ? value.split(" ") : [ value ],                                                  // 7147
				expanded = {};                                                                                                     // 7148
                                                                                                                       // 7149
			for ( i = 0; i < 4; i++ ) {                                                                                         // 7150
				expanded[ prefix + cssExpand[ i ] + suffix ] =                                                                     // 7151
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];                                                                       // 7152
			}                                                                                                                   // 7153
                                                                                                                       // 7154
			return expanded;                                                                                                    // 7155
		}                                                                                                                    // 7156
	};                                                                                                                    // 7157
                                                                                                                       // 7158
	if ( !rmargin.test( prefix ) ) {                                                                                      // 7159
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;                                                          // 7160
	}                                                                                                                     // 7161
});                                                                                                                    // 7162
var r20 = /%20/g,                                                                                                      // 7163
	rbracket = /\[\]$/,                                                                                                   // 7164
	rCRLF = /\r?\n/g,                                                                                                     // 7165
	rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	rselectTextarea = /^(?:select|textarea)/i;                                                                            // 7167
                                                                                                                       // 7168
jQuery.fn.extend({                                                                                                     // 7169
	serialize: function() {                                                                                               // 7170
		return jQuery.param( this.serializeArray() );                                                                        // 7171
	},                                                                                                                    // 7172
	serializeArray: function() {                                                                                          // 7173
		return this.map(function(){                                                                                          // 7174
			return this.elements ? jQuery.makeArray( this.elements ) : this;                                                    // 7175
		})                                                                                                                   // 7176
		.filter(function(){                                                                                                  // 7177
			return this.name && !this.disabled &&                                                                               // 7178
				( this.checked || rselectTextarea.test( this.nodeName ) ||                                                         // 7179
					rinput.test( this.type ) );                                                                                       // 7180
		})                                                                                                                   // 7181
		.map(function( i, elem ){                                                                                            // 7182
			var val = jQuery( this ).val();                                                                                     // 7183
                                                                                                                       // 7184
			return val == null ?                                                                                                // 7185
				null :                                                                                                             // 7186
				jQuery.isArray( val ) ?                                                                                            // 7187
					jQuery.map( val, function( val, i ){                                                                              // 7188
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };                                                 // 7189
					}) :                                                                                                              // 7190
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };                                                         // 7191
		}).get();                                                                                                            // 7192
	}                                                                                                                     // 7193
});                                                                                                                    // 7194
                                                                                                                       // 7195
//Serialize an array of form elements or a set of                                                                      // 7196
//key/values into a query string                                                                                       // 7197
jQuery.param = function( a, traditional ) {                                                                            // 7198
	var prefix,                                                                                                           // 7199
		s = [],                                                                                                              // 7200
		add = function( key, value ) {                                                                                       // 7201
			// If value is a function, invoke it and return its value                                                           // 7202
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );                                      // 7203
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );                                      // 7204
		};                                                                                                                   // 7205
                                                                                                                       // 7206
	// Set traditional to true for jQuery <= 1.3.2 behavior.                                                              // 7207
	if ( traditional === undefined ) {                                                                                    // 7208
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;                                                // 7209
	}                                                                                                                     // 7210
                                                                                                                       // 7211
	// If an array was passed in, assume that it is an array of form elements.                                            // 7212
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {                                            // 7213
		// Serialize the form elements                                                                                       // 7214
		jQuery.each( a, function() {                                                                                         // 7215
			add( this.name, this.value );                                                                                       // 7216
		});                                                                                                                  // 7217
                                                                                                                       // 7218
	} else {                                                                                                              // 7219
		// If traditional, encode the "old" way (the way 1.3.2 or older                                                      // 7220
		// did it), otherwise encode params recursively.                                                                     // 7221
		for ( prefix in a ) {                                                                                                // 7222
			buildParams( prefix, a[ prefix ], traditional, add );                                                               // 7223
		}                                                                                                                    // 7224
	}                                                                                                                     // 7225
                                                                                                                       // 7226
	// Return the resulting serialization                                                                                 // 7227
	return s.join( "&" ).replace( r20, "+" );                                                                             // 7228
};                                                                                                                     // 7229
                                                                                                                       // 7230
function buildParams( prefix, obj, traditional, add ) {                                                                // 7231
	var name;                                                                                                             // 7232
                                                                                                                       // 7233
	if ( jQuery.isArray( obj ) ) {                                                                                        // 7234
		// Serialize array item.                                                                                             // 7235
		jQuery.each( obj, function( i, v ) {                                                                                 // 7236
			if ( traditional || rbracket.test( prefix ) ) {                                                                     // 7237
				// Treat each array item as a scalar.                                                                              // 7238
				add( prefix, v );                                                                                                  // 7239
                                                                                                                       // 7240
			} else {                                                                                                            // 7241
				// If array item is non-scalar (array or object), encode its                                                       // 7242
				// numeric index to resolve deserialization ambiguity issues.                                                      // 7243
				// Note that rack (as of 1.0.0) can't currently deserialize                                                        // 7244
				// nested arrays properly, and attempting to do so may cause                                                       // 7245
				// a server error. Possible fixes are to modify rack's                                                             // 7246
				// deserialization algorithm or to provide an option or flag                                                       // 7247
				// to force array serialization to be shallow.                                                                     // 7248
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );                       // 7249
			}                                                                                                                   // 7250
		});                                                                                                                  // 7251
                                                                                                                       // 7252
	} else if ( !traditional && jQuery.type( obj ) === "object" ) {                                                       // 7253
		// Serialize object item.                                                                                            // 7254
		for ( name in obj ) {                                                                                                // 7255
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );                                            // 7256
		}                                                                                                                    // 7257
                                                                                                                       // 7258
	} else {                                                                                                              // 7259
		// Serialize scalar item.                                                                                            // 7260
		add( prefix, obj );                                                                                                  // 7261
	}                                                                                                                     // 7262
}                                                                                                                      // 7263
var                                                                                                                    // 7264
	// Document location                                                                                                  // 7265
	ajaxLocParts,                                                                                                         // 7266
	ajaxLocation,                                                                                                         // 7267
                                                                                                                       // 7268
	rhash = /#.*$/,                                                                                                       // 7269
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL                                       // 7270
	// #7653, #8125, #8152: local protocol detection                                                                      // 7271
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,                                       // 7272
	rnoContent = /^(?:GET|HEAD)$/,                                                                                        // 7273
	rprotocol = /^\/\//,                                                                                                  // 7274
	rquery = /\?/,                                                                                                        // 7275
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,                                                      // 7276
	rts = /([?&])_=[^&]*/,                                                                                                // 7277
	rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,                                                              // 7278
                                                                                                                       // 7279
	// Keep a copy of the old load method                                                                                 // 7280
	_load = jQuery.fn.load,                                                                                               // 7281
                                                                                                                       // 7282
	/* Prefilters                                                                                                         // 7283
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)                                // 7284
	 * 2) These are called:                                                                                               // 7285
	 *    - BEFORE asking for a transport                                                                                 // 7286
	 *    - AFTER param serialization (s.data is a string if s.processData is true)                                       // 7287
	 * 3) key is the dataType                                                                                             // 7288
	 * 4) the catchall symbol "*" can be used                                                                             // 7289
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed                            // 7290
	 */                                                                                                                   // 7291
	prefilters = {},                                                                                                      // 7292
                                                                                                                       // 7293
	/* Transports bindings                                                                                                // 7294
	 * 1) key is the dataType                                                                                             // 7295
	 * 2) the catchall symbol "*" can be used                                                                             // 7296
	 * 3) selection will start with transport dataType and THEN go to "*" if needed                                       // 7297
	 */                                                                                                                   // 7298
	transports = {},                                                                                                      // 7299
                                                                                                                       // 7300
	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression                               // 7301
	allTypes = ["*/"] + ["*"];                                                                                            // 7302
                                                                                                                       // 7303
// #8138, IE may throw an exception when accessing                                                                     // 7304
// a field from window.location if document.domain has been set                                                        // 7305
try {                                                                                                                  // 7306
	ajaxLocation = location.href;                                                                                         // 7307
} catch( e ) {                                                                                                         // 7308
	// Use the href attribute of an A element                                                                             // 7309
	// since IE will modify it given document.location                                                                    // 7310
	ajaxLocation = document.createElement( "a" );                                                                         // 7311
	ajaxLocation.href = "";                                                                                               // 7312
	ajaxLocation = ajaxLocation.href;                                                                                     // 7313
}                                                                                                                      // 7314
                                                                                                                       // 7315
// Segment location into parts                                                                                         // 7316
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];                                                          // 7317
                                                                                                                       // 7318
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport                                                // 7319
function addToPrefiltersOrTransports( structure ) {                                                                    // 7320
                                                                                                                       // 7321
	// dataTypeExpression is optional and defaults to "*"                                                                 // 7322
	return function( dataTypeExpression, func ) {                                                                         // 7323
                                                                                                                       // 7324
		if ( typeof dataTypeExpression !== "string" ) {                                                                      // 7325
			func = dataTypeExpression;                                                                                          // 7326
			dataTypeExpression = "*";                                                                                           // 7327
		}                                                                                                                    // 7328
                                                                                                                       // 7329
		var dataType, list, placeBefore,                                                                                     // 7330
			dataTypes = dataTypeExpression.toLowerCase().split( core_rspace ),                                                  // 7331
			i = 0,                                                                                                              // 7332
			length = dataTypes.length;                                                                                          // 7333
                                                                                                                       // 7334
		if ( jQuery.isFunction( func ) ) {                                                                                   // 7335
			// For each dataType in the dataTypeExpression                                                                      // 7336
			for ( ; i < length; i++ ) {                                                                                         // 7337
				dataType = dataTypes[ i ];                                                                                         // 7338
				// We control if we're asked to add before                                                                         // 7339
				// any existing element                                                                                            // 7340
				placeBefore = /^\+/.test( dataType );                                                                              // 7341
				if ( placeBefore ) {                                                                                               // 7342
					dataType = dataType.substr( 1 ) || "*";                                                                           // 7343
				}                                                                                                                  // 7344
				list = structure[ dataType ] = structure[ dataType ] || [];                                                        // 7345
				// then we add to the structure accordingly                                                                        // 7346
				list[ placeBefore ? "unshift" : "push" ]( func );                                                                  // 7347
			}                                                                                                                   // 7348
		}                                                                                                                    // 7349
	};                                                                                                                    // 7350
}                                                                                                                      // 7351
                                                                                                                       // 7352
// Base inspection function for prefilters and transports                                                              // 7353
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,                                    // 7354
		dataType /* internal */, inspected /* internal */ ) {                                                                // 7355
                                                                                                                       // 7356
	dataType = dataType || options.dataTypes[ 0 ];                                                                        // 7357
	inspected = inspected || {};                                                                                          // 7358
                                                                                                                       // 7359
	inspected[ dataType ] = true;                                                                                         // 7360
                                                                                                                       // 7361
	var selection,                                                                                                        // 7362
		list = structure[ dataType ],                                                                                        // 7363
		i = 0,                                                                                                               // 7364
		length = list ? list.length : 0,                                                                                     // 7365
		executeOnly = ( structure === prefilters );                                                                          // 7366
                                                                                                                       // 7367
	for ( ; i < length && ( executeOnly || !selection ); i++ ) {                                                          // 7368
		selection = list[ i ]( options, originalOptions, jqXHR );                                                            // 7369
		// If we got redirected to another dataType                                                                          // 7370
		// we try there if executing only and not done already                                                               // 7371
		if ( typeof selection === "string" ) {                                                                               // 7372
			if ( !executeOnly || inspected[ selection ] ) {                                                                     // 7373
				selection = undefined;                                                                                             // 7374
			} else {                                                                                                            // 7375
				options.dataTypes.unshift( selection );                                                                            // 7376
				selection = inspectPrefiltersOrTransports(                                                                         // 7377
						structure, options, originalOptions, jqXHR, selection, inspected );                                              // 7378
			}                                                                                                                   // 7379
		}                                                                                                                    // 7380
	}                                                                                                                     // 7381
	// If we're only executing or nothing was selected                                                                    // 7382
	// we try the catchall dataType if not done already                                                                   // 7383
	if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {                                                           // 7384
		selection = inspectPrefiltersOrTransports(                                                                           // 7385
				structure, options, originalOptions, jqXHR, "*", inspected );                                                      // 7386
	}                                                                                                                     // 7387
	// unnecessary when only executing (prefilters)                                                                       // 7388
	// but it'll be ignored by the caller in that case                                                                    // 7389
	return selection;                                                                                                     // 7390
}                                                                                                                      // 7391
                                                                                                                       // 7392
// A special extend for ajax options                                                                                   // 7393
// that takes "flat" options (not to be deep extended)                                                                 // 7394
// Fixes #9887                                                                                                         // 7395
function ajaxExtend( target, src ) {                                                                                   // 7396
	var key, deep,                                                                                                        // 7397
		flatOptions = jQuery.ajaxSettings.flatOptions || {};                                                                 // 7398
	for ( key in src ) {                                                                                                  // 7399
		if ( src[ key ] !== undefined ) {                                                                                    // 7400
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];                                    // 7401
		}                                                                                                                    // 7402
	}                                                                                                                     // 7403
	if ( deep ) {                                                                                                         // 7404
		jQuery.extend( true, target, deep );                                                                                 // 7405
	}                                                                                                                     // 7406
}                                                                                                                      // 7407
                                                                                                                       // 7408
jQuery.fn.load = function( url, params, callback ) {                                                                   // 7409
	if ( typeof url !== "string" && _load ) {                                                                             // 7410
		return _load.apply( this, arguments );                                                                               // 7411
	}                                                                                                                     // 7412
                                                                                                                       // 7413
	// Don't do a request if no elements are being requested                                                              // 7414
	if ( !this.length ) {                                                                                                 // 7415
		return this;                                                                                                         // 7416
	}                                                                                                                     // 7417
                                                                                                                       // 7418
	var selector, type, response,                                                                                         // 7419
		self = this,                                                                                                         // 7420
		off = url.indexOf(" ");                                                                                              // 7421
                                                                                                                       // 7422
	if ( off >= 0 ) {                                                                                                     // 7423
		selector = url.slice( off, url.length );                                                                             // 7424
		url = url.slice( 0, off );                                                                                           // 7425
	}                                                                                                                     // 7426
                                                                                                                       // 7427
	// If it's a function                                                                                                 // 7428
	if ( jQuery.isFunction( params ) ) {                                                                                  // 7429
                                                                                                                       // 7430
		// We assume that it's the callback                                                                                  // 7431
		callback = params;                                                                                                   // 7432
		params = undefined;                                                                                                  // 7433
                                                                                                                       // 7434
	// Otherwise, build a param string                                                                                    // 7435
	} else if ( params && typeof params === "object" ) {                                                                  // 7436
		type = "POST";                                                                                                       // 7437
	}                                                                                                                     // 7438
                                                                                                                       // 7439
	// Request the remote document                                                                                        // 7440
	jQuery.ajax({                                                                                                         // 7441
		url: url,                                                                                                            // 7442
                                                                                                                       // 7443
		// if "type" variable is undefined, then "GET" method will be used                                                   // 7444
		type: type,                                                                                                          // 7445
		dataType: "html",                                                                                                    // 7446
		data: params,                                                                                                        // 7447
		complete: function( jqXHR, status ) {                                                                                // 7448
			if ( callback ) {                                                                                                   // 7449
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );                                          // 7450
			}                                                                                                                   // 7451
		}                                                                                                                    // 7452
	}).done(function( responseText ) {                                                                                    // 7453
                                                                                                                       // 7454
		// Save response for use in complete callback                                                                        // 7455
		response = arguments;                                                                                                // 7456
                                                                                                                       // 7457
		// See if a selector was specified                                                                                   // 7458
		self.html( selector ?                                                                                                // 7459
                                                                                                                       // 7460
			// Create a dummy div to hold the results                                                                           // 7461
			jQuery("<div>")                                                                                                     // 7462
                                                                                                                       // 7463
				// inject the contents of the document in, removing the scripts                                                    // 7464
				// to avoid any 'Permission Denied' errors in IE                                                                   // 7465
				.append( responseText.replace( rscript, "" ) )                                                                     // 7466
                                                                                                                       // 7467
				// Locate the specified elements                                                                                   // 7468
				.find( selector ) :                                                                                                // 7469
                                                                                                                       // 7470
			// If not, just inject the full result                                                                              // 7471
			responseText );                                                                                                     // 7472
                                                                                                                       // 7473
	});                                                                                                                   // 7474
                                                                                                                       // 7475
	return this;                                                                                                          // 7476
};                                                                                                                     // 7477
                                                                                                                       // 7478
// Attach a bunch of functions for handling common AJAX events                                                         // 7479
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){          // 7480
	jQuery.fn[ o ] = function( f ){                                                                                       // 7481
		return this.on( o, f );                                                                                              // 7482
	};                                                                                                                    // 7483
});                                                                                                                    // 7484
                                                                                                                       // 7485
jQuery.each( [ "get", "post" ], function( i, method ) {                                                                // 7486
	jQuery[ method ] = function( url, data, callback, type ) {                                                            // 7487
		// shift arguments if data argument was omitted                                                                      // 7488
		if ( jQuery.isFunction( data ) ) {                                                                                   // 7489
			type = type || callback;                                                                                            // 7490
			callback = data;                                                                                                    // 7491
			data = undefined;                                                                                                   // 7492
		}                                                                                                                    // 7493
                                                                                                                       // 7494
		return jQuery.ajax({                                                                                                 // 7495
			type: method,                                                                                                       // 7496
			url: url,                                                                                                           // 7497
			data: data,                                                                                                         // 7498
			success: callback,                                                                                                  // 7499
			dataType: type                                                                                                      // 7500
		});                                                                                                                  // 7501
	};                                                                                                                    // 7502
});                                                                                                                    // 7503
                                                                                                                       // 7504
jQuery.extend({                                                                                                        // 7505
                                                                                                                       // 7506
	getScript: function( url, callback ) {                                                                                // 7507
		return jQuery.get( url, undefined, callback, "script" );                                                             // 7508
	},                                                                                                                    // 7509
                                                                                                                       // 7510
	getJSON: function( url, data, callback ) {                                                                            // 7511
		return jQuery.get( url, data, callback, "json" );                                                                    // 7512
	},                                                                                                                    // 7513
                                                                                                                       // 7514
	// Creates a full fledged settings object into target                                                                 // 7515
	// with both ajaxSettings and settings fields.                                                                        // 7516
	// If target is omitted, writes into ajaxSettings.                                                                    // 7517
	ajaxSetup: function( target, settings ) {                                                                             // 7518
		if ( settings ) {                                                                                                    // 7519
			// Building a settings object                                                                                       // 7520
			ajaxExtend( target, jQuery.ajaxSettings );                                                                          // 7521
		} else {                                                                                                             // 7522
			// Extending ajaxSettings                                                                                           // 7523
			settings = target;                                                                                                  // 7524
			target = jQuery.ajaxSettings;                                                                                       // 7525
		}                                                                                                                    // 7526
		ajaxExtend( target, settings );                                                                                      // 7527
		return target;                                                                                                       // 7528
	},                                                                                                                    // 7529
                                                                                                                       // 7530
	ajaxSettings: {                                                                                                       // 7531
		url: ajaxLocation,                                                                                                   // 7532
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),                                                                   // 7533
		global: true,                                                                                                        // 7534
		type: "GET",                                                                                                         // 7535
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",                                                     // 7536
		processData: true,                                                                                                   // 7537
		async: true,                                                                                                         // 7538
		/*                                                                                                                   // 7539
		timeout: 0,                                                                                                          // 7540
		data: null,                                                                                                          // 7541
		dataType: null,                                                                                                      // 7542
		username: null,                                                                                                      // 7543
		password: null,                                                                                                      // 7544
		cache: null,                                                                                                         // 7545
		throws: false,                                                                                                       // 7546
		traditional: false,                                                                                                  // 7547
		headers: {},                                                                                                         // 7548
		*/                                                                                                                   // 7549
                                                                                                                       // 7550
		accepts: {                                                                                                           // 7551
			xml: "application/xml, text/xml",                                                                                   // 7552
			html: "text/html",                                                                                                  // 7553
			text: "text/plain",                                                                                                 // 7554
			json: "application/json, text/javascript",                                                                          // 7555
			"*": allTypes                                                                                                       // 7556
		},                                                                                                                   // 7557
                                                                                                                       // 7558
		contents: {                                                                                                          // 7559
			xml: /xml/,                                                                                                         // 7560
			html: /html/,                                                                                                       // 7561
			json: /json/                                                                                                        // 7562
		},                                                                                                                   // 7563
                                                                                                                       // 7564
		responseFields: {                                                                                                    // 7565
			xml: "responseXML",                                                                                                 // 7566
			text: "responseText"                                                                                                // 7567
		},                                                                                                                   // 7568
                                                                                                                       // 7569
		// List of data converters                                                                                           // 7570
		// 1) key format is "source_type destination_type" (a single space in-between)                                       // 7571
		// 2) the catchall symbol "*" can be used for source_type                                                            // 7572
		converters: {                                                                                                        // 7573
                                                                                                                       // 7574
			// Convert anything to text                                                                                         // 7575
			"* text": window.String,                                                                                            // 7576
                                                                                                                       // 7577
			// Text to html (true = no transformation)                                                                          // 7578
			"text html": true,                                                                                                  // 7579
                                                                                                                       // 7580
			// Evaluate text as a json expression                                                                               // 7581
			"text json": jQuery.parseJSON,                                                                                      // 7582
                                                                                                                       // 7583
			// Parse text as xml                                                                                                // 7584
			"text xml": jQuery.parseXML                                                                                         // 7585
		},                                                                                                                   // 7586
                                                                                                                       // 7587
		// For options that shouldn't be deep extended:                                                                      // 7588
		// you can add your own custom options here if                                                                       // 7589
		// and when you create one that shouldn't be                                                                         // 7590
		// deep extended (see ajaxExtend)                                                                                    // 7591
		flatOptions: {                                                                                                       // 7592
			context: true,                                                                                                      // 7593
			url: true                                                                                                           // 7594
		}                                                                                                                    // 7595
	},                                                                                                                    // 7596
                                                                                                                       // 7597
	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),                                                             // 7598
	ajaxTransport: addToPrefiltersOrTransports( transports ),                                                             // 7599
                                                                                                                       // 7600
	// Main method                                                                                                        // 7601
	ajax: function( url, options ) {                                                                                      // 7602
                                                                                                                       // 7603
		// If url is an object, simulate pre-1.5 signature                                                                   // 7604
		if ( typeof url === "object" ) {                                                                                     // 7605
			options = url;                                                                                                      // 7606
			url = undefined;                                                                                                    // 7607
		}                                                                                                                    // 7608
                                                                                                                       // 7609
		// Force options to be an object                                                                                     // 7610
		options = options || {};                                                                                             // 7611
                                                                                                                       // 7612
		var // ifModified key                                                                                                // 7613
			ifModifiedKey,                                                                                                      // 7614
			// Response headers                                                                                                 // 7615
			responseHeadersString,                                                                                              // 7616
			responseHeaders,                                                                                                    // 7617
			// transport                                                                                                        // 7618
			transport,                                                                                                          // 7619
			// timeout handle                                                                                                   // 7620
			timeoutTimer,                                                                                                       // 7621
			// Cross-domain detection vars                                                                                      // 7622
			parts,                                                                                                              // 7623
			// To know if global events are to be dispatched                                                                    // 7624
			fireGlobals,                                                                                                        // 7625
			// Loop variable                                                                                                    // 7626
			i,                                                                                                                  // 7627
			// Create the final options object                                                                                  // 7628
			s = jQuery.ajaxSetup( {}, options ),                                                                                // 7629
			// Callbacks context                                                                                                // 7630
			callbackContext = s.context || s,                                                                                   // 7631
			// Context for global events                                                                                        // 7632
			// It's the callbackContext if one was provided in the options                                                      // 7633
			// and if it's a DOM node or a jQuery collection                                                                    // 7634
			globalEventContext = callbackContext !== s &&                                                                       // 7635
				( callbackContext.nodeType || callbackContext instanceof jQuery ) ?                                                // 7636
						jQuery( callbackContext ) : jQuery.event,                                                                        // 7637
			// Deferreds                                                                                                        // 7638
			deferred = jQuery.Deferred(),                                                                                       // 7639
			completeDeferred = jQuery.Callbacks( "once memory" ),                                                               // 7640
			// Status-dependent callbacks                                                                                       // 7641
			statusCode = s.statusCode || {},                                                                                    // 7642
			// Headers (they are sent all at once)                                                                              // 7643
			requestHeaders = {},                                                                                                // 7644
			requestHeadersNames = {},                                                                                           // 7645
			// The jqXHR state                                                                                                  // 7646
			state = 0,                                                                                                          // 7647
			// Default abort message                                                                                            // 7648
			strAbort = "canceled",                                                                                              // 7649
			// Fake xhr                                                                                                         // 7650
			jqXHR = {                                                                                                           // 7651
                                                                                                                       // 7652
				readyState: 0,                                                                                                     // 7653
                                                                                                                       // 7654
				// Caches the header                                                                                               // 7655
				setRequestHeader: function( name, value ) {                                                                        // 7656
					if ( !state ) {                                                                                                   // 7657
						var lname = name.toLowerCase();                                                                                  // 7658
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;                                      // 7659
						requestHeaders[ name ] = value;                                                                                  // 7660
					}                                                                                                                 // 7661
					return this;                                                                                                      // 7662
				},                                                                                                                 // 7663
                                                                                                                       // 7664
				// Raw string                                                                                                      // 7665
				getAllResponseHeaders: function() {                                                                                // 7666
					return state === 2 ? responseHeadersString : null;                                                                // 7667
				},                                                                                                                 // 7668
                                                                                                                       // 7669
				// Builds headers hashtable if needed                                                                              // 7670
				getResponseHeader: function( key ) {                                                                               // 7671
					var match;                                                                                                        // 7672
					if ( state === 2 ) {                                                                                              // 7673
						if ( !responseHeaders ) {                                                                                        // 7674
							responseHeaders = {};                                                                                           // 7675
							while( ( match = rheaders.exec( responseHeadersString ) ) ) {                                                   // 7676
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];                                                        // 7677
							}                                                                                                               // 7678
						}                                                                                                                // 7679
						match = responseHeaders[ key.toLowerCase() ];                                                                    // 7680
					}                                                                                                                 // 7681
					return match === undefined ? null : match;                                                                        // 7682
				},                                                                                                                 // 7683
                                                                                                                       // 7684
				// Overrides response content-type header                                                                          // 7685
				overrideMimeType: function( type ) {                                                                               // 7686
					if ( !state ) {                                                                                                   // 7687
						s.mimeType = type;                                                                                               // 7688
					}                                                                                                                 // 7689
					return this;                                                                                                      // 7690
				},                                                                                                                 // 7691
                                                                                                                       // 7692
				// Cancel the request                                                                                              // 7693
				abort: function( statusText ) {                                                                                    // 7694
					statusText = statusText || strAbort;                                                                              // 7695
					if ( transport ) {                                                                                                // 7696
						transport.abort( statusText );                                                                                   // 7697
					}                                                                                                                 // 7698
					done( 0, statusText );                                                                                            // 7699
					return this;                                                                                                      // 7700
				}                                                                                                                  // 7701
			};                                                                                                                  // 7702
                                                                                                                       // 7703
		// Callback for when everything is done                                                                              // 7704
		// It is defined here because jslint complains if it is declared                                                     // 7705
		// at the end of the function (which would be more logical and readable)                                             // 7706
		function done( status, nativeStatusText, responses, headers ) {                                                      // 7707
			var isSuccess, success, error, response, modified,                                                                  // 7708
				statusText = nativeStatusText;                                                                                     // 7709
                                                                                                                       // 7710
			// Called once                                                                                                      // 7711
			if ( state === 2 ) {                                                                                                // 7712
				return;                                                                                                            // 7713
			}                                                                                                                   // 7714
                                                                                                                       // 7715
			// State is "done" now                                                                                              // 7716
			state = 2;                                                                                                          // 7717
                                                                                                                       // 7718
			// Clear timeout if it exists                                                                                       // 7719
			if ( timeoutTimer ) {                                                                                               // 7720
				clearTimeout( timeoutTimer );                                                                                      // 7721
			}                                                                                                                   // 7722
                                                                                                                       // 7723
			// Dereference transport for early garbage collection                                                               // 7724
			// (no matter how long the jqXHR object will be used)                                                               // 7725
			transport = undefined;                                                                                              // 7726
                                                                                                                       // 7727
			// Cache response headers                                                                                           // 7728
			responseHeadersString = headers || "";                                                                              // 7729
                                                                                                                       // 7730
			// Set readyState                                                                                                   // 7731
			jqXHR.readyState = status > 0 ? 4 : 0;                                                                              // 7732
                                                                                                                       // 7733
			// Get response data                                                                                                // 7734
			if ( responses ) {                                                                                                  // 7735
				response = ajaxHandleResponses( s, jqXHR, responses );                                                             // 7736
			}                                                                                                                   // 7737
                                                                                                                       // 7738
			// If successful, handle type chaining                                                                              // 7739
			if ( status >= 200 && status < 300 || status === 304 ) {                                                            // 7740
                                                                                                                       // 7741
				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.                                   // 7742
				if ( s.ifModified ) {                                                                                              // 7743
                                                                                                                       // 7744
					modified = jqXHR.getResponseHeader("Last-Modified");                                                              // 7745
					if ( modified ) {                                                                                                 // 7746
						jQuery.lastModified[ ifModifiedKey ] = modified;                                                                 // 7747
					}                                                                                                                 // 7748
					modified = jqXHR.getResponseHeader("Etag");                                                                       // 7749
					if ( modified ) {                                                                                                 // 7750
						jQuery.etag[ ifModifiedKey ] = modified;                                                                         // 7751
					}                                                                                                                 // 7752
				}                                                                                                                  // 7753
                                                                                                                       // 7754
				// If not modified                                                                                                 // 7755
				if ( status === 304 ) {                                                                                            // 7756
                                                                                                                       // 7757
					statusText = "notmodified";                                                                                       // 7758
					isSuccess = true;                                                                                                 // 7759
                                                                                                                       // 7760
				// If we have data                                                                                                 // 7761
				} else {                                                                                                           // 7762
                                                                                                                       // 7763
					isSuccess = ajaxConvert( s, response );                                                                           // 7764
					statusText = isSuccess.state;                                                                                     // 7765
					success = isSuccess.data;                                                                                         // 7766
					error = isSuccess.error;                                                                                          // 7767
					isSuccess = !error;                                                                                               // 7768
				}                                                                                                                  // 7769
			} else {                                                                                                            // 7770
				// We extract error from statusText                                                                                // 7771
				// then normalize statusText and status for non-aborts                                                             // 7772
				error = statusText;                                                                                                // 7773
				if ( !statusText || status ) {                                                                                     // 7774
					statusText = "error";                                                                                             // 7775
					if ( status < 0 ) {                                                                                               // 7776
						status = 0;                                                                                                      // 7777
					}                                                                                                                 // 7778
				}                                                                                                                  // 7779
			}                                                                                                                   // 7780
                                                                                                                       // 7781
			// Set data for the fake xhr object                                                                                 // 7782
			jqXHR.status = status;                                                                                              // 7783
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";                                                         // 7784
                                                                                                                       // 7785
			// Success/Error                                                                                                    // 7786
			if ( isSuccess ) {                                                                                                  // 7787
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );                                           // 7788
			} else {                                                                                                            // 7789
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );                                              // 7790
			}                                                                                                                   // 7791
                                                                                                                       // 7792
			// Status-dependent callbacks                                                                                       // 7793
			jqXHR.statusCode( statusCode );                                                                                     // 7794
			statusCode = undefined;                                                                                             // 7795
                                                                                                                       // 7796
			if ( fireGlobals ) {                                                                                                // 7797
				globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),                                          // 7798
						[ jqXHR, s, isSuccess ? success : error ] );                                                                     // 7799
			}                                                                                                                   // 7800
                                                                                                                       // 7801
			// Complete                                                                                                         // 7802
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );                                                // 7803
                                                                                                                       // 7804
			if ( fireGlobals ) {                                                                                                // 7805
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );                                                        // 7806
				// Handle the global AJAX counter                                                                                  // 7807
				if ( !( --jQuery.active ) ) {                                                                                      // 7808
					jQuery.event.trigger( "ajaxStop" );                                                                               // 7809
				}                                                                                                                  // 7810
			}                                                                                                                   // 7811
		}                                                                                                                    // 7812
                                                                                                                       // 7813
		// Attach deferreds                                                                                                  // 7814
		deferred.promise( jqXHR );                                                                                           // 7815
		jqXHR.success = jqXHR.done;                                                                                          // 7816
		jqXHR.error = jqXHR.fail;                                                                                            // 7817
		jqXHR.complete = completeDeferred.add;                                                                               // 7818
                                                                                                                       // 7819
		// Status-dependent callbacks                                                                                        // 7820
		jqXHR.statusCode = function( map ) {                                                                                 // 7821
			if ( map ) {                                                                                                        // 7822
				var tmp;                                                                                                           // 7823
				if ( state < 2 ) {                                                                                                 // 7824
					for ( tmp in map ) {                                                                                              // 7825
						statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];                                                               // 7826
					}                                                                                                                 // 7827
				} else {                                                                                                           // 7828
					tmp = map[ jqXHR.status ];                                                                                        // 7829
					jqXHR.always( tmp );                                                                                              // 7830
				}                                                                                                                  // 7831
			}                                                                                                                   // 7832
			return this;                                                                                                        // 7833
		};                                                                                                                   // 7834
                                                                                                                       // 7835
		// Remove hash character (#7531: and string promotion)                                                               // 7836
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)                                           // 7837
		// We also use the url parameter if available                                                                        // 7838
		s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );               // 7839
                                                                                                                       // 7840
		// Extract dataTypes list                                                                                            // 7841
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( core_rspace );                                   // 7842
                                                                                                                       // 7843
		// A cross-domain request is in order when we have a protocol:host:port mismatch                                     // 7844
		if ( s.crossDomain == null ) {                                                                                       // 7845
			parts = rurl.exec( s.url.toLowerCase() ) || false;                                                                  // 7846
			s.crossDomain = parts && ( parts.join(":") + ( parts[ 3 ] ? "" : parts[ 1 ] === "http:" ? 80 : 443 ) ) !==          // 7847
				( ajaxLocParts.join(":") + ( ajaxLocParts[ 3 ] ? "" : ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) );                // 7848
		}                                                                                                                    // 7849
                                                                                                                       // 7850
		// Convert data if not already a string                                                                              // 7851
		if ( s.data && s.processData && typeof s.data !== "string" ) {                                                       // 7852
			s.data = jQuery.param( s.data, s.traditional );                                                                     // 7853
		}                                                                                                                    // 7854
                                                                                                                       // 7855
		// Apply prefilters                                                                                                  // 7856
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );                                                      // 7857
                                                                                                                       // 7858
		// If request was aborted inside a prefilter, stop there                                                             // 7859
		if ( state === 2 ) {                                                                                                 // 7860
			return jqXHR;                                                                                                       // 7861
		}                                                                                                                    // 7862
                                                                                                                       // 7863
		// We can fire global events as of now if asked to                                                                   // 7864
		fireGlobals = s.global;                                                                                              // 7865
                                                                                                                       // 7866
		// Uppercase the type                                                                                                // 7867
		s.type = s.type.toUpperCase();                                                                                       // 7868
                                                                                                                       // 7869
		// Determine if request has content                                                                                  // 7870
		s.hasContent = !rnoContent.test( s.type );                                                                           // 7871
                                                                                                                       // 7872
		// Watch for a new set of requests                                                                                   // 7873
		if ( fireGlobals && jQuery.active++ === 0 ) {                                                                        // 7874
			jQuery.event.trigger( "ajaxStart" );                                                                                // 7875
		}                                                                                                                    // 7876
                                                                                                                       // 7877
		// More options handling for requests with no content                                                                // 7878
		if ( !s.hasContent ) {                                                                                               // 7879
                                                                                                                       // 7880
			// If data is available, append data to url                                                                         // 7881
			if ( s.data ) {                                                                                                     // 7882
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;                                                            // 7883
				// #9682: remove data so that it's not used in an eventual retry                                                   // 7884
				delete s.data;                                                                                                     // 7885
			}                                                                                                                   // 7886
                                                                                                                       // 7887
			// Get ifModifiedKey before adding the anti-cache parameter                                                         // 7888
			ifModifiedKey = s.url;                                                                                              // 7889
                                                                                                                       // 7890
			// Add anti-cache in url if needed                                                                                  // 7891
			if ( s.cache === false ) {                                                                                          // 7892
                                                                                                                       // 7893
				var ts = jQuery.now(),                                                                                             // 7894
					// try replacing _= if it is there                                                                                // 7895
					ret = s.url.replace( rts, "$1_=" + ts );                                                                          // 7896
                                                                                                                       // 7897
				// if nothing was replaced, add timestamp to the end                                                               // 7898
				s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );                       // 7899
			}                                                                                                                   // 7900
		}                                                                                                                    // 7901
                                                                                                                       // 7902
		// Set the correct header, if data is being sent                                                                     // 7903
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {                                    // 7904
			jqXHR.setRequestHeader( "Content-Type", s.contentType );                                                            // 7905
		}                                                                                                                    // 7906
                                                                                                                       // 7907
		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.                                     // 7908
		if ( s.ifModified ) {                                                                                                // 7909
			ifModifiedKey = ifModifiedKey || s.url;                                                                             // 7910
			if ( jQuery.lastModified[ ifModifiedKey ] ) {                                                                       // 7911
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );                               // 7912
			}                                                                                                                   // 7913
			if ( jQuery.etag[ ifModifiedKey ] ) {                                                                               // 7914
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );                                           // 7915
			}                                                                                                                   // 7916
		}                                                                                                                    // 7917
                                                                                                                       // 7918
		// Set the Accepts header for the server, depending on the dataType                                                  // 7919
		jqXHR.setRequestHeader(                                                                                              // 7920
			"Accept",                                                                                                           // 7921
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?                                                                   // 7922
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :                   // 7923
				s.accepts[ "*" ]                                                                                                   // 7924
		);                                                                                                                   // 7925
                                                                                                                       // 7926
		// Check for headers option                                                                                          // 7927
		for ( i in s.headers ) {                                                                                             // 7928
			jqXHR.setRequestHeader( i, s.headers[ i ] );                                                                        // 7929
		}                                                                                                                    // 7930
                                                                                                                       // 7931
		// Allow custom headers/mimetypes and early abort                                                                    // 7932
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {                 // 7933
				// Abort if not done already and return                                                                            // 7934
				return jqXHR.abort();                                                                                              // 7935
                                                                                                                       // 7936
		}                                                                                                                    // 7937
                                                                                                                       // 7938
		// aborting is no longer a cancellation                                                                              // 7939
		strAbort = "abort";                                                                                                  // 7940
                                                                                                                       // 7941
		// Install callbacks on deferreds                                                                                    // 7942
		for ( i in { success: 1, error: 1, complete: 1 } ) {                                                                 // 7943
			jqXHR[ i ]( s[ i ] );                                                                                               // 7944
		}                                                                                                                    // 7945
                                                                                                                       // 7946
		// Get transport                                                                                                     // 7947
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );                                          // 7948
                                                                                                                       // 7949
		// If no transport, we auto-abort                                                                                    // 7950
		if ( !transport ) {                                                                                                  // 7951
			done( -1, "No Transport" );                                                                                         // 7952
		} else {                                                                                                             // 7953
			jqXHR.readyState = 1;                                                                                               // 7954
			// Send global event                                                                                                // 7955
			if ( fireGlobals ) {                                                                                                // 7956
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );                                                            // 7957
			}                                                                                                                   // 7958
			// Timeout                                                                                                          // 7959
			if ( s.async && s.timeout > 0 ) {                                                                                   // 7960
				timeoutTimer = setTimeout( function(){                                                                             // 7961
					jqXHR.abort( "timeout" );                                                                                         // 7962
				}, s.timeout );                                                                                                    // 7963
			}                                                                                                                   // 7964
                                                                                                                       // 7965
			try {                                                                                                               // 7966
				state = 1;                                                                                                         // 7967
				transport.send( requestHeaders, done );                                                                            // 7968
			} catch (e) {                                                                                                       // 7969
				// Propagate exception as error if not done                                                                        // 7970
				if ( state < 2 ) {                                                                                                 // 7971
					done( -1, e );                                                                                                    // 7972
				// Simply rethrow otherwise                                                                                        // 7973
				} else {                                                                                                           // 7974
					throw e;                                                                                                          // 7975
				}                                                                                                                  // 7976
			}                                                                                                                   // 7977
		}                                                                                                                    // 7978
                                                                                                                       // 7979
		return jqXHR;                                                                                                        // 7980
	},                                                                                                                    // 7981
                                                                                                                       // 7982
	// Counter for holding the number of active queries                                                                   // 7983
	active: 0,                                                                                                            // 7984
                                                                                                                       // 7985
	// Last-Modified header cache for next request                                                                        // 7986
	lastModified: {},                                                                                                     // 7987
	etag: {}                                                                                                              // 7988
                                                                                                                       // 7989
});                                                                                                                    // 7990
                                                                                                                       // 7991
/* Handles responses to an ajax request:                                                                               // 7992
 * - sets all responseXXX fields accordingly                                                                           // 7993
 * - finds the right dataType (mediates between content-type and expected dataType)                                    // 7994
 * - returns the corresponding response                                                                                // 7995
 */                                                                                                                    // 7996
function ajaxHandleResponses( s, jqXHR, responses ) {                                                                  // 7997
                                                                                                                       // 7998
	var ct, type, finalDataType, firstDataType,                                                                           // 7999
		contents = s.contents,                                                                                               // 8000
		dataTypes = s.dataTypes,                                                                                             // 8001
		responseFields = s.responseFields;                                                                                   // 8002
                                                                                                                       // 8003
	// Fill responseXXX fields                                                                                            // 8004
	for ( type in responseFields ) {                                                                                      // 8005
		if ( type in responses ) {                                                                                           // 8006
			jqXHR[ responseFields[type] ] = responses[ type ];                                                                  // 8007
		}                                                                                                                    // 8008
	}                                                                                                                     // 8009
                                                                                                                       // 8010
	// Remove auto dataType and get content-type in the process                                                           // 8011
	while( dataTypes[ 0 ] === "*" ) {                                                                                     // 8012
		dataTypes.shift();                                                                                                   // 8013
		if ( ct === undefined ) {                                                                                            // 8014
			ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );                                                       // 8015
		}                                                                                                                    // 8016
	}                                                                                                                     // 8017
                                                                                                                       // 8018
	// Check if we're dealing with a known content-type                                                                   // 8019
	if ( ct ) {                                                                                                           // 8020
		for ( type in contents ) {                                                                                           // 8021
			if ( contents[ type ] && contents[ type ].test( ct ) ) {                                                            // 8022
				dataTypes.unshift( type );                                                                                         // 8023
				break;                                                                                                             // 8024
			}                                                                                                                   // 8025
		}                                                                                                                    // 8026
	}                                                                                                                     // 8027
                                                                                                                       // 8028
	// Check to see if we have a response for the expected dataType                                                       // 8029
	if ( dataTypes[ 0 ] in responses ) {                                                                                  // 8030
		finalDataType = dataTypes[ 0 ];                                                                                      // 8031
	} else {                                                                                                              // 8032
		// Try convertible dataTypes                                                                                         // 8033
		for ( type in responses ) {                                                                                          // 8034
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {                                               // 8035
				finalDataType = type;                                                                                              // 8036
				break;                                                                                                             // 8037
			}                                                                                                                   // 8038
			if ( !firstDataType ) {                                                                                             // 8039
				firstDataType = type;                                                                                              // 8040
			}                                                                                                                   // 8041
		}                                                                                                                    // 8042
		// Or just use first one                                                                                             // 8043
		finalDataType = finalDataType || firstDataType;                                                                      // 8044
	}                                                                                                                     // 8045
                                                                                                                       // 8046
	// If we found a dataType                                                                                             // 8047
	// We add the dataType to the list if needed                                                                          // 8048
	// and return the corresponding response                                                                              // 8049
	if ( finalDataType ) {                                                                                                // 8050
		if ( finalDataType !== dataTypes[ 0 ] ) {                                                                            // 8051
			dataTypes.unshift( finalDataType );                                                                                 // 8052
		}                                                                                                                    // 8053
		return responses[ finalDataType ];                                                                                   // 8054
	}                                                                                                                     // 8055
}                                                                                                                      // 8056
                                                                                                                       // 8057
// Chain conversions given the request and the original response                                                       // 8058
function ajaxConvert( s, response ) {                                                                                  // 8059
                                                                                                                       // 8060
	var conv, conv2, current, tmp,                                                                                        // 8061
		// Work with a copy of dataTypes in case we need to modify it for conversion                                         // 8062
		dataTypes = s.dataTypes.slice(),                                                                                     // 8063
		prev = dataTypes[ 0 ],                                                                                               // 8064
		converters = {},                                                                                                     // 8065
		i = 0;                                                                                                               // 8066
                                                                                                                       // 8067
	// Apply the dataFilter if provided                                                                                   // 8068
	if ( s.dataFilter ) {                                                                                                 // 8069
		response = s.dataFilter( response, s.dataType );                                                                     // 8070
	}                                                                                                                     // 8071
                                                                                                                       // 8072
	// Create converters map with lowercased keys                                                                         // 8073
	if ( dataTypes[ 1 ] ) {                                                                                               // 8074
		for ( conv in s.converters ) {                                                                                       // 8075
			converters[ conv.toLowerCase() ] = s.converters[ conv ];                                                            // 8076
		}                                                                                                                    // 8077
	}                                                                                                                     // 8078
                                                                                                                       // 8079
	// Convert to each sequential dataType, tolerating list modification                                                  // 8080
	for ( ; (current = dataTypes[++i]); ) {                                                                               // 8081
                                                                                                                       // 8082
		// There's only work to do if current dataType is non-auto                                                           // 8083
		if ( current !== "*" ) {                                                                                             // 8084
                                                                                                                       // 8085
			// Convert response if prev dataType is non-auto and differs from current                                           // 8086
			if ( prev !== "*" && prev !== current ) {                                                                           // 8087
                                                                                                                       // 8088
				// Seek a direct converter                                                                                         // 8089
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];                                         // 8090
                                                                                                                       // 8091
				// If none found, seek a pair                                                                                      // 8092
				if ( !conv ) {                                                                                                     // 8093
					for ( conv2 in converters ) {                                                                                     // 8094
                                                                                                                       // 8095
						// If conv2 outputs current                                                                                      // 8096
						tmp = conv2.split(" ");                                                                                          // 8097
						if ( tmp[ 1 ] === current ) {                                                                                    // 8098
                                                                                                                       // 8099
							// If prev can be converted to accepted input                                                                   // 8100
							conv = converters[ prev + " " + tmp[ 0 ] ] ||                                                                   // 8101
								converters[ "* " + tmp[ 0 ] ];                                                                                 // 8102
							if ( conv ) {                                                                                                   // 8103
								// Condense equivalence converters                                                                             // 8104
								if ( conv === true ) {                                                                                         // 8105
									conv = converters[ conv2 ];                                                                                   // 8106
                                                                                                                       // 8107
								// Otherwise, insert the intermediate dataType                                                                 // 8108
								} else if ( converters[ conv2 ] !== true ) {                                                                   // 8109
									current = tmp[ 0 ];                                                                                           // 8110
									dataTypes.splice( i--, 0, current );                                                                          // 8111
								}                                                                                                              // 8112
                                                                                                                       // 8113
								break;                                                                                                         // 8114
							}                                                                                                               // 8115
						}                                                                                                                // 8116
					}                                                                                                                 // 8117
				}                                                                                                                  // 8118
                                                                                                                       // 8119
				// Apply converter (if not an equivalence)                                                                         // 8120
				if ( conv !== true ) {                                                                                             // 8121
                                                                                                                       // 8122
					// Unless errors are allowed to bubble, catch and return them                                                     // 8123
					if ( conv && s["throws"] ) {                                                                                      // 8124
						response = conv( response );                                                                                     // 8125
					} else {                                                                                                          // 8126
						try {                                                                                                            // 8127
							response = conv( response );                                                                                    // 8128
						} catch ( e ) {                                                                                                  // 8129
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };             // 8130
						}                                                                                                                // 8131
					}                                                                                                                 // 8132
				}                                                                                                                  // 8133
			}                                                                                                                   // 8134
                                                                                                                       // 8135
			// Update prev for next iteration                                                                                   // 8136
			prev = current;                                                                                                     // 8137
		}                                                                                                                    // 8138
	}                                                                                                                     // 8139
                                                                                                                       // 8140
	return { state: "success", data: response };                                                                          // 8141
}                                                                                                                      // 8142
var oldCallbacks = [],                                                                                                 // 8143
	rquestion = /\?/,                                                                                                     // 8144
	rjsonp = /(=)\?(?=&|$)|\?\?/,                                                                                         // 8145
	nonce = jQuery.now();                                                                                                 // 8146
                                                                                                                       // 8147
// Default jsonp settings                                                                                              // 8148
jQuery.ajaxSetup({                                                                                                     // 8149
	jsonp: "callback",                                                                                                    // 8150
	jsonpCallback: function() {                                                                                           // 8151
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );                                         // 8152
		this[ callback ] = true;                                                                                             // 8153
		return callback;                                                                                                     // 8154
	}                                                                                                                     // 8155
});                                                                                                                    // 8156
                                                                                                                       // 8157
// Detect, normalize options and install callbacks for jsonp requests                                                  // 8158
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {                                           // 8159
                                                                                                                       // 8160
	var callbackName, overwritten, responseContainer,                                                                     // 8161
		data = s.data,                                                                                                       // 8162
		url = s.url,                                                                                                         // 8163
		hasCallback = s.jsonp !== false,                                                                                     // 8164
		replaceInUrl = hasCallback && rjsonp.test( url ),                                                                    // 8165
		replaceInData = hasCallback && !replaceInUrl && typeof data === "string" &&                                          // 8166
			!( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") &&                                            // 8167
			rjsonp.test( data );                                                                                                // 8168
                                                                                                                       // 8169
	// Handle iff the expected data type is "jsonp" or we have a parameter to set                                         // 8170
	if ( s.dataTypes[ 0 ] === "jsonp" || replaceInUrl || replaceInData ) {                                                // 8171
                                                                                                                       // 8172
		// Get callback name, remembering preexisting value associated with it                                               // 8173
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?                                              // 8174
			s.jsonpCallback() :                                                                                                 // 8175
			s.jsonpCallback;                                                                                                    // 8176
		overwritten = window[ callbackName ];                                                                                // 8177
                                                                                                                       // 8178
		// Insert callback into url or form data                                                                             // 8179
		if ( replaceInUrl ) {                                                                                                // 8180

}).call(this);






(function () {


}).call(this);


/* Exports */
  $: $,