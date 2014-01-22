$(window).resize(function() {
  $('#wrapper').css({
    top: ($(window).height() - $('#content').outerHeight()) / 2
  });
});

$(window).load(function() {
  $(window).resize();
});
