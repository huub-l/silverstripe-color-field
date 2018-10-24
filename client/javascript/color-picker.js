;
(function ($) {
  $.entwine('boilerplate', function ($) {
    $(document).on('click', function (e) {
      if (!$(e.target).is('.color-picker, .iris-picker, .iris-picker-inner')) {
        $('.color-picker').iris('hide');
      }
    });
    $('.color-picker').entwine({
      onmatch: function () {
        var palettes = $('.color-picker').data('palette');
        $('.color-picker').iris({
          palettes: palettes,
          change: function (event, ui) {
            var $c, $r, $g, $b, $mid;
            $(this).css('backgroundColor', ui.color.toString());
          }
        });
        this.on('click', function (e) {
          $('.colour-picker').iris('hide');
          $(this).iris('show');
        });
        this._super();
      },
      onunmatch: function () {
        this._super();
      }
    });
  });
})(jQuery);
