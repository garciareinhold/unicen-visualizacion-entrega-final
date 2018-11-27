let cb = new Codebird;
cb.setConsumerKey("GXHvXL3yymyX8nR7W8mViWv3w", "pWKBd3iuk8qphE0RbVQQZIGkjwMDFQLcr24x9O8nZTZkZBxWeo");
cb.setToken("937421810768973830-vJzqMUlmjn6hlsrdS2o9ZJftmw8hCtA", "88CHhk5JvZTH59xWCiQ54mtpPUHr5TtGm9RutwcyVM9M8");
console.log(cb);

let tweets;

let params = {
    q: "blackops",
    tweet_mode: "extended"
};

cb.__call(
    "search_tweets",
    params,
    getTweets
);


function getTweets (reply) {
  console.log(reply);
  tweets= reply.statuses;
  printStatuses(tweets);
}

function printStatuses(tweets) {
  for (let i = 0; i < tweets.length; i++) {
    let mediaContainer= document.createElement("div");
    $(mediaContainer).addClass("media");

    let image= document.createElement("img");
    $(image).addClass("align-self-start mr-3 img-photo");
    $(image).attr("src" , tweets[i].user.profile_image_url_https);

    let mediabody= document.createElement("div");
    $(mediabody).addClass("media-body");

    let title= document.createElement("h5");
    $(title).addClass("mt-0");
    $(title).append(tweets[i].user.name);

    let text= document.createElement("p");
    $(text).append(tweets[i].full_text);

    let text_data=document.createElement("p");

    if(tweets[i].retweet_count <= 5){
      $(text_data).append("<div class='retweet-container'><strong>Created at:</strong> "+tweets[i].user.created_at+ "<div class='retweet'><div class='dot dot-1'><strong>RT</strong>"+tweets[i].retweet_count+"</div></div></div>");
    }
    else if(tweets[i].retweet_count <=30){
      $(text_data).append("<div class='retweet-container'><strong>Created at:</strong> "+tweets[i].user.created_at+ "<div class='retweet'><div class='dot dot-2'><strong>RT</strong>"+tweets[i].retweet_count+"</div></div></div>");
    }
    else{
      $(text_data).append("<div class='retweet-container'><strong>Created at:</strong> "+tweets[i].user.created_at+ "<div class='retweet'><div class='dot dot-3'><strong>RT</strong>"+tweets[i].retweet_count+"</div></div></div>");
    }


    if(tweets[i].place!=null){
      $(text_data).append(" Location:"+tweets[i].place.country);
      $(text_data).append(" "+tweets[i].place.name);
    }

    $(mediabody).append(title);
    $(mediabody).append(text);
    $(mediabody).append(text_data);
    $(mediaContainer).append(image);
    $(mediaContainer).append(mediabody);

    $('#comments-panel').append(mediaContainer);

    $('#comments-panel').append("<hr class='comments-divider'>");


  }
}
