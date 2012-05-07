element onload
==============

This small jQuery plugin will help you track the load state of multiple elements, such as `<img>`s.

Usage
-----

Call `.loaded()` on a jQuery collection.

    $('#container img').loaded();

Unlike other jQuery plugins, `loaded` does not return `jQuery`; it is not chainable.  Instead, `loaded` returns an array of [`Deferred`s](http://api.jquery.com/category/deferred-object/).  Each `Deferred` is resolved when its associated element's `load` event is fired; or rejected when its element's `error` event is fired, or if the timeout (default: 10 seconds) expires.

Of course, you have to do something with the `Deferred`s you get back from this plugin.

    $.whenall( $('#container img').loaded() ).done(function() {
    	// all of the images loaded successfully
    }).fail(function() {
    	// one of the images failed to load or timed out
    });

(`whenall` is an extension that `apply`s an array to `$.when`.)

[See a demo.](http://jsfiddle.net/josh3736/Gamh8/)