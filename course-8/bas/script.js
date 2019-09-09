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
    if (data.id==4) {
    var image = "https://s3.amazonaws.com/tinycards/image/2847356dd2be7d6b2b4ee47405112017";
    } else {
    var image = data.picture;
    
    }
    
    return '<li><a href="'+data.video+'" class="box">' +
        '<h1>'+data.name+'</h1>' +
        '<img src="'+image+'">' +
        '<p>'+data.fun_fact+'</p>'+
        '</a></li>';
}