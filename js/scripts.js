// HEADER
$(document).ready(function () {
  $('#propiedadesDropdown').click(function (e) {
    e.preventDefault(); // evita seguir el enlace
    var menu = $(this).next('.dropdown-menu');
    if (menu.css('opacity') == 1) {
      menu.css('opacity', 0).css('visibility', 'hidden');
    } else {
      $('.dropdown-menu').css('opacity', 0).css('visibility', 'hidden'); // cierra otros
      menu.css('opacity', 1).css('visibility', 'visible');
    }
  });

  // Cierra el menú si haces click fuera
  $(document).click(function (e) {
    if (!$(e.target).closest('.dropdown').length) {
      $('.dropdown-menu').css('opacity', 0).css('visibility', 'hidden');
    }
  });
});

// PLACEHOLDER DEL FORM SEARCH
$(document).ready(function () {
  $('.select2').select2({
    width: '100%',
    placeholder: function () {
      return $(this).data('placeholder');
    },
  });
});

// Cambiar fondo en sección "FUTURE"
$(document).ready(function () {
  var $bgImages = $('#future-bg .bg-image');

  $('.mini-card').hover(function () {
    var index = $(this).data('bg-index');
    $bgImages.css('opacity', 0);
    $bgImages.eq(index).css('opacity', 1);
  });
});

// ===================== Parallax en jQuery =====================
$(document).ready(function () {
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var $block = $('#block-section');
    var $img = $block.find('.img-parallax');

    // Solo si la imagen existe
    if ($img.length) {
      // Calculamos la posición relativa del bloque
      var offset = $block.offset().top;
      var height = $block.outerHeight();

      if (scrollTop + $(window).height() > offset && scrollTop < offset + height) {
        // Velocidad de parallax
        var speed = -0.3;
        var yPos = (scrollTop - offset) * speed;
        $img.css('transform', 'translate(-50%, calc(-50% + ' + yPos + 'px))');
      }
    }
  });
});
