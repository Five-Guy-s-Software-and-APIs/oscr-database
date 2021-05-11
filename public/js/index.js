$(document).ready(function() {
    $("#searchbar").load("/public/searchbar");

    // $("#sub_button").click(function(){
    //     $.get("/search", {
    //       year_film : document.getElementById("fyear").value,
    //       name : document.getElementById("name").value,
    //       category : document.getElementById("category").value,
    //       winner : document.getElementById("winner")
    //     }, (data) => {
    //         $(document).load(search.formatSearchResult(data));
    //     });
    // });
})