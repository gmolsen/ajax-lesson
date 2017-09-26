$().ready(function() {

	function getVendor(id) {
	$.getJSON(
			"http://prs.gregorydoud.net/Vendors/Get/" + id,
			function(vendor) {
				console.log(vendor);
				}
			);
		}
	$("button").click(function() {
		var vendorId = $("#inputId").val();
		getVendor(vendorId);
	});

// $.getJSON("http://date.jsontest.com",
// 	function(json) {
// 	console.log(json);
// 	debugJSONx(json);
// 		});

// $.getJSON("http://ip.jsontest.com",
//  	function(ipdata) {
//  	console.log("My IP is", ipdata["ip"]);
//  		});

// $.getJSON("http://md5.jsontest.com/?text=911_inside_job",
//  	function(md5) {
//  	console.log("md5: ", md5["md5"], "original: ", md5["original"]);
//  		});


// $.getJSON("http://prs.gregorydoud.net/Vendors/Listg")

// console.log("this is after IP");

// function debugJSONx(json) {
//     console.log(json["time"], json["milliseconds_since_epoch"], json["date"]);
// }

}); //end ready