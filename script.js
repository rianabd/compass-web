document.addEventListener('DOMContentLoaded', function () {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function (event) {
        var alpha = event.alpha;
        if (alpha !== null) {
          var arrow = document.getElementById('arrow');
          arrow.style.transform = 'translateX(-50%) rotate(' + alpha + 'deg)';
        }
      });
    } else {
      alert('Device orientation not supported.');
    }
  });
  