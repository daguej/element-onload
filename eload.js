/* element-onload jQuery plugin
   (c) 2012 Josh Dague
   github.com/daguej
   Dual MIT/GPL licensed. */

 $.fn.loaded = function(opts) {
    var o = $.extend({timeout:10000}, opts) // Merge default options with supplied options
        , r = []; // Return value

    this.each(function() {
        var dfd = new $.Deferred(), el = $(this), to;
        if (o.timeout) to = setTimeout(function() {
            done();
            dfd.reject();
        }, o.timeout);
        el.bind('load.dfdl', function() {
            done();
            dfd.resolve();
        }).bind('error.dfdl', function() {
            done();
            dfd.reject();
        });

        function done() { // internal clean-up
            clearTimeout(to);
            el.unbind('.dfdl');
        }
        r.push(dfd.promise());
    });
    return r;
};

// Optional - cleaner way to pass an array to `$.when`.
$.whenall = function(dfds) { $.when.apply($,dfds); };