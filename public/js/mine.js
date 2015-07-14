SC.initialize({
  client_id: '4d2775cba1f8e07e166a0b7de43b1bd3'
});

$(document).ready(function() {
	var track_url = 'http://soundcloud.com/forss/flickermood';
	SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
  		console.log('oEmbed response: ' + oEmbed);
	});
});