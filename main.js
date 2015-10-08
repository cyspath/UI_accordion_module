$(document).ready(function() {

  $('.accordion-container').click(function() {

    $item = $(this).find('div')
    $item.toggleClass('expanded')


    $otherItem = $('div').not($item)
    $otherItem.removeClass('expanded')

  })

})
