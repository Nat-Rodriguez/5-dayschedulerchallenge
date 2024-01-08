$(document).ready(function () {
    // Save button clicks
  $('.saveBtn').on('click', function () {

    var clickedBtn = $(this);
    var descriptionValue = clickedBtn.siblings('.description').val();
    var parentID = clickedBtn.parent().attr('id');

    //save in local storage
    localStorage.setItem(parentID, descriptionValue);
  });

  // Update time blocks' classes based on the current hour 
  //past, present, and future classes
  function updateBlocks() {

    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).addClass('past').removeClass('present future');
      } else if (blockHour === currentHour) {
        $(this).addClass('present').removeClass('past future');
      } else {
        $(this).addClass('future').removeClass('past present');
      }
    });
  }

  updateBlocks();

  // Update time blocks' classes every 15 seconds
  setInterval(updateBlocks, 15000);

  // Load saved data from localStorage for specific time blocks
  for (var i = 9; i <= 17; i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
  }

    // Display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
