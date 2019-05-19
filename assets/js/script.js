$(document).ready(function(){
  var randomQuote;
  var randomNumber;
  var author;
  getQuote();

 function getQuote(){
    var quotes = ["But she warned him not to be deceived by appearances, for beauty is found within.", "For who could ever learn to love a beast?", "Well, some people use their imaginations.", "Well, don't you worry, cause this invention's going to be the start of a new life for us.", "Not a word, Lumiere. Not one word!", "So, you've come to stare at the beast, have you?", "It'll turn out all right in the end. You'll see.", "Be Our Guest", "Well, there's the usual things--flowers, chocolates, promises you don't intend to keep...", "Tale as old as time", "Take it with you, so you'll always have a way to look back, and remember me.", "Because , I love her.", "Show me the beast!", "Please don't leave me. I love you.", "Belle! It's me!","Are they gonna live happily ever after, Mama?", "Do I still have to sleep in the cupboard?"];
    var author1 = ["-the Narrator", "-the Narrator", "-Belle", "-Maurice", "-Cogsworth", "-Beast", "-Mrs. Potts","-Lumiere", "-Cogsworth", "-Mrs.Potts", "-Beast", "-Beast", "-Belle", "-Belle", "-Prince","-Chip","-Chip"];

    randomNumber = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNumber];
    author = author1[randomNumber];

    $(".quote").text(randomQuote);
    $(".author").text(author);
  }

    $('#tweet').on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + author);
  });

  $("#newQuote").on("click", function(){
    getQuote();
  });

});
