$(document).ready(function () {
  $('.select2').select2({
    width: '100%',
    placeholder: function () {
      return $(this).data('placeholder');
    },
  });
});
