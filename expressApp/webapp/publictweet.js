function getPulicTweet() {

	ajaxHandler("/tweets/abu", function (tweets) {

	var publictweet = document.getElementById("publictweet");
		var htmlStr = "";
		for(var i = tweets.length -1; i >= 0; i--) {
			htmlStr += "<div class='tweetItem'>";
			htmlStr += "<div class='floatDiv'><a href='personal.html'><img src='avatar/" + tweets[i]["USERID"] + ".jpg' width='50'></a></div>";
			htmlStr += "<div class='floatDiv'><div><a href='personal.html'><span class='tweetUserID'>" + tweets[i]["USERID"] + "</span></a><span class='tweetDate'>" + tweets[i]["DATE"] + "</span></div>";
			htmlStr += "<div class='tweetMsg'>" + tweets[i]["TWEET"] + "</div>";
			htmlStr += "<div><img src='images/tweet_" + i + ".jpg' width='500'></div></div>";
			htmlStr += "</div>";
		}
		publictweet.innerHTML = htmlStr;
		
	});
}