$(document).ready(function() {
  if ( $('[type="date"]').prop('type') != 'date' ) {
      $('[type="date"]').datepicker();
      console.log('date');
  }
});
