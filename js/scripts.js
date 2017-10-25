//
(function($) {
	const toggleIcon = function () {
            let $el = $(this), $angle = $el.prev().find('i.fa:first');
            const downClass = 'fa-angle-down', upClass = 'fa-angle-up', css = {"font-size":"16px","color":"#c7c7c7"};
            $angle.hasClass(upClass) ? $angle.removeClass(upClass).addClass(downClass) : $angle.removeClass(downClass).addClass(upClass);
            $angle.css(css);
        }
		
	$('.collapse').on('show.bs.collapse hide.bs.collapse', toggleIcon);
	
})(jQuery);