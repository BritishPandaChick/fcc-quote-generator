$(document).ready(function () {
  var randomNumber;
  var randomQuote;
  var randomAuthor;
  displayQuote();

  function displayQuote() {
    var wisdom = ["You don't have time to timid. You must be bold. Daring.", "Always let your conscience be your guide.", "The very things that held you down are going to carry you up,and up, and up!", "The flower that blooms in adversity is the most rare and beautiful of all.", "Forget about your worries and your strife.", "You are braver than you believe, stronger than you seem, and smarter than you think.", "Sometimes the right path is not the easiest one.", "If you can't say something nice... don't say nothing at all.", "Knowledge and wisdom is the real power.", "Like so many things, it's not what is outside, but what is inside that counts.", "The past can hurt. But the way I see it, you can either run from it, or learn from it.", "Even miracles take a little time."];
    var characters = ["Lumiere", "Blue Fairy", "Timothy Mouse", "The Emperor", "Baloo", "Christopher Robin", "Grandmother Willow", "Thumper", "Wart", "Narrator", "Rafiki", "Fairy Godmother"];

    randomNumber = Math.floor((Math.random() * wisdom.length));
    randomQuote = wisdom[randomNumber];

    // see element with author id 
    randomAuthor = characters[randomNumber];

    // grabs text and author ids to display quote and author
    $("#text").text(randomQuote);
    $("#author").text(randomAuthor);
  }

  //When #new-quote button clicked, quote machine fetches new quote and displays it in text element
  //When #new-quote button clicked, quote machines fetches new author and displays in in author element
  $("#new-quote").click(function () {
    displayQuote();
  });

  //Tweet current quote by clicking #tweet-quote a element. Includes path in it's attribute to tweet current quote 
  $("#tweet-quote").click(function () {
    var textToTweet = '"' + $("text").text() + '"' + " " + $("#author").text();
    var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);

    $("#tweet-quote").attr("href", tweetLink);
  });

});