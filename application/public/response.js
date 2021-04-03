//const port = process.env.PORT;

$(document).ready(function() {
    $("search").submit(function(event) {
        event.preventDefault()
        var $form = $(this);
        $.getJSON($form.attr('action')).then(function(data) {
        for (i = 0; i < data.result.length; i++) {
          $('#output-table').append("<ul><li>"+data.result[i].name+"</li></ul>");
        }
    });
});
