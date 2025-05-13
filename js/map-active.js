map = new GMaps({
	el: '#myMap',
	lat: 40.6400, // Արթիկի latitude
	lng: 43.8236, // Արթիկի longitude
	scrollwheel:false,
	zoom: 15,
	zoomControl : false,
	panControl : false,
	streetViewControl : true,
	mapTypeControl: false,
	overviewMapControl: false,
	clickable: false
});

var image = 'img/map-marker.png';
map.addMarker({
	lat: 40.6400, // Արթիկի latitude
	lng: 43.8236, // Արթիկի longitude
	icon: image,
	animation: google.maps.Animation.DROP,
	verticalAlign: 'bottom',
	horizontalAlign: 'left',
	backgroundColor: '#efece0',
});
