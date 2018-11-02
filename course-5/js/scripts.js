$(document).ready(function(){
	var url = "https://test.havefunhub.com/api/event/47";
    // Get the JSON file
    $.getJSON(url, function(data) {
    	console.log(data);
    	$('#eventName').html(data.name);
    	$('#place').html(data.place.name);
    	$('#flyer').html('<img src="https://test.havefunhub.com/hash/'+data.flyerHash+'">');
    	$('#map').html('<iframe width="100%" height="270" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+data.place.latitude+','+data.place.longitude+'&hl=es;z=14&amp;output=embed"></iframe>')
    });
});

$(document).on('click', '#getData', function(){
	var id = $('#eventId').val();
	var url = "https://test.havefunhub.com/api/event/";
	// Get the JSON file
	$.getJSON(url+id, function(data) {
		console.log(data);
		$('#eventName').html(data.name);
		$('#place').html('@'+data.place.name);
		$('#flyer').html('<img src="https://test.havefunhub.com/hash/'+data.flyerHash+'">');
		$('#map').html('<iframe width="100%" height="270" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+data.place.latitude+','+data.place.longitude+'&hl=es;z=14&amp;output=embed"></iframe>')
	});
});