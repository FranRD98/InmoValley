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
