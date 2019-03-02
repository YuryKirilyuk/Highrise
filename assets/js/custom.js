/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   
	jQuery(window).scroll(function() {

        scrollSections();

	});

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */
   
	jQuery(window).resize(function() {
		
		
	});


    jQuery(window).on('load', function() {

        if(!(jQuery(document.body).hasClass('home'))) {
            jQuery('#top-menu').find('a').each(function(){
                var link = jQuery(this);
                    href = link.attr('href');

                if(!(jQuery(href).length)) {
                    link.attr('href', '/' + href);
                }
            });
        }
    });


function scrollSections() {
    var offset = getSections();

    for( var i=0; i < offset.length; i++) {
        if(window.pageYOffset >= offset[i].sectionOffTop - 130) {
            jQuery('#top-menu a[href=#' + offset[i].sectionId + ']').parent().addClass('current').siblings().removeClass('current');
        } else {
            jQuery('#top-menu a[href=#' + offset[i].sectionId + ']').parent().removeClass('current');
        }

    }
}

function getSections() {
    var sections = [];

    jQuery('#et-boc .et_pb_section').each(function(index){
        var section = jQuery(this),
            sectionOffTop = section.offset().top,
            sectionId = section.attr('id');

        sections[index] = {
            'el': section,
            'sectionId': sectionId,
            'sectionOffTop': sectionOffTop
        }
    });

    return sections;
}