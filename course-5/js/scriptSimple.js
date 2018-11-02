var urlEvents = "https://test.havefunhub.com/api/event/"+47;
$(document).ready(function(){
	getEventData(urlEvents);
});

$(document).on('click', '#getData', function(){
	getEventData(urlEvents);
});

function getEventData(url) {
	$.getJSON(url, function(data) {
		console.log(data);
		$('#eventName').html(data.name);
		$('#place').html('@'+data.place.name);
		$('#flyer').html('<img src="https://test.havefunhub.com/hash/'+data.flyerHash+'">');
		$('#map').html('<iframe width="100%" height="270" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+data.place.latitude+','+data.place.longitude+'&hl=es;z=14&amp;output=embed"></iframe>')
	});
}
