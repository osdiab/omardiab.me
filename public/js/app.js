$(window).resize(function() {
  $('#wrapper').css({
    marginBottom: -$('#credit').outerHeight()
  });

  $('#logo_stripe').css({
    top: $('#logo_pane').position().top,
    height: $('#logo_pane').outerHeight()
  });

  $('#me').css({
    height: $('#left').height() + parseInt($('#left').css('padding-top'))
  });

  $('#left').css({
    width: $('#name').height()
  });

  $('#shade').css({
    height: $(document).height()
  });

  $('#credit_bg').css({
    height: $('#credit_contents').height(),
    width: $('#credit_contents').width(),
    left: $('#credit_contents').offset().left,
    top: $('#credit_contents').offset().top
  });
});

$(window).load(function() {
  $(window).resize();
  $(window).resize(); // TODO: hacky, find out why this occurs
});
