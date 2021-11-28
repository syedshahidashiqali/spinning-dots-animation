window.addEventListener('load', function() {

    // 0 / 7 * 360 = 0
    // 1 / 7 * 360 = 51
    // 2 / 7 * 360 = 102
    // 3 / 7 * 360 = 154
    // 4 / 7 * 360 = 205
    // 5 / 7 * 360 = 257
    // 6 / 7 * 360 = 308
    var dots = document.querySelectorAll('.dot');
    for (var i = 0; i < dots.length; ++i) {
      var dot = dots[i];
      var start = (i / dots.length) * 360;
      var frames = [
        {transform: `rotate(${start}deg) translate(80px)`},
        {transform: `rotate(${360-(i*5)}deg) translate(80px)`}
        // {transform: 'rotate(' + start + 'deg) translate(80px)'},
        // {transform: 'rotate(' + (360-(i*5)) + 'deg) translate(80px) '},
      ];
      var timing = {
        duration: 2500,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out',
      };
      dot.animate(frames, timing);
    }
  });