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





































            ,/8
            
            return true;
        });
        
        return true;
    });
    