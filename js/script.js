console.log('script');

var myKey=JSON.parse(myKey);

$.ajax({
  url : 'https://api.unsplash.com/topics/animals/photos?page=1&client_id='+myKey[0].key,
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    var i;
    for (i=0;i<data.length;i++){
       document.getElementById('objects').innerHTML +=
       '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
          '<div class="card mt-3 ml-5" style="width: 18rem;">' +
            '<div class="card-body">'+
            '<img src="'+ data[i].urls.thumb +'" class="card-img-top">' +
              '<h5 class="card-title">'+ data[i].alt_description +'</h5>'+

             '<p class="card-text"> Color: ' + data[i].color+  '<br>' +
               'Height: ' + data[i].height + '<br>' +
               'Width: ' + data[i].width + '<br>' +
               'Likes: ' + data[i].likes +'</p>' +

           '</div>'+
          '</div>'+
       '</div>';
    } //for loop
  },  //success
  error : function(){
    console.log('error');
  } //error
}); //ajax
