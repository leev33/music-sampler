$(document).ready(function() {


  function hideAll() {
    $('#fourcover').hide();
    $('#madeintheamcover').hide();
    $('#midnightmemoriescover').hide();
    $('#takemehomecover').hide();
  }


  hideAll();


  $('.albumCover').click(function() {


    hideAll();


    switch ($(this).attr("id")) {
      case "four":
        $('#fourcover').show();
        break;
      case "madeintheam":
        $('#madeintheamcover').show();
        break;
      case "midnightmemories":
        $('#midnightmemoriescover').show();
        break;
      case "takemehome":
        $('#takemehomecover').show();
        break;
    }
  });

});
