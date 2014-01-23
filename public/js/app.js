$(window).resize(function() {
  // center page content vertically and horizontally
  $('#wrapper').css({
    top: ($(window).height() - $('#content').outerHeight()) / 2
  });

  $('#logo_stripe').css({
    top: $('#logo_pane').position().top,
    height: $('#logo_pane').outerHeight()
  });

  $('#me').css({
    height: $('#left').height()
  });

  $('#left').css({
    width: $('#name').height()
  });
});

$(window).load(function() {
  $(window).resize();
  $(window).resize(); // TODO: hacky, find out why this occurs
});
