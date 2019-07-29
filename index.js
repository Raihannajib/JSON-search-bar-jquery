// updated
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);




//  old version
//
// function expand() {
//   $(".search").toggleClass("close");
//   $(".input").toggleClass("square");
//   if ($('.search').hasClass('close')) {
//     $('input').focus();
//   } else {
//     $('input').blur();
//   }
// }
// $('button').on('click', expand);
//



$(document).ready(function(){

  

    $.ajaxSetup({ cache: false });
    
     $('#search-input').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search-input').val();
     var expression = new RegExp(searchField, "g");
     $.getJSON('data.json',  function(data) {
        $.each(data, function(key, value){
         if (value.name.search(expression) == 1 || value.email.search(expression) == 1 )
         {
          $('#result').append('<li class="list-group-item link-class"><span class="text-muted">'+value.name+'| '+value.location+' | '+value.email+'</span></li>');
         }
        });   
       });
   });


   $('#result').on('click', 'li', function() {
    var click_text = $(this).text().split('|');
    $('#search-input').val($.trim(click_text[0]));
    $("#result").html('');
   });
  });
