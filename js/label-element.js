$(document).on('added-test removed-test added-cms removed-cms',  function(event) {
  var $testSteps = $(event.wrapper).children('.form-step');
  var title = event.title;
  $testSteps.each(function (index, element){
    index = index + 1;
    $(element).find('.label-element').text(title + ' - ' + index);
  })
});
