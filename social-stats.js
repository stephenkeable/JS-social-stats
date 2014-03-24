$(document).ready(function() {
	var the_count = 0;
	$("#the_button").click(function(e) {
		e.preventDefault();
		
		var twit_base = "http://urls.api.twitter.com/1/urls/count.json?url=";
		var face_base = "http://graph.facebook.com/";
		var link_base = "http://www.linkedin.com/countserv/count/share?url=";
		
		var the_url = $("#the_url").val();

		the_count++;
		
		$("#results tbody").append("<tr id='row-"+the_count+"'><td class='url'>"+the_url+"</td><td class='fb'></td><td class='twit'></td><td class='in'></td></tr>");
		
		get_stats(the_url, twit_base, "twit", "count", the_count);
		get_stats(the_url, face_base, "fb", "shares", the_count);
		get_stats(the_url, link_base, "in", "fCnt", the_count);
		
	});
});

function get_stats(the_url, the_base, the_class, the_label, the_count) {
	$.ajax({
		type: 'GET',
		url: the_base + the_url,
		dataType: "jsonp",
		success: function(data) {
			$("#row-" + the_count + " ." + the_class).text(data[the_label]);
		}
	});
}