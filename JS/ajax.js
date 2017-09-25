$().ready(function() {

$.getJSON("http://date.jsontest.com",
	function(json) {
	console.log(json);
	debugJSONx(json);
		});
});

function debugJSONx(json) {
    console.log(json["time"], json["milliseconds_since_epoch"], json["date"]);
}