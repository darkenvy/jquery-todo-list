function taskMaker(taskname) {
  return '<div class="task"><div class="name">' +
    taskname + '</div><div class="cancel">X</div></div>';
}

function addTask() {
  if ($('#text-input').val()) {
    $('.body').append(taskMaker($('#text-input').val()));
    $('#text-input').val('');
  }
  $('#text-input').focus();
}

$(document).ready(function() {
  // Add new task to list
  $('#btn-add').click(function() {
    addTask();
  });
  $('#text-input').keypress(function(e) {
    if (e.which === 13) {
      addTask();
    }
  });

  // Remove Button
  $('.body').on('click', '.task .cancel', function() {
    $(this).parent().remove();
  });
});
