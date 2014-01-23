$(window).resize(function() {
  // affects document height, in document flow: resize first.
  $('#left').css({
    width: $('#name').height()
  });

  $('#me').css({
    height: $('#left').height() + parseInt($('#left').css('padding-top'))
  });

  // not in document flow, dependent on positions; do last
  $('#credit_bg').css({
    height: $('#credit_contents').height(),
    width: $('#credit_contents').width(),
    left: $('#credit_contents').offset().left,
    top: $('#credit_contents').offset().top
  });

  $('#shade').css({
    height: $('body').height()
  });

  $('#logo_stripe').css({
    top: $('#logo_pane').position().top,
    height: $('#logo_pane').outerHeight()
  });
});

$(window).load(function() {
  $(window).resize();
});
