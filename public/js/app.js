$(window).resize(function() {
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

  $('#shade').css({
    height: $(document).height()
  });

  $('#credit_bg').css({
    height: $('#credit').height(),
    width: $('#credit').width()
  });
});

$(window).load(function() {
  $(window).resize();
  $(window).resize(); // TODO: hacky, find out why this occurs
});
