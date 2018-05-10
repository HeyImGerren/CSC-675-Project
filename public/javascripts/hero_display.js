$( "document" ).ready( function() {
  $("#marvelButton").on('click', function() {
    console.log("clicked the marvel button");
    const dataObject = {
      publisher: "Marvel Comics"
    };

    $.ajax({
      type: 'GET',
      url: '/marvel',
      data: dataObject,
      success: function( results ){
        console.log(results);
        console.log("got into the success function")

      },
      error: function() {
        console.log("Error in marvel ajax call");
      } 
    })
  });
  $("#dcButton").on('click', function() {
    console.log("clicked the dc button");
  });
  $("#allButton").on('click', function() {
    console.log("clicked the all button");
  });
});