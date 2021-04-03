//const port = process.env.PORT;

$(document).ready(function() {
    $.ajax({
        url: `http://localhost:3000/search`
    }).then(function(data) {

        for (i = 0; i < data.result.length; i++) {
          $('#search').append("<ul><li>"+data.result[i].name+"</li></ul>");
        }

    });
});
