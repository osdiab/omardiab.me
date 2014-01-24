// for button animations
jQuery.Color.hook('fill stroke');

// --------------
// resizing logic
// --------------
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

$(document).ready(function() {
  $('img').each(function(index, elem) {
    $(elem).load(function() {
      $(window).resize();
    });
  });
});

$(window).load(function() {
  $(window).resize();
});

// --------------------
// initialization logic
// --------------------
$(document).ready(function() {
  // Replace svg's with png's if browser doesn't support it.
  if (!Modernizr.svg) {
    var elemsToReplace = [];
    $('object').each(function(index, elem) {
      var type = $(elem).attr('type');
      if (type !== undefined && type === 'image/svg+xml') {
        var old_data = $(elem).attr('data');
        var new_data = old_data.substring(old_data.lastIndexOf('.') + 1) +
                                          '.png';
        $(elem).attr({
          type: 'image/png',
          data: new_data
        });
      }
    });
  }
});

// -----------------
// Highlighter class
// -----------------
var Highlighter = function() {
  var types = ['fill', 'stroke'];
  var normal_color = '#FFF';
  var highlight_color = '#FF6D00';
  var cache = {};
  types.forEach(function(type, index, arr) {
    cache[type] = [];
  });

  // for fallback to pngs
  var highlight_png = function(service, id, highlight) {
    var img_path = '/img/service/' + service;
    if (highlight) {
      img_path += '-hl';
    }

    img_path += '.png';
    $(elem).attr('data', img_path);
  };

  // (un)highlights a particular svg element
  var update_svg_elem = function(elem, type, highlight) {
    var color = normal_color;
    if (highlight) {
      color = highlight_color;
    }

    var change = {};
    change[type] = color;
    $(elem).animate(change, 200);
  };

  // finds all svgs to (un)highlight for a service, and executes
  var highlight_svg = function(service, elem, highlight) {
    var svg_elem = $(elem).get()[0].contentDocument;

    types.forEach(function(type, index, arr) {
      if (cache[type][service] !== undefined) {
        cache[type][service].forEach(function(elem, index, arr) {
          update_svg_elem(elem, type, highlight);
        });
      } else {
        cache[type][service] = [];
        $(svg_elem).find('*[' + type + ']').each(function(index, elem) {
          // cache
          cache[type][service].push(elem);
          // act
          update_svg_elem(elem, type, highlight);
        });
      }
    });
  };

  /**
   * Highlights a service button
   * @param {string} service
   * @param {bool} highlight
   */
  this.highlight_service = function(service, highlight) {
    var elem = $('#' + service + '-btn');

    var src = elem.attr('data');
    var type = $(elem).attr('type');
    if (type === undefined) return;
    if (type === 'image/svg+xml') {
      highlight_svg(service, elem, highlight);
    } else if (type === 'image/png') {
      highlight_png(service, elem, highlight);
    }
  };
};

highlighter = new Highlighter();
