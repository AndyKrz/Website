$(function() {
    $('#sidenav a').click(function (e) {
        e.preventDefault();
        
        simpleScrollTo($(this).attr('href'), 500);
    });
    
    $(window).scroll(function() {
        var ds = $(document).scrollTop();
        
        if (ds == 0) {
            $('#sidenav a').removeClass('active');
            $('#sidenav a[href=#' + $('.anchor').eq(0).attr('id') + ']').addClass('active');
            
            return false;
        }
        
        $('.anchor').each(function() {
            var $this = $(this), offset = Math.round($this.offset().top), height = $this.outerHeight() + offset;
            
            if (offset <= ds && height > ds) {
                $('#sidenav a').removeClass('active');
                $('#sidenav a[href=#' + $this.attr('id') + ']').addClass('active');
                if (document.location.hash != '#' + $this.attr('id')) {
                    var cds = $(document).scrollTop();
                    document.location.hash = $this.attr('id');
                    $(document).scrollTop(cds);
                }
                
                return false;
            }

            (function($) {

                /**
                 * Copyright 2012, Digital Fusion
                 * Licensed under the MIT license.
                 * http://teamdf.com/jquery-plugins/license/
                 *
                 * @author Sam Sehnert
                 * @desc A small plugin that checks whether elements are within
                 *     the user visible viewport of a web browser.
                 *     only accounts for vertical position, not horizontal.
                 */
              
                $.fn.visible = function(partial) {
                  
                    var $t            = $(this),
                        $w            = $(window),
                        viewTop       = $w.scrollTop(),
                        viewBottom    = viewTop + $w.height(),
                        _top          = $t.offset().top,
                        _bottom       = _top + $t.height(),
                        compareTop    = partial === true ? _bottom : _top,
                        compareBottom = partial === true ? _top : _bottom;
                  
                  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
              
                };
                  
              })(jQuery);
              
              var win = $(window);
              
              var allMods = $(".module");
              
              allMods.each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                  el.addClass("already-visible"); 
                } 
              });
              
              win.scroll(function(event) {
                
                allMods.each(function(i, el) {
                  var el = $(el);
                  if (el.visible(true)) {
                    el.addClass("come-in"); 
                  } 
                });
                
              });
              



































            
            
            return true;
        });
        
        return true;
    });
    