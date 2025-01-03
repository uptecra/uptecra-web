(function($) {
    'use strict';

    var like = {};
    
    like.edgtfOnDocumentReady = edgtfOnDocumentReady;

    $(document).ready(edgtfOnDocumentReady);
    
    /**
    *  All functions to be called on $(document).ready() should be in this function
    **/
    function edgtfOnDocumentReady() {
        edgtfLikes();
    }

    function edgtfLikes() {

        $(document).on('click','.edgtf-like', function() {
            var likeLink = $(this),
                id = likeLink.attr('id'),
                type;

            if ( likeLink.hasClass('liked') ) {
                return false;
            }

            if (typeof likeLink.data('type') !== 'undefined') {
                type = likeLink.data('type');
            }

            var dataToPass = {
                action: 'fluid_edge_like',
                likes_id: id,
                type: type,
				like_nonce: $('#edgtf_like_nonce_'+postID).val()
            };

            var like = $.post(edgtfLike.ajaxurl, dataToPass, function( data ) {
                likeLink.html(data).addClass('liked').attr('title', 'You already like this!');
	
	            if(type !== 'portfolio_list') {
		            likeLink.children('span').css('opacity', 1);
	            }
            });

            return false;
        });
    }
    
})(jQuery);