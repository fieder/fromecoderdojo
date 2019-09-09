$.ajax({
    url: "https://dtawyo8d49.execute-api.us-east-1.amazonaws.com/test/animals",
    dataType: 'json'
}).done(function(data) {
    var dataBody = data.body;
    var jsonData = JSON.parse(data.body);
    for (var i = 0; i < jsonData.animals.length; i++) {
        var animal = jsonData.animals[i];
        $('.animals').append(appendAnimalBox(animal));
    }
});

function appendAnimalBox(data) {
        if (data.name == 'Tiger') {
        var video = "https://youtu.be/jz4kA36me_0";
    } else {
      var video = data.video;
    }
    return '<li><a target="_blank" href="'+video+'" class="box">' +
        '<h1>'+data.name+'</h1>' +
        '<img src="'+data.picture+'">' +
        '<p>'+data.fun_fact+'</p>'+
        '</a></li>';
}