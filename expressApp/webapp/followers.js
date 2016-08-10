function getFollowers() {
	//var followers = [{userID:'ABC'},{userID:'QWE'},{userID:'DFG'},{userID:'zxcvb'},{userID:'r64saa'}];
	
	ajaxHandler("/followedtweets/abu", function (followers) {

		var followerDiv = document.getElementById("followerlist");
		var htmlStr = "";
		for(var i = 0; i < followers.length; i++) {
			htmlStr += "<div>";
			htmlStr += "<div class='floatDiv'><a href='personal.html'><img src='avatar/" + followers[i]["USERID"] + ".jpg' width='50'></a></div>";
			htmlStr += "<div class='floatDiv'><a href='personal.html'><span class='tweetUserID'>" + followers[i]["USERID"] + "</span>" + "</a></div>";
			htmlStr += "<div style='color:#888'>" + followers[i]["DATE"] + "</div>";
			htmlStr += "<div>" + followers[i]["TWEET"] + "</div>";
			htmlStr += "</div>";
		}
		followerDiv.innerHTML = htmlStr;
	});
}