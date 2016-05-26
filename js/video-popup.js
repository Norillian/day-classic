$(document).ready(function(){

    //<a class="vimeo-player" href="#" rel="http://player.vimeo.com/video/163843154?autoplay=1"><img src="/images/editor/video-banner/day_video_images.jpg" alt="watch video" /></a>

    // Test if .vimeo-player exist before creating the element
    if($('.vimeo-player').length > 0) {
        $('body').append('<a class="vimeo-player-overlay" style="display:none;"></a>');
        $('body').append('<div class="vimeo-player-container" style="display:none;"><div class="vimeo-player-wrap"><div class="vimeo-player-content"></div></div></div>');
    }

    // Handle closing of the video and overlay
    $('.vimeo-player-overlay').on( "click", function() {
        $('.vimeo-player-overlay').hide();
        $('.vimeo-player-container').hide();
        $('.vimeo-player-container .vimeo-player-wrap .vimeo-player-content iframe').remove();
    });

    // Handle the opening of the video
    $('.vimeo-player').on( "click", function() {
        getRelLnk = $(this).attr('rel');

        buildIframe = $('<iframe></iframe>');
        buildIframe.attr('src', getRelLnk);
        buildIframe.attr('width', '890');
        buildIframe.attr('height', '500');
        buildIframe.attr('frameborder', '0');
        buildIframe.attr('webkitallowfullscreen', '');
        buildIframe.attr('mozallowfullscreen', '');
        buildIframe.attr('allowfullscreen', '');
        $('.vimeo-player-container .vimeo-player-wrap .vimeo-player-content').append(buildIframe);

        $('.vimeo-player-overlay').show();
        $('.vimeo-player-container').show();
    });

});
