var min_w = 300; // minimum video width allowed
var vid_w_orig;  // original video dimensions
var vid_h_orig;

jQuery(function() { // runs after DOM has loaded
    
    vid_w_orig = parseInt(jQuery('video').attr('width'));
    vid_h_orig = parseInt(jQuery('video').attr('height'));
    $('#debug').append("<p>DOM loaded</p>");
    
    jQuery(window).resize(function () { resizeToCover(); });
    jQuery(window).trigger('resize');
});

function resizeToCover() {
    
    // set the video viewport to the window size
    jQuery('#video-viewport').width(jQuery(window).width());
    jQuery('#video-viewport').height(jQuery(window).height());

    // use largest scale factor of horizontal/vertical
    var scale_h = jQuery(window).width() / vid_w_orig;
    var scale_v = jQuery(window).height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    // now scale the video
    jQuery('video').width(scale * vid_w_orig);
    jQuery('video').height(scale * vid_h_orig);
    // and center it by scrolling the video viewport
    jQuery('#video-viewport').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
    jQuery('#video-viewport').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);
    
    // debug output
    jQuery('#debug').html("<p>win_w: " + jQuery(window).width() + "</p>");
    jQuery('#debug').append("<p>win_h: " + jQuery(window).height() + "</p>");
    jQuery('#debug').append("<p>viewport_w: " + jQuery('#video-viewport').width() + "</p>");
    jQuery('#debug').append("<p>viewport_h: " + jQuery('#video-viewport').height() + "</p>");
    jQuery('#debug').append("<p>video_w: " + jQuery('video').width() + "</p>");
    jQuery('#debug').append("<p>video_h: " + jQuery('video').height() + "</p>");
    jQuery('#debug').append("<p>vid_w_orig: " + vid_w_orig + "</p>");
    jQuery('#debug').append("<p>vid_h_orig: " + vid_h_orig + "</p>");
    jQuery('#debug').append("<p>scale: " + scale + "</p>");
};